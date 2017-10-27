'use strict';
exports = module.exports = {};

function getPublicAPI(baseURI, endpoint) {
    var targetUri = baseURI + endpoint;
    var getJsonApi = function(callback) {
        $.ajax({
            url: targetUri,
            method: 'GET',
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    data[i].menuOption = 'Option ' + data[i].id;
                };
                callback(data);
            },
            error: function(error) {
                callback(error);
            }
        });
    };
    var publicAPI = {
        jsonPlaceHolder: getJsonApi
    };
    return publicAPI;
};
exports.getPublicAPI = getPublicAPI;