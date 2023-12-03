const express = require('express'); 
const app = express(); 
app.use(express.json());

require('dotenv').config()
const PORT = process.env.SERVER_PORT; 

const funcionarioController = require('./controller/FuncionarioController')
app.get('/funcionario', funcionarioController.findAll);
app.post('/funcionario', funcionarioController.create);


app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running. Listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error); 
}); 
