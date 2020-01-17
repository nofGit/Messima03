const GetCustomers = (req, res)=>
{
    const con = global.Application.get('CONNECTION')
    const sql = `SELECT CustomerID, ContactName FROM customers`
    
    con.query(sql , (err, result , fields)=>
    {
        if(err)
        {
            res.json(err)
        }else
        {
            res.json(result)
        }
    })  
}


const getCustomerOrders =(req, res)=>
{
    const con = global.Application.get('CONNECTION');
    // const sql = `SELECT * FROM orders WHERE CustomerID ='${req.params.id}' ` 
    const sql =  `SELECT orders.OrderID,orders.CustomerID,orders.OrderDate, orders.RequiredDate,orders.ShippedDate,orders.ShipVia,orders.Freight,orders.ShipName,orders.ShipAddress,orders.ShipCity,orders.ShipRegion,orders.ShipPostalCode,orders.ShipCountry, employees.LastName, employees.FirstName 
    FROM orders INNER JOIN employees ON orders.EmployeeID=employees.EmployeeID WHERE orders.CustomerID='${req.params.id}'`;

    con.query(sql , (err, result , fields) =>
    {
        if(err){
            res.json(err)
        }else{
            if(result.length > 0)
            {
                res.json(result)
            }else{
                res.json('no oreders for this customer')
            }
        }
    })
}



    

module.exports = {
    GetCustomers,
    getCustomerOrders
}
