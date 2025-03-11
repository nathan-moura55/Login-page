  describe('My First Test', () => {

    it('Visits the login', () => {
      
      //Acessando sistema
      cy.visit("http://localhost:5173/")
      cy.get(':nth-child(2) > input').type('admin')
      cy.get(':nth-child(3) > input').type('batatinha123')
      cy.get('button').click()

      //Teste css
      cy.wait(2000)
      cy.get('h1')
      .should('have.css', 'text-align', 'center')
      .should('have.css', 'font-size', '25px')
      .should('have.css', 'color', 'rgb(255, 255, 255)')

      //teste botão de retorno
      cy.get('.button').click()
      cy.get(':nth-child(2) > input').type('admin')
      cy.get(':nth-child(3) > input').type('123')
      cy.get('button').click()
    })


  })
      
   