exports = module.exports = {};
function getPublicAPI(baseURI){
    //var baseURI = 'https://jsonplaceholder.typicode.com';
    var getJsonApi = function(callback){
        $.ajax({
             url: baseURI + '/users',
             method: 'GET',
             success: function(data){
                data.theOtherThing = 'The monkey is in it, baby!';
                callback(data);
            },
             error: function(error){
                console.error(JSON.stringify(error))
            }
        });
    };
    var publicAPI = {
        jsonPlaceHolder : getJsonApi
    };
    return publicAPI;
};
exports.getPublicAPI = getPublicAPI;