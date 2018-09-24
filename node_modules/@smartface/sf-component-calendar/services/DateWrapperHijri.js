"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DateWrapper = _interopRequireDefault(require("./DateWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function notValidDateThrowanError(moment, date) {
  if (moment(date).isValid()) {
    throw new Error("Specified date is not valid.");
  }
}

var HijriDateService =
/*#__PURE__*/
function (_DateService) {
  _inherits(HijriDateService, _DateService);

  function HijriDateService(moment, date) {
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "DD-MM-YYYY";

    _classCallCheck(this, HijriDateService);

    return _possibleConstructorReturn(this, (HijriDateService.__proto__ || Object.getPrototypeOf(HijriDateService)).call(this, moment, date, format));
  }

  _createClass(HijriDateService, [{
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
    key: "month",
    value: function month() {
      return this._date.format("iM");
    }
  }, {
    key: "year",
    value: function year() {
      return this._date.format("iYYYY");
    }
  }, {
    key: "day",
    value: function day() {
      return this._date.format("iD");
    }
  }, {
    key: "localeDate",
    value: function localeDate() {
      var now = this._date.clone();

      var self = this;
      var localeDate = {
        day: now.format("iD"),
        month: now.format("iM"),
        year: now.format("iYYYY")
      };
      var moment = this._moment;
      return {
        setDay: function setDay(day) {
          localeDate.day = now.month(0).date(day).format("D");
          return this;
        },
        setMonth: function setMonth(month) {
          localeDate.month = now.month(month).format("iM");
          return this;
        },
        setYear: function setYear(year) {
          localeDate.month = now.year(year).format("iYYYY");
          return this;
        },
        getDate: function getDate() {
          return _objectSpread({}, localeDate);
        }
      }; // return this._date.format("D-M-YYYY").toObject();
    }
  }, {
    key: "startDayOfMonth",
    value: function startDayOfMonth() {
      return this._date.clone().iDate(1).weekday() + 1;
    }
  }, {
    key: "monthsShort",
    value: function monthsShort() {
      return this._date.localeData()._iMonthsShort;
    }
  }, {
    key: "monthShort",
    value: function monthShort() {
      return this._date.format("iMMM");
    }
  }, {
    key: "monthLong",
    value: function monthLong() {
      return this._date.format("iMMMM");
    }
  }, {
    key: "monthsLong",
    value: function monthsLong() {
      return this._date.localeData()._iMonths;
    }
  }, {
    key: "weekdaysShort",
    value: function weekdaysShort() {
      return this._moment.weekdaysShort();
    }
  }, {
    key: "weekdaysLong",
    value: function weekdaysLong() {
      return this._moment.weekdays();
    }
  }, {
    key: "daysCount",
    value: function daysCount() {
      return this._moment(this._date).locale("en").iDaysInMonth();
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      return new HijriDateService(this._moment, this._date.clone().add(1, 'iMonth'));
    }
  }, {
    key: "prevMonth",
    value: function prevMonth() {
      return new HijriDateService(this._moment, this._date.clone().subtract(1, 'iMonth'));
    }
  }, {
    key: "prevYear",
    value: function prevYear() {
      return new HijriDateService(this._moment, this._date.clone().subtract(1, 'iYear'));
    }
  }, {
    key: "nextYear",
    value: function nextYear() {
      return new HijriDateService(this._moment, this._date.clone().add(1, 'iYear'));
    }
  }, {
    key: "toObject",
    value: function toObject() {
      // var dateObject = this._date.toObject();
      return {
        year: this._date.iYear(),
        day: this._date.iDate(),
        month: this._date.iMonth() + 1
      };
    }
  }]);

  return HijriDateService;
}(_DateWrapper.default);

exports.default = HijriDateService;