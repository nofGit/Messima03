
const getOrderDetailsList = (req,res)=>
{
    const con = global.Application.get('CONNECTION');
    const orderDetails = '`order details`' ;
    const sql = `SELECT *, SUM(Quantity * UnitPrice) as 'Total' FROM ${orderDetails} where OrderID = '${req.params.id}'`;
    con.query(sql, (err,result, fields)=>
    {
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(result[0])
        }
    })
}

module.exports = {
    getOrderDetailsList
}

