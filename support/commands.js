Cypress.Commands.add('login', () =>{
  cy.visit('http://localhost:3000/login')
  cy.get('input[name = "email"]')
    .clear()
    .type('example@gmail.com')
  cy.get('input[name = "password"]')
    .clear()
    .type("123123123")
  cy.get('button[type = "submit"]')
    .click();
  cy.hash()
    .should('eq', '');
});
