describe('Visitor can input metrics and get Cooper Calculator result', () => {
  before(function(), {
    cy.visit('https://localhost:3001');
    cy.get('input[id="distance"]').type('1000');
    cy.get('selector[id="gender"]').select('female');
    cy.get('input[id="age"]').type('23');
  })
})