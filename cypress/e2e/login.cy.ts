describe('Bejelentkezés', () => {
  it('megnyitja a login oldalt és megjelennek az elemek', () => {
    cy.visit('http://localhost:3008/login');

    cy.get('h1').should('contain', 'Bejelentkezés');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('contain', 'Bejelentkezés');
  });
});
