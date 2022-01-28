describe('example vue app /about', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080/about')
  })    
    
  it('app view', () => {
    cy.get('h2').contains('Informacje o aplikacji !!')
  })    
  
})