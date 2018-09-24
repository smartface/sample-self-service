"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromSFComponent = fromSFComponent;
exports.makeStylable = makeStylable;
exports.createStyleContext = createStyleContext;

var _Context = _interopRequireWildcard(require("./Context"));

var _merge = _interopRequireDefault(require("@smartface/styler/lib/utils/merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function hooks(hooksList) {
  return function hookMaybe(hook) {
    return hooksList ? hooksList(hook) : null; // ? hooksList[hook] : elseValue;
  };
}
/**
 * Create styleContext tree from a SF Component and flat component tree to create actors
 * 
 * @param {Object} component - A sf-core component
 * @param {string} name - component name
 * @param {function} initialClassNameMap - classNames mapping with specified component and children
 * @param {?function} hookList - callback function to capture context's hooks
 * 
 * @return {function} - context helper
 */


function fromSFComponent(component, name, initialClassNameMap) {
  var hooksList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var flatted = {};

  function collect(component, name, initialClassNameMap) {
    var newComp = makeStylable(component, initialClassNameMap(name), name, hooks(hooksList));
    flat(name, newComp);
    component.children && Object.keys(component.children).forEach(function (child) {
      collect(component.children[child], name + "_" + child, initialClassNameMap);
    });
  }

  function flat(name, comp) {
    flatted[name] = comp;
  }

  collect(component, name, initialClassNameMap);
  return createStyleContext(flatted, hooks(hooksList));
}
/**
 * Creates context from a children hash (not tested)
 * 
 * 
 */
// export function fromObject(children, maker, mapper){
//   return Object.keys(children).reduce((acc, child) => {
//     acc[child] = maker(children[child], child, mapper);
//     return acc;
//   }, {});
// }

/**
 * Creates context from an array
 *
 */
// export function fromArray(children, maker, mapper){
//   return children.map((child) => {
//     return maker(child, mapper);
//   });
// }

/**
 * Styleable Actor HOC. Decorates specifeid component and return an actor component
 * 
 * @param {object} component - A component to decorate
 * @param {string} className - initial className for actor
 * @param {function} hooks - context's hooks dispatcher
 * 
 * @returns {Object} - A Stylable Actor
 */


function makeStylable(component, className, name, hooks) {
  /**
   * Styable actor
   * @class
   */
  return new (
  /*#__PURE__*/
  function () {
    function Stylable() {
      _classCallCheck(this, Stylable);

      this.name = name;
      this.initialClassName = className;
      this.classNames = [className];
      this.component = component;
      this.styles = {};
      this.isUgly = true;
    }
    /**
     * Sets styles
     *
     * @param {object} styles - a style object
     */


    _createClass(Stylable, [{
      key: "setStyles",
      value: function setStyles(style) {
        var _this = this;

        var reduceDiffStyleHook = hooks("reduceDiffStyleHook");
        var diffReducer = reduceDiffStyleHook ? reduceDiffStyleHook(this.styles, style) : function (acc, key) {
          if (_this.styles[key] !== undefined) {
            if (_this.styles[key] !== style[key]) {
              acc[key] = style[key];
            } else {
              acc[key] = style[key];
            }
          }

          return acc;
        };
        var diff = Object.keys(style).reduce(diffReducer, {});
        /* global.benchmarkLog && 
           global.benchmarkLog(Object.keys(diff));*/

        var beforeHook = hooks("beforeStyleDiffAssign");
        beforeHook && (diff = beforeHook(diff));
        Object.keys(diff).length && Object.assign(this.component, diff);
        var afterHook = hooks("afterStyleDiffAssign");
        afterHook && (style = afterHook(style));
        this.styles = style;
      }
    }, {
      key: "setContext",
      value: function setContext(context) {
        var _this2 = this;

        this.context = context;
        component.setContextDispatcher && component.setContextDispatcher(function (action) {
          _this2.context.dispatch(action, _this2.name);
        });
      }
    }, {
      key: "getStyles",
      value: function getStyles() {
        return Object.assign({}, this.styles);
      }
    }, {
      key: "getInitialClassName",
      value: function getInitialClassName() {
        return this.initialClassName;
      }
    }, {
      key: "getClassName",
      value: function getClassName() {
        return this.classNames.join(" ");
      }
    }, {
      key: "classNamesCount",
      value: function classNamesCount() {
        return this.classNames.length;
      }
    }, {
      key: "removeClassName",
      value: function removeClassName(className) {
        if (this.hasClassName(className)) {
          this.isUgly = true;
          this.classNames = this.classNames.filter(function (cname) {
            return cname !== className;
          });
        }

        return this.getClassName();
      }
    }, {
      key: "resetClassNames",
      value: function resetClassNames() {
        var classNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this.classNames = classNames.slice() || [this.getInitialClassName()];
        this.isUgly = true;
      }
    }, {
      key: "hasClassName",
      value: function hasClassName(className) {
        return this.classNames.some(function (cname) {
          return cname === className;
        });
      }
    }, {
      key: "pushClassName",
      value: function pushClassName(className) {
        if (!this.hasClassName(className)) {
          this.classNames.push(className);
          this.isUgly = true;
        }

        return this.getClassName();
      }
    }, {
      key: "addClassName",
      value: function addClassName(className, index) {
        if (!this.hasClassName(className)) {
          this.classNames.splice(index, 1, className);
          this.isUgly = true;
        }

        return this.getClassName();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.component = null;
        this.context = null;
        this.styles = null;
        this.component.setContextDispatcher && this.component.setContextDispatcher(null);
      }
    }]);

    return Stylable;
  }())();
}
/**
 * Style Context. Returns context composer
 * 
 * @param {Array.<Object>} actors - Actors List
 * @param {function} hooks - Hooks callback
 * @returns {function} - Context Composer Function
 */


function createStyleContext(actors, hooks) {
  var context;
  /**
   * Composes a context.
   * 
   * @param {function) styling - Styling function from styler.
   * @param {function} reducer - Reducer function to run actions
   */

  return function composeContext(styling, reducer) {
    var latestState = context ? context.getState() : {};
    context && context.dispose();
    context = (0, _Context.default)(actors, function contextUpdater(context, action, target) {
      var state = context.getState(),
          newState = state;

      if (target || action.type == _Context.INIT_CONTEXT_ACTION_TYPE) {
        newState = reducer(state, context.actors, action, target); // state is not changed

        if (newState === state) {
          // return current state instance
          return state;
        }
      }

      Object.keys(context.actors).forEach(function setInitialStyles(name) {
        var comp = context.actors[name];

        if (comp.isUgly === true || action.type === _Context.INIT_CONTEXT_ACTION_TYPE) {
          var className = context.actors[name].getClassName();
          var beforeHook = hooks("beforeAssignComponentStyles");
          beforeHook && (className = beforeHook(name, className));
          var styles = styling(className)();
          context.actors[name].setStyles(styles);
          comp.isUgly = false;
        }
      });
      latestState = newState;
      return newState;
    }, latestState);
    Object.keys(context.actors).forEach(function assignContext(name) {
      context.actors[name].isUgly = true;
      context.actors[name].setContext(context);
    });
    return context;
  };
}