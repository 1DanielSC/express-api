require('dotenv').config()

const mongodb_host = process.env.MONGODB_HOST || 'localhost';
const mongodb_port = process.env.MONGODB_PORT || 27017;
const mongodb_user = process.env.MONGODB_USERNAME || 'root';
const mongodb_password = process.env.MONGODB_PASSWORD || 'root';
const mongodb_database = process.env.MONGODB_DATABASE || 'database';

const config = {
        host : mongodb_host,
        port : mongodb_port,
        user : mongodb_user,
        password : mongodb_password,
        database : mongodb_database,
        url : 'mongodb://'+
                mongodb_user+':'+mongodb_password+'@'+
                mongodb_host+':'+mongodb_port+'/'+
                mongodb_database
}

module.exports = config;