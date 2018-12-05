describe('Login in account', () => {
  beforeEach(() =>{
    cy.viewport(2000, 1100);
  });

  it('Validation input add new user boss' , () =>{
    cy.login_assistant_not_connect_account();
    cy.url().should('include', 'http://localhost:3000/');
    cy.get('ul > li')
      .should('have.length', 9)
      .should('be.visible');
    cy.get('img[alt="Parowanie"]')
      .should('be.visible')
      .parent()
      .contains('Parowanie')
      .click();
    cy.get('img[alt="arrows-image"]')
      .eq(0)
      .should('be.visible');
    cy.get('input[name="newBossEmail"]')
      .click()
      .clear()
      .type('example_boss_busyboss.com')
      .should('have.value', 'example_boss_busyboss.com');
    cy.get('button[type="submit"]')
      .click();
    cy.get('form >> div')
      .should('contain', 'Podany użytkownik nie istnieje');
    cy.get('input[name="newBossEmail"]')
      .click()
      .clear()
      .type('usermob1@bb.com')
      .should('have.value', 'usermob1@bb.com');
    cy.get('button[type="submit"]')
      .click();
    cy.get('form >> div')
      .should('contain', 'Podany adres jest już na Liście połączonych lub oczekujących');
    cy.get('input[name="newBossEmail"]')
      .click()
      .clear()
      .type('anton.kvitka@edge1s.com')
      .should('have.value', 'anton.kvitka@edge1s.com');
    cy.get('button[type="submit"]')
      .click();
    cy.get('div')
      .should('contain', 'Podany użytkownik nie istnieje');
  });


  it('Validation add relation between boss and assistant' , () =>{
    cy.login_assistant_connect_account();
    cy.url().should('include', 'http://localhost:3000/');
    cy.wait(1111)
    cy.get('ul > li')
      .should('have.length', 10)
      .should('be.visible');
    cy.get('div > p')
      .eq(0)
      .should('contain', 'AKTYWNY');
    cy.get('img[alt="Parowanie"]')
      .parent()
      .contains('Parowanie')
      .click();
    cy.get('button[type="button"]')
      .eq(0)
      .parent()
      .should('be.visible')
      .within(() =>{
        cy.get('ul > li')
          .should('have.length', 2)
          .should('be.visible');
      });
    cy.get('input[name="newBossEmail"]')
      .click()
      .clear()
      .type('usermob5@bb.com')
      .should('have.value', 'usermob5@bb.com');
    cy.get('button[type="submit"]')
      .click();
    cy.get('span')
    .should('contain', 'wysłano prośbę polączenia do użytkownika:  usermob5@bb.com');
  });


  it('Accepting connecting', () =>{
    cy.login_boss_connect_account();
    cy.url().should('include', 'http://localhost:3001/');
    cy.get('p')
      .should('contain', 'userweb1@bb.com');
    cy.get('button')
      .contains('ODRZUĆ')
      .click();
  });


  it('Validation add relation between boss and assistant' , () =>{
    cy.login_assistant_connect_account();
    cy.url().should('include', 'http://localhost:3000/');
    cy.wait(1111)
    cy.get('ul > li')
      .should('have.length', 10)
      .should('be.visible');
    cy.get('div > p')
      .eq(0)
      .should('contain', 'AKTYWNY');
    cy.get('img[alt="Parowanie"]')
      .parent()
      .contains('Parowanie')
      .click();
    cy.get('button[type="button"]')
      .eq(0)
      .parent()
      .should('be.visible')
      .within(() =>{
        cy.get('ul > li')
          .should('have.length', 2)
         .should('be.visible');
      });
    cy.get('input[name="newBossEmail"]')
      .click()
      .clear()
      .type('usermob5@bb.com')
      .should('have.value', 'usermob5@bb.com');
    cy.get('button[type="submit"]')
      .click();
    cy.get('span')
      .should('contain', 'wysłano prośbę polączenia do użytkownika:  usermob5@bb.com');
    });


  it('Accepting connecting', () =>{
    cy.login_boss_connect_account();
    cy.url().should('include', 'http://localhost:3001/');
    cy.get('p')
      .should('contain', 'userweb1@bb.com');
    cy.get('button')
      .contains('AKCEPTUJ')
      .click();
  });


  it('Validation delete relation between boss and assistant/Niewskonczne - potrzebno akceptacja UM ' , () =>{
    cy.login_assistant_connect_account();
    cy.url().should('include', 'http://localhost:3000/');
    cy.wait(1111)
    cy.get('ul > li')
      .should('have.length', 11)
      .should('be.visible');
    cy.get('div > p')
      .eq(0)
      .should('contain', 'AKTYWNY');
    cy.get('img[alt="Parowanie"]')
      .parent()
      .contains('Parowanie')
      .click();
    cy.get('button[type="button"]')
      .eq(0)
      .parent()
      .should('be.visible')
      .within(() =>{
        cy.get('ul > li')
          .should('have.length', 3)
          .should('be.visible');
      });
    const stub = cy.stub()
    cy.on ('window:alert', stub)
    cy.get('li > button')
      .eq(2)
      .click()
    cy.get('#root > div')
      .should('contain', 'rozłączono połączenie z: usermob5')
    cy.get('button[type="button"]')
      .eq(0)
      .parent()
      .should('be.visible')
      .within(() =>{
        cy.get('ul > li')
          .should('have.length', 2)
          .should('be.visible');
      });
  });

});
