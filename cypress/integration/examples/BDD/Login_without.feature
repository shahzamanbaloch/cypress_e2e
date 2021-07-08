
Feature:  Search Scenarios – Non Logged In User

    Background:
        Given User opens browser and enters the New NHS Pre Prod URL

    Scenario: Search – With Room Type Only
        Then User selects the RoomType from dropdown
        And click on find a room button
        Then Verify Search Results page is displayed
        Then User validate the shown results are based on the selected “RoomType” with price per hour not displayed
        Then Verify results by changing filters on the page
        Then validate the room details page by clicking on room name
        Then validate the property details page by clicking on property name

    Scenario: Search – With Property Name Only
        Then User inputs PropertyName in search box
        And click on find a room button PropertyName
        And Verify Search Results page is displayed Property
        Then User validate the shown results are based on the inputted PropertyName with price per hour not displayed
        Then validate the room details page by clicking on room name property
        Then validate the property details page by clicking on PropertyName

    Scenario: Search – With combination of Room Type and Location
        Then User selects the room type from dropdown
        Then User inputs PropertyName in search box both
        Then click on find a room button Both
        Then Verify Search Results page is displayed both
        Then User validate the shown results are based on the selected RoomType and inputted Location with price per hour not displayed
        Then validate the room details page by clicking on room name both
        Then validate the property details page by clicking on property name both

    Scenario: Search – With London PostCode
        Then User selects the RoomType from dropdown from PostCode Scenario
        Then User type postcode in location
        And click on find a room button PostCode from PostCode Scenario
        Then Verify Search Results page is displayed PostCode from PostCode Scenario
        Then User validate the shown results are based on the selected “RoomType” with price per hour not displayed from PostCode Scenario
        Then validate the room details page by clicking on room name from PostCode Scenario
        Then validate the property details page by clicking on property name from PostCode Scenario