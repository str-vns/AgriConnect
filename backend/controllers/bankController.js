const cloudinary = require("cloudinary");
const Bank = require('../models/bank')

//Crud for farmer products

//create
exports.newBank = async (req, res, next) => {

    // let images = []
    //   if (typeof req.body.images === 'string') {
    //       images.push(req.body.images)
    //   } else {
    //       images = req.body.images
    //   }
  
    //   let imagesLinks = [];
  
    //   for (let i = 0; i < images.length; i++) {
    //       let imageDataUri = images[i]
    //       try {
              const result = await cloudinary.v2.uploader.upload(  req.body.images, {
                  folder: 'banks',
                  width: 150,
                  crop: "scale",
              });
  
    //           imagesLinks.push({
    //               public_id: result.public_id,
    //               url: result.secure_url
    //           })
  
    //       } catch (error) {
    //           console.log(error)
    //       }
  
    //   }
  
    //   req.body.images = imagesLinks
    //   req.body.user = req.user.id;
    const { bankName, city, postalCode, address, location, coordinates } = req.body;
      const bank = await Bank.create({
        bankName,
        city,
        postalCode,
        address,
        location,
        coordinates,
        images: {
          public_id: result.public_id,
          url: result.secure_url,
        },
      });
      if (!bank)
          return res.status(400).json({
              success: false,
              message: 'Bank not created'
          })
      res.status(201).json({
          success: true,
          bank
      })
  }

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
	let banks = await Bank.findById(req.params.id);

if (!banks) {
  return res.status(404).json({
    success: false,
    message: 'Bank not found'
  });
}

let images = req.body.images || [];


if (images.length > 0) {

  for (let i = 0; i < banks.images.length; i++) {
    try {
      let imageDataUri = banks.images[i];
      const result = await cloudinary.v2.uploader.destroy(`${imageDataUri.public_id}`);
    } catch (error) {
      console.log(error);
    }
  }

  let imagesLinks = [];
  for (let i = 0; i < images.length; i++) {
    try {
      let imageDataUri = images[i];
      const result = await cloudinary.v2.uploader.upload(`${imageDataUri}`, {
        folder: 'products',
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

  req.body.images = imagesLinks;
} else {

  req.body.images = product.images;
}

banks = await Bank.findByIdAndUpdate(req.params.id, req.body, {
  new: true,
  runValidators: true,
  useFindAndModify: false,
});

if (!banks) {
  return res.status(400).json({
    success: false,
    message: 'Bank not updated',
  });
}

return res.status(200).json({
  success: true,
  banks,
});
}

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
