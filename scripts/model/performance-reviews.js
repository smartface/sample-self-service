const mcs = require("../lib/mcs");
const http = require("sf-core/net/http");
const Http = new http();
const converterJSON = require("../lib/convertFileToJsonObj");

exports.getPerformanceReviews = getPerformanceReviews;

function getPerformanceReviews(callback) {

    try {
        var filePath = 'assets://mock/getPerformanceReviews.json';

        var performJSONObj = converterJSON.convertFileToJson(filePath);
    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, performJSONObj);

}

// function getPerformanceReviews(request, callback) {
//     if (!callback && request) {
//         callback = request;
//         request = null;
//     }
//     var requestOptions = Object.assign(mcs.createRequestOptions({
//         apiName: "SelfService",
//         endpointPath: "performancereviews"
//     }), {
//         method: "GET",
//         onLoad: function(response) {
//             var responseBody = response.body.toString();
//             try {
//                 responseBody = JSON.parse(responseBody);
//             }
//             finally {}
//             callback && callback(null, responseBody);
//         },
//         onError: function(e) {
//             var responseBody = e.body.toString();
//             try {
//                 responseBody = JSON.parse(responseBody);
//             }
//             finally {}
//             callback && callback(responseBody);
//         }
//     });
//     if (request)
//         requestOptions.body = JSON.stringify(request);


//     Http.request(requestOptions);
// }
