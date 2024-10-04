// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = 'mongodb+srv://omgaud31:%3Cdb_password%3E@studyswap.m5uy2.mongodb.net/';

        await mongoose.connect(uri)
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;