'use strict';
var apiRequest = require('./apiRequest.js');
var returnTable = require('./menu1.js');
var view1 = apiRequest.getPublicAPI('https://jsonplaceholder.typicode.com', '/users');
var getTableRows; //module global for tableRows object
var coordinates = {}; //module global for coordinates
var googApiKey = "AIzaSyCDGOp3S8vVHFRzEuEMRI0oGzNnaebmc5A";
var setCoordinates = returnTable.getCoordinates();
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: coordinates
    });
    marker = new google.maps.Marker({
        position: coordinates,
        map: map
    });
}
window.initMap = initMap;

var setView = function (data, backupData) { //This is the callback function that take the data and puts it in the view

    if (data.readyState == 0) {
        data = backupData;
        data.readyState = 0;
        data.theOtherThing = 'Sorry, you appear to be offline. Using data from dataSet1.js import. This is very hack and slash, but you didn\'t get Postman up in time.';

    } else {
        data.theOtherThing = 'The monkey is in it, baby!';
    };
    console.log(data);
    getTableRows = returnTable.returnMenu();
    var htmlBlock = getTableRows.renderMenu(data);
    $('#tableArea').append('<p id="subTitle">' + data.theOtherThing + '</p>');
    $('#tableArea').append('<div class="tableContainer" id="resultList"></div>');
    $('#resultList').append('<div class="tableRow tableHeaderRow" id="headerRow"><div class="userNameHeader tableCell tableHeaderCell">User Name</div><div class="latitudeHeader tableCell tableHeaderCell">Latitude</div><div class="longitudeHeader tableCell tableHeaderCell">Longitude</div></div></div>')
    htmlBlock.forEach(function (eachThing) {
        $('#resultList').append(eachThing);
    });

    //set scrolling
    window.onscroll = function () {
        var viewPort = document.getElementById('subTitle').getBoundingClientRect();
        if (viewPort.top < 95) {
            $('.titleBar').addClass('titleBarSolid');
        } else {
            $('.titleBar').removeClass('titleBarSolid');
        }
    };
    //set event listeners on <a> elements and grab coordinates from clicks
    for (var i = 1; i < 11; i++) {
        var el = document.getElementById(i);
        el.addEventListener('click', function (e) {
            coordinates = {};
            coordinates = setCoordinates.setCoordinatesObject(e);
            if (data.readyState == 0) {
                $('#map').replaceWith('<p>No map for you. Enjoy this gibberish instead.</p><p>' + coordinates.lat + '</p><p>' + htmlBlock + '</p>');
            } else {
                $('#map').after('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCDGOp3S8vVHFRzEuEMRI0oGzNnaebmc5A&callback=initMap" async defer></script>');
            }

        });
    };
};
view1.jsonPlaceHolder(setView);