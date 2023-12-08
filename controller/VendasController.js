const uuid = require('uuid');
const mongoose = require('mongoose');

const VendaModel = mongoose.model('Venda', {
    _id: String,
    data: String,
    idVendedor: String,
    produtos: [{
        idProduto: String,
        nome: String,
        preco: String,
        qntd: Number
    }]
} );

const findAll = async (req, res) => {
    const vendas = await VendaModel.find();
    res.status(200).send(vendas)
};

const findByVendedor = async (req, res) => {
    if(req &&
        req.params &&
        req.params.id){
            const idVendedor = req.params.id
            const entity = await VendaModel.find((venda) => venda.idVendedor === idVendedor)
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

const findById = async (req, res) => {
    if(req &&
        req.params &&
        req.params.id){
            const idVenda = req.params.id
            const entity = await VendaModel.findById(idVenda)
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
        console.log(req.body)
        const { data, idVendedor, produtos} = req.body

        if(!idVendedor || !data || !produtos){
            res.status(400).send('Missing required fields.')
            return
        }

        const newVenda = new VendaModel({
            _id : uuid.v4(),
            data : data,
            idVendedor : idVendedor,
            produtos : produtos,
        });

        const entity = await newVenda.save()
        res.status(200).send(entity)
    }
    else{
        res.status(400).send('Request has no body')
    }

};

const deleteById = async (req, res) => {
    if(req &&
        req.params &&
        req.params.id){
            const idVenda = req.params.id;
            const entity = await VendaModel.findByIdAndDelete({_id : idVenda})
            res.status(200).send(entity)
        }
    else{
        res.status(400).send('Missing param \'id\'')
    }
};

module.exports = {
    findAll,
    findById,
    create,
    findByVendedor,
    deleteById
}