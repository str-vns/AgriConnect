const Farmer = require("../models/farmer")
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const sendToken = require("../utility/jwtToken");
const cloudinary = require("cloudinary");
const { TopologyDescription } = require("mongodb");


//Crud for Farmers
exports.registerFarmer = async (req, res, next) => {
    try {
      // if(!req.file)
      // {
      //     return res.status(400).json({ success: false, message: 'Missing required parameter - file'  });
      // }
  
      const result = await cloudinary.uploader.upload(
        req.body.avatar,
        {
            folder: "avatars",
            width: 150,
            crop: "scale",
        }
    );

    const { name, email, password, farmInfo } = req.body;

    const farmer = await Farmer.create({
        farmerInfo: {
            name,
            email,
            avatar: {
                public_id: result.public_id,
                url: result.secure_url,
            },
        },
        farmInfo,
    });
  
      sendToken(farmer, 200, res);

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };


  //READ
exports.getFarmer = async (req, res, next) => {
  const farmers = await Farmer.find();

  res.status(200).json({
    success: true,
    farmers,
  });
};


//UPDATE
exports.getUpdateFarmer = async (req, res, next) => {

try {
  if (req.body.avatar && req.body.avatar !== '') {
    const farmer = await Farmer.findById('65bcf308eaf8d8ecbf26ef5e');
    const image_id = farmer.farmerInfo.avatar.public_id;
    await cloudinary.v2.uploader.destroy(image_id);
    
}

const results = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: 'avatars',
    width: 150,
    crop: "scale"
});

  const UpdateDataUser =
  {
    farmerInfo: {
      'farmerInfo.name': req.body.name,
      'farmerInfo.email': req.body.email,
      'farmerInfo.avatar':  {
        public_id: results.public_id,
        url: results.secure_url,
    },
    
  }
  }


  const farmer = await Farmer.findByIdAndUpdate(req.params.id,
    UpdateDataUser,
      {
          new: true,
          runValidators:true,

      })

      return res.status(200).json({
          success:true,
farmer
      })
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json({
          success: false,
          error: 'An error occurred while updating the profile.',
      });
  }
}