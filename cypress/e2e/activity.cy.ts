describe('Activity', () => {
  it('displays activity on sidebar', () => {
    cy.visit('/');

    cy.get('.square').first().click();
    cy.get('.activity li').last().should('include.text.text', 'a8');

    cy.get('.square').eq(7).click();
    cy.get('.activity li').last().should('include.text.text', 'h8');

    cy.get('.square').eq(8).click();
    cy.get('.activity li').last().should('include.text.text', 'a7');

    cy.get('.square').eq(15).click();
    cy.get('.activity li').last().should('include.text.text', 'h7');

    cy.get('.square').last().click();
    cy.get('.activity li').last().should('include.text.text', 'h1');
  });
});
