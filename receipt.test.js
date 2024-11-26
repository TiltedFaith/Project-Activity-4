const { JSDOM } = require('jsdom');

describe('Checkout and Change System', () => {
  let dom, document, form, grandTotalElement, checkoutButton, amountPaidInput, changeMessage, tableBody;

  beforeEach(() => {
    // Create the mock HTML using jsdom
    dom = new JSDOM(`
      <html lang="en">
        <body>
          <div class="container">
            <h1>Receipt Calculator</h1>
            <form id="item-form">
              <input type="text" id="item-name" placeholder="Enter item name">
              <input type="number" id="item-price" placeholder="Enter item price">
              <input type="number" id="item-quantity" placeholder="Enter quantity">
              <button type="submit">Add Item</button>
            </form>
            <table id="receipt-table">
              <tbody></tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="total">Grand Total:</td>
                  <td class="total" id="grand-total">$0.00</td>
                </tr>
              </tfoot>
            </table>
            <div id="checkout-section">
              <label for="amount-paid">Amount Paid:</label>
              <input type="number" id="amount-paid" placeholder="Enter amount paid">
              <button id="checkout-button">Checkout</button>
              <p id="change-message">Change: $0.00</p>
            </div>
          </div>
        </body>
      </html>
    `);

    document = dom.window.document;
    form = document.getElementById('item-form');
    grandTotalElement = document.getElementById('grand-total');
    checkoutButton = document.getElementById('checkout-button');
    amountPaidInput = document.getElementById('amount-paid');
    changeMessage = document.getElementById('change-message');
    tableBody = document.querySelector('#receipt-table tbody');

    // Simulating the JavaScript code
    const script = document.createElement('script');
    script.textContent = `
      let grandTotal = 0;
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const itemName = document.getElementById('item-name').value;
        const itemPrice = parseFloat(document.getElementById('item-price').value);
        const itemQuantity = parseInt(document.getElementById('item-quantity').value);
        const itemTotal = itemPrice * itemQuantity;
        grandTotal += itemTotal;
        grandTotalElement.textContent = '$' + grandTotal.toFixed(2);
        const row = document.createElement('tr');
        row.innerHTML = \`<td>\${itemName}</td><td>$\${itemPrice.toFixed(2)}</td><td>\${itemQuantity}</td><td>$\${itemTotal.toFixed(2)}</td>\`;
        tableBody.appendChild(row);
      });
      
      checkoutButton.addEventListener('click', function() {
        const amountPaid = parseFloat(amountPaidInput.value);
        if (amountPaid < grandTotal) {
          alert('Insufficient amount paid!');
        } else {
          const change = amountPaid - grandTotal;
          changeMessage.textContent = 'Change: $' + change.toFixed(2);
        }
      });
    `;
    document.body.appendChild(script);
  });

  test('should calculate grand total correctly when items are added', () => {
    // Simulate filling out the form and submitting it
    document.getElementById('item-name').value = 'Item 1';
    document.getElementById('item-price').value = '10';
    document.getElementById('item-quantity').value = '2';
    
    form.dispatchEvent(new dom.window.Event('submit'));

    // Check if the grand total updates correctly
    expect(grandTotalElement.textContent).toBe('$20.00');
  });

  test('should calculate change correctly when amount paid is sufficient', () => {
    // Set the grand total to 20
    grandTotalElement.textContent = '$20.00';
    amountPaidInput.value = '30';

    // Trigger the checkout button click
    checkoutButton.click();

    // Check if the change message updates correctly
    expect(changeMessage.textContent).toBe('Change: $10.00');
  });

  test('should alert when amount paid is insufficient', () => {
    // Set the grand total to 20
    grandTotalElement.textContent = '$20.00';
    amountPaidInput.value = '10';

    // Spy on the alert function
    const alertSpy = jest.spyOn(dom.window, 'alert').mockImplementation(() => {});

    // Trigger the checkout button click
    checkoutButton.click();

    // Check if the alert was called
    expect(alertSpy).toHaveBeenCalledWith('Insufficient amount paid!');
    
    // Restore the original alert
    alertSpy.mockRestore();
  });
});
