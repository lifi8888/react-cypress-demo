describe('Authentikáció', () => {
  it('védett oldal eléréséhez be kell jelentkezni', () => {
    cy.visit('/dashboard');
    cy.url().should('include', '/login');
  });

  it('bejelentkezés után elérhető a dashboard', () => {
    cy.visit('/login');
    cy.get('#login-email').type('teszt@pelda.hu');
    cy.get('#login-password').type('Titkos123');
    cy.get('#login-submit').click();

    cy.url().should('include', '/dashboard');
    cy.get('h1').should('contain', 'Egyenleg');
  });

  it('kijelentkezés után visszairányít a login oldalra', () => {
    cy.visit('/login');
    cy.get('#login-email').type('teszt@pelda.hu');
    cy.get('#login-password').type('Titkos123');
    cy.get('#login-submit').click();

    cy.contains('Kijelentkezés').click();
    cy.url().should('include', '/login');
  });
});
