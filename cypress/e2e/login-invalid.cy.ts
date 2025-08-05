describe('Bejelentkezés – Hibakezelés', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('hibás email esetén hibaüzenetet jelenít meg', () => {
    cy.get('#login-email').type('hibas@example.com'); // nem létező felhasználó
    cy.get('#login-password').type('Titkos123'); // helyes jelszó
    cy.get('#login-submit').click();

    // Várható: Hibaüzenet megjelenik 
    cy.get('.alert.alert-danger[role="alert"]')
      .should('exist')
      .and('contain', 'Hibás bejelentkezési adatok');

    // Még mindig login oldalon vagyunk
    cy.url().should('include', '/login');
  });

  it('hibás jelszó esetén hibaüzenetet jelenít meg', () => {
    cy.get('#login-email').type('teszt@pelda.hu'); // helyes email
    cy.get('#login-password').type('rosszjelszo'); // helytelen jelszó
    cy.get('#login-submit').click();

    // Várható: Hibaüzenet megjelenik
    cy.get('.alert.alert-danger[role="alert"]')
      .should('exist')
      .and('contain', 'Hibás bejelentkezési adatok');

    // Még mindig login oldalon vagyunk
    cy.url().should('include', '/login');
  });
});

export {};