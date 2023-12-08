const mongoose = require('mongoose');

const FuncionarioModel = mongoose.model('Funcionario', {
    _id: String,
    nome: String,
    sexo: String,
    departamento: String,
    idade: Number,
    salario: Number
} );

module.exports = {
    FuncionarioModel
};