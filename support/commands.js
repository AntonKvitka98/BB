Cypress.Commands.add('login_assistant_not_connect_account', () =>{
  cy.visit('http://localhost:3000/login')
  cy.get('input[name = "email"]')
    .clear()
    .type('a1@gmail.com')
  cy.get('input[name = "password"]')
    .clear()
    .type("12345678")
  cy.get('button[type = "submit"]')
    .click();
});

Cypress.Commands.add('login_assistant_connect_account', () =>{
  cy.visit('http://localhost:3000/login')
  cy.get('input[name = "email"]')
    .clear()
    .type('userweb1@bb.com')
  cy.get('input[name = "password"]')
    .clear()
    .type("12345678")
  cy.get('button[type = "submit"]')
    .click();
});

Cypress.Commands.add('login_boss_not_connect_account', () =>{
  cy.visit('http://localhost:3001/login')
  cy.get('input[name = "email"]')
    .clear()
    .type('usermob5@bb.com')
  cy.get('input[name = "password"]')
    .clear()
    .type("12345678")
  cy.get('button[type = "submit"]')
    .click();
});
