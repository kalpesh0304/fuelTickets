sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.fuelsphere.orders.fueltickets',
            componentId: 'FuelTicketsList',
            contextPath: '/FuelTickets'
        },
        CustomPageDefinitions
    );
});