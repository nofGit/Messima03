const getCustomersDetails = (req,res)=>
{
    const con = global.Application.get('CONNECTION');
    const sql = `SELECT * FROM customers WHERE CustomerID = '${req.params.id}'`

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
    getCustomersDetails
}



