exports = module.exports = {};
function getPublicAPI(baseURI){
    var getJsonApi = function(callback){
        $.ajax({
             url: baseURI + '/users',
             method: 'GET',
             success: function(data){
                data.theOtherThing = 'The monkey is in it, baby!';
                callback(data);
            },
             error: function(error){
                callback(error);
            }
        });
    };
    var publicAPI = {
        jsonPlaceHolder : getJsonApi
    };
    return publicAPI;
};
exports.getPublicAPI = getPublicAPI;