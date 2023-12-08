const uuid = require('uuid');
const { FuncionarioModel } = require('../model/Funcionario')

const findAll = async (req, res) => {
    const funcionarios = await FuncionarioModel.find();
    res.status(200).send(funcionarios)
};

const findById = async (req, res) => {
    if(req &&
        req.params &&
        req.params.id){
            const idFuncionario = req.params.id
            const entity = await FuncionarioModel.findById(idFuncionario)
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

const create = async (req, res) => {
    if(req &&
        req.body){
        const { nome, sexo, departamento, idade, salario } = req.body

        if(!nome || !idade || !salario){
            res.status(400).send('Missing required fields.')
            return
        }

        const newFuncionario = new FuncionarioModel({
            _id : uuid.v4(),
            nome: nome,
            sexo: sexo,
            departamento: departamento,
            idade: idade,
            salario: salario
        });
        
        const entity = await newFuncionario.save()
        res.status(200).send(entity)
    }
    else{
        res.status(400).send('Request has no body')
    }
};

const update = async (req, res) => {
    if(req &&
        req.body &&
        req.params &&
        req.params.id){
            const idFuncionario = req.params.id;

            const entity = await FuncionarioModel.findById(idFuncionario)
            if(!entity){
                res.status(404).send('Entity not found by id')
                return
            }

            const { nome, sexo, departamento, idade, salario } = req.body
            if(!nome || !idade || !salario){
                res.status(400).send('Missing required fields.')
                return
            }
    
            entity.nome = nome
            entity.salario = salario
            entity.idade = idade
            entity.sexo = sexo
            entity.departamento = departamento

            const entityUpdated = await FuncionarioModel.findByIdAndUpdate(idFuncionario, entity)
            res.status(200).send(entityUpdated)
        }
    else{
        res.status(400)
        if(!req.params && !req.params.id)
            res.send('Missing request params')
        else
            res.send('Request has no body')
    }

};

const deleteById = async (req, res) => {
    if(req &&
        req.params &&
        req.params.id){
            const idFuncionario = req.params.id;
            const entity = await FuncionarioModel.findByIdAndDelete({_id : idFuncionario})
            res.status(200).send(entity)
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