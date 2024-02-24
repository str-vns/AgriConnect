const User = require("../models/user");
const sendToken = require("../utility/jwtToken");
const sendEmail = require("../utility/sendEmail");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary");
const { TopologyDescription } = require("mongodb");
const Farmer = require("../models/farmer");
//Crud for user

//CREATE
exports.registerUser = async (req, res, next) => {
  try {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'Missing required parameter - file' });
    }

    const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: 'avatars',
        width: 150,
        crop: "scale"
    });

    const { name, email, password,role } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:  result ?  {
            public_id: result.public_id,
            url: result.secure_url
        } : {
            public_id: 'default',
            url: '/images/default_avatar.jpg'
        },
      role
    });

    sendToken(user, 200, res);
} catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
}
}
//READ
exports.getUser = async (req, res, next) => {
  const user = await User.find();

  res.status(200).json({
    success: true,
    user,
  });
};
//UPDATE
exports.getUpdateUser = async (req, res, next) => {
 
 
    try {
        if (req.body.avatar && req.body.avatar !== '') {
            const user = await User.findById(req.user.id);
            const image_id = user.avatar.public_id;
            await cloudinary.v2.uploader.destroy(image_id);
            
        }
    
        const results = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'avatars',
            width: 150,
            crop: "scale"
        });
    
        const { name } = req.body;
        
        const user = await User.findByIdAndUpdate(req.user.id, {
            name,
            avatar: {
                public_id: results.public_id,
                url: results.secure_url
            },
        }, {
            new: true, 
            runValidators: true,
        });

    
        res.status(200).json({
            success: true,
            user: user,
        });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({
            success: false,
            error: 'An error occurred while updating the profile.',
        });
    }

}
//DELETE
exports.deleteUser = async (req, res, next) =>
{
    const user = await User.findByIdAndDelete(req.params.id)

    if(!user)
    {
        return res.status(404).json({ message: `User not found with id: ${req.params.id}`})
    }

    const image_id  = user.avatar.public_id
    await cloudinary.v2.uploader.destroy(image_id)
    await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({
        success: true,
    })
}
//Login
exports.UserLogin = async (req, res, next) => {
  const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json({ error: 'Please enter email & password' })
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return res.status(401).json({ message: 'Invalid Email or Password' })
    }
  
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return res.status(401).json({ message: 'Invalid Email or Password' })
    }
   
    sendToken(user, 200, res)
    
};
//Logout
exports.UserLogout =  async (req, res, next ) =>
{
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
}
//Profile
exports.UserProfile = async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
}
//UpdateProfile
exports.updateProfile = async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    // Update avatar
    if (req.body.avatar !== '') {
        const user = await User.findById(req.user.id)

        const image_id = user.avatar.public_id;
        const res = await cloudinary.v2.uploader.destroy(image_id);

        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'avatars',
            width: 150,
            crop: "scale"
        })

        newUserData.avatar = {
            public_id: result.public_id,
            url: result.secure_url
        }
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
    })
    if (!user) {
        return res.status(401).json({ message: 'User Not Updated' })
    }

    res.status(200).json({
        success: true
    })
}
//GetProfile
exports.getterProfile = async (req, res, next) => {
    const user = await User.findById(req.params.id);

    res.status(200).json({
        success: true,
        user
    })
}
exports.forgotPassword = async (req, res, next) => {
    let user; 
    try {
        user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ error: 'User not found with this email' });
        }


        const resetToken = user.getResetPasswordToken();
        await user.save({ validateBeforeSave: false });

        const resetUrl = `https://localhost:5173/password/reset/${resetToken}`;
        const message = `<section class="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
        <header>
           <h1> AgriConnect</h1>     
        </header>
    
        <main class="mt-8">
            <h4 class="text-gray-700 dark:text-gray-200">Hi \n\n${user.name}\n\n,</h4>
    
            <p class="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                This message Enable you to create New Password In <span class="font-semibold ">AgriConnect</span>.
            </p>
            

               <a href="${resetUrl}" class="button px-6 py-2 mt-4 text-sm font-medium tracking-wider text-white"> New Password</a>
            
            <p class="mt-8 text-gray-600 dark:text-gray-300">
                Thanks, <br>
                AgriConnect
            </p>
        </main>
        
    
        
    </section>`;

        await sendEmail({
            email: user.email,
            subject: 'AgriConnect Password Recovery',
            message
        });

        res.status(200).json({
            success: true,
            message: `This Email sent to: ${user.email}`
        });
    } catch (error) {

        console.error(error); 

        if (user) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save({ validateBeforeSave: false });
        }

        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.resetPassword = async (req, res, next) => {
    // Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return res.status(400).json({ message: 'Password reset token is invalid or has been expired' })
        // return next(new ErrorHandler('Password reset token is invalid or has been expired', 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return res.status(400).json({ message: 'Password does not match' })
        // return next(new ErrorHandler('Password does not match', 400))
    }

    // Setup new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    sendToken(user, 200, res);
}

exports.updatePassword = async (req, res, next) => {
    const user = await User.findById(req.user.id).select('password');
    const isMatched = await user.comparePassword(req.body.oldPassword)
    if (!isMatched) {
        return res.status(400).json({ message: 'Old password is incorrect' })
    }
    user.password = req.body.password;
    await user.save();
    sendToken(user, 200, res)

}

exports.allUsers = async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users
    })
}

exports.removeUser = async(req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(401).json({ message: `User does not found : ${req.params.id}` })
    }

    // Remove avatar from cloudinary
    const image_id = user.avatar.public_id;
    await cloudinary.v2.uploader.destroy(image_id);
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({
        success: true,
    })
}

exports.updateUser = async (req,res,next) => 
{
    const UpdateDataUser = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id, UpdateDataUser, {
        new: true,
        runValidators: true,
    })

    return res.status(200).json({
        success: true
    })
}

exports.getUserDetails = async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(400).json({ message: `User does not found with id: ${req.params.id}` })
    }

    res.status(200).json({
        success: true,
        user
    })
}
