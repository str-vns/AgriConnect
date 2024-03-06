const cloudinary = require("cloudinary");
const Product = require('../models/product');
const Transac = require("../models/transac");
const User = require("../models/user");
const sendEmail = require('../utility/sendEmail')

const mailsend = async (user, order) => {
    const message = `
    <section style="max-width: 20rem; padding: 0.75rem 1.5rem; margin: 0 auto; background-color: #F8FFA2;">
   <header style="display: flex; align-items: center; justify-content: center;">
    <svg fill="#000000" height="40px" width="40px" viewBox="0 0 512 512">
        <path d="M386.437,329.421c-4.548-4.548-11.284-5.801-17.163-3.189c-37.433,16.616-60.251,28.885-67.822,36.463 c-7.544,7.538-12.179,17.206-13.051,27.225c-0.558,6.407,0.516,12.637,3.001,18.131l-23.814,23.782v-83.289h-0.003l40.187-40.131 c4.588,2.069,9.623,3.095,14.771,3.094c10.715,0,21.922-4.44,30.616-13.133c7.576-7.567,19.847-30.387,36.467-67.826 c2.61-5.879,1.357-12.617-3.192-17.164c-4.55-4.549-11.288-5.799-17.163-3.189c-37.433,16.616-60.251,28.885-67.823,36.463 c-7.544,7.538-12.177,17.206-13.05,27.225c-0.558,6.406,0.514,12.636,3.001,18.131l-23.815,23.781v-81.666l40.185-40.121 c4.588,2.069,9.621,3.095,14.769,3.095c10.718,0,21.927-4.443,30.62-13.145c7.576-7.567,19.847-30.387,36.467-67.826 c2.61-5.879,1.357-12.617-3.192-17.164c-4.55-4.548-11.288-5.799-17.163-3.189c-37.433,16.616-60.251,28.885-67.822,36.463 c-7.545,7.538-12.179,17.208-13.051,27.231c-0.558,6.409,0.514,12.64,3.001,18.135l-23.815,23.777v-78.581 c14.499-5.49,24.981-20.973,24.981-39.18c0-10.74-7.461-35.55-22.174-73.741C268.08,3.879,262.43,0,255.998,0 c-6.432,0-12.081,3.879-14.392,9.88c-14.714,38.193-22.175,63.003-22.175,73.742c0,18.207,10.481,33.69,24.981,39.18v78.581 l-23.814-23.776c2.485-5.494,3.558-11.727,3-18.135c-0.872-10.022-5.506-19.692-13.051-27.231 c-7.571-7.579-30.39-19.846-67.82-36.463c-5.876-2.61-12.615-1.359-17.163,3.189c-4.548,4.548-5.802,11.285-3.192,17.164 c16.621,37.438,28.891,60.258,36.458,67.816c8.698,8.707,19.909,13.153,30.63,13.153c5.146,0,10.179-1.025,14.767-3.095 l40.187,40.122v81.666l-23.814-23.781c2.485-5.493,3.559-11.724,3.001-18.132c-0.872-10.018-5.507-19.686-13.05-27.225 c-7.572-7.578-30.39-19.847-67.822-36.463c-5.875-2.61-12.615-1.359-17.163,3.189c-4.549,4.548-5.803,11.285-3.192,17.165 c16.622,37.44,28.891,60.258,36.458,67.821c8.699,8.698,19.903,13.138,30.622,13.137c5.146,0,10.18-1.025,14.769-3.095 l40.189,40.133v83.29l-23.814-23.781c2.485-5.493,3.558-11.724,3-18.131c-0.872-10.019-5.507-19.687-13.051-27.225 c-7.571-7.579-30.39-19.847-67.82-36.463c-5.874-2.609-12.615-1.359-17.163,3.189c-4.548,4.548-5.803,11.285-3.192,17.164 c16.621,37.438,28.891,60.258,36.462,67.821c7.541,7.547,17.212,12.184,27.234,13.055c1.112,0.096,2.218,0.145,3.316,0.145 c5.241,0,10.296-1.09,14.845-3.153l40.188,40.133v24.242h-62.973c-6.398,0-11.586,5.187-11.586,11.587s5.188,11.586,11.586,11.586 h113.76c6.398,0,11.586-5.187,11.586-11.586s-5.188-11.587-11.586-11.587h-27.614v-24.242l40.188-40.133 c4.548,2.062,9.603,3.153,14.845,3.153c1.097,0,2.205-0.049,3.316-0.145c10.021-0.87,19.694-5.507,27.225-13.046 c7.576-7.566,19.845-30.386,36.467-67.825C392.239,340.706,390.986,333.969,386.437,329.421z M311.484,275.892 c0.395-4.528,2.709-9.211,6.348-12.847c0.003-0.003,0.007-0.006,0.01-0.009c3.167-3.171,16.052-10.901,42.037-23.095 c-12.197,25.989-19.925,38.87-23.101,42.042c-6.955,6.955-17.175,8.492-22.312,3.361c0,0,0,0-0.001-0.001 C311.42,282.298,311.29,278.116,311.484,275.892z M311.485,161.481c0.394-4.533,2.708-9.217,6.348-12.853 c0.003-0.003,0.007-0.006,0.01-0.009c3.167-3.171,16.052-10.901,42.037-23.095c-12.197,25.989-19.926,38.872-23.105,42.046 c-6.952,6.959-17.172,8.5-22.31,3.368C311.42,167.893,311.29,163.706,311.485,161.481z M197.539,170.932 c-5.146,5.139-15.365,3.596-22.325-3.372c-3.17-3.167-10.898-16.05-23.097-42.037c25.989,12.196,38.87,19.924,42.037,23.095 c0.003,0.003,0.007,0.006,0.01,0.009c3.64,3.636,5.954,8.32,6.348,12.853C200.707,163.706,200.578,167.893,197.539,170.932z M197.537,285.338c-5.141,5.137-15.365,3.6-22.324-3.36c-3.17-3.167-10.898-16.05-23.097-42.037 c25.989,12.196,38.87,19.924,42.037,23.095c0.003,0.003,0.007,0.006,0.01,0.009c3.64,3.636,5.954,8.319,6.348,12.847 C200.706,278.115,200.576,282.298,197.537,285.338z M197.534,401.378c-0.003,0.003-0.006,0.006-0.009,0.008 c-0.001,0.001-0.002,0.002-0.003,0.003c-3.048,3.044-7.227,3.177-9.452,2.982c-4.528-0.393-9.21-2.707-12.856-6.355 c-3.17-3.167-10.898-16.051-23.097-42.038c25.989,12.196,38.87,19.924,42.037,23.095c0.003,0.003,0.007,0.006,0.01,0.009 c3.641,3.636,5.954,8.319,6.348,12.847C200.705,394.152,200.575,398.333,197.534,401.378z M255.998,101.768 c-7.26,0-13.394-8.309-13.394-18.145c0.001-4.501,3.649-19.091,13.394-46.071c9.747,26.984,13.394,41.57,13.394,46.071 C269.392,93.459,263.258,101.768,255.998,101.768z M336.775,398.026c-3.637,3.641-8.319,5.953-12.847,6.347 c-2.226,0.195-6.411,0.061-9.463-2.99c-3.045-3.045-3.175-7.228-2.981-9.451c0.395-4.528,2.709-9.211,6.348-12.847 c0.003-0.003,0.007-0.006,0.01-0.009c3.167-3.171,16.052-10.901,42.037-23.095C347.681,381.968,339.953,394.852,336.775,398.026z">
        </path>
    </svg>
    <h1 style="text-align: center; margin: 0;">AgriConnect</h1>
</header>

        <main style="margin-top: 2rem; text-align: center;">
            <div style="border-bottom: 1px solid black;">
                <h4 style="margin: 0;">Hi <span style="color: orange;">${user.name},</span></h4>
                <p style="margin: 0;">Your Transaction was successful</p>
                <p style="margin: 0;">We will notify you when the order is Confirmed</p>

                <div style="text-align: left; margin-top: 2rem;">
                    <div>
                        <h4 style="margin: 0;">Item You Ordered</h4>
                        <p style="margin: 0;">Order Id: ${order._id}</p>
                        <p style="margin: 0;">Order Date: ${order.createdAt}</p>
                    </div>
                   ${order.orderItems && order.orderItems.map(item => `
    <div style="border-bottom: 1px solid black; padding: 10px; display: flex; align-items: center; justify-content: space-between;">
        <div>
            <img src="${item.image}" style="height: 100px; width: 100px; margin-right: 10px;" />
        </div>
        <div style="text-align: left;">
            <span style="font-weight: bold; font-size: 16px;">${item.name}</span>
            <p style="margin: 0px; font-size: 14px;">Quantity: ${item.quantity}</p>
            <p style="margin: 0px; font-size: 14px;">Price: ${item.price}</p>
        </div>
    </div>
`).join('')}
                </div>

                <p style="margin-top: 2rem; margin-bottom: 0;">Thanks for Buying<br>AgriConnect</p>
            </div>
        </main>
    </section>`;

    await sendEmail({
        email: user.email,
        subject: 'AgriConnect Transaction Success',
        message
    });
}

const ConfirmMailSend = async (user, order) => {
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
            Your order <span style="color: orange;">${order._id}</span> has been approved.
        </p>
        <p style="margin: 0px; ">We will notify you when your order is shipped your item</p>
        <span>Download Reciept Here: </span><a href="http://localhost:4000/api/v1/order/${order._id}/receipt" style="
  display: inline-block;
  margin-bottom: 5px;
  background-color: #555555;
  border: none;
  color: white;
  padding: 2px 4px;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
 onmouseover="this.style.backgroundColor='#333333'; onmouseout="this.style.backgroundColor='#555555';">Download Receipt</a>
        </div>
<div>
        <div>
            <h4>ORDER DETAILS</h4>
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
        <div style="border-bottom: 1px solid black">
            <h4>TOTAL PURCHASE</h4>
            <p style="margin: 0px ">Items Price: ${order.itemsPrice}</p>
            <p style="margin: 0px ">Tax Price: ${order.taxPrice}</p>
            <p style="margin: 0px ">Shipping Price: ${order.shippingPrice}</p>
            <p style="margin: 0px ">Total Price: ${order.totalPrice}</p>
        </div>

        <p style="margin-top: 2rem;  text-align: center;">
            Thanks, For Buying <br>
            OnGarage
        </p>
    </main>
</section>
`;

    await sendEmail({
        email: user.email,
        subject: 'OnGarage Order Confirmed',
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

exports.getSingleOrder = async (req, res, next) => {
    const order = await Transac.findById(req.params.id).populate('user', 'name email')
    
    if (!order) {
        return res.status(404).json({ message: `No Order found with this ID` })
    }
    res.status(200).json({
        success: true,
        order
    })
}

exports.allOrders = async (req, res, next) => {
    try {
        if (req.user.role !== 'farmer') {
            return res.status(403).json({ success: false, message: "Access denied. You must be a farmer to access this resource." });
        }

        const farmerId = req.user._id;
        console.log('Farmer ID:', farmerId);

        const orders = await Transac.aggregate([
            {
                $match: {
                    'orderItems.farmerid': farmerId
                }
            },
            {
                $project: {
                    totalAmount: 1,
                    orders: {
                        $filter: {
                            input: '$orderItems',
                            as: 'item',
                            cond: {
                                $eq: ['$$item.farmerid', farmerId]
                            }
                        }
                    }
                }
            }
        ]);

        let totalAmount = 0;
        orders.forEach(order => {
            totalAmount += order.totalPrice;
        });

        res.status(200).json({
            success: true,
            totalAmount,
            orders
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

async function updateStock(id, quantity) {
    const product = await Product.findById(id);
    product.stock = product.stock - quantity;
    await product.save({ validateBeforeSave: false })
}



exports.updateOrderConfirmation = async (req, res, next) => {
    try {
        const order = await Transac.findById(req.params.id);
        const user = await User.findById(order.user);
    
        const itemsToUpdate = [];
        for (let i = 0; i < order.orderItems.length; i++) {
            const item = order.orderItems[i];
            if (item.farmerid.toString() === req.user._id.toString()) {
                await updateStock(item.product, item.quantity);
                itemsToUpdate.push(i);
            }
        }
        for (const index of itemsToUpdate) {
            order.orderItems[index].orderConfirmation = "Confirmed";
        }

        await order.save();
        await ConfirmMailSend(user, order);

        res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}


exports.getOrderConfirmationFarmer = async (req, res, next) => {
    try {
        const order = await Transac.findById(req.params.id);
        const user = await User.findById(order.user);

        const confirmedItems = [];
        for (let i = 0; i < order.orderItems.length; i++) {
            const item = order.orderItems[i];
            if (item.farmerid.toString() === req.user._id.toString()) {
                confirmedItems.push({
                    _id: item._id,
                    productName: item.name,
                    quantity: item.quantity,
                    image: item.image,
                    orderStatus: item.orderStatus,
                    orderConfirmation: item.orderConfirmation
                });
            }
        }

        res.status(200).json({
            success: true,
            orderId: order._id,
            items: confirmedItems
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

exports.myOrders = async (req, res, next) => {
    const orders = await Transac.find({ user: req.user.id })

    if (!orders) {
        return res.status(404).json({ message: `Order found` })
    }

    res.status(200).json({
        success: true,
        orders
    })
}

exports.upProcessOrder = async (req, res ) =>
{
    try {
        const order = await Transac.findById(req.params.id);
        const user = await User.findById(order.user);
    
        const itemsToUpdate = [];
        for (let i = 0; i < order.orderItems.length; i++) {
            const item = order.orderItems[i];
            if (item.farmerid.toString() === req.user._id.toString()) {
                itemsToUpdate.push(i);
            }
        }
        for (const index of itemsToUpdate) {
            if (order.orderItems[index].orderStatus === 'Delivered') {
                return res.status(404).json({ message: `You have already delivered this order` })
            }
            
            order.orderItems[index].orderStatus = req.body.status;

            if(order.orderItems[index].orderStatus === 'Delivered') {
                order.deliveredAt = Date.now()
            }
        }

        await order.save();
        // await ConfirmMailSend(user, order);

        res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}