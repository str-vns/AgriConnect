const mongoose = require('mongoose')
const validator = require('validator')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const bcrypt =  require('bcryptjs')

const farmerSchema = new mongoose.Schema(
    {
            farmName:
            {
                type: String,
                required: true

            },
            address:
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
              avatar: {
                public_id: {
                  type: String,
                },
                url: {
                  type: String,
                },
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
          user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
          },

        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)



module.exports = mongoose.model("Farmer",farmerSchema);