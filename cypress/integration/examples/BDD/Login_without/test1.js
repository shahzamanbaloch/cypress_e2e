class test1 {


    RoomType() {
        cy.get('.banner__content .form__field .button').click()
    }

    Roombutton() {
        cy.get('.banner__content > .form > .button').click()
    }

    Pagedisplayed() {
        cy.get('.search-results__info > span:nth-of-type(1)').contains('Rooms').should('be.visible')
    }

    showresult() {
        cy.get('.venue-search__list > li:nth-of-type(1) li:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)').should('not.have.value', '£123')

    }

    changingfilter() {
        cy.get('.space-filters__container > div:nth-of-type(4) .button').click()
        cy.get("input#facet-Parking").click()
        cy.get(".button--small").click()
    }

    roomdetails() {
        cy.get("[href='/rooms/17103']").click()
    }

    propertydetails() {
        cy.get(".rooms__heading-titles > h4").contains('Clinical').should('exist')
    }

}

export default test1;