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
        width: 847.5,
        height: 192,
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
  let farmer = await Farmer.findOne({user: req.user.id});
	if (!farmer) {
		return res.status(404).json({
			success: false,
			message: 'farmer not found'
		})
	}
	let images = []

	if (typeof req.body.images === 'string') {
		images.push(req.body.images)
	} else {
		images = req.body.images
	}
	if (images !== undefined) {
		// Deleting images associated with the product
		for (let i = 0; i < farmer.images.length; i++) {
			try {
				let imageDataUri = farmer.images[i]
			const result = await cloudinary.v2.uploader.destroy(`${imageDataUri.public_id}`)
			} catch (error) {
				console.log(error)
			}
		}
	}
	let imagesLinks = [];
	for (let i = 0; i < images.length; i++) {
		try {
			let imageDataUri = images[i]
		const result = await cloudinary.v2.uploader.upload(`${imageDataUri}`, {
			folder: 'images',
			width: 600,
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
	farmer = await Farmer.findOneAndUpdate({ user: req.user.id }, req.body, {
		new: true,
		runValidators: true,
		useFindandModify: false
	})
	if (!farmer)
		return res.status(400).json({
			success: false,
			message: 'farmer not updated'
		})
	// console.log(product)
	return res.status(200).json({
		success: true,
		farmer
	})
  };

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
        $match: { ratings: { $gte: 0 } } 
      },
      {
        $sort: { ratings: -1 } 
      },
      {
        $limit: 7 
      },
      {
        $lookup: {
          from: 'users', 
          localField: 'user',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $unwind: '$reviews' 
      },
      {
        $lookup: {
          from: 'users', 
          localField: 'reviews.user',
          foreignField: '_id',
          as: 'reviews.user'
        }
      },
      {
        $group: {
          _id: '$_id',
          farmName: { $first: '$farmName' },
          ratings: { $first: '$ratings' },
          user: { $first: '$user' },
          reviews: {
            $push: {
              user: { $arrayElemAt: ['$reviews.user', 0] },
              rating: '$reviews.rating',
              comment: '$reviews.comment'
            }
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




