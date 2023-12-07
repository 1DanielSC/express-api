const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config()

const app = express(); 
app.use(cors());
app.use(routes.router); //Rotas REST da aplicação
app.use(express.json());

const PORT = process.env.SERVER_PORT; 
const startServer = async () => {
    app.listen(PORT, (error) =>{ 
        if(!error) 
            console.log("Server is Successfully Running. Listening on port "+ PORT)
        else 
            console.log("Error occurred, server can't start", error); 
    }); 
}

const VendasController = require('./controller/VendasController')
app.get('/venda', VendasController.findAll);
app.get('/venda/vendedor/:id', VendasController.findByVendedor);
app.get('/venda/:id', VendasController.findById);
app.post('/venda', VendasController.create);
app.delete('/venda/:id', VendasController.deleteById);

const mongodb_host = process.env.MONGODB_HOST || 'localhost';
const mongodb_port = process.env.MONGODB_PORT || 27017;
const mongodb_user = process.env.MONGODB_USERNAME || 'root';
const mongodb_password = process.env.MONGODB_PASSWORD || 'root';
const mongodb_database = process.env.MONGODB_DATABASE || 'database';
const mongodb_url = 'mongodb://'+
        mongodb_user+':'+mongodb_password+'@'+
        mongodb_host+':'+mongodb_port+'/'+
        mongodb_database;

const connectToDatabase = async () => {
    try {
        console.log('Connecting to MongoDB...')
        await mongoose.connect(mongodb_url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}


const initialize = async () => {
    await startServer();
    await connectToDatabase();
}

initialize();