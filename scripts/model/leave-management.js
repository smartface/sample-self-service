const mcs = require("../lib/mcs");
const http = require("sf-core/net/http");
const Http = new http();
const getImage = require("../lib/getImage");
const converterJSON = require("../lib/convertFileToJsonObj");

exports.deleteApprovedLeaveRequest = deleteApprovedLeaveRequest;
exports.deleteWaitingLeaveRequest = deleteWaitingLeaveRequest;
exports.deleteRejectedLeaveRequest = deleteRejectedLeaveRequest;
exports.getPendingLeaveApprovals = getPendingLeaveApprovals;
exports.getApprovedLeaveApprovals = getApprovedLeaveApprovals;
exports.getApprovedLeaveRequests = getApprovedLeaveRequests;
exports.getWaitingLeaveRequests = getWaitingLeaveRequests;
exports.getRejectedLeaveRequests = getRejectedLeaveRequests;
exports.getLeaveRequestsChart = getLeaveRequestsChart;


function deleteApprovedLeaveRequest(request, callback) {

    if (!callback && request) {
        callback = request;
        request = null;
    }
    try {
        var filePath = 'assets://mock/deleteApprovedLeaveRequest.json';

        var JSONobj = converterJSON.convertFileToJson(filePath);
    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, JSONobj);

    // if (!callback && request) {
    //     callback = request;
    //     request = null;
    // }
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "approvedleaverequests"
    // }), {
    //     method: "DELETE",
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

function deleteWaitingLeaveRequest(request, callback) {

    if (!callback && request) {
        callback = request;
        request = null;
    }

    try {
        var filePath = 'assets://mock/deleteWaitingLeaveRequest.json';

        var JSONobj = converterJSON.convertFileToJson(filePath);
    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, JSONobj);

    // if (!callback && request) {
    //     callback = request;
    //     request = null;
    // }
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "waitingleaverequests"
    // }), {
    //     method: "DELETE",
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

function deleteRejectedLeaveRequest(request, callback) {

    if (!callback && request) {
        callback = request;
        request = null;
    }

    try {
        var filePath = 'assets://mock/deleteRejectedLeaveRequest.json';

        var JSONobj = converterJSON.convertFileToJson(filePath);
    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, JSONobj);

    // if (!callback && request) {
    //     callback = request;
    //     request = null;
    // }
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "rejectedleaverequest"
    // }), {
    //     method: "DELETE",
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

function getPendingLeaveApprovals(request, callback) {

    if (!callback && request) {
        callback = request;
        request = null;
    }

    try {
        var filePath = 'assets://mock/getPendingLeaveApprovals.json';

        var JSONobj = converterJSON.convertFileToJson(filePath);

        JSONobj.forEach(function(item) {
            item.image = getImage(item.image);
        });
    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, JSONobj);

    // if (!callback && request) {
    //     callback = request;
    //     request = null;
    // }
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "pendingleaveapprovals"
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

function getApprovedLeaveApprovals(request, callback) {

    if (!callback && request) {
        callback = request;
        request = null;
    }

    try {
        var filePath = 'assets://mock/getApprovedLeaveApprovals.json';

        var JSONobj = converterJSON.convertFileToJson(filePath);

        JSONobj.forEach(function(item) {
            item.image = getImage(item.image);
        });
    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, JSONobj);

    // if (!callback && request) {
    //     callback = request;
    //     request = null;
    // }
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "approvedleaveapprovals"
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

function getApprovedLeaveRequests(request, callback) {

    if (!callback && request) {
        callback = request;
        request = null;
    }

    try {
        var filePath = 'assets://mock/getApprovedLeaveRequests.json';

        var JSONobj = converterJSON.convertFileToJson(filePath);
    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, JSONobj);


    // if (!callback && request) {
    //     callback = request;
    //     request = null;
    // }
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "approvedleaverequests"
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

function getWaitingLeaveRequests(request, callback) {

    if (!callback && request) {
        callback = request;
        request = null;
    }

    try {
        var filePath = 'assets://mock/getWaitingLeaveRequests.json';

        var JSONobj = converterJSON.convertFileToJson(filePath);
    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, JSONobj);

    // if (!callback && request) {
    //     callback = request;
    //     request = null;
    // }
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "waitingleaverequests"
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

function getRejectedLeaveRequests(request, callback) {

    if (!callback && request) {
        callback = request;
        request = null;
    }

    try {
        var filePath = 'assets://mock/getRejectedLeaveRequests.json';

        var JSONobj = converterJSON.convertFileToJson(filePath);
    }
    catch (err) {
        callback(err);
    }
    callback && callback(null, JSONobj);

    // if (!callback && request) {
    //     callback = request;
    //     request = null;
    // }
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "rejectedleaverequest"
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

function getLeaveRequestsChart(request, callback) {

    if (!callback && request) {
        callback = request;
        request = null;
    }

    try {
        var filePath = 'updateHereAfretwards';

        var JSONobj = converterJSON.convertFileToJson(filePath);
    }
    catch (err) {
        callback(err);
    }
    callback && callback(JSONobj, JSONobj);

    // if (!callback && request) {
    //     callback = request;
    //     request = null;
    // }
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "leaverequestschart"
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
