describe('shopping list app test', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:3000/c:/Users/yo_sw/OneDrive/Desktop/Testing%20and%20programming/Shopping%20%20List%20%20App.html')
    })
    it('displays the app correctly', () => {
    cy.get('#item').should('be.visible')
    cy.get('button[type="submit"]').should('contain', 'add item')
    })
    it('adds items to the shopping list',() => {
        cy.get('#item').type('rice')
        cy.get('button[type="submit"]').click()
        cy.get('#shoppingList').should('contain','rice')
    })
    it('deletes items from the shopping list',() => {
        cy.get('#item').type('rice')
        cy.get('button[type="submit"]').click()
        cy.get('li').contains('rice').find('button').click()
        cy.get('#shoppingList').should('not.contain','rice')
    })
    
  })