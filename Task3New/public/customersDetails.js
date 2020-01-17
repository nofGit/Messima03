let customersList = document.getElementById('customersList')
let clearPage
// console.log(customersList)
customersList.addEventListener('click' , ()=>
{

    clearPage = document.getElementById('customerOrdersPanel')
    clearPage.style.display='none'
   let customerOrderDetailsDiv = document.getElementById('orderDetailsPanel');
   customerOrderDetailsDiv.style.display='none';

   customerIdLink.onclick = ()=> {console.log("hellocustomerIdLink")}
   
} )



function customersDetails(customersDetails, e)
{
    e.preventDefault()

    fetch(`http://localhost:9000/api/CustomerDetails/${customersDetails}`)
    .then(res => res.json())
    .then(data => getCustomerDetailsList(data))
    .catch(err => console.log(err))

}


function getCustomerDetailsList(customersData)
{
    clearPage.style.display='block';
    clearPage.innerHTML = `
    <h1>Customer ${JSON.stringify(customersData.CustomerID)} Details: </h1>
    <span>CustomerID: ${JSON.stringify(customersData.CustomerID)} </span><br>
    <span> CompanyName:${JSON.stringify(customersData.CompanyName)} </span><br>
    <span> ContactName: ${JSON.stringify(customersData.ContactName)} </span><br>
    <span>ContactTitle:${JSON.stringify(customersData.ContactTitle)} </span><br>
    <span>Address:${JSON.stringify(customersData.Address)} </span><br>
    <span>City:${JSON.stringify(customersData.City)} </span><br>
    <span>Region:${JSON.stringify(customersData.Region)} </span><br>
    <span>PostalCode:${JSON.stringify(customersData.PostalCode)} </span><br>
    <span>Country:${JSON.stringify(customersData.Country)} </span><br>
    <span>Phone:${JSON.stringify(customersData.Phone)} </span><br>
    <span>Fax${JSON.stringify(customersData.Fax)} </span><br>
    `
}

