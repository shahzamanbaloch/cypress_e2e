
Feature:  Registration scenarios

    Background:
        Given User opens browser and enters the New NHS Pre Prod URL
        Then user clicks on the Register link

    # # TC1
    Scenario: Register - New user for the new client
        Then User fills the user details form by entering all the mandatory fields and continue
        Then User fills the company details form by entering new company details and continue
        Then User added the different services on service details and click submit for approval button
        Then User validate the confirmation screen for newly created user

    # # TC2
    Scenario: Register - New user With invalid Phone number for the new client
        Then User fills the user details with invalid number form by entering all the mandatory fields and continue
        Then User fills the company details form by entering new company details and continue
        Then User added the different services on service details and click submit for approval button
        Then User verify Your registration submission failed because invalid phone numbers

    # # # TC3
    Scenario: Register - New user for the existing client
        Then User completes the user details form by entering all the mandatory fields and continue
        Then User selects the existing company and continue
        Then User selects the different services on service details and click submit for approval button
        Then User validate the confirmation screen for newly created user for the existing client

    # TC4
    Scenario: Register - New user for the existing client without selecting the services
        Then User completes the user details form by entering all the fields and continue
        Then User selects the existing company and click continue
        Then User do not select any service from the list of services and click submit for approval button
        Then User validate the confirmation message for the newly created user for existing client

    # TC5
    Scenario: Register - New user for the new client by adding large volume of services
        Then User enters the user details and continue
        Then User enters the company details and continue
        Then User added the large volume of services on service details and click submit for approval button
        Then User validate the confirmation screen