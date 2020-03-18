const { Product, Order } = require('../models/index.js')
const OrderController = {
    getAll(req,res){
        Order.findAll({
            include:[Product]
        })
        .then(orders=>res.send(orders))
    },
    insert(req,res){
        Order.create({
            status:"pending",
            fechaEntrega:req.body.fechaEntrega
        })
        .then(order=>{
            order.addProduct(req.body.products);
            res.send(order)
        })
    }
}
module.exports = OrderController;