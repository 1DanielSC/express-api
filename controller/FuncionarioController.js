const uuid = require('uuid');

const funcionarios = [
    {
        id: uuid.v4(),
        nome: 'Daniel',
        idade: 22,
        salario: 8.000
    }
]

const findAll = (req, res) => {
    res.status(200)
    res.send(funcionarios)
};

const create = (req, res) => {
    if(req &&
        req.body){
        const { nome, idade, salario } = req.body

        if(!nome || !idade || !salario){
            res.status(400)
            res.send('Missing required fields.')
        }

        const newFuncionario = {
            id : uuid.v4(),
            nome,
            idade,
            salario
        }

        funcionarios.push(newFuncionario)
        res.status(200)
        res.send(newFuncionario)
    }
    else{
        res.status(400)
        res.send('Request has no body')
    }

};

module.exports = {
    findAll,
    create
}