const mongoose = require('mongoose');

const FuncionarioModel = mongoose.model('Funcionario', {
    _id: String,
    nome: String,
    cpf: String,
    email: String,
    sexo: String,
    departamento: String,
    salario: Number
} );

module.exports = {
    FuncionarioModel
};