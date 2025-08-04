describe('Bejelentkezés', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('megnyitja a login oldalt és megjelennek az elemek', () => {
    cy.get('[data-cy="login-title"]').should('contain', 'Bejelentkezés');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('contain', 'Bejelentkezés');
  });

  it('a fejléc 32px betűméretű és sötétkék színű', () => {
    cy.get('[data-cy="login-title"]')
      .should('exist')
      .and('have.css', 'font-size', '32px')
      .and('have.css', 'color', 'rgb(0, 0, 139)');
  });

  it('az oldal tartalma középre van igazítva', () => {
    cy.get('[data-cy="login-container"]')
      .should('exist')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center');
  });

  it('a login doboz nem szélesebb mint 400px', () => {
    cy.get('[data-cy="login-box"]')
      .should('exist')
      .invoke('outerWidth')
      .should('be.lte', 400);
  });
});