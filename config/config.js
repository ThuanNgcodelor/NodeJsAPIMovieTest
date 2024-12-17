const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://davidnguyen:thuan417@davidnguyen.7rlnm.mongodb.net/?retryWrites=true&w=majority&appName=NodeJs');
        console.log('Ok');
    } catch (err) {
        console.log('Not found', err);
        process.exit(1);
    }
};

module.exports = connectDB;
