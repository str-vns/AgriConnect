const mongoose = require('mongoose');

const connectDB = async () =>
{
    mongoose.connect(process.env.DB_URI, 
        ).then (con => {
            console.log(`You are connected To MongoDB HOST: ${con.connection.host}`);
        })
}

module.exports = connectDB;