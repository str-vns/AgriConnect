const mongoose = require('mongoose')
const validator = require('validator')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const bcrypt =  require('bcryptjs')

const farmerSchema = new mongoose.Schema(
    {
        farmerInfo: {
            name: {
                type: String,
                required: [true, 'Please enter your name!'],
                maxLength: [30, 'Your name cannot exceed 30 characters!']
            },
            email:{
                type: String,
                unique: true,
                validate: [validator.isEmail,'Please enter a valid email'],
                required: [true, 'Please enter your email']
            },
            password: 
            {
                type: String,
                required: [true, 'Please enter your password '],
                minlength: [7, 'Your password must be longer than 7 characters'],
                select: false
            },
            avatar: {
                public_id: {
                  type: String,
                  required: true,
                },
                url: {
                  type: String,
                  required: true,
                },
              },
            role:
            {
                type: String,
                default: 'Farmer'
            },
            createdAt:
            {
                type: Date,
                default: Date.now
            },
           
        },
        farmInfo:
        {
            farmName:
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
            location:
            {
                type: String,
                enum: ['Point'],
                default: 'Point',
            },
            coordinates:
            {
                type: [Number],
                index: '2dsphere',
            }
        },
        reviews: [
            {
              user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
              },
              name: {
                type: String,
                required: true,
              },
              rating: {
                type: Number,
                required: true,
              },
              comment: {
                type: String,
                required: true,
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
            },
          ],
        resetPasswordToken: String,
        resetPasswordExpire: Date,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

farmerSchema.pre("save", async function (next) {
    if (!this.isModified("farmerInfo.password")) {
        return next();
    }
    try {
        this.farmerInfo.password = await bcrypt.hash(this.farmerInfo.password, 10);
        next();
    } catch (error) {
        next(error);
    }
});

farmerSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
}

farmerSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.farmerInfo.password);
}

farmerSchema.methods.getResetPasswordToken = function () {

    const resetToken = crypto.randomBytes(20).toString('hex');

    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

    return resetToken

}

module.exports = mongoose.model("Farmer",farmerSchema);