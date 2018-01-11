/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Color = require("sf-core/ui/color");

const TopTabBarDesign = require('library/TopTabBar');
const TopTabItem = require("./TopTabItem");
const PREFIX = "tab";

const TopTabBar = extend(TopTabBarDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || TopTabBarDesign.defaults);
		this.pageName = pageName;
		
		var _items = 0;
		var _currentIndex = 0;
		var _activeTextColor = Color.create("#FFFFFF");
		var _inactiveTextColor = Color.create("#A8A9B1");
		var _activeBarColor = Color.create("#E7C355");
		
		Object.defineProperties(this, {
			'items': {
				get: function() {
					return _items;
				},
				set: function(value) {
					if (value < 0) {
						value = 0;
					}
					
					_items = value;
					setSize(this, _items.length);
				}
			},
			'currentIndex': {
				get: function() {
					return _currentIndex;
				},
				set: function(value) {
					if (typeof value !== "number") {
						throw new TypeError("currentIndex should be a number");
					}
					if (value < 0 || value > _items.length) {
						throw new Error("currentIndex is out of range");
					}
					
					_currentIndex = value;
					invalidate(this);
					typeof this.onChanged === "function" && this.onChanged(_currentIndex);
				}
			},
			'activeTextColor': {
				get: function() {
					return _activeTextColor;
				},
				set: function(value) {
					_activeTextColor = value;
					invalidate(this);
				}
			},
			'inactiveTextColor': {
				get: function() {
					return _inactiveTextColor;
				},
				set: function(value) {
					_inactiveTextColor = value;
					invalidate(this);
				}
			},
			'activeBarColor': {
				get: function() {
					return _activeBarColor;
				},
				set: function(value) {
					_activeBarColor = value;
					invalidate(this);
				}
			}
		});
	}
);

function invalidate(tabBar) {
	for (var i = 0; i < tabBar.items.length; i++) {
		var childName = PREFIX + i;
		
		tabBar.children[childName].children.tabItemTitle.text = tabBar.items[i];
		if (i === tabBar.currentIndex) { // active
			tabBar.children[childName].children.tabItemBottomLine.backgroundColor = tabBar.activeBarColor;
			tabBar.children[childName].children.tabItemBottomLine.visible = true;
			tabBar.children[childName].children.tabItemTitle.textColor = tabBar.activeTextColor;
		} else {
			tabBar.children[childName].children.tabItemBottomLine.visible = false;
			tabBar.children[childName].children.tabItemTitle.textColor = tabBar.inactiveTextColor;
		}
	}
}

function setSize(tabBar, newSize) {
	tabBar.removeAll();
	tabBar.children = {};
	for (var i = 0; i < newSize; ++i) {
		tabBar.children[PREFIX+i] = new TopTabItem({
			flexGrow: 1,
			onTouchEnded: function() {
				tabSelected(tabBar, this.index);
			}.bind({index: i})
		});
		tabBar.addChild(tabBar.children[PREFIX+i], PREFIX+i);
	}
	tabBar.applyLayout();
	invalidate(tabBar);
}

function tabSelected(tabBar, index) {
	tabBar.currentIndex = index;
}

module && (module.exports = TopTabBar);

