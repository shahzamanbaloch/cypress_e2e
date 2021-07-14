class Add_Booker {

    acccountdropdown() {
        cy.get("div.dropdown__content [href='/my-account/accounts']").invoke('show');
        cy.contains('Accounts').click({
            force: true
        });
    }

    manageuser() {
        cy.get('.users-widget > .my-account-box__header > h3').click();
    }

    addnewuser() {
        cy.get('.users-widget > .my-account-box__header > [data-testid=actionButton]').click();
    }

    addfirstname() {
        cy.get('#firstName').clear();
        cy.get('#firstName').should('be.visible').type('Shaz1234');
    }

    addlastname() {
        cy.get('#lastName').clear();
        cy.get('#lastName').should('be.visible').type('Testing');
    }

    addphonenumber() {
        cy.get('#phoneNumber').should('be.visible').type('07734945793');
    }

    addmobilenumber() {
        cy.get('#mobileNumber').clear();
        cy.get('#mobileNumber').should('be.visible').type('07734945793');
    }

    addemail() {
        cy.get('#email').should('be.visible').type('qashahztest@example1.com');
    }

    addconfirmemail() {
        cy.get('#confirmEmail').should('be.visible').type('qashahztest@example1.com');
    }

    adduserrole() {
        cy.get('[data-testid=roles] > .field__input > [data-testid=selectListSelect]').select('10');
        cy.get('ul > :nth-child(1) > label').should('not.be.enabled');
        cy.get('ul > :nth-child(2) > label').should('not.be.enabled');
        cy.get('ul > :nth-child(3) > label').should('not.be.enabled');
        cy.get('ul > :nth-child(4) > label').should('not.be.enabled');
        cy.get('[for="serviceLevel2"]').should('exist').click();
        cy.get('ul > :nth-child(1) > label').should('exist').click();
        cy.get('ul > :nth-child(2) > label').should('exist').click();
        cy.get('ul > :nth-child(3) > label').should('exist').click();
        cy.get('ul > :nth-child(4) > label').should('exist').click();
    }

    addsubmitbtn() {
        cy.get('[data-testid=submitButton]').should('exist').click({force: true});
        //cy.get('div.users-widget h3').contains('Manage users (12)').should('be.visible');
    }
}
export default Add_Booker;