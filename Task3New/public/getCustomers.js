
window.onload = getCustomers();


let ordersRadioButton = document.getElementById('ordersList');
ordersRadioButton.addEventListener('click' , getCustomers)


function getCustomers()
{
    fetch(`http://localhost:9000/api/Customers`)
    .then( res => res.json())
    .then( data => {listResult(data)})
    .catch( err => console.log(err))
}

let customerIdLink;

function listResult(customers)
{
        //find customer panel
   let customersPanel = document.getElementById('customersPanel');
   customersPanel.innerHTML='';
   let customerOrdersPanel = document.getElementById('customerOrdersPanel');
   customerOrdersPanel.innerHTML='';
   customerOrdersPanel.style.display='none';
   let clearorderDetailsPanel = document.getElementById('orderDetailsPanel');
   orderDetailsPanel.innerHTML='';
   clearorderDetailsPanel.style.display='none;'

   document.getElementById("customersPanel").innerHTML=''
        //create title to customer id
   let customersTitle = document.createElement('h3')
   customersTitle.id= 'title'
   customersPanel.appendChild(customersTitle)
   customersTitle.innerText = 'customersID'

        //create title to customer name
   let customersNameTitle = document.createElement('h3')
   customersNameTitle.id = 'title'
   customersPanel.appendChild(customersNameTitle)
   customersNameTitle.innerText = 'ContactName'

    customers.forEach(element => {
         customerIdLink = document.createElement('a')
        customerIdLink.setAttribute('href' ,  '#'  )
        customerIdLink.id = `customerId`
    
        customerIdLink.onclick= (e)=>{
            let CheckIfcustomersList = document.getElementById('customersList')
            if(CheckIfcustomersList.checked)
            {
                customersDetails(element.CustomerID ,e)
            }else{
                customerOrders(element.CustomerID, e)}
            }

            //show customerID
        customersPanel.appendChild(customerIdLink)
        customerIdLink.innerText = JSON.stringify(element.CustomerID) 

            //show customerName
        let customerNameSpan = document.createElement('span')
        customerNameSpan.id = 'customerNameSpan'
        customersPanel.appendChild(customerNameSpan)
        customerNameSpan.innerText = JSON.stringify(element.ContactName)
    })
     return;
}


