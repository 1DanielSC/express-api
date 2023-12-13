const uuid = require('uuid');
const { ProdutoModel } = require('../model/Produto')

const findAll = async (req, res) => {
    const produtos = await ProdutoModel.find();
    res.status(200).send(produtos)
};

const findById = async (req, res) => {
    if(req &&
        req.params &&
        req.params.id){
            const idProduto = req.params.id
            const entity = await ProdutoModel.findById(idProduto)
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
        const { nome, qntd, img, preco } = req.body

        if(!nome || !qntd || !preco){
            res.status(400).send('Missing required fields.')
            return
        }

        const newProduto = new ProdutoModel({
            _id : uuid.v4(),
            nome: nome,
            qntd: qntd,
            img: img,
            preco: preco
        });
        
        const entity = await newProduto.save()
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
            const idProduto = req.params.id;

            const entity = await ProdutoModel.findById(idProduto)
            if(!entity){
                res.status(404).send('Entity not found by id')
                return
            }

            const { nome, qntd, img, preco } = req.body
            if(!nome || !(qntd  || qntd===0) || !preco){
                res.status(400).send('Missing required fields.')
                return
            }
    
            entity.nome = nome
            entity.qntd = qntd
            entity.img = img
            entity.preco = preco

            const entityUpdated = await ProdutoModel.findByIdAndUpdate(idProduto, entity)
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
            const idProduto = req.params.id;
            const entity = await ProdutoModel.findByIdAndDelete({_id : idProduto})
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