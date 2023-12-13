const express = require('express');
const router = express.Router();
router.use(express.json());

const funcionarioController = require('./controller/FuncionarioController')
router.get('/funcionario', funcionarioController.findAll);
router.get('/funcionario/:id', funcionarioController.findById);
router.post('/funcionario', funcionarioController.create);
router.put('/funcionario/:id', funcionarioController.update);
router.delete('/funcionario/:id', funcionarioController.deleteById);

const VendasController = require('./controller/VendasController')
router.get('/venda', VendasController.findAll);
router.get('/venda/:id', VendasController.findById);
router.post('/venda', VendasController.create);
router.delete('/venda/:id', VendasController.deleteById);

const produtoController = require('./controller/ProdutoController')
router.get('/produto', produtoController.findAll);
router.get('/produto/:id', produtoController.findById);
router.post('/produto', produtoController.create);
router.put('/produto/:id', produtoController.update);
router.delete('/produto/:id', produtoController.deleteById);

module.exports = {
    router
}