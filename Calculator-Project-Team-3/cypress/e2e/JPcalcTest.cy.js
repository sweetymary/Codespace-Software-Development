describe('Calculator Operations', () => {
  beforeEach(() => {
      cy.visit('index.html');
  });

  it('should display numbers correctly', () => {
      cy.get('#display').should('have.value', '');

      // Enter numbers
      cy.get('.btn[value="1"]').click();
      cy.get('#display').should('have.value', '1');

      cy.get('.btn[value="2"]').click();
      cy.get('#display').should('have.value', '12');

      cy.get('.btn[value="3"]').click();
      cy.get('#display').should('have.value', '123');
       
  });

  it('should perform basic arithmetic operations', () => {
      // Enter expression
      cy.get('.btn[value="1"]').click();
      cy.get('.btn[value="+"]').click();
      cy.get('.btn[value="2"]').click();
      cy.get('.btn[value="="]').click();

      // check result is correct
      cy.get('#display').should('have.value', '3');

      // Enter another expression
      cy.get('.btn[value="*"]').click();
      cy.get('.btn[value="4"]').click();
      cy.get('.btn[value="-"]').click();
      cy.get('.btn[value="3"]').click();
      cy.get('.btn[value="="]').click();

      // check result is correct
      cy.get('#display').should('have.value', '9');
  });

  it('should clear the display', () => {
      // Entering expression
      cy.get('.btn[value="1"]').click();
      cy.get('.btn[value="+"]').click();
      cy.get('.btn[value="2"]').click();

      // Check clear button
      cy.get('.btn[value="C"]').click();
      cy.get('#display').should('have.value', '');
  });
});






