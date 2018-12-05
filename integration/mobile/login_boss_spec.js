describe('Login in account', () => {

  beforeEach(() =>{
    cy.viewport('iphone-5');
    cy.visit('http://localhost:3001/#/login');
  });


  it('Validation login form, valid e-mail' , () =>{
    cy.url().should('include', '/login');
    cy.get('form > div > div > img')
      .should('be.visible');
    cy.get('input[name = "email"]')
      .click();
    cy.get('input[name = "password"]')
      .click();
    cy.get('div')
      .should('contain', 'Pole e-mail nie może być puste');
    cy.get('input[name = "email"]')
      .clear()
      .type('example_assistant_busyboss.com')
      .should('have.value', 'example_assistant_busyboss.com');
    cy.get('input[name = "password"]')
      .click();
    cy.get('div')
      .should('contain', 'Adres e-mail powienien zawierać znak @');
  });


  it('Validation login form, valid password' , () =>{
    cy.get('input[name = "password"]')
      .click()
    cy.get('input[name = "email"]')
      .click()
    cy.get('div')
      .should('contain', 'Pole hasła nie może być puste');
    cy.get('input[name = "password"]')
      .click();
    cy.get('input[name = "password"]')
      .clear()
      .type("12345")
      .should('have.value', '12345');
    cy.get('input[name = "email"]')
      .click()
    cy.get('div')
      .should('contain', 'Hasło powinno zawierać od 8 do 32');
    cy.get('input[name = "password"]')
      .clear()
      .type("12345678")
      .should('have.value', '12345678');
    cy.get('input[name = "email"]')
      .clear()
      .type('anton.kvitka@edge1s.com')
      .should('have.value', 'anton.kvitka@edge1s.com');
    cy.get('button[type = "submit"]')
      .click();
    cy.get('div')
      .parent('div')
      .should('contain', 'Konto nie zostało aktywowane');
    cy.get('input[name = "password"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('button[type = "submit"]')
      .click();
    cy.get('div')
      .find('div')
      .should('contain', 'Błędne dane logowania');
    });


  it('Correct sign-in in account', () =>{
    cy.get('input[name = "email"]')
      .clear()
      .type('piotr@busyboss.lh')
    cy.get('input[name = "password"]')
      .clear()
      .type("12345678")
    cy.get('button[type = "submit"]')
      .click();
    cy.url().should('include', 'http://localhost:3001/#/');
  });


  it('Correct sign-out of account', () =>{
    cy.login_boss_not_connect_account();
    cy.url().should('include', 'http://localhost:3001/');
  });
  });
