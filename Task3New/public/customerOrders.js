
function customerOrders(elementId, e)
{
    customerOrdersDiv = document.getElementById('orderDetailsPanel');
    customerOrdersDiv.style.display='none';
    e.preventDefault()
    fetch(`http://localhost:9000/api/Customers/${elementId}`)
    .then(res => res.json())
    .then(data => showCustomerOrders(data))
    .catch(err => console.log(err));
}

let customerOrdersDiv ='';
function showCustomerOrders(data)
{
    customerOrdersDiv = document.getElementById('customerOrdersPanel');
    customerOrdersDiv.style.display='block';

    let newText = "";

    for(i=0; i<data.length; i++)
    {
         newText += `
          <br>
          <a onclick="event.preventDefault() , getOrderDetails(${data[i].OrderID})" href='#'> <u> OrderID: </u>${JSON.stringify(data[i].OrderID)} </a>
          <span><u> CustomerID: </u> ${JSON.stringify(data[i].CustomerID)}  </span><br>
          <span> <u> EmployeeID:</u> ${JSON.stringify(data[i].FirstName)} ${JSON.stringify(data[i].LastName)}  </span><br> 
          <span><u> OrderDate: </u> ${JSON.stringify(data[i].OrderDate)}  </span><br>
          <span> <u> RequiredDate: </u> ${JSON.stringify(data[i].RequiredDate)}  </span><br>
          <span> <u> ShippedDate: </u> ${JSON.stringify(data[i].ShippedDate)}  </span><br>
          <span> <u> ShipVia: </u> ${JSON.stringify(data[i].ShipVia)}  </span><br>
          <span> <u> Freight: </u> ${JSON.stringify(data[i].Freight)}  </span><br>
          <span> <u> ShipName: </u> ${JSON.stringify(data[i].ShipName)}  </span><br>
          <span> <u> ShipAddress: </u> ${JSON.stringify(data[i].ShipAddress)}  </span><br>
          <span> <u> ShipCity: </u> ${JSON.stringify(data[i].ShipCity)}  </span><br>
          <span> <u> ShipRegion: </u> ${JSON.stringify(data[i].ShipRegion)}  </span><br>
          <span> <u> ShipPostalCode: </u> ${JSON.stringify(data[i].ShipPostalCode)}  </span><br>
          <span> <u> ShipCountry: </u> ${JSON.stringify(data[i].ShipCountry)}  </span>
          <br>
          <br> 
          ` 
        }   

        customerOrdersDiv.innerHTML = newText

    return customerOrdersDiv
}   

