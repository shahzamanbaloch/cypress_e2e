class test2 {

    PropertyName() {
        cy.get('.banner__content .form__field .button').click();
        cy.get("[for='Treatment']").click();
    }

    Roombutton() {
        cy.get('.banner__content > .form > .button').click();
    }

    Pagedisplayed() {
        cy.get('.search-results__info > span:nth-of-type(1)').contains('8 Rooms').should('be.visible');
    }

    showresult() {
        cy.get('.venue-search__list > li:nth-of-type(1) li:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)').should('not.have.value', '£123')
    }

    changingfilter() {
        cy.get('.space-filters__container > div:nth-of-type(4) .button').click()
        cy.get("[name='facets[]']").click();
        cy.get(".button--small").click()
    }

    roomdetails() {
        cy.get("[href='/rooms/17115']").click()
    }

    propertydetails() {
        cy.get("[href='/properties/344']").contains('Failsworth Primary Care Centre').should('exist')
    }

}

export default test2;