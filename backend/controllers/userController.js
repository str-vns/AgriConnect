const User = require("../models/user");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const sendToken = require("../utility/jwtToken");
const cloudinary = require("cloudinary");
const { TopologyDescription } = require("mongodb");

//Crud for user

//CREATE
exports.registerUser = async (req, res, next) => {
  try {
    if(!req.file)
    {
        return res.status(400).json({ success: false, message: 'Missing required parameter - file'  });
    }

    const result = await cloudinary.v2.uploader.upload(
      req.body.avatar,
      {
        folder: "avatars",
        width: 150,
        crop: "scale",
      },
      (err, res) => {
        console.log(err, res);
      }
    );

    const { name, email, password, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });

    sendToken(user, 200, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error in UserController Register" });
  }
};

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
    const UpdateDataUser =
    {
        name: req.body.name,
        email: req.body.email,
        avatar: {
          public_id: results.public_id,
          url: results.secure_url
      },
    }

    const user = await User.findByIdAndUpdate(req.params.id, UpdateDataUser,
        {
            new: true,
            runValidators:true,
        })

        return res.status(200).json({
            success:true,
user
        })

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
