sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheFuelTicketsList.iSeeThisPage();
            Then.onTheFuelTicketsList.onTable().iCheckColumns(9, {"ticket_number":{"header":"Ticket Number"},"internal_number":{"header":"Internal Number"},"aircraft_reg":{"header":"Aircraft Reg"},"flight_number":{"header":"Flight"},"quantity":{"header":"Quantity (kg)"},"delivery_timestamp":{"header":"Delivery Time"},"status":{"header":"Status"},"verified_by":{"header":"Verified By"},"verified_at":{"header":"Verified At"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheFuelTicketsList.onFilterBar().iExecuteSearch();
            
            Then.onTheFuelTicketsList.onTable().iCheckRows();

            When.onTheFuelTicketsList.onTable().iPressRow(0);
            Then.onTheFuelTicketsObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});