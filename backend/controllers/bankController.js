const cloudinary = require("cloudinary");
const Bank = require('../models/bank')

//Crud for farmer products

//create
exports.newBank = async (req, res, next) => {

  try {
    let images = [];
    if (typeof req.body.images === 'string') {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }

    let imagesLinks = [];

    if (images && Array.isArray(images)) {
      for (let i = 0; i < images.length; i++) {
        let imageDataUri = images[i];
        try {
          const result = await cloudinary.v2.uploader.upload(`${imageDataUri}`, {
            folder: 'images',
            width: 150,
            crop: "scale",
          });

          imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url
          });

        } catch (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: 'Error uploading images to Cloudinary'
          });
        }
      }
    } else {
      console.log("images is undefined or not an array");
      return res.status(400).json({
        success: false,
        message: 'Images must be provided in an array format'
      });
    }

    req.body.images = imagesLinks;

    const bank = await Bank.create(req.body);
    if (!bank)
      return res.status(400).json({
        success: false,
        message: 'Bank not created'
      });
    
    return res.status(201).json({
      success: true,
      bank
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

//READ
exports.getBank = async (req, res, next) => {
    const banks = await Bank.find();
  
    res.status(200).json({
      success: true,
      banks,
    });
  };

//UPDATE
exports.updateBank = async (req,res,next) => {
  let bank = await Bank.findById(req.params.id);
	if (!bank) {
		return res.status(404).json({
			success: false,
			message: 'bank not found'
		})
	}
	let images = []

	if (typeof req.body.images === 'string') {
		images.push(req.body.images)
	} else {
		images = req.body.images
	}
	if (images !== undefined) {
		for (let i = 0; i < bank.images.length; i++) {
			try {
				let imageDataUri = bank.images[i]
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
	bank = await Bank.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindandModify: false
	})
	if (!bank)
		return res.status(400).json({
			success: false,
			message: 'srp Product not updated'
		})
	// console.log(product)
	return res.status(200).json({
		success: true,
		bank
	})
  };

//DELETE
exports.deleteBank = async (req,res,next)=>
{
    const banks = await Bank.findByIdAndDelete(req.params.id);
     
    if(!banks)
    {
        return res.status(404).json
        ({
            success: false,
            message: "The Bank Not Deleted",
        })
    }
    res.status(200).json({
        success: true,
        message: "The Bank Has been Delete",
    })
}

//DETAIL Bank
exports.GetOneBank = async (req, res, next ) => {
  const bank = await Bank.findById(req.params.id);
  if(!bank)
  {
      return res.status(404).json
      ({
          success: false,
          message: "The bank doesn't Exist ",
      })
  }
  res.status(200).json({
      success: true,
      bank
  })
}