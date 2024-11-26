const form = document.getElementById('item-form');
const tableBody = document.querySelector('#receipt-table tbody');
const grandTotalElement = document.getElementById('grand-total');
let grandTotal = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get input values
  const itemName = document.getElementById('item-name').value;
  const itemPrice = parseFloat(document.getElementById('item-price').value);
  const itemQuantity = parseInt(document.getElementById('item-quantity').value);

  // Calculate total for this item
  const itemTotal = itemPrice * itemQuantity;

  // Update grand total
  grandTotal += itemTotal;
  grandTotalElement.textContent = `$${grandTotal.toFixed(2)}`;

  // Add a new row to the table
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${itemName}</td>
    <td>$${itemPrice.toFixed(2)}</td>
    <td>${itemQuantity}</td>
    <td>$${itemTotal.toFixed(2)}</td>
  `;
  tableBody.appendChild(row);

  // Clear form inputs
  form.reset();
});