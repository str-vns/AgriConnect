const srpProduct = require("../models/srpProduct");
const User = require("../models/user");
const sendToken = require("../utility/jwtToken");
const cloudinary = require("cloudinary");


exports.registerSrp = async (req, res, next) => {

    try {
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
				folder: 'srpImages',
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
	req.body.user = req.user.id;

	const srpProducts = await srpProduct.create(req.body);
	if (!srpProducts)
		return res.status(400).json({
			success: false,
			message: 'SrpProduct not created'
		})
	res.status(201).json({
		success: true,
		srpProducts
	})

  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server Error' });
  }
  }

exports.getSrp = async (req, res, next)=>
{
    const srpProducts = await srpProduct.find();

  res.status(200).json({
    success: true,
    srpProducts,
  });
}

exports.updateSrp = async (req, res, next) => {
    let srpproduct = await srpProduct.findById(req.params.id);
	if (!srpproduct) {
		return res.status(404).json({
			success: false,
			message: 'SrpProduct not found'
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
		for (let i = 0; i < srpproduct.images.length; i++) {
			try {
				let imageDataUri = srpproduct.images[i]
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
			folder: 'srpImages',
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
	srpproduct = await srpProduct.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindandModify: false
	})
	if (!srpproduct)
		return res.status(400).json({
			success: false,
			message: 'srp Product not updated'
		})
	// console.log(product)
	return res.status(200).json({
		success: true,
		srpproduct
	})
  };
  

exports.getSingleSrp = async (req,res) =>
{
    const srpProducts = await srpProduct.findById(req.params.id);

    res.status(200).json({
      success: true,
      srpProducts,
    });
}

