const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema(
    {
       bankName:
            {
                type: String,
                required: true

            },
            city:
            {
                type: String,
                required: true
            },
            postalCode:
            {
                type: String,
                required: true
            },
            address:
            {
                
                    type: String,
                    required: true
                
            },
            location:
            {
                type: String,
                enum: ['Point'],
                default: 'Point',
            },
            latitude:
            {
                type: String,
                required: true
            },
            longitude:
            {
                type: String,
                required: true
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
        resetPasswordToken: String,
        resetPasswordExpire: Date,
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    module.exports = mongoose.model("Bank", bankSchema);