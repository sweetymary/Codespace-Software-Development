describe('rock,paper,scissors game', () => {
  it('passes ', () => {
    // Visit the game page
    cy.visit('./RPS Game.html')

    // Click on the Rock button
    cy.get('[data-cy="rock"]').click().then(() => {
      cy.log('rock button clicked')
    });

    // Assert user's option
    cy.get('[data-cy="user-option"]').should('have.text', 'Rock').and('be.visible').then(() => {
      cy.log('rock in user is displayed')
    });

    // Assert computer's option
    cy.get('[data-cy="computer-option"]').should('have.text', 'Paper').and('be.visible').then(() => {
      cy.log('computer selects paper')
    });

    // Assert result message
    cy.get('[data-cy="result"]').should('have.text', 'You lose!').and('be.visible').then(() => {
      cy.log('You lose!')
    });

    // Click on the Paper button
    cy.get('[data-cy="paper"]').click().then(() => {
      cy.log('paper button clicked')
    });

    // Assert user's option
    cy.get('[data-cy="user-option"]').should('have.text', 'Paper').and('be.visible').then(() => {
      cy.log('paper in user is displayed')
    });

    // Assert computer's option
    cy.get('[data-cy="computer-option"]').should('have.text', 'Paper').and('be.visible').then(() => {
      cy.log('computer selects paper')
    });

    // Assert result message
    cy.get('[data-cy="result"]').should('have.text', 'It is a tie!').and('be.visible').then(() => {
      cy.log('It is a tie!')
    });

    // Click on the Scissors button
    cy.get('[data-cy="scissors"]').click().then(() => {
      cy.log('scissors button clicked')
    });

    // Assert user's choice
    cy.get('[data-cy="user-option"]').should('have.text', 'Scissors').and('be.visible').then(() => {
      cy.log('scissors in user is displayed')
    });

    // Assert computer's option
    cy.get('[data-cy="computer-option"]').should('have.text', 'Paper').and('be.visible').then(() => {
      cy.log('computer selects paper')
    });

    // Assert result message
    cy.get('[data-cy="result"]').should('have.text', 'You win!').and('be.visible').then(() => {
      cy.log('You win!')
    });


  });
});



