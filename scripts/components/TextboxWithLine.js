/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const getCombinedStyle = require("library/styler-builder").getCombinedStyle;
const mapProperties = require("../lib/map-properties");
const TextboxWithLineDesign = require('library/TextboxWithLine');

const TextboxWithLine = extend(TextboxWithLineDesign)(
	//constructor
	function(_super, props, pageName) {
		// initalizes super class for this scope
		_super(this, props || TextboxWithLineDesign.defaults);
		this.pageName = pageName;

		this.checkIsInputOk = function(isOk) {
			if (isOk(this.innerTextbox.text)) {
				Object.assign(this.textboxInfo, getCombinedStyle(".label-textboxWithLine.normal", {}));
			}
			else {
				Object.assign(this.textboxInfo, getCombinedStyle(".label-textboxWithLine.error", {}));
			}
		};

		mapProperties(this, this.innerTextbox, ["text", "hint", "onActionButtonPress",
			"hideKeyboard", "showKeyboard", "keyboardType", "textAlignment",
			"isPassword", "actionKeyType", "requestFocus", "removeFocus"
		]);

	}
);

module && (module.exports = TextboxWithLine);
