
class tc2 {

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
    cy.get('.companyName__value-container').type('QA')
    cy.get('.companyName__placeholder').click();
    //cy.get('.companyName__option').click()
    cy.get('input#address1').type('test123')
    cy.get('input#address2').type('test123')
    cy.get('input#town').type('london')
    cy.get('input#county').type('london')
    cy.get('input#postcode').type('E7D444')
    cy.get('select#companyType').select('GP')
    cy.get("[type='submit']").click()
}
  
servicesdetails() {
    cy.get('select#serviceType').select('Clinical')
    cy.get(".service__value-container").click()
    cy.get(".service__value-container").type('allergy')
    cy.get('.service__menu').click()
    cy.get('input#serviceIdentifier').type('Test123')
    cy.get('input#agreePrivacy').click()
    cy.get('input#agreeTerms').click()
    cy.get('input.button.button--secondary.button--block').click()
  
}
  
verficationmessage() {
    cy.get(".registration-submission-errors p").contains('Your registration submission failed because:').should('be.visible')
    cy.get(".registration-submission-errors li:nth-of-type(1)").contains('Tel land is invalid').should('be.visible')
    cy.get(".registration-submission-errors li:nth-of-type(2)").contains('Tel mobile is invalid').should('be.visible')
}
  
  
}

export default tc2;