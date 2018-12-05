describe('Login in account', () => {

  beforeEach(() =>{
    cy.viewport(2000, 1000);
    cy.login();
  });


  it('Validation' , () =>{
    cy.get('h6')
      .should('have.text', 'Wyszukaj użytkownika')
  });
});
