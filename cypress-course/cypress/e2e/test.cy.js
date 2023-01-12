
["iphone-7","ipad-mini","macbook-16"].forEach((viewport)=>{
  it('passes', () => {
    cy.viewport(viewport);

    cy.visit('https://example.cypress.io')
    cy.get('button')
  })

})

  