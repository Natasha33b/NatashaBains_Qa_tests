// qa_jpg.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

const url = 'https://young-basin-68766.herokuapp.com/about';

// https://on.cypress.io/writing-first-test
describe('Test the char limit of posts',() => {
    
    before(() => {
        cy.visit(url)
        cy.get()
        cy.clear()
    })

    after(() =>{
        cy.get('.action-form').submit()
    })
    
    it('select an image and display it in the post', () => {
        cy.type(input)
        .should('have.value',)
        .and('not.have.value',)
    })

})