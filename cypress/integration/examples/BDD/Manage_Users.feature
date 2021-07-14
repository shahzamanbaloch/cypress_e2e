Feature:  Manage users

  Background:
    Given User opens browser and enters the ospace URL

  Scenario: Add new user as a Booker
    Then user selects Accounts from My account dropdown
    Then user Clicks on ADD NEW Button on Manage users widget
    Then user Verifies Add new user pop up Registration form is visible
    And user enters First Name in First Name input field
    And user enters Last Name in Last Name input field
    And user enters Phone Number in Phone Number input field
    And user enters Mobile Number in Mobile Number input field
    And user enters Email in Email input field
    And user enters Confirm Email in Confirm Email input field
    And user selects the Booker role from Select User Role Dropdown
    And user clicks on SUBMIT Button

  Scenario: Add Primary User
    Then user selects Accounts from My account dropdown Primary User
    Then user Clicks on ADD NEW Button on Manage users widget Primary User
    Then user Verifies Add new user pop up Registration form is visible Primary User
    And user enters First Name in First Name input field Primary User
    And user enters Last Name in Last Name input field Primary User
    And user enters Phone Number in Phone Number input field Primary User
    And user enters Mobile Number in Mobile Number input field Primary User
    And user enters Email in Email input field Primary User
    And user enters Confirm Email in Confirm Email input field Primary User
    And user selects the Primary User from Select User Role Dropdown Primary User
    And user clicks on SUBMIT Button Primary User

  Scenario: Add new user as a Bill Payer
    Then user selects Accounts from My account dropdown Bill Pay User
    Then user Clicks on ADD NEW Button on Manage users widget Bill Pay User
    Then user Verifies Add new user pop up Registration form is visible Bill Pay User
    And user enters First Name in First Name input field Bill Pay User
    And user enters Last Name in Last Name input field Bill Pay User
    And user enters Phone Number in Phone Number input field Bill Pay User
    And user enters Mobile Number in Mobile Number input field Bill Pay User
    And user enters Email in Email input field Bill Pay User
    And user enters Confirm Email in Confirm Email input field Bill Pay User
    And user selects the Bill Payer role from Select User Role Dropdown Bill Pay User
    And user clicks on SUBMIT Button Bill Pay User

  Scenario: Add new user as a Booker Duplicate
    Then user selects Accounts from My account dropdown Bill Pay User Duplicate
    Then user Clicks on ADD NEW Button on Manage users widget Bill Pay User Duplicate
    Then user Verifies Add new user pop up Registration form is visible Bill Pay User Duplicate
    And user enters First Name in First Name input field Bill Pay User Duplicate
    And user enters Last Name in Last Name input field Bill Pay User Duplicate
    And user enters Phone Number in Phone Number input field Bill Pay User Duplicate
    And user enters Mobile Number in Mobile Number input field Bill Pay User Duplicate
    And user enters Email in Email input field Bill Pay User Duplicate
    And user enters Confirm Email in Confirm Email input field Bill Pay User Duplicate
    And user selects the Bill Payer role from Select User Role Dropdown Bill Pay User Duplicate
    And user clicks on SUBMIT Button Bill Pay User Duplicate

  Scenario: Edit User
    Then user selects Accounts from My account dropdown Bill Pay User Edit
    Then user clicks on Shaz qa Primary User Edit button
    And user selects the Bill Payer role from Select User Role Dropdown Edit User
    And user clicks on SUBMIT Button Bill Pay Edit User