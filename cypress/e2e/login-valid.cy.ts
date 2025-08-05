import { expect } from 'chai';

describe('Bejelentkezés Sikeres eset', () => {
  it('sikeres bejelentkezés után a dashboard oldal jelenik meg', () => {
    cy.visit('/login');

    // Helyes mock felhasználó
    const email = 'teszt@pelda.hu';
    const password = 'Titkos123';

    cy.get('#login-email').type(email);
    cy.get('#login-password').type(password);
    cy.get('#login-submit').click();

    // Ellenőrzés: dashboard oldal jelenik meg
    cy.url().should('include', '/dashboard');
    cy.get('#dashboard-page').should('exist');
    cy.get('#dashboard-title').should('contain', 'Egyenleg');
  });
});

export {};
