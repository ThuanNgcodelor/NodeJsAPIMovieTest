const mongoose = require('mongoose') ;

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Nodejs');
        console.log('Ok');

    }catch (err) {
        console.log('Not found', err );
        process.emit(1);
    }
};

module.exports = connectDB;
