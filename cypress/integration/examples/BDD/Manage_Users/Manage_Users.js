import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import Add_Bill_Payer from './Add_Bill_Payer';
import Add_Booker from './Add_Booker';
import Add_Primary_user from './Add_Primary_user';
import Add_Bill_Payer_Duplicate from './Add_Bill_Payer_Duplicate';
import Edit_user_Role from './Edit_user_Role';

const Add_Booker_task = new Add_Booker();
const Add_Primary_User_task = new Add_Primary_user();
const Add_Bill_Payertask_task = new Add_Bill_Payer();
const Add_Bill_Payer_Duplicate_task = new Add_Bill_Payer_Duplicate();
const Edit_user_Task = new Edit_user_Role();

// Add Bookers 
Given('User opens browser and enters the ospace URL', function () {
    cy.visit('https://test.ospace.co.uk/sign-in')
    cy.fixture('booking_login').then(function (data) {
        this.data = data;
        cy.get('#email').clear();
        cy.get('#email').type(this.data.email);
        cy.get('#password').type(this.data.password);
        cy.get('[data-testid=loginFormSubmitButton]').click();

    });
});

Then('user selects Accounts from My account dropdown', function () {
    Add_Booker_task.acccountdropdown();
});

Then('user Clicks on ADD NEW Button on Manage users widget', function () {
    Add_Booker_task.manageuser();
});

Then('user Verifies Add new user pop up Registration form is visible', function () {
    Add_Booker_task.addnewuser();
});

And('user enters First Name in First Name input field', function () {
    Add_Booker_task.addfirstname();
});

And('user enters Last Name in Last Name input field', function () {
    Add_Booker_task.addlastname();
});

And('user enters Phone Number in Phone Number input field', function () {
    Add_Booker_task.addphonenumber();
});

And('user enters Mobile Number in Mobile Number input field', function () {
    Add_Booker_task.addmobilenumber();
});

And('user enters Email in Email input field', function () {
    Add_Booker_task.addemail();
});

And('user enters Confirm Email in Confirm Email input field', function () {
    Add_Booker_task.addconfirmemail();
});

And('user selects the Booker role from Select User Role Dropdown', function () {
    Add_Booker_task.adduserrole();
});

And('user clicks on SUBMIT Button', function () {
    Add_Booker_task.addsubmitbtn();
});

// Add Primary Bookers 
Then('user selects Accounts from My account dropdown Primary User', function () {
    Add_Primary_User_task.acccountdropdown();
});

Then('user Clicks on ADD NEW Button on Manage users widget Primary User', function () {
    Add_Primary_User_task.manageuser();
});

Then('user Verifies Add new user pop up Registration form is visible Primary User', function () {
    Add_Primary_User_task.addnewuser();
});

And('user enters First Name in First Name input field Primary User', function () {
    Add_Primary_User_task.addfirstname();
});

And('user enters Last Name in Last Name input field Primary User', function () {
    Add_Primary_User_task.addlastname();
});

And('user enters Phone Number in Phone Number input field Primary User', function () {
    Add_Primary_User_task.addphonenumber();
});

And('user enters Mobile Number in Mobile Number input field Primary User', function () {
    Add_Primary_User_task.addmobilenumber();
});

And('user enters Email in Email input field Primary User', function () {
    Add_Primary_User_task.addemail();
});

And('user enters Confirm Email in Confirm Email input field Primary User', function () {
    Add_Primary_User_task.addconfirmemail();
});

And('user selects the Primary User from Select User Role Dropdown Primary User', function () {
    Add_Primary_User_task.adduserrole_primary();
});

And('user clicks on SUBMIT Button Primary User', function () {
    Add_Primary_User_task.addsubmitbtn();
});

// Add Bill Users Bookers
Then('user selects Accounts from My account dropdown Bill Pay User', function () {
    Add_Bill_Payertask_task.acccountdropdown();
});

Then('user Clicks on ADD NEW Button on Manage users widget Bill Pay User', function () {
    Add_Bill_Payertask_task.manageuser();
});

Then('user Verifies Add new user pop up Registration form is visible Bill Pay User', function () {
    Add_Bill_Payertask_task.addnewuser();
});

And('user enters First Name in First Name input field Bill Pay User', function () {
    Add_Bill_Payertask_task.addfirstname();
});

And('user enters Last Name in Last Name input field Bill Pay User', function () {
    Add_Bill_Payertask_task.addlastname();
});

And('user enters Phone Number in Phone Number input field Bill Pay User', function () {
    Add_Bill_Payertask_task.addphonenumber();
});

And('user enters Mobile Number in Mobile Number input field Bill Pay User', function () {
    Add_Bill_Payertask_task.addmobilenumber();
});

And('user enters Email in Email input field Bill Pay User', function () {
    Add_Bill_Payertask_task.addemail();
});

And('user enters Confirm Email in Confirm Email input field Bill Pay User', function () {
    Add_Bill_Payertask_task.addconfirmemail();
});
And('user selects the Bill Payer role from Select User Role Dropdown Bill Pay User', function () {
    Add_Bill_Payertask_task.adduserrole_bill();
});

And('user clicks on SUBMIT Button Bill Pay User', function () {
    Add_Bill_Payertask_task.addsubmitbtn();
});

// Add Bill Payer Duplicate
Then('user selects Accounts from My account dropdown Bill Pay User Duplicate', function () {
    Add_Bill_Payer_Duplicate_task.acccountdropdown();
});


Then('user Clicks on ADD NEW Button on Manage users widget Bill Pay User Duplicate', function () {
    Add_Bill_Payer_Duplicate_task.manageuser();
});

Then('user Verifies Add new user pop up Registration form is visible Bill Pay User Duplicate', function () {
    Add_Bill_Payer_Duplicate_task.addnewuser();
});

And('user enters First Name in First Name input field Bill Pay User Duplicate', function () {
    Add_Bill_Payer_Duplicate_task.addfirstname();
});

And('user enters Last Name in Last Name input field Bill Pay User Duplicate', function () {
    Add_Bill_Payer_Duplicate_task.addlastname();
});

And('user enters Phone Number in Phone Number input field Bill Pay User Duplicate', function () {
    Add_Bill_Payer_Duplicate_task.addphonenumber();
});

And('user enters Mobile Number in Mobile Number input field Bill Pay User Duplicate', function () {
    Add_Bill_Payer_Duplicate_task.addmobilenumber();
});

And('user enters Email in Email input field Bill Pay User Duplicate', function () {
    Add_Bill_Payer_Duplicate_task.addemail();
});

And('user enters Confirm Email in Confirm Email input field Bill Pay User Duplicate', function () {
    Add_Bill_Payer_Duplicate_task.addconfirmemail();
});
And('user selects the Bill Payer role from Select User Role Dropdown Bill Pay User Duplicate', function () {
    Add_Bill_Payer_Duplicate_task.adduserrole_bill();
});

And('user clicks on SUBMIT Button Bill Pay User Duplicate', function () {
    Add_Bill_Payer_Duplicate_task.addsubmitbtn();
});

// Edit User Role
Then('user selects Accounts from My account dropdown Bill Pay User Edit', function () {
    Edit_user_Task.acccountdropdown(); 
});
Then('user clicks on Shaz qa Primary User Edit button', function () {
   Edit_user_Task.editbutton(); 
});

And('user selects the Bill Payer role from Select User Role Dropdown Edit User', function () {
    Edit_user_Task.edituserrole(); 
 });

 And('user clicks on SUBMIT Button Bill Pay Edit User', function () {
    Edit_user_Task.addsubmitbtn(); 
 });

