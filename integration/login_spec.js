describe('Login in account', () => {

  beforeEach(() =>{
    cy.visit('http://localhost:3000/login');
  });


  it('Validation login form, valid e-mail' , () =>{
    cy.get('h2')
      .should('have.text', 'Logowanie');
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


/*describe('Login in account for assistant', () => {
  it('Login account: not password, incorrect password', () =>{
    cy.visit('http://localhost:3000/login')
    cy.get('input[name = "email"]')
      .clear()
      .type("asystent1@busyboss.com")
      .should('have.value', 'asystent1@busyboss.com');
    cy.get('button[type = "submit"]')
      .click();

    cy.get('input[name = "email"]')
      .clear()
      .type("asystent1@busyboss.com")
      .should('have.value', 'asystent1@busyboss.com');
    cy.get('input[name = "password"]')
      .type("12345")
      .should('have.value', '12345');
    //cy.get('button[type = "submit"]').click();

  });


  it('Login account: not email, incorret email', () =>{
    cy.get('input[name = "email"]')
      .clear()
    cy.get('input[name = "password"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('button[type = "submit"]').click();

    cy.get('input[name = "email"]')
      .clear()
      .type("example_assistant_busyboss.com")
      .should('have.value', 'example_assistant_busyboss.com');
    cy.get('input[name = "password"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('button[type = "submit"]').click();
  });


  it('Correct login in account', () =>{
    cy.get('input[name = "email"]')
      .clear()
      .type("asystent1@busyboss.com")
      .should('have.value', 'asystent1@busyboss.com');
    cy.get('input[name = "password"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('button[type = "submit"]').click();
  });
});



describe('Login account for boss', () => {
  it('Login account: not password, incorrect password', () =>{
    cy.visit('http://localhost:3000/login')
    cy.get('input[name = "email"]')
      .clear()
      .type("boss1@busyboss.com")
      .should('have.value', 'boss1@busyboss.com');
    cy.get('button[type = "submit"]').click();

    cy.get('input[name = "email"]')
      .clear()
      .type("boss1@busyboss.com")
      .should('have.value', 'boss1@busyboss.com');
    cy.get('input[name = "password"]')
      .type("12345")
      .should('have.value', '12345');
    cy.get('button[type = "submit"]').click();

  });


  it('Login account: not email, incorret email', () =>{
    cy.get('input[name = "email"]').clear()
    cy.get('input[name = "password"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('button[type = "submit"]').click();

    cy.get('input[name = "email"]')
      .clear()
      .type("example_boss_busyboss.com")
      .should('have.value', 'example_boss_busyboss.com');
    cy.get('input[name = "password"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('button[type = "submit"]').click();
  });


  it('Correct login in account', () =>{
    cy.get('input[name = "email"]')
      .clear()
      .type("boss1@busyboss.com")
      .should('have.value', 'boss1@busyboss.com');
    cy.get('input[name = "password"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('button[type = "submit"]').click();
  });*/
});
