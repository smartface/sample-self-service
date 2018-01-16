// const mcs = require("../lib/mcs");
// const http = require("sf-core/net/http");
// const Http = new http();
const getImage = require("../lib/getImage");
const converterJSON = require("../lib/convertFileToJsonObj");
const Timer = require("sf-core/global/timer");
const Path = require('sf-core/io/path');
const File = require('sf-core/io/file');
const FileStream = require('sf-core/io/filestream');

exports.deleteApprovedLeaveRequest = deleteApprovedLeaveRequest;
exports.deleteWaitingLeaveRequest = deleteWaitingLeaveRequest;
exports.deleteRejectedLeaveRequest = deleteRejectedLeaveRequest;
exports.getPendingLeaveApprovals = getPendingLeaveApprovals;
exports.getApprovedLeaveApprovals = getApprovedLeaveApprovals;
exports.getApprovedLeaveRequests = getApprovedLeaveRequests;
exports.getWaitingLeaveRequests = getWaitingLeaveRequests;
exports.getRejectedLeaveRequests = getRejectedLeaveRequests;
exports.getLeaveRequestsChart = getLeaveRequestsChart;

var approvedReq;
var pendingReq;
var rejectedReq;

function deleteApprovedLeaveRequest(request, callback) {

    var myTimer = Timer.setTimeout({
        task: function() {
            if (!callback && request) {
                callback = request;
                request = null;
            }
            try {
                var filePath = "../mock/getApprovedLeaveApprovals.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                var singJson = JSON.stringify(JSONobj);
                var Jsonobj = JSONobj.body;
                for (let i in JSONobj) {
                    console.log("i + " + i + "  " + "" + Jsonobj[i].days);
                    if (JSONobj[i].days === this.days) {
                        console.log("json " + JSONobj[i].days);
                        Array.prototype.slice.call(JSONobj, i, 1);
                    }
                }
                var file = new File({
                    path: filePath
                });
                var fileStream = file.openStream(FileStream.StreamType.WRITE, FileStream.ContentMode.TEXT);
                console.log("sing Json \n " + singJson);
                fileStream.write(singJson);
                fileStream.close();

                if (JSONobj) {

                    callback && callback(null, JSONobj);
                }
                else {
                    callback(JSONobj);
                }
            }
            finally {}

        },
        delay: 200
    });
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

    var myTimer = Timer.setTimeout({
        task: function() {
            if (!callback && request) {
                callback = request;
                request = null;
            }

            try {
                var filePath = "../mock/deleteWaitingLeaveRequest.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                if (JSONobj) {

                    callback && callback(null, JSONobj);
                }
                else {
                    callback(JSONobj);
                }
            }
            finally {}
        },
        delay: 200
    });

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

    var myTimer = Timer.setTimeout({
        task: function() {
            if (!callback && request) {
                callback = request;
                request = null;
            }

            try {
                var filePath = "../mock/deleteRejectedLeaveRequest.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                if (JSONobj) {

                    callback && callback(null, JSONobj);
                }
                else {
                    callback(JSONobj);
                }
            }
            finally {}
        },
        delay: 200
    });

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

    Timer.setTimeout({
        task: function() {
            try {
                var filePath = "../mock/getPendingLeaveApprovals.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                if (JSONobj) {

                    var JSONstringify = JSON.stringify(JSONobj);
                    var JSONobjparsed = JSON.parse(JSONstringify);

                    JSONobjparsed.forEach(function(item) {
                        item.image = getImage(item.image);
                    });

                    callback(null, JSONobjparsed);
                }
                else {
                    callback(JSONobjparsed);
                }
            }
            finally {}
        },
        delay: 200
    });

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

    var myTimer = Timer.setTimeout({
        task: function() {
            if (!callback && request) {
                callback = request;
                request = null;
            }

            try {
                var filePath = "../mock/getApprovedLeaveApprovals.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                if (JSONobj) {

                    var JSONstringify = JSON.stringify(JSONobj);
                    var JSONobjparsed = JSON.parse(JSONstringify);

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
        },
        delay: 200
    });

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


    var myTimer = Timer.setTimeout({
        task: function() {
            if (!callback && request) {
                callback = request;
                request = null;
            }

            try {
                var filePath = "../mock/getApprovedLeaveRequests.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                if (JSONobj) {
                    callback && callback(null, JSONobj);
                }
                else {
                    callback(JSONobj);
                }
            }
            finally {}

        },
        delay: 200
    });

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

    var myTimer = Timer.setTimeout({
        task: function() {
            if (!callback && request) {
                callback = request;
                request = null;
            }

            try {
                var filePath = "../mock/getWaitingLeaveRequests.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                if (JSONobj) {
                    callback && callback(null, JSONobj);
                }
                else {
                    callback(JSONobj);
                }
            }
            finally {}
        },
        delay: 200
    });

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


    var myTimer = Timer.setTimeout({
        task: function() {
            if (!callback && request) {
                callback = request;
                request = null;
            }

            try {
                var filePath = "../mock/getRejectedLeaveRequests.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                if (JSONobj) {
                    callback && callback(null, JSONobj);
                }
                else {
                    callback(JSONobj);
                }
            }
            finally {}
        },
        delay: 200
    });

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

    var myTimer = Timer.setTimeout({
        task: function() {
            if (!callback && request) {
                callback = request;
                request = null;
            }

            try {
                var filePath = "../mock/getLeaveRequestsChart.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                if (JSONobj) {
                    callback && callback(null, JSONobj);
                }
                else {
                    callback(JSONobj);
                }
            }
            finally {}

        },
        delay: 200
    });


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
