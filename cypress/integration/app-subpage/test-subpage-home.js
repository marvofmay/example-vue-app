describe('example vue app /home', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })    
    
  it('app view', () => {
    cy.contains('Witaj w przykładowej aplikacji Vue.js')
    cy.get('h1').contains('Witaj w przykładowej aplikacji Vue.js')
    cy.get('img').should('have.attr', 'src').should('include','img/logo') 
  })    
  
})