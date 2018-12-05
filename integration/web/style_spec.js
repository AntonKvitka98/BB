describe('Style app', () => {
    beforeEach(() =>{
      cy.viewport(2000, 1000);
    });

    it('Style login page' , () =>{
      cy.visit('http://localhost:3000/login');
      cy.url().should('include', '/login')
      cy.contains('It is easy');
      cy.contains('to be busy');
      cy.get('form > div > div > img')
        .should('be.visible');
      cy.get('input[id = "email"]')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
      cy.contains('E-mail')
        .should('have.css', 'color', 'rgb(175, 175, 191)')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
      cy.contains('Hasło')
        .should('have.css', 'color', 'rgb(175, 175, 191)')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
      cy.get('input[id = "password"]')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
      cy.get('button[type = "submit"]')
        .and('contain', 'ZALOGUJ')
        .should('have.css', 'background-color', 'rgb(38, 45, 112)')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
      cy.contains('div', 'Nie pamiętasz hasła?')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(38, 45, 112)');
      cy.contains('div', 'Nie masz konta?')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(175, 175, 191)');
      cy.get('button[type = "button"]')
        .and('contain', 'ZAREJESTRUJ')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'color', 'rgb(38, 45, 112)');
      cy.get('img[alt="facebook"]')
        .should('be.visible');
      cy.get('img[alt="linkedin"]')
        .should('be.visible');
    });


    it('Style register page' , () =>{
      cy.visit('http://localhost:3000/register');
      cy.url().should('include', '/register')
      cy.contains('It is easy');
      cy.contains('to be busy');
      cy.get('form > div > div > img')
        .should('be.visible');
      cy.get('input[id = "email"]')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
      cy.contains('E-mail')
        .should('have.css', 'color', 'rgb(175, 175, 191)')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
      cy.contains('hasło')
        .should('have.css', 'color', 'rgb(175, 175, 191)')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
      cy.contains('Powtórz hasło')
        .should('have.css', 'color', 'rgb(175, 175, 191)')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
      cy.get('input[id = "password"]')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
      cy.get('button[type = "submit"]')
        .and('contain', 'ZAREJESTRUJ')
        .should('have.css', 'background-color', 'rgb(38, 45, 112)')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
      cy.contains('div', 'Masz już konto?')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(175, 175, 191)');
      cy.get('button[type = "button"]')
        .and('contain', 'ZALOGUJ')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'color', 'rgb(38, 45, 112)');
      cy.get('img[alt="facebook"]')
        .should('be.visible');
      cy.get('img[alt="linkedin"]')
        .should('be.visible');
    });


    it('Style menu main page' , () =>{
      cy.login_assistant_not_connect_account();
      cy.get('ul')
        .eq(0)
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      cy.get('ul > li')
        .should('have.length', 9)
        .should('be.visible');
      cy.get('img[alt="Parowanie"]')
        .should('be.visible')
        .parent()
        .contains('Parowanie');
      cy.get('img[alt="Archiwum"]')
        .should('be.visible')
        .parent()
        .contains('Archiwum');
      cy.get('img[alt="Zmiana hasła"]')
        .should('be.visible')
        .parent()
        .contains('Zmiana hasła');
      cy.get('img[alt="Wyloguj"]')
        .should('be.visible')
        .parent()
        .contains('Wyloguj');
      cy.get('img[alt="secretary-avatar"]')
        .should('be.visible');
      cy.get('li > p')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .parent()
        .should('have.css', 'background-color', 'rgb(38, 45, 112)');
     });


     it('Style page "Parowanie"', () =>{
      cy.login_assistant_not_connect_account();
      cy.url().should('include', 'http://localhost:3000/');
      cy.get('ul > li')
        .should('have.length', 9)
        .should('be.visible');
      cy.get('img[alt="Parowanie"]')
        .should('be.visible')
        .parent()
        .contains('Parowanie');
      cy.get('ul > li')
        .eq(1)
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
      cy.get('img[alt="Parowanie"]')
        .should('be.visible')
        .parent()
        .contains('Parowanie')
        .click();
      cy.get('ul > li')
        .eq(1)
        .should('have.css', 'background-color', 'rgb(38, 45, 112)');
      cy.get('img[alt="arrows-image"]')
        .eq(0)
        .should('be.visible');
      cy.get('span')
        .eq(0)
        .should('contain', 'Parowanie');
      cy.contains('E-mail')
        .should('have.css', 'color', 'rgb(175, 175, 191)')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
      cy.get('input[name="newBossEmail"]')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
      cy.get('button[type = "submit"]')
        .and('contain', 'SPARUJ')
        .should('have.css', 'background-color', 'rgb(38, 45, 112)')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
      cy.get('img[alt="arrows-image"]')
        .eq(1)
        .should('be.visible');
      cy.get('span')
        .eq(1)
        .should('contain', 'Sparowane');
      cy.get('button[type = "button"]')
        .click();
      cy.get('ul > li')
        .eq(1)
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
      cy.wait(2222)
      cy.get('img[alt="arrows-image"]')
        .eq(1)
        .should('not.be.visible');
      })
  });
