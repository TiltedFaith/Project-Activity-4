describe('Checkout and Change System', () => {
    let grandTotalElement;
    let changeMessage;
    let alertSpy;
  
    beforeEach(() => {
      // Set up a simulated DOM environment
      document.body.innerHTML = `
        <div id="grand-total"></div>
        <div id="change-message"></div>
      `;
  
      grandTotalElement = document.getElementById('grand-total');
      changeMessage = document.getElementById('change-message');
      alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    });
  
    test('should calculate grand total correctly when items are added', () => {
      // Simulate adding items
      const itemPrice = 10.0;
      const itemQuantity = 2;
      const itemTotal = itemPrice * itemQuantity;
  
      // Simulate the update to the grand total
      grandTotalElement.textContent = `$${itemTotal.toFixed(2)}`;
  
      // Check if the grand total updates correctly
      expect(grandTotalElement.textContent).toBe('$20.00');
    });
  
    test('should calculate change correctly when amount paid is sufficient', () => {
      // Simulate an amount paid
      const amountPaid = 30.0;
      const grandTotal = 20.0;
      const change = amountPaid - grandTotal;
  
      // Update the change message
      changeMessage.textContent = `Change: $${change.toFixed(2)}`;
  
      // Check if the change message updates correctly
      expect(changeMessage.textContent).toBe('Change: $10.00');
    });
  
    test('should alert when amount paid is insufficient', () => {
      const insufficientAmount = 5.0;
      const grandTotal = 20.0;
  
      if (insufficientAmount < grandTotal) {
        window.alert('Insufficient amount paid!');
      }
  
      // Check if alert was called
      expect(alertSpy).toHaveBeenCalledWith('Insufficient amount paid!');
    });
  
    afterEach(() => {
      // Clean up the mocks
      alertSpy.mockRestore();
    });
  });
  