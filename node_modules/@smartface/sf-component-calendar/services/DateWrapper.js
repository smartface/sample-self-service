"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function notValidDateThrowanError(date, strDate) {
  if (!date.isValid()) {
    throw new Error("[".concat(strDate, "] Specified date is not valid."));
  }
}

var DateService =
/*#__PURE__*/
function () {
  function DateService(moment, date) {
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "DD-MM-YYYY";

    _classCallCheck(this, DateService);

    this._moment = moment;

    if (moment.isMoment(date)) {
      this._date = date.clone();
    } else {
      if (_instanceof(date, Object)) {
        // date.month--;
        date.day = date.day || 1;
        date = "".concat(date.day, "-").concat(date.month, "-").concat(date.year);
      }

      if (date) {
        this._date = moment(date, format);
        notValidDateThrowanError(this._date, date);
      } else {
        this._date = moment();
      }
    }
  }

  _createClass(DateService, [{
    key: "weekOfYear",
    value: function weekOfYear() {
      return this._moment.week();
    }
  }, {
    key: "clone",
    value: function clone() {
      return this._moment.clone();
    }
  }, {
    key: "localeDate",
    value: function localeDate() {
      var now = this._date.clone();

      var localeDate = {
        day: now.format("D"),
        month: now.format("M"),
        year: now.format("YYYY")
      };
      return {
        setDay: function setDay(day) {
          localeDate.day = now.month(0).date(day).format("D");
          return this;
        },
        setMonth: function setMonth(month) {
          localeDate.month = now.month(month).format("M");
          return this;
        },
        setYear: function setYear(year) {
          localeDate.year = now.year(year).format("YYYY");
          return this;
        },
        getDate: function getDate() {
          return _objectSpread({}, localeDate);
        }
      }; // return this._date.format("D-M-YYYY").toObject();
    }
  }, {
    key: "nextDay",
    value: function nextDay() {
      var newdate = this._date.clone();

      newdate.add(1, 'day');
      return new DateService(this._moment, newdate);
    }
  }, {
    key: "prevDay",
    value: function prevDay() {
      var newdate = this._date.clone();

      newdate.subtract(1, 'day');
      return new DateService(this._moment, newdate);
    }
  }, {
    key: "fromDay",
    value: function fromDay(day) {
      var newdate = this._date.clone().date(day);

      return new DateService(this._moment, newdate);
    }
  }, {
    key: "month",
    value: function month() {
      // 	date !== undefined 
      // 	  ? date.month(month)
      // 	  : month 
      // ? 
      return this._date.toObject().months; // month ? moment().month(month) : moment.toObject().months;
      // : date.toObject().monts;
    }
  }, {
    key: "year",
    value: function year() {
      return this._date().year();
    }
  }, {
    key: "day",
    value: function day() {
      return this._date().day();
    }
  }, {
    key: "startDayOfMonth",
    value: function startDayOfMonth() {
      return this._date.clone().date(1).weekday() + 1;
    }
  }, {
    key: "monthsShort",
    value: function monthsShort() {
      return this._moment.monthsShort();
    }
  }, {
    key: "monthShort",
    value: function monthShort() {
      return this._moment.monthsShort(this._date.month());
    }
  }, {
    key: "monthLong",
    value: function monthLong() {
      return this._moment.months(this._date.month());
    }
  }, {
    key: "monthsLong",
    value: function monthsLong() {
      return this._moment.months();
    }
  }, {
    key: "weekdaysShort",
    value: function weekdaysShort() {
      return this._moment.weekdaysShort();
    }
  }, {
    key: "weekdaysMin",
    value: function weekdaysMin() {
      return this._moment.weekdaysMin();
    }
  }, {
    key: "weekdaysLong",
    value: function weekdaysLong() {
      return this._moment.weekdays();
    }
  }, {
    key: "daysCount",
    value: function daysCount() {
      return this._date.daysInMonth();
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      var newdate = this._date.clone();

      newdate.add(1, 'month');
      return new DateService(this._moment, newdate);
    }
  }, {
    key: "prevMonth",
    value: function prevMonth() {
      var newdate = this._date.clone();

      newdate.subtract(1, 'month');
      return new DateService(this._moment, newdate);
    }
  }, {
    key: "prevYear",
    value: function prevYear() {}
  }, {
    key: "nextYear",
    value: function nextYear() {}
  }, {
    key: "dateLang",
    value: function dateLang() {
      var sh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "en";

      this._moment.updateLocale(sh);
    }
  }, {
    key: "toObject",
    value: function toObject() {
      var dateObject = this._date.toObject();

      return {
        year: dateObject.years,
        day: dateObject.date,
        month: ++dateObject.months
      };
    }
  }, {
    key: "toNormalizedObject",
    value: function toNormalizedObject() {
      var dateObject = this._date.toObject();

      return {
        year: dateObject.years,
        day: dateObject.date,
        month: ++dateObject.months
      };
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._date = null;
      this._moment = null;
    }
  }]);

  return DateService;
}();

exports.default = DateService;