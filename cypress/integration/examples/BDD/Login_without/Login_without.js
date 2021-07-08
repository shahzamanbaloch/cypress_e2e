import { Given, When,Then,And} from "cypress-cucumber-preprocessor/steps";

import test1 from './test1';
import test2 from './test2';
import test3 from './test3';

Given('User opens browser and enters the New NHS Pre Prod URL', function () {
  cy.visit(Cypress.env('url'));
})

const test1page = new test1();
const test2page = new test2();
const test3page = new test3();

// Test 1
Then('User selects the RoomType from dropdown', function () {
  test1page.RoomType();
})

And('click on find a room button', function () {
  test1page.Roombutton();
})

Then('Verify Search Results page is displayed', function () {
  test1page.Pagedisplayed();
})

Then('User validate the shown results are based on the selected “RoomType” with price per hour not displayed', function () {
  test1page.showresult()
})

Then('Verify results by changing filters on the page', function () {
  test1page.changingfilter()
})

Then('validate the room details page by clicking on room name', function () {
  test1page.roomdetails()
})

Then('validate the property details page by clicking on property name', function () {
  test1page.propertydetails()
})

// Test 2
Then('User inputs PropertyName in search box', function () {
  test2page.PropertyName()
})

Then('click on find a room button PropertyName', function () {
  test2page.Roombutton()
})

Then('Verify Search Results page is displayed Property', function () {
  test2page.Pagedisplayed()
})

Then('User validate the shown results are based on the inputted PropertyName with price per hour not displayed', function () {
  test2page.showresult()
})

Then('Verify results by changing filters on the page property', function () {
  test2page.changingfilter()
})

Then('validate the room details page by clicking on room name property', function () {
  test2page.roomdetails()
})

Then('validate the property details page by clicking on PropertyName', function () {
  test2page.propertydetails()
})

// Test 3
Then('User selects the room type from dropdown', function () {
  test3page.RoomType()
})

Then('User inputs PropertyName in search box both', function () {
  test3page.SearchPropertyName()
})

Then('click on find a room button Both', function () {
  test3page.Roombutton()
})

Then('Verify Search Results page is displayed both', function () {
  test3page.Pagedisplayed()
})

Then('User validate the shown results are based on the selected RoomType and inputted Location with price per hour not displayed', function () {
  test3page.showresult()
})

Then('validate the room details page by clicking on room name both', function () {
  test3page.roomdetails()
})

Then('validate the property details page by clicking on property name both', function () {
  test3page.propertydetails()
})

// Test 4
Then('User selects the RoomType from dropdown from PostCode Scenario', function () {
  cy.get('.banner__content .form__field .button').click()
})

Then('User type postcode in location', function () {
  cy.get(".banner__content [name='location']").type('E7 8DP')
})

Then('click on find a room button PostCode from PostCode Scenario', function () {
  cy.get('.banner__content > .form > .button').click()
})

Then('Verify Search Results page is displayed PostCode from PostCode Scenario', function () {
  cy.get("[href='/rooms/8220']").contains('Consulting room 8').should('exist')
})

Then('User validate the shown results are based on the selected “RoomType” with price per hour not displayed from PostCode Scenario', function () {
  cy.get('.venue-search__list > li:nth-of-type(1) li:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)').should('not.have.value', '£123')

})

Then('validate the room details page by clicking on room name from PostCode Scenario', function () {
  cy.get("[href='/rooms/8220']").click()
})

Then('validate the property details page by clicking on property name from PostCode Scenario', function () {
  cy.get(".rooms__heading-titles > h1").contains('Consulting room 8').should('exist')

})