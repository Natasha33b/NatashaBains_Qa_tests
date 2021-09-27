// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --


//  Cypress.Commands.add('login', (email, password) => {

//     const login_url = 'https://young-basin-68766.herokuapp.com/login';
//     const user = 'natasha.bains@checkfront.com'
//     const pw = 'testPW!23'


//     describe('logs in',() => {

//         Cypress.on('uncaught:exception', function (err, runnable) {
//             //debugger;
//             return false;
//         });

//         it('Log in to the application', () => {
//             //input email
//             cy.visit(login_url)
//             cy.get('#session_email')
//             .click()
//             .clear()
//             .type(user)
        
//             // input password
//             cy.get('#session_password')
//             .click()
//             .clear()
//             .type(pw)

//             cy.get('#session_remember_me')
//            .click()

//             // log in
//             cy.get('form').submit()

//             // we should be redirected to the users homepage
//             cy.url().should('include', '/users/36')
            
//         })
//     })
//  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
