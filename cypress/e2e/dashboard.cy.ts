import { expect } from 'chai';

describe('Dashboard - Egyenleg lekérdezés', () => {
  beforeEach(() => {
    // Bejelentkezés mock felhasználóval
    cy.visit('/login');

    cy.get('#login-email').type('teszt@pelda.hu');
    cy.get('#login-password').type('Titkos123');
    cy.get('#login-submit').click();

    // Várjuk meg, hogy a dashboard betöltődjön
    cy.url().should('include', '/dashboard');
  });

  it('megnyitja a dashboard oldalt és megjelennek az elemek', () => {
    cy.get('#dashboard-page').should('exist');
    cy.get('#dashboard-card').should('exist');
    cy.get('#dashboard-title').should('contain', 'Egyenleg');
    cy.get('#balance-value').should('exist');
    cy.get('#logout-button').should('exist');
  });

  it('a dashboard oldal stílusa', () => {
    cy.get('#dashboard-page')
      .should('have.class', 'd-flex')
      .and('have.class', 'justify-content-center')
      .and('have.class', 'align-items-center')
      .and('have.class', 'vh-100')
      .and('have.class', 'bg-white');
  });

  it('a dashboard kártya stílusa', () => {
    cy.get('#dashboard-card')
      .should('have.class', 'card')
      .and('have.class', 'p-4')
      .and('have.class', 'shadow')
      .invoke('attr', 'style')
      .should('not.be.undefined')
      .then((style) => {
        const styleStr = style as string;
        expect(styleStr).to.include('max-width: 400px');
        expect(styleStr).to.include('width: 100%');
      });
  });

  it('az egyenleg cím és érték stílusa', () => {
    cy.get('#dashboard-title')
      .should('exist')
      .and('have.class', 'text-center')
      .and('have.class', 'text-success')
      .and('have.class', 'mb-4')
      .and('have.css', 'font-size', '32px');

    cy.get('#balance-value')
      .should('exist')
      .and('have.class', 'fs-4')
      .and('have.class', 'fw-bold')
      .and('contain', 'Ft');
  });

  it('a kijelentkezés gomb stílusa és funkciója', () => {
    cy.get('#logout-button')
      .should('exist')
      .and('contain', 'Kijelentkezés')
      .and('have.class', 'btn')
      .and('have.class', 'btn-outline-secondary')
      .and('have.attr', 'type', 'button');
  });
});

export {};
