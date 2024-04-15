describe('Calculator App', () => {
  beforeEach(() => {
    cy.visit('./index.html')
  })
  it('should display calculator elements correctly', () => { 
    cy.get('.calculator').should('exist')
    cy.get('#display').should('be.disabled')
    cy.get('.btn').should('have.length', 17) // 16 buttons plus display
  })
  it('should perform multiplication  correctly', () => {
    cy.get('.btn[value="5"]').click()
    cy.get('.btn[value="*"]').click()
    cy.get('.btn[value="2"]').click()
    cy.get('.btn[value="="]').click()
    cy.get('#display').should('have.value', '10')
  })

 it('should perform division correctly', () => {
    cy.get('.btn[value="6"]').click()
    cy.get('.btn[value="/"]').click()
    cy.get('.btn[value="2"]').click()
    cy.get('.btn[value="="]').click()
    cy.get('#display').should('have.value', '3')
  })
})