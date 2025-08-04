describe('404 - Nem található oldal', () => {
  it('ismeretlen útvonal esetén megjelenik a 404 oldal', () => {
    cy.visit('/valami-nem-letezo-utvonal', { failOnStatusCode: false });
    cy.get('[data-cy="notfound-title"]').should('contain', 'Az oldal nem található.');
  });

  it('az oldal középre van igazítva', () => {
    cy.visit('/valami-nem-letezo-utvonal', { failOnStatusCode: false });
    cy.get('[data-cy="notfound-container"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center');
  });
});
