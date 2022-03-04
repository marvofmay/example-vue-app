describe('example vue app /contact', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080/contact')
  })    
    
  it('app view', () => {
    cy.get('h2').contains('Wyślij do Nas wiadomość !!')
    cy.get('h4').contains('Formularz kontaktowy')   
  })    
  
  it('app view form', () => {
    cy.get('#contact-form').find('#username').type('Jhon Wick')
    cy.get('#contact-form').find('#email').type('jhon.wick@gmail.com')
    cy.get('#contact-form').find('textarea')
    cy.get('#contact-form').find('button')
  })      
  
})