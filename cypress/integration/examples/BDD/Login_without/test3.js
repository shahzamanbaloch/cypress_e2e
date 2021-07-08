class test3 {

    RoomType() {
        cy.get('.banner__content .form__field .button').click()
        cy.get("[for='Treatment']").click()
        cy.get(".banner__content [name='location']").click()
    }

    SearchPropertyName() {
        cy.get(".banner__content [name='location']").type('london')
        cy.wait(1000)
        cy.get(':nth-child(1) > [data-testid=locationsEl]').click()
    }

    Roombutton() {
        cy.get('.banner__content > .form > .button').click()
    }

    Pagedisplayed() {
        cy.get('.search-results__info > span:nth-of-type(1)').contains('London').should('be.visible')

    }

    showresult() {
        cy.get('.venue-search__list > li:nth-of-type(1) li:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)').should('not.have.value', '£123')

    }

    roomdetails() {
        cy.get("[href='/rooms/17070']").click()
    }

    propertydetails() {
        cy.get("main.rooms section:nth-child(1) div.section-content div.rooms__heading div.rooms__heading-titles > h1:nth-child(2)").contains('Treatment room 24').should('exist')
    }

}

export default test3;