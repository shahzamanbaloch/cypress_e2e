import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import tc1 from './tc1';
import tc2 from './tc2';
import tc3 from './tc3';
import tc4 from './tc4';
import tc5 from './tc5';

const tcpage1 = new tc1();
const tcpage2 = new tc2();
const tcpage3 = new tc3();
const tcpage4 = new tc4();
const tcpage5 = new tc5();

before(function () {
  cy.fixture('register').then(function (data) {
    this.data = data;
  });
});

Given('User opens browser and enters the New NHS Pre Prod URL', function () {
  cy.visit('https://test.ospace.co.uk/register')

});

Then('user clicks on the Register link', function () {
  cy.get('.header__nav-list--pull .button--primary').click()
});


Then('User fills the user details form by entering all the mandatory fields and continue', function () {
  tcpage1.userdetails();
});

Then('User fills the company details form by entering new company details and continue', function () {
 
  tcpage1.companydetails();

});

Then('User added the different services on service details and click submit for approval button', function () {

  tcpage1.servicesdetails();

});

Then('User validate the confirmation screen for newly created user', function () {
  tcpage1.verficationmessage();
});

// With Invalid Phone Number 
Then('User fills the user details with invalid number form by entering all the mandatory fields and continue', function () {

  tcpage2.userdetails();
});

Then('User fills the company details form by entering new company details and continue', function () {

  tcpage2.companydetails();

});

Then('User added the different services on service details and click submit for approval button', function () {

  tcpage2.servicesdetails();

});

Then('User verify Your registration submission failed because invalid phone numbers', function () {
  tcpage2.verficationmessage();
});

// Test Case 3 

Then('User completes the user details form by entering all the mandatory fields and continue', function () {

  tcpage3.userdetails();
});

Then('User selects the existing company and continue', function () {

  tcpage3.companydetails();
});

Then('User selects the different services on service details and click submit for approval button', function () {

  tcpage3.servicesdetails();

});

Then('User validate the confirmation screen for newly created user for the existing client', function () {
  tcpage3.verficationmessage();
});

// Test case 4
Then('User completes the user details form by entering all the fields and continue', function () {
  tcpage4.userdetails();
});

Then('User selects the existing company and click continue', function () {
  tcpage4.companydetails();
});

Then('User do not select any service from the list of services and click submit for approval button', function () {
  tcpage4.servicesdetails();
});


Then('User validate the confirmation message for the newly created user for existing client', function () {
  tcpage4.verficationmessage();
});

//Test Case 5 
Then('User enters the user details and continue', function () {
  tcpage5.userdetails();
});

Then('User enters the company details and continue', function () {
  tcpage5.companydetails();
});

Then('User added the large volume of services on service details and click submit for approval button', function () {
  tcpage5.servicesdetails()
});

Then('User validate the confirmation screen', function () {
  tcpage5.verficationmessage();
});


