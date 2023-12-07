const funcionarioController = require('./controller/FuncionarioController')
const express = require('express');

const router = express.Router();

router.get('/funcionario', funcionarioController.findAll);
router.get('/funcionario/:id', funcionarioController.findById);
router.post('/funcionario', funcionarioController.create);
router.put('/funcionario/:id', funcionarioController.update);
router.delete('/funcionario/:id', funcionarioController.deleteById);

module.exports = {
    router
}