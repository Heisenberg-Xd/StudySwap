// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = 'mongodb+srv://kartikesh:Xcdmp301325@studyswap.goruf.mongodb.net/';

        await mongoose.connect(uri)
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
