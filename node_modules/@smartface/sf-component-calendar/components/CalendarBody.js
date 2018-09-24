/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const CalendarBodyDesign = require('library/CalendarBody');

const CalendarBody = extend(CalendarBodyDesign)(
	//constructor
	function CalendarBody(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || {} );
		this.pageName = pageName;
	},
	function(proto){
		proto.componentDidEnter = function(dispatch){
			this.dispatch = dispatch;
			dispatch({
				type: "changeUserStyle",
				animated: true,
				userStyle: (style) => {
					style.height = null;
					style.flexGrow = 0;
					delete style.alignSelf;
					
					return style;
				}
			});
		};
	}
	
);

module && (module.exports = CalendarBody);

