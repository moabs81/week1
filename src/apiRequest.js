'use strict';
var dataSet1 = require('./dataSet1.js');
var dataIfRequired;

exports.getPublicAPI = function getPublicAPI(baseURI, endpoint) {
    var targetUri = baseURI + endpoint;
    var getJsonApi = function (callback) {
        $.ajax({
            url: targetUri,
            method: 'GET',
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    data[i].menuOption = 'Option ' + data[i].id;
                };
                console.log('sucess reached!');
                callback(data);
            },
            error: function (error) {
                dataIfRequired = dataSet1.dataSet;
                for (var i = 0; i < dataIfRequired.length; i++) {
                    dataIfRequired[i].menuOption = 'Option ' + dataIfRequired[i].id;
                };
                callback(error, dataIfRequired);
            }
        });
    };
    var publicAPI = {
        jsonPlaceHolder: getJsonApi
    };
    return publicAPI;
};
exports.initMap = function initMap() {
    var initMap = function () {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: coordinates
        });
        marker = new google.maps.Marker({
            position: coordinates,
            map: map
        });
    };
    var publicAPI = {
        initMap: initMap
    };

}