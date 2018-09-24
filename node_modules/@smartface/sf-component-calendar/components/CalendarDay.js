const extend = require('js-base/core/extend');
const CalendarDayDesign = require('library/CalendarDay');

const CalendarDay = extend(CalendarDayDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || {});
		this.pageName = pageName;
		
		this.children.dayNum.onTouch = (e) => {
			let timeout;
			let isLongPress = false;
			
			this.onPress && this.onPress.call(this, e);
			
			timeout = setTimeout(() => {
				isLongPress = true;
				isLongPress && this.onLongPress && this.onLongPress.call(this, e);
			}, 300);

			this.children.dayNum.onTouchEnded = () => {
				clearTimeout(timeout);
				this.children.dayNum.onTouchEnded = function(){};
				// !isLongPress && this.onPress && this.onPress.call(this, e);
				isLongPress = false;
			};
		};
	},
	function (proto) {
		proto.setDay = function(data){
			this.children.dayNum.text = data.localeDay;
			this.children.dayNum.dispatch({
				type: "updateDayType",
				data: data
			});
		};
		
		proto.activate = function(){
			this.dispatch({
				type: "pushClassNames",
				classNames: ".calendar.day-selected"
			});
			this.children.dayNum.dispatch({
				type: "pushClassNames",
				classNames: ".calendar.day_label-rangeSelected"
			});
		}
		
		proto.select = function(){
			this.children.dayNum.dispatch({
				type: "daySelected"
			});
		};
		
		proto.clearSelected = function(){
		};
	}
);

module && (module.exports = CalendarDay);
