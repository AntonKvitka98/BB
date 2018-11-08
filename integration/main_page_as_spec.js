describe('Login in account', () => {

  beforeEach(() =>{
    cy.login();
  });


  it('Validation' , () =>{
    cy.get('h6')
      .should('have.text', 'Wyszukaj użytkownika')
  });
});
