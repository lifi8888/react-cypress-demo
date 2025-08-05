import { expect } from 'chai';

describe('Bejelentkezés', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('megnyitja a login oldalt és megjelennek az elemek', () => {
    cy.get('#login-page').should('exist');
    cy.get('#login-card').should('exist');
    cy.get('#login-title').should('contain', 'Bejelentkezés');
    cy.get('#login-form').should('exist');
    cy.get('#login-email').should('exist');
    cy.get('#login-password').should('exist');
    cy.get('#login-submit').should('exist');
  });

  it('a login oldal stílusa', () => {
    cy.get('#login-page')
      .should('have.class', 'd-flex')
      .and('have.class', 'justify-content-center')
      .and('have.class', 'align-items-center')
      .and('have.class', 'vh-100')
      .and('have.class', 'bg-light');
  });

  it('a login oldal bejelentkező kártya stílusa és osztályai', () => {
    cy.get('#login-card')
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

  it('a Bejelentkezés cím stílusa', () => {
    cy.get('#login-title')
      .should('exist')
      .should('have.class', 'text-center')
      .and('have.class', 'text-primary')
      .and('have.class', 'mb-4')
      .and('have.css', 'font-size', '32px')
  });

  it('a bejelentkezési űrlap email mezője', () => {
    cy.get('#login-email')
      .should('exist')
      .should('have.class', 'form-control')
      .should('have.attr', 'type', 'email')
      .should('have.attr', 'placeholder', 'Email cím')
      .should('have.attr', 'name', 'email')
      .should('have.attr', 'required');
  });

  it('a bejelentkezési űrlap jelszó mezője', () => {
    cy.get('#login-password')
      .should('exist')
      .should('have.class', 'form-control')
      .should('have.attr', 'type', 'password')
      .should('have.attr', 'placeholder', 'Jelszó')
      .should('have.attr', 'name', 'password')
      .should('have.attr', 'required');
  });

  it('a Bejelentkezés gomb stílusa és funkciója', () => {
    cy.get('#login-submit')
      .should('contain', 'Bejelentkezés')
      .should('have.class', 'btn')
      .should('have.class', 'btn-primary')
      .should('have.class', 'w-100')
      .should('have.attr', 'type', 'submit');
  });
});

export {};