
class tc3 {



userdetails() {
    cy.fixture('invalid_phone_register').then(function (data) {
        this.data = data;
    cy.get('input#firstName').type(this.data.Firstname)
    cy.get('input#lastName').type(this.data.lastname)
    cy.get('input#phoneNumber').type(this.data.phonenumber)
    cy.get('input#mobileNumber').type(this.data.mobilenumber)
    cy.get('input#email').type(this.data.email)
    cy.get('input#confirmEmail').type(this.data.confrimemail)
    cy.get('input.ReactPasswordStrength-input.form-control').type(this.data.password)
    cy.get('input#confirmPassword').type(this.data.confrimpassword)
    cy.get('input.button.button--secondary.button--block').click()

});
}
  
companydetails() {
    cy.get('.companyName__value-container').type('demo liz client')
    cy.get('.companyName__option').click({ force: true })
    cy.get('input.button.button--secondary.button--block').click()
}
  
servicesdetails() {
    cy.get("[for='existingClientServices-2326']").contains('Allergy').should('be.visible').click()
    cy.get("[for='existingClientServices-2327']").contains('Baby clinic').should('be.visible').click()
    cy.get("[for='existingClientServices-2328']").contains('Cardiology - CWHHE').should('be.visible').click()
    cy.get('input.button.button--secondary.button--block').should('exist').click()
}
  
  
verficationmessage() {
    cy.get(".registration-confirmation h3").contains('Thanks for registering').should('be.visible')
}

}

export default tc3;