describe('Visitor can input metrics and get Cooper Calculator result', () => {
  before(function() {
    cy.visit('http://localhost:3001');
    cy.get('input[id="distance"]').type('1000');
    cy.get('selector[id="gender"]').select('female');
    cy.get('input[id="age"]').type('23');
  });

  it('should see distance', () => {
    cy.contains('23 y/o');
  });

  it('should see gender', () => {
    cy.contains('female');
  });

  it('should see age', () => {
    cy.contains('running 1000 meters');
  });

  it('should see result', () => {
    cy.contains('Result: Poor');
  });
});