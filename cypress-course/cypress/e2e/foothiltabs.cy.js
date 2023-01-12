describe('empty spec', () => {
  it('passes', () => {
    cy.viewport(800,800)
    cy.visit("https://www.foothillsolutions.com/")
    //1)part one
    cy.get('.nav-item').find('a').contains("Home").should('be.visible').click()
    cy.get('.nav-item').find('a').contains("About Us").should('be.visible')
    cy.get('.nav-item').find('a').contains("Careers").should('be.visible')
    cy.get('.nav-item').find('a').contains("Contact Us").should('be.visible')

   // 2)part two
     cy.get('.nav-item').contains('Home').click()
     cy.title().should('eq','Home | Foothill Technology Solutions')
     cy.get('.nav-item').contains('About Us').click()
     cy.title().should('eq','About | Foothill Technology Solutions')
     cy.get('.nav-item').contains('Careers').click()
     cy.title().should('eq','Careers | Foothill Technology Solutions')
     cy.get('.nav-item').contains('Contact Us').click()
     cy.title().should('eq','Contact Us | Foothill Technology Solutions')

  })
})