describe('Create account for assistant', () => {

  beforeEach(() =>{
    cy.visit('http://localhost:3000/register');
  });

  it('Validation register form, valid e-mail' , () =>{
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


  it('Validation register form, valid password' , () =>{
    cy.get('input[name = "password"]')
      .click()
    cy.get('input[name = "secondPassword"]')
      .click()
    cy.get('div')
      .should('contain', 'Pole hasła nie może być puste');
    cy.get('input[name = "password"]')
      .click()
    cy.get('div')
      .should('contain', 'Pole "Powtórz hasło" nie może być puste');
    cy.get('input[name = "password"]')
      .clear()
      .type("12345")
      .should('have.value', '12345');
    cy.get('input[name = "secondPassword"]')
      .click()
    cy.get('div')
      .should('contain', 'Hasło powinno zawierać od 8 do 32');
    cy.get('input[name = "secondPassword"]')
      .clear()
      .type("123")
      .should('have.value', '123');
    cy.get('div')
      .should('contain', 'Podane hasła nie mogą różnić się od siebie');

    cy.get('input[name = "password"]')
      .clear()
      .type("12345678")
      .should('have.value', '12345678');
    cy.get('input[name = "secondPassword"]')
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
      .should('contain', 'Email jest już zajęty');
    });
      /*
    it('Create account: not e-mail, incorret email', () =>{
     cy.visit('http://localhost:3000/register')
     cy.get('input[name = "email"]')
           .clear()
           .type("asystent1@busyboss.com")
           .should('have.value', 'asystent1@busyboss.com');

        cy.get("div[class = 'text-danger']")
              .should("not.be.visible");
               cy.get('button[type = "submit"]').click();

      cy.get('input[name = "email"]')
        .click();
      cy.get('input[name = "password"]')
        .click();
      cy.get("div[class = 'text-danger']")
        .should("contain", "wymagana jest podanie adresu e-mail");
      cy.get('input[name = "email"]')
        .clear()
        .type("example_assistant_busyboss.com")
        .should('have.value', 'example_assistant_busyboss.com');
      cy.get('input[name = "password"]')
        .click();
      cy.get("div[class = 'text-danger']")
        .should("contain", "email musi zawierać znak @");
      cy.get('input[name = "secondPassword"]')
        .clear()
        .type("qwerty123")
        .should('have.value', 'qwerty123');
      cy.get('button[type = "submit"]').click();
    });


it ('zzz', () =>{
    cy.visit('http://localhost:3000/register')

 cy.get('input[name = "password"]')
      .click()
    cy.get('input[name = "secondPassword"]')
      .click()
    cy.get('div[class = "text-danger"]')
      .should('contain', 'wymagane jest hasło');
    cy.get('input[name = "password"]')
      .click()
    cy.get('div[class = "text-danger"]')
      .should('contain', 'wymagane jest hasło');
});


  it('Correct create account', () =>{

    cy.get('input[name = "email"]')
      .clear()
      .type("asystent1@busyboss.com")
      .should('have.value', 'asystent1@busyboss.com');
    cy.get('input[name = "password"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('input[name = "secondPassword"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('button[type = "submit"]').click();
  });
});

/*
describe('Create account for boss', () => {
  it('Create account: not password, incorrect password', () =>{
    cy.visit('http://localhost:3000/register')

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
    cy.get('input[name = "secondPassword"]')
      .clear()
      .type("12345")
      .should('have.value', '12345');
    cy.get('button[type = "submit"]').click();
 });


  it('Create account: not email, incorret email', () =>{
    cy.get('input[name = "email"]').clear()

    cy.get('input[name = "password"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('input[name = "secondPassword"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('button[type = "submit"]').click();

    cy.get('input[name = "email"]')
      .clear()
      .type("example_boss_busyboss.com")
      .should('have.value', 'example_boss_busyboss.com');
    cy.get('input[name = "password"]')
      .clear().type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('input[name = "secondPassword"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('button[type = "submit"]').click();
  });

  it('Correct create account', () =>{

    cy.get('input[name = "email"]')
      .clear()
      .type("boss1@busyboss.com")
      .should('have.value', 'boss1@busyboss.com');
    cy.get('input[name = "password"]')
      .clear()
      .type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('input[name = "secondPassword"]')
      .clear().type("qwerty123")
      .should('have.value', 'qwerty123');
    cy.get('button[type = "submit"]').click();
  });
*/
});
