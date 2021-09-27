// // qa_post_char_limit.js created with Cypress
// //
// // Start writing your Cypress tests below!
// // If you're unfamiliar with how Cypress works,
// // check out the link below and learn how to write your first test:
// // https://on.cypress.io/writing-first-test

// const { markAsUntransferable } = require("worker_threads")
const url = 'https://young-basin-68766.herokuapp.com/'
import { login } from "./qa_login.js";
// https://on.cypress.io/writing-first-test
before(function () {
        login()
})

describe('Go to the home page and make a comment',() => {
    it('go to the home page', () => {
        //login()
        cy.contains('sample app').click()
        //.click()
        //cy.visit(url)

        //cy.contains('Help').click()
        //cy.url().should('include','/help')
    })
})

// const url = 'https://young-basin-68766.herokuapp.com/'

// // https://on.cypress.io/writing-first-test
// describe('Test the char limit of posts',() => {
    
//     //before(() => {
        
//    // })

//    // after(() =>{
//    //     cy.get('.action-form').submit()
//    // })
    
//     it('tests with 140 char', () => {
//         cy.visit(url)
//         cy.get('#logo').click
//         //cy.clear()
//         //cy.type('test')
//         //.should('have.value',)
//         //.and('not.have.value',)
//     })
//   //  it('tests with more than 140 char', () => {
//    //     cy.type()
//    //     .should('have.value',)
//    //     .and('not.have.value',)
//    // })
// })