describe('template spec', () => {
  describe('My First Test', () => {
    it('Visits the login', () => {
      cy.visit("http://localhost:5173/")
      cy.get(':nth-child(2) > input').type('admin')
      cy.get(':nth-child(3) > input').type('batatinha123')
      cy.get('button').click()
    })
  })
      })
   