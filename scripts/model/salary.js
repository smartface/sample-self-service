// const mcs = require("../lib/mcs");
// const http = require("sf-core/net/http");
// const Http = new http();
// const File = require("sf-core/io/file");
// const FileStream = require("sf-core/io/filestream");
const converterJSON = require("../lib/convertFileToJsonObj");

exports.getSalaryList = getSalaryList;

function getSalaryList(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    try {
        var filePath = 'assets://mock/getSalaryList.json';

        var salaryListJSONObj = converterJSON.convertFileToJson(filePath);
    }
    catch (err) {
        callback(err);
    }
    finally {}
    callback && callback(null, salaryListJSONObj);
}
// function getSalaryList(request, callback) {
//     if (!callback && request) {
//         callback = request;
//         request = null;
//     }
//     var requestOptions = Object.assign(mcs.createRequestOptions({
//         apiName: "SelfService",
//         endpointPath: "salary"
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
