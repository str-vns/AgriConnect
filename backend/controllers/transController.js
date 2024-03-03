const cloudinary = require("cloudinary");
const Product = require('../models/product');
const Transac = require("../models/transac");
const User = require("../models/user");
const sendEmail = require('../utility/sendEmail')

const mailsend = async (user, order) => {
    const message = `
    <section style="container max-width: 2rem; padding: 0.75rem 1.5rem; margin: 0 auto; background-color: white;">
    <header style="display: flex; align-items: center; justify-content: center;">
        
    <svg xmlns='http://www.w3.org/2000/svg' width='40px' height='40px' viewBox='0 0 24 24' fill='none'>
    <path d='M7 20H4.6C4.03995 20 3.75992 20 3.54601 19.891C3.35785 19.7951 3.20487 19.6422 3.10899 19.454C3 19.2401 3 18.9601 3 18.4V9.0398C3 8.66343 3 8.47524 3.05919 8.31095C3.1115 8.16573 3.19673 8.03458 3.30819 7.9278C3.43428 7.80699 3.60625 7.73056 3.95018 7.5777L12 4L20.0498 7.5777C20.3938 7.73056 20.5657 7.80699 20.6918 7.9278C20.8033 8.03458 20.8885 8.16573 20.9408 8.31095C21 8.47524 21 8.66343 21 9.0398V18.4C21 18.9601 21 19.2401 20.891 19.454C20.7951 19.6422 20.6422 19.7951 20.454 19.891C20.2401 20 19.9601 20 19.4 20H17M7 20H17M7 20V14M17 20V14M7 14V10H17V14M7 14H17' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/>
    </svg>
    <h1 style="text-align: center;">OnGarage</h1>     
</header>

    <main style="margin-top: 2rem;  w3-container ">
        <div style="border-bottom: 1px solid black;">
        <h4>Hi <span style="color: orange;">${user.name},</span></h4>
        <p >
            Your Transaction was success 
        </p>
        <p style="margin: 0px; ">We will notify you when the order was Confimed</p>
<div>
        <div>
            <h4>Item You Ordered</h4>
            <p style="margin: 0px ">Order Id: ${order._id}</p>
            <p style="margin: 0px ">OrderDate: ${order.createdAt}</p>
        </div>
        ${order.orderItems && order.orderItems.map(item => `
        <div style="border-bottom: 1px solid black">
            <img src="${item.image}" style="height: 100px; width: 100px; margin-top: 10px;" />
            <p style="margin: 0px " >${item.name}</p>
            <p style="margin: 0px ">Quantity: ${item.quantity}</p>
            <p style="margin: 0px ">Price: ${item.price}</p>
        </div>
    `).join('')}
</div>


        <p style="margin-top: 2rem;  text-align: center;">
            Thanks, For Buying <br>
            OnGarage
        </p>
    </main>
</section>`;

    await sendEmail({
        email: user.email,
        subject: 'OnGarage Transaction Success',
        message
    });
}

exports.newOrder = async (req, res, next) => {
    const {
        orderItems,
    } = req.body;

    const order = await Transac.create({
        orderItems,
        paidAt: Date.now(),
        user: req.user._id
    })

    if (!order) {
        return res.status(400).json({ message: `Order not saved` })
    }
    const user = await User.findById(req.user._id);
    await mailsend(user, order);

    res.status(200).json({
        success: true,
        order
    })
}