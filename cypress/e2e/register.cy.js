describe('template spec', () => {
    describe('My First Test', () => {
      it('Visits the login', () => {
        cy.visit("http://localhost:5173/")
        cy.get('p > a').click()
        cy.get(':nth-child(1) > input').type('joão pereira')
        cy.get(':nth-child(2) > input').type('joao@gmail.com')
        cy.get(':nth-child(3) > input').type('batatinha123')
        cy.get(':nth-child(4) > input').type('batatinha123')
        cy.get('.button').click()
      })
    })
        })
     