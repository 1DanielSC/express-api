const funcionarioController = require('./controller/FuncionarioController')
const express = require('express');

const router = express.Router();

router.get('/funcionario', funcionarioController.findAll);
router.get('/funcionario/:id', funcionarioController.findById);
router.post('/funcionario', funcionarioController.create);
router.put('/funcionario/:id', funcionarioController.update);
router.delete('/funcionario/:id', funcionarioController.deleteById);

const VendasController = require('./controller/VendasController')

router.get('/venda', VendasController.findAll);
router.get('/venda/vendedor/:id', VendasController.findByVendedor);
router.get('/venda/:id', VendasController.findById);
router.post('/venda', VendasController.create);
router.delete('/venda/:id', VendasController.deleteById);

module.exports = {
    router
}