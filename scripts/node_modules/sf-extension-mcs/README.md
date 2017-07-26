# MCS Extension from Smartface
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/smartface/sf-extension-spriteview/master/LICENSE)

An extension to Oracle MCS Connection with Smartface Native Framework.


## Installation
MCS Extension can be installed via npm easily from our public npm repository. The installation is pretty easy via Smartface Cloud IDE.

- Open terminal
- `(cd ~/workspace/scripts && npm i -S sf-extension-mcs)`
- Finally require the extension as: `require("sf-extension-mcs")`

## How to use

1) Init your MCS config

```javascript
const MCS = require('sf-extension-mcs');
var options = {
	'backendId': 'YOUR BACKEND ID', //required
	'baseUrl': 'YOUR BASE URL', //required
	'androidApplicationKey': 'YOUR ANDROID APP KEY', //required only for analytics & events
	'iOSApplicationKey': 'YOUR IOS APP KEY', //required only for analytics & events
	'anonymousKey': 'YOUR BASIC AUTHENTICATION ANONYMOUS KEY' //required only to perform operations without logging in first
};
var mcs = new MCS(options);
```

2) Login to MCS (Example)
```javascript
mcs.login({
	'username': 'YOUR USER NAME',
	'password': 'YOUR PASSWORD'
},

function(err, result) {

	loadingView.visible = false;

	if (err) {
		return alert("LOGIN FAILED.  " + err);
	}

	alert("LOGIN SUCCESS.  " + result);	

});
```
3) Send Basic Analytic Event (Example)
```javascript
var optionsAnalytic = {
	'deviceID': '112233', //required
	'sessionID': '112233', //required
	'eventName': 'sendBasicEvent'
};

mcs.sendBasicEvent(optionsAnalytic, function(err, result) {

	if (err) {
		return alert("sendBasicEvent FAILED.  " + err);
	}

	alert("sendBasicEvent SUCC.  " + result.toString());

});
```

## API Documentation
Full api documentation is in [api.md](./api.md)

## Need Help?

Please [submit an issue](https://github.com/msmete/sf-extension-mcs/issues) on GitHub and provide information about your problem.

## Support & Documentation & Useful Links
- [Guides](https://developer.smartface.io/)
- [API Docs](http://ref.smartface.io/)
- [Smartface Cloud Dashboard](https://cloud.smartface.io)

## Code of Conduct
We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.
Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](./LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.
