// qa_help_link.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

const url = 'https://young-basin-68766.herokuapp.com/about'

// https://on.cypress.io/writing-first-test
describe('Test the Sample app\'s link to the help page',() => {
    it('finds the help button', () => {
        cy.visit(url)

        cy.contains('Help').click()
        cy.url().should('include','/help')
    })
})