// sample.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

var url = 'https://example.cypress.io/'

// https://on.cypress.io/writing-first-test
describe('My First Test',() => {
    it('finds the content type', () => {
        cy.visit(url)

        cy.contains('type').click()
        cy.url().should('include','/commands/actions')
    })
})