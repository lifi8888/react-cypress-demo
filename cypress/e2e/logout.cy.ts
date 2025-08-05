import { expect } from 'chai';

describe('Kijelentkezés', () => {
  beforeEach(() => {
    // Bejelentkezés helyes adatokkal
    cy.visit('/login');

    cy.get('#login-email').type('teszt@pelda.hu');
    cy.get('#login-password').type('Titkos123');
    cy.get('#login-submit').click();

    // Ellenőrzés, hogy dashboard oldalra jutott
    cy.url().should('include', '/dashboard');
  });

  it('kijelentkezés után visszairányít a login oldalra', () => {
    // Kijelentkezés gomb megnyomása
    cy.get('#logout-button').click();

    // Ellenőrzés, hogy visszairányított a /login oldalra
    cy.url().should('include', '/login');

    // Ellenőrzés, hogy újra megjelent a login felület
    cy.get('#login-form').should('exist');
    cy.get('#login-submit').should('contain', 'Bejelentkezés');
  });
});

export {};
