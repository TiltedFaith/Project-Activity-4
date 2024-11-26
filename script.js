const form = document.getElementById('item-form');
const tableBody = document.querySelector('#receipt-table tbody');
const grandTotalElement = document.getElementById('grand-total');
const amountPaidInput = document.getElementById('amount-paid');
const checkoutButton = document.getElementById('checkout-button');
const changeMessage = document.getElementById('change-message');

let grandTotal = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const itemName = document.getElementById('item-name').value;
  const itemPrice = parseFloat(document.getElementById('item-price').value);
  const itemQuantity = parseInt(document.getElementById('item-quantity').value);
  const itemTotal = itemPrice * itemQuantity;

  grandTotal += itemTotal;
  grandTotalElement.textContent = `$${grandTotal.toFixed(2)}`;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${itemName}</td>
    <td>$${itemPrice.toFixed(2)}</td>
    <td>${itemQuantity}</td>
    <td>$${itemTotal.toFixed(2)}</td>
  `;
  tableBody.appendChild(row);

  form.reset();
});

checkoutButton.addEventListener('click', function() {
  const amountPaid = parseFloat(amountPaidInput.value);

  if (amountPaid < grandTotal) {
    alert('Insufficient amount paid!');
  } else {
    const change = amountPaid - grandTotal;
    changeMessage.textContent = `Change: $${change.toFixed(2)}`;
  }
});
