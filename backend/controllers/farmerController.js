const Farmer = require("../models/farmer")
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const sendToken = require("../utility/jwtToken");
const cloudinary = require("cloudinary");
const { TopologyDescription } = require("mongodb");


//Crud for Farmers
exports.registerFarmer = async (req, res, next) => {
    let images = []
	if (typeof req.body.images === 'string') {
		images.push(req.body.images)
	} else {
		images = req.body.images
	}

	let imagesLinks = [];

	for (let i = 0; i < images.length; i++) {
		let imageDataUri = images[i]
		try {
			const result = await cloudinary.v2.uploader.upload(`${imageDataUri}`, {
				folder: 'images',
				width: 150,
				crop: "scale",
			});

			imagesLinks.push({
				public_id: result.public_id,
				url: result.secure_url
			})

		} catch (error) {
			console.log(error)
		}

	}

	req.body.images = imagesLinks
	req.body.user = req.user.id;

	const farmer = await Farmer.create(req.body);
	if (!farmer)
		return res.status(400).json({
			success: false,
			message: 'Farmer not created'
		})
	res.status(201).json({
		success: true,
		farmer
	})
};


  //READ
exports.getFarmer = async (req, res, next) => {
  const farmers = await Farmer.find();

  res.status(200).json({
    success: true,
    farmers,
  });
};


exports.getSingleFarmer = async (req, res)=>
{
    const farmersloc = await Farmer.findById(req.params.id)

    if(!farmersloc)
    {
        return res.status(404).json
        ({
            success: false,
            message: "The Farmer doesn't Exist ",
        })
    }
    res.status(200).json({
        success: true,
        farmersloc
    })
}
//UPDATE
exports.getUpdateFarmer = async (req, res, next) => {
  try {
      if (req.body.farmerInfo.avatar && req.body.farmerInfo.avatar !== '') {
          const farmer = await Farmer.findById(req.farmer.id);
          const image_id = farmer.farmerInfo.avatar.public_id;
          await cloudinary.v2.uploader.destroy(image_id);
      }

      const results = await cloudinary.v2.uploader.upload(req.body.farmerInfo.avatar, {
          folder: 'avatars',
          width: 150,
          crop: "scale"
      });

      const farmer = await Farmer.findByIdAndUpdate(req.params.id, {
          $set: {
              'farmerInfo.name': req.body.farmerInfo.name,
              'farmerInfo.email': req.body.farmerInfo.email,
              'farmerInfo.avatar.public_id': results.public_id,
              'farmerInfo.avatar.url': results.secure_url,
          }
      }, {
          new: true,
          runValidators: true,
      });

      return res.status(200).json({
          success: true,
          farmer
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
exports.deleteFarmer = async (req, res, next) =>
{
    const farmer = await Farmer.findByIdAndDelete(req.params.id)

    if(!farmer)
    {
        return res.status(404).json({ message: `Farmer not found with id: ${req.params.id}`})
    }

    const image_id = farmer.farmerInfo.avatar.public_id;
    await cloudinary.v2.uploader.destroy(image_id)
    await Farmer.findByIdAndDelete(req.params.id)
    return res.status(200).json({
        success: true,
    })
}

exports.createReview = async (req, res, next) => {

    const { rating, comment, farmerId } = req.body;

    let images = req.body.images;

if (!images) {
  images = [];
} else if (typeof images === 'string') {
  images = [images];
}

let imagesLinks = [];

for (let i = 0; i < images.length; i++) {
  let imageDataUri = Array.isArray(images[i]) ? images[i][0] : images[i];

  if (typeof imageDataUri !== 'string') {
    console.error("Invalid image data URI:", imageDataUri);
    continue;
  }

  try {
    const result = await cloudinary.v2.uploader.upload(imageDataUri, {
      folder: 'famers',
      width: 150,
      crop: 'scale',
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    console.log(error);
  }
}
    
    const review = {
      user: req.user._id,
      name: req.user.name,
      avatar: req.user.avatar,
      rating: Number(rating),
      comment,
      images: imagesLinks,
    };
    
    const farmer = await Farmer.findById(farmerId);
    const isReviewed = farmer.reviews.find((r) => r.user.toString() === req.user._id.toString());
    
    if (isReviewed) {
        farmer.reviews.forEach((review) => {
        if (review.user.toString() === req.user._id.toString()) {
          review.comment = comment;
          review.rating = rating;
          review.images = imagesLinks;
        }
      });
    } else {
        farmer.reviews.push(review);
        farmer.numOfReviews = farmer.reviews.length;
    }
    
    farmer.ratings = farmer.reviews.reduce((acc, item) => item.rating + acc, 0) / farmer.reviews.length;
    
    await farmer.save({ validateBeforeSave: false });
    
    if (!farmer)
      return res.status(400).json({
        success: false,
        message: 'Review not posted',
      });
    
    return res.status(200).json({
      success: true,
    })
}

exports.getFarmerReviews = async (req,res,next)=>
{
    const farmersloc = await Farmer.findById(req.params.id)

    if(!farmersloc)
    {
        return res.status(404).json
        ({
            success: false,
            message: "The Farmer doesn't Exist ",
        })
    }
    res.status(200).json({
        success: true,
        farmersloc
    })
}

exports.getFarmerFarm = async (req, res) => {
    try {
        const farmersloc = await Farmer.findOne({ user: req.params.id });

        if (!farmersloc) {
            return res.status(404).json({
                success: false,
                message: "The Farmer doesn't Exist",
            });
        }

        res.status(200).json({
            success: true,
            farmersloc
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};