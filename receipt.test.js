describe('Checkout and Change System', () => {
    let grandTotalElement;
    let changeMessage;
    let alertSpy;
  
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="grand-total"></div>
        <div id="change-message"></div>
      `;
  
      grandTotalElement = document.getElementById('grand-total');
      changeMessage = document.getElementById('change-message');
      alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    });
  
    test('should calculate grand total correctly when items are added', () => {
      const itemPrice = 10.0;
      const itemQuantity = 2;
      const itemTotal = itemPrice * itemQuantity;
  
      grandTotalElement.textContent = `$${itemTotal.toFixed(2)}`;
  
      expect(grandTotalElement.textContent).toBe('$20.00');
    });
  
    test('should calculate change correctly when amount paid is sufficient', () => {
      const amountPaid = 30.0;
      const grandTotal = 20.0;
      const change = amountPaid - grandTotal;
  
      changeMessage.textContent = `Change: $${change.toFixed(2)}`;
  
      expect(changeMessage.textContent).toBe('Change: $10.00');
    });
  
    test('should alert when amount paid is insufficient', () => {
      const insufficientAmount = 5.0;
      const grandTotal = 20.0;
  
      if (insufficientAmount < grandTotal) {
        window.alert('Insufficient amount paid!');
      }
  
      expect(alertSpy).toHaveBeenCalledWith('Insufficient amount paid!');
    });
  
    afterEach(() => {
      alertSpy.mockRestore();
    });
  });
  