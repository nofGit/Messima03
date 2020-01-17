const express = require('express');
const router = express.Router();
const customersHandler = require('../../handlers/customersHandler/customersHandler');

router.get('/', (req,res) =>
{
    customersHandler.GetCustomers(req,res)
})


router.get('/:id' , (req, res) =>
{
    customersHandler.getCustomerOrders(req,res)
})












module.exports= router;
