describe('RPS Game', () => {
  //Open the URL before each test
  beforeEach(() => {
    cy.visit('./RPS Game.html')
  });
  //Play the game with 'Rock' option and check the result
  it('Play the game with Rock option and check the result', () => {
    //Click the Rock button, should exist
    cy.get('[data-cy="rock"]').should('exist').click();
    //Check that the user option is set to 'Rock'
    cy.get('[data-cy="user-option"]').should('have.text, "Rock');
    //Check the computer option
    cy.get('[data-cy="computer-option"]').then((option) => {
      //If the computer option is set to 'Rock'
      if (option.text().includes("Rock")) {
        //The result is a tie
        cy.get('[data-cy="result"]').contains("It is a tie!");
      }
      //If the computer option is set to 'Paper'
      else if (option.text().includes("Paper")) {
        //The result is a  computer win
        cy.get('[data-cy="result"]').contains("you lose!");
      }
      //If the computer option is set to 'Scissors'
      else {
        //The result is a user win
        cy.get('[data-cy="result]').contains("You win!");
      }
    });
  });
  //Play the game with 'Paper' option and check the result
  it('Play the game with Paper option and check the result', () => {
    //Click the Paper button should exist
    cy.get('[data-cy="paper"]').should('exist').click();
    //Check that the user option is set to 'Paper'
    cy.get('[data-cy="user-option"]').should('have.text, "Paper');
    //Check the computer option
    cy.get('[data-cy="computer-option"]').then((option) => {
      //If the computer option is set to 'Paper'
      if (option.text().includes("Rock")) {
        //The result is a  user win
        cy.get('[data-cy="result"]').contains("You win!");
      }
      //If the computer option is set to 'Paper'
      else if (option.text().includes("Paper")) {
        //The result is a tie
        cy.get('[data-cy="result"]').contains("It is a tie!");
      }
      //If the computer option is set to 'Scissors'
      else {
        //The result is a computer win
        cy.get('[data-cy="result]').contains("You lose!");
      }
    });
  });


  //Play the game with 'Scissors' option and check the result
  it('Play the game with Scissors option and check the result', () => {
    //Click the Scissors button, should exist
    cy.get('[data-cy="scissors"]').should('exist').click();
    //Check that the user option is set to 'Scissors'
    cy.get('[data-cy="user-option"]').should('have.text, "Scissors');
    //Check the computer option
    cy.get('[data-cy="computer-option"]').then((option) => {
      //If the computer option is set to 'Rock'
      if (option.text().includes("Rock")) {
        //The result is a computer win
        cy.get('[data-cy="result"]').contains("You lose!");
      }
      //If the computer option is set to 'Paper'
      else if (option.text().includes("Paper")) {
        //The result is user win
        cy.get('[data-cy="result"]').contains("You win!");
      }
      //If the computer option is set to 'Scissors'
      else {
        //The result is a tie
        cy.get('[data-cy="result]').contains("It is a tie!");
      }
    });
  });


});
