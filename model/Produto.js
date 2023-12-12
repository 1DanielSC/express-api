const mongoose = require('mongoose');

const ProdutoModel = mongoose.model('Produto', {
    _id: String,
    nome: String,
    qntd: Number,
    img: String,
    preco: Number
} );

module.exports = {
    ProdutoModel
};