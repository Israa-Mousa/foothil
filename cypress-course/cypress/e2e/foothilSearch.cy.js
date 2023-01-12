describe('empty spec', () => {
  it('passes', () => {
    cy.viewport(800,900);
    cy.visit('https://www.google.com/')
    // cy.get('[name="q"]').type("Foothill solutions").click()
    cy.get('input[name="q"]').type("Foothill solutions").type('{enter}')
    cy.wait(1000)
    // cy.get('#center_col')
    // cy.get('[href="https://www.foothillsolutions.com/"] > .LC20lb > span').should('be.visible') 
    // cy.get('h3')
    // cy.get('.LC20lb.MBeuO.DKV0Md')
    // cy.get('.DKV0Md').eq('Foothill Technology Solutions: Home').should('be.visible')
    // cy.get('span').contains("Foothill Technology Solutions: Home")
    cy.get('[href="https://www.foothillsolutions.com/"] > .LC20lb > span').contains("Foothill Technology Solutions: Home").should('be.visible')
    cy.get('[href="https://www.facebook.com/FoothillTechnologySolutions/"] > .LC20lb > span').should('be.visible')
  })
})