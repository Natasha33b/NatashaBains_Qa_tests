// qa_unfollow.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

const unfollow_url = 'https://young-basin-68766.herokuapp.com/users/1';
const login_url = 'https://young-basin-68766.herokuapp.com/login';
const user = 'natasha.bains@checkfront.com'
const pw = 'testPW!23'
 

// https://on.cypress.io/writing-first-test
describe('Follow and unfollow a user',() => {
 
    Cypress.on('uncaught:exception', function (err, runnable) {
        //debugger;
       return false;
    });
    it('finds the follow button', () => {
     
           //input email
    cy.visit(login_url)
    cy.get('#session_email')
    .click()
    .clear()
    .type(user)

    // input password
    cy.get('#session_password')
    .click()
    .clear()
    .type(pw)

   cy.get('#session_remember_me')
   .click()
    // log in
    cy.get('form').submit()

    // we should be redirected to the users homepage
    cy.url().should('include', '/users/36')
        
       
        cy.visit(unfollow_url)
        cy.url().should('include', '/users/1')
        cy.get('#follow_form > form > input.btn').click()
       
        
    })
})
