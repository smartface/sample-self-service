/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Color = require("sf-core/ui/color");
const FlexLayout = require('sf-core/ui/flexlayout');

const DotIndicatorDesign = require('library/DotIndicator');
const getCombinedStyle = require("library/styler-builder").getCombinedStyle;
const ItemStyle = getCombinedStyle(".flexLayout .flexLayout-dotIndicator-item.active", {});

const PREFIX = "dot";
var activeSettings = getCombinedStyle(".flexLayout-dotIndicator-item-active", {});
var inactiveSettings = getCombinedStyle(".flexLayout-dotIndicator-item-inactive", {});

const DotIndicator = extend(DotIndicatorDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || DotIndicatorDesign.defaults );
		this.pageName = pageName;
		
		var _currentIndex = 0;
		this.lastActiveIndex = 0;
		var _size = 3;
		var _activeColor = null;
		var _inactiveColor = null;
		
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
					
					this.lastActiveIndex = _currentIndex;
					_currentIndex = value;
					invalidate(this);
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
					setSize(this, _size);
				}
			},
			'activeColor': {
				get: function() {
					return _activeColor;
				},
				set: function(value) {
					_activeColor = value;
					invalidate(this);
				}
			},
			'inactiveColor': {
				get: function() {
					return _inactiveColor;
				},
				set: function(value) {
					_inactiveColor = value;
					invalidate(this);
				}
			}
		});
	}
);

function invalidate(indicator) {
	if (indicator.activeColor !== null) {
		activeSettings.backgroundColor = indicator.activeColor;
	}
	if (indicator.inactiveColor !== null) {
		inactiveSettings.backgroundColor = indicator.inactiveColor;
	}
	
	Object.assign(indicator.children[PREFIX + indicator.lastActiveIndex], inactiveSettings);
	Object.assign(indicator.children[PREFIX + indicator.currentIndex], activeSettings);
}

function setSize(indicator, newSize) {
	indicator.width = newSize * 14;
	indicator.applyLayout();
	
	indicator.removeAll();
	indicator.children = {};
	for (var i = 0; i < newSize; i++) {
		indicator.children[PREFIX+i] = new FlexLayout(ItemStyle);
		indicator.addChild(indicator.children[PREFIX+i]);
	}
	
	invalidate(indicator);
}

module && (module.exports = DotIndicator);
