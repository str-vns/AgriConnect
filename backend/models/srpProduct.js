const { default: mongoose } = require("mongoose");

const srpProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter Product Name"],
    trim: true,
    maxlength: [150, "Product Name cant exceed to 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Enter the Price "],
    maxlength: [6, "Product price cant exceed to 6 digits"],
    default: 0.0,
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
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SrpProduct", srpProductSchema);