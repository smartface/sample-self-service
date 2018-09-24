"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInitAction = createInitAction;
exports.default = createContext;
exports.INIT_CONTEXT_ACTION_TYPE = void 0;

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __id = 0;

function addMiddleware(mware) {}

var INIT_CONTEXT_ACTION_TYPE = '__INIT_CONTEXT__';
exports.INIT_CONTEXT_ACTION_TYPE = INIT_CONTEXT_ACTION_TYPE;

function createInitAction() {
  return {
    type: INIT_CONTEXT_ACTION_TYPE
  };
}

function createContext(actors, updater, middlewares) {
  var initialState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var Context =
  /*#__PURE__*/
  function () {
    function Context() {
      var _this = this;

      _classCallCheck(this, Context);

      Object.defineProperty(this, "setState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value(state) {
          _this.state = Object.assign({}, state);
        }
      });
      Object.defineProperty(this, "getState", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          return Object.assign({}, _this.state);
        }
      });
      Object.defineProperty(this, "dispatch", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value(action, target) {
          _this.setState(updater(_this, action, target));
        }
      });
      Object.defineProperty(this, "dispose", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          _this.state = null;
          _this.actors = null;
        }
      });
      // this.__id            = __id++;
      // this._subscribers    = new WeakMap();
      // this._subscriberKeys = new Map();
      this.actors = Object.assign({}, actors);
      this.state = Object.assign({}, initialState); // this.dispatch = this.dispatch.bind(this);
      // this.setState = this.setState.bind(this);
      // this.getState = tbbbbbbbbbhis.getState.bind(this);

      this.dispatch({
        type: INIT_CONTEXT_ACTION_TYPE
      });
    }

    _createClass(Context, [{
      key: "map",
      value: function map(fn) {
        return Object.keys(this.actors).map(function (name, index) {
          return fn(actors[name], name, index);
        });
      }
    }, {
      key: "subcribe",
      value: function subcribe(fn) {}
    }]);

    return Context;
  }();

  ;
  return new Context();
}