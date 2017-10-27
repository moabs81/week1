'use strict';
exports = module.exports = {};

function returnMenu() {
    var renderMenu = function(data) {
        var htmlBlock = [];
        if (data.readyState == 0) {
            console.log('ERROR IN MENU');
            htmlBlock.push('<div>I\'m sorry, there was an error.</div>');
        } else {
            for (var i = 0; i < data.length; i++) {
                htmlBlock.push('<div class = "tableRow" id = "' + data[i].id + '"><div class="userName tableCell"><a href="#">' + data[i].username + '</a></div><div class="latitude tableCell">' + data[i].address.geo.lat + '</div><div class="longitude tableCell">' + data[i].address.geo.lng + '</div></div>');
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