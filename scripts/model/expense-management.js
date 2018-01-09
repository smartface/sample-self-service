const mcs = require("../lib/mcs");
const http = require("sf-core/net/http");
const Http = new http();
const getImage = require("../lib/getImage");
const converterJSON = require("../lib/convertFileToJsonObj");

exports.getPendingExpenseApprovals = getPendingExpenseApprovals;
exports.getApprovedExpenseApprovals = getApprovedExpenseApprovals;
exports.getExpenses = getExpenses;

function getPendingExpenseApprovals(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    try {
        var filePath = 'assets://mock/getPendingExpenseApprovals.json';

        var JSONobj = converterJSON.convertFileToJson(filePath);

        JSONobj.forEach(function(item) {
            item.image = getImage(item.image);
        });
    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, JSONobj);
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "pendingexpenseapprovals"
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

function getApprovedExpenseApprovals(request, callback) {

    if (!callback && request) {
        callback = request;
        request = null;
    }
    try {
        var filePath = 'assets://mock/getApprovedExpenseApprovals.json';

        var JSONobj = converterJSON.convertFileToJson(filePath);

        JSONobj.forEach(function(item) {
            item.image = getImage(item.image);
        });

    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, JSONobj);

    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "approvedexpenseapprovals"
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

function getExpenses(request, callback) {


    if (!callback && request) {
        callback = request;
        request = null;
    }
    try {
        var filePath = 'assets://mock/getExpenses.json';

        var salaryListJSONObj = converterJSON.convertFileToJson(filePath);
    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, salaryListJSONObj);

    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "expenses"
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
