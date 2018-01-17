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
            console.log("parse json " + JSON.stringify(parseJSON));

            console.log(parseJSON[0].username + "  " + parseJSON[0].password)

            if (username === parseJSON[0].username && password === parseJSON[0].password) {
                callback && callback(null, responseBody);
            }
            else {
                ///alert("password or username uncredintial");
                callback(responseBody);
            }

        },
        onError: function(err) {
            callback(err);
        }
    })



}
