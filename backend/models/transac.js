const { default: mongoose } = require("mongoose");

const transacModel =  mongoose.Schema(
    {

     user:
     {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true
     },
     orderItems:
     [
         {
             name:
             {
                 type: String,
                 required: true
             },
             quantity:
             {
                 type: Number,
                 required: true
             },
             image:
             {
                 type: String,
                 required: true
             },
             product:
             {
                 type: mongoose.Schema.Types.ObjectId,
                 ref: 'Product',
                 required: true
             },
             orderConfirmation: {
                type: String,
                required: true,
                default: 'NotConfirm'
            },
            orderStatus: {
                type: String,
                required: true,
                default: 'Processing'
            },
             farmerid:
             {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
             }
         }
     ],
     createdAt: {
         type: Date,
         default: Date.now
     }
 
    }
 
 )
 
 module.exports = mongoose.model('Transac', transacModel)