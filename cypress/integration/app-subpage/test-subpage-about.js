describe('example vue app /about', () => {
        
  it('app view', () => {
    cy.visit('http://localhost:8080/about')
    cy.get('h2').contains('Informacje o aplikacji !!')
  })    
  
})