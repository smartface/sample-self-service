/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ListItemSwitchDesign = require('library/ListItemSwitch');

const ListItemSwitch = extend(ListItemSwitchDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ListItemSwitchDesign.defaults );
		this.pageName = pageName;
		
		this.setText = function (text) {
			this.children.titleSwitch.text = text.toString();
		}
		
		Object.defineProperty(this, 'toggle', {
			get: function() {
				return this.children.switchItem.toggle;
			}.bind(this),
			set: function(value) {
				this.children.switchItem.toggle = !!value;
			}.bind(this)
		});
		
		Object.defineProperty(this, 'onToggleChanged', {
			get: function() {
				return this.children.switchItem.onToggleChanged;
			}.bind(this),
			set: function(value) {
				this.children.switchItem.onToggleChanged = value;
			}.bind(this)
		});
	}
);

module && (module.exports = ListItemSwitch);

