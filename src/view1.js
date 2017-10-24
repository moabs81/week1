var apiRequest = require('./apiRequest.js');
var view1 = apiRequest.getPublicAPI('https://jsonplaceholder.typicode.com');
var setView = function(result){
    //console.log(result);
    $('h1').after('<p>'+ result.theOtherThing +'</p>');
};
view1.jsonPlaceHolder(setView);