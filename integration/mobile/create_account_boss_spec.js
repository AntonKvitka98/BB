describe('Create account for boss', () => {

  beforeEach(() =>{
    cy.viewport('iphone-5');
    cy.visit('http://localhost:3001/#/register');
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

});
