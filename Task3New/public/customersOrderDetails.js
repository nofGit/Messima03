
function getOrderDetails(dataSpesificId)
{    
   
    fetch(`http://localhost:9000/api/Orders/${dataSpesificId}`)
    .then(res => res.json())
    .then(data => orderDetailsList(data))
    .catch(err => console.log(err));
    return false
}


function orderDetailsList(orderDetails)
{


    orderDetailsPanel.id = 'orderDetailsPanel';

    let customerOrdersPanel = document.getElementById('orderDetailsPanel')
    customerOrdersPanel.style.display='block'

    customerOrdersPanel.innerHTML = `
    <u> Order Details For Order Number: ${orderDetails.OrderID} </u>
            <br>
            <br>
            <span> <u> OrderID:</u> ${JSON.stringify(orderDetails.OrderID)} </span><br>
            <span><u> ProductID: </u> ${JSON.stringify(orderDetails.ProductID)}  </span><br>
            <span><u> UnitPrice: </u> ${JSON.stringify(orderDetails.UnitPrice)}  </span><br>
            <span> <u> Quantity: </u> ${JSON.stringify(orderDetails.Quantity)}  </span><br>
            <span> <u> Discount: </u> ${JSON.stringify(orderDetails.Discount)}  </span><br>

            <h3>TOTAL: ${JSON.stringify(orderDetails.Total)} </h3>
            <br>
    `
return;
}