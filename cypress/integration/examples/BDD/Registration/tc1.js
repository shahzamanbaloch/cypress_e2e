import register from '../../../../fixtures/register.json'

class tc1 {


  userdetails() {

    cy.fixture('register').then(function (data) {
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

    /* cy.get('.companyName__placeholder').click();
     cy.get('#react-select-2-input').clear();
     cy.get('#react-select-2-input').type('QA 1234');
     cy.get('#react-select-2-option-0').click();
     cy.get('.input--address-line-one > .field__input > [data-cy=textboxInput]').clear();
     cy.get('.input--address-line-one > .field__input > [data-cy=textboxInput]').type('467');
     cy.get('.input--address-line-two > .field__input > [data-cy=textboxInput]').clear();
     cy.get('.input--address-line-two > .field__input > [data-cy=textboxInput]').type('katherine road');
     cy.get('.input--town > .field__input > [data-cy=textboxInput]').clear();
     cy.get('.input--town > .field__input > [data-cy=textboxInput]').type('forest gate');
     cy.get('.input--county > .field__input > [data-cy=textboxInput]').clear();
     cy.get('.input--county > .field__input > [data-cy=textboxInput]').type('London');
     cy.get('.input--postcode > .field__input > [data-cy=textboxInput]').clear();
     cy.get('.input--postcode > .field__input > [data-cy=textboxInput]').type('e6 6hn');
     cy.get('[data-testid=selectListSelect]').select('Other');
     cy.get('[data-cy=continueButton]').click();
     */

    //cy.get('.companyName__value-container').type('QA 1234')
    cy.get('.companyName__placeholder').click();
    cy.get('#react-select-2-input').type('shazqa');
    //cy.get('.companyName__placeholder').click();
    cy.get('#react-select-2-option-0').click();
    cy.get('input#address1').type('test123')
    cy.get('input#address2').type('test123')
    cy.get('input#town').type('london')
    cy.get('input#county').type('london')
    cy.get('input#postcode').type('E7 8BE')
    cy.get('select#companyType').select('GP')
    cy.get('[data-cy=continueButton]').click();
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
    cy.get(".registration-confirmation h3").contains('Thanks for registering').should('be.visible')
  }

}

export default tc1;