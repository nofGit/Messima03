
const express = require('express');
const router = express.Router();
const orderHandler = require('../../handlers/ordersHandler/ordersHandler')

router.get('/:id' , (req, res) =>
{
    
    orderHandler.getOrderDetailsList(req,res)

})

module.exports= router;