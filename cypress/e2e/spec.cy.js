describe('template spec', () => {
  it('passes', () => {
    //Visit the page
    cy.visit('https://example.cypress.io')
    //Query for an element in the page
    cy.contains('type').click()

    // Interact with the element(type text into an input field or click on a button)

    // Assert about the content on the page (for example, check if a specific text is present)
    cy.contains('Action')
  })
})


describe('Actions Test', () => {
  it('Visits the Actions page, types email address, and asserts input field content', () => {
    // Visit the Actions page
    cy.visit('https://example.cypress.io/commands/actions')

    // Query for the email input field
    cy.get('#email1')
      // Type your email address
      .type('example@example.com')
      // Assert about the content of the input field
      .should('have.value', 'example@example.com')
  })
})



describe('Actions Test', () => {
  it('Visits the Actions page and performs actions', () => {
    // Visit the Actions page
    cy.visit('https://example.cypress.io/commands/actions')

    // Query for the action button with class ".action-btn" and click on it
    cy.get('.action-btn').click()

    // Query for the element with id "#action-canvas" and click on it
    cy.get('#action-canvas').click()

    // Query for the element with id "#action-canvas" and click on the "topLeft"
    cy.get('#action-canvas').click('topLeft')

    // Query for the element with id "#action-canvas" and click on the "bottomRight"
    cy.get('#action-canvas').click('bottomRight')
  })
})
