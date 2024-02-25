const Message = require("../models/ChatFeat.js/Message")
const cloudinary = require("cloudinary");

exports.newMessage = async (req,res) =>
{
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
  const newMessage = new Message(req.body)

  try {
    const savedMessage = await newMessage.save()
    res.status(200).json(savedMessage)
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.getMessages = async(req,res) =>
{
    try {
        const messages = await Message.find(
            { conversationId: req.params.conversationId}
        )
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json(error)
    }
}