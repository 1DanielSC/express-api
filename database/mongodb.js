const mongoose = require('mongoose');
const mongodb_config = require('../config/mongodb.config')

const connectToDatabase = async () => {
    try {
        console.log('Connecting to MongoDB...')
        await mongoose.connect(mongodb_config.url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = {
    connectToDatabase
};