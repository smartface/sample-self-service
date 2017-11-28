/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Color = require("sf-core/ui/color");
const FlexLayout = require('sf-core/ui/flexlayout');
const pushClassNames = require("@smartface/contx/lib/styling/action/pushClassNames")
const removeClassName = require("@smartface/contx/lib/styling/action/removeClassName")

const DotIndicatorDesign = require('library/DotIndicator');
// const getCombinedStyle = require("library/styler-builder").getCombinedStyle;
// const ItemStyle = getCombinedStyle(".flexLayout .flexLayout-dotIndicator-item.inactive", {});

const PREFIX = "dot";
// var activeSettings = getCombinedStyle(".flexLayout-dotIndicator-item.active", {});
// var inactiveSettings = getCombinedStyle(".flexLayout-dotIndicator-item.inactive", {});

const DotIndicator = extend(DotIndicatorDesign)(
	//constructor
	function(_super, props, pageName) {
		// initalizes super class for this scope
		_super(this, props || DotIndicatorDesign.defaults);
		this.pageName = pageName;

		var _currentIndex = 0;
		this.lastActiveIndex = 0;
		var _size = 3;
		var _activeColor = null;
		var _inactiveColor = null;
		this._styles = {};
		
		Object.defineProperties(this, {
			'currentIndex': {
				get: function() {
					return _currentIndex;
				},
				set: function(value) {
					if (typeof value !== "number") {
						throw new TypeError("currentIndex should be number");
					}
					if (value >= _size || value < 0) {
						throw new Error("currentIndex is out of range");
					}

					this.children[PREFIX + value].dispatch(pushClassNames(".flexLayout-dotIndicator-item.active"));
					value !== _currentIndex 
						&& this.children[PREFIX + _currentIndex].dispatch(removeClassName(".flexLayout-dotIndicator-item.active"));
					this.lastActiveIndex = _currentIndex;
					_currentIndex = value;
					updateDots.call(this);
				}
			},
			'size': {
				get: function() {
					return _size;
				},
				set: function(value) {
					if (typeof value !== "number") {
						throw new TypeError("size should be number");
					}

					_size = value;
					setSize.call(this, _size);
				}
			},
		});
	}
);

function updateDots(indicator) {
	// if (this.activeColor !== null) {
	// 	activeSettings.backgroundColor = indicator.activeColor;
	// }
	// if (indicator.inactiveColor !== null) {
	// 	inactiveSettings.backgroundColor = indicator.inactiveColor;
	// }
	
	// Object.assign(indicator.children[PREFIX + indicator.lastActiveIndex], inactiveSettings);
	// Object.assign(indicator.children[PREFIX + indicator.currentIndex], activeSettings);
}

function setSize(newSize) {
	this.removeAll();
	this.children = {};

	for (var i = 0; i < newSize; i++) {
		this.children[PREFIX+i] = new FlexLayout();
		this.addChild(this.children[PREFIX + i], PREFIX + i, ".flexLayout .flexLayout-dotIndicator-item.inactive");
	}
	
	this.currentIndex = 0;

	this.applyLayout();
}

module && (module.exports = DotIndicator);
