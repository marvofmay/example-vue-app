describe('example vue app /contact', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080/contact')
  })    
    
  it('app view', () => {
    cy.get('h2').contains('Wyślij do Nas wiadomość !!')
    cy.get('h4').contains('Formularz kontaktowy')   
  })    
  
  it('app view form', () => {
    cy.get('input[name="username"]').focus().type('Jhon Wick')
    /*
    cy.get('#contact-form').within(() => {
        cy.get('#username').focus().should('be.enabled').type('Jhon Wick')
        cy.get('#email').focus().should('be.enabled').type('jhon.wick@gmail.com')
        cy.find('textarea').should('be.visible')
        cy.find('button').should('be.visible')
    })        
    */    
  })
  
})