const mcs = require("../lib/mcs");
const Http = require("sf-core/net/http");
const getImage = require("../lib/getImage");

exports.deleteApprovedLeaveRequest = deleteApprovedLeaveRequest;
exports.deleteWaitingLeaveRequest = deleteWaitingLeaveRequest;
exports.deleteRejectedLeaveRequest = deleteRejectedLeaveRequest;
exports.getPendingLeaveApprovals = getPendingLeaveApprovals;
exports.getApprovedLeaveApprovals = getApprovedLeaveApprovals;
exports.getApprovedLeaveRequests = getApprovedLeaveRequests;
exports.getWaitingLeaveRequests = getWaitingLeaveRequests;
exports.getRejectedLeaveRequests = getRejectedLeaveRequests;



function deleteApprovedLeaveRequest(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "approvedleaverequests"
    }), {
        method: "DELETE"
    });
    if (request)
        requestOptions.body = JSON.stringify(request);


    Http.request(requestOptions,
        function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    );
}

function deleteWaitingLeaveRequest(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "waitingleaverequests"
    }), {
        method: "DELETE"
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions,
        function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    );
}

function deleteRejectedLeaveRequest(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "rejectedleaverequest"
    }), {
        method: "DELETE"
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions,
        function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    );
}

function getPendingLeaveApprovals(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "pendingleaveapprovals"
    }), {
        method: "GET"
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions,
        function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
                responseBody.forEach(function(item) {
                    item.image = getImage(item.image);
                });
            }
            finally {}
            callback && callback(null, responseBody);
        },
        function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    );
}

function getApprovedLeaveApprovals(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "approvedleaveapprovals"
    }), {
        method: "GET"
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions,
        function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
                responseBody.forEach(function(item) {
                    item.image = getImage(item.image);
                });
            }
            finally {}
            callback && callback(null, responseBody);
        },
        function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    );
}

function getApprovedLeaveRequests(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "approvedleaverequests"
    }), {
        method: "GET"
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions,
        function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    );
}

function getWaitingLeaveRequests(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "waitingleaverequests"
    }), {
        method: "GET"
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions,
        function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    );
}

function getRejectedLeaveRequests(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "rejectedleaverequest"
    }), {
        method: "GET"
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions,
        function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    );
}
