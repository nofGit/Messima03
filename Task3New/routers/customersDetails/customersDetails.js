const express = require('express');
const router = express.Router();
const customersDetailsHandler = require('../../handlers/customersDetailsHandler/customersDetailsHandler')


router.get('/:id' , (req, res) =>
{
    customersDetailsHandler.getCustomersDetails(req,res)
})

module.exports= router;
