describe('Login in account', () => {

  beforeEach(() =>{
    cy.login();
  });


  it('Validation register form, valid e-mail' , () =>{
    cy.get('h6')
      .should('have.text', 'Wyszukaj użytkownika')
  });
});