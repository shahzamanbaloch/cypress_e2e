class Add_Primary_user{

    acccountdropdown() {
        cy.get("div.dropdown__content [href='/my-account/accounts']").invoke('show');
        cy.contains('Accounts').click({force: true});   
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
        cy.get('#email').should('be.visible').type('shahztest@example1.com');
    }
    
    
    addconfirmemail() {
        cy.get('#confirmEmail').should('be.visible').type('shahztest@example1.com');
    }
    
    adduserrole_primary() {
        cy.get('select#roleId').should('be.visible').select('Primary User');
    }
    
    addsubmitbtn() {
        cy.get('[data-testid=submitButton]').should('be.visible').click();
        
    }

}
export default Add_Primary_user;   