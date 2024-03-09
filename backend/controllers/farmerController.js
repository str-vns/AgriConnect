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
      const newUpdata = {
          farmName: req.body.farmName,
          address: req.body.address,
          city: req.body.city,
          postalCode: req.body.postalCode
      }

      if (Array.isArray(req.body.images) && req.body.images.length > 0) {
          const farmer = await Farmer.findOne({ user: req.user.id });

          // Check if the farmer has any images before trying to destroy
          if (farmer.images && farmer.images.public_id) {
              const image_id = farmer.images.public_id;
              await cloudinary.v2.uploader.destroy(image_id);
          }

          // Upload each image in the array
          const uploadResults = await Promise.all(req.body.images.map(async (image) => {
              const result = await cloudinary.v2.uploader.upload(image, {
                  folder: 'images',
                  width: 150,
                  crop: "scale"
              });
              return {
                  public_id: result.public_id,
                  url: result.secure_url
              };
          }));

          newUpdata.images = uploadResults;
      }

      const farmer = await Farmer.findOneAndUpdate({ user: req.user.id }, newUpdata, {
          new: true,
          runValidators: true,
      });
      if (!farmer) {
          return res.status(401).json({ message: 'Farmer Location Not Updated' });
      }

      res.status(200).json({
          success: true
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
  }
}

//GetLocFarmer
exports.getLocFarmer = async (req, res, next) =>
{  const farmer = await Farmer.findOne({user: req.user.id})

  
res.status(200).json({
  success: true,
  farmer
})
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

exports.getTopRatedFarmerReviews = async (req, res) => {
  try {
    const topRatedFarmers = await Farmer.aggregate([
      {
        $match: { ratings: { $gte: 0 } } // Match farmers with ratings greater than or equal to zero
      },
      {
        $group: {
          _id: '$farmName',
          averageRating: { $avg: '$ratings' },
          reviews: { $push: '$reviews' }
        }
      },
      {
        $sort: { averageRating: -1 } // Sort by average ratings in descending order
      },
      {
        $limit: 7 // Limit to the top 7 rated farmers
      },
      {
        $lookup: {
          from: 'users', // Assuming the collection name for users is 'users'
          localField: '_id', // Use _id as the localField since we're grouping by farmName
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $unwind: '$reviews' // Unwind the reviews array
      },
      {
        $lookup: {
          from: 'users', // Assuming the collection name for users is 'users'
          localField: 'reviews.user',
          foreignField: '_id',
          as: 'reviews.user'
        }
      },
      {
        $project: {
          farmName: '$_id', // Rename _id to farmName
          averageRating: 1,
          reviews: {
            user: {
              $arrayElemAt: ['$reviews.user', 0]
            },
            rating: '$reviews.rating',
            comment: '$reviews.comment'
          }
        }
      }
    ]);

    res.status(200).json({ topRatedFarmers });
  } catch (error) {
    console.error('Error fetching top rated farmer reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



