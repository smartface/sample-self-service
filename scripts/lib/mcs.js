const MCS = require('sf-extension-mcs');
var options = {
	'backendId': '2e83a14b-f836-4f28-a093-5f85ee7a5a1b', //required
	'baseUrl': 'https://smartface-mobilebel.mobileenv.em2.oraclecloud.com', //required
	'androidApplicationKey': 'e455b4a9-486b-4fe2-a64e-cef615d9a247', //required only for analytics & events
	'iOSApplicationKey': '9e9f2d61-9669-43aa-ae4e-56c340167d19', //required only for analytics & events
	'anonymousKey': 'TU9CSUxFQkVMX1NNQVJURkFDRV9NT0JJTEVfQU5PTllNT1VTX0FQUElEOmZzOXEzakltbm9iX2hw' //required only to perform operations without logging in first
};
var mcs = new MCS(options);

module.exports = exports = mcs;