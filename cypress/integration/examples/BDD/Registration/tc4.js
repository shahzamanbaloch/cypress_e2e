
class tc4 {

userdetails() {
    cy.get('input#firstName').type('123Test')
    cy.get('input#lastName').type('Test321')
    cy.get('input#phoneNumber').type('07734945793')
    cy.get('input#mobileNumber').type('07734945793')
    cy.get('input#email').type('123test@example.com')
    cy.get('input#confirmEmail').type('123test@example.com')
    cy.get('input.ReactPasswordStrength-input.form-control').type('Test!"£456')
    cy.get('input#confirmPassword').type('Test!"£456')
    cy.get('input.button.button--secondary.button--block').click()
}
  
  
companydetails() {
    cy.get('.companyName__value-container').type('demo liz client')
    cy.get('.companyName__option').click({ force: true })
    cy.get('input.button.button--secondary.button--block').click()
}
  

servicesdetails() {
    cy.get('input.button.button--secondary.button--block').click()
}
  
  
verficationmessage() {
    cy.get(".registration-confirmation h3").contains('Thanks for registering').should('be.visible')
}
  

}

export default tc4;