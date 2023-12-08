const express = require('express'); 
const cors = require('cors');
const { connectToDatabase } = require('./database/mongodb')
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


const initialize = async () => {
    await startServer();
    await connectToDatabase();
}

initialize();