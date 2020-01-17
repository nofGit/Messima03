const path = require('path');
const express = require('express');
const app = express();
const db = require('./db/db')
global.Application = app;

app.use(express.static(path.join(__dirname , 'public')));
app.use(express.json());

db.openDb(app)
.then( (state) =>
{
    if(state)
    {
        console.log('data-base is connect');
    }
})
.catch((err)=>
{
    console.log(err);
    
});

app.use('/api/Customers' , require('./routers/customers/customers'))
app.use('/api/Orders' , require('./routers/orders/orders'))
app.use('/api/CustomerDetails' , require('./routers/customersDetails/customersDetails'))

app.listen(9000, ()=>
{
    console.log('running on 9000');
});
