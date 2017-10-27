'use strict';
var apiRequest = require('./apiRequest.js');
var returnTable = require('./menu1.js');
var view1 = apiRequest.getPublicAPI('https://jsonplaceholder.typicode.com', '/users');
var getTableRows; //module global for tableRows object
var setView = function(data) { //This is the callback function that take the data and puts it in the view
    data.theOtherThing = 'The monkey is in it, baby!';
    getTableRows = returnTable.returnMenu();
    var htmlBlock = getTableRows.renderMenu(data);
    $('#contentArea').append('<p id="subTitle">' + data.theOtherThing + '</p>');
    $('#contentArea').append('<div class="tableContainer" id="resultList"></div>');
    $('#resultList').append('<div class="tableRow tableHeaderRow" id="headerRow"><div class="userNameHeader tableCell tableHeaderCell">User Name</div><div class="latitudeHeader tableCell tableHeaderCell">Latitude</div><div class="longitudeHeader tableCell tableHeaderCell">Longitude</div></div></div>')
    htmlBlock.forEach(function(eachThing) {
        $('#resultList').append(eachThing);
    });
    $('#resultList').after('<div class="tableButton" id="tableButton"></div>');
    for (var i = 0; i < 3; i++) {
        console.log(data[i].menuOption);
    };
    //set scrolling
    /*window.onscroll = function() { //addEventListener('scroll', function() {        
        console.log(document.getElementById('subTitle').offsetTop - window.scrollTop);
        console.log(document.getElementById('resultList').offsetTop - document.body.scrollTop);

        if (document.getElementById('subTitle').scrollTop < 30) {
            console.log('we are over it');
        }
    };*/
};
view1.jsonPlaceHolder(setView);