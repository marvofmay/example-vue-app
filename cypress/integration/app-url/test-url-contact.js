describe('example vue app /contact', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080/contact')
  })    
    
  it('app url hash', () => {
    cy.hash().should('be.empty') 
  })    
    
  it('app window location', () => {
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:8080/contact')
      expect(location.host).to.eq('localhost:8080')
      expect(location.hostname).to.eq('localhost')
      expect(location.origin).to.eq('http://localhost:8080')
      expect(location.pathname).to.be.eq('/contact')
      expect(location.port).to.eq('8080')
      expect(location.protocol).to.eq('http:')
    })
  })
  
  it('app window URL', () => {
    cy.url().should('eq', 'http://localhost:8080/contact')
  })  
  
})