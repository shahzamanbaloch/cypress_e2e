class Edit_User_Role{

    acccountdropdown() {
        cy.get("div.dropdown__content [href='/my-account/accounts']").invoke('show');
        cy.contains('Accounts').click({force: true});   
    }
    
    editbutton() {
        cy.get('tr:nth-of-type(12) .button').click(); 
    }
    
    edituserrole() {
        cy.get('select#roleId').select('Bill Payer');
    }
    
    addsubmitbtn() {
        cy.get('[data-testid=submitButton]').should('be.visible').click();
        
    }
}
export default Edit_User_Role;   