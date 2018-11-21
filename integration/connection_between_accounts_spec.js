describe('Login in account', () => {

  beforeEach(() =>{
    cy.login();
  });

  //BUS-6
  it('Validation page content' , () =>{
    //cy.get('h2')
    //  .should('have.text', 'Welcome to the BusyBoss');
    cy.get('li')
     .eq(0)
     .should('contain', 'Parowanie');
    cy.get('li')
     .eq(1)
    .should('contain', 'Archiwum');
    cy.get('li')
     .eq(2)
     .should('contain', 'Zmiana hasła');
    cy.get('li')
      .eq(3)
      .should('contain', 'Wyloguj');
    cy.get('a[href="/relations"]')
      .click();
    cy.get('h2')
      .should('contain', 'Ekran dodawania nowego użytkownika');
    cy.get('input[name="newBossEmail"]')
      .should('be.visible');
    cy.contains('POŁĄCZONE')
      .should('be.visible');
  });


  it('Validation input add new user boss' , () =>{
    cy.get('a[href="/relations"]')
      .click();
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


  it('Validation delete relation between boss and assistant/Niewskonczne - potrzebno akceptacja UM ' , () =>{
    cy.get('a[href="/relations"]')
      .click();
    cy.contains('POŁĄCZONE')
      .should('be.visible');
    cy.get('ul > li')
      .should('have.length' , 2)
    const stub = cy.stub()
    cy.on ('window:alert', stub)
    cy.get('li > button')
      .last()
      .click()
    cy.get('#root > div')
      .should('contain', 'rozłączono połączenie z')
    cy.get('ul > li')
      .should('have.length' , 1)
  });

});
