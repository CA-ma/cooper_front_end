describe ('User can login', () => {
  it('successfully', () => {
    cy.visit('http://localhost:3001')
    cy.get('#login').click()
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@email.com')
      cy.get('#password').type('password')
      cy.get('#submit').click()
    })
    cy.contains('Hi user@email.com.')
  })

  it('with invalid credentials', () => {
    cy.visit('http://localhost:3001')
    cy.get('#login').click()
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@email.com')
      cy.get('#password').type('wrongpassword')
      cy.get('#submit').click()
    })
    cy.contains('Invalid username or password.')
  })
})