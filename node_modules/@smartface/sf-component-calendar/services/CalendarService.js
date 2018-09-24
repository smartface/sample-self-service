"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createService;

var _DateWrapper = _interopRequireDefault(require("./DateWrapper"));

var _DateWrapperHijri = _interopRequireDefault(require("./DateWrapperHijri"));

var _SpecialDaysService = _interopRequireDefault(require("./SpecialDaysService"));

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/ar-sa");

var _momentHijri = _interopRequireDefault(require("moment-hijri"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// momentHijri().format('iYYYY/iM/iD');
// moment.locale(["en", "ar-sa", "ar", "tr"]);
// momentHijri.locale("en");

/**
 * Creates a service by specified parameters
 * 
 * @param {string} lang - Calendar language
 * @param {string} type - Calendar type
 * @param {Object} specialDays - Special days data
 * 
 * @returns {Object}
 */
function createService(_ref) {
  var _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? "en" : _ref$lang,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "gregorian" : _ref$type,
      _ref$specialDays = _ref.specialDays,
      specialDays = _ref$specialDays === void 0 ? {} : _ref$specialDays;
  var service;
  var current;
  service = _DateWrapper.default;
  current = _moment.default;

  switch (type) {
    case 'hijri':
      service = _DateWrapperHijri.default;
      current = _momentHijri.default;
      break;
  }

  current.locale(lang);
  current.updateLocale(lang, {
    week: {
      dow: 0,
      doy: 6
    }
  });
  var specialDaysService = (0, _SpecialDaysService.default)(specialDays);
  return {
    /**
     * Returns current calendar month data
     */
    getCalendarMonth: getCalendarMonth.bind(null, current, service, function (args) {
      args.lang = lang;
      args.calendar = type;
      return specialDaysService.getSpecialDay(args);
    }),

    /**
     * Returns current month data
     */
    getMonth: getMonth.bind(null, current, service)
  };
}
/**
 * Returns current month data
 * 
 * @private
 * @returns {Object}
 */


function getMonth(moment, service, dt) {
  var dateService = new service(moment, dt);
  return {
    longName: dateService.monthLong(),
    shortName: dateService.monthShort(),
    daysCount: dateService.daysCount(),
    startDayOfMonth: dateService.startDayOfMonth()
  };
}
/**
 * Returns current calendar month data
 * 
 * @private
 * @returns {Object}
 */


function getCalendarMonth(moment, service, specialDaysService, dt) {
  var currentMonth = new service(moment, dt);
  var prevMonth = currentMonth.prevMonth();
  var nextMonth = currentMonth.nextMonth();
  var days = [];
  var daysCount = currentMonth.daysCount();
  var startDay = currentMonth.startDayOfMonth() - 1;
  var startNext = daysCount + startDay; // 31 -> 1

  var prev = prevMonth.daysCount() - startDay;
  var next = 1;
  var row = [];
  days.push(row);
  var maxCol = 7;
  var maxRow = 6;
  var cellCount = maxRow * maxCol;
  var localeDays = [];

  for (var i = 1; i <= cellCount; i++) {
    var day = void 0;

    if (i <= startDay) {
      day = {
        day: ++prev,
        month: 'previous'
      };
      day.specialDay = specialDaysService(_objectSpread({}, prevMonth.fromDay(day.day).toNormalizedObject()));
      day.localeDay = prevMonth.localeDate().setDay(day.day).getDate().day;
    } else if (i > startNext) {
      day = {
        day: next++,
        month: 'next'
      };
      day.specialDay = specialDaysService(_objectSpread({}, nextMonth.fromDay(day.day).toNormalizedObject()));
      day.localeDay = nextMonth.localeDate().setDay(day.day).getDate().day;
    } else {
      day = {
        day: i - startDay,
        month: 'current'
      };
      day.specialDay = specialDaysService(_objectSpread({}, currentMonth.fromDay(day.day).toNormalizedObject()));
      day.localeDay = currentMonth.localeDate().setDay(day.day).getDate().day;
    }

    row.push(day);

    if (row.length === 1 || row.length === 7) {
      day.isWeekend = true;
    }

    if (i > 0 && i % 7 == 0 && i !== cellCount) {
      row = [];
      days.push(row);
    }
  }

  return {
    longName: currentMonth.monthLong(),
    shortName: currentMonth.monthShort(),
    daysCount: currentMonth.daysCount(),
    startDayOfMonth: currentMonth.startDayOfMonth(),
    daysLong: currentMonth.weekdaysLong(),
    daysShort: currentMonth.weekdaysShort(),
    daysMin: currentMonth.weekdaysMin(),
    days: days,
    date: currentMonth.toObject(),
    localeDate: currentMonth.localeDate().getDate(),
    normalizedDate: currentMonth.toNormalizedObject(),
    previousMonth: {
      longName: prevMonth.monthLong(),
      shortName: prevMonth.monthShort(),
      daysCount: prevMonth.daysCount(),
      date: prevMonth.toObject(),
      normalizedDate: prevMonth.toNormalizedObject(),
      localeDate: prevMonth.localeDate().getDate()
    },
    nextMonth: {
      longName: nextMonth.monthLong(),
      shortName: nextMonth.monthShort(),
      daysCount: nextMonth.daysCount(),
      date: nextMonth.toObject(),
      normalizedDate: nextMonth.toNormalizedObject(),
      localeDate: nextMonth.localeDate().getDate()
    }
  };
}