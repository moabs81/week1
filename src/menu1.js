var apiRequest = require('./apiRequest.js');
var dataStructure = apiRequest.getPublicAPI('https://jsonplaceholder.typicode.com');

function returnMenu(data){
    var renderMenu = function(){
        var htmlBlock = [];
        for (var i=0; i<data.length; i++){
            console.log(data[i]);
            htmlBlock.push('<li>' + data[i].username + ' - located at these coordinates: ' + data[i].address.geo.lat + ',' + data[i].address.geo.lng + '</li>');
        }
        return htmlBlock;
    };
    var publicAPI = {
        renderMenu : renderMenu
    };
    return publicAPI;
}

function dataResult(result){   
    var menu = returnMenu(result);
    var htmlBlock = menu.renderMenu();
    console.log(htmlBlock);
    $('h1').after('<ul id="resultList"></ul>');
    htmlBlock.forEach(function(eachThing){
        $('#resultList').append(eachThing);
    });
};
dataStructure.jsonPlaceHolder(dataResult);