describe('NotFoundPage komponens', () => {
  beforeEach(() => {
    cy.visit('/valami-nem-letezo-utvonal', { failOnStatusCode: false });
  });

  it('megjeleníti a 404 címet', () => {
    cy.contains('404 - Az oldal nem található').should('be.visible');
  });

  it('megjeleníti a leíró szöveget', () => {
    cy.contains('Ellenőrizze a címet vagy térjen vissza a főoldalra.').should('be.visible');
  });

  it('a fő konténer középre van igazítva és világos háttérrel rendelkezik', () => {
    cy.get('.d-flex.justify-content-center.align-items-center.vh-100.bg-light')
      .should('exist')
      .and('be.visible');
  });

  it('a cím piros színű és nagy méretű', () => {
    cy.contains('404 - Az oldal nem található')
      .should('have.class', 'text-danger')
      .and('have.class', 'display-4');
  });

  it('a leírás lead osztályt tartalmaz', () => {
    cy.contains('Ellenőrizze a címet vagy térjen vissza a főoldalra.')
      .should('have.class', 'lead');
  });
});

export {};