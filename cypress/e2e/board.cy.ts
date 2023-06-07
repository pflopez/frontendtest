describe('Chessboard', () => {
  it('renders the squares in the right order', () => {
    cy.visit('/');
    cy.get('.square').first().contains('a8');
    cy.get('.square').eq(7).contains('h8');
    cy.get('.square').eq(8).contains('a7');
    cy.get('.square').eq(15).contains('h7');
    cy.get('.square').last().contains('h1');
  });
  it('renders the checkerboard pattern', () => {
    cy.visit('/');
    cy.get('.square').first().should('have.class', 'light');
    cy.get('.square').eq(7).should('have.class', 'dark');
    cy.get('.square').eq(8).should('have.class', 'dark');
    cy.get('.square').eq(15).should('have.class', 'light');
    cy.get('.square').last().should('have.class', 'light');
  });
});
