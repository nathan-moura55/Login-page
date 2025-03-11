describe('template spec', () => {
    describe('My First Test', () => {
      it('Visits the login', () => {
        
        //Acesso de tela
        cy.visit("http://localhost:5173/")
        cy.get('p > a').click()
        
        //teste css
        cy.get(':nth-child(1) > label')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-size', '16px')

        cy.get(':nth-child(2) > label').should('exist')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-size', '16px')

        cy.get(':nth-child(3) > label').should('exist')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-size', '16px')
        
        cy.get(':nth-child(4) > label').should('exist')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-size', '16px')

        //Teste de funcionalidade
        cy.get(':nth-child(1) > input').type('joão pereira')
        cy.get(':nth-child(2) > input').type('joao@gmail.com')
        cy.get(':nth-child(3) > input').type('batatinha123')
        cy.get(':nth-child(4) > input').type('batatinha123')
        cy.get('.button').click()
      })
    })
        })
     