const mcs = require("../lib/mcs");
const Http = require("sf-core/net/http");
const getImage = require("../lib/getImage");

exports.getPendingExpenseApprovals = getPendingExpenseApprovals;
exports.getApprovedExpenseApprovals = getApprovedExpenseApprovals;
exports.getExpenses = getExpenses;

function getPendingExpenseApprovals(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "pendingexpenseapprovals"
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

function getApprovedExpenseApprovals(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "approvedexpenseapprovals"
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

function getExpenses(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "expenses"
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
