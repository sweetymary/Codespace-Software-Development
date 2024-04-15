describe('Computing Course Page Test', () => {
  it('Visit Edinburgh College Website and close cookies modal', () => {
    // Visit the URL
    cy.visit('https://www.edinburghcollege.ac.uk')
    //Close the cookie modal
    //Assertion: Make sure the close button exists and click on it
    cy.get('#ccc-close').should('exist').click().then(() => {
      cy.log('Cookies modal closed.')
    }).then(() => {
      cy.log('Cookies modal not found,continuing...')
    })

    //Click on the 'Courses' link
    //Assertion: Make sure the 'Course' link exist
    cy.contains('Course').should('exist').and('be.visible').click()
    cy.log('Clicked on Course link')
    //Click on the 'Computing' link
    //Assertion: Make sure the 'Computing' link exists and is clickable
    cy.contains('Computing').should('exist').and('be.visible').click()
    cy.log('Clicked on Computing link')
    //Check if we are in the 'Computing' course page
    //Assertion: Make sure the current URL is the 'Computing' course page URL
    cy.url().should('eq', 'https://www.edinburghcollege.ac.uk/courses/explore-subject-areas/computing')
    cy.log('Computing Course Page')
  })
})