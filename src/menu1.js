'use strict';
exports = module.exports = {};
var dataSet1 = require('./dataSet1.js');
var dataIfRequired;

function returnMenu() {
    var renderMenu = function (data) {
        var htmlBlock = [];
        if (data.readyState == 0) {
            console.log('ERROR IN MENU. USING BACKUP DATA');
            dataIfRequired = dataSet1.dataSet;
            for (var i = 0; i < dataIfRequired.length; i++) {
                htmlBlock.push('<div class = "tableRow"><div class="userName tableCell"><a id = "' + dataIfRequired[i].id + '" href="#">' + dataIfRequired[i].username + '</a></div><div class="latitude tableCell">' + dataIfRequired[i].address.geo.lat + '</div><div class="longitude tableCell">' + dataIfRequired[i].address.geo.lng + '</div></div>')
            };
        } else {
            for (var i = 0; i < data.length; i++) {
                htmlBlock.push('<div class = "tableRow"><div class="userName tableCell"><a id = "' + data[i].id + '" href="#">' + data[i].username + '</a></div><div class="latitude tableCell">' + data[i].address.geo.lat + '</div><div class="longitude tableCell">' + data[i].address.geo.lng + '</div></div>');
            };
        };
        return htmlBlock;
    };
    var publicAPI = {
        renderMenu: renderMenu
    };
    return publicAPI;
}
exports.returnMenu = returnMenu;