const mcs = require("../lib/mcs");
const http = require("sf-core/net/http");
const Http = new http();
const converterJSON = require("../lib/convertFileToJsonObj");

exports.getCompanyDocuments = getCompanyDocuments;

function getCompanyDocuments(request, callback) {

    if (!callback && request) {
        callback = request;
        request = null;
    }
    try {
        var filePath = "../mock/getCompanyDocuments.json";

        var JSONobj = converterJSON.convertFileToJson(filePath);
        if (JSONobj) {

            callback && callback(null, JSONobj);
        }
        else {
            callback(JSONobj);
        }
    }
    finally {}

    // if (!callback && request) {
    //     callback = request;
    //     request = null;
    // }
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "companydocuments"
    // }), {
    //     method: "GET",
    //     onLoad: function(response) {
    //         var responseBody = response.body.toString();
    //         try {
    //             responseBody = JSON.parse(responseBody);
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
