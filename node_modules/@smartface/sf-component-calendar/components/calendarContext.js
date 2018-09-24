const StyleContext = require("@smartface/contx/lib/styling/StyleContext");
const getOneProp = require("@smartface/contx/lib/smartface/sfCorePropFactory").default;
const pageContext = require("@smartface/contx/lib/smartface/pageContext");
const fromSFComponent = require("@smartface/contx/lib/smartface/fromSFComponent").default;
const INIT_CONTEXT_ACTION_TYPE = require("../services/Context").INIT_CONTEXT_ACTION_TYPE;
const System = require('sf-core/device/system');
const styler = require("@smartface/styler/lib/styler");

function raiseTargetNotfound(target){
	return function (message = "Component cannot be found.") {
		throw new Error(`[${target}] ${message}`);
	};
}

function removeSelection(context, state) {
	if(!state.selectedDay)
		return;
	
	context
		.find(state.selectedDay, {removeClassName: raiseTargetNotfound(state.selectedDay)})
		.removeClassName(".calendar.day_label-selected");
	delete state.selectedDay;
}

function resetDays(actor) {
	// days.forEach(function(name) {
		if(actor.hasClassName(".calendar.day_label")) {
			actor.resetClassNames([".calendar.day_label"]);
		} else if(actor.hasClassName(".calendar.day")){
			actor.resetClassNames([".calendar.day"]);
		}
	// });
}

function deselectDays(actor) {
	// days.forEach(function(name) {
		if(actor.hasClassName(".calendar.day_label")) {
			actor.removeClassName([".calendar.day_label-selected", ".calendar.day_label-rangeSelected"]);
		} else if(actor.hasClassName(".calendar.day")){
			actor.removeClassName([".calendar.day-selected"]);
		}
	// });
}

// reducer for context's components
function reducer(context, action, target, state) {
	const newState = Object.assign({}, state);
	let actor;
	
	switch(action.type) {
		case INIT_CONTEXT_ACTION_TYPE:
			newState.days = context.reduce((acc, actor, name) => {
				if(name.indexOf("_weekDay") > 0)
					acc.push(name);
				return acc;
			}, []);

			return newState;
		case "resetDays":
			context.map(resetDays);
			
			return newState;
		case "deselectDays":
			context.map(deselectDays);
			
			return newState;
		case "daySelected":
			const selected = context.find(newState.selectedDay);
			
			if(selected){
				removeSelection(context, newState);
			}

			actor = context.find(target, {pushClassNames: raiseTargetNotfound(target)});
			actor.pushClassNames(".calendar.day_label-selected");
			newState.selectedDay = target;
			
			return newState;
		case "clearSelectedDay":
			removeSelection(context, newState);
			return newState;
		case "changeMonth":
			removeSelection(context, newState);
			return newState;
		case "changeCalendar":
		  context.map(function(actor){
		    if(!actor || actor.name === undefined)
		    	raiseTargetNotfound(target);

		    const className = actor.getInitialClassName();
		    
		    actor.resetClassNames([className,
		    	className+"-lang_"+action.lang, 
		    	"#"+actor.name, 
		    	"#"+actor.name+"-lang_"+action.lang,
		    	"#"+actor.name+"-os_"+System.OS
	    	]);
		    // actor.pushClassName("#"+actor.name+"-os_"+System.OS);
		  });
		  
		  return newState;
		case "updateDayType":
			actor = context.find(target);
			const data = action.data;
			
			if(data.isWeekend) {
				actor.pushClassNames(".calendar.day_label-weekend");
			}

			if(Array.isArray(data.specialDay) && data.specialDay.length > 0) {
				actor.pushClassNames(".calendar.day_label-specialDay");
			}

			if(data.month != "current") {
				actor.pushClassNames(".calendar.day_label-deactiveDays");
			}
			
			return newState;
	}

	return state;
}

/*function classNameMap(name) {
	const namePattern = /week[0-9]+_weekDay[0-9]+/
	const rowPattern = new RegExp("week[0-9]+");
	const dayNamesPattern = new RegExp("dayName_[0-9]+");
	const linePattern = new RegExp("_line[0-9]+");

	if(namePattern.test(name)) {
		return '.calendar.day';
	} else if(rowPattern.test(name)) {
		return '.calendar.weekRow';
	} else if(dayNamesPattern.test(name)) {
		return ".calendar.header_dayNames_dayName.weekday";
	} else if(linePattern.test(name)) {
		return ".calendar_line";
	}

	switch(name) {
		case 'calendar':
			return ".calendar-self";
		case 'calendar_navbar':
			return ".calendar.header .calendar.header_navbar";
		// case 'calendar_navbar_prevMonth':
		// case 'calendar_navbar_nextMonth':
			// return ".calendar.header_navbar_arrow";
		// case 'calendar_navbar_monthLabel':
		// 	return ".calendar.header_navbar_monthLabel";
		// case 'calendar_calendarYear_yearLabel':
		// 	return ".calendar_calendarYear_yearLabel";
		// case 'calendar_body':
		// 	return ".calendar.body";
		// case 'calendar_calendarDays':
		// 	return ".calendar.header_dayNames";
	}

	return ".calendar";
}*/

function createContext(component, name="calendar", styles={}) {
	let context = pageContext(component, name, reducer);
	context(styler(styles), reducer);
	
	return function setStyle(newStyles) {
		try {
			// injects a new styling to the context
			context(styler(styles, newStyles), reducer);
		} catch(e) {
			alert(e.message);
		}
	};
}

module.exports = createContext;
