const uuid = require('uuid');

let funcionarios = [
    {
        id: uuid.v4(),
        nome: 'Daniel',
        idade: 22,
        salario: 8.000
    }
]

const findAll = (req, res) => {
    res.status(200).send(funcionarios)
};

const findById = (req, res) => {
    if(req &&
        req.params &&
        req.params.id){
            const idFuncionario = req.params.id
            const entity = funcionarios.find((funcionario) => funcionario.id === idFuncionario)
            if(!entity){
                res.status(404).send('Entity not found by id')
                return
            }
            res.status(200).send(entity)
        }
    else{
        res.status(400).send('Missing param \'id\'')
    }
};

const create = (req, res) => {
    if(req &&
        req.body){
        const { nome, idade, salario } = req.body

        if(!nome || !idade || !salario){
            res.status(400).send('Missing required fields.')
            return
        }

        const newFuncionario = {
            id : uuid.v4(),
            nome,
            idade,
            salario
        }

        funcionarios.push(newFuncionario)
        res.status(200).send(newFuncionario)
    }
    else{
        res.status(400).send('Request has no body')
    }

};

const update = (req, res) => {
    if(req &&
        req.body &&
        req.params &&
        req.params.id){
            const idFuncionario = req.params.id;
            entity = funcionarios.find((funcionario) => funcionario.id === idFuncionario);
            if(!entity){
                res.status(404).send('Entity not found by id')
                return
            }

            const { nome, idade, salario } = req.body

            if(!nome || !idade || !salario){
                res.status(400).send('Missing required fields.')
                return
            }
    
            entity.nome = nome
            entity.salario = salario
            entity.idade = idade

            res.status(200).send(entity)
        }
    else{
        res.status(400)
        if(!req.params && !req.params.id)
            res.send('Missing request params')
        else
            res.send('Request has no body')
    }

};

const deleteById = (req, res) => {
    if(req &&
        req.params &&
        req.params.id){
            const idFuncionario = req.params.id;
            funcionarios = funcionarios.filter((funcionario) => funcionario.id !== idFuncionario)
            res.status(200).send(funcionarios)
        }
    else{
        res.status(400).send('Missing param \'id\'')
    }
};

module.exports = {
    findAll,
    create,
    update,
    findById,
    deleteById
}