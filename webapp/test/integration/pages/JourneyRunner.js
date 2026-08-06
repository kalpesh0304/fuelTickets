sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/fuelsphere/orders/fueltickets/test/integration/pages/FuelTicketsList",
	"com/fuelsphere/orders/fueltickets/test/integration/pages/FuelTicketsObjectPage"
], function (JourneyRunner, FuelTicketsList, FuelTicketsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/fuelsphere/orders/fueltickets') + '/test/flp.html#app-preview',
        pages: {
			onTheFuelTicketsList: FuelTicketsList,
			onTheFuelTicketsObjectPage: FuelTicketsObjectPage
        },
        async: true
    });

    return runner;
});

