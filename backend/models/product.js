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
  stock: {
    type: Number,
    required: [true, "Enter the quantity of the Product"],
    maxlength: [4, "Product cant exceed up to 4 digits"],
    default: 0,
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
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

productSchema.statics.softDelete = async function(productId) {
  return await this.findByIdAndUpdate(productId, { deleted: true });
};

productSchema.statics.restore = async function(productId) {
  return await this.findByIdAndUpdate(productId, { deleted: false });
};

module.exports = mongoose.model("Product", productSchema);