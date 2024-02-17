const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter Product Name"],
    trim: true,
    maxlength: [150, "Product Name cant exceed to 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Enter A Discription of a Product"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  stock: {
    type: Number,
    required: [true, "Enter the quantity of the Product"],
    maxlength: [4, "Product cant exceed up to 4 digits"],
    default: 0,
  },
  farmer: {
    type: mongoose.Schema.ObjectId,
    ref: "Farmer",
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);