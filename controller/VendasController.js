const uuid = require('uuid');
let vendas = [
    {
        id: uuid.v4(),
        idVendedor: '1',
        produtos:
            [{
                idProduto: '1',
                preco: 10,
                nome: "a",
                qntd: 1
            },
            {
                idProduto: '1',
                preco: 20,
                nome: "b",
                qntd: 2
            },
        ]
    },{
        id: uuid.v4(),
        idVendedor: '2',
        produtos:
            [{
                idProduto: '12',
                preco: 100,
                nome: "bbb",
                qntd: 2
            },
        ]

    }
]

const findAll = (req, res) => {
    res.status(200).send(vendas)
};

const findByVendedor = (req, res) => {
    if(req &&
        req.params &&
        req.params.id){
            const idVendedor = req.params.id
            const entity = vendas.find((venda) => venda.idVendedor === idVendedor)
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

const findById = (req, res) => {
    if(req &&
        req.params &&
        req.params.id){
            const idVenda = req.params.id
            const entity = vendas.find((venda) => venda.id === idVenda)
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
        const { id, idVendedor, produtos} = req.body

        if(!idVendedor || !produtos){
            res.status(400).send('Missing required fields.')
            return
        }

        const newVenda = {
            id : uuid.v4(),
            idVendedor,
            produtos,
        }

        vendas.push(newVenda)
        res.status(200).send(newVenda)
    }
    else{
        res.status(400).send('Request has no body')
    }

};

const deleteById = (req, res) => {
    if(req &&
        req.params &&
        req.params.id){
            const idVenda = req.params.id;
            vendas = vendas.filter((venda) => venda.id !== idVenda)
            res.status(200).send(vendas)
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