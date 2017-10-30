'use strict';

/*returnMenu takes in data from jsonplaceholder/users and returns the username, latitude, and longitude of the data in an array with markup meant to be displayed on a table*/
exports.returnMenu = function returnMenu() {
    var renderMenu = function (data) {
        var htmlBlock = [];

        for (var i = 0; i < data.length; i++) {
            htmlBlock.push('<div class = "tableRow"><div class="userName tableCell"><a id = "' + data[i].id + '" href="#">' + data[i].username + '</a></div><div class="latitude tableCell">' + data[i].address.geo.lat + '</div><div class="longitude tableCell">' + data[i].address.geo.lng + '</div></div>');
        };

        return htmlBlock;
    };
    var publicAPI = {
        renderMenu: renderMenu
    };
    return publicAPI;
};

/*getCoordinates takes in the click event set on the page's <a> elements and returns the coordinates from the table. */
exports.getCoordinates = function getCoordinates(e) {
    var coordinates = {};
    var setCoordinatesObject = function (e) {
        coordinates.lat = parseFloat
        coordinates.lat = parseFloat(e.path[2].children[1].innerText);
        coordinates.lng = parseFloat(e.path[2].children[2].innerText);
        return coordinates;
    }
    var publicAPI = {
        setCoordinatesObject: setCoordinatesObject
    };
    return publicAPI;
}