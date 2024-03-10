const cloudinary = require("cloudinary");
const Product = require('../models/product')

//Crud for farmer products

//create
exports.newProducts = async (req, res, next) => {

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
				folder: 'products',
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

	const product = await Product.create(req.body);
	if (!product)
		return res.status(400).json({
			success: false,
			message: 'Product not created'
		})
	res.status(201).json({
		success: true,
		product
	})
  }

   //Create
   exports.getProduct = async (req, res, next) => {
    try {
        const product = await Product.find({ user: req.user.id });

        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({
            success: false,
            error: 'An error occurred while fetching the product.',
        });
    }
};
  

  //Update
exports.updateProducts = async (req,res,next) => {
  let product = await Product.findById(req.params.id);
	if (!product) {
		return res.status(404).json({
			success: false,
			message: 'product not found'
		})
	}
	let images = []

	if (typeof req.body.images === 'string') {
		images.push(req.body.images)
	} else {
		images = req.body.images
	}
	if (images !== undefined) {
		for (let i = 0; i < product.images.length; i++) {
			try {
				let imageDataUri = product.images[i]
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
			folder: 'products',
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
	product = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindandModify: false
	})
	if (!product)
		return res.status(400).json({
			success: false,
			message: 'Product not updated'
		})
	// console.log(product)
	return res.status(200).json({
		success: true,
		product
	})
  };


//delete
exports.deleteProducts = async (req,res,next)=>
{try {
    const product = await Product.softDelete(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Product soft deleted successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}

exports.restoreProduct = async (req, res, next) => {
	try {
		const product = await Product.restore(req.params.id);
		if (!product) {
		  return res.status(404).json({
			success: false,
			message: "Product not found"
		  });
		}
		res.status(200).json({
		  success: true,
		  message: "Product restored successfully"
		});
	  } catch (error) {
		console.error(error);
		res.status(500).json({
		  success: false,
		  message: "Internal server error"
		});
	  }
};

exports.GetOneProduct = async (req, res, next ) => {
  const product = await Product.findById(req.params.id);
  if(!product)
  {
      return res.status(404).json
      ({
          success: false,
          message: "The Product doesn't Exist ",
      })
  }
  res.status(200).json({
      success: true,
      product
  })
}

exports.getFarmerProduct = async (req, res, next) => {
  try {
      const product = await Product.find({ user: req.params.id, deleted: false });

      res.status(200).json({
          success: true,
          product,
      });
  } catch (error) {
      console.log('Error:', error);
      res.status(500).json({
          success: false,
          error: 'An error occurred while fetching the product.',
      });
  }
};


