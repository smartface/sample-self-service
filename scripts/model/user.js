const mcs = require("../lib/mcs");
const http = require("sf-core/net/http");
const Http = new http();
const getImage = require("../lib/getImage");
const converterJSON = require("../lib/convertFileToJsonObj");

exports.getUsers = getUsers;

function getUsers(request, callback) {
    
     if (!callback && request) {
        callback = request;
        request = null;
    }
    try {
        var filePath ="../mock/getUsers.json";

        var JSONobj = converterJSON.convertFileToJson(filePath);
        
        if (JSONobj) {
             var JSONstringify = JSON.stringify(JSONobj);
             var JSONobjparsed= JSON.parse(JSONstringify);

            JSONobjparsed.forEach(function(item) {
                item.image = getImage(item.image);
            });
            
            callback && callback(null, JSONobjparsed);
        }
        else {
            callback(JSONobjparsed);
        }
    }
    finally {}
    
    // if (!callback && request) {
    //     callback = request;
    //     request = null;
    // }
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "users"
    // }), {
    //     method: "GET",
    //     onLoad: function(response) {
    //         var responseBody = response.body.toString();
    //         try {
    //             responseBody = JSON.parse(responseBody);
    //             responseBody.forEach(function(item) {
    //                 item.image = getImage(item.image);
    //             });
    //         }
    //         finally {}
    //         callback && callback(null, responseBody);
    //     },
    //     onError: function(e) {
    //         var responseBody = e.body.toString();
    //         try {
    //             responseBody = JSON.parse(responseBody);
    //         }
    //         finally {}
    //         callback && callback(responseBody);
    //     }
    // });
    // if (request)
    //     requestOptions.body = JSON.stringify(request);


    // Http.request(requestOptions);
}


