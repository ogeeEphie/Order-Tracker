const Expenses = document.getElementById('kindOfFood');
const ExpNumOfPlates = document.getElementById('numOfPlates');
const TableNumber = document.getElementById('tableNumber');
const DateTime = document.getElementById('dateTime');
const Amount = document.getElementById('amount');
const Btn = document.getElementById('button');
const TblBody = document.getElementById('orderTable');

// Empty array to hold orders
const orders = [];

function placeOrder() {
  // Get the input values
  const kindOfFood = Expenses.value;
  const numOfPlates = ExpNumOfPlates.value;
  const tableNumber = TableNumber.value;
  const dateTime = DateTime.value;
  const amount = Amount.value;

  // Calculate the total amount
  const totalAmount = numOfPlates * amount;

  // Create a new order object
  const newOrder = {kindOfFood: kindOfFood, numOfPlates: numOfPlates, tableNumber: tableNumber, dateTime: dateTime, amount: amount,
    totalAmount: totalAmount};
  orders.push(newOrder);

  // Clear the form fields
  Expenses.value = '';
  ExpNumOfPlates.value = '';
  TableNumber.value = '';
  DateTime.value = '';
  Amount.value = '';

  // Update the order details in the table
  populateOrderTable(orders);
}

function populateOrderTable(update) {
  // Clear the existing table rows
  let table = '';

  // Loop through the orders array and populate the table
  for (let i = 0; i < update.length; i++) {
    const order = update[i];

    table += `<tr>
    <td> ${order.kindOfFood} </td>
    <td> ${order.numOfPlates} </td>
    <td> ${order.tableNumber} </td>
    <td> ${order.dateTime} </td>
    <td> ${order.amount} </td>
    <td> ${order.totalAmount} </td>
    </tr>`
    
}
    

    TblBody.innerHTML = table;
  }


// Add event listener to the form submission
Btn.addEventListener('click', placeOrder);
