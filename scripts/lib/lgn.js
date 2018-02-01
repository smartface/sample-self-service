const Http = require("sf-core/net/http");



exports.lgn = lgn;

function lgn(options, callback) {
    var username = options.username;
    var password = options.password;

    var url = "https://commonsmartface.blob.core.windows.net/assetmanagement/authentication.json";
    var sessionManager = new Http();


    var request = sessionManager.requestJSON({
        url: url,
        onLoad: function(e) {
            var responseBody = e.body.toString();

            var parseJSON = JSON.parse(responseBody);

            if (username === parseJSON[0].username && password === parseJSON[0].password) {
                callback && callback(null, responseBody);
            }
            else {
                callback(responseBody);
            }

        },
        onError: function(err) {
            callback(err);
        }
    })



}
