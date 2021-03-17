(self["webpackChunk"] = self["webpackChunk"] || []).push([["/assets/web/js/app"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./resources/assets/web/components/AboutUs/OurHistory.js":
/*!***************************************************************!*\
  !*** ./resources/assets/web/components/AboutUs/OurHistory.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var OurHistory = function OurHistory() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "history-area ptb-100 bg-f9f9f9",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "section-title",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "sub-title",
          children: "\u0422\u04AF\u04AF\u0445\u044D\u043D \u0437\u0430\u043C\u043D\u0430\u043B"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u0442 \u0445\u044D\u0440\u044D\u0433\u0436\u0441\u044D\u043D \u041C\u0425\u0425\u0422 -\u044B\u043D \u0442\u04E9\u0441\u04E9\u043B \u0445\u04E9\u0442\u04E9\u043B\u0431\u04E9\u0440\u04AF\u04AF\u0434"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ol", {
        className: "timeline history-timeline",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
          className: "timeline-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "timeline-date",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "2000"
            }), "\u0417\u0443\u0440\u0433\u0430\u0430\u043D \u0441\u0430\u0440\u044B\u043D 20"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "dot-badge"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-7 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    children: "\u042D\u0440\u0434\u044D\u043C\u043D\u044D\u0442 \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0438\u0439 \u0442\u04E9\u0432 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u0430\u0432"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "\u042D\u0440\u0434\u044D\u043C\u043D\u044D\u0442 \u0421\u04AF\u043B\u0436\u044D\u044D\u043D\u0438\u0439 \u0442\u04E9\u0432 \u043D\u044C \u041C\u043E\u043D\u0433\u043E\u043B \u0443\u043B\u0441\u044B\u043D \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B, \u0441\u043E\u0451\u043B \u0448\u0438\u043D\u0436\u043B\u044D\u0445 \u0443\u0445\u0430\u0430\u043D\u044B \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u0443\u0443\u0434\u044B\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u04AF\u043B\u0436\u044D\u044D \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u0436, \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0438\u0439\u043D \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D \u044F\u0432\u0443\u0443\u043B\u0430\u0445 \u0437\u0430\u043C\u0430\u0430\u0440 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B, \u0441\u043E\u0451\u043B, \u0448\u0438\u043D\u0436\u043B\u044D\u0445 \u0443\u0445\u0430\u0430\u043D \u0442\u0435\u0445\u043D\u0438\u043A, \u04AF\u0439\u043B\u0434\u0432\u044D\u0440\u043B\u044D\u043B\u0438\u0439\u0433 \u043E\u0440\u0447\u0438\u043D \u04AF\u0435\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u044D\u044D\u0440 \u0445\u0430\u043D\u0433\u0430\u043D \u0441\u0443\u0440\u0433\u0430\u043B\u0442, \u04AF\u0439\u043B\u0434\u0432\u044D\u0440\u043B\u044D\u043B, \u044D\u0440\u0434\u044D\u043C \u0448\u0438\u043D\u0436\u0438\u043B\u0433\u044D\u044D\u043D\u0438\u0439 \u0430\u0436\u043B\u044B\u043D \u0447\u0430\u043D\u0430\u0440, \u04AF\u0440 \u04E9\u0433\u04E9\u04E9\u0436\u0438\u0439\u0433 \u0434\u044D\u044D\u0448\u043B\u04AF\u04AF\u043B\u044D\u0445\u044D\u0434 \u0434\u044D\u043C\u0436\u043B\u044D\u0433 \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445 \u0437\u043E\u0440\u0438\u043B\u0433\u043E\u043E\u0440 2000 \u043E\u043D\u044B 6 \u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440\u044B\u043D 20-\u043D\u044B \u04E9\u0434\u0440\u04E9\u04E9\u0441 \u044D\u0445\u043B\u044D\u043D \u0430\u043B\u0431\u0430\u043D \u0451\u0441\u043E\u043E\u0440 \u04AF\u0439\u043B \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0433\u0430\u0430 \u044D\u0445\u043B\u04AF\u04AF\u043B\u0436 \u0431\u0430\u0439\u0441\u0430\u043D."
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-5 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "image",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                    src: "/images/history/history-img1.jpg",
                    alt: "image"
                  })
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
          className: "timeline-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "timeline-date",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "2012"
            }), "\u0414\u04E9\u0440\u0432\u04E9\u043D \u0441\u0430\u0440\u044B\u043D 14"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "dot-badge"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-7 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0434\u0430\u0442\u0430 \u0431\u043E\u043B\u043E\u043D \u0441\u04AF\u0436\u043B\u044D\u044D\u043D\u0438\u0439 \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0442\u043E\u043D\u043E\u0433 \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 \u0431\u04AF\u0440\u0434\u04AF\u04AF\u043B\u044D\u0432"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0434\u0430\u0442\u0430 \u0442\u04E9\u0432 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u0430\u0445, \u044D\u0440\u0434\u044D\u043C\u043D\u044D\u0442 \u0442\u04E9\u0432\u0438\u0439\u043D \u04E9\u0440\u0433\u04E9\u0442\u0433\u04E9\u043B \u0445\u0438\u0439\u0445 \u0430\u0436\u043B\u044B\u0433 \u044D\u0445\u043B\u04AF\u04AF\u043B\u044D\u043D \u0423\u043B\u0441\u044B\u043D \u0442\u04E9\u0441\u04E9\u0432 \u0431\u043E\u043B\u043E\u043D \u0410\u0437\u0438\u0439\u043D \u0445\u04E9\u0433\u0436\u043B\u0438\u0439\u043D \u0431\u0430\u043D\u043A\u043D\u044B \u0442\u04E9\u0441\u043B\u0438\u0439\u043D \u0441\u0430\u043D\u0445\u04AF\u04AF\u0436\u0438\u043B\u0442\u044D\u044D\u0440 \u0445\u04E9\u0440\u04E9\u043D\u0433\u04E9 \u043E\u0440\u0443\u0443\u043B\u0430\u043B\u0442 \u0445\u0438\u0439\u0436 \u0441\u0435\u0440\u0432\u0435\u0440, \u0442\u043E\u043D\u043E\u0433 \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436, \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0438\u0439 \u043D\u04E9\u04E9\u0446 \u044D\u0445 \u04AF\u04AF\u0441\u0432\u044D\u0440 \u0445\u0443\u0434\u0430\u043B\u0434\u0430\u043D \u0430\u0432\u0447 \u0441\u0443\u0443\u0440\u0438\u043B\u0443\u0443\u043B\u0430\u043D \u0430\u0436\u0438\u043B\u043B\u0430\u0436 \u0431\u0430\u0439\u043D\u0430."
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-5 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "image",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                    src: "/images/history/history-img2.jpg",
                    alt: "image"
                  })
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
          className: "timeline-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "timeline-date",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "2014"
            }), "\u0422\u0430\u0432\u0430\u043D \u0441\u0430\u0440\u044B\u043D 18"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "dot-badge"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-7 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u0443\u0443\u043B\u0436 \u044D\u0445\u043B\u044D\u0432"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "2014 \u043E\u043D\u043E\u043E\u0441 \u044D\u0445\u043B\u044D\u043D \u0423\u043B\u0441\u044B\u043D \u0442\u04E9\u0441\u04E9\u0432 \u0431\u043E\u043B\u043E\u043D \u0410\u0437\u0438\u0439\u043D \u0445\u04E9\u0433\u0436\u043B\u0438\u0439\u043D \u0431\u0430\u043D\u043A\u043D\u044B \u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u043B \u0442\u04E9\u0441\u043B\u0438\u0439\u043D \u0445\u04AF\u0440\u044D\u044D\u043D\u0434 \u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u043D \u04AF\u043D\u0434\u0441\u044D\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C, \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u043D \u043C\u043E\u0434\u0443\u043B\u044C \u0445\u04AF\u043D\u0438\u0439 \u043D\u04E9\u04E9\u0446, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A \u043C\u043E\u0434\u0443\u043B\u0438\u0443\u0434\u044B\u0433 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u0443\u0443\u043B\u0436 \u044D\u0445\u043B\u044D\u0432."
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-5 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "image",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                    src: "/images/history/history-img3.jpg",
                    alt: "image"
                  })
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
          className: "timeline-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "timeline-date",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "2013"
            }), "\u0413\u0443\u0440\u0432\u0430\u043D \u0441\u0430\u0440\u044B\u043D 26"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "dot-badge"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-7 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    children: "\u201C\u0428\u0438\u043D\u044D \u0437\u0443\u0443\u043D\u044B \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u201D \u0442\u04E9\u0441\u04E9\u043B 2015-2017 \u043E\u043D\u0443\u0443\u0434\u0430\u0434 \u0445\u044D\u0440\u044D\u0433\u0436\u0438\u0432"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u043D \u04AF\u043D\u0434\u0441\u044D\u043D \u0434\u044D\u0434 \u0431\u04AF\u0442\u044D\u0446 \u0431\u0430\u0439\u0433\u0443\u043B\u0436, \u0442\u04AF\u04AF\u043D \u0434\u044D\u044D\u0440 \u0441\u0443\u0443\u0440\u0438\u043B\u0441\u0430\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D \u0441\u0443\u0440\u0430\u0445 \u043E\u0440\u0447\u043D\u044B\u0433 \u0431\u04AF\u0440\u0434\u04AF\u04AF\u043B\u044D\u043D \u0445\u04AF\u04AF\u0445\u044D\u0434 \u0431\u04AF\u0440\u0434 \u0447\u0430\u043D\u0430\u0440\u0442\u0430\u0439 \u0445\u043E\u043B\u0431\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u0433 \u0442\u044D\u0433\u0448 \u0445\u04AF\u0440\u0442\u044D\u044D\u043C\u0436\u0442\u044D\u0439 \u044D\u0437\u044D\u043C\u0448\u04AF\u04AF\u043B\u044D\u0445\u044D \u0437\u043E\u0440\u0438\u043B\u0433\u043E\u043E\u0440 \u044D\u043D\u044D\u0445\u04AF\u04AF \u0442\u04E9\u0441\u043B\u0438\u0439\u0433 \u0445\u044D\u0440\u044D\u0433\u0436\u04AF\u04AF\u043B\u0441\u044D\u043D."
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-5 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "image",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                    src: "/images/history/history-img4.jpg",
                    alt: "image"
                  })
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
          className: "timeline-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "timeline-date",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "2018"
            }), "\u0425\u043E\u0451\u0440 \u0441\u0430\u0440\u044B\u043D 16"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "dot-badge"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-7 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    children: "\u0414\u044D\u044D\u0434 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u0430 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u0443\u0443\u043B\u0436 \u044D\u0445\u043B\u044D\u0432"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "\u041C\u0430\u043D\u0430\u0439 \u0423\u043B\u0441\u044B\u043D \u0434\u044D\u044D\u0434 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u0442 2003 \u043E\u043D\u0434 \u0430\u043D\u0445 \u0428\u0423\u0422\u0418\u0421 \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u044D\u043D \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u0445 \u0431\u043E\u043B\u0441\u043D\u043E\u043E\u0440 \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u0445\u044D\u043C\u0436\u044D\u044D\u043D\u0434 \u0423\u041C\u0421-\u0438\u0439\u0433 \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u044D\u0445 \u044D\u0445\u043B\u044D\u043B \u0442\u0430\u0432\u0438\u0433\u0434\u0441\u0430\u043D \u0433\u044D\u0436 \u04AF\u0437\u0434\u044D\u0433. \u041E\u0434\u043E\u043E\u0433\u0438\u0439\u043D \u0431\u0430\u0439\u0434\u043B\u0430\u0430\u0440 \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 \u0438\u0445 \u0441\u0443\u0440\u0433\u0443\u0443\u043B\u0438\u0439\u043D \u04AF\u0439\u043B \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u043D\u0434 \u0431\u04AF\u0440\u044D\u043D \u0430\u0448\u0438\u0433\u043B\u0430\u0436, \u0442\u044D\u0440\u0445\u04AF\u04AF \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 \u04E9\u04E9\u0440\u0438\u0439\u043D \u0434\u043E\u0442\u043E\u043E\u0434 \u043D\u04E9\u04E9\u0446\u04E9\u04E9\u0440 \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u0436 \u0431\u0443\u0439 \u041C\u043E\u043D\u0433\u043E\u043B \u0423\u043B\u0441\u044B\u043D \u0418\u0445 \u0421\u0443\u0440\u0433\u0443\u0443\u043B\u044C Sisi, \u0428\u0438\u043D\u0436\u043B\u044D\u0445 \u0423\u0445\u0430\u0430\u043D \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439\u043D \u0418\u0445 \u0441\u0443\u0440\u0433\u0443\u0443\u043B\u0438\u0443\u0434\u044B\u043D \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C \u043D\u044C \u0445\u0430\u043C\u0433\u0438\u0439\u043D \u043E\u043B\u043E\u043D \u043C\u043E\u0434\u0443\u043B\u0442\u0430\u0439 \u0431\u0430 \u043D\u0430\u0439\u0434\u0432\u0430\u0440\u0442\u0430\u0439 \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0442\u0430\u0439 \u0441\u0438\u0441\u0442\u0435\u043C \u0431\u043E\u043B\u043E\u0445 \u043D\u044C \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0436 \u0431\u0430\u0439\u043D\u0430. \u0411\u0438\u0434 \u044D\u043D\u044D\u0445\u04AF\u04AF \u0441\u0443\u0434\u0430\u043B\u0433\u0430\u0430\u043D\u044B \u0430\u0436\u043B\u0430\u0430\u0440 \u043E\u043B\u043E\u043D \u0443\u043B\u0441\u044B\u043D \u0442\u04AF\u0432\u0448\u0438\u043D\u0434 \u0445\u04AF\u043B\u044D\u044D\u043D \u0437\u04E9\u0432\u0448\u04E9\u04E9\u0440\u04E9\u0433\u0434\u04E9\u043D \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u0436 \u0431\u0443\u0439 \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 \u0437\u0430\u0433\u0432\u0430\u0440 (Technology Acceptance Model)-\u044B\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D \u0442\u04E9\u0440\u0438\u0439\u043D \u04E9\u043C\u0447\u0438\u0439\u043D \u0434\u04E9\u0440\u0432\u04E9\u043D \u0438\u0445 \u0441\u0443\u0440\u0433\u0443\u0443\u043B\u0438\u0439\u043D \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u0433\u0447\u0434\u0438\u0439\u043D \u0442\u0443\u0445\u0430\u0439\u043D \u04E9\u04E9\u0440\u0441\u0434\u0438\u0439\u043D \u0430\u0448\u0438\u0433\u043B\u0430\u0436 \u0431\u0443\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 \u0445\u044D\u0440\u0445\u044D\u043D \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0447 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u0436 \u0431\u0430\u0439\u0433\u0430\u0430 \u0442\u0430\u043B\u0430\u0430\u0440 \u0441\u0443\u0434\u043B\u0430\u043D \u0448\u0438\u043D\u0436\u0438\u043B\u0433\u044D\u044D \u0445\u0438\u0439\u0441\u044D\u043D \u0431\u043E\u043B\u043D\u043E."
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-5 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "image",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                    src: "/images/history/history-img5.jpg",
                    alt: "image"
                  })
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
          className: "timeline-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "timeline-date",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "2020"
            }), "\u0413\u0443\u0440\u0432\u0430\u043D \u0441\u0430\u0440\u044B\u043D 25"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "dot-badge"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "timeline-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-7 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439\u043D \u0442\u04E9\u0432 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u0430\u0433\u0434\u0430\u0432"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                    children: ["\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u0442 \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 \u043D\u044D\u0432\u0440\u0442\u0440\u04AF\u04AF\u043B\u0436, \u0442\u043E\u0433\u0442\u0432\u043E\u0440\u0442\u043E\u0439 \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u0441\u043D\u044D\u044D\u0440 \u0446\u0430\u0445\u0438\u043C \u0437\u0430\u0441\u0430\u0433\u043B\u0430\u043B, \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0439\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u0436 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D\u0433 \u0446\u0430\u0445\u0438\u043C\u0436\u0443\u0443\u043B\u0430\u0445, \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D \u0442\u04AF\u0432\u0448\u0438\u043D\u0434 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A \u0448\u0438\u043D\u0436\u0438\u043B\u0433\u044D\u044D \u0445\u0438\u0439\u0436, \u043E\u043D\u043E\u0432\u0447\u0442\u043E\u0439 \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u043B\u0442, \u0448\u0438\u0439\u0434\u0432\u044D\u0440 \u0433\u0430\u0440\u0433\u0430\u0445\u0430\u0434 \u0434\u044D\u043C\u0436\u043B\u044D\u0433 \u04AF\u0437\u04AF\u04AF\u043B\u043D\u044D. \u201C\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439\u043D \u0442\u04E9\u0432\u201D \u0423\u0422\u04AE\u0413 \u043D\u044C esis.edu.mn \u04AF\u043D\u0434\u0441\u044D\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u044D\u0445\u044D\u044D\u0441 \u0433\u0430\u0434\u043D\u0430 \u0434\u0430\u0440\u0430\u0430\u0445 \u0434\u044D\u0434 \u0441\u0438\u0441\u0442\u0435\u043C\u04AF\u04AF\u0434\u0438\u0439\u0433 \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u044D\u043D \u0430\u0436\u0438\u043B\u043B\u0430\u0436 \u0431\u0430\u0439\u043D\u0430. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
                      children: "\u04AE\u04AF\u043D\u0434:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "1. \u041C\u044D\u0434\u044D\u044D, \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D portal.esis.edu.mn \u043F\u043E\u0440\u0442\u0430\u043B \u0441\u0430\u0439\u0442 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "2. \u0422\u044D\u0442\u0433\u044D\u043B\u044D\u0433\u0438\u0439\u043D scholarship.esis.edu.mn \u043F\u043E\u0440\u0442\u0430\u043B \u0441\u0430\u0439\u0442 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "3. \u0426\u0430\u0445\u0438\u043C \u0433\u0430\u0440\u044B\u043D \u0430\u0432\u043B\u0430\u0433\u044B\u043D help.esis.edu.mn \u043F\u043E\u0440\u0442\u0430\u043B \u0441\u0430\u0439\u0442 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "4. \u042D\u0446\u044D\u0433 \u044D\u0445\u0438\u0439\u043D parent.edu.mn \u043F\u043E\u0440\u0442\u0430\u043B \u0441\u0430\u0439\u0442 \u0431\u043E\u043B\u043E\u043D \u043C\u043E\u0431\u0430\u0439\u043B \u0430\u043F\u043B\u0438\u043A\u044D\u0439\u0448\u043D\u0443\u0443\u0434 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "5. \u0426\u0430\u0445\u0438\u043C \u0430\u0433\u0443\u0443\u043B\u0433\u044B\u043D econtent.edu.mn \u043F\u043E\u0440\u0442\u0430\u043B \u0441\u0430\u0439\u0442 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "6. \u0426\u0430\u0445\u0438\u043C \u0441\u0443\u0440\u0430\u0445 \u0431\u0438\u0447\u0433\u0438\u0439\u043D \u043C\u043E\u0431\u0430\u0439\u043B \u0430\u043F\u043B\u0438\u043A\u044D\u0439\u0448\u043D \u0437\u044D\u0440\u044D\u0433 \u0434\u044D\u0434 \u0441\u0438\u0441\u0442\u0435\u043C\u04AF\u04AF\u0434 \u0431\u0430\u0433\u0442\u0434\u0430\u0433. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "7. \u0414\u044D\u044D\u0434 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C hemis.edu.mn"]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-5 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "image",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                    src: "/images/history/history-img6.jpg",
                    alt: "image"
                  })
                })
              })]
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurHistory);

/***/ }),

/***/ "./resources/assets/web/components/Common/OurTeamStyleTwo.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/web/components/Common/OurTeamStyleTwo.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var OwlCarousel = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__.default)(__webpack_require__.e(/*! import() */ "node_modules_react-owl-carousel3_lib_OwlCarousel_js").then(__webpack_require__.t.bind(__webpack_require__, /*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js", 23)));
var options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-chevron'></i>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 2
    },
    992: {
      items: 4
    }
  }
};

var OurTeamStyleTwo = function OurTeamStyleTwo() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      display = _React$useState2[0],
      setDisplay = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    setDisplay(true);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "team-area-two ptb-100",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "section-title",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "sub-title",
          children: "Our Team"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          children: "We Help to Acheive Your Business Goal"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        })]
      }), display ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(OwlCarousel, _objectSpread(_objectSpread({
        className: "team-slides owl-carousel owl-theme"
      }, options), {}, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "single-team-member",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "image",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: "/images/team/team-img1.jpg",
              alt: "team-image"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "social-link",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-facebook"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-twitter"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-instagram"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-linkedin"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: "James Anderson"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: "CEO"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "flaticon-share-icon"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "single-team-member",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "image",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: "/images/team/team-img2.jpg",
              alt: "team-image"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "social-link",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-facebook"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-twitter"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-instagram"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-linkedin"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: "Sarah Taylor"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: "Marketing Lead"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "flaticon-share-icon"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "single-team-member",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "image",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: "/images/team/team-img3.jpg",
              alt: "team-image"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "social-link",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-facebook"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-twitter"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-instagram"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-linkedin"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: "Taylor Sopia"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: "Web Designer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "flaticon-share-icon"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "single-team-member",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "image",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: "/images/team/team-img4.jpg",
              alt: "team-image"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "social-link",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-facebook"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-twitter"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-instagram"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-linkedin"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: "Harry Steve"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: "Web Developer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "flaticon-share-icon"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "single-team-member",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "image",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: "/images/team/team-img5.jpg",
              alt: "team-image"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "social-link",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-facebook"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-twitter"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-instagram"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-linkedin"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: "Alina Smith"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: "Advisor"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "flaticon-share-icon"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "single-team-member",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "image",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: "/images/team/team-img6.jpg",
              alt: "team-image"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "social-link",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-facebook"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-twitter"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-instagram"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-linkedin"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: "David Warner"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: "Support"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
              className: "flaticon-share-icon"
            })]
          })]
        })]
      })) : '']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "shape17",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "/images/shape/shape17.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurTeamStyleTwo);

/***/ }),

/***/ "./resources/assets/web/components/Common/PageBanner.js":
/*!**************************************************************!*\
  !*** ./resources/assets/web/components/Common/PageBanner.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var PageBanner = function PageBanner(_ref) {
  var pageTitle = _ref.pageTitle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "page-title-area",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "page-title-content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
          children: pageTitle
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "shape2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: "/images/shape/shape2.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "shape3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: "/images/shape/shape3.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "shape5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: "/images/shape/shape5.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "shape6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: "/images/shape/shape6.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "shape7",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: "/images/shape/shape7.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "shape8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: "/images/shape/shape8.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "lines",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "line"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageBanner);

/***/ }),

/***/ "./resources/assets/web/components/Common/Partner.js":
/*!***********************************************************!*\
  !*** ./resources/assets/web/components/Common/Partner.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Partner = function Partner() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "partner-area bg-f9f9f9 ptb-70",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row align-items-center justify-content-md-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-2 col-6 col-sm-4 col-md-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "single-partner-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: "/images/partner/partner-img6.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-2 col-6 col-sm-4 col-md-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "single-partner-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: "/images/partner/partner-img2.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-2 col-6 col-sm-4 col-md-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "single-partner-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: "/images/partner/partner-img3.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-2 col-6 col-sm-4 col-md-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "single-partner-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: "/images/partner/partner-img4.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-2 col-6 col-sm-4 col-md-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "single-partner-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: "/images/partner/partner-img1.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-2 col-6 col-sm-4 col-md-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "single-partner-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: "/images/partner/partner-img5.png",
              alt: "image"
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partner);

/***/ }),

/***/ "./resources/assets/web/components/Common/ServicesCard.js":
/*!****************************************************************!*\
  !*** ./resources/assets/web/components/Common/ServicesCard.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var ServicesCard = function ServicesCard() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "services-area bg-f9f9f9 pt-100 pb-70",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "section-title",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "sub-title",
          children: "\u0442\u04E9\u0441\u04E9\u043B"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          children: " \u0425\u044D\u0440\u044D\u0433\u0436\u04AF\u04AF\u043B\u0436 \u0431\u0443\u0439 \u0442\u04E9\u0441\u043B\u04AF\u04AF\u0434  "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: " \u0422\u04E9\u0441\u043B\u0438\u0439\u043D \u0445\u04AF\u0440\u044D\u044D\u043D\u0434 \u0411\u0421\u041C\u0421-\u0438\u0439\u043D \u0431\u0430\u0433 \u043D\u044C esis.edu.mn \u04AF\u043D\u0434\u0441\u044D\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u044D\u0445\u044D\u044D\u0441 \u0433\u0430\u0434\u043D\u0430 \u0434\u0430\u0440\u0430\u0430\u0445 \u0434\u044D\u0434 \u0441\u0438\u0441\u0442\u0435\u043C\u04AF\u04AF\u0434\u0438\u0439\u043D \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u044D\u043B\u0442\u0438\u0439\u0433 \u0445\u0430\u0440\u0438\u0443\u0446\u0430\u043D \u0430\u0436\u0438\u043B\u043B\u0430\u0436 \u0431\u0430\u0439\u043D\u0430. "
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-featured-services-box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "icon",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "flaticon-megaphone"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "circles-box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-one"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-two"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: "",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  children: "\u0415\u0411\u0421"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: "\u0415\u0440\u04E9\u043D\u0445\u0438\u0439 \u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0421\u0443\u0440\u0433\u0443\u0443\u043B\u044C"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                className: "learn-more-btn",
                href: "https://www.esis.edu.mn/hr/index.html#/",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "left-icon flaticon-next-button"
                }), "\u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "right-icon flaticon-next-button"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-featured-services-box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "icon",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "flaticon-keywords"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "circles-box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-one"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-two"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: "",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  children: "\u0421\u04E8\u0411"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: " \u0421\u0443\u0440\u0433\u0443\u0443\u043B\u0438\u0439\u043D \u04E8\u043C\u043D\u04E9\u0445 \u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                className: "learn-more-btn",
                href: "https://www.esis.edu.mn/hr/index.html#/",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "left-icon flaticon-next-button"
                }), "\u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "right-icon flaticon-next-button"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-featured-services-box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "icon",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "flaticon-content-management"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "circles-box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-one"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-two"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: "",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  children: " \u0414\u044D\u044D\u0434 "
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: " \u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u041C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0421\u0438\u0441\u0442\u0435\u043C "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                className: "learn-more-btn",
                href: "https://hemis.edu.mn/hub/login.html",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "left-icon flaticon-next-button"
                }), "\u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "right-icon flaticon-next-button"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-featured-services-box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "icon",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "flaticon-ppc"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "circles-box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-one"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-two"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: "",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  children: " \u042D\u0446\u044D\u0433 \u042D\u0445 "
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: " \u042D\u0446\u044D\u0433 \u042D\u0445\u0438\u0439\u043D \u041C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D  \u0421\u0438\u0441\u0442\u0435\u043C "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                className: "learn-more-btn",
                href: "https://parent.edu.mn/#/login",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "left-icon flaticon-next-button"
                }), "\u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "right-icon flaticon-next-button"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-featured-services-box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "icon",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "flaticon-competitor"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "circles-box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-one"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-two"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: "",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  children: " \u041D\u0422\u0411 "
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: " \u041D\u0430\u0441\u0430\u043D \u0422\u0443\u0440\u0448\u0438\u0439\u043D \u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                className: "learn-more-btn",
                href: "https://www.ncle.mn/",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "left-icon flaticon-next-button"
                }), "\u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "right-icon flaticon-next-button"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-featured-services-box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "icon",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "flaticon-startup"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "circles-box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-one"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-two"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: "",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  children: " \u0422\u044D\u0442\u0433\u044D\u043B\u044D\u0433 "
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: " \u0426\u0430\u0445\u0438\u043C \u04E8\u0440\u0433\u04E9\u0434\u04E9\u043B "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                className: "learn-more-btn",
                href: "https://scholarship.esis.edu.mn/grant/login.html",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "left-icon flaticon-next-button"
                }), "\u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "right-icon flaticon-next-button"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-featured-services-box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "icon",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "flaticon-ppc"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "circles-box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-one"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-two"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: "",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  children: " E-Content"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: " \u0426\u0430\u0445\u0438\u043C \u0421\u0443\u0440\u0430\u0445 \u0411\u0438\u0447\u0438\u0433 "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                className: "learn-more-btn",
                href: "https://econtent.edu.mn/",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "left-icon flaticon-next-button"
                }), "\u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "right-icon flaticon-next-button"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-featured-services-box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "icon",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "flaticon-competitor"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "circles-box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-one"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-two"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: "/single-services",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  children: " \u041C\u043E\u0431\u0430\u0439\u043B \u0410\u043F\u043F\u0443\u0443\u0434 "
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: " Android, Ios "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/single-services",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                className: "learn-more-btn",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "left-icon flaticon-next-button"
                }), "\u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "right-icon flaticon-next-button"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-featured-services-box",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "icon",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "flaticon-startup"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "circles-box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-one"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "circle-two"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: "",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  children: "\u0422\u0443\u0441\u043B\u0430\u043C\u0436 "
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: " \u0425\u044D\u0440\u044D\u0433\u043B\u044D\u0433\u0447\u0438\u0439\u043D \u0426\u0430\u0445\u0438\u043C \u0422\u0443\u0441\u043B\u0430\u043C\u0436 "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                className: "learn-more-btn",
                href: "https://help.esis.edu.mn/",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "left-icon flaticon-next-button"
                }), "\u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "right-icon flaticon-next-button"
                })]
              })
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesCard);

/***/ }),

/***/ "./resources/assets/web/components/Common/TestimonialStyleTwo.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/web/components/Common/TestimonialStyleTwo.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var OwlCarousel = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__.default)(__webpack_require__.e(/*! import() */ "node_modules_react-owl-carousel3_lib_OwlCarousel_js").then(__webpack_require__.t.bind(__webpack_require__, /*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js", 23)));
var options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  items: 1,
  navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-chevron'></i>"]
};

var TestimonialStyleTwo = function TestimonialStyleTwo() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      display = _React$useState2[0],
      setDisplay = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    setDisplay(true);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "feedback-area ptb-100",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "feedback-image",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: "/images/feedback-img1.jpg",
              alt: "image"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: "/images/feedback-img2.jpg",
              alt: "image"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: "/images/feedback-img3.jpg",
              alt: "image"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: "/images/feedback-img4.jpg",
              alt: "image"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "feedback-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "sub-title",
              children: "Feedback"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              children: "What Our Clients Are Saying?"
            }), display ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(OwlCarousel, _objectSpread(_objectSpread({
              className: "feedback-slides owl-carousel owl-theme"
            }, options), {}, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "single-feedback-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "client-info",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                      src: "/images/user1.jpg",
                      alt: "image"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "title",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                        children: "John Smith"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                        children: "Python Developer"
                      })]
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "single-feedback-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "client-info",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                      src: "/images/user2.jpg",
                      alt: "image"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "title",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                        children: "Sarah Taylor"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                        children: "Web Developer"
                      })]
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "single-feedback-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "client-info",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                      src: "/images/user3.jpg",
                      alt: "image"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "title",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                        children: "James Anderson"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                        children: "Web Designer"
                      })]
                    })]
                  })
                })]
              })]
            })) : '']
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "shape16",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "/images/shape/shape16.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialStyleTwo);

/***/ }),

/***/ "./resources/assets/web/components/Common/WhatWeDo.js":
/*!************************************************************!*\
  !*** ./resources/assets/web/components/Common/WhatWeDo.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-accessible-accordion */ "./node_modules/react-accessible-accordion/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var WhatWeDo = function WhatWeDo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "what-we-do-area ptb-100",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "what-we-do-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "sub-title",
              children: "\u0411\u0438\u0434 \u044E\u0443 \u0445\u0438\u0439\u0434\u044D\u0433 \u0432\u044D?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0446\u0430\u0445\u0438\u043C \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u044D\u0445 \u0437\u0430\u043C\u0430\u0430\u0440 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D\u0433 \u043D\u044D\u044D\u043B\u0442\u0442\u044D\u0439 \u0438\u043B \u0442\u043E\u0434 \u0431\u043E\u043B\u0433\u043E\u0445, \u0447\u0430\u043D\u0430\u0440\u044B\u043D \u0441\u0430\u0439\u0436\u0440\u0443\u0443\u043B\u0430\u0445, \u0445\u04AF\u0440\u0442\u044D\u044D\u043C\u0436\u0438\u0439\u0433 \u043D\u044D\u043C\u044D\u0433\u0434\u04AF\u04AF\u043B\u044D\u0445 \u0437\u043E\u0440\u0438\u043B\u0433\u043E \u0442\u0430\u0432\u0438\u043D \u0430\u0436\u0438\u043B\u043B\u0430\u0436 \u0431\u0430\u0439\u043D\u0430."
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "what-we-do-content-accordion",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.Accordion, {
              allowZeroExpanded: true,
              preExpanded: ["a"],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItem, {
                uuid: "a",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItemHeading, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItemButton, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439\u043D \u0434\u044D\u0434 \u0431\u04AF\u0442\u044D\u0446"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItemPanel, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    children: "\u041C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u0430\u043D, \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u04AF\u043B\u0436\u044D\u044D, \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0434\u0430\u0442\u0430 \u0442\u04E9\u0432\u0438\u0439\u043D \u0445\u044F\u043D\u0430\u043B\u0442, \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u0430, \u0442\u043E\u0433\u0442\u0432\u043E\u0440\u0442\u043E\u0439 \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0433 \u0445\u0430\u0440\u0438\u0443\u0446\u0430\u043D \u0430\u0436\u0438\u043B\u043B\u0430\u0436 \u0431\u0430\u0439\u043D\u0430."
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItem, {
                uuid: "b",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItemHeading, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItemButton, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B, \u0448\u0438\u043D\u0436\u043B\u044D\u0445 \u0443\u0445\u0430\u0430\u043D\u044B \u044F\u0430\u043C\u043D\u044B \u0431\u043E\u0434\u043B\u043E\u0433\u043E"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItemPanel, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0430\u0441\u0443\u0443\u0434\u0430\u043B \u044D\u0440\u0445\u044D\u043B\u0441\u044D\u043D \u0422\u04E9\u0440\u0438\u0439\u043D \u0437\u0430\u0445\u0438\u0440\u0433\u0430\u0430\u043D\u044B \u0442\u04E9\u0432 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u044B\u0433 \u0441\u0443\u0434\u0430\u043B\u0433\u0430\u0430\u043D\u0434 \u0441\u0443\u0443\u0440\u0438\u043B\u0441\u0430\u043D \u0431\u043E\u0434\u0438\u0442 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u044D\u044D\u0440 \u0445\u0430\u043D\u0433\u0430\u0445."
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItem, {
                uuid: "c",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItemHeading, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItemButton, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u0443\u0443\u0434\u044B\u043D \u0443\u044F\u043B\u0434\u0430\u0430 \u0445\u043E\u043B\u0431\u043E\u043E"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItemPanel, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    children: "\u0426\u0430\u0445\u0438\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u043D \u0442\u0443\u0441\u043B\u0430\u043C\u0436\u0442\u0430\u0439\u0433\u0430\u0430\u0440 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u0443\u0443\u0434\u044B\u043D \u04AF\u0439\u043B \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0433 \u0445\u04E9\u043D\u0433\u04E9\u0432\u0447\u043B\u04E9\u0445, \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0447\u0430\u043D\u0430\u0440, \u0445\u0430\u043C\u0442\u044B\u043D \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0433 \u0441\u0430\u0439\u0436\u0440\u0443\u0443\u043B\u0430\u0445 \u0437\u043E\u0440\u0438\u043B\u0433\u043E\u043E\u0440 parent \u0431\u0443\u044E\u0443 \u044D\u0446\u044D\u0433 \u044D\u0445\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C, scholarship \u0431\u0443\u044E\u0443 \u0442\u044D\u0442\u0433\u044D\u043B\u0433\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C, investment \u0431\u0443\u044E\u0443 \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u0445\u04E9\u0440\u04E9\u043D\u0433\u04E9 \u043E\u0440\u0443\u0443\u043B\u0430\u043B\u0442\u044B\u043D \u0431\u04AF\u0440\u0442\u0433\u044D\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C, license \u0431\u0443\u044E\u0443 \u0441\u0443\u0440\u0433\u0443\u0443\u043B\u044C \u0446\u044D\u0446\u044D\u0440\u043B\u044D\u0433\u0438\u0439\u043D \u0442\u0443\u0441\u0433\u0430\u0439 \u0437\u04E9\u0432\u0448\u04E9\u04E9\u0440\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u04AF\u04AF\u0434\u0438\u0439\u0433 \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u0436 \u0431\u0430\u0439\u043D\u0430."
                  })
                })]
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhatWeDo);

/***/ }),

/***/ "./resources/assets/web/components/Contact/ContactForm.js":
/*!****************************************************************!*\
  !*** ./resources/assets/web/components/Contact/ContactForm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js");
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/baseUrl */ "./resources/assets/web/utils/baseUrl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_5___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()));




var alertContent = function alertContent() {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false
  });
}; // Form initial state


var INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: ""
};

var ContactForm = function ContactForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(INITIAL_STATE),
      _useState2 = _slicedToArray(_useState, 2),
      contact = _useState2[0],
      setContact = _useState2[1];

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setContact(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
    console.log(contact);
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var url, name, email, number, subject, text, payload;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default, "/api/contact");
              name = contact.name, email = contact.email, number = contact.number, subject = contact.subject, text = contact.text;
              payload = {
                name: name,
                email: email,
                number: number,
                subject: subject,
                text: text
              };
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().post(url, payload);

            case 6:
              console.log(url);
              setContact(INITIAL_STATE);
              alertContent();
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "contact-area pb-100",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "section-title",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "sub-title",
          children: "\u0411\u0438\u0434\u044D\u043D\u0442\u044D\u0439 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u043E\u0445"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h2", {
          children: ["\u0418\u043C\u044D\u0439\u043B \u0438\u043B\u0433\u044D\u044D\u0445", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "overlay"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          children: "\u0422\u0430\u043D\u044B \u0438\u043C\u044D\u0439\u043B \u0445\u0430\u044F\u0433 \u043D\u0438\u0439\u0442\u043B\u044D\u0433\u0434\u044D\u0445\u0433\u04AF\u0439. \u0428\u0430\u0430\u0440\u0434\u043B\u0430\u0433\u0430\u0442\u0430\u0439 \u0442\u0430\u043B\u0431\u0430\u0440\u0443\u0443\u0434\u044B\u0433 \u0431\u04E9\u0433\u043B\u04E9\u04E9\u0434 \u0438\u043B\u0433\u044D\u044D\u0445 \u0442\u043E\u0432\u0447\u044B\u0433 \u0434\u0430\u0440\u043D\u0430 \u0443\u0443 !"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "contact-image",
            "data-tilt": true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: "/images/contact.jpg",
              alt: "image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "contact-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("form", {
              id: "contactForm",
              onSubmit: handleSubmit(onSubmit),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "col-lg-6 col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                      type: "text",
                      name: "name",
                      placeholder: "\u041D\u044D\u0440",
                      className: "form-control",
                      value: contact.name,
                      onChange: handleChange,
                      ref: register({
                        required: true
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "invalid-feedback",
                      style: {
                        display: "block"
                      },
                      children: errors.name && "Нэр оруулна уу."
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "col-lg-6 col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                      type: "text",
                      name: "email",
                      placeholder: "\u0418\u043C\u044D\u0439\u043B \u0445\u0430\u044F\u0433",
                      className: "form-control",
                      value: contact.email,
                      onChange: handleChange,
                      ref: register({
                        required: true,
                        pattern: /^\S+@\S+$/i
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "invalid-feedback",
                      style: {
                        display: "block"
                      },
                      children: errors.email && "Имэйл хаягаа оруулна уу."
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "col-lg-12 col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                      type: "text",
                      name: "number",
                      placeholder: "\u0423\u0442\u0430\u0441\u043D\u044B \u0434\u0443\u0433\u0430\u0430\u0440",
                      className: "form-control",
                      value: contact.number,
                      onChange: handleChange,
                      ref: register({
                        required: true
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "invalid-feedback",
                      style: {
                        display: "block"
                      },
                      children: errors.number && "Утасны дугаараа оруулна уу."
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "col-lg-12 col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                      type: "text",
                      name: "subject",
                      placeholder: "\u0413\u0430\u0440\u0447\u0438\u0433",
                      className: "form-control",
                      value: contact.subject,
                      onChange: handleChange,
                      ref: register({
                        required: true
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "invalid-feedback",
                      style: {
                        display: "block"
                      },
                      children: errors.subject && "Гарчигаа оруулна уу."
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "col-lg-12 col-md-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("textarea", {
                      name: "text",
                      cols: "30",
                      rows: "5",
                      placeholder: "\u0421\u0430\u043D\u0430\u043B \u0445\u04AF\u0441\u044D\u043B\u0442\u044D\u044D \u0431\u0438\u0447\u0438\u0445...",
                      className: "form-control",
                      value: contact.text,
                      onChange: handleChange,
                      ref: register({
                        required: true
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "invalid-feedback",
                      style: {
                        display: "block"
                      },
                      children: errors.text && "Санал хүсэлтээ оруулна уу."
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "col-lg-12 col-sm-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                    type: "submit",
                    className: "default-btn",
                    children: "\u0418\u043B\u0433\u044D\u044D\u0445"
                  })
                })]
              })
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ }),

/***/ "./resources/assets/web/components/HomeDemoSix/AboutSection.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/web/components/HomeDemoSix/AboutSection.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var AboutSection = function AboutSection() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "about-area pb-100",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "about-img",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: "assets/web/images/about-img2.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "about-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "text",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "sub-title",
                children: "\u0421\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u043D \u0442\u0443\u0445\u0430\u0439"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
                children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u04AF\u0439\u043B \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0433 \u0446\u0430\u0445\u0438\u043C\u0436\u0443\u0443\u043B\u0430\u0445, \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u0430\u043D \u0431\u04AF\u0440\u0434\u04AF\u04AF\u043B\u044D\u0445, \u0438\u0440\u0433\u044D\u0434\u044D\u0434 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u044D\u044D\u0440 \u0442\u04AF\u0440\u0433\u044D\u043D \u0448\u0443\u0443\u0440\u0445\u0430\u0439 \u04AF\u0439\u043B\u0447\u043B\u044D\u0445 \u0437\u043E\u0440\u0438\u043B\u0433\u043E\u043E\u0440 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u0430 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 2013 \u043E\u043D\u043E\u043E\u0441 \u04AF\u0435 \u0448\u0430\u0442\u0442\u0430\u0439\u0433\u0430\u0430\u0440 \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u0436, \u0442\u04AF\u04AF\u043D\u0438\u0439\u0433 2015 \u043E\u043D\u043E\u043E\u0441 \u0435\u0440\u04E9\u043D\u0445\u0438\u0439 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u0434, 2018 \u043E\u043D\u043E\u043E\u0441 \u0441\u0443\u0440\u0433\u0443\u0443\u043B\u0438\u0439\u043D \u04E9\u043C\u043D\u04E9\u0445 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u0434, 2019 \u043E\u043D\u043E\u043E\u0441 \u0434\u044D\u044D\u0434 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u0442 \u0442\u0443\u0441 \u0442\u0443\u0441 \u043D\u044D\u0432\u0442\u0440\u04AF\u04AF\u043B\u044D\u044D\u0434 \u0431\u0430\u0439\u043D\u0430."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
                className: "funfacts-list",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "list",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                      className: "flaticon-menu-1"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                      style: {
                        fontSize: "36px",
                        lineHeight: "46px"
                      },
                      children: "2,470"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                      children: "\u0411\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u0430"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "list",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                      className: "flaticon-conversation"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                      style: {
                        fontSize: "36px",
                        lineHeight: "46px"
                      },
                      children: "97,136"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                      children: "\u0411\u0430\u0433\u0448, \u0430\u0436\u0438\u043B\u0442\u0430\u043D"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "list",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                      className: "flaticon-web-settings"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                      style: {
                        fontSize: "36px",
                        lineHeight: "46px"
                      },
                      children: "1,078,585"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                      children: "\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                href: "/system",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  className: "default-btn",
                  children: "\u0414\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439"
                })
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutSection);

/***/ }),

/***/ "./resources/assets/web/components/HomeDemoSix/MainBanner.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/web/components/HomeDemoSix/MainBanner.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var MainBanner = function MainBanner() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "banner-area",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "main-banner-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "sub-title",
          children: " \u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u0433 \u0446\u0430\u0445\u0438\u043C\u0430\u0430\u0440 \u0445\u04AF\u043D \u0431\u04AF\u0440\u0442"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u041C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439\u043D \u0422\u04E9\u0432"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C, \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0446\u0430\u0445\u0438\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D \u0441\u0438\u0441\u0442\u0435\u043C, \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0430\u043D, \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u04AF\u043B\u0436\u044D\u044D \u0431\u043E\u043B\u043E\u043D \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0434\u0430\u0442\u0430 \u0442\u04E9\u0432\u0438\u0439\u043D \u0445\u044F\u043D\u0430\u043B\u0442, \u0442\u043E\u0433\u0442\u0432\u043E\u0440\u0442\u043E\u0439 \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0433 \u0445\u0430\u043D\u0433\u0430\u0445, \u0445\u04E9\u0433\u0436\u043B\u0438\u0439\u043D \u0430\u0441\u0443\u0443\u0434\u043B\u044B\u0433 \u0446\u043E\u0433\u0446\u043E\u043E\u0440 \u043D\u044C \u0430\u0432\u0447 \u0445\u044D\u0440\u044D\u0433\u0436\u04AF\u04AF\u043B\u044D\u0445\u044D\u0434 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u044B\u043D \u044D\u0440\u0445\u044D\u043C \u0437\u043E\u0440\u0438\u043B\u0433\u043E \u043E\u0440\u0448\u0438\u043D\u043E."
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "shape2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "assets/web/images/shape/shape2.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "shape3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "assets/web/images/shape/shape3.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "shape4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "assets/web/images/shape/shape4.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "shape5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "assets/web/images/shape/shape5.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "shape6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "assets/web/images/shape/shape6.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "shape7",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "assets/web/images/shape/shape7.png",
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "shape8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "assets/web/images/shape/shape8.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainBanner);

/***/ }),

/***/ "./resources/assets/web/components/_App/Footer.js":
/*!********************************************************!*\
  !*** ./resources/assets/web/components/_App/Footer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Footer = function Footer() {
  var currentYear = new Date().getFullYear();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("footer", {
    className: "footer-area",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-footer-widget",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
              href: "/#",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                className: "logo",
                style: {
                  height: "65px"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "https://cdn.esis.edu.mn/logo/bmtt.png",
                  alt: "logo",
                  style: {
                    height: "100%"
                  }
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C, \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0446\u0430\u0445\u0438\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D \u0441\u0438\u0441\u0442\u0435\u043C, \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0430\u043D, \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u04AF\u043B\u0436\u044D\u044D \u0431\u043E\u043B\u043E\u043D \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0434\u0430\u0442\u0430 \u0442\u04E9\u0432\u0438\u0439\u043D \u0445\u044F\u043D\u0430\u043B\u0442, \u0442\u043E\u0433\u0442\u0432\u043E\u0440\u0442\u043E\u0439 \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0433 \u0445\u0430\u043D\u0433\u0430\u0445, \u0445\u04E9\u0433\u0436\u043B\u0438\u0439\u043D \u0430\u0441\u0443\u0443\u0434\u043B\u044B\u0433 \u0446\u043E\u0433\u0446\u043E\u043E\u0440 \u043D\u044C \u0430\u0432\u0447 \u0445\u044D\u0440\u044D\u0433\u0436\u04AF\u04AF\u043B\u044D\u0445\u044D\u0434 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u044B\u043D \u044D\u0440\u0445\u044D\u043C \u0437\u043E\u0440\u0438\u043B\u0433\u043E \u043E\u0440\u0448\u0438\u043D\u043E."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "social-link",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "https://www.facebook.com/esis.edu.mn",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-facebook"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "https://www.youtube.com/channel/UCtFHcwK83Iha9qmHr6Xm1HQ",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-youtube"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "#",
                  className: "d-block",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "bx bxl-instagram"
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-footer-widget pl-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: "\u0425\u043E\u043B\u0431\u043E\u043E\u0441\u0443\u0443\u0434"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "footer-links-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                  href: "/#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    children: "\u041D\u04AF\u04AF\u0440"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                  href: "/bmtt",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    children: "\u0411\u041C\u0422\u0422"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                  href: "/network",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    children: "\u0421\u04AF\u043B\u0436\u044D\u044D"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                  href: "/system",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    children: "\u0421\u0438\u0441\u0442\u0435\u043C"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                  href: "/service",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    children: "\u04AE\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                  href: "",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    href: "https://www.shilendans.gov.mn/org/14941",
                    target: "_blank",
                    children: "\u0428\u0438\u043B\u044D\u043D \u0434\u0430\u043D\u0441"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                  href: "/contact",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    children: "\u0425\u043E\u043B\u0431\u043E\u043E \u0431\u0430\u0440\u0438\u0445"
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-4 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "single-footer-widget",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              children: "\u0425\u0430\u044F\u0433"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "footer-contact-info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "bx bx-map"
                }), "\u0423\u043B\u0430\u0430\u043D\u0431\u0430\u0430\u0442\u0430\u0440 \u0445\u043E\u0442, \u0421\u04AF\u0445\u0431\u0430\u0430\u0442\u0430\u0440 \u0434\u04AF\u04AF\u0440\u044D\u0433, 1 \u0434\u04AF\u0433\u044D\u044D\u0440 \u0445\u043E\u0440\u043E\u043E \u042E\u043D\u0435\u0441\u043A\u043E\u0433\u0438\u0439\u043D \u0433\u0443\u0434\u0430\u043C\u0436 16-\u0440 \u0431\u0430\u0439\u0440\u043D\u044B 2 \u0434\u0443\u0433\u0430\u0430\u0440 \u0434\u0430\u0432\u0445\u0440\u044B\u043D 202 \u0442\u043E\u043E\u0442"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "bx bx-phone-call"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "tel:+11234567890",
                  children: "(+976) - 7577 - 8080"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                  className: "bx bx-envelope"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: "mailto:hello@mibix.com",
                  children: "info@edu.mn"
                })]
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "footer-bottom-area",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "row align-items-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "col-lg-6 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                className: "bx bx-copyright"
              }), currentYear, " \u0411\u041E\u041B\u041E\u0412\u0421\u0420\u041E\u041B\u042B\u041D \u041C\u042D\u0414\u042D\u042D\u041B\u041B\u0418\u0419\u041D \u0422\u0415\u0425\u041D\u041E\u041B\u041E\u0413\u0418\u0419\u041D \u0422\u04E8\u0412", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                href: "#"
              })]
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "shape16",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "/images/shape/shape16.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./resources/assets/web/components/_App/Navbar.js":
/*!********************************************************!*\
  !*** ./resources/assets/web/components/_App/Navbar.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Navbar = function Navbar() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      menu = _React$useState2[0],
      setMenu = _React$useState2[1];

  var activeName = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)().pathname;
  console.log(activeName);

  var toggleNavbar = function toggleNavbar() {
    setMenu(!menu);
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var elementId = document.getElementById("navbar");
    document.addEventListener("scroll", function () {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }); // Search Modal

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("false"),
      _useState2 = _slicedToArray(_useState, 2),
      isActiveSearchModal = _useState2[0],
      setActiveSearchModal = _useState2[1];

  var handleToggleSearchModal = function handleToggleSearchModal() {
    setActiveSearchModal(!isActiveSearchModal);
  }; // Sidebar Modal


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("false"),
      _useState4 = _slicedToArray(_useState3, 2),
      isActiveSidebarModal = _useState4[0],
      setActiveSidebarModal = _useState4[1];

  var handleToggleSidebarModal = function handleToggleSidebarModal() {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  var classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
  var classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      id: "navbar",
      className: "navbar-area " + (activeName != "/" ? "navbar-color-white" : ""),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "main-nav",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
            className: "navbar navbar-expand-lg navbar-light",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
              to: "/",
              className: "navbar-brand",
              style: {
                height: "65px"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                src: activeName != "/" ? "https://cdn.esis.edu.mn/logo/bmtt.png" : "https://cdn.esis.edu.mn/logo/bmtt1.png",
                alt: "logo",
                style: {
                  height: "100%"
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
              onClick: toggleNavbar,
              className: classTwo,
              type: "button",
              "data-toggle": "collapse",
              "data-target": "#navbarSupportedContent",
              "aria-controls": "navbarSupportedContent",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "icon-bar top-bar"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "icon-bar middle-bar"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "icon-bar bottom-bar"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: classOne,
              id: "navbarSupportedContent",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
                className: "navbar-nav",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                    to: "/",
                    className: "nav-link " + (activeName == "/" ? "active" : ""),
                    children: "\u041D\u04AF\u04AF\u0440"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                    to: "/bmtt",
                    className: "nav-link " + (activeName == "/bmtt" ? "active" : ""),
                    children: "\u0411\u041C\u0422\u0422"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                    to: "/network",
                    className: "nav-link " + (activeName == "/network" ? "active" : ""),
                    children: "\u0421\u04AF\u043B\u0436\u044D\u044D"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                    to: "/system",
                    className: "nav-link " + (activeName == "/system" ? "active" : ""),
                    children: "\u0421\u0438\u0441\u0442\u0435\u043C"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                    to: "/service",
                    className: "nav-link " + (activeName == "/service" ? "active" : ""),
                    children: "\u04AE\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                    to: "/news",
                    className: "nav-link " + (activeName == "/news" ? "active" : ""),
                    children: "\u041C\u044D\u0434\u044D\u044D"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                    to: {
                      pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies"
                    },
                    target: "_blank",
                    className: "nav-link",
                    children: "\u0428\u0438\u043B\u044D\u043D \u0434\u0430\u043D\u0441"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                    to: "/contact",
                    className: "nav-link " + (activeName == "/contact" ? "active" : ""),
                    children: "\u0425\u043E\u043B\u0431\u043E\u043E \u0431\u0430\u0440\u0438\u0445"
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "others-option d-flex align-items-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "option-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "side-menu-btn",
                  onClick: handleToggleSidebarModal,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                    className: "flaticon-menu"
                  })
                })
              })
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "search-overlay ".concat(isActiveSearchModal ? "" : "search-overlay-active"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "d-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "d-table-cell",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "search-overlay-layer"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "search-overlay-layer"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "search-overlay-layer"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "search-overlay-close",
            onClick: handleToggleSearchModal,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "search-overlay-close-line"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "search-overlay-close-line"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "search-overlay-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                type: "text",
                className: "input-search",
                placeholder: "Search here..."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                type: "submit",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                  className: "flaticon-search"
                })
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "sidebarModal modal right ".concat(isActiveSidebarModal ? "" : "show"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "modal-dialog",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "button",
            className: "close",
            onClick: handleToggleSidebarModal,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
              className: "bx bx-x"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "modal-body",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "logo",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                to: "/",
                className: "d-inline-block",
                style: {
                  padding: "0 50px"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                  src: "https://cdn.esis.edu.mn/logo/bmtt1.png",
                  alt: "image"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "sidebar-contact-info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                style: {
                  marginBottom: "100px"
                },
                children: [" ", "\u0423\u043B\u0430\u0430\u043D\u0431\u0430\u0430\u0442\u0430\u0440 \u0445\u043E\u0442, \u0421\u04AF\u0445\u0431\u0430\u0430\u0442\u0430\u0440 \u0434\u04AF\u04AF\u0440\u044D\u0433, 1 \u0434\u04AF\u0433\u044D\u044D\u0440 \u0445\u043E\u0440\u043E\u043E \u042E\u043D\u0435\u0441\u043A\u043E\u0433\u0438\u0439\u043D \u0433\u0443\u0434\u0430\u043C\u0436 16-\u0440 \u0431\u0430\u0439\u0440\u043D\u044B 2 \u0434\u0443\u0433\u0430\u0430\u0440 \u0434\u0430\u0432\u0445\u0440\u044B\u043D 202 \u0442\u043E\u043E\u0442"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: "tel:+11234567890",
                  children: "(+976)-7577-8080"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: "mailto:hello@mibix.com",
                  children: "info@edu.mn"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
              className: "social-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "\u0421\u043E\u0448\u0438\u0430\u043B:"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: "https://www.facebook.com/esis.edu.mn",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                    className: "bx bxl-facebook"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: "https://www.youtube.com/channel/UCtFHcwK83Iha9qmHr6Xm1HQ",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                    className: "bx bxl-youtube"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: "#",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                    className: "bx bxl-instagram"
                  })
                })
              })]
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./resources/assets/web/index.js":
/*!***************************************!*\
  !*** ./resources/assets/web/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index */ "./resources/assets/web/pages/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_pages_index__WEBPACK_IMPORTED_MODULE_2__.default, {}), document.getElementById("app"));

/***/ }),

/***/ "./resources/assets/web/pages/bmtt.js":
/*!********************************************!*\
  !*** ./resources/assets/web/pages/bmtt.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_App_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_App/Navbar */ "./resources/assets/web/components/_App/Navbar.js");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/PageBanner */ "./resources/assets/web/components/Common/PageBanner.js");
/* harmony import */ var _bmttContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bmttContent */ "./resources/assets/web/pages/bmttContent.js");
/* harmony import */ var _components_AboutUs_OurHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutUs/OurHistory */ "./resources/assets/web/components/AboutUs/OurHistory.js");
/* harmony import */ var _components_Common_OurTeamStyleTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/OurTeamStyleTwo */ "./resources/assets/web/components/Common/OurTeamStyleTwo.js");
/* harmony import */ var _components_Common_TestimonialStyleTwo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/TestimonialStyleTwo */ "./resources/assets/web/components/Common/TestimonialStyleTwo.js");
/* harmony import */ var _components_Common_Partner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/Partner */ "./resources/assets/web/components/Common/Partner.js");
/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/_App/Footer */ "./resources/assets/web/components/_App/Footer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var AboutUsBMTT = function AboutUsBMTT() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__.default, {
      pageTitle: "\u0411\u0438\u0434\u043D\u0438\u0439 \u0442\u0443\u0445\u0430\u0439"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_bmttContent__WEBPACK_IMPORTED_MODULE_3__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_AboutUs_OurHistory__WEBPACK_IMPORTED_MODULE_4__.default, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUsBMTT);

/***/ }),

/***/ "./resources/assets/web/pages/bmttContent.js":
/*!***************************************************!*\
  !*** ./resources/assets/web/pages/bmttContent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var BmttContent = function BmttContent() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "about-area ptb-100",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "about-img",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: "/images/about-bmtt.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "about-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "text",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "sub-title",
                children: "\u0411\u041C\u0422\u0422"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                children: "\u0411\u041E\u041B\u041E\u0412\u0421\u0420\u041E\u041B\u042B\u041D \u041C\u042D\u0414\u042D\u042D\u041B\u041B\u0418\u0419\u041D \u0422\u0415\u0425\u041D\u041E\u041B\u041E\u0413\u0418\u0419\u041D \u0422\u04E8\u0412 \u0423\u0422\u04AE\u0413"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "\u041C\u043E\u043D\u0433\u043E\u043B \u0423\u043B\u0441\u044B\u043D \u0417\u0430\u0441\u0433\u0438\u0439\u043D \u0433\u0430\u0437\u0440\u044B\u043D 2020 \u043E\u043D\u044B 03 \u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440\u044B\u043D 25-\u043D\u044B \u04E9\u0434\u0440\u0438\u0439\u043D \u0445\u0443\u0440\u0430\u043B\u0434\u0430\u0430\u043D\u0430\u0430\u0440 \u201C\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u201D \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u044D\u0445 \u0431\u0430\u0433 \u0431\u043E\u043B\u043E\u043D \u201C\u042D\u0440\u0434\u044D\u043C\u043D\u044D\u0442\u201D \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0438\u0439 \u0442\u04E9\u0432\u0438\u0439\u043D \u0445\u04AF\u043D\u0438\u0439 \u043D\u04E9\u04E9\u0446, \u0434\u044D\u0434 \u0431\u04AF\u0442\u044D\u0446 \u0434\u044D\u044D\u0440 \u0442\u04AF\u0448\u0438\u0433\u043B\u044D\u043D \u201C\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439\u043D \u0442\u04E9\u0432\u201D \u0423\u043B\u0441\u044B\u043D \u0442\u04E9\u0441\u04E9\u0432\u0442 \u04AF\u0439\u043B\u0434\u0432\u044D\u0440\u0438\u0439\u043D \u0433\u0430\u0437\u0440\u044B\u0433 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u0441\u0430\u043D."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
                className: "features-list",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                    className: "flaticon-speed"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
                    children: "\u0410\u043B\u0441\u044B\u043D \u0445\u0430\u0440\u0430\u0430"
                  }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u0433 \u0446\u0430\u0445\u0438\u043C\u0430\u0430\u0440 \u0445\u04AF\u043D \u0431\u04AF\u0440\u0434."]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                    className: "flaticon-speed"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
                    children: " \u042D\u0440\u0445\u044D\u043C \u0437\u043E\u0440\u0438\u043B\u0433\u043E "
                  }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C, \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0446\u0430\u0445\u0438\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D \u0441\u0438\u0441\u0442\u0435\u043C, \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0430\u043D, \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u04AF\u043B\u0436\u044D\u044D \u0431\u043E\u043B\u043E\u043D \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0434\u0430\u0442\u0430 \u0442\u04E9\u0432\u0438\u0439\u043D \u0445\u044F\u043D\u0430\u043B\u0442, \u0442\u043E\u0433\u0442\u0432\u043E\u0440\u0442\u043E\u0439 \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0433 \u0445\u0430\u043D\u0433\u0430\u0445, \u0445\u04E9\u0433\u0436\u043B\u0438\u0439\u043D \u0430\u0441\u0443\u0443\u0434\u043B\u044B\u0433 \u0446\u043E\u0433\u0446\u043E\u043E\u0440 \u043D\u044C \u0430\u0432\u0447 \u0445\u044D\u0440\u044D\u0433\u0436\u04AF\u04AF\u043B\u044D\u0445\u044D\u0434 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u044B\u043D \u044D\u0440\u0445\u044D\u043C \u0437\u043E\u0440\u0438\u043B\u0433\u043E \u043E\u0440\u0448\u0438\u043D\u043E."]
                })]
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BmttContent);

/***/ }),

/***/ "./resources/assets/web/pages/contact.js":
/*!***********************************************!*\
  !*** ./resources/assets/web/pages/contact.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_App_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_App/Navbar */ "./resources/assets/web/components/_App/Navbar.js");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/PageBanner */ "./resources/assets/web/components/Common/PageBanner.js");
/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/_App/Footer */ "./resources/assets/web/components/_App/Footer.js");
/* harmony import */ var _components_Contact_ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contact/ContactForm */ "./resources/assets/web/components/Contact/ContactForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Contact = function Contact() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__.default, {
      pageTitle: "\u0425\u043E\u043B\u0431\u043E\u043E \u0431\u0430\u0440\u0438\u0445"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "contact-info-area pt-100 pb-70",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "contact-info-box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "back-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "bx bx-map"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "bx bx-map"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                children: "\u0425\u0430\u044F\u0433"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                children: " \u0421\u0411\u0414, 1-\u0440 \u0445\u043E\u0440\u043E\u043E, \u043E\u043B\u0438\u043C\u043F\u044B\u043D 16-\u0440 \u0431\u0430\u0439\u0440 202 \u0442\u043E\u043E\u0442 "
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "contact-info-box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "back-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "bx bx-phone-call"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "bx bx-phone-call"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                children: "\u0425\u043E\u043B\u0431\u043E\u043E \u0431\u0430\u0440\u0438\u0445"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                children: ["\u0423\u0442\u0430\u0441: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                  href: "tel:+44457895789",
                  children: "(+976) - 7577 - 8080"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                children: ["\u0418\u043C\u044D\u0439\u043B: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                  href: "mailto:hello@mibix.com",
                  children: "info@edu.mn"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "contact-info-box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "back-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "bx bx-time-five"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "bx bx-time-five"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                children: "\u0426\u0430\u0433\u0438\u0439\u043D \u0445\u0443\u0432\u0430\u0430\u0440\u044C"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                children: "\u0414\u0430\u0432\u0430\u0430 - \u0411\u0430\u0430\u0441\u0430\u043D: 08:30 - 17:30"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                children: "\u0411\u044F\u043C\u0431\u0430 & \u041D\u044F\u043C: \u0410\u043C\u0430\u0440\u043D\u0430"
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Contact_ContactForm__WEBPACK_IMPORTED_MODULE_4__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      id: "map",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("iframe", {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459418!3d40.74117737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s175%205th%20Ave%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2sbd!4v1588746137032!5m2!1sen!2sbd"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./resources/assets/web/pages/home.js":
/*!********************************************!*\
  !*** ./resources/assets/web/pages/home.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_HomeDemoSix_MainBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HomeDemoSix/MainBanner */ "./resources/assets/web/components/HomeDemoSix/MainBanner.js");
/* harmony import */ var _components_HomeDemoSix_AboutSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HomeDemoSix/AboutSection */ "./resources/assets/web/components/HomeDemoSix/AboutSection.js");
/* harmony import */ var _components_Common_ServicesCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/ServicesCard */ "./resources/assets/web/components/Common/ServicesCard.js");
/* harmony import */ var _components_Common_WhatWeDo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/WhatWeDo */ "./resources/assets/web/components/Common/WhatWeDo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_HomeDemoSix_MainBanner__WEBPACK_IMPORTED_MODULE_1__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_HomeDemoSix_AboutSection__WEBPACK_IMPORTED_MODULE_2__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Common_ServicesCard__WEBPACK_IMPORTED_MODULE_3__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Common_WhatWeDo__WEBPACK_IMPORTED_MODULE_4__.default, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./resources/assets/web/pages/index.js":
/*!*********************************************!*\
  !*** ./resources/assets/web/pages/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_App_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_App/Navbar */ "./resources/assets/web/components/_App/Navbar.js");
/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_App/Footer */ "./resources/assets/web/components/_App/Footer.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network */ "./resources/assets/web/pages/network.js");
/* harmony import */ var _bmtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bmtt */ "./resources/assets/web/pages/bmtt.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ "./resources/assets/web/pages/home.js");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system */ "./resources/assets/web/pages/system.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service */ "./resources/assets/web/pages/service.js");
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news */ "./resources/assets/web/pages/news.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact */ "./resources/assets/web/pages/contact.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _bmttContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bmttContent */ "./resources/assets/web/pages/bmttContent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");















var App = function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.HashRouter, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_App_Navbar__WEBPACK_IMPORTED_MODULE_1__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Switch, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
          path: "/bmtt",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_bmtt__WEBPACK_IMPORTED_MODULE_4__.default, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
          path: "/network",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_network__WEBPACK_IMPORTED_MODULE_3__.default, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
          path: "/system",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_system__WEBPACK_IMPORTED_MODULE_6__.default, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
          path: "/service",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_service__WEBPACK_IMPORTED_MODULE_7__.default, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
          path: "/news",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_news__WEBPACK_IMPORTED_MODULE_8__.default, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
          path: "/contact",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_contact__WEBPACK_IMPORTED_MODULE_9__.default, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
          path: "/",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_home__WEBPACK_IMPORTED_MODULE_5__.default, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_App_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {})]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./resources/assets/web/pages/network.js":
/*!***********************************************!*\
  !*** ./resources/assets/web/pages/network.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_App_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_App/Navbar */ "./resources/assets/web/components/_App/Navbar.js");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/PageBanner */ "./resources/assets/web/components/Common/PageBanner.js");
/* harmony import */ var _networkContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./networkContent */ "./resources/assets/web/pages/networkContent.js");
/* harmony import */ var _components_AboutUs_OurHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutUs/OurHistory */ "./resources/assets/web/components/AboutUs/OurHistory.js");
/* harmony import */ var _components_Common_OurTeamStyleTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/OurTeamStyleTwo */ "./resources/assets/web/components/Common/OurTeamStyleTwo.js");
/* harmony import */ var _components_Common_TestimonialStyleTwo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/TestimonialStyleTwo */ "./resources/assets/web/components/Common/TestimonialStyleTwo.js");
/* harmony import */ var _components_Common_Partner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/Partner */ "./resources/assets/web/components/Common/Partner.js");
/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/_App/Footer */ "./resources/assets/web/components/_App/Footer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var AboutUsNetwork = function AboutUsNetwork() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__.default, {
      pageTitle: "\u041C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u04AF\u043B\u0436\u044D\u044D"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_networkContent__WEBPACK_IMPORTED_MODULE_3__.default, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUsNetwork);

/***/ }),

/***/ "./resources/assets/web/pages/networkContent.js":
/*!******************************************************!*\
  !*** ./resources/assets/web/pages/networkContent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var AboutContent = function AboutContent() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "about-area ptb-100",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "about-image",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: "/images/about-img3.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "about-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "sub-title",
                children: "\u041C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u04AF\u043B\u0436\u044D\u044D"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                children: " \u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0438\u0439 \u0434\u044D\u0434 \u0431\u04AF\u0442\u044D\u0446 "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "2000 \u043E\u043D\u0434 \u201C\u042D\u0440\u0434\u044D\u043C\u043D\u044D\u0442 \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0438\u0439 \u0442\u04E9\u0432\u201D, 2012 \u043E\u043D\u0434 \u201C\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0434\u0430\u0442\u0430 \u0442\u04E9\u0432, \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0438\u0439 \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0442\u04E9\u0432\u201D-\u0438\u0439\u0433 \u0442\u0443\u0441 \u0442\u0443\u0441 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u0441\u043D\u0430\u0430\u0440 \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0438\u0439 \u0441\u0443\u0443\u0440\u044C \u0442\u0430\u0432\u0438\u0433\u0434\u0441\u0430\u043D. \u0422\u04AF\u04AF\u043D\u0447\u043B\u044D\u043D \u0443\u043B\u0441\u044B\u043D \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0445\u04E9\u0440\u04E9\u043D\u0433\u04E9 \u043E\u0440\u0443\u0443\u043B\u0430\u043B\u0442, \u043E\u043B\u043E\u043D \u0443\u043B\u0441\u044B\u043D \u0431\u0430\u043D\u043A, \u0441\u0430\u043D\u0445\u04AF\u04AF\u0433\u0438\u0439\u043D \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u0430, \u0433\u0430\u0434\u0430\u0430\u0434 \u043E\u0440\u043D\u044B \u0437\u044D\u044D\u043B, \u0442\u0443\u0441\u043B\u0430\u043C\u0436\u0438\u0439\u043D \u0441\u0430\u043D\u0445\u04AF\u04AF\u0436\u0438\u043B\u0442\u044D\u044D\u0440 \u0442\u04E9\u0440\u0438\u0439\u043D \u04E9\u043C\u0447\u0438\u0439\u043D \u0435\u0440\u04E9\u043D\u0445\u0438\u0439 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0443\u0440\u0433\u0443\u0443\u043B\u0438\u0439\u0433 \u0445\u043E\u043B\u0431\u043E\u0441\u043E\u043D \u0448\u0438\u043B\u044D\u043D \u043A\u0430\u0431\u0435\u043B\u0438\u0439\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u04AF\u043B\u0436\u044D\u044D\u0433 2007-2017 \u043E\u043D\u0434 \u04AF\u04AF\u0441\u0433\u044D\u0441\u043D\u044D\u044D\u0440 \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0443\u0440\u0441\u0433\u0430\u043B, \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u044B\u043D \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u044D\u043D\u0438\u0439 \u0430\u0447\u0430\u0430\u043B\u043B\u044B\u0433 \u0434\u0430\u0430\u043D \u0430\u0436\u0438\u043B\u043B\u0430\u0445 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439\u043D \u0434\u044D\u0434 \u0431\u04AF\u0442\u044D\u0446 \u0431\u04AF\u0440\u0434\u0441\u044D\u043D \u044E\u043C."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
                className: "funfacts-list",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "list",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                      className: "flaticon-menu-1"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                      children: "47%"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      children: "\u0425\u043E\u043B\u0431\u043E\u0433\u0434\u0441\u043E\u043D"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "list",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                      className: "flaticon-web-settings"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                      children: "38%"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      children: "\u0413\u044D\u043C\u0442\u044D\u043B\u0442\u044D\u0439"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "list",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                      className: "flaticon-conversation"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                      children: "15%"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      children: "\u0428\u0438\u043D\u044D\u044D\u0440 \u0445\u043E\u043B\u0431\u043E\u0445"
                    })]
                  })
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-12 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "about-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "\u041E\u0434\u043E\u043E\u0433\u0438\u0439\u043D \u0431\u0430\u0439\u0434\u043B\u0430\u0430\u0440 /2021 \u043E\u043D\u044B 1 \u0441\u0430\u0440/ \u0442\u04E9\u0440\u0438\u0439\u043D \u04E9\u043C\u0447\u0438\u0439\u043D \u0435\u0440\u04E9\u043D\u0445\u0438\u0439 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0443\u0440\u0433\u0443\u0443\u043B\u0438\u0439\u043D 47% \u043D\u044C \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B, \u0445\u0430\u0440\u0438\u043B\u0446\u0430\u0430 \u0445\u043E\u043B\u0431\u043E\u043E\u043D\u044B \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0434 \u0445\u044D\u0432\u0438\u0439\u043D \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0442\u0430\u0439\u0433\u0430\u0430\u0440 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u043E\u043E\u0434 \u0431\u0430\u0439\u043D\u0430."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "\u0423\u043B\u0441 \u043E\u0440\u043D\u0443\u0443\u0434 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B, \u044D\u0440\u0434\u044D\u043C \u0448\u0438\u043D\u0436\u0438\u043B\u0433\u044D\u044D, \u0442\u0443\u0440\u0448\u0438\u043B\u0442 \u0441\u0443\u0434\u0430\u043B\u0433\u0430\u0430\u043D\u044B \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u043A \u0441\u04AF\u043B\u0436\u044D\u044D\u0442\u044D\u0439 \u0431\u0430\u0439\u0434\u0430\u0433 \u0431\u04E9\u0433\u04E9\u04E9\u0434 \u043E\u043B\u043E\u043D \u0443\u043B\u0441\u044B\u043D \u043D\u044D\u0440\u0448\u0438\u043B \u043D\u044C NREN - National Research and Education Network \u044E\u043C. \u041C\u0430\u043D\u0430\u0439 \u0443\u043B\u0441\u044B\u043D \u0445\u0443\u0432\u044C\u0434 NREN -\u0438\u0439 \u0447\u0438\u0433 \u04AF\u04AF\u0440\u0433\u0438\u0439\u0433 \u0411\u041C\u0422\u0422 \u0445\u0430\u0440\u0438\u0443\u0446\u0434\u0430\u0433 \u0431\u04E9\u0433\u04E9\u04E9\u0434 2020 \u043E\u043D\u044B 10 \u0441\u0430\u0440\u0434 \u0410\u0437\u0438 \u043D\u043E\u043C\u0445\u043E\u043D \u0434\u0430\u043B\u0430\u0439\u043D \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B, \u0448\u0438\u043D\u0436\u043B\u044D\u0445 \u0443\u0445\u0430\u0430\u043D\u044B TEIN/Trans Euro- Asia Internet Network/ \u0441\u04AF\u043B\u0436\u044D\u044D\u0434 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u0441\u043E\u043D\u043E\u043E\u0440 24 \u0434\u044D\u0445 \u0433\u0438\u0448\u04AF\u04AF\u043D \u043E\u0440\u043E\u043D \u0431\u043E\u043B\u0441\u043E\u043D. \u041E\u0434\u043E\u043E\u0433\u043E\u043E\u0440 \u0411\u041C\u0422\u0422 \u043D\u044C 150 Mbps \u0445\u0443\u0440\u0434\u0430\u0430\u0440 TEIN \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0438\u0439 \u0425\u043E\u043D\u0433 \u041A\u043E\u043D\u0433 \u0434\u0430\u0445\u044C \u043F\u043E\u0440\u0442\u0442\u043E\u0439 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u043E\u0436 \u0431\u0430\u0439\u0433\u0430\u0430 \u044E\u043C. \u0418\u043D\u0433\u044D\u0441\u043D\u044D\u044D\u0440 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B, \u0448\u0438\u043D\u0436\u043B\u044D\u0445 \u0443\u0445\u0430\u0430\u043D\u044B \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u0430 \u0445\u043E\u043E\u0440\u043E\u043D\u0434\u044B\u043D \u043E\u043D\u043B\u0430\u0439\u043D \u0441\u0443\u0440\u0433\u0430\u043B\u0442, \u0442\u0435\u043B\u0435 \u0430\u043D\u0430\u0433\u0430\u0430\u0445 \u0443\u0445\u0430\u0430\u043D, \u044D\u0440\u0434\u044D\u043C \u0448\u0438\u043D\u0436\u0438\u043B\u0433\u044D\u044D\u043D\u0438\u0439 \u0442\u0443\u0440\u0448\u0438\u043B\u0442, \u0437\u0430\u0439\u043D\u044B \u0442\u0430\u043D\u0434\u0430\u043D \u0441\u0443\u0434\u043B\u0430\u043B \u0437\u044D\u0440\u044D\u0433 \u0431\u043E\u0434\u0438\u0442 \u0446\u0430\u0433 \u0445\u0443\u0433\u0430\u0446\u0430\u0430\u043D\u044B \u0431\u043E\u043B\u043E\u043D \u043D\u0430\u0439\u0434\u0432\u0430\u0440\u0442\u0430\u0439, \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0442 \u04E9\u043D\u0434\u04E9\u0440 \u0445\u0443\u0440\u0434\u0430\u0430\u0440 \u0445\u0430\u043C\u0442\u0430\u0440\u0441\u0430\u043D \u0442\u04E9\u0441\u043B\u0438\u0439\u0433 \u0445\u044D\u0440\u044D\u0433\u0436\u04AF\u04AF\u043B\u044D\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0442\u043E\u0439 \u0431\u043E\u043B\u0441\u043E\u043D."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "\u0423\u043B\u0441 \u043E\u0440\u043D\u0443\u0443\u0434 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B, \u044D\u0440\u0434\u044D\u043C \u0448\u0438\u043D\u0436\u0438\u043B\u0433\u044D\u044D, \u0442\u0443\u0440\u0448\u0438\u043B\u0442 \u0441\u0443\u0434\u0430\u043B\u0433\u0430\u0430\u043D\u044B \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u043A \u0441\u04AF\u043B\u0436\u044D\u044D\u0442\u044D\u0439 \u0431\u0430\u0439\u0434\u0430\u0433 \u0431\u04E9\u0433\u04E9\u04E9\u0434 \u043E\u043B\u043E\u043D \u0443\u043B\u0441\u044B\u043D \u043D\u044D\u0440\u0448\u0438\u043B \u043D\u044C NREN - National Research and Education Network \u044E\u043C. \u041C\u0430\u043D\u0430\u0439 \u0443\u043B\u0441\u044B\u043D \u0445\u0443\u0432\u044C\u0434 NREN -\u0438\u0439 \u0447\u0438\u0433 \u04AF\u04AF\u0440\u0433\u0438\u0439\u0433 \u0411\u041C\u0422\u0422 \u0445\u0430\u0440\u0438\u0443\u0446\u0434\u0430\u0433 \u0431\u04E9\u0433\u04E9\u04E9\u0434 2020 \u043E\u043D\u044B 10 \u0441\u0430\u0440\u0434 \u0410\u0437\u0438 \u043D\u043E\u043C\u0445\u043E\u043D \u0434\u0430\u043B\u0430\u0439\u043D \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B, \u0448\u0438\u043D\u0436\u043B\u044D\u0445 \u0443\u0445\u0430\u0430\u043D\u044B TEIN/Trans Euro- Asia Internet Network/ \u0441\u04AF\u043B\u0436\u044D\u044D\u0434 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u0441\u043E\u043D\u043E\u043E\u0440 24 \u0434\u044D\u0445 \u0433\u0438\u0448\u04AF\u04AF\u043D \u043E\u0440\u043E\u043D \u0431\u043E\u043B\u0441\u043E\u043D. \u041E\u0434\u043E\u043E\u0433\u043E\u043E\u0440 \u0411\u041C\u0422\u0422 \u043D\u044C 150 Mbps \u0445\u0443\u0440\u0434\u0430\u0430\u0440 TEIN \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0438\u0439 \u0425\u043E\u043D\u0433 \u041A\u043E\u043D\u0433 \u0434\u0430\u0445\u044C \u043F\u043E\u0440\u0442\u0442\u043E\u0439 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u043E\u0436 \u0431\u0430\u0439\u0433\u0430\u0430 \u044E\u043C. \u0418\u043D\u0433\u044D\u0441\u043D\u044D\u044D\u0440 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B, \u0448\u0438\u043D\u0436\u043B\u044D\u0445 \u0443\u0445\u0430\u0430\u043D\u044B \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u0430 \u0445\u043E\u043E\u0440\u043E\u043D\u0434\u044B\u043D \u043E\u043D\u043B\u0430\u0439\u043D \u0441\u0443\u0440\u0433\u0430\u043B\u0442, \u0442\u0435\u043B\u0435 \u0430\u043D\u0430\u0433\u0430\u0430\u0445 \u0443\u0445\u0430\u0430\u043D, \u044D\u0440\u0434\u044D\u043C \u0448\u0438\u043D\u0436\u0438\u043B\u0433\u044D\u044D\u043D\u0438\u0439 \u0442\u0443\u0440\u0448\u0438\u043B\u0442, \u0437\u0430\u0439\u043D\u044B \u0442\u0430\u043D\u0434\u0430\u043D \u0441\u0443\u0434\u043B\u0430\u043B \u0437\u044D\u0440\u044D\u0433 \u0431\u043E\u0434\u0438\u0442 \u0446\u0430\u0433 \u0445\u0443\u0433\u0430\u0446\u0430\u0430\u043D\u044B \u0431\u043E\u043B\u043E\u043D \u043D\u0430\u0439\u0434\u0432\u0430\u0440\u0442\u0430\u0439, \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0442 \u04E9\u043D\u0434\u04E9\u0440 \u0445\u0443\u0440\u0434\u0430\u0430\u0440 \u0445\u0430\u043C\u0442\u0430\u0440\u0441\u0430\u043D \u0442\u04E9\u0441\u043B\u0438\u0439\u0433 \u0445\u044D\u0440\u044D\u0433\u0436\u04AF\u04AF\u043B\u044D\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0442\u043E\u0439 \u0431\u043E\u043B\u0441\u043E\u043D."
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutContent);

/***/ }),

/***/ "./resources/assets/web/pages/news.js":
/*!********************************************!*\
  !*** ./resources/assets/web/pages/news.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_App_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_App/Navbar */ "./resources/assets/web/components/_App/Navbar.js");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/PageBanner */ "./resources/assets/web/components/Common/PageBanner.js");
/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/_App/Footer */ "./resources/assets/web/components/_App/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var News = function News() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__.default, {
      pageTitle: "\u041C\u044D\u0434\u044D\u044D, \u041C\u044D\u0434\u044D\u044D\u043B\u044D\u043B"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "blog-area bg-f9f9f9 ptb-100",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "single-blog-post",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                  href: "/single-blog-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                    className: "d-block",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: "/images/blog/blog-img1.jpg",
                      alt: "image"
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                    href: "/single-blog-1",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      children: "Digital Marketing Agency Blogs You Should Read"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: "/images/user1.jpg",
                    alt: "image"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
                      children: "David Smith"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "Jun 15, 2020"
                    })]
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "single-blog-post",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                  href: "/single-blog-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                    className: "d-block",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: "/images/blog/blog-img2.jpg",
                      alt: "image"
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                    href: "/single-blog-1",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      children: "Digital Marketing Strategies for Lead Generation"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: "/images/user2.jpg",
                    alt: "image"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
                      children: "Sarah Taylor"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "Jun 16, 2020"
                    })]
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "single-blog-post",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                  href: "/single-blog-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                    className: "d-block",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: "/images/blog/blog-img3.jpg",
                      alt: "image"
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                    href: "/single-blog-1",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      children: "Agencies Can Successfully Recover From COVID?"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: "/images/user3.jpg",
                    alt: "image"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
                      children: "Steven Gibson"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "Jun 17, 2020"
                    })]
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "single-blog-post",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                  href: "/single-blog-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                    className: "d-block",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: "/images/blog/blog-img4.jpg",
                      alt: "image"
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                    href: "/single-blog-1",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      children: "Preparing E-Commerce for the Post-COVID Bounce Back"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: "/images/user3.jpg",
                    alt: "image"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
                      children: "David Smith"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "Jun 18, 2020"
                    })]
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "single-blog-post",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                  href: "/single-blog-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                    className: "d-block",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: "/images/blog/blog-img5.jpg",
                      alt: "image"
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                    href: "/single-blog-1",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      children: "The State of Local SEO Industry Report 2020"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: "/images/user2.jpg",
                    alt: "image"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
                      children: "Sarah Taylor"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "Jun 19, 2020"
                    })]
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "single-blog-post",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                  href: "/single-blog-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                    className: "d-block",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: "/images/blog/blog-img6.jpg",
                      alt: "image"
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                    href: "/single-blog-1",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      children: "Should You Test That? When to Engage in SEO Split Tests"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: "/images/user3.jpg",
                    alt: "image"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "info",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
                      children: "Sarah Taylor"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "Jun 20, 2020"
                    })]
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-lg-12 col-md-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "pagination-area text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                href: "#",
                className: "prev page-numbers",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "bx bx-chevrons-left"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "page-numbers current",
                "aria-current": "page",
                children: "1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                href: "#",
                className: "page-numbers",
                children: "2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                href: "#",
                className: "page-numbers",
                children: "3"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                href: "#",
                className: "page-numbers",
                children: "4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                href: "#",
                className: "next page-numbers",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "bx bx-chevrons-right"
                })
              })]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);

/***/ }),

/***/ "./resources/assets/web/pages/service.js":
/*!***********************************************!*\
  !*** ./resources/assets/web/pages/service.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_App_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_App/Navbar */ "./resources/assets/web/components/_App/Navbar.js");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/PageBanner */ "./resources/assets/web/components/Common/PageBanner.js");
/* harmony import */ var _serviceContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceContent */ "./resources/assets/web/pages/serviceContent.js");
/* harmony import */ var _components_AboutUs_OurHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutUs/OurHistory */ "./resources/assets/web/components/AboutUs/OurHistory.js");
/* harmony import */ var _components_Common_OurTeamStyleTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/OurTeamStyleTwo */ "./resources/assets/web/components/Common/OurTeamStyleTwo.js");
/* harmony import */ var _components_Common_TestimonialStyleTwo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/TestimonialStyleTwo */ "./resources/assets/web/components/Common/TestimonialStyleTwo.js");
/* harmony import */ var _components_Common_Partner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/Partner */ "./resources/assets/web/components/Common/Partner.js");
/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/_App/Footer */ "./resources/assets/web/components/_App/Footer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var Service = function Service() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__.default, {
      pageTitle: "\u0426\u0430\u0445\u0438\u043C \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_serviceContent__WEBPACK_IMPORTED_MODULE_3__.default, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);

/***/ }),

/***/ "./resources/assets/web/pages/serviceContent.js":
/*!******************************************************!*\
  !*** ./resources/assets/web/pages/serviceContent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var ServiceContent = function ServiceContent() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "portfolio-details-area ptb-100",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "col-lg-12",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "about-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "sub-title",
              children: "\u0446\u0430\u0445\u0438\u043C \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
              children: "\u0418\u0440\u0433\u044D\u0434 \u043E\u043B\u043E\u043D \u043D\u0438\u0439\u0442\u044D\u0434 \u0437\u043E\u0440\u0438\u0443\u043B\u0441\u0430\u043D \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u0446\u0430\u0445\u0438\u043C \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              children: "\u0418\u0440\u0433\u044D\u0434, \u043E\u043B\u043E\u043D \u043D\u0438\u0439\u0442\u044D\u0434 \u0445\u0430\u043D\u0434\u0441\u0430\u043D \u0417\u0430\u0441\u0433\u0438\u0439\u043D \u0433\u0430\u0437\u0430\u0440 \u0445\u043E\u043E\u0440\u043E\u043D\u0434\u044B\u043D \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0442\u044D\u0442\u0433\u044D\u043B\u0433\u0438\u0439\u043D \u04E9\u0440\u0433\u04E9\u0434\u04E9\u043B \u0438\u043B\u0433\u044D\u044D\u0445, 1-\u0440 \u0430\u043D\u0433\u0438\u0439\u043D \u044D\u043B\u0441\u044D\u043B\u0442\u0438\u0439\u043D \u0446\u0430\u0445\u0438\u043C \u0431\u04AF\u0440\u0442\u0433\u044D\u043B, \u0446\u0430\u0445\u0438\u043C \u0441\u0443\u0440\u0430\u0445 \u0431\u0438\u0447\u0438\u0433, \u0442\u0435\u043B\u0435, \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 \u0445\u0438\u0447\u044D\u044D\u043B\u04AF\u04AF\u0434, \u0441\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0438\u0439\u043D \u0441\u0443\u0440\u043B\u0430\u0433\u044B\u043D \u04AF\u043D\u044D\u043B\u0433\u044D\u044D, \u0438\u0440\u0446, \u0441\u0443\u0440\u0433\u0443\u0443\u043B\u044C \u0446\u044D\u0446\u044D\u0440\u043B\u044D\u0433\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0430\u0432\u0430\u0445 \u0431\u043E\u043B\u043E\u043C\u0436 \u0431\u04AF\u0445\u0438\u0439 \u044D\u0446\u044D\u0433 \u044D\u0445\u0438\u0439\u043D \u0432\u0435\u0431, \u043C\u043E\u0431\u0430\u0439\u043B \u0430\u043F\u043B\u0438\u043A\u044D\u0439\u0448\u043D\u04AF\u04AF\u0434 \u0431\u043E\u043B\u043E\u043D \u0442\u04E9\u0440\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0425\u0423\u0420 \u0441\u0438\u0441\u0442\u0435\u043C\u044D\u044D\u0440 \u0434\u0430\u043C\u0436\u0443\u0443\u043B\u0430\u043D \u0422\u04E9\u0440\u0438\u0439\u043D \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D\u043D\u0438\u0439 \u0446\u0430\u0445\u0438\u043C /\u0422\u04AE\u0426/ \u043C\u0430\u0448\u0438\u043D, \u0422\u04E9\u0440\u0438\u0439\u043D \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D\u043D\u0438\u0439 \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u043F\u043E\u0440\u0442\u0430\u043B /e-mongolia.mn/-\u0430\u0430\u0441 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0431\u0430\u0440\u0438\u043C\u0442 \u0431\u0438\u0447\u0433\u0438\u0439\u043D \u043B\u0430\u0432\u043B\u0430\u0433\u0430\u0430 \u043E\u043B\u0433\u043E\u0445, \u0422\u0430\u0442\u0432\u0430\u0440\u044B\u043D \u0435\u0440\u04E9\u043D\u0445\u0438\u0439 \u0433\u0430\u0437\u0440\u044B\u043D \u0426\u0430\u0445\u0438\u043C \u0442\u0430\u0442\u0432\u0430\u0440\u044B\u043D \u0441\u0438\u0441\u0442\u0435\u043C /etax.mta.mn/-\u044D\u044D\u0440 \u0434\u0430\u043C\u0436\u0443\u0443\u043B\u0430\u043D \u043E\u044E\u0443\u0442\u043D\u044B \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0442\u04E9\u043B\u0431\u04E9\u0440\u0438\u0439\u043D \u0445\u04E9\u043D\u0433\u04E9\u043B\u04E9\u043B\u0442\u04E9\u0434 \u0445\u0430\u043C\u0440\u0430\u0433\u0434\u0430\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0431\u04AF\u0440\u0434\u04AF\u04AF\u043B\u044D\u0445 \u0437\u044D\u0440\u044D\u0433 \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D\u0433 \u043D\u044D\u0432\u0442\u0440\u04AF\u04AF\u043B\u044D\u044D\u0434 \u0431\u0430\u0439\u043D\u0430."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "portfolio-details-desc",
            style: {
              marginTop: "30px"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-12 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    children: "\u0411\u041C\u0422\u0422 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u0430\u0433\u0434\u0441\u0430\u043D\u0430\u0430\u0441 \u0445\u043E\u0439\u0448:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
                      children: "\u0428\u0438\u043D\u044D\u044D\u0440 \u043D\u044D\u0432\u0442\u0440\u04AF\u04AF\u043B\u0441\u044D\u043D \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0446\u0430\u0445\u0438\u043C \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "1-\u0440 \u0430\u043D\u0433\u0438\u0439\u043D \u044D\u043B\u0441\u044D\u043B\u0442\u0438\u0439\u043D \u0446\u0430\u0445\u0438\u043C \u0431\u04AF\u0440\u0442\u0433\u044D\u043B /\u041D\u0438\u0439\u0441\u043B\u044D\u043B, \u043E\u0440\u043E\u043D \u043D\u0443\u0442\u0430\u0433\u0442/"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0421\u0443\u0440\u0433\u0430\u043B\u0442 \u044D\u0440\u0445\u043B\u044D\u0445 \u0442\u0443\u0441\u0433\u0430\u0439 \u0437\u04E9\u0432\u0448\u04E9\u04E9\u0440\u043B\u0438\u0439\u043D \u0445\u04AF\u0441\u044D\u043B\u0442 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 \u0441\u0438\u0441\u0442\u0435\u043C"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0421\u04E8\u0411, \u0415\u0411\u0421, \u0418\u0414\u0421\u041A-\u0434 \u0441\u0443\u0440\u0430\u043B\u0446\u0430\u0436 \u0431\u0430\u0439\u0433\u0430\u0430 \u0441\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0438\u0439\u043D \u0442\u043E\u0434\u043E\u0440\u0445\u043E\u0439\u043B\u043E\u043B\u0442"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-12 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
                      children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u04AF\u0439\u043B \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u043D\u0434 \u043D\u044D\u0432\u0442\u0440\u04AF\u04AF\u043B\u0441\u044D\u043D \u0441\u0438\u0441\u0442\u0435\u043C"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u041D\u0430\u0441\u0430\u043D \u0442\u0443\u0440\u0448\u0438\u0439\u043D \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0431\u04AF\u0440\u0442\u0433\u044D\u043B"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0426\u0430\u0445\u0438\u043C \u0436\u0443\u0440\u043D\u0430\u043B, \u0430\u043D\u0433\u0438 \u0443\u0434\u0438\u0440\u0434\u0441\u0430\u043D \u0431\u0430\u0433\u0448\u0438\u0439\u043D \u0446\u0430\u0445\u0438\u043C \u0434\u044D\u0432\u0442\u044D\u0440"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u04E8\u0434\u0440\u0438\u0439\u043D \u0438\u0440\u0446\u0438\u0439\u043D \u0431\u04AF\u0440\u0442\u0433\u044D\u043B, \u0445\u044F\u043D\u0430\u043B\u0442 /\u0415\u0411\u0421, \u0421\u04E8\u0411, \u0411\u0421\u0423\u0413, \u041D\u0411\u0413, \u0411\u0428\u0423\u042F/"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0421\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u0442\u043E\u043E\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043B\u0442\u0438\u0439\u043D \u043C\u043E\u0431\u0430\u0439\u043B \u0430\u043F\u043B\u0438\u043A\u044D\u0439\u0448\u043D"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0422\u04E9\u0441\u0432\u0438\u0439\u043D \u0445\u04E9\u0440\u04E9\u043D\u0433\u04E9 \u043E\u0440\u0443\u0443\u043B\u0430\u043B\u0442\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B, \u0431\u0430\u0440\u0438\u043B\u0433\u044B\u043D \u0430\u0436\u043B\u044B\u043D \u044F\u0432\u0446\u044B\u043D \u0445\u044F\u043D\u0430\u043B\u0442\u044B\u043D \u043C\u043E\u0431\u0430\u0439\u043B \u0430\u043F\u043B\u0438\u043A\u044D\u0439\u0448\u043D"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0426\u0430\u0445\u0438\u043C \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B\u0433 \u0431\u0438\u0439 \u0431\u043E\u043B\u0433\u043E\u0445 \u0441\u0443\u0443\u0440\u044C \u0441\u0443\u0434\u0430\u043B\u0433\u0430\u0430, \u0442\u0443\u0440\u0448\u0438\u043B\u0442"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0431\u043E\u043B\u043E\u043D \u0441\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0438\u0439\u043D \u0446\u0430\u0445\u0438\u043C \u043D\u043E\u043C, \u0441\u0443\u0440\u0430\u0445 \u0431\u0438\u0447\u0433\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u043D \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u043B"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-12 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
                      children: "\u041C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u04AF\u043B\u0436\u044D\u044D, \u0434\u044D\u0434 \u0431\u04AF\u0442\u0446\u0438\u0439\u043D \u04E9\u0440\u0433\u04E9\u0442\u0433\u04E9\u043B"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0422\u04E9\u0440\u0438\u0439\u043D \u0431\u043E\u043B\u043E\u043D \u0431\u0443\u0441\u0430\u0434 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C, \u0441\u0430\u043D\u0442\u0430\u0439 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u043E\u0445, \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0441\u043E\u043B\u0438\u043B\u0446\u043E\u043E"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "TEIN \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B, \u0448\u0438\u043D\u0436\u043B\u044D\u0445 \u0443\u0445\u0430\u0430\u043D\u044B \u043E\u043B\u043E\u043D \u0443\u043B\u0441\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0434 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u043E\u0432"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u04AF\u043B\u0436\u044D\u044D\u0433 L3 \u0442\u04AF\u0432\u0448\u0438\u043D\u0434 \u0448\u0438\u043B\u0436\u04AF\u04AF\u043B\u044D\u0432 /MPLS/"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-12 col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    children: "\u0411\u041C\u0422\u0422 \u2013 2021 \u043E\u043D\u044B \u0442\u044D\u0440\u0433\u04AF\u04AF\u043B\u044D\u0445 \u0437\u043E\u0440\u0438\u043B\u0442"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0422\u04E9\u0440\u0438\u0439\u043D \u0431\u043E\u043B\u043E\u043D \u0431\u0443\u0441\u0430\u0434 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C, \u0441\u0430\u043D\u0442\u0430\u0439 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u043E\u0445, \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0441\u043E\u043B\u0438\u043B\u0446\u043E\u0445 /\u0422\u0410\u0417, \u0422\u04E9\u0440\u0438\u0439\u043D \u0441\u0430\u043D, \u0425\u0425\u0415\u0413, \u0413\u0418\u0425\u0413/, /\u0411\u0443\u0441\u0430\u0434 \u0421\u0423\u041C\u0421, \u0421\u0423\u0421,/"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0428\u0438\u043D\u0436\u043B\u044D\u0445 \u0443\u0445\u0430\u0430\u043D, \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u044B\u043D \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u0430 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u0443\u0443\u043B\u0430\u0445"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0422\u04E9\u0440\u0438\u0439\u043D \u0441\u0443\u0440\u0433\u0443\u0443\u043B\u044C, \u0446\u044D\u0446\u044D\u0440\u043B\u044D\u0433 \u0431\u04AF\u0440\u0438\u0439\u0433 \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u04AF\u043B\u0436\u044D\u044D\u043D\u0434 \u0445\u043E\u043B\u0431\u043E\u0445"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u0442 \u0446\u0430\u0445\u0438\u043C \u0433\u0430\u0440\u044B\u043D \u04AF\u0441\u0433\u0438\u0439\u0433 \u043D\u044D\u0432\u0442\u0440\u04AF\u04AF\u043B\u044D\u0445"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: "\u0426\u0430\u0445\u0438\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u044B\u043D \u0441\u0430\u043D \u0431\u0438\u0439 \u0431\u043E\u043B\u0433\u043E\u0445, \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0446\u0430\u0445\u0438\u043C \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u043E\u0440 \u0442\u04AF\u0433\u044D\u044D\u0445"
                    })]
                  })]
                })
              })]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceContent);

/***/ }),

/***/ "./resources/assets/web/pages/system.js":
/*!**********************************************!*\
  !*** ./resources/assets/web/pages/system.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_App_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_App/Navbar */ "./resources/assets/web/components/_App/Navbar.js");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/PageBanner */ "./resources/assets/web/components/Common/PageBanner.js");
/* harmony import */ var _systemContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./systemContent */ "./resources/assets/web/pages/systemContent.js");
/* harmony import */ var _components_AboutUs_OurHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutUs/OurHistory */ "./resources/assets/web/components/AboutUs/OurHistory.js");
/* harmony import */ var _components_Common_OurTeamStyleTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/OurTeamStyleTwo */ "./resources/assets/web/components/Common/OurTeamStyleTwo.js");
/* harmony import */ var _components_Common_TestimonialStyleTwo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/TestimonialStyleTwo */ "./resources/assets/web/components/Common/TestimonialStyleTwo.js");
/* harmony import */ var _components_Common_Partner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/Partner */ "./resources/assets/web/components/Common/Partner.js");
/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/_App/Footer */ "./resources/assets/web/components/_App/Footer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var AboutUsSystem = function AboutUsSystem() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__.default, {
      pageTitle: "\u041C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_systemContent__WEBPACK_IMPORTED_MODULE_3__.default, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUsSystem);

/***/ }),

/***/ "./resources/assets/web/pages/systemContent.js":
/*!*****************************************************!*\
  !*** ./resources/assets/web/pages/systemContent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var SystemContent = function SystemContent() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "about-area ptb-100",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "about-img",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: "/images/about-img2.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "about-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "text",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "sub-title",
                children: "\u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u04AF\u0439\u043B \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0433 \u0446\u0430\u0445\u0438\u043C\u0436\u0443\u0443\u043B\u0430\u0445, \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0441\u0430\u043D \u0431\u04AF\u0440\u0434\u04AF\u04AF\u043B\u044D\u0445, \u0438\u0440\u0433\u044D\u0434\u044D\u0434 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u044D\u044D\u0440 \u0442\u04AF\u0440\u0433\u044D\u043D \u0448\u0443\u0443\u0440\u0445\u0430\u0439 \u04AF\u0439\u043B\u0447\u043B\u044D\u0445 \u0437\u043E\u0440\u0438\u043B\u0433\u043E\u043E\u0440 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u0430 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 2013 \u043E\u043D\u043E\u043E\u0441 \u04AF\u0435 \u0448\u0430\u0442\u0442\u0430\u0439\u0433\u0430\u0430\u0440 \u0445\u04E9\u0433\u0436\u04AF\u04AF\u043B\u0436, \u0442\u04AF\u04AF\u043D\u0438\u0439\u0433 2015 \u043E\u043D\u043E\u043E\u0441 \u0435\u0440\u04E9\u043D\u0445\u0438\u0439 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u0434, 2018 \u043E\u043D\u043E\u043E\u0441 \u0441\u0443\u0440\u0433\u0443\u0443\u043B\u0438\u0439\u043D \u04E9\u043C\u043D\u04E9\u0445 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u0434, 2019 \u043E\u043D\u043E\u043E\u0441 \u0434\u044D\u044D\u0434 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u0442 \u0442\u0443\u0441 \u0442\u0443\u0441 \u043D\u044D\u0432\u0442\u0440\u04AF\u04AF\u043B\u044D\u044D\u0434 \u0431\u0430\u0439\u043D\u0430."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "\u0411\u0428\u0423\u042F-\u043D\u044B \u0445\u0430\u0440\u044C\u044F\u0430 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u0443\u0443\u0434, \u0430\u0439\u043C\u0430\u0433, \u043D\u0438\u0439\u0441\u043B\u044D\u043B, \u0434\u04AF\u04AF\u0440\u0433\u0438\u0439\u043D \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0433\u0430\u0437\u0430\u0440, \u0445\u044D\u043B\u0442\u0441\u04AF\u04AF\u0434, \u0431\u04AF\u0445 \u0448\u0430\u0442\u043D\u044B \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u0443\u0443\u0434 \u043D\u044C \u0445\u04AF\u043D\u0438\u0439 \u043D\u04E9\u04E9\u0446, \u0431\u0430\u0440\u0438\u043B\u0433\u0430 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u0430\u043C\u0436, \u0441\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447, \u0441\u0443\u0440\u043B\u0430\u0433\u044B\u043D \u04AF\u043D\u044D\u043B\u0433\u044D\u044D, \u044D\u043B\u0441\u044D\u043B\u0442, \u0448\u0438\u043B\u0436\u0438\u043B\u0442 \u0445\u04E9\u0434\u04E9\u043B\u0433\u04E9\u04E9\u043D\u0438\u0439 \u0431\u04AF\u0440\u0442\u0433\u044D\u043B \u0431\u043E\u043B\u043E\u043D \u0446\u0430\u0445\u0438\u043C \u0436\u0443\u0440\u043D\u0430\u043B \u0445\u04E9\u0442\u043B\u04E9\u0445, \u0434\u044D\u0432\u0448\u0438\u043B\u0442, \u0442\u04E9\u0433\u0441\u04E9\u043B\u0442, \u0443\u043B\u0441\u044B\u043D \u0448\u0430\u043B\u0433\u0430\u043B\u0442, \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0431\u0438\u0447\u0438\u0433 \u0431\u0430\u0440\u0438\u043C\u0442 \u043E\u043B\u0433\u043E\u0445, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A \u0442\u0430\u0439\u043B\u0430\u043D \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u0443\u0443\u043B\u0430\u0445 \u04AF\u0439\u043B \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0433 \u201C\u0411\u043E\u043B\u043E\u0432\u0441\u0440\u043E\u043B\u044B\u043D \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u201D /\u0411\u0421\u041C\u0421/ -\u0438\u0439\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D \u0445\u04E9\u0442\u043B\u04E9\u043D \u044F\u0432\u0443\u0443\u043B\u0436 \u0431\u0430\u0439\u043D\u0430."
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-12 col-md-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "about-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                children: "2020-2021 \u043E\u043D\u044B \u0445\u0438\u0447\u044D\u044D\u043B\u0438\u0439\u043D \u0436\u0438\u043B\u0438\u0439\u043D \u0431\u0430\u0439\u0434\u043B\u0430\u0430\u0440 \u0411\u0421\u041C\u0421 -\u0434 \u04E9\u043C\u0447\u0438\u0439\u043D \u0431\u04AF\u0445 \u0445\u044D\u043B\u0431\u044D\u0440\u0438\u0439\u043D 2\u2019470 \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u043B\u0430\u0433\u0430, 92\u2019193 \u0431\u0430\u0433\u0448 \u0430\u0436\u0438\u043B\u0442\u0430\u043D, 1\u2019078\u2019585 \u0441\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0431\u04AF\u0440\u0442\u0433\u044D\u043B\u0442\u044D\u0439 \u0431\u0430\u0439\u043D\u0430. \u0411\u0421\u041C\u0421 -\u0438\u0439\u0433 \u0441\u0430\u043B\u0431\u0430\u0440\u044B\u043D 65 \u043C\u044F\u043D\u0433\u0430\u043D \u0430\u043B\u0431\u0430\u043D \u0445\u0430\u0430\u0433\u0447 \u0431\u0430\u0439\u043D\u0433\u044B\u043D \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u0430\u0448\u0438\u0433\u043B\u0430\u0434\u0430\u0433 \u0431\u04E9\u0433\u04E9\u04E9\u0434 \u044D\u0446\u044D\u0433 \u044D\u0445\u0438\u0439\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 40 \u043C\u044F\u043D\u0433\u0430 \u0433\u0430\u0440\u0443\u0439, \u0417\u0430\u0441\u0433\u0438\u0439\u043D \u0433\u0430\u0437\u0430\u0440 \u0445\u043E\u043E\u0440\u043E\u043D\u0434\u044B\u043D \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0442\u044D\u0442\u0433\u044D\u043B\u0433\u0438\u0439\u043D \u04E9\u0440\u0433\u04E9\u0434\u04E9\u043B \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u0433 8 \u043C\u044F\u043D\u0433\u0430 \u0433\u0430\u0440\u0443\u0439 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u0433\u0447 \u0431\u04AF\u0440\u0442\u0433\u044D\u043B\u0442\u044D\u0439\u0433\u044D\u044D\u0440 \u0430\u0448\u0438\u0433\u043B\u0430\u0436 \u0431\u0430\u0439\u043D\u0430."
              })
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemContent);

/***/ }),

/***/ "./resources/assets/web/utils/baseUrl.js":
/*!***********************************************!*\
  !*** ./resources/assets/web/utils/baseUrl.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var baseUrl =  false ? 0 : 'http://localhost:3000';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);

/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBrowserHistory": () => (/* binding */ createBrowserHistory),
/* harmony export */   "createHashHistory": () => (/* binding */ createHashHistory),
/* harmony export */   "createMemoryHistory": () => (/* binding */ createMemoryHistory),
/* harmony export */   "createLocation": () => (/* binding */ createLocation),
/* harmony export */   "locationsAreEqual": () => (/* binding */ locationsAreEqual),
/* harmony export */   "parsePath": () => (/* binding */ parsePath),
/* harmony export */   "createPath": () => (/* binding */ createPath)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0,resolve_pathname__WEBPACK_IMPORTED_MODULE_1__.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0,value_equal__WEBPACK_IMPORTED_MODULE_2__.default)(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(prompt == null, 'A history supports only one prompt at a time') : 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__.default)(false, 'Browser history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__.default)(false, 'Hash history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Hash history cannot push state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Hash history cannot replace state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired), _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0__.createContext || createReactContext;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./resources/assets/web/scss/style.scss":
/*!**********************************************!*\
  !*** ./resources/assets/web/scss/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");exports.__esModule=true;exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));var _router=__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");var _router2=__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");var _useIntersection=__webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");const prefetched={};function prefetch(router,href,as,options){if(typeof window==='undefined'||!router)return;if(!(0,_router.isLocalURL)(href))return;// Prefetch the JSON page if asked (only in the client)
// We need to handle a prefetch error here since we may be
// loading with priority which can reject but we don't
// want to force navigation since this is only a prefetch
router.prefetch(href,as,options).catch(err=>{if(true){// rethrow to show invalid URL errors
throw err;}});const curLocale=options&&typeof options.locale!=='undefined'?options.locale:router&&router.locale;// Join on an invalid URI character
prefetched[href+'%'+as+(curLocale?'%'+curLocale:'')]=true;}function isModifiedEvent(event){const{target}=event.currentTarget;return target&&target!=='_self'||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||// triggers resource download
event.nativeEvent&&event.nativeEvent.which===2;}function linkClicked(e,router,href,as,replace,shallow,scroll,locale){const{nodeName}=e.currentTarget;if(nodeName==='A'&&(isModifiedEvent(e)||!(0,_router.isLocalURL)(href))){// ignore click for browser’s default behavior
return;}e.preventDefault();//  avoid scroll for urls with anchor refs
if(scroll==null){scroll=as.indexOf('#')<0;}// replace state instead of push if prop is present
router[replace?'replace':'push'](href,as,{shallow,locale,scroll}).then(success=>{if(!success)return;if(scroll){// FIXME: proper route announcing at Router level, not Link:
document.body.focus();}});}function Link(props){if(true){function createPropError(args){return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.`+(typeof window!=='undefined'?"\nOpen your browser's console to view the Component stack trace.":''));}// TypeScript trick for type-guarding:
const requiredPropsGuard={href:true};const requiredProps=Object.keys(requiredPropsGuard);requiredProps.forEach(key=>{if(key==='href'){if(props[key]==null||typeof props[key]!=='string'&&typeof props[key]!=='object'){throw createPropError({key,expected:'`string` or `object`',actual:props[key]===null?'null':typeof props[key]});}}else{// TypeScript trick for type-guarding:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _=key;}});// TypeScript trick for type-guarding:
const optionalPropsGuard={as:true,replace:true,scroll:true,shallow:true,passHref:true,prefetch:true,locale:true};const optionalProps=Object.keys(optionalPropsGuard);optionalProps.forEach(key=>{const valType=typeof props[key];if(key==='as'){if(props[key]&&valType!=='string'&&valType!=='object'){throw createPropError({key,expected:'`string` or `object`',actual:valType});}}else if(key==='locale'){if(props[key]&&valType!=='string'){throw createPropError({key,expected:'`string`',actual:valType});}}else if(key==='replace'||key==='scroll'||key==='shallow'||key==='passHref'||key==='prefetch'){if(props[key]!=null&&valType!=='boolean'){throw createPropError({key,expected:'`boolean`',actual:valType});}}else{// TypeScript trick for type-guarding:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _=key;}});// This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
// eslint-disable-next-line react-hooks/rules-of-hooks
const hasWarned=_react.default.useRef(false);if(props.prefetch&&!hasWarned.current){hasWarned.current=true;console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');}}const p=props.prefetch!==false;const router=(0,_router2.useRouter)();const pathname=router&&router.pathname||'/';const{href,as}=_react.default.useMemo(()=>{const[resolvedHref,resolvedAs]=(0,_router.resolveHref)(pathname,props.href,true);return{href:resolvedHref,as:props.as?(0,_router.resolveHref)(pathname,props.as):resolvedAs||resolvedHref};},[pathname,props.href,props.as]);let{children,replace,shallow,scroll,locale}=props;// Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
if(typeof children==='string'){children=/*#__PURE__*/_react.default.createElement("a",null,children);}// This will return the first child, if multiple are provided it will throw an error
const child=_react.Children.only(children);const childRef=child&&typeof child==='object'&&child.ref;const[setIntersectionRef,isVisible]=(0,_useIntersection.useIntersection)({rootMargin:'200px'});const setRef=_react.default.useCallback(el=>{setIntersectionRef(el);if(childRef){if(typeof childRef==='function')childRef(el);else if(typeof childRef==='object'){childRef.current=el;}}},[childRef,setIntersectionRef]);(0,_react.useEffect)(()=>{const shouldPrefetch=isVisible&&p&&(0,_router.isLocalURL)(href);const curLocale=typeof locale!=='undefined'?locale:router&&router.locale;const isPrefetched=prefetched[href+'%'+as+(curLocale?'%'+curLocale:'')];if(shouldPrefetch&&!isPrefetched){prefetch(router,href,as,{locale:curLocale});}},[as,href,isVisible,locale,p,router]);const childProps={ref:setRef,onClick:e=>{if(child.props&&typeof child.props.onClick==='function'){child.props.onClick(e);}if(!e.defaultPrevented){linkClicked(e,router,href,as,replace,shallow,scroll,locale);}}};childProps.onMouseEnter=e=>{if(!(0,_router.isLocalURL)(href))return;if(child.props&&typeof child.props.onMouseEnter==='function'){child.props.onMouseEnter(e);}prefetch(router,href,as,{priority:true});};// If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
// defined, we specify the current 'href', so that repetition is not needed by the user
if(props.passHref||child.type==='a'&&!('href'in child.props)){const curLocale=typeof locale!=='undefined'?locale:router&&router.locale;// we only render domain locales if we are currently on a domain locale
// so that locale links are still visitable in development/preview envs
const localeDomain=router&&router.isLocaleDomain&&(0,_router.getDomainLocale)(as,curLocale,router&&router.locales,router&&router.domainLocales);childProps.href=localeDomain||(0,_router.addBasePath)((0,_router.addLocale)(as,curLocale,router&&router.defaultLocale));}return/*#__PURE__*/_react.default.cloneElement(child,childProps);}var _default=Link;exports.default=_default;
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
exports.__esModule=true;exports.removePathTrailingSlash=removePathTrailingSlash;exports.normalizePathTrailingSlash=void 0;/**
 * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
 */function removePathTrailingSlash(path){return path.endsWith('/')&&path!=='/'?path.slice(0,-1):path;}/**
 * Normalizes the trailing slash of a path according to the `trailingSlash` option
 * in `next.config.js`.
 */const normalizePathTrailingSlash=process.env.__NEXT_TRAILING_SLASH?path=>{if(/\.[^/]+\/?$/.test(path)){return removePathTrailingSlash(path);}else if(path.endsWith('/')){return path;}else{return path+'/';}}:removePathTrailingSlash;exports.normalizePathTrailingSlash=normalizePathTrailingSlash;
//# sourceMappingURL=normalize-trailing-slash.js.map

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
exports.__esModule=true;exports.cancelIdleCallback=exports.requestIdleCallback=void 0;const requestIdleCallback=typeof self!=='undefined'&&self.requestIdleCallback||function(cb){let start=Date.now();return setTimeout(function(){cb({didTimeout:false,timeRemaining:function(){return Math.max(0,50-(Date.now()-start));}});},1);};exports.requestIdleCallback=requestIdleCallback;const cancelIdleCallback=typeof self!=='undefined'&&self.cancelIdleCallback||function(id){return clearTimeout(id);};exports.cancelIdleCallback=cancelIdleCallback;
//# sourceMappingURL=request-idle-callback.js.map

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.markAssetError=markAssetError;exports.isAssetError=isAssetError;exports.getClientBuildManifest=getClientBuildManifest;exports.default=void 0;var _getAssetPathFromRoute=_interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));var _requestIdleCallback=__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY=3800;function withFuture(key,map,generator){let entry=map.get(key);if(entry){if('future'in entry){return entry.future;}return Promise.resolve(entry);}let resolver;const prom=new Promise(resolve=>{resolver=resolve;});map.set(key,entry={resolve:resolver,future:prom});return generator?// eslint-disable-next-line no-sequences
generator().then(value=>(resolver(value),value)):prom;}function hasPrefetch(link){try{link=document.createElement('link');return(// detect IE11 since it supports prefetch but isn't detected
// with relList.support
!!window.MSInputMethodContext&&!!document.documentMode||link.relList.supports('prefetch'));}catch(_unused){return false;}}const canPrefetch=hasPrefetch();function prefetchViaDom(href,as,link){return new Promise((res,rej)=>{if(document.querySelector(`link[rel="prefetch"][href^="${href}"]`)){return res();}link=document.createElement('link');// The order of property assignment here is intentional:
if(as)link.as=as;link.rel=`prefetch`;link.crossOrigin=process.env.__NEXT_CROSS_ORIGIN;link.onload=res;link.onerror=rej;// `href` should always be last:
link.href=href;document.head.appendChild(link);});}const ASSET_LOAD_ERROR=Symbol('ASSET_LOAD_ERROR');// TODO: unexport
function markAssetError(err){return Object.defineProperty(err,ASSET_LOAD_ERROR,{});}function isAssetError(err){return err&&ASSET_LOAD_ERROR in err;}function appendScript(src,script){return new Promise((resolve,reject)=>{script=document.createElement('script');// The order of property assignment here is intentional.
// 1. Setup success/failure hooks in case the browser synchronously
//    executes when `src` is set.
script.onload=resolve;script.onerror=()=>reject(markAssetError(new Error(`Failed to load script: ${src}`)));// 2. Configure the cross-origin attribute before setting `src` in case the
//    browser begins to fetch.
script.crossOrigin=process.env.__NEXT_CROSS_ORIGIN;// 3. Finally, set the source and inject into the DOM in case the child
//    must be appended for fetching to start.
script.src=src;document.body.appendChild(script);});}// Resolve a promise that times out after given amount of milliseconds.
function resolvePromiseWithTimeout(p,ms,err){return new Promise((resolve,reject)=>{let cancelled=false;p.then(r=>{// Resolved, cancel the timeout
cancelled=true;resolve(r);}).catch(reject);(0,_requestIdleCallback.requestIdleCallback)(()=>setTimeout(()=>{if(!cancelled){reject(err);}},ms));});}// TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.
function getClientBuildManifest(){if(self.__BUILD_MANIFEST){return Promise.resolve(self.__BUILD_MANIFEST);}const onBuildManifest=new Promise(resolve=>{// Mandatory because this is not concurrent safe:
const cb=self.__BUILD_MANIFEST_CB;self.__BUILD_MANIFEST_CB=()=>{resolve(self.__BUILD_MANIFEST);cb&&cb();};});return resolvePromiseWithTimeout(onBuildManifest,MS_MAX_IDLE_DELAY,markAssetError(new Error('Failed to load client build manifest')));}function getFilesForRoute(assetPrefix,route){if(true){return Promise.resolve({scripts:[assetPrefix+'/_next/static/chunks/pages'+encodeURI((0,_getAssetPathFromRoute.default)(route,'.js'))],// Styles are handled by `style-loader` in development:
css:[]});}return getClientBuildManifest().then(manifest=>{if(!(route in manifest)){throw markAssetError(new Error(`Failed to lookup route: ${route}`));}const allFiles=manifest[route].map(entry=>assetPrefix+'/_next/'+encodeURI(entry));return{scripts:allFiles.filter(v=>v.endsWith('.js')),css:allFiles.filter(v=>v.endsWith('.css'))};});}function createRouteLoader(assetPrefix){const entrypoints=new Map();const loadedScripts=new Map();const styleSheets=new Map();const routes=new Map();function maybeExecuteScript(src){let prom=loadedScripts.get(src);if(prom){return prom;}// Skip executing script if it's already in the DOM:
if(document.querySelector(`script[src^="${src}"]`)){return Promise.resolve();}loadedScripts.set(src,prom=appendScript(src));return prom;}function fetchStyleSheet(href){let prom=styleSheets.get(href);if(prom){return prom;}styleSheets.set(href,prom=fetch(href).then(res=>{if(!res.ok){throw new Error(`Failed to load stylesheet: ${href}`);}return res.text().then(text=>({href:href,content:text}));}).catch(err=>{throw markAssetError(err);}));return prom;}return{whenEntrypoint(route){return withFuture(route,entrypoints);},onEntrypoint(route,execute){Promise.resolve(execute).then(fn=>fn()).then(exports=>({component:exports&&exports.default||exports,exports:exports}),err=>({error:err})).then(input=>{const old=entrypoints.get(route);entrypoints.set(route,input);if(old&&'resolve'in old)old.resolve(input);});},loadRoute(route){return withFuture(route,routes,async()=>{try{const{scripts,css}=await getFilesForRoute(assetPrefix,route);const[,styles]=await Promise.all([entrypoints.has(route)?[]:Promise.all(scripts.map(maybeExecuteScript)),Promise.all(css.map(fetchStyleSheet))]);const entrypoint=await resolvePromiseWithTimeout(this.whenEntrypoint(route),MS_MAX_IDLE_DELAY,markAssetError(new Error(`Route did not complete loading: ${route}`)));const res=Object.assign({styles},entrypoint);return'error'in entrypoint?entrypoint:res;}catch(err){return{error:err};}});},prefetch(route){// https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
// License: Apache 2.0
let cn;if(cn=navigator.connection){// Don't prefetch if using 2G or if Save-Data is enabled.
if(cn.saveData||/2g/.test(cn.effectiveType))return Promise.resolve();}return getFilesForRoute(assetPrefix,route).then(output=>Promise.all(canPrefetch?output.scripts.map(script=>prefetchViaDom(script,'script')):[])).then(()=>{(0,_requestIdleCallback.requestIdleCallback)(()=>this.loadRoute(route));}).catch(// swallow prefetch errors
()=>{});}};}var _default=createRouteLoader;exports.default=_default;
//# sourceMappingURL=route-loader.js.map

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.useRouter=useRouter;exports.makePublicRouterInstance=makePublicRouterInstance;exports.createRouter=exports.withRouter=exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));var _router2=_interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));exports.Router=_router2.default;exports.NextRouter=_router2.NextRouter;var _routerContext=__webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");var _withRouter=_interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));exports.withRouter=_withRouter.default;/* global window */const singletonRouter={router:null,// holds the actual router instance
readyCallbacks:[],ready(cb){if(this.router)return cb();if(typeof window!=='undefined'){this.readyCallbacks.push(cb);}}};// Create public properties and methods of the router in the singletonRouter
const urlPropertyFields=['pathname','route','query','asPath','components','isFallback','basePath','locale','locales','defaultLocale','isReady','isPreview','isLocaleDomain'];const routerEvents=['routeChangeStart','beforeHistoryChange','routeChangeComplete','routeChangeError','hashChangeStart','hashChangeComplete'];const coreMethodFields=['push','replace','reload','back','prefetch','beforePopState'];// Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter,'events',{get(){return _router2.default.events;}});urlPropertyFields.forEach(field=>{// Here we need to use Object.defineProperty because, we need to return
// the property assigned to the actual router
// The value might get changed as we change routes and this is the
// proper way to access it
Object.defineProperty(singletonRouter,field,{get(){const router=getRouter();return router[field];}});});coreMethodFields.forEach(field=>{// We don't really know the types here, so we add them later instead
;singletonRouter[field]=(...args)=>{const router=getRouter();return router[field](...args);};});routerEvents.forEach(event=>{singletonRouter.ready(()=>{_router2.default.events.on(event,(...args)=>{const eventField=`on${event.charAt(0).toUpperCase()}${event.substring(1)}`;const _singletonRouter=singletonRouter;if(_singletonRouter[eventField]){try{_singletonRouter[eventField](...args);}catch(err){console.error(`Error when running the Router event: ${eventField}`);console.error(`${err.message}\n${err.stack}`);}}});});});function getRouter(){if(!singletonRouter.router){const message='No router instance found.\n'+'You should only use "next/router" inside the client side of your app.\n';throw new Error(message);}return singletonRouter.router;}// Export the singletonRouter and this is the public API.
var _default=singletonRouter;// Reexport the withRoute HOC
exports.default=_default;function useRouter(){return _react.default.useContext(_routerContext.RouterContext);}// INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter=(...args)=>{singletonRouter.router=new _router2.default(...args);singletonRouter.readyCallbacks.forEach(cb=>cb());singletonRouter.readyCallbacks=[];return singletonRouter.router;};// This function is used to create the `withRouter` router instance
exports.createRouter=createRouter;function makePublicRouterInstance(router){const _router=router;const instance={};for(const property of urlPropertyFields){if(typeof _router[property]==='object'){instance[property]=Object.assign(Array.isArray(_router[property])?[]:{},_router[property]);// makes sure query is not stateful
continue;}instance[property]=_router[property];}// Events is a static property on the router, the router doesn't have to be initialized to use it
instance.events=_router2.default.events;coreMethodFields.forEach(field=>{instance[field]=(...args)=>{return _router[field](...args);};});return instance;}
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.useIntersection=useIntersection;var _react=__webpack_require__(/*! react */ "./node_modules/react/index.js");var _requestIdleCallback=__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");const hasIntersectionObserver=typeof IntersectionObserver!=='undefined';function useIntersection({rootMargin,disabled}){const isDisabled=disabled||!hasIntersectionObserver;const unobserve=(0,_react.useRef)();const[visible,setVisible]=(0,_react.useState)(false);const setRef=(0,_react.useCallback)(el=>{if(unobserve.current){unobserve.current();unobserve.current=undefined;}if(isDisabled||visible)return;if(el&&el.tagName){unobserve.current=observe(el,isVisible=>isVisible&&setVisible(isVisible),{rootMargin});}},[isDisabled,rootMargin,visible]);(0,_react.useEffect)(()=>{if(!hasIntersectionObserver){if(!visible){const idleCallback=(0,_requestIdleCallback.requestIdleCallback)(()=>setVisible(true));return()=>(0,_requestIdleCallback.cancelIdleCallback)(idleCallback);}}},[visible]);return[setRef,visible];}function observe(element,callback,options){const{id,observer,elements}=createObserver(options);elements.set(element,callback);observer.observe(element);return function unobserve(){elements.delete(element);observer.unobserve(element);// Destroy observer when there's nothing left to watch:
if(elements.size===0){observer.disconnect();observers.delete(id);}};}const observers=new Map();function createObserver(options){const id=options.rootMargin||'';let instance=observers.get(id);if(instance){return instance;}const elements=new Map();const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{const callback=elements.get(entry.target);const isVisible=entry.isIntersecting||entry.intersectionRatio>0;if(callback&&isVisible){callback(isVisible);}});},options);observers.set(id,instance={id,observer,elements});return instance;}
//# sourceMappingURL=use-intersection.js.map

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.default=withRouter;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));var _router=__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");function withRouter(ComposedComponent){function WithRouterWrapper(props){return/*#__PURE__*/_react.default.createElement(ComposedComponent,Object.assign({router:(0,_router.useRouter)()},props));}WithRouterWrapper.getInitialProps=ComposedComponent.getInitialProps// This is needed to allow checking for custom getInitialProps in _app
;WithRouterWrapper.origGetInitialProps=ComposedComponent.origGetInitialProps;if(true){const name=ComposedComponent.displayName||ComposedComponent.name||'Unknown';WithRouterWrapper.displayName=`withRouter(${name})`;}return WithRouterWrapper;}
//# sourceMappingURL=with-router.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.noSSR=noSSR;exports.default=dynamic;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));var _loadable=_interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const isServerSide=typeof window==='undefined';function noSSR(LoadableInitializer,loadableOptions){// Removing webpack and modules means react-loadable won't try preloading
delete loadableOptions.webpack;delete loadableOptions.modules;// This check is necessary to prevent react-loadable from initializing on the server
if(!isServerSide){return LoadableInitializer(loadableOptions);}const Loading=loadableOptions.loading;// This will only be rendered on the server side
return()=>/*#__PURE__*/_react.default.createElement(Loading,{error:null,isLoading:true,pastDelay:false,timedOut:false});}// function dynamic<P = {}, O extends DynamicOptions>(options: O):
function dynamic(dynamicOptions,options){let loadableFn=_loadable.default;let loadableOptions={// A loading component is not required, so we default it
loading:({error,isLoading,pastDelay})=>{if(!pastDelay)return null;if(true){if(isLoading){return null;}if(error){return/*#__PURE__*/_react.default.createElement("p",null,error.message,/*#__PURE__*/_react.default.createElement("br",null),error.stack);}}return null;}};// Support for direct import(), eg: dynamic(import('../hello-world'))
// Note that this is only kept for the edge case where someone is passing in a promise as first argument
// The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
// To make sure we don't execute the import without rendering first
if(dynamicOptions instanceof Promise){loadableOptions.loader=()=>dynamicOptions;// Support for having import as a function, eg: dynamic(() => import('../hello-world'))
}else if(typeof dynamicOptions==='function'){loadableOptions.loader=dynamicOptions;// Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
}else if(typeof dynamicOptions==='object'){loadableOptions={...loadableOptions,...dynamicOptions};}// Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
loadableOptions={...loadableOptions,...options};if(typeof dynamicOptions==='object'&&!(dynamicOptions instanceof Promise)){// show deprecation warning for `modules` key in development
if(true){if(dynamicOptions.modules){console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://err.sh/vercel/next.js/next-dynamic-modules');}}// Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })
if(dynamicOptions.render){loadableOptions.render=(loaded,props)=>dynamicOptions.render(props,loaded);}// Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })
if(dynamicOptions.modules){loadableFn=_loadable.default.Map;const loadModules={};const modules=dynamicOptions.modules();Object.keys(modules).forEach(key=>{const value=modules[key];if(typeof value.then==='function'){loadModules[key]=()=>value.then(mod=>mod.default||mod);return;}loadModules[key]=value;});loadableOptions.loader=loadModules;}}// coming from build/babel/plugins/react-loadable-plugin.js
if(loadableOptions.loadableGenerated){loadableOptions={...loadableOptions,...loadableOptions.loadableGenerated};delete loadableOptions.loadableGenerated;}// support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})
if(typeof loadableOptions.ssr==='boolean'){if(!loadableOptions.ssr){delete loadableOptions.ssr;return noSSR(loadableFn,loadableOptions);}delete loadableOptions.ssr;}return loadableFn(loadableOptions);}
//# sourceMappingURL=dynamic.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
exports.__esModule=true;exports.detectDomainLocale=detectDomainLocale;function detectDomainLocale(domainItems,hostname,detectedLocale){let domainItem;if(domainItems){if(detectedLocale){detectedLocale=detectedLocale.toLowerCase();}for(const item of domainItems){var _item$domain,_item$locales;// remove port if present
const domainHostname=(_item$domain=item.domain)==null?void 0:_item$domain.split(':')[0].toLowerCase();if(hostname===domainHostname||detectedLocale===item.defaultLocale.toLowerCase()||(_item$locales=item.locales)!=null&&_item$locales.some(locale=>locale.toLowerCase()===detectedLocale)){domainItem=item;break;}}}return domainItem;}
//# sourceMappingURL=detect-domain-locale.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
exports.__esModule=true;exports.normalizeLocalePath=normalizeLocalePath;function normalizeLocalePath(pathname,locales){let detectedLocale;// first item will be empty string from splitting at first char
const pathnameParts=pathname.split('/');(locales||[]).some(locale=>{if(pathnameParts[1].toLowerCase()===locale.toLowerCase()){detectedLocale=locale;pathnameParts.splice(1,1);pathname=pathnameParts.join('/')||'/';return true;}return false;});return{pathname,detectedLocale};}
//# sourceMappingURL=normalize-locale-path.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.LoadableContext=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const LoadableContext=/*#__PURE__*/_react.default.createContext(null);exports.LoadableContext=LoadableContext;if(true){LoadableContext.displayName='LoadableContext';}
//# sourceMappingURL=loadable-context.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));var _useSubscription=__webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");var _loadableContext=__webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ // https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js
const ALL_INITIALIZERS=[];const READY_INITIALIZERS=[];let initialized=false;function load(loader){let promise=loader();let state={loading:true,loaded:null,error:null};state.promise=promise.then(loaded=>{state.loading=false;state.loaded=loaded;return loaded;}).catch(err=>{state.loading=false;state.error=err;throw err;});return state;}function loadMap(obj){let state={loading:false,loaded:{},error:null};let promises=[];try{Object.keys(obj).forEach(key=>{let result=load(obj[key]);if(!result.loading){state.loaded[key]=result.loaded;state.error=result.error;}else{state.loading=true;}promises.push(result.promise);result.promise.then(res=>{state.loaded[key]=res;}).catch(err=>{state.error=err;});});}catch(err){state.error=err;}state.promise=Promise.all(promises).then(res=>{state.loading=false;return res;}).catch(err=>{state.loading=false;throw err;});return state;}function resolve(obj){return obj&&obj.__esModule?obj.default:obj;}function render(loaded,props){return/*#__PURE__*/_react.default.createElement(resolve(loaded),props);}function createLoadableComponent(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:render,webpack:null,modules:null},options);let subscription=null;function init(){if(!subscription){const sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)};}return subscription.promise();}// Server only
if(typeof window==='undefined'){ALL_INITIALIZERS.push(init);}// Client only
if(!initialized&&typeof window!=='undefined'&&typeof opts.webpack==='function'){const moduleIds=opts.webpack();READY_INITIALIZERS.push(ids=>{for(const moduleId of moduleIds){if(ids.indexOf(moduleId)!==-1){return init();}}});}const LoadableComponent=(props,ref)=>{init();const context=_react.default.useContext(_loadableContext.LoadableContext);const state=(0,_useSubscription.useSubscription)(subscription);_react.default.useImperativeHandle(ref,()=>({retry:subscription.retry}),[]);if(context&&Array.isArray(opts.modules)){opts.modules.forEach(moduleName=>{context(moduleName);});}return _react.default.useMemo(()=>{if(state.loading||state.error){return/*#__PURE__*/_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry});}else if(state.loaded){return opts.render(state.loaded,props);}else{return null;}},[props,state]);};LoadableComponent.preload=()=>init();LoadableComponent.displayName='LoadableComponent';return/*#__PURE__*/_react.default.forwardRef(LoadableComponent);}class LoadableSubscription{constructor(loadFn,opts){this._loadFn=loadFn;this._opts=opts;this._callbacks=new Set();this._delay=null;this._timeout=null;this.retry();}promise(){return this._res.promise;}retry(){this._clearTimeouts();this._res=this._loadFn(this._opts.loader);this._state={pastDelay:false,timedOut:false};const{_res:res,_opts:opts}=this;if(res.loading){if(typeof opts.delay==='number'){if(opts.delay===0){this._state.pastDelay=true;}else{this._delay=setTimeout(()=>{this._update({pastDelay:true});},opts.delay);}}if(typeof opts.timeout==='number'){this._timeout=setTimeout(()=>{this._update({timedOut:true});},opts.timeout);}}this._res.promise.then(()=>{this._update({});this._clearTimeouts();}).catch(_err=>{this._update({});this._clearTimeouts();});this._update({});}_update(partial){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...partial};this._callbacks.forEach(callback=>callback());}_clearTimeouts(){clearTimeout(this._delay);clearTimeout(this._timeout);}getCurrentValue(){return this._state;}subscribe(callback){this._callbacks.add(callback);return()=>{this._callbacks.delete(callback);};}}function Loadable(opts){return createLoadableComponent(load,opts);}function LoadableMap(opts){if(typeof opts.render!=='function'){throw new Error('LoadableMap requires a `render(loaded, props)` function');}return createLoadableComponent(loadMap,opts);}Loadable.Map=LoadableMap;function flushInitializers(initializers,ids){let promises=[];while(initializers.length){let init=initializers.pop();promises.push(init(ids));}return Promise.all(promises).then(()=>{if(initializers.length){return flushInitializers(initializers,ids);}});}Loadable.preloadAll=()=>{return new Promise((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject);});};Loadable.preloadReady=(ids=[])=>{return new Promise(resolvePreload=>{const res=()=>{initialized=true;return resolvePreload();};// We always will resolve, errors should be handled within loading UIs.
flushInitializers(READY_INITIALIZERS,ids).then(res,res);});};if(typeof window!=='undefined'){window.__NEXT_PRELOADREADY=Loadable.preloadReady;}var _default=Loadable;exports.default=_default;
//# sourceMappingURL=loadable.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
exports.__esModule=true;exports.default=mitt;/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt(){const all=Object.create(null);return{on(type,handler){;(all[type]||(all[type]=[])).push(handler);},off(type,handler){if(all[type]){all[type].splice(all[type].indexOf(handler)>>>0,1);}},emit(type,...evts){// eslint-disable-next-line array-callback-return
;(all[type]||[]).slice().map(handler=>{handler(...evts);});}};}
//# sourceMappingURL=mitt.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.RouterContext=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const RouterContext=/*#__PURE__*/_react.default.createContext(null);exports.RouterContext=RouterContext;if(true){RouterContext.displayName='RouterContext';}
//# sourceMappingURL=router-context.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
exports.__esModule=true;exports.getDomainLocale=getDomainLocale;exports.addLocale=addLocale;exports.delLocale=delLocale;exports.hasBasePath=hasBasePath;exports.addBasePath=addBasePath;exports.delBasePath=delBasePath;exports.isLocalURL=isLocalURL;exports.interpolateAs=interpolateAs;exports.resolveHref=resolveHref;exports.default=void 0;var _normalizeTrailingSlash=__webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");var _routeLoader=__webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");var _denormalizePagePath=__webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");var _normalizeLocalePath=__webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");var _mitt=_interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));var _utils=__webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");var _isDynamic=__webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");var _parseRelativeUrl=__webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");var _querystring=__webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");var _resolveRewrites=_interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));var _routeMatcher=__webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");var _routeRegex=__webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* global __NEXT_DATA__ */ // tslint:disable:no-console
let detectDomainLocale;if(process.env.__NEXT_I18N_SUPPORT){detectDomainLocale=__webpack_require__(/*! ../i18n/detect-domain-locale */ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js").detectDomainLocale;}const basePath=process.env.__NEXT_ROUTER_BASEPATH||'';function buildCancellationError(){return Object.assign(new Error('Route Cancelled'),{cancelled:true});}function addPathPrefix(path,prefix){return prefix&&path.startsWith('/')?path==='/'?(0,_normalizeTrailingSlash.normalizePathTrailingSlash)(prefix):`${prefix}${pathNoQueryHash(path)==='/'?path.substring(1):path}`:path;}function getDomainLocale(path,locale,locales,domainLocales){if(process.env.__NEXT_I18N_SUPPORT){locale=locale||(0,_normalizeLocalePath.normalizeLocalePath)(path,locales).detectedLocale;const detectedDomain=detectDomainLocale(domainLocales,undefined,locale);if(detectedDomain){return`http${detectedDomain.http?'':'s'}://${detectedDomain.domain}${basePath||''}${locale===detectedDomain.defaultLocale?'':`/${locale}`}${path}`;}return false;}return false;}function addLocale(path,locale,defaultLocale){if(process.env.__NEXT_I18N_SUPPORT){return locale&&locale!==defaultLocale&&!path.startsWith('/'+locale+'/')&&path!=='/'+locale?addPathPrefix(path,'/'+locale):path;}return path;}function delLocale(path,locale){if(process.env.__NEXT_I18N_SUPPORT){return locale&&(path.startsWith('/'+locale+'/')||path==='/'+locale)?path.substr(locale.length+1)||'/':path;}return path;}function pathNoQueryHash(path){const queryIndex=path.indexOf('?');const hashIndex=path.indexOf('#');if(queryIndex>-1||hashIndex>-1){path=path.substring(0,queryIndex>-1?queryIndex:hashIndex);}return path;}function hasBasePath(path){path=pathNoQueryHash(path);return path===basePath||path.startsWith(basePath+'/');}function addBasePath(path){// we only add the basepath on relative urls
return addPathPrefix(path,basePath);}function delBasePath(path){path=path.slice(basePath.length);if(!path.startsWith('/'))path=`/${path}`;return path;}/**
 * Detects whether a given url is routable by the Next.js router (browser only).
 */function isLocalURL(url){// prevent a hydration mismatch on href for url with anchor refs
if(url.startsWith('/')||url.startsWith('#'))return true;try{// absolute urls can be local if they are on the same origin
const locationOrigin=(0,_utils.getLocationOrigin)();const resolved=new URL(url,locationOrigin);return resolved.origin===locationOrigin&&hasBasePath(resolved.pathname);}catch(_){return false;}}function interpolateAs(route,asPathname,query){let interpolatedRoute='';const dynamicRegex=(0,_routeRegex.getRouteRegex)(route);const dynamicGroups=dynamicRegex.groups;const dynamicMatches=// Try to match the dynamic route against the asPath
(asPathname!==route?(0,_routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname):'')||// Fall back to reading the values from the href
// TODO: should this take priority; also need to change in the router.
query;interpolatedRoute=route;const params=Object.keys(dynamicGroups);if(!params.every(param=>{let value=dynamicMatches[param]||'';const{repeat,optional}=dynamicGroups[param];// support single-level catch-all
// TODO: more robust handling for user-error (passing `/`)
let replaced=`[${repeat?'...':''}${param}]`;if(optional){replaced=`${!value?'/':''}[${replaced}]`;}if(repeat&&!Array.isArray(value))value=[value];return(optional||param in dynamicMatches)&&(// Interpolate group into data URL if present
interpolatedRoute=interpolatedRoute.replace(replaced,repeat?value.map(// these values should be fully encoded instead of just
// path delimiter escaped since they are being inserted
// into the URL and we expect URL encoded segments
// when parsing dynamic route params
segment=>encodeURIComponent(segment)).join('/'):encodeURIComponent(value))||'/');})){interpolatedRoute='';// did not satisfy all requirements
// n.b. We ignore this error because we handle warning for this case in
// development in the `<Link>` component directly.
}return{params,result:interpolatedRoute};}function omitParmsFromQuery(query,params){const filteredQuery={};Object.keys(query).forEach(key=>{if(!params.includes(key)){filteredQuery[key]=query[key];}});return filteredQuery;}/**
 * Resolves a given hyperlink with a certain router state (basePath not included).
 * Preserves absolute urls.
 */function resolveHref(currentPath,href,resolveAs){// we use a dummy base url for relative urls
const base=new URL(currentPath,'http://n');const urlAsString=typeof href==='string'?href:(0,_utils.formatWithValidation)(href);// Return because it cannot be routed by the Next.js router
if(!isLocalURL(urlAsString)){return resolveAs?[urlAsString]:urlAsString;}try{const finalUrl=new URL(urlAsString,base);finalUrl.pathname=(0,_normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);let interpolatedAs='';if((0,_isDynamic.isDynamicRoute)(finalUrl.pathname)&&finalUrl.searchParams&&resolveAs){const query=(0,_querystring.searchParamsToUrlQuery)(finalUrl.searchParams);const{result,params}=interpolateAs(finalUrl.pathname,finalUrl.pathname,query);if(result){interpolatedAs=(0,_utils.formatWithValidation)({pathname:result,hash:finalUrl.hash,query:omitParmsFromQuery(query,params)});}}// if the origin didn't change, it means we received a relative href
const resolvedHref=finalUrl.origin===base.origin?finalUrl.href.slice(finalUrl.origin.length):finalUrl.href;return resolveAs?[resolvedHref,interpolatedAs||resolvedHref]:resolvedHref;}catch(_){return resolveAs?[urlAsString]:urlAsString;}}function stripOrigin(url){const origin=(0,_utils.getLocationOrigin)();return url.startsWith(origin)?url.substring(origin.length):url;}function prepareUrlAs(router,url,as){// If url and as provided as an object representation,
// we'll format them into the string version here.
let[resolvedHref,resolvedAs]=resolveHref(router.pathname,url,true);const origin=(0,_utils.getLocationOrigin)();const hrefHadOrigin=resolvedHref.startsWith(origin);const asHadOrigin=resolvedAs&&resolvedAs.startsWith(origin);resolvedHref=stripOrigin(resolvedHref);resolvedAs=resolvedAs?stripOrigin(resolvedAs):resolvedAs;const preparedUrl=hrefHadOrigin?resolvedHref:addBasePath(resolvedHref);const preparedAs=as?stripOrigin(resolveHref(router.pathname,as)):resolvedAs||resolvedHref;return{url:preparedUrl,as:asHadOrigin?preparedAs:addBasePath(preparedAs)};}function resolveDynamicRoute(parsedHref,pages,applyBasePath=true){const{pathname}=parsedHref;const cleanPathname=(0,_normalizeTrailingSlash.removePathTrailingSlash)((0,_denormalizePagePath.denormalizePagePath)(applyBasePath?delBasePath(pathname):pathname));if(cleanPathname==='/404'||cleanPathname==='/_error'){return parsedHref;}// handle resolving href for dynamic routes
if(!pages.includes(cleanPathname)){// eslint-disable-next-line array-callback-return
pages.some(page=>{if((0,_isDynamic.isDynamicRoute)(page)&&(0,_routeRegex.getRouteRegex)(page).re.test(cleanPathname)){parsedHref.pathname=applyBasePath?addBasePath(page):page;return true;}});}parsedHref.pathname=(0,_normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);return parsedHref;}const manualScrollRestoration=process.env.__NEXT_SCROLL_RESTORATION&&typeof window!=='undefined'&&'scrollRestoration'in window.history&&!!function(){try{let v='__next';// eslint-disable-next-line no-sequences
return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),true;}catch(n){}}();const SSG_DATA_NOT_FOUND=Symbol('SSG_DATA_NOT_FOUND');function fetchRetry(url,attempts){return fetch(url,{// Cookies are required to be present for Next.js' SSG "Preview Mode".
// Cookies may also be required for `getServerSideProps`.
//
// > `fetch` won’t send cookies, unless you set the credentials init
// > option.
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//
// > For maximum browser compatibility when it comes to sending &
// > receiving cookies, always supply the `credentials: 'same-origin'`
// > option instead of relying on the default.
// https://github.com/github/fetch#caveats
credentials:'same-origin'}).then(res=>{if(!res.ok){if(attempts>1&&res.status>=500){return fetchRetry(url,attempts-1);}if(res.status===404){return res.json().then(data=>{if(data.notFound){return{notFound:SSG_DATA_NOT_FOUND};}throw new Error(`Failed to load static props`);});}throw new Error(`Failed to load static props`);}return res.json();});}function fetchNextData(dataHref,isServerRender){return fetchRetry(dataHref,isServerRender?3:1).catch(err=>{// We should only trigger a server-side transition if this was caused
// on a client-side transition. Otherwise, we'd get into an infinite
// loop.
if(!isServerRender){(0,_routeLoader.markAssetError)(err);}throw err;});}class Router{/**
   * Map of all components loaded in `Router`
   */ // Static Data Cache
// In-flight Server Data Requests, for deduping
constructor(_pathname,_query,_as,{initialProps,pageLoader,App,wrapApp,Component,err,subscription,isFallback,locale,locales,defaultLocale,domainLocales,isPreview}){this.route=void 0;this.pathname=void 0;this.query=void 0;this.asPath=void 0;this.basePath=void 0;this.components=void 0;this.sdc={};this.sdr={};this.sub=void 0;this.clc=void 0;this.pageLoader=void 0;this._bps=void 0;this.events=void 0;this._wrapApp=void 0;this.isSsr=void 0;this.isFallback=void 0;this._inFlightRoute=void 0;this._shallow=void 0;this.locale=void 0;this.locales=void 0;this.defaultLocale=void 0;this.domainLocales=void 0;this.isReady=void 0;this.isPreview=void 0;this.isLocaleDomain=void 0;this._idx=0;this.onPopState=e=>{const state=e.state;if(!state){// We get state as undefined for two reasons.
//  1. With older safari (< 8) and older chrome (< 34)
//  2. When the URL changed with #
//
// In the both cases, we don't need to proceed and change the route.
// (as it's already changed)
// But we can simply replace the state with the new changes.
// Actually, for (1) we don't need to nothing. But it's hard to detect that event.
// So, doing the following for (1) does no harm.
const{pathname,query}=this;this.changeState('replaceState',(0,_utils.formatWithValidation)({pathname:addBasePath(pathname),query}),(0,_utils.getURL)());return;}if(!state.__N){return;}let forcedScroll;const{url,as,options,idx}=state;if(process.env.__NEXT_SCROLL_RESTORATION){if(manualScrollRestoration){if(this._idx!==idx){// Snapshot current scroll position:
try{sessionStorage.setItem('__next_scroll_'+this._idx,JSON.stringify({x:self.pageXOffset,y:self.pageYOffset}));}catch(_unused){}// Restore old scroll position:
try{const v=sessionStorage.getItem('__next_scroll_'+idx);forcedScroll=JSON.parse(v);}catch(_unused2){forcedScroll={x:0,y:0};}}}}this._idx=idx;const{pathname}=(0,_parseRelativeUrl.parseRelativeUrl)(url);// Make sure we don't re-render on initial load,
// can be caused by navigating back from an external site
if(this.isSsr&&as===this.asPath&&pathname===this.pathname){return;}// If the downstream application returns falsy, return.
// They will then be responsible for handling the event.
if(this._bps&&!this._bps(state)){return;}this.change('replaceState',url,as,Object.assign({},options,{shallow:options.shallow&&this._shallow,locale:options.locale||this.defaultLocale}),forcedScroll);};// represents the current component key
this.route=(0,_normalizeTrailingSlash.removePathTrailingSlash)(_pathname);// set up the component cache (by route keys)
this.components={};// We should not keep the cache, if there's an error
// Otherwise, this cause issues when when going back and
// come again to the errored page.
if(_pathname!=='/_error'){this.components[this.route]={Component,initial:true,props:initialProps,err,__N_SSG:initialProps&&initialProps.__N_SSG,__N_SSP:initialProps&&initialProps.__N_SSP};}this.components['/_app']={Component:App,styleSheets:[/* /_app does not need its stylesheets managed */]};// Backwards compat for Router.router.events
// TODO: Should be remove the following major version as it was never documented
this.events=Router.events;this.pageLoader=pageLoader;this.pathname=_pathname;this.query=_query;// if auto prerendered and dynamic route wait to update asPath
// until after mount to prevent hydration mismatch
const autoExportDynamic=(0,_isDynamic.isDynamicRoute)(_pathname)&&self.__NEXT_DATA__.autoExport;this.asPath=autoExportDynamic?_pathname:_as;this.basePath=basePath;this.sub=subscription;this.clc=null;this._wrapApp=wrapApp;// make sure to ignore extra popState in safari on navigating
// back from external site
this.isSsr=true;this.isFallback=isFallback;this.isReady=!!(self.__NEXT_DATA__.gssp||self.__NEXT_DATA__.gip||!autoExportDynamic&&!self.location.search);this.isPreview=!!isPreview;this.isLocaleDomain=false;if(process.env.__NEXT_I18N_SUPPORT){this.locale=locale;this.locales=locales;this.defaultLocale=defaultLocale;this.domainLocales=domainLocales;this.isLocaleDomain=!!detectDomainLocale(domainLocales,self.location.hostname);}if(typeof window!=='undefined'){// make sure "as" doesn't start with double slashes or else it can
// throw an error as it's considered invalid
if(_as.substr(0,2)!=='//'){// in order for `e.state` to work on the `onpopstate` event
// we have to register the initial route upon initialization
this.changeState('replaceState',(0,_utils.formatWithValidation)({pathname:addBasePath(_pathname),query:_query}),(0,_utils.getURL)(),{locale});}window.addEventListener('popstate',this.onPopState);// enable custom scroll restoration handling when available
// otherwise fallback to browser's default handling
if(process.env.__NEXT_SCROLL_RESTORATION){if(manualScrollRestoration){window.history.scrollRestoration='manual';}}}}reload(){window.location.reload();}/**
   * Go back in history
   */back(){window.history.back();}/**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */push(url,as,options={}){if(process.env.__NEXT_SCROLL_RESTORATION){// TODO: remove in the future when we update history before route change
// is complete, as the popstate event should handle this capture.
if(manualScrollRestoration){try{// Snapshot scroll position right before navigating to a new page:
sessionStorage.setItem('__next_scroll_'+this._idx,JSON.stringify({x:self.pageXOffset,y:self.pageYOffset}));}catch(_unused3){}}};({url,as}=prepareUrlAs(this,url,as));return this.change('pushState',url,as,options);}/**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */replace(url,as,options={}){;({url,as}=prepareUrlAs(this,url,as));return this.change('replaceState',url,as,options);}async change(method,url,as,options,forcedScroll){var _options$scroll;if(!isLocalURL(url)){window.location.href=url;return false;}// for static pages with query params in the URL we delay
// marking the router ready until after the query is updated
if(options._h){this.isReady=true;}// Default to scroll reset behavior unless explicitly specified to be
// `false`! This makes the behavior between using `Router#push` and a
// `<Link />` consistent.
options.scroll=!!((_options$scroll=options.scroll)!=null?_options$scroll:true);let localeChange=options.locale!==this.locale;if(process.env.__NEXT_I18N_SUPPORT){this.locale=options.locale===false?this.defaultLocale:options.locale||this.locale;if(typeof options.locale==='undefined'){options.locale=this.locale;}const parsedAs=(0,_parseRelativeUrl.parseRelativeUrl)(hasBasePath(as)?delBasePath(as):as);const localePathResult=(0,_normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname,this.locales);if(localePathResult.detectedLocale){this.locale=localePathResult.detectedLocale;parsedAs.pathname=addBasePath(parsedAs.pathname);as=(0,_utils.formatWithValidation)(parsedAs);url=addBasePath((0,_normalizeLocalePath.normalizeLocalePath)(hasBasePath(url)?delBasePath(url):url,this.locales).pathname);}let didNavigate=false;// we need to wrap this in the env check again since regenerator runtime
// moves this on its own due to the return
if(process.env.__NEXT_I18N_SUPPORT){var _this$locales;// if the locale isn't configured hard navigate to show 404 page
if(!((_this$locales=this.locales)!=null&&_this$locales.includes(this.locale))){parsedAs.pathname=addLocale(parsedAs.pathname,this.locale);window.location.href=(0,_utils.formatWithValidation)(parsedAs);// this was previously a return but was removed in favor
// of better dead code elimination with regenerator runtime
didNavigate=true;}}const detectedDomain=detectDomainLocale(this.domainLocales,undefined,this.locale);// we need to wrap this in the env check again since regenerator runtime
// moves this on its own due to the return
if(process.env.__NEXT_I18N_SUPPORT){// if we are navigating to a domain locale ensure we redirect to the
// correct domain
if(!didNavigate&&detectedDomain&&this.isLocaleDomain&&self.location.hostname!==detectedDomain.domain){const asNoBasePath=delBasePath(as);window.location.href=`http${detectedDomain.http?'':'s'}://${detectedDomain.domain}${addBasePath(`${this.locale===detectedDomain.defaultLocale?'':`/${this.locale}`}${asNoBasePath==='/'?'':asNoBasePath}`||'/')}`;// this was previously a return but was removed in favor
// of better dead code elimination with regenerator runtime
didNavigate=true;}}if(didNavigate){return new Promise(()=>{});}}if(!options._h){this.isSsr=false;}// marking route changes as a navigation start entry
if(_utils.ST){performance.mark('routeChange');}const{shallow=false}=options;const routeProps={shallow};if(this._inFlightRoute){this.abortComponentLoad(this._inFlightRoute,routeProps);}as=addBasePath(addLocale(hasBasePath(as)?delBasePath(as):as,options.locale,this.defaultLocale));const cleanedAs=delLocale(hasBasePath(as)?delBasePath(as):as,this.locale);this._inFlightRoute=as;// If the url change is only related to a hash change
// We should not proceed. We should only change the state.
// WARNING: `_h` is an internal option for handing Next.js client-side
// hydration. Your app should _never_ use this property. It may change at
// any time without notice.
if(!options._h&&this.onlyAHashChange(cleanedAs)){this.asPath=cleanedAs;Router.events.emit('hashChangeStart',as,routeProps);// TODO: do we need the resolved href when only a hash change?
this.changeState(method,url,as,options);this.scrollToHash(cleanedAs);this.notify(this.components[this.route],null);Router.events.emit('hashChangeComplete',as,routeProps);return true;}let parsed=(0,_parseRelativeUrl.parseRelativeUrl)(url);let{pathname,query}=parsed;// The build manifest needs to be loaded before auto-static dynamic pages
// get their query parameters to allow ensuring they can be parsed properly
// when rewritten to
let pages,rewrites;try{pages=await this.pageLoader.getPageList();({__rewrites:rewrites}=await(0,_routeLoader.getClientBuildManifest)());}catch(err){// If we fail to resolve the page list or client-build manifest, we must
// do a server-side transition:
window.location.href=as;return false;}parsed=resolveDynamicRoute(parsed,pages);if(parsed.pathname!==pathname){pathname=parsed.pathname;url=(0,_utils.formatWithValidation)(parsed);}// url and as should always be prefixed with basePath by this
// point by either next/link or router.push/replace so strip the
// basePath from the pathname to match the pages dir 1-to-1
pathname=pathname?(0,_normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)):pathname;// If asked to change the current URL we should reload the current page
// (not location.reload() but reload getInitialProps and other Next.js stuffs)
// We also need to set the method = replaceState always
// as this should not go into the history (That's how browsers work)
// We should compare the new asPath to the current asPath, not the url
if(!this.urlIsNew(cleanedAs)&&!localeChange){method='replaceState';}let route=(0,_normalizeTrailingSlash.removePathTrailingSlash)(pathname);// we need to resolve the as value using rewrites for dynamic SSG
// pages to allow building the data URL correctly
let resolvedAs=as;if(process.env.__NEXT_HAS_REWRITES&&as.startsWith('/')){const rewritesResult=(0,_resolveRewrites.default)(addBasePath(addLocale(delBasePath(as),this.locale)),pages,rewrites,query,p=>resolveDynamicRoute({pathname:p},pages).pathname,this.locales);resolvedAs=rewritesResult.asPath;if(rewritesResult.matchedPage&&rewritesResult.resolvedHref){// if this directly matches a page we need to update the href to
// allow the correct page chunk to be loaded
route=rewritesResult.resolvedHref;pathname=rewritesResult.resolvedHref;parsed.pathname=pathname;url=(0,_utils.formatWithValidation)(parsed);}}if(!isLocalURL(as)){if(true){throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as`+`\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);}window.location.href=as;return false;}resolvedAs=delLocale(delBasePath(resolvedAs),this.locale);if((0,_isDynamic.isDynamicRoute)(route)){const parsedAs=(0,_parseRelativeUrl.parseRelativeUrl)(resolvedAs);const asPathname=parsedAs.pathname;const routeRegex=(0,_routeRegex.getRouteRegex)(route);const routeMatch=(0,_routeMatcher.getRouteMatcher)(routeRegex)(asPathname);const shouldInterpolate=route===asPathname;const interpolatedAs=shouldInterpolate?interpolateAs(route,asPathname,query):{};if(!routeMatch||shouldInterpolate&&!interpolatedAs.result){const missingParams=Object.keys(routeRegex.groups).filter(param=>!query[param]);if(missingParams.length>0){if(true){console.warn(`${shouldInterpolate?`Interpolating href`:`Mismatching \`as\` and \`href\``} failed to manually provide `+`the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);}throw new Error((shouldInterpolate?`The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. `:`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `)+`Read more: https://err.sh/vercel/next.js/${shouldInterpolate?'href-interpolation-failed':'incompatible-href-as'}`);}}else if(shouldInterpolate){as=(0,_utils.formatWithValidation)(Object.assign({},parsedAs,{pathname:interpolatedAs.result,query:omitParmsFromQuery(query,interpolatedAs.params)}));}else{// Merge params into `query`, overwriting any specified in search
Object.assign(query,routeMatch);}}Router.events.emit('routeChangeStart',as,routeProps);try{var _self$__NEXT_DATA__$p,_self$__NEXT_DATA__$p2;let routeInfo=await this.getRouteInfo(route,pathname,query,as,resolvedAs,routeProps);let{error,props,__N_SSG,__N_SSP}=routeInfo;// handle redirect on client-transition
if((__N_SSG||__N_SSP)&&props){if(props.pageProps&&props.pageProps.__N_REDIRECT){const destination=props.pageProps.__N_REDIRECT;// check if destination is internal (resolves to a page) and attempt
// client-navigation if it is falling back to hard navigation if
// it's not
if(destination.startsWith('/')){const parsedHref=(0,_parseRelativeUrl.parseRelativeUrl)(destination);resolveDynamicRoute(parsedHref,pages,false);if(pages.includes(parsedHref.pathname)){const{url:newUrl,as:newAs}=prepareUrlAs(this,destination,destination);return this.change(method,newUrl,newAs,options);}}window.location.href=destination;return new Promise(()=>{});}this.isPreview=!!props.__N_PREVIEW;// handle SSG data 404
if(props.notFound===SSG_DATA_NOT_FOUND){let notFoundRoute;try{await this.fetchComponent('/404');notFoundRoute='/404';}catch(_){notFoundRoute='/_error';}routeInfo=await this.getRouteInfo(notFoundRoute,notFoundRoute,query,as,resolvedAs,{shallow:false});}}Router.events.emit('beforeHistoryChange',as,routeProps);this.changeState(method,url,as,options);if(true){const appComp=this.components['/_app'].Component;window.next.isPrerendered=appComp.getInitialProps===appComp.origGetInitialProps&&!routeInfo.Component.getInitialProps;}// shallow routing is only allowed for same page URL changes.
const isValidShallowRoute=options.shallow&&this.route===route;if(options._h&&pathname==='/_error'&&((_self$__NEXT_DATA__$p=self.__NEXT_DATA__.props)==null?void 0:(_self$__NEXT_DATA__$p2=_self$__NEXT_DATA__$p.pageProps)==null?void 0:_self$__NEXT_DATA__$p2.statusCode)===500&&props!=null&&props.pageProps){// ensure statusCode is still correct for static 500 page
// when updating query information
props.pageProps.statusCode=500;}await this.set(route,pathname,query,cleanedAs,routeInfo,forcedScroll||(isValidShallowRoute||!options.scroll?null:{x:0,y:0})).catch(e=>{if(e.cancelled)error=error||e;else throw e;});if(error){Router.events.emit('routeChangeError',error,cleanedAs,routeProps);throw error;}if(process.env.__NEXT_I18N_SUPPORT){if(this.locale){document.documentElement.lang=this.locale;}}Router.events.emit('routeChangeComplete',as,routeProps);return true;}catch(err){if(err.cancelled){return false;}throw err;}}changeState(method,url,as,options={}){if(true){if(typeof window.history==='undefined'){console.error(`Warning: window.history is not available.`);return;}if(typeof window.history[method]==='undefined'){console.error(`Warning: window.history.${method} is not available`);return;}}if(method!=='pushState'||(0,_utils.getURL)()!==as){this._shallow=options.shallow;window.history[method]({url,as,options,__N:true,idx:this._idx=method!=='pushState'?this._idx:this._idx+1},// Most browsers currently ignores this parameter, although they may use it in the future.
// Passing the empty string here should be safe against future changes to the method.
// https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
'',as);}}async handleRouteInfoError(err,pathname,query,as,routeProps,loadErrorFail){if(err.cancelled){// bubble up cancellation errors
throw err;}if((0,_routeLoader.isAssetError)(err)||loadErrorFail){Router.events.emit('routeChangeError',err,as,routeProps);// If we can't load the page it could be one of following reasons
//  1. Page doesn't exists
//  2. Page does exist in a different zone
//  3. Internal error while loading the page
// So, doing a hard reload is the proper way to deal with this.
window.location.href=as;// Changing the URL doesn't block executing the current code path.
// So let's throw a cancellation error stop the routing logic.
throw buildCancellationError();}try{let Component;let styleSheets;let props;if(typeof Component==='undefined'||typeof styleSheets==='undefined'){;({page:Component,styleSheets}=await this.fetchComponent('/_error'));}const routeInfo={props,Component,styleSheets,err,error:err};if(!routeInfo.props){try{routeInfo.props=await this.getInitialProps(Component,{err,pathname,query});}catch(gipErr){console.error('Error in error page `getInitialProps`: ',gipErr);routeInfo.props={};}}return routeInfo;}catch(routeInfoErr){return this.handleRouteInfoError(routeInfoErr,pathname,query,as,routeProps,true);}}async getRouteInfo(route,pathname,query,as,resolvedAs,routeProps){try{const existingRouteInfo=this.components[route];if(routeProps.shallow&&existingRouteInfo&&this.route===route){return existingRouteInfo;}const cachedRouteInfo=existingRouteInfo&&'initial'in existingRouteInfo?undefined:existingRouteInfo;const routeInfo=cachedRouteInfo?cachedRouteInfo:await this.fetchComponent(route).then(res=>({Component:res.page,styleSheets:res.styleSheets,__N_SSG:res.mod.__N_SSG,__N_SSP:res.mod.__N_SSP}));const{Component,__N_SSG,__N_SSP}=routeInfo;if(true){const{isValidElementType}=__webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");if(!isValidElementType(Component)){throw new Error(`The default export is not a React Component in page: "${pathname}"`);}}let dataHref;if(__N_SSG||__N_SSP){dataHref=this.pageLoader.getDataHref((0,_utils.formatWithValidation)({pathname,query}),resolvedAs,__N_SSG,this.locale);}const props=await this._getData(()=>__N_SSG?this._getStaticData(dataHref):__N_SSP?this._getServerData(dataHref):this.getInitialProps(Component,// we provide AppTree later so this needs to be `any`
{pathname,query,asPath:as}));routeInfo.props=props;this.components[route]=routeInfo;return routeInfo;}catch(err){return this.handleRouteInfoError(err,pathname,query,as,routeProps);}}set(route,pathname,query,as,data,resetScroll){this.isFallback=false;this.route=route;this.pathname=pathname;this.query=query;this.asPath=as;return this.notify(data,resetScroll);}/**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */beforePopState(cb){this._bps=cb;}onlyAHashChange(as){if(!this.asPath)return false;const[oldUrlNoHash,oldHash]=this.asPath.split('#');const[newUrlNoHash,newHash]=as.split('#');// Makes sure we scroll to the provided hash if the url/hash are the same
if(newHash&&oldUrlNoHash===newUrlNoHash&&oldHash===newHash){return true;}// If the urls are change, there's more than a hash change
if(oldUrlNoHash!==newUrlNoHash){return false;}// If the hash has changed, then it's a hash only change.
// This check is necessary to handle both the enter and
// leave hash === '' cases. The identity case falls through
// and is treated as a next reload.
return oldHash!==newHash;}scrollToHash(as){const[,hash]=as.split('#');// Scroll to top if the hash is just `#` with no value or `#top`
// To mirror browsers
if(hash===''||hash==='top'){window.scrollTo(0,0);return;}// First we check if the element by id is found
const idEl=document.getElementById(hash);if(idEl){idEl.scrollIntoView();return;}// If there's no element with the id, we check the `name` property
// To mirror browsers
const nameEl=document.getElementsByName(hash)[0];if(nameEl){nameEl.scrollIntoView();}}urlIsNew(asPath){return this.asPath!==asPath;}/**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */async prefetch(url,asPath=url,options={}){let parsed=(0,_parseRelativeUrl.parseRelativeUrl)(url);let{pathname}=parsed;if(process.env.__NEXT_I18N_SUPPORT){if(options.locale===false){pathname=(0,_normalizeLocalePath.normalizeLocalePath)(pathname,this.locales).pathname;parsed.pathname=pathname;url=(0,_utils.formatWithValidation)(parsed);let parsedAs=(0,_parseRelativeUrl.parseRelativeUrl)(asPath);const localePathResult=(0,_normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname,this.locales);parsedAs.pathname=localePathResult.pathname;options.locale=localePathResult.detectedLocale||this.defaultLocale;asPath=(0,_utils.formatWithValidation)(parsedAs);}}const pages=await this.pageLoader.getPageList();parsed=resolveDynamicRoute(parsed,pages,false);if(parsed.pathname!==pathname){pathname=parsed.pathname;url=(0,_utils.formatWithValidation)(parsed);}let route=(0,_normalizeTrailingSlash.removePathTrailingSlash)(pathname);let resolvedAs=asPath;if(process.env.__NEXT_HAS_REWRITES&&asPath.startsWith('/')){let rewrites;({__rewrites:rewrites}=await(0,_routeLoader.getClientBuildManifest)());const rewritesResult=(0,_resolveRewrites.default)(addBasePath(addLocale(delBasePath(asPath),this.locale)),pages,rewrites,parsed.query,p=>resolveDynamicRoute({pathname:p},pages).pathname,this.locales);if(rewritesResult.matchedPage&&rewritesResult.resolvedHref){// if this directly matches a page we need to update the href to
// allow the correct page chunk to be loaded
route=rewritesResult.resolvedHref;pathname=rewritesResult.resolvedHref;parsed.pathname=pathname;url=(0,_utils.formatWithValidation)(parsed);resolvedAs=rewritesResult.asPath;}}// Prefetch is not supported in development mode because it would trigger on-demand-entries
if(true){return;}await Promise.all([this.pageLoader._isSsg(url).then(isSsg=>{return isSsg?this._getStaticData(this.pageLoader.getDataHref(url,resolvedAs,true,typeof options.locale!=='undefined'?options.locale:this.locale)):false;}),this.pageLoader[options.priority?'loadPage':'prefetch'](route)]);}async fetchComponent(route){let cancelled=false;const cancel=this.clc=()=>{cancelled=true;};const componentResult=await this.pageLoader.loadPage(route);if(cancelled){const error=new Error(`Abort fetching component for route: "${route}"`);error.cancelled=true;throw error;}if(cancel===this.clc){this.clc=null;}return componentResult;}_getData(fn){let cancelled=false;const cancel=()=>{cancelled=true;};this.clc=cancel;return fn().then(data=>{if(cancel===this.clc){this.clc=null;}if(cancelled){const err=new Error('Loading initial props cancelled');err.cancelled=true;throw err;}return data;});}_getStaticData(dataHref){const{href:cacheKey}=new URL(dataHref,window.location.href);if(false){}return fetchNextData(dataHref,this.isSsr).then(data=>{this.sdc[cacheKey]=data;return data;});}_getServerData(dataHref){const{href:resourceKey}=new URL(dataHref,window.location.href);if(this.sdr[resourceKey]){return this.sdr[resourceKey];}return this.sdr[resourceKey]=fetchNextData(dataHref,this.isSsr).then(data=>{delete this.sdr[resourceKey];return data;}).catch(err=>{delete this.sdr[resourceKey];throw err;});}getInitialProps(Component,ctx){const{Component:App}=this.components['/_app'];const AppTree=this._wrapApp(App);ctx.AppTree=AppTree;return(0,_utils.loadGetInitialProps)(App,{AppTree,Component,router:this,ctx});}abortComponentLoad(as,routeProps){if(this.clc){Router.events.emit('routeChangeError',buildCancellationError(),as,routeProps);this.clc();this.clc=null;}}notify(data,resetScroll){return this.sub(data,this.components['/_app'].Component,resetScroll);}}exports.default=Router;Router.events=(0,_mitt.default)();
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.formatUrl=formatUrl;var querystring=_interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols=/https?|ftp|gopher|file/;function formatUrl(urlObj){let{auth,hostname}=urlObj;let protocol=urlObj.protocol||'';let pathname=urlObj.pathname||'';let hash=urlObj.hash||'';let query=urlObj.query||'';let host=false;auth=auth?encodeURIComponent(auth).replace(/%3A/i,':')+'@':'';if(urlObj.host){host=auth+urlObj.host;}else if(hostname){host=auth+(~hostname.indexOf(':')?`[${hostname}]`:hostname);if(urlObj.port){host+=':'+urlObj.port;}}if(query&&typeof query==='object'){query=String(querystring.urlQueryToSearchParams(query));}let search=urlObj.search||query&&`?${query}`||'';if(protocol&&protocol.substr(-1)!==':')protocol+=':';if(urlObj.slashes||(!protocol||slashedProtocols.test(protocol))&&host!==false){host='//'+(host||'');if(pathname&&pathname[0]!=='/')pathname='/'+pathname;}else if(!host){host='';}if(hash&&hash[0]!=='#')hash='#'+hash;if(search&&search[0]!=='?')search='?'+search;pathname=pathname.replace(/[?#]/g,encodeURIComponent);search=search.replace('#','%23');return`${protocol}${host}${pathname}${search}${hash}`;}
//# sourceMappingURL=format-url.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
exports.__esModule=true;exports.default=getAssetPathFromRoute;// Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...
function getAssetPathFromRoute(route,ext=''){const path=route==='/'?'/index':/^\/index(\/|$)/.test(route)?`/index${route}`:`${route}`;return path+ext;}
//# sourceMappingURL=get-asset-path-from-route.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
exports.__esModule=true;exports.isDynamicRoute=isDynamicRoute;// Identify /[param]/ in route string
const TEST_ROUTE=/\/\[[^/]+?\](?=\/|$)/;function isDynamicRoute(route){return TEST_ROUTE.test(route);}
//# sourceMappingURL=is-dynamic.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.parseRelativeUrl=parseRelativeUrl;var _utils=__webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");var _querystring=__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");/**
 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
 * (e.g. `./hello`) then at least base must be.
 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
 * the current origin will be parsed as relative
 */function parseRelativeUrl(url,base){const globalBase=new URL(typeof window==='undefined'?'http://n':(0,_utils.getLocationOrigin)());const resolvedBase=base?new URL(base,globalBase):globalBase;const{pathname,searchParams,search,hash,href,origin}=new URL(url,resolvedBase);if(origin!==globalBase.origin){throw new Error(`invariant: invalid relative URL, router received ${url}`);}return{pathname,query:(0,_querystring.searchParamsToUrlQuery)(searchParams),search,hash,href:href.slice(globalBase.origin.length)};}
//# sourceMappingURL=parse-relative-url.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.pathToRegexp=exports.default=exports.customRouteMatcherOptions=exports.matcherOptions=void 0;var pathToRegexp=_interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));exports.pathToRegexp=pathToRegexp;function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}const matcherOptions={sensitive:false,delimiter:'/'};exports.matcherOptions=matcherOptions;const customRouteMatcherOptions={...matcherOptions,strict:true};exports.customRouteMatcherOptions=customRouteMatcherOptions;var _default=(customRoute=false)=>{return path=>{const keys=[];const matcherRegex=pathToRegexp.pathToRegexp(path,keys,customRoute?customRouteMatcherOptions:matcherOptions);const matcher=pathToRegexp.regexpToFunction(matcherRegex,keys);return(pathname,params)=>{const res=pathname==null?false:matcher(pathname);if(!res){return false;}if(customRoute){for(const key of keys){// unnamed params should be removed as they
// are not allowed to be used in the destination
if(typeof key.name==='number'){delete res.params[key.name];}}}return{...params,...res.params};};};};exports.default=_default;
//# sourceMappingURL=path-match.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.compileNonPath=compileNonPath;exports.default=prepareDestination;var _querystring=__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");var _parseRelativeUrl=__webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");var pathToRegexp=_interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function compileNonPath(value,params){if(!value.includes(':')){return value;}for(const key of Object.keys(params)){if(value.includes(`:${key}`)){value=value.replace(new RegExp(`:${key}\\*`,'g'),`:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`,'g'),`:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`,'g'),`:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`,'g'),`--ESCAPED_PARAM_COLON${key}`);}}value=value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,'\\$1').replace(/--ESCAPED_PARAM_PLUS/g,'+').replace(/--ESCAPED_PARAM_COLON/g,':').replace(/--ESCAPED_PARAM_QUESTION/g,'?').replace(/--ESCAPED_PARAM_ASTERISKS/g,'*');// the value needs to start with a forward-slash to be compiled
// correctly
return pathToRegexp.compile(`/${value}`,{validate:false})(params).substr(1);}function prepareDestination(destination,params,query,appendParamsToQuery){let parsedDestination={};// clone query so we don't modify the original
query=Object.assign({},query);const hadLocale=query.__nextLocale;delete query.__nextLocale;delete query.__nextDefaultLocale;if(destination.startsWith('/')){parsedDestination=(0,_parseRelativeUrl.parseRelativeUrl)(destination);}else{const{pathname,searchParams,hash,hostname,port,protocol,search,href}=new URL(destination);parsedDestination={pathname,query:(0,_querystring.searchParamsToUrlQuery)(searchParams),hash,protocol,hostname,port,search,href};}const destQuery=parsedDestination.query;const destPath=`${parsedDestination.pathname}${parsedDestination.hash||''}`;const destPathParamKeys=[];pathToRegexp.pathToRegexp(destPath,destPathParamKeys);const destPathParams=destPathParamKeys.map(key=>key.name);let destinationCompiler=pathToRegexp.compile(destPath,// we don't validate while compiling the destination since we should
// have already validated before we got to this point and validating
// breaks compiling destinations with named pattern params from the source
// e.g. /something:hello(.*) -> /another/:hello is broken with validation
// since compile validation is meant for reversing and not for inserting
// params from a separate path-regex into another
{validate:false});let newUrl;// update any params in query values
for(const[key,strOrArray]of Object.entries(destQuery)){let value=Array.isArray(strOrArray)?strOrArray[0]:strOrArray;if(value){// the value needs to start with a forward-slash to be compiled
// correctly
value=compileNonPath(value,params);}destQuery[key]=value;}// add path params to query if it's not a redirect and not
// already defined in destination query or path
let paramKeys=Object.keys(params);// remove internal param for i18n
if(hadLocale){paramKeys=paramKeys.filter(name=>name!=='nextInternalLocale');}if(appendParamsToQuery&&!paramKeys.some(key=>destPathParams.includes(key))){for(const key of paramKeys){if(!(key in destQuery)){destQuery[key]=params[key];}}}try{newUrl=destinationCompiler(params);const[pathname,hash]=newUrl.split('#');parsedDestination.pathname=pathname;parsedDestination.hash=`${hash?'#':''}${hash||''}`;delete parsedDestination.search;}catch(err){if(err.message.match(/Expected .*? to not repeat, but got an array/)){throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);}throw err;}// Query merge order lowest priority to highest
// 1. initial URL query values
// 2. path segment values
// 3. destination specified query values
parsedDestination.query={...query,...parsedDestination.query};return{newUrl,parsedDestination};}
//# sourceMappingURL=prepare-destination.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
exports.__esModule=true;exports.searchParamsToUrlQuery=searchParamsToUrlQuery;exports.urlQueryToSearchParams=urlQueryToSearchParams;exports.assign=assign;function searchParamsToUrlQuery(searchParams){const query={};searchParams.forEach((value,key)=>{if(typeof query[key]==='undefined'){query[key]=value;}else if(Array.isArray(query[key])){;query[key].push(value);}else{query[key]=[query[key],value];}});return query;}function stringifyUrlQueryParam(param){if(typeof param==='string'||typeof param==='number'&&!isNaN(param)||typeof param==='boolean'){return String(param);}else{return'';}}function urlQueryToSearchParams(urlQuery){const result=new URLSearchParams();Object.entries(urlQuery).forEach(([key,value])=>{if(Array.isArray(value)){value.forEach(item=>result.append(key,stringifyUrlQueryParam(item)));}else{result.set(key,stringifyUrlQueryParam(value));}});return result;}function assign(target,...searchParamsList){searchParamsList.forEach(searchParams=>{Array.from(searchParams.keys()).forEach(key=>target.delete(key));searchParams.forEach((value,key)=>target.append(key,value));});return target;}
//# sourceMappingURL=querystring.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.default=resolveRewrites;var _pathMatch=_interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));var _prepareDestination=_interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));var _normalizeTrailingSlash=__webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");var _normalizeLocalePath=__webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");var _parseRelativeUrl=__webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");var _router=__webpack_require__(/*! ../router */ "./node_modules/next/dist/next-server/lib/router/router.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const customRouteMatcher=(0,_pathMatch.default)(true);function resolveRewrites(asPath,pages,rewrites,query,resolveHref,locales){let matchedPage=false;let parsedAs=(0,_parseRelativeUrl.parseRelativeUrl)(asPath);let fsPathname=(0,_normalizeTrailingSlash.removePathTrailingSlash)((0,_normalizeLocalePath.normalizeLocalePath)((0,_router.delBasePath)(parsedAs.pathname),locales).pathname);let resolvedHref;if(!pages.includes(fsPathname)){for(const rewrite of rewrites){const matcher=customRouteMatcher(rewrite.source);const params=matcher(parsedAs.pathname);if(params){if(!rewrite.destination){// this is a proxied rewrite which isn't handled on the client
break;}const destRes=(0,_prepareDestination.default)(rewrite.destination,params,query,true);parsedAs=destRes.parsedDestination;asPath=destRes.newUrl;Object.assign(query,destRes.parsedDestination.query);fsPathname=(0,_normalizeTrailingSlash.removePathTrailingSlash)((0,_normalizeLocalePath.normalizeLocalePath)((0,_router.delBasePath)(asPath),locales).pathname);if(pages.includes(fsPathname)){// check if we now match a page as this means we are done
// resolving the rewrites
matchedPage=true;resolvedHref=fsPathname;break;}// check if we match a dynamic-route, if so we break the rewrites chain
resolvedHref=resolveHref(fsPathname);if(resolvedHref!==asPath&&pages.includes(resolvedHref)){matchedPage=true;break;}}}}return{asPath,parsedAs,matchedPage,resolvedHref};}
//# sourceMappingURL=resolve-rewrites.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
exports.__esModule=true;exports.getRouteMatcher=getRouteMatcher;function getRouteMatcher(routeRegex){const{re,groups}=routeRegex;return pathname=>{const routeMatch=re.exec(pathname);if(!routeMatch){return false;}const decode=param=>{try{return decodeURIComponent(param);}catch(_){const err=new Error('failed to decode param');err.code='DECODE_FAILED';throw err;}};const params={};Object.keys(groups).forEach(slugName=>{const g=groups[slugName];const m=routeMatch[g.pos];if(m!==undefined){params[slugName]=~m.indexOf('/')?m.split('/').map(entry=>decode(entry)):g.repeat?[decode(m)]:decode(m);}});return params;};}
//# sourceMappingURL=route-matcher.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
exports.__esModule=true;exports.getRouteRegex=getRouteRegex;// this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str){return str.replace(/[|\\{}()[\]^$+*?.-]/g,'\\$&');}function parseParameter(param){const optional=param.startsWith('[')&&param.endsWith(']');if(optional){param=param.slice(1,-1);}const repeat=param.startsWith('...');if(repeat){param=param.slice(3);}return{key:param,repeat,optional};}function getRouteRegex(normalizedRoute){const segments=(normalizedRoute.replace(/\/$/,'')||'/').slice(1).split('/');const groups={};let groupIndex=1;const parameterizedRoute=segments.map(segment=>{if(segment.startsWith('[')&&segment.endsWith(']')){const{key,optional,repeat}=parseParameter(segment.slice(1,-1));groups[key]={pos:groupIndex++,repeat,optional};return repeat?optional?'(?:/(.+?))?':'/(.+?)':'/([^/]+?)';}else{return`/${escapeRegex(segment)}`;}}).join('');// dead code eliminate for browser since it's only needed
// while generating routes-manifest
if(typeof window==='undefined'){let routeKeyCharCode=97;let routeKeyCharLength=1;// builds a minimal routeKey using only a-z and minimal number of characters
const getSafeRouteKey=()=>{let routeKey='';for(let i=0;i<routeKeyCharLength;i++){routeKey+=String.fromCharCode(routeKeyCharCode);routeKeyCharCode++;if(routeKeyCharCode>122){routeKeyCharLength++;routeKeyCharCode=97;}}return routeKey;};const routeKeys={};let namedParameterizedRoute=segments.map(segment=>{if(segment.startsWith('[')&&segment.endsWith(']')){const{key,optional,repeat}=parseParameter(segment.slice(1,-1));// replace any non-word characters since they can break
// the named regex
let cleanedKey=key.replace(/\W/g,'');let invalidKey=false;// check if the key is still invalid and fallback to using a known
// safe key
if(cleanedKey.length===0||cleanedKey.length>30){invalidKey=true;}if(!isNaN(parseInt(cleanedKey.substr(0,1)))){invalidKey=true;}if(invalidKey){cleanedKey=getSafeRouteKey();}routeKeys[cleanedKey]=key;return repeat?optional?`(?:/(?<${cleanedKey}>.+?))?`:`/(?<${cleanedKey}>.+?)`:`/(?<${cleanedKey}>[^/]+?)`;}else{return`/${escapeRegex(segment)}`;}}).join('');return{re:new RegExp(`^${parameterizedRoute}(?:/)?$`),groups,routeKeys,namedRegex:`^${namedParameterizedRoute}(?:/)?$`};}return{re:new RegExp(`^${parameterizedRoute}(?:/)?$`),groups};}
//# sourceMappingURL=route-regex.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.execOnce=execOnce;exports.getLocationOrigin=getLocationOrigin;exports.getURL=getURL;exports.getDisplayName=getDisplayName;exports.isResSent=isResSent;exports.loadGetInitialProps=loadGetInitialProps;exports.formatWithValidation=formatWithValidation;exports.ST=exports.SP=exports.urlObjectKeys=void 0;var _formatUrl=__webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");/**
 * Utils
 */function execOnce(fn){let used=false;let result;return(...args)=>{if(!used){used=true;result=fn(...args);}return result;};}function getLocationOrigin(){const{protocol,hostname,port}=window.location;return`${protocol}//${hostname}${port?':'+port:''}`;}function getURL(){const{href}=window.location;const origin=getLocationOrigin();return href.substring(origin.length);}function getDisplayName(Component){return typeof Component==='string'?Component:Component.displayName||Component.name||'Unknown';}function isResSent(res){return res.finished||res.headersSent;}async function loadGetInitialProps(App,ctx){if(true){var _App$prototype;if((_App$prototype=App.prototype)!=null&&_App$prototype.getInitialProps){const message=`"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;throw new Error(message);}}// when called from _app `ctx` is nested in `ctx`
const res=ctx.res||ctx.ctx&&ctx.ctx.res;if(!App.getInitialProps){if(ctx.ctx&&ctx.Component){// @ts-ignore pageProps default
return{pageProps:await loadGetInitialProps(ctx.Component,ctx.ctx)};}return{};}const props=await App.getInitialProps(ctx);if(res&&isResSent(res)){return props;}if(!props){const message=`"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;throw new Error(message);}if(true){if(Object.keys(props).length===0&&!ctx.ctx){console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);}}return props;}const urlObjectKeys=['auth','hash','host','hostname','href','path','pathname','port','protocol','query','search','slashes'];exports.urlObjectKeys=urlObjectKeys;function formatWithValidation(url){if(true){if(url!==null&&typeof url==='object'){Object.keys(url).forEach(key=>{if(urlObjectKeys.indexOf(key)===-1){console.warn(`Unknown key passed via urlObject into url.format: ${key}`);}});}}return(0,_formatUrl.formatUrl)(url);}const SP=typeof performance!=='undefined';exports.SP=SP;const ST=SP&&typeof performance.mark==='function'&&typeof performance.measure==='function';exports.ST=ST;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/path-to-regexp/node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/path-to-regexp/node_modules/isarray/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/path-to-regexp/node_modules/isarray/index.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => (/* binding */ Accordion),
/* harmony export */   "AccordionItem": () => (/* binding */ AccordionItem),
/* harmony export */   "AccordionItemButton": () => (/* binding */ AccordionItemButtonWrapper),
/* harmony export */   "AccordionItemHeading": () => (/* binding */ AccordionItemHeadingWrapper),
/* harmony export */   "AccordionItemPanel": () => (/* binding */ AccordionItemPanel),
/* harmony export */   "AccordionItemState": () => (/* binding */ AccordionItemState),
/* harmony export */   "resetNextUuid": () => (/* binding */ resetNextUuid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var AccordionStore = function AccordionStore(_ref) {
  var _this = this;

  var _ref$expanded = _ref.expanded,
      _expanded = _ref$expanded === void 0 ? [] : _ref$expanded,
      _ref$allowMultipleExp = _ref.allowMultipleExpanded,
      allowMultipleExpanded = _ref$allowMultipleExp === void 0 ? false : _ref$allowMultipleExp,
      _ref$allowZeroExpande = _ref.allowZeroExpanded,
      allowZeroExpanded = _ref$allowZeroExpande === void 0 ? false : _ref$allowZeroExpande;

  _classCallCheck(this, AccordionStore);

  _defineProperty(this, "expanded", void 0);

  _defineProperty(this, "allowMultipleExpanded", void 0);

  _defineProperty(this, "allowZeroExpanded", void 0);

  _defineProperty(this, "toggleExpanded", function (uuid) {
    if (_this.isItemDisabled(uuid)) {
      return _this;
    }

    var isExpanded = _this.isItemExpanded(uuid);

    if (!isExpanded) {
      return _this.augment({
        expanded: _this.allowMultipleExpanded ? [].concat(_toConsumableArray(_this.expanded), [uuid]) : [uuid]
      });
    } else {
      return _this.augment({
        expanded: _this.expanded.filter(function (expandedUuid) {
          return expandedUuid !== uuid;
        })
      });
    }
  });

  _defineProperty(this, "isItemDisabled", function (uuid) {
    var isExpanded = _this.isItemExpanded(uuid);

    var isOnlyOneExpanded = _this.expanded.length === 1;
    return Boolean(isExpanded && !_this.allowZeroExpanded && isOnlyOneExpanded);
  });

  _defineProperty(this, "isItemExpanded", function (uuid) {
    return _this.expanded.indexOf(uuid) !== -1;
  });

  _defineProperty(this, "getPanelAttributes", function (uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);
    return {
      role: _this.allowMultipleExpanded ? undefined : 'region',
      'aria-hidden': _this.allowMultipleExpanded ? !expanded : undefined,
      'aria-labelledby': _this.getButtonId(uuid),
      id: _this.getPanelId(uuid),
      hidden: expanded ? undefined : true
    };
  });

  _defineProperty(this, "getHeadingAttributes", function () {
    return {
      role: 'heading'
    };
  });

  _defineProperty(this, "getButtonAttributes", function (uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);

    var disabled = _this.isItemDisabled(uuid);

    return {
      id: _this.getButtonId(uuid),
      'aria-disabled': disabled,
      'aria-expanded': expanded,
      'aria-controls': _this.getPanelId(uuid),
      role: 'button',
      tabIndex: 0
    };
  });

  _defineProperty(this, "getPanelId", function (uuid) {
    return "accordion__panel-".concat(uuid);
  });

  _defineProperty(this, "getButtonId", function (uuid) {
    return "accordion__heading-".concat(uuid);
  });

  _defineProperty(this, "augment", function (args) {
    return new AccordionStore(_objectSpread2({
      expanded: _this.expanded,
      allowMultipleExpanded: _this.allowMultipleExpanded,
      allowZeroExpanded: _this.allowZeroExpanded
    }, args));
  });

  this.expanded = _expanded;
  this.allowMultipleExpanded = allowMultipleExpanded;
  this.allowZeroExpanded = allowZeroExpanded;
};

var Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var Provider = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Provider, _React$PureComponent);

  var _super = _createSuper(Provider);

  function Provider() {
    var _this;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", new AccordionStore({
      expanded: _this.props.preExpanded,
      allowMultipleExpanded: _this.props.allowMultipleExpanded,
      allowZeroExpanded: _this.props.allowZeroExpanded
    }));

    _defineProperty(_assertThisInitialized(_this), "toggleExpanded", function (key) {
      _this.setState(function (state) {
        return state.toggleExpanded(key);
      }, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state.expanded);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isItemDisabled", function (key) {
      return _this.state.isItemDisabled(key);
    });

    _defineProperty(_assertThisInitialized(_this), "isItemExpanded", function (key) {
      return _this.state.isItemExpanded(key);
    });

    _defineProperty(_assertThisInitialized(_this), "getPanelAttributes", function (key, dangerouslySetExpanded) {
      return _this.state.getPanelAttributes(key, dangerouslySetExpanded);
    });

    _defineProperty(_assertThisInitialized(_this), "getHeadingAttributes", function () {
      // uuid: UUID
      return _this.state.getHeadingAttributes();
    });

    _defineProperty(_assertThisInitialized(_this), "getButtonAttributes", function (key, dangerouslySetExpanded) {
      return _this.state.getButtonAttributes(key, dangerouslySetExpanded);
    });

    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          allowZeroExpanded = _this$state.allowZeroExpanded,
          allowMultipleExpanded = _this$state.allowMultipleExpanded;
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider, {
        value: {
          allowMultipleExpanded: allowMultipleExpanded,
          allowZeroExpanded: allowZeroExpanded,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]);

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

_defineProperty(Provider, "defaultProps", {
  allowMultipleExpanded: false,
  allowZeroExpanded: false
});

var Consumer = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(Consumer, _React$PureComponent2);

  var _super2 = _createSuper(Consumer);

  function Consumer() {
    var _this2;

    _classCallCheck(this, Consumer);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "renderChildren", function (container) {
      return container ? _this2.props.children(container) : null;
    });

    return _this2;
  }

  _createClass(Consumer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Consumer, null, this.renderChildren);
    }
  }]);

  return Consumer;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

var Accordion = function Accordion(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion' : _ref$className,
      allowMultipleExpanded = _ref.allowMultipleExpanded,
      allowZeroExpanded = _ref.allowZeroExpanded,
      onChange = _ref.onChange,
      preExpanded = _ref.preExpanded,
      rest = _objectWithoutProperties(_ref, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Provider, {
    preExpanded: preExpanded,
    allowMultipleExpanded: allowMultipleExpanded,
    allowZeroExpanded: allowZeroExpanded,
    onChange: onChange
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _extends({
    "data-accordion-component": "Accordion",
    className: className
  }, rest)));
};

var DisplayName;

(function (DisplayName) {
  DisplayName["Accordion"] = "Accordion";
  DisplayName["AccordionItem"] = "AccordionItem";
  DisplayName["AccordionItemButton"] = "AccordionItemButton";
  DisplayName["AccordionItemHeading"] = "AccordionItemHeading";
  DisplayName["AccordionItemPanel"] = "AccordionItemPanel";
})(DisplayName || (DisplayName = {}));

var DisplayName$1 = DisplayName;

var DEFAULT = 0;
var counter = DEFAULT;
function nextUuid() {
  var current = counter;
  counter = counter + 1;
  return "raa-".concat(current);
}
function resetNextUuid() {
  counter = DEFAULT;
} // HTML5 ids allow all unicode characters, except for ASCII whitespaces
// https://infra.spec.whatwg.org/#ascii-whitespace
// eslint-disable-next-line no-control-regex

var idRegex = /[\u0009\u000a\u000c\u000d\u0020]/g;
function assertValidHtmlId(htmlId) {
  if (htmlId === '' || idRegex.test(htmlId)) {
    console.error("uuid must be a valid HTML5 id but was given \"".concat(htmlId, "\", ASCII whitespaces are forbidden"));
    return false;
  }

  return true;
}

var Context$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

var Provider$1 = function Provider(_ref) {
  var children = _ref.children,
      uuid = _ref.uuid,
      accordionContext = _ref.accordionContext,
      dangerouslySetExpanded = _ref.dangerouslySetExpanded;

  var toggleExpanded = function toggleExpanded() {
    accordionContext.toggleExpanded(uuid);
  };

  var renderChildren = function renderChildren(accordionContext) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : accordionContext.isItemExpanded(uuid);
    var disabled = accordionContext.isItemDisabled(uuid);
    var panelAttributes = accordionContext.getPanelAttributes(uuid, dangerouslySetExpanded);
    var headingAttributes = accordionContext.getHeadingAttributes(uuid);
    var buttonAttributes = accordionContext.getButtonAttributes(uuid, dangerouslySetExpanded);
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context$1.Provider, {
      value: {
        uuid: uuid,
        expanded: expanded,
        disabled: disabled,
        toggleExpanded: toggleExpanded,
        panelAttributes: panelAttributes,
        headingAttributes: headingAttributes,
        buttonAttributes: buttonAttributes
      }
    }, children);
  };

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Consumer, null, renderChildren);
};

var ProviderWrapper = function ProviderWrapper(props) {
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Consumer, null, function (accordionContext) {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Provider$1, _extends({}, props, {
      accordionContext: accordionContext
    }));
  });
};
var Consumer$1 = function Consumer(_ref2) {
  var children = _ref2.children;

  var renderChildren = function renderChildren(container) {
    return container ? children(container) : null;
  };

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context$1.Consumer, null, renderChildren);
};

var AccordionItem = function AccordionItem(_ref) {
  var customUuid = _ref.uuid,
      dangerouslySetExpanded = _ref.dangerouslySetExpanded,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__item' : _ref$className,
      activeClassName = _ref.activeClassName,
      rest = _objectWithoutProperties(_ref, ["uuid", "dangerouslySetExpanded", "className", "activeClassName"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(nextUuid()),
      _useState2 = _slicedToArray(_useState, 1),
      instanceUuid = _useState2[0];

  var uuid = customUuid || instanceUuid;

  var renderChildren = function renderChildren(itemContext) {
    var expanded = itemContext.expanded;
    var cx = expanded && activeClassName ? activeClassName : className;
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _extends({
      "data-accordion-component": "AccordionItem",
      className: cx
    }, rest));
  };

  assertValidHtmlId(uuid);

  if (rest.id) {
    assertValidHtmlId(rest.id);
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProviderWrapper, {
    uuid: uuid,
    dangerouslySetExpanded: dangerouslySetExpanded
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Consumer$1, null, renderChildren));
};

AccordionItem.displayName = DisplayName$1.AccordionItem;

function getClosestAccordion(el) {
  return el && (el.matches('[data-accordion-component="Accordion"]') ? el : getClosestAccordion(el.parentElement));
}
function getSiblingButtons(item) {
  var parentAccordion = getClosestAccordion(item);
  return parentAccordion && Array.from(parentAccordion.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function focusFirstSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var first = siblings[0];

  if (first) {
    first.focus();
  }
}
function focusLastSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var last = siblings[siblings.length - 1];

  if (last) {
    last.focus();
  }
}
function focusNextSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var next = siblings[currentIndex + 1];

    if (next) {
      next.focus();
    }
  }
}
function focusPreviousSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var previous = siblings[currentIndex - 1];

    if (previous) {
      previous.focus();
    }
  }
}

var keycodes = {
  END: 'End',
  ENTER: 'Enter',
  HOME: 'Home',
  SPACE: ' ',
  SPACE_DEPRECATED: 'Spacebar',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight'
};

var AccordionItemButton = function AccordionItemButton(_ref) {
  var toggleExpanded = _ref.toggleExpanded,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__button' : _ref$className,
      rest = _objectWithoutProperties(_ref, ["toggleExpanded", "className"]);

  var handleKeyPress = function handleKeyPress(evt) {
    var keyCode = evt.key;

    if (keyCode === keycodes.ENTER || keyCode === keycodes.SPACE || keyCode === keycodes.SPACE_DEPRECATED) {
      evt.preventDefault();
      toggleExpanded();
    }
    /* The following block is ignored from test coverage because at time
     * time of writing Jest/react-testing-library can not assert 'focus'
     * functionality.
     */
    // istanbul ignore next


    if (evt.target instanceof HTMLElement) {
      switch (keyCode) {
        case keycodes.HOME:
          {
            evt.preventDefault();
            focusFirstSiblingOf(evt.target);
            break;
          }

        case keycodes.END:
          {
            evt.preventDefault();
            focusLastSiblingOf(evt.target);
            break;
          }

        case keycodes.LEFT:
        case keycodes.UP:
          {
            evt.preventDefault();
            focusPreviousSiblingOf(evt.target);
            break;
          }

        case keycodes.RIGHT:
        case keycodes.DOWN:
          {
            evt.preventDefault();
            focusNextSiblingOf(evt.target);
            break;
          }
      }
    }
  };

  if (rest.id) {
    assertValidHtmlId(rest.id);
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _extends({
    className: className
  }, rest, {
    role: "button",
    tabIndex: 0,
    onClick: toggleExpanded,
    onKeyDown: handleKeyPress,
    "data-accordion-component": "AccordionItemButton"
  }));
};

var AccordionItemButtonWrapper = function AccordionItemButtonWrapper(props) {
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Consumer$1, null, function (itemContext) {
    var toggleExpanded = itemContext.toggleExpanded,
        buttonAttributes = itemContext.buttonAttributes;
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AccordionItemButton, _extends({
      toggleExpanded: toggleExpanded
    }, props, buttonAttributes));
  });
};

var defaultProps = {
  className: 'accordion__heading',
  'aria-level': 3
};
var SPEC_ERROR = "AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201CThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201D\n\n";
var AccordionItemHeading = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AccordionItemHeading, _React$PureComponent);

  var _super = _createSuper(AccordionItemHeading);

  function AccordionItemHeading() {
    var _this;

    _classCallCheck(this, AccordionItemHeading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "ref", void 0);

    _defineProperty(_assertThisInitialized(_this), "setRef", function (ref) {
      _this.ref = ref;
    });

    return _this;
  }

  _createClass(AccordionItemHeading, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _extends({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function VALIDATE(ref) {
      if (ref === undefined) {
        throw new Error('ref is undefined');
      }

      if (!(ref.childElementCount === 1 && ref.firstElementChild && ref.firstElementChild.getAttribute('data-accordion-component') === 'AccordionItemButton')) {
        throw new Error(SPEC_ERROR);
      }
    }
  }]);

  return AccordionItemHeading;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

_defineProperty(AccordionItemHeading, "defaultProps", defaultProps);

var AccordionItemHeadingWrapper = function AccordionItemHeadingWrapper(props) {
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Consumer$1, null, function (itemContext) {
    var headingAttributes = itemContext.headingAttributes;

    if (props.id) {
      assertValidHtmlId(props.id);
    }

    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AccordionItemHeading, _extends({}, props, headingAttributes));
  });
};

AccordionItemHeadingWrapper.displayName = DisplayName$1.AccordionItemHeading;

var AccordionItemPanel = function AccordionItemPanel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__panel' : _ref$className,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["className", "id"]);

  var renderChildren = function renderChildren(_ref2) {
    var panelAttributes = _ref2.panelAttributes;

    if (id) {
      assertValidHtmlId(id);
    }

    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _extends({
      "data-accordion-component": "AccordionItemPanel",
      className: className
    }, rest, panelAttributes));
  };

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Consumer$1, null, renderChildren);
};

var AccordionItemState = function AccordionItemState(_ref) {
  var children = _ref.children;

  var renderChildren = function renderChildren(itemContext) {
    var expanded = itemContext.expanded,
        disabled = itemContext.disabled;
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children({
      expanded: expanded,
      disabled: disabled
    }));
  };

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Consumer$1, null, renderChildren);
};




/***/ }),

/***/ "./node_modules/react-hook-form/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/react-hook-form/dist/index.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller),
/* harmony export */   "FormProvider": () => (/* binding */ FormProvider),
/* harmony export */   "appendErrors": () => (/* binding */ appendErrors),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "transformToNestObject": () => (/* binding */ transformToNestObject),
/* harmony export */   "useController": () => (/* binding */ useController),
/* harmony export */   "useFieldArray": () => (/* binding */ useFieldArray),
/* harmony export */   "useForm": () => (/* binding */ useForm),
/* harmony export */   "useFormContext": () => (/* binding */ useFormContext),
/* harmony export */   "useWatch": () => (/* binding */ useWatch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var isHTMLElement = (value) => value instanceof HTMLElement;

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const SELECT = 'select';
const UNDEFINED = 'undefined';
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

function attachEventListeners({ ref }, shouldAttachChangeEvent, handleChange) {
    if (isHTMLElement(ref) && handleChange) {
        ref.addEventListener(shouldAttachChangeEvent ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !(value instanceof Date);

var isKey = (value) => /^\w*$/.test(value);

var compact = (value) => value.filter(Boolean);

var stringToPath = (input) => compact(input
    .replace(/["|']/g, '')
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.'));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (data, value = {}) => {
    for (const key in data) {
        !isKey(key) ? set(value, key, data[key]) : (value[key] = data[key]);
    }
    return value;
};

var isUndefined = (val) => val === undefined;

var get = (obj = {}, path, defaultValue) => {
    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

var focusOnErrorField = (fields, fieldErrors) => {
    for (const key in fields) {
        if (get(fieldErrors, key)) {
            const field = fields[key];
            if (field) {
                if (field.ref.focus && isUndefined(field.ref.focus())) {
                    break;
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
};

var removeAllEventListeners = (ref, validateWithStateUpdate) => {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
};

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.ref.checked
        ? {
            isValid: true,
            value: option.ref.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isRadioInput = (element) => element.type === 'radio';

var isFileInput = (element) => element.type === 'file';

var isCheckBoxInput = (element) => element.type === 'checkbox';

var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.ref.checked)
                .map(({ ref: { value } }) => value);
            return { value: values, isValid: !!values.length };
        }
        const { checked, value, attributes } = options[0].ref;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || value === ''
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
};

function getFieldValue(fieldsRef, name, shallowFieldsStateRef, excludeDisabled, shouldKeepRawValue) {
    const field = fieldsRef.current[name];
    if (field) {
        const { ref: { value, disabled }, ref, valueAsNumber, valueAsDate, setValueAs, } = field;
        if (disabled && excludeDisabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field.options).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field.options).value;
        }
        return shouldKeepRawValue
            ? value
            : valueAsNumber
                ? value === ''
                    ? NaN
                    : +value
                : valueAsDate
                    ? ref.valueAsDate
                    : setValueAs
                        ? setValueAs(value)
                        : value;
    }
    if (shallowFieldsStateRef) {
        return get(shallowFieldsStateRef.current, name);
    }
}

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var isBoolean = (value) => typeof value === 'boolean';

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
function findRemovedFieldAndRemoveListener(fieldsRef, handleChange, field, shallowFieldsStateRef, shouldUnregister, forceDelete) {
    const { ref, ref: { name }, } = field;
    const fieldRef = fieldsRef.current[name];
    if (!shouldUnregister) {
        const value = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
        !isUndefined(value) && set(shallowFieldsStateRef.current, name, value);
    }
    if (!ref.type || !fieldRef) {
        delete fieldsRef.current[name];
        return;
    }
    if (isRadioInput(ref) || isCheckBoxInput(ref)) {
        if (Array.isArray(fieldRef.options) && fieldRef.options.length) {
            compact(fieldRef.options).forEach((option = {}, index) => {
                if ((isDetached(option.ref) && isSameRef(option, option.ref)) ||
                    forceDelete) {
                    removeAllEventListeners(option.ref, handleChange);
                    unset(fieldRef.options, `[${index}]`);
                }
            });
            if (fieldRef.options && !compact(fieldRef.options).length) {
                delete fieldsRef.current[name];
            }
        }
        else {
            delete fieldsRef.current[name];
        }
    }
    else if ((isDetached(ref) && isSameRef(fieldRef, ref)) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        delete fieldsRef.current[name];
    }
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) ||
                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) { }
    }
    return target;
}

function deepEqual(object1, object2, isErrorObject) {
    if (isPrimitive(object1) ||
        isPrimitive(object2) ||
        object1 instanceof Date ||
        object2 instanceof Date) {
        return object1 === object2;
    }
    if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(object1)) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            const val1 = object1[key];
            if (!(isErrorObject && key === 'ref')) {
                const val2 = object2[key];
                if ((isObject(val1) || Array.isArray(val1)) &&
                    (isObject(val2) || Array.isArray(val2))
                    ? !deepEqual(val1, val2, isErrorObject)
                    : val1 !== val2) {
                    return false;
                }
            }
        }
    }
    return true;
}

function setDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    let index = -1;
    while (++index < values.length) {
        for (const key in values[index]) {
            if (Array.isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                deepEqual(get(defaultValues[index] || {}, key), values[index][key])
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
            }
        }
        parentNode &&
            !dirtyFields.length &&
            delete parentNode[parentName];
    }
    return dirtyFields;
}
var setFieldArrayDirtyFields = (values, defaultValues, dirtyFields) => deepMerge(setDirtyFields(values, defaultValues, dirtyFields.slice(0, values.length)), setDirtyFields(defaultValues, values, dirtyFields.slice(0, values.length)));

var isString = (value) => typeof value === 'string';

var getFieldsValues = (fieldsRef, shallowFieldsState, shouldUnregister, excludeDisabled, search) => {
    const output = {};
    for (const name in fieldsRef.current) {
        if (isUndefined(search) ||
            (isString(search)
                ? name.startsWith(search)
                : Array.isArray(search) && search.find((data) => name.startsWith(data)))) {
            output[name] = getFieldValue(fieldsRef, name, undefined, excludeDisabled);
        }
    }
    return shouldUnregister
        ? transformToNestObject(output)
        : deepMerge(shallowFieldsState, transformToNestObject(output));
};

var isErrorStateChanged = ({ errors, name, error, validFields, fieldsWithValidation, }) => {
    const isValid = isUndefined(error);
    const previousError = get(errors, name);
    return ((isValid && !!previousError) ||
        (!isValid && !deepEqual(previousError, error, true)) ||
        (isValid && get(fieldsWithValidation, name) && !get(validFields, name)));
};

var isRegex = (value) => value instanceof RegExp;

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var isFunction = (value) => typeof value === 'function';

var isMessage = (value) => isString(value) || (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(value);

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, (errors[name] && errors[name].types ? errors[name].types : {})), { [type]: message || true }) }) : {};

var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { value }, options, required, maxLength, minLength, min, max, pattern, validate, }, shallowFieldsStateRef) => {
    const name = ref.name;
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = value === '';
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, (exceedMax
            ? appendErrorsCurry(maxType, message)
            : appendErrorsCurry(minType, message)));
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
            (isBoolean(value) && !value) ||
            (isCheckBox && !getCheckboxValue(options).isValid) ||
            (isRadio && !getRadioValue(options).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: isRadioOrCheckbox
                    ? ((fieldsRef.current[name].options || [])[0] || {}).ref
                    : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if ((!isNullOrUndefined(min) || !isNullOrUndefined(max)) && value !== '') {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNaN(value)) {
            const valueNumber = ref.valueAsNumber || parseFloat(value);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(value);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && !isEmpty && (maxLength || minLength)) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            value.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            value.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && pattern && !isEmpty) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !patternValue.test(value)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
                ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef, false, true);
        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
        if (isFunction(validate)) {
            const result = await validate(fieldValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(fieldValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

const getPath = (rootPath, values, paths = []) => {
    for (const property in values) {
        const rootName = (rootPath +
            (isObject(values)
                ? `.${property}`
                : `[${property}]`));
        isPrimitive(values[property])
            ? paths.push(rootName)
            : getPath(rootName, values[property], paths);
    }
    return paths;
};

var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
    let value = undefined;
    watchFields.add(fieldName);
    if (!isEmptyObject(fieldValues)) {
        value = get(fieldValues, fieldName);
        if (isObject(value) || Array.isArray(value)) {
            getPath(fieldName, value).forEach((name) => watchFields.add(name));
        }
    }
    return isUndefined(value)
        ? isSingleField
            ? inputValue
            : get(inputValue, fieldName)
        : value;
};

var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
    if (isOnAll) {
        return false;
    }
    else if (!isSubmitted && isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}([|.)\\d+`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

var isSelectInput = (element) => element.type === `${SELECT}-one`;

function onDomRemove(fieldsRef, removeFieldEventListenerAndRef) {
    const observer = new MutationObserver(() => {
        for (const field of Object.values(fieldsRef.current)) {
            if (field && field.options) {
                for (const option of field.options) {
                    if (option && option.ref && isDetached(option.ref)) {
                        removeFieldEventListenerAndRef(field);
                    }
                }
            }
            else if (field && isDetached(field.ref)) {
                removeFieldEventListenerAndRef(field);
            }
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

var isWeb = typeof window !== UNDEFINED && typeof document !== UNDEFINED;

function cloneObject(data) {
    let copy;
    if (isPrimitive(data) ||
        (isWeb && (data instanceof File || isHTMLElement(data)))) {
        return data;
    }
    if (data instanceof Date) {
        copy = new Date(data.getTime());
        return copy;
    }
    if (data instanceof Set) {
        copy = new Set();
        for (const item of data) {
            copy.add(item);
        }
        return copy;
    }
    if (data instanceof Map) {
        copy = new Map();
        for (const key of data.keys()) {
            copy.set(key, cloneObject(data.get(key)));
        }
        return copy;
    }
    copy = Array.isArray(data) ? [] : {};
    for (const key in data) {
        copy[key] = cloneObject(data[key]);
    }
    return copy;
}

var modeChecker = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

const isWindowUndefined = typeof window === UNDEFINED;
const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUnregister = true, criteriaMode, } = {}) {
    const fieldsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    const fieldArrayDefaultValuesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    const fieldArrayValuesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    const watchFieldsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());
    const useWatchFieldsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    const useWatchRenderFunctionsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    const fieldsWithValidationRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    const validFieldsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    const defaultValuesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(defaultValues);
    const isUnMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const isWatchAllRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const handleChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const shallowFieldsStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    const resetFieldArrayFunctionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    const contextRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(context);
    const resolverRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(resolver);
    const fieldArrayNamesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());
    const modeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(modeChecker(mode));
    const { isOnSubmit, isOnTouch } = modeRef.current;
    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touched: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: !isOnSubmit,
        errors: {},
    });
    const readFormStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        touched: !isProxyEnabled || isOnTouch,
        isValidating: !isProxyEnabled,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const formStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(formState);
    const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(modeChecker(reValidateMode)).current;
    contextRef.current = context;
    resolverRef.current = resolver;
    formStateRef.current = formState;
    shallowFieldsStateRef.current = shouldUnregister
        ? {}
        : isEmptyObject(shallowFieldsStateRef.current)
            ? cloneObject(defaultValues)
            : shallowFieldsStateRef.current;
    const updateFormState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((state = {}) => {
        if (!isUnMount.current) {
            formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), state);
            setFormState(formStateRef.current);
        }
    }, []);
    const updateIsValidating = () => readFormStateRef.current.isValidating &&
        updateFormState({
            isValidating: true,
        });
    const shouldRenderBaseOnError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, error, shouldRender = false, state = {}, isValid) => {
        let shouldReRender = shouldRender ||
            isErrorStateChanged({
                errors: formStateRef.current.errors,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        const previousError = get(formStateRef.current.errors, name);
        if (error) {
            unset(validFieldsRef.current, name);
            shouldReRender =
                shouldReRender ||
                    !previousError ||
                    !deepEqual(previousError, error, true);
            set(formStateRef.current.errors, name, error);
        }
        else {
            if (get(fieldsWithValidationRef.current, name) || resolverRef.current) {
                set(validFieldsRef.current, name, true);
                shouldReRender = shouldReRender || previousError;
            }
            unset(formStateRef.current.errors, name);
        }
        if ((shouldReRender && !isNullOrUndefined(shouldRender)) ||
            !isEmptyObject(state) ||
            readFormStateRef.current.isValidating) {
            updateFormState(Object.assign(Object.assign(Object.assign({}, state), (resolverRef.current ? { isValid: !!isValid } : {})), { isValidating: false }));
        }
    }, []);
    const setFieldValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, rawValue) => {
        const { ref, options } = fieldsRef.current[name];
        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref)) {
            (options || []).forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isFileInput(ref) && !isString(value)) {
            ref.files = value;
        }
        else if (isMultipleSelect(ref)) {
            [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = Array.isArray(value)
                    ? !!value.find((data) => data === checkboxRef.value)
                    : value === checkboxRef.value))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
    }, []);
    const isFormDirty = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, data) => {
        if (readFormStateRef.current.isDirty) {
            const formValues = getValues();
            name && data && set(formValues, name, data);
            return !deepEqual(formValues, defaultValuesRef.current);
        }
        return false;
    }, []);
    const updateAndGetDirtyState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, shouldRender = true) => {
        if (readFormStateRef.current.isDirty ||
            readFormStateRef.current.dirtyFields) {
            const isFieldDirty = !deepEqual(get(defaultValuesRef.current, name), getFieldValue(fieldsRef, name, shallowFieldsStateRef));
            const isDirtyFieldExist = get(formStateRef.current.dirtyFields, name);
            const previousIsDirty = formStateRef.current.isDirty;
            isFieldDirty
                ? set(formStateRef.current.dirtyFields, name, true)
                : unset(formStateRef.current.dirtyFields, name);
            const state = {
                isDirty: isFormDirty(),
                dirtyFields: formStateRef.current.dirtyFields,
            };
            const isChanged = (readFormStateRef.current.isDirty &&
                previousIsDirty !== state.isDirty) ||
                (readFormStateRef.current.dirtyFields &&
                    isDirtyFieldExist !== get(formStateRef.current.dirtyFields, name));
            isChanged && shouldRender && updateFormState(state);
            return isChanged ? state : {};
        }
        return {};
    }, []);
    const executeValidation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (name, skipReRender) => {
        if (true) {
            if (!fieldsRef.current[name]) {
                console.warn('📋 Field is missing with `name` attribute: ', name);
                return false;
            }
        }
        const error = (await validateField(fieldsRef, isValidateAllFieldCriteria, fieldsRef.current[name], shallowFieldsStateRef))[name];
        shouldRenderBaseOnError(name, error, skipReRender);
        return isUndefined(error);
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (names) => {
        const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
        const previousFormIsValid = formStateRef.current.isValid;
        if (Array.isArray(names)) {
            const isInputsValid = names
                .map((name) => {
                const error = get(errors, name);
                error
                    ? set(formStateRef.current.errors, name, error)
                    : unset(formStateRef.current.errors, name);
                return !error;
            })
                .every(Boolean);
            updateFormState({
                isValid: isEmptyObject(errors),
                isValidating: false,
            });
            return isInputsValid;
        }
        else {
            const error = get(errors, names);
            shouldRenderBaseOnError(names, error, previousFormIsValid !== isEmptyObject(errors), {}, isEmptyObject(errors));
            return !error;
        }
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const trigger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (name) => {
        const fields = name || Object.keys(fieldsRef.current);
        updateIsValidating();
        if (resolverRef.current) {
            return executeSchemaOrResolverValidation(fields);
        }
        if (Array.isArray(fields)) {
            !name && (formStateRef.current.errors = {});
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, null)));
            updateFormState({
                isValidating: false,
            });
            return result.every(Boolean);
        }
        return await executeValidation(fields);
    }, [executeSchemaOrResolverValidation, executeValidation]);
    const setInternalValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, value, { shouldDirty, shouldValidate }) => {
        const data = {};
        set(data, name, value);
        for (const fieldName of getPath(name, value)) {
            if (fieldsRef.current[fieldName]) {
                setFieldValue(fieldName, get(data, fieldName));
                shouldDirty && updateAndGetDirtyState(fieldName);
                shouldValidate && trigger(fieldName);
            }
        }
    }, [trigger, setFieldValue, updateAndGetDirtyState]);
    const setInternalValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, value, config) => {
        !shouldUnregister &&
            !isPrimitive(value) &&
            set(shallowFieldsStateRef.current, name, Object.assign({}, value));
        if (fieldsRef.current[name]) {
            setFieldValue(name, value);
            config.shouldDirty && updateAndGetDirtyState(name);
            config.shouldValidate && trigger(name);
        }
        else if (!isPrimitive(value)) {
            setInternalValues(name, value, config);
            if (fieldArrayNamesRef.current.has(name)) {
                const parentName = getFieldArrayParentName(name) || name;
                set(fieldArrayDefaultValuesRef.current, name, value);
                resetFieldArrayFunctionRef.current[parentName]({
                    [parentName]: get(fieldArrayDefaultValuesRef.current, parentName),
                });
                if ((readFormStateRef.current.isDirty ||
                    readFormStateRef.current.dirtyFields) &&
                    config.shouldDirty) {
                    set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                    updateFormState({
                        isDirty: !deepEqual(Object.assign(Object.assign({}, getValues()), { [name]: value }), defaultValuesRef.current),
                    });
                }
            }
        }
        !shouldUnregister && set(shallowFieldsStateRef.current, name, value);
    }, [updateAndGetDirtyState, setFieldValue, setInternalValues]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    const renderWatchedInputs = (name) => {
        let found = true;
        if (!isEmptyObject(useWatchFieldsRef.current)) {
            for (const key in useWatchFieldsRef.current) {
                if (!name ||
                    !useWatchFieldsRef.current[key].size ||
                    useWatchFieldsRef.current[key].has(name) ||
                    useWatchFieldsRef.current[key].has(getFieldArrayParentName(name))) {
                    useWatchRenderFunctionsRef.current[key]();
                    found = false;
                }
            }
        }
        return found;
    };
    function setValue(name, value, config) {
        setInternalValue(name, value, config || {});
        isFieldWatched(name) && updateFormState();
        renderWatchedInputs(name);
    }
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : async ({ type, target }) => {
            let name = target.name;
            const field = fieldsRef.current[name];
            let error;
            let isValid;
            if (field) {
                const isBlurEvent = type === EVENTS.BLUR;
                const shouldSkipValidation = skipValidation(Object.assign({ isBlurEvent,
                    isReValidateOnChange,
                    isReValidateOnBlur, isTouched: !!get(formStateRef.current.touched, name), isSubmitted: formStateRef.current.isSubmitted }, modeRef.current));
                let state = updateAndGetDirtyState(name, false);
                let shouldRender = !isEmptyObject(state) ||
                    (!isBlurEvent && isFieldWatched(name));
                if (isBlurEvent &&
                    !get(formStateRef.current.touched, name) &&
                    readFormStateRef.current.touched) {
                    set(formStateRef.current.touched, name, true);
                    state = Object.assign(Object.assign({}, state), { touched: formStateRef.current.touched });
                }
                if (!shouldUnregister && isCheckBoxInput(target)) {
                    set(shallowFieldsStateRef.current, name, getFieldValue(fieldsRef, name));
                }
                if (shouldSkipValidation) {
                    !isBlurEvent && renderWatchedInputs(name);
                    return ((!isEmptyObject(state) ||
                        (shouldRender && isEmptyObject(state))) &&
                        updateFormState(state));
                }
                updateIsValidating();
                if (resolverRef.current) {
                    const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
                    const previousFormIsValid = formStateRef.current.isValid;
                    error = get(errors, name);
                    if (isCheckBoxInput(target) &&
                        !error &&
                        resolverRef.current) {
                        const parentNodeName = getFieldArrayParentName(name);
                        const currentError = get(errors, parentNodeName, {});
                        currentError.type &&
                            currentError.message &&
                            (error = currentError);
                        if (parentNodeName &&
                            (currentError ||
                                get(formStateRef.current.errors, parentNodeName))) {
                            name = parentNodeName;
                        }
                    }
                    isValid = isEmptyObject(errors);
                    previousFormIsValid !== isValid && (shouldRender = true);
                }
                else {
                    error = (await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef))[name];
                }
                !isBlurEvent && renderWatchedInputs(name);
                shouldRenderBaseOnError(name, error, shouldRender, state, isValid);
            }
        };
    function setFieldArrayDefaultValues(data) {
        if (!shouldUnregister) {
            let copy = cloneObject(data);
            for (const value of fieldArrayNamesRef.current) {
                if (isKey(value) && !copy[value]) {
                    copy = Object.assign(Object.assign({}, copy), { [value]: [] });
                }
            }
            return copy;
        }
        return data;
    }
    function getValues(payload) {
        if (isString(payload)) {
            return getFieldValue(fieldsRef, payload, shallowFieldsStateRef);
        }
        if (Array.isArray(payload)) {
            const data = {};
            for (const name of payload) {
                set(data, name, getFieldValue(fieldsRef, name, shallowFieldsStateRef));
            }
            return data;
        }
        return setFieldArrayDefaultValues(getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister));
    }
    const validateResolver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (values = {}) => {
        const newDefaultValues = isEmptyObject(fieldsRef.current)
            ? defaultValuesRef.current
            : {};
        const { errors } = (await resolverRef.current(Object.assign(Object.assign(Object.assign({}, newDefaultValues), getValues()), values), contextRef.current, isValidateAllFieldCriteria)) || {};
        const isValid = isEmptyObject(errors);
        formStateRef.current.isValid !== isValid &&
            updateFormState({
                isValid,
            });
    }, [isValidateAllFieldCriteria]);
    const removeFieldEventListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((field, forceDelete) => {
        findRemovedFieldAndRemoveListener(fieldsRef, handleChangeRef.current, field, shallowFieldsStateRef, shouldUnregister, forceDelete);
        if (shouldUnregister) {
            unset(validFieldsRef.current, field.ref.name);
            unset(fieldsWithValidationRef.current, field.ref.name);
        }
    }, [shouldUnregister]);
    const updateWatchedValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name) => {
        if (isWatchAllRef.current) {
            updateFormState();
        }
        else {
            for (const watchField of watchFieldsRef.current) {
                if (watchField.startsWith(name)) {
                    updateFormState();
                    break;
                }
            }
            renderWatchedInputs(name);
        }
    }, []);
    const removeFieldEventListenerAndRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((field, forceDelete) => {
        if (field) {
            removeFieldEventListener(field, forceDelete);
            if (shouldUnregister && !compact(field.options || []).length) {
                unset(formStateRef.current.errors, field.ref.name);
                set(formStateRef.current.dirtyFields, field.ref.name, true);
                updateFormState({
                    isDirty: isFormDirty(),
                });
                readFormStateRef.current.isValid &&
                    resolverRef.current &&
                    validateResolver();
                updateWatchedValue(field.ref.name);
            }
        }
    }, [validateResolver, removeFieldEventListener]);
    function clearErrors(name) {
        name &&
            (Array.isArray(name) ? name : [name]).forEach((inputName) => fieldsRef.current[inputName] && isKey(inputName)
                ? delete formStateRef.current.errors[inputName]
                : unset(formStateRef.current.errors, inputName));
        updateFormState({
            errors: name ? formStateRef.current.errors : {},
        });
    }
    function setError(name, error) {
        const ref = (fieldsRef.current[name] || {}).ref;
        set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
        updateFormState({
            isValid: false,
        });
        error.shouldFocus && ref && ref.focus && ref.focus();
    }
    const watchInternal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((fieldNames, defaultValue, watchId) => {
        const watchFields = watchId
            ? useWatchFieldsRef.current[watchId]
            : watchFieldsRef.current;
        let fieldValues = getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister, false, fieldNames);
        if (isString(fieldNames)) {
            const parentNodeName = getFieldArrayParentName(fieldNames) || fieldNames;
            if (fieldArrayNamesRef.current.has(parentNodeName)) {
                fieldValues = Object.assign(Object.assign({}, fieldArrayValuesRef.current), fieldValues);
            }
            return assignWatchFields(fieldValues, fieldNames, watchFields, isUndefined(get(defaultValuesRef.current, fieldNames))
                ? defaultValue
                : get(defaultValuesRef.current, fieldNames), true);
        }
        const combinedDefaultValues = isUndefined(defaultValue)
            ? defaultValuesRef.current
            : defaultValue;
        if (Array.isArray(fieldNames)) {
            return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
        }
        isWatchAllRef.current = isUndefined(watchId);
        return transformToNestObject((!isEmptyObject(fieldValues) && fieldValues) ||
            combinedDefaultValues);
    }, []);
    function watch(fieldNames, defaultValue) {
        return watchInternal(fieldNames, defaultValue);
    }
    function unregister(name) {
        for (const fieldName of Array.isArray(name) ? name : [name]) {
            removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true);
        }
    }
    function registerFieldRef(ref, options = {}) {
        if (true) {
            if (!ref.name) {
                return console.warn('📋 Field is missing `name` attribute', ref, `https://react-hook-form.com/api#useForm`);
            }
            if (fieldArrayNamesRef.current.has(ref.name.split(/\[\d+\]$/)[0]) &&
                !RegExp(`^${ref.name.split(/\[\d+\]$/)[0]}[\\d+].\\w+`
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]')).test(ref.name)) {
                return console.warn('📋 `name` prop should be in object shape: name="test[index].name"', ref, 'https://react-hook-form.com/api#useFieldArray');
            }
        }
        const { name, type, value } = ref;
        const fieldRefAndValidationOptions = Object.assign({ ref }, options);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        const compareRef = (currentRef) => isWeb && (!isHTMLElement(ref) || currentRef === ref);
        let field = fields[name];
        let isEmptyDefaultValue = true;
        let defaultValue;
        if (field &&
            (isRadioOrCheckbox
                ? Array.isArray(field.options) &&
                    compact(field.options).find((option) => {
                        return value === option.ref.value && compareRef(option.ref);
                    })
                : compareRef(field.ref))) {
            fields[name] = Object.assign(Object.assign({}, field), options);
            return;
        }
        if (type) {
            field = isRadioOrCheckbox
                ? Object.assign({ options: [
                        ...compact((field && field.options) || []),
                        {
                            ref,
                        },
                    ], ref: { type, name } }, options) : Object.assign({}, fieldRefAndValidationOptions);
        }
        else {
            field = fieldRefAndValidationOptions;
        }
        fields[name] = field;
        const isEmptyUnmountFields = isUndefined(get(shallowFieldsStateRef.current, name));
        if (!isEmptyObject(defaultValuesRef.current) || !isEmptyUnmountFields) {
            defaultValue = get(isEmptyUnmountFields
                ? defaultValuesRef.current
                : shallowFieldsStateRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(name, defaultValue);
            }
        }
        if (!isEmptyObject(options)) {
            set(fieldsWithValidationRef.current, name, true);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef).then((error) => {
                    const previousFormIsValid = formStateRef.current.isValid;
                    isEmptyObject(error)
                        ? set(validFieldsRef.current, name, true)
                        : unset(validFieldsRef.current, name);
                    previousFormIsValid !== isEmptyObject(error) && updateFormState();
                });
            }
        }
        if (shouldUnregister && !(isFieldArray && isEmptyDefaultValue)) {
            !isFieldArray && unset(formStateRef.current.dirtyFields, name);
        }
        if (type) {
            attachEventListeners(isRadioOrCheckbox && field.options
                ? field.options[field.options.length - 1]
                : field, isRadioOrCheckbox || isSelectInput(ref), handleChangeRef.current);
        }
    }
    function register(refOrRegisterOptions, options) {
        if (!isWindowUndefined) {
            if (isString(refOrRegisterOptions)) {
                registerFieldRef({ name: refOrRegisterOptions }, options);
            }
            else if (isObject(refOrRegisterOptions) &&
                'name' in refOrRegisterOptions) {
                registerFieldRef(refOrRegisterOptions, options);
            }
            else {
                return (ref) => ref && registerFieldRef(ref, refOrRegisterOptions);
            }
        }
    }
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((onValid, onInvalid) => async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors = {};
        let fieldValues = setFieldArrayDefaultValues(getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister, true));
        readFormStateRef.current.isSubmitting &&
            updateFormState({
                isSubmitting: true,
            });
        try {
            if (resolverRef.current) {
                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, isValidateAllFieldCriteria);
                formStateRef.current.errors = fieldErrors = errors;
                fieldValues = values;
            }
            else {
                for (const field of Object.values(fieldsRef.current)) {
                    if (field) {
                        const { name } = field.ref;
                        const fieldError = await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef);
                        if (fieldError[name]) {
                            set(fieldErrors, name, fieldError[name]);
                            unset(validFieldsRef.current, name);
                        }
                        else if (get(fieldsWithValidationRef.current, name)) {
                            unset(formStateRef.current.errors, name);
                            set(validFieldsRef.current, name, true);
                        }
                    }
                }
            }
            if (isEmptyObject(fieldErrors) &&
                Object.keys(formStateRef.current.errors).every((name) => name in fieldsRef.current)) {
                updateFormState({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                formStateRef.current.errors = Object.assign(Object.assign({}, formStateRef.current.errors), fieldErrors);
                onInvalid && (await onInvalid(formStateRef.current.errors, e));
                shouldFocusError &&
                    focusOnErrorField(fieldsRef.current, formStateRef.current.errors);
            }
        }
        finally {
            formStateRef.current.isSubmitting = false;
            updateFormState({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(formStateRef.current.errors),
                submitCount: formStateRef.current.submitCount + 1,
            });
        }
    }, [shouldFocusError, isValidateAllFieldCriteria]);
    const resetRefs = ({ errors, isDirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
        if (!isValid) {
            validFieldsRef.current = {};
            fieldsWithValidationRef.current = {};
        }
        fieldArrayDefaultValuesRef.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
        updateFormState({
            submitCount: submitCount ? formStateRef.current.submitCount : 0,
            isDirty: isDirty ? formStateRef.current.isDirty : false,
            isSubmitted: isSubmitted ? formStateRef.current.isSubmitted : false,
            isValid: isValid ? formStateRef.current.isValid : false,
            dirtyFields: dirtyFields ? formStateRef.current.dirtyFields : {},
            touched: touched ? formStateRef.current.touched : {},
            errors: errors ? formStateRef.current.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
    };
    const reset = (values, omitResetState = {}) => {
        if (isWeb) {
            for (const field of Object.values(fieldsRef.current)) {
                if (field) {
                    const { ref, options } = field;
                    const inputRef = isRadioOrCheckboxFunction(ref) && Array.isArray(options)
                        ? options[0].ref
                        : ref;
                    if (isHTMLElement(inputRef)) {
                        try {
                            inputRef.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
        }
        fieldsRef.current = {};
        defaultValuesRef.current = Object.assign({}, (values || defaultValuesRef.current));
        values && renderWatchedInputs('');
        Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
        shallowFieldsStateRef.current = shouldUnregister
            ? {}
            : cloneObject(values || defaultValuesRef.current);
        resetRefs(omitResetState);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        resolver && readFormStateRef.current.isValid && validateResolver();
        observerRef.current =
            observerRef.current || !isWeb
                ? observerRef.current
                : onDomRemove(fieldsRef, removeFieldEventListenerAndRef);
    }, [removeFieldEventListenerAndRef, defaultValuesRef.current]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
        observerRef.current && observerRef.current.disconnect();
        isUnMount.current = true;
        if (true) {
            return;
        }
        Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
    }, []);
    if (!resolver && readFormStateRef.current.isValid) {
        formState.isValid =
            deepEqual(validFieldsRef.current, fieldsWithValidationRef.current) &&
                isEmptyObject(formStateRef.current.errors);
    }
    const commonProps = {
        trigger,
        setValue: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(setValue, [setInternalValue, trigger]),
        getValues: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(getValues, []),
        register: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(register, [defaultValuesRef.current]),
        unregister: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(unregister, []),
        formState: isProxyEnabled
            ? new Proxy(formState, {
                get: (obj, prop) => {
                    if (true) {
                        if (prop === 'isValid' && isOnSubmit) {
                            console.warn('📋 `formState.isValid` is applicable with `onTouched`, `onChange` or `onBlur` mode. https://react-hook-form.com/api#formState');
                        }
                    }
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return undefined;
                },
            })
            : formState,
    };
    const control = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (Object.assign({ isFormDirty,
        updateWatchedValue,
        shouldUnregister,
        updateFormState,
        removeFieldEventListener,
        watchInternal, mode: modeRef.current, reValidateMode: {
            isReValidateOnBlur,
            isReValidateOnChange,
        }, validateResolver: resolver ? validateResolver : undefined, fieldsRef,
        resetFieldArrayFunctionRef,
        useWatchFieldsRef,
        useWatchRenderFunctionsRef,
        fieldArrayDefaultValuesRef,
        validFieldsRef,
        fieldsWithValidationRef,
        fieldArrayNamesRef,
        readFormStateRef,
        formStateRef,
        defaultValuesRef,
        shallowFieldsStateRef,
        fieldArrayValuesRef }, commonProps)), [
        defaultValuesRef.current,
        updateWatchedValue,
        shouldUnregister,
        removeFieldEventListener,
        watchInternal,
    ]);
    return Object.assign({ watch,
        control,
        handleSubmit, reset: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(reset, []), clearErrors: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(clearErrors, []), setError: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(setError, []), errors: formState.errors }, commonProps);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const FormContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormContext);
const FormProvider = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FormContext.Provider, { value: Object.assign({}, props) }, children));
};

var generateId = () => {
    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, (Array.isArray(index) ? index : [index]).sort());

var moveArrayAt = (data, from, to) => {
    if (Array.isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

var swapArrayAt = (data, indexA, indexB) => {
    const temp = [data[indexB], data[indexA]];
    data[indexA] = temp[0];
    data[indexB] = temp[1];
};

function prepend(data, value) {
    return [...(Array.isArray(value) ? value : [value || undefined]), ...data];
}

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...(Array.isArray(value) ? value : [value || undefined]),
        ...data.slice(index),
    ];
}

var fillEmptyArray = (value) => Array.isArray(value) ? Array(value.length).fill(undefined) : undefined;

var fillBooleanArray = (value) => (Array.isArray(value) ? value : [value]).map((data) => {
    if (isObject(data)) {
        const object = {};
        for (const key in data) {
            object[key] = true;
        }
        return object;
    }
    return true;
});

const mapIds = (values = [], keyName, skipWarn) => {
    if (true) {
        if (!skipWarn) {
            for (const value of values) {
                if (typeof value === 'object') {
                    if (keyName in value) {
                        console.warn(`📋 useFieldArray fieldValues contain the keyName \`${keyName}\` which is reserved for use by useFieldArray. https://react-hook-form.com/api#useFieldArray`);
                        break;
                    }
                }
                else {
                    console.warn(`📋 useFieldArray input's name should be in object shape instead of flat array. https://react-hook-form.com/api#useFieldArray`);
                    break;
                }
            }
        }
    }
    return values.map((value) => (Object.assign({ [keyName]: value[keyName] || generateId() }, value)));
};
const useFieldArray = ({ control, name, keyName = 'id', }) => {
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 useFieldArray is missing `control` prop. https://react-hook-form.com/api#useFieldArray');
        }
    }
    const focusIndexRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(-1);
    const isUnMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const { isFormDirty, updateWatchedValue, resetFieldArrayFunctionRef, fieldArrayNamesRef, fieldsRef, defaultValuesRef, removeFieldEventListener, formStateRef, shallowFieldsStateRef, updateFormState, readFormStateRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValuesRef, validateResolver, getValues, shouldUnregister, fieldArrayValuesRef, } = control || methods.control;
    const getDefaultValues = (values) => get(shouldUnregister ? values : shallowFieldsStateRef.current, name, []);
    const fieldArrayParentName = getFieldArrayParentName(name);
    const memoizedDefaultValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([
        ...(get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)
            ? getDefaultValues(fieldArrayDefaultValuesRef.current)
            : getDefaultValues(defaultValuesRef.current)),
    ]);
    const [fields, setFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(mapIds(memoizedDefaultValues.current, keyName));
    set(fieldArrayValuesRef.current, name, fields);
    const omitKey = (fields) => fields.map((_a = {}) => {
        var _b = keyName, omitted = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        return rest;
    });
    fieldArrayNamesRef.current.add(name);
    const getFieldArrayValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => get(fieldArrayValuesRef.current, name, []), [name]);
    const getCurrentFieldsValues = () => mapIds(get(getValues(), name, getFieldArrayValue()).map((item, index) => (Object.assign(Object.assign({}, getFieldArrayValue()[index]), item))), keyName, true);
    fieldArrayNamesRef.current.add(name);
    if (fieldArrayParentName &&
        !get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)) {
        set(fieldArrayDefaultValuesRef.current, fieldArrayParentName, cloneObject(get(defaultValuesRef.current, fieldArrayParentName)));
    }
    const setFieldAndValidState = (fieldsValues) => {
        setFields(fieldsValues);
        set(fieldArrayValuesRef.current, name, fieldsValues);
        if (readFormStateRef.current.isValid && validateResolver) {
            const values = getValues();
            set(values, name, fieldsValues);
            validateResolver(values);
        }
    };
    const resetFields = () => {
        for (const key in fieldsRef.current) {
            if (isMatchFieldArrayName(key, name)) {
                removeFieldEventListener(fieldsRef.current[key], true);
                delete fieldsRef.current[key];
            }
        }
    };
    const cleanup = (ref) => !compact(get(ref, name, [])).length && unset(ref, name);
    const updateDirtyFieldsWithDefaultValues = (updatedFieldArrayValues) => {
        if (updatedFieldArrayValues) {
            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
        }
    };
    const batchStateUpdate = (method, args, updatedFieldValues, updatedFormValues = [], shouldSet = true, shouldUpdateValid = false) => {
        if (get(shallowFieldsStateRef.current, name)) {
            const output = method(get(shallowFieldsStateRef.current, name), args.argA, args.argB);
            shouldSet && set(shallowFieldsStateRef.current, name, output);
        }
        if (get(fieldArrayDefaultValuesRef.current, name)) {
            const output = method(get(fieldArrayDefaultValuesRef.current, name), args.argA, args.argB);
            shouldSet && set(fieldArrayDefaultValuesRef.current, name, output);
        }
        if (Array.isArray(get(formStateRef.current.errors, name))) {
            const output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.errors, name, output);
            cleanup(formStateRef.current.errors);
        }
        if (readFormStateRef.current.touched &&
            get(formStateRef.current.touched, name)) {
            const output = method(get(formStateRef.current.touched, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.touched, name, output);
            cleanup(formStateRef.current.touched);
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFormValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
            updateDirtyFieldsWithDefaultValues(updatedFieldValues);
            cleanup(formStateRef.current.dirtyFields);
        }
        if (shouldUpdateValid &&
            readFormStateRef.current.isValid &&
            !validateResolver) {
            set(validFieldsRef.current, name, method(get(validFieldsRef.current, name, []), args.argA));
            cleanup(validFieldsRef.current);
            set(fieldsWithValidationRef.current, name, method(get(fieldsWithValidationRef.current, name, []), args.argA));
            cleanup(fieldsWithValidationRef.current);
        }
        if (!isUnMount.current && readFormStateRef.current.isDirty) {
            updateFormState({
                isDirty: isFormDirty(name, omitKey(updatedFormValues)),
            });
        }
    };
    const append = (value, shouldFocus = true) => {
        const appendValue = Array.isArray(value) ? value : [value];
        const updateFormValues = [
            ...getCurrentFieldsValues(),
            ...mapIds(appendValue, keyName),
        ];
        setFieldAndValidState(updateFormValues);
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            updateDirtyFieldsWithDefaultValues(updateFormValues);
            updateFormState({
                isDirty: true,
                dirtyFields: formStateRef.current.dirtyFields,
            });
        }
        !shouldUnregister &&
            set(shallowFieldsStateRef.current, name, [
                ...(get(shallowFieldsStateRef.current, name) || []),
                ...cloneObject(appendValue),
            ]);
        focusIndexRef.current = shouldFocus
            ? get(fieldArrayValuesRef.current, name).length - 1
            : -1;
    };
    const prepend$1 = (value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        const updatedFieldArrayValues = prepend(getCurrentFieldsValues(), mapIds(Array.isArray(value) ? value : [value], keyName));
        setFieldAndValidState(updatedFieldArrayValues);
        resetFields();
        batchStateUpdate(prepend, {
            argA: emptyArray,
            argC: fillBooleanArray(value),
        }, updatedFieldArrayValues);
        focusIndexRef.current = shouldFocus ? 0 : -1;
    };
    const remove = (index) => {
        const fieldValues = getCurrentFieldsValues();
        const updatedFieldValues = removeArrayAt(fieldValues, index);
        setFieldAndValidState(updatedFieldValues);
        resetFields();
        batchStateUpdate(removeArrayAt, {
            argA: index,
            argC: index,
        }, updatedFieldValues, removeArrayAt(fieldValues, index), true, true);
    };
    const insert$1 = (index, value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        const fieldValues = getCurrentFieldsValues();
        const updatedFieldArrayValues = insert(fieldValues, index, mapIds(Array.isArray(value) ? value : [value], keyName));
        setFieldAndValidState(updatedFieldArrayValues);
        resetFields();
        batchStateUpdate(insert, {
            argA: index,
            argB: emptyArray,
            argC: index,
            argD: fillBooleanArray(value),
        }, updatedFieldArrayValues, insert(fieldValues, index));
        focusIndexRef.current = shouldFocus ? index : -1;
    };
    const swap = (indexA, indexB) => {
        const fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        resetFields();
        setFieldAndValidState([...fieldValues]);
        batchStateUpdate(swapArrayAt, {
            argA: indexA,
            argB: indexB,
            argC: indexA,
            argD: indexB,
        }, undefined, fieldValues, false);
    };
    const move = (from, to) => {
        const fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        resetFields();
        setFieldAndValidState([...fieldValues]);
        batchStateUpdate(moveArrayAt, {
            argA: from,
            argB: to,
            argC: from,
            argD: to,
        }, undefined, fieldValues, false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (true) {
            if (!name) {
                console.warn('📋 useFieldArray is missing `name` attribute. https://react-hook-form.com/api#useFieldArray');
            }
        }
        const defaultValues = get(fieldArrayDefaultValuesRef.current, name);
        if (defaultValues && fields.length < defaultValues.length) {
            set(fieldArrayDefaultValuesRef.current, name, defaultValues.slice(1));
        }
        updateWatchedValue(name);
        if (focusIndexRef.current > -1) {
            for (const key in fieldsRef.current) {
                const field = fieldsRef.current[key];
                if (key.startsWith(`${name}[${focusIndexRef.current}]`) &&
                    field.ref.focus) {
                    field.ref.focus();
                    break;
                }
            }
        }
        focusIndexRef.current = -1;
    }, [fields, name]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const resetFunctions = resetFieldArrayFunctionRef.current;
        const fieldArrayNames = fieldArrayNamesRef.current;
        if (!getFieldArrayParentName(name)) {
            resetFunctions[name] = (data) => {
                resetFields();
                !data && unset(fieldArrayDefaultValuesRef.current, name);
                unset(shallowFieldsStateRef.current, name);
                memoizedDefaultValues.current = get(data || defaultValuesRef.current, name);
                if (!isUnMount.current) {
                    setFields(mapIds(memoizedDefaultValues.current, keyName));
                }
            };
        }
        return () => {
            isUnMount.current = true;
            shouldUnregister && remove();
            resetFields();
            delete resetFunctions[name];
            unset(fieldArrayValuesRef.current, name);
            fieldArrayNames.delete(name);
        };
    }, []);
    return {
        swap: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(swap, [name]),
        move: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(move, [name]),
        prepend: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(prepend$1, [name]),
        append: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(append, [name]),
        remove: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(remove, [name]),
        insert: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(insert$1, [name]),
        fields,
    };
};

var getInputValue = (event) => isPrimitive(event) ||
    !isObject(event.target) ||
    (isObject(event.target) && !event.type)
    ? event
    : isUndefined(event.target.value)
        ? event.target.checked
        : event.target.value;

function useController({ name, rules, defaultValue, control, onFocus, }) {
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 Controller is missing `control` prop. https://react-hook-form.com/api#Controller');
        }
    }
    const { defaultValuesRef, setValue, register, unregister, trigger, mode, reValidateMode: { isReValidateOnBlur, isReValidateOnChange }, formState, formStateRef: { current: { isSubmitted, touched, errors }, }, updateFormState, readFormStateRef, fieldsRef, fieldArrayNamesRef, shallowFieldsStateRef, } = control || methods.control;
    const isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
    const getInitialValue = () => !isUndefined(get(shallowFieldsStateRef.current, name)) && isNotFieldArray
        ? get(shallowFieldsStateRef.current, name)
        : isUndefined(defaultValue)
            ? get(defaultValuesRef.current, name)
            : defaultValue;
    const [value, setInputStateValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialValue());
    const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        focus: () => null,
    });
    const onFocusRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onFocus ||
        (() => {
            if (isFunction(ref.current.focus)) {
                ref.current.focus();
            }
            if (true) {
                if (!isFunction(ref.current.focus)) {
                    console.warn(`📋 'ref' from Controller render prop must be attached to a React component or a DOM Element whose ref provides a 'focus()' method`);
                }
            }
        }));
    const shouldValidate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((isBlurEvent) => !skipValidation(Object.assign({ isBlurEvent,
        isReValidateOnBlur,
        isReValidateOnChange,
        isSubmitted, isTouched: !!get(touched, name) }, mode)), [
        isReValidateOnBlur,
        isReValidateOnChange,
        isSubmitted,
        touched,
        name,
        mode,
    ]);
    const commonTask = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(([event]) => {
        const data = getInputValue(event);
        setInputStateValue(data);
        valueRef.current = data;
        return data;
    }, []);
    const registerField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((shouldUpdateValue) => {
        if (true) {
            if (!name) {
                return console.warn('📋 Field is missing `name` prop. https://react-hook-form.com/api#Controller');
            }
        }
        if (fieldsRef.current[name]) {
            fieldsRef.current[name] = Object.assign({ ref: fieldsRef.current[name].ref }, rules);
        }
        else {
            register(Object.defineProperties({
                name,
                focus: onFocusRef.current,
            }, {
                value: {
                    set(data) {
                        setInputStateValue(data);
                        valueRef.current = data;
                    },
                    get() {
                        return valueRef.current;
                    },
                },
            }), rules);
            shouldUpdateValue = isUndefined(get(defaultValuesRef.current, name));
        }
        shouldUpdateValue &&
            isNotFieldArray &&
            setInputStateValue(getInitialValue());
    }, [rules, name, register]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => unregister(name), [name]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (true) {
            if (isUndefined(value)) {
                console.warn(`📋 ${name} is missing in the 'defaultValue' prop of either its Controller (https://react-hook-form.com/api#Controller) or useForm (https://react-hook-form.com/api#useForm)`);
            }
            if (!isNotFieldArray && isUndefined(defaultValue)) {
                console.warn('📋 Controller is missing `defaultValue` prop when using `useFieldArray`. https://react-hook-form.com/api#Controller');
            }
        }
        registerField();
    }, [registerField]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        !fieldsRef.current[name] && registerField(true);
    });
    const onBlur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (readFormStateRef.current.touched && !get(touched, name)) {
            set(touched, name, true);
            updateFormState({
                touched,
            });
        }
        shouldValidate(true) && trigger(name);
    }, [name, updateFormState, shouldValidate, trigger, readFormStateRef]);
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...event) => setValue(name, commonTask(event), {
        shouldValidate: shouldValidate(),
        shouldDirty: true,
    }), [setValue, name, shouldValidate]);
    return {
        field: {
            onChange,
            onBlur,
            name,
            value,
            ref,
        },
        meta: Object.defineProperties({
            invalid: !!get(errors, name),
        }, {
            isDirty: {
                get() {
                    return !!get(formState.dirtyFields, name);
                },
            },
            isTouched: {
                get() {
                    return !!get(formState.touched, name);
                },
            },
        }),
    };
}

function useWatch({ control, name, defaultValue, }) {
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 useWatch is missing `control` prop. https://react-hook-form.com/api#useWatch');
        }
    }
    const { useWatchFieldsRef, useWatchRenderFunctionsRef, watchInternal, defaultValuesRef, } = control || methods.control;
    const updateValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)()[1];
    const idRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const defaultValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(defaultValue);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (true) {
            if (name === '') {
                console.warn('📋 useWatch is missing `name` attribute. https://react-hook-form.com/api#useWatch');
            }
        }
        const id = (idRef.current = generateId());
        const watchFieldsHookRender = useWatchRenderFunctionsRef.current;
        const watchFieldsHook = useWatchFieldsRef.current;
        watchFieldsHook[id] = new Set();
        watchFieldsHookRender[id] = () => updateValue({});
        watchInternal(name, defaultValueRef.current, id);
        return () => {
            delete watchFieldsHook[id];
            delete watchFieldsHookRender[id];
        };
    }, [
        name,
        useWatchRenderFunctionsRef,
        useWatchFieldsRef,
        watchInternal,
        defaultValueRef,
    ]);
    return idRef.current
        ? watchInternal(name, defaultValueRef.current, idRef.current)
        : isUndefined(defaultValue)
            ? isString(name)
                ? get(defaultValuesRef.current, name)
                : Array.isArray(name)
                    ? name.reduce((previous, inputName) => (Object.assign(Object.assign({}, previous), { [inputName]: get(defaultValuesRef.current, inputName) })), {})
                    : defaultValuesRef.current
            : defaultValue;
}

const Controller = (props) => {
    const { rules, as, render, defaultValue, control, onFocus } = props, rest = __rest(props, ["rules", "as", "render", "defaultValue", "control", "onFocus"]);
    const { field, meta } = useController(props);
    const componentProps = Object.assign(Object.assign({}, rest), field);
    return as
        ? (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(as)
            ? (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(as, componentProps)
            : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(as, componentProps)
        : render
            ? render(field, meta)
            : null;
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.MemoryRouter),
/* harmony export */   "Prompt": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Prompt),
/* harmony export */   "Redirect": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Redirect),
/* harmony export */   "Route": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Route),
/* harmony export */   "Router": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Router),
/* harmony export */   "StaticRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.StaticRouter),
/* harmony export */   "Switch": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.Switch),
/* harmony export */   "generatePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.generatePath),
/* harmony export */   "matchPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.matchPath),
/* harmony export */   "useHistory": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useHistory),
/* harmony export */   "useLocation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useLocation),
/* harmony export */   "useParams": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useParams),
/* harmony export */   "useRouteMatch": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.useRouteMatch),
/* harmony export */   "withRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_0__.withRouter),
/* harmony export */   "BrowserRouter": () => (/* binding */ BrowserRouter),
/* harmony export */   "HashRouter": () => (/* binding */ HashRouter),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "NavLink": () => (/* binding */ NavLink)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_6__.createBrowserHistory)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

if (true) {
  BrowserRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    forceRefresh: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_7__.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_6__.createHashHistory)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

if (true) {
  HashRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_7__.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : 0;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_6__.createLocation)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__.default)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__.default)(_ref2, ["component", "replace", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__.default)(false, "You should not use <Link> outside a <Router>") : 0 : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(component, props);
  });
});

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]);
  var refType = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    current: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    replace: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    target: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__.default)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__.default)(false, "You should not use <NavLink> outside a <Router>") : 0 : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_0__.matchPath)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, styleProp, {}, activeStyle) : styleProp;

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    activeStyle: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    isActive: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
  });
}


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": () => (/* binding */ MemoryRouter),
/* harmony export */   "Prompt": () => (/* binding */ Prompt),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "Route": () => (/* binding */ Route),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "StaticRouter": () => (/* binding */ StaticRouter),
/* harmony export */   "Switch": () => (/* binding */ Switch),
/* harmony export */   "__HistoryContext": () => (/* binding */ historyContext),
/* harmony export */   "__RouterContext": () => (/* binding */ context),
/* harmony export */   "generatePath": () => (/* binding */ generatePath),
/* harmony export */   "matchPath": () => (/* binding */ matchPath),
/* harmony export */   "useHistory": () => (/* binding */ useHistory),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useRouteMatch": () => (/* binding */ useRouteMatch),
/* harmony export */   "withRouter": () => (/* binding */ withRouter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mini-create-react-context */ "./node_modules/mini-create-react-context/dist/esm/index.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-router/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = (0,mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__.default)();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = (0,mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__.default)();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  Router.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    history: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
    staticContext: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(prevProps.history === this.props.history, "You cannot change <Router history>") : 0;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_10__.createMemoryHistory)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
    initialIndex: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : 0;
  };
}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Prompt> outside a <Router>") : 0 : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]);
  Prompt.propTypes = {
    when: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default().compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Redirect> outside a <Router>") : 0 : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(prevProps.to);

        if (!(0,history__WEBPACK_IMPORTED_MODULE_10__.locationsAreEqual)(prevLocation, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    from: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Route> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : children : component ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)]),
    component: function component(props, propName) {
      if (props[propName] && !(0,react_is__WEBPACK_IMPORTED_MODULE_6__.isValidElementType)(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    path: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string))]),
    render: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
  };

  Route.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : 0;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_10__.createPath)(location);
}

function staticHandler(methodName) {
  return function () {
      true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You cannot %s with <StaticRouter>", methodName) : 0 ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__.default)(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  StaticRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : 0;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Switch> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(_this.props.children, function (child) {
        if (match == null && react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  Switch.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__.default)(props, ["wrappedComponentRef"]);

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <" + displayName + " /> outside a <Router>") : 0 : void 0;
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default()(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext;
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useHistory()") : 0 : void 0;
  }

  return useContext(historyContext);
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useLocation()") : 0 : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useParams()") : 0 : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useRouteMatch()") : 0 : void 0;
  }

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ "./node_modules/react-router/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolvePathname);


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler-tracing.development.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.1
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.

var interactionIDCounter = 0;
var threadIDCounter = 0; // Set of currently traced interactions.
// Interactions "stack"–
// Meaning that newly traced interactions are appended to the previously active set.
// When an interaction goes out of scope, the previous set (if any) is restored.

exports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.

exports.__subscriberRef = null;

{
  exports.__interactionsRef = {
    current: new Set()
  };
  exports.__subscriberRef = {
    current: null
  };
}
function unstable_clear(callback) {

  var prevInteractions = exports.__interactionsRef.current;
  exports.__interactionsRef.current = new Set();

  try {
    return callback();
  } finally {
    exports.__interactionsRef.current = prevInteractions;
  }
}
function unstable_getCurrent() {
  {
    return exports.__interactionsRef.current;
  }
}
function unstable_getThreadID() {
  return ++threadIDCounter;
}
function unstable_trace(name, timestamp, callback) {
  var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

  var interaction = {
    __count: 1,
    id: interactionIDCounter++,
    name: name,
    timestamp: timestamp
  };
  var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.
  // To do that, clone the current interactions.
  // The previous set will be restored upon completion.

  var interactions = new Set(prevInteractions);
  interactions.add(interaction);
  exports.__interactionsRef.current = interactions;
  var subscriber = exports.__subscriberRef.current;
  var returnValue;

  try {
    if (subscriber !== null) {
      subscriber.onInteractionTraced(interaction);
    }
  } finally {
    try {
      if (subscriber !== null) {
        subscriber.onWorkStarted(interactions, threadID);
      }
    } finally {
      try {
        returnValue = callback();
      } finally {
        exports.__interactionsRef.current = prevInteractions;

        try {
          if (subscriber !== null) {
            subscriber.onWorkStopped(interactions, threadID);
          }
        } finally {
          interaction.__count--; // If no async work was scheduled for this interaction,
          // Notify subscribers that it's completed.

          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        }
      }
    }
  }

  return returnValue;
}
function unstable_wrap(callback) {
  var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

  var wrappedInteractions = exports.__interactionsRef.current;
  var subscriber = exports.__subscriberRef.current;

  if (subscriber !== null) {
    subscriber.onWorkScheduled(wrappedInteractions, threadID);
  } // Update the pending async work count for the current interactions.
  // Update after calling subscribers in case of error.


  wrappedInteractions.forEach(function (interaction) {
    interaction.__count++;
  });
  var hasRun = false;

  function wrapped() {
    var prevInteractions = exports.__interactionsRef.current;
    exports.__interactionsRef.current = wrappedInteractions;
    subscriber = exports.__subscriberRef.current;

    try {
      var returnValue;

      try {
        if (subscriber !== null) {
          subscriber.onWorkStarted(wrappedInteractions, threadID);
        }
      } finally {
        try {
          returnValue = callback.apply(undefined, arguments);
        } finally {
          exports.__interactionsRef.current = prevInteractions;

          if (subscriber !== null) {
            subscriber.onWorkStopped(wrappedInteractions, threadID);
          }
        }
      }

      return returnValue;
    } finally {
      if (!hasRun) {
        // We only expect a wrapped function to be executed once,
        // But in the event that it's executed more than once–
        // Only decrement the outstanding interaction counts once.
        hasRun = true; // Update pending async counts for all wrapped interactions.
        // If this was the last scheduled async work for any of them,
        // Mark them as completed.

        wrappedInteractions.forEach(function (interaction) {
          interaction.__count--;

          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        });
      }
    }
  }

  wrapped.cancel = function cancel() {
    subscriber = exports.__subscriberRef.current;

    try {
      if (subscriber !== null) {
        subscriber.onWorkCanceled(wrappedInteractions, threadID);
      }
    } finally {
      // Update pending async counts for all wrapped interactions.
      // If this was the last scheduled async work for any of them,
      // Mark them as completed.
      wrappedInteractions.forEach(function (interaction) {
        interaction.__count--;

        if (subscriber && interaction.__count === 0) {
          subscriber.onInteractionScheduledWorkCompleted(interaction);
        }
      });
    }
  };

  return wrapped;
}

var subscribers = null;

{
  subscribers = new Set();
}

function unstable_subscribe(subscriber) {
  {
    subscribers.add(subscriber);

    if (subscribers.size === 1) {
      exports.__subscriberRef.current = {
        onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
        onInteractionTraced: onInteractionTraced,
        onWorkCanceled: onWorkCanceled,
        onWorkScheduled: onWorkScheduled,
        onWorkStarted: onWorkStarted,
        onWorkStopped: onWorkStopped
      };
    }
  }
}
function unstable_unsubscribe(subscriber) {
  {
    subscribers.delete(subscriber);

    if (subscribers.size === 0) {
      exports.__subscriberRef.current = null;
    }
  }
}

function onInteractionTraced(interaction) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionTraced(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onInteractionScheduledWorkCompleted(interaction) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionScheduledWorkCompleted(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkScheduled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkScheduled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStarted(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStarted(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStopped(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStopped(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkCanceled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkCanceled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

exports.unstable_clear = unstable_clear;
exports.unstable_getCurrent = unstable_getCurrent;
exports.unstable_getThreadID = unstable_getThreadID;
exports.unstable_subscribe = unstable_subscribe;
exports.unstable_trace = unstable_trace;
exports.unstable_unsubscribe = unstable_unsubscribe;
exports.unstable_wrap = unstable_wrap;
  })();
}


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.1
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var enableSchedulerDebugging = false;
var enableProfiling = true;

var requestHostCallback;
var requestHostTimeout;
var cancelHostTimeout;
var requestPaint;
var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

if (hasPerformanceNow) {
  var localPerformance = performance;

  exports.unstable_now = function () {
    return localPerformance.now();
  };
} else {
  var localDate = Date;
  var initialTime = localDate.now();

  exports.unstable_now = function () {
    return localDate.now() - initialTime;
  };
}

if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
typeof window === 'undefined' || // Check if MessageChannel is supported, too.
typeof MessageChannel !== 'function') {
  // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
  // fallback to a naive implementation.
  var _callback = null;
  var _timeoutID = null;

  var _flushCallback = function () {
    if (_callback !== null) {
      try {
        var currentTime = exports.unstable_now();
        var hasRemainingTime = true;

        _callback(hasRemainingTime, currentTime);

        _callback = null;
      } catch (e) {
        setTimeout(_flushCallback, 0);
        throw e;
      }
    }
  };

  requestHostCallback = function (cb) {
    if (_callback !== null) {
      // Protect against re-entrancy.
      setTimeout(requestHostCallback, 0, cb);
    } else {
      _callback = cb;
      setTimeout(_flushCallback, 0);
    }
  };

  requestHostTimeout = function (cb, ms) {
    _timeoutID = setTimeout(cb, ms);
  };

  cancelHostTimeout = function () {
    clearTimeout(_timeoutID);
  };

  exports.unstable_shouldYield = function () {
    return false;
  };

  requestPaint = exports.unstable_forceFrameRate = function () {};
} else {
  // Capture local references to native APIs, in case a polyfill overrides them.
  var _setTimeout = window.setTimeout;
  var _clearTimeout = window.clearTimeout;

  if (typeof console !== 'undefined') {
    // TODO: Scheduler no longer requires these methods to be polyfilled. But
    // maybe we want to continue warning if they don't exist, to preserve the
    // option to rely on it in the future?
    var requestAnimationFrame = window.requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame;

    if (typeof requestAnimationFrame !== 'function') {
      // Using console['error'] to evade Babel and ESLint
      console['error']("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
    }

    if (typeof cancelAnimationFrame !== 'function') {
      // Using console['error'] to evade Babel and ESLint
      console['error']("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
    }
  }

  var isMessageLoopRunning = false;
  var scheduledHostCallback = null;
  var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
  // thread, like user events. By default, it yields multiple times per frame.
  // It does not attempt to align with frame boundaries, since most tasks don't
  // need to be frame aligned; for those that do, use requestAnimationFrame.

  var yieldInterval = 5;
  var deadline = 0; // TODO: Make this configurable

  {
    // `isInputPending` is not available. Since we have no way of knowing if
    // there's pending input, always yield at the end of the frame.
    exports.unstable_shouldYield = function () {
      return exports.unstable_now() >= deadline;
    }; // Since we yield every frame regardless, `requestPaint` has no effect.


    requestPaint = function () {};
  }

  exports.unstable_forceFrameRate = function (fps) {
    if (fps < 0 || fps > 125) {
      // Using console['error'] to evade Babel and ESLint
      console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
      return;
    }

    if (fps > 0) {
      yieldInterval = Math.floor(1000 / fps);
    } else {
      // reset the framerate
      yieldInterval = 5;
    }
  };

  var performWorkUntilDeadline = function () {
    if (scheduledHostCallback !== null) {
      var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync
      // cycle. This means there's always time remaining at the beginning of
      // the message event.

      deadline = currentTime + yieldInterval;
      var hasTimeRemaining = true;

      try {
        var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

        if (!hasMoreWork) {
          isMessageLoopRunning = false;
          scheduledHostCallback = null;
        } else {
          // If there's more work, schedule the next message event at the end
          // of the preceding one.
          port.postMessage(null);
        }
      } catch (error) {
        // If a scheduler task throws, exit the current browser task so the
        // error can be observed.
        port.postMessage(null);
        throw error;
      }
    } else {
      isMessageLoopRunning = false;
    } // Yielding to the browser will give it a chance to paint, so we can
  };

  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;

  requestHostCallback = function (callback) {
    scheduledHostCallback = callback;

    if (!isMessageLoopRunning) {
      isMessageLoopRunning = true;
      port.postMessage(null);
    }
  };

  requestHostTimeout = function (callback, ms) {
    taskTimeoutID = _setTimeout(function () {
      callback(exports.unstable_now());
    }, ms);
  };

  cancelHostTimeout = function () {
    _clearTimeout(taskTimeoutID);

    taskTimeoutID = -1;
  };
}

function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  siftUp(heap, node, index);
}
function peek(heap) {
  var first = heap[0];
  return first === undefined ? null : first;
}
function pop(heap) {
  var first = heap[0];

  if (first !== undefined) {
    var last = heap.pop();

    if (last !== first) {
      heap[0] = last;
      siftDown(heap, last, 0);
    }

    return first;
  } else {
    return null;
  }
}

function siftUp(heap, node, i) {
  var index = i;

  while (true) {
    var parentIndex = index - 1 >>> 1;
    var parent = heap[parentIndex];

    if (parent !== undefined && compare(parent, node) > 0) {
      // The parent is larger. Swap positions.
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      // The parent is smaller. Exit.
      return;
    }
  }
}

function siftDown(heap, node, i) {
  var index = i;
  var length = heap.length;

  while (index < length) {
    var leftIndex = (index + 1) * 2 - 1;
    var left = heap[leftIndex];
    var rightIndex = leftIndex + 1;
    var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

    if (left !== undefined && compare(left, node) < 0) {
      if (right !== undefined && compare(right, left) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (right !== undefined && compare(right, node) < 0) {
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      // Neither child is smaller. Exit.
      return;
    }
  }
}

function compare(a, b) {
  // Compare sort index first, then task id.
  var diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}

// TODO: Use symbols?
var NoPriority = 0;
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

var runIdCounter = 0;
var mainThreadIdCounter = 0;
var profilingStateSize = 4;
var sharedProfilingBuffer =  // $FlowFixMe Flow doesn't know about SharedArrayBuffer
typeof SharedArrayBuffer === 'function' ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : // $FlowFixMe Flow doesn't know about ArrayBuffer
typeof ArrayBuffer === 'function' ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : null // Don't crash the init path on IE9
;
var profilingState =  sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : []; // We can't read this but it helps save bytes for null checks

var PRIORITY = 0;
var CURRENT_TASK_ID = 1;
var CURRENT_RUN_ID = 2;
var QUEUE_SIZE = 3;

{
  profilingState[PRIORITY] = NoPriority; // This is maintained with a counter, because the size of the priority queue
  // array might include canceled tasks.

  profilingState[QUEUE_SIZE] = 0;
  profilingState[CURRENT_TASK_ID] = 0;
} // Bytes per element is 4


var INITIAL_EVENT_LOG_SIZE = 131072;
var MAX_EVENT_LOG_SIZE = 524288; // Equivalent to 2 megabytes

var eventLogSize = 0;
var eventLogBuffer = null;
var eventLog = null;
var eventLogIndex = 0;
var TaskStartEvent = 1;
var TaskCompleteEvent = 2;
var TaskErrorEvent = 3;
var TaskCancelEvent = 4;
var TaskRunEvent = 5;
var TaskYieldEvent = 6;
var SchedulerSuspendEvent = 7;
var SchedulerResumeEvent = 8;

function logEvent(entries) {
  if (eventLog !== null) {
    var offset = eventLogIndex;
    eventLogIndex += entries.length;

    if (eventLogIndex + 1 > eventLogSize) {
      eventLogSize *= 2;

      if (eventLogSize > MAX_EVENT_LOG_SIZE) {
        // Using console['error'] to evade Babel and ESLint
        console['error']("Scheduler Profiling: Event log exceeded maximum size. Don't " + 'forget to call `stopLoggingProfilingEvents()`.');
        stopLoggingProfilingEvents();
        return;
      }

      var newEventLog = new Int32Array(eventLogSize * 4);
      newEventLog.set(eventLog);
      eventLogBuffer = newEventLog.buffer;
      eventLog = newEventLog;
    }

    eventLog.set(entries, offset);
  }
}

function startLoggingProfilingEvents() {
  eventLogSize = INITIAL_EVENT_LOG_SIZE;
  eventLogBuffer = new ArrayBuffer(eventLogSize * 4);
  eventLog = new Int32Array(eventLogBuffer);
  eventLogIndex = 0;
}
function stopLoggingProfilingEvents() {
  var buffer = eventLogBuffer;
  eventLogSize = 0;
  eventLogBuffer = null;
  eventLog = null;
  eventLogIndex = 0;
  return buffer;
}
function markTaskStart(task, ms) {
  {
    profilingState[QUEUE_SIZE]++;

    if (eventLog !== null) {
      // performance.now returns a float, representing milliseconds. When the
      // event is logged, it's coerced to an int. Convert to microseconds to
      // maintain extra degrees of precision.
      logEvent([TaskStartEvent, ms * 1000, task.id, task.priorityLevel]);
    }
  }
}
function markTaskCompleted(task, ms) {
  {
    profilingState[PRIORITY] = NoPriority;
    profilingState[CURRENT_TASK_ID] = 0;
    profilingState[QUEUE_SIZE]--;

    if (eventLog !== null) {
      logEvent([TaskCompleteEvent, ms * 1000, task.id]);
    }
  }
}
function markTaskCanceled(task, ms) {
  {
    profilingState[QUEUE_SIZE]--;

    if (eventLog !== null) {
      logEvent([TaskCancelEvent, ms * 1000, task.id]);
    }
  }
}
function markTaskErrored(task, ms) {
  {
    profilingState[PRIORITY] = NoPriority;
    profilingState[CURRENT_TASK_ID] = 0;
    profilingState[QUEUE_SIZE]--;

    if (eventLog !== null) {
      logEvent([TaskErrorEvent, ms * 1000, task.id]);
    }
  }
}
function markTaskRun(task, ms) {
  {
    runIdCounter++;
    profilingState[PRIORITY] = task.priorityLevel;
    profilingState[CURRENT_TASK_ID] = task.id;
    profilingState[CURRENT_RUN_ID] = runIdCounter;

    if (eventLog !== null) {
      logEvent([TaskRunEvent, ms * 1000, task.id, runIdCounter]);
    }
  }
}
function markTaskYield(task, ms) {
  {
    profilingState[PRIORITY] = NoPriority;
    profilingState[CURRENT_TASK_ID] = 0;
    profilingState[CURRENT_RUN_ID] = 0;

    if (eventLog !== null) {
      logEvent([TaskYieldEvent, ms * 1000, task.id, runIdCounter]);
    }
  }
}
function markSchedulerSuspended(ms) {
  {
    mainThreadIdCounter++;

    if (eventLog !== null) {
      logEvent([SchedulerSuspendEvent, ms * 1000, mainThreadIdCounter]);
    }
  }
}
function markSchedulerUnsuspended(ms) {
  {
    if (eventLog !== null) {
      logEvent([SchedulerResumeEvent, ms * 1000, mainThreadIdCounter]);
    }
  }
}

/* eslint-disable no-var */
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111

var maxSigned31BitInt = 1073741823; // Times out immediately

var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap

var taskQueue = [];
var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
var currentTask = null;
var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

var isPerformingWork = false;
var isHostCallbackScheduled = false;
var isHostTimeoutScheduled = false;

function advanceTimers(currentTime) {
  // Check for tasks that are no longer delayed and add them to the queue.
  var timer = peek(timerQueue);

  while (timer !== null) {
    if (timer.callback === null) {
      // Timer was cancelled.
      pop(timerQueue);
    } else if (timer.startTime <= currentTime) {
      // Timer fired. Transfer to the task queue.
      pop(timerQueue);
      timer.sortIndex = timer.expirationTime;
      push(taskQueue, timer);

      {
        markTaskStart(timer, currentTime);
        timer.isQueued = true;
      }
    } else {
      // Remaining timers are pending.
      return;
    }

    timer = peek(timerQueue);
  }
}

function handleTimeout(currentTime) {
  isHostTimeoutScheduled = false;
  advanceTimers(currentTime);

  if (!isHostCallbackScheduled) {
    if (peek(taskQueue) !== null) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    } else {
      var firstTimer = peek(timerQueue);

      if (firstTimer !== null) {
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }
    }
  }
}

function flushWork(hasTimeRemaining, initialTime) {
  {
    markSchedulerUnsuspended(initialTime);
  } // We'll need a host callback the next time work is scheduled.


  isHostCallbackScheduled = false;

  if (isHostTimeoutScheduled) {
    // We scheduled a timeout but it's no longer needed. Cancel it.
    isHostTimeoutScheduled = false;
    cancelHostTimeout();
  }

  isPerformingWork = true;
  var previousPriorityLevel = currentPriorityLevel;

  try {
    if (enableProfiling) {
      try {
        return workLoop(hasTimeRemaining, initialTime);
      } catch (error) {
        if (currentTask !== null) {
          var currentTime = exports.unstable_now();
          markTaskErrored(currentTask, currentTime);
          currentTask.isQueued = false;
        }

        throw error;
      }
    } else {
      // No catch in prod code path.
      return workLoop(hasTimeRemaining, initialTime);
    }
  } finally {
    currentTask = null;
    currentPriorityLevel = previousPriorityLevel;
    isPerformingWork = false;

    {
      var _currentTime = exports.unstable_now();

      markSchedulerSuspended(_currentTime);
    }
  }
}

function workLoop(hasTimeRemaining, initialTime) {
  var currentTime = initialTime;
  advanceTimers(currentTime);
  currentTask = peek(taskQueue);

  while (currentTask !== null && !(enableSchedulerDebugging )) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {
      // This currentTask hasn't expired, and we've reached the deadline.
      break;
    }

    var callback = currentTask.callback;

    if (typeof callback === 'function') {
      currentTask.callback = null;
      currentPriorityLevel = currentTask.priorityLevel;
      var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
      markTaskRun(currentTask, currentTime);
      var continuationCallback = callback(didUserCallbackTimeout);
      currentTime = exports.unstable_now();

      if (typeof continuationCallback === 'function') {
        currentTask.callback = continuationCallback;
        markTaskYield(currentTask, currentTime);
      } else {
        {
          markTaskCompleted(currentTask, currentTime);
          currentTask.isQueued = false;
        }

        if (currentTask === peek(taskQueue)) {
          pop(taskQueue);
        }
      }

      advanceTimers(currentTime);
    } else {
      pop(taskQueue);
    }

    currentTask = peek(taskQueue);
  } // Return whether there's additional work


  if (currentTask !== null) {
    return true;
  } else {
    var firstTimer = peek(timerQueue);

    if (firstTimer !== null) {
      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }

    return false;
  }
}

function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break;

    default:
      priorityLevel = NormalPriority;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_next(eventHandler) {
  var priorityLevel;

  switch (currentPriorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;

    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    // This is a fork of runWithPriority, inlined for performance.
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;

    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
}

function unstable_scheduleCallback(priorityLevel, callback, options) {
  var currentTime = exports.unstable_now();
  var startTime;

  if (typeof options === 'object' && options !== null) {
    var delay = options.delay;

    if (typeof delay === 'number' && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  var timeout;

  switch (priorityLevel) {
    case ImmediatePriority:
      timeout = IMMEDIATE_PRIORITY_TIMEOUT;
      break;

    case UserBlockingPriority:
      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
      break;

    case IdlePriority:
      timeout = IDLE_PRIORITY_TIMEOUT;
      break;

    case LowPriority:
      timeout = LOW_PRIORITY_TIMEOUT;
      break;

    case NormalPriority:
    default:
      timeout = NORMAL_PRIORITY_TIMEOUT;
      break;
  }

  var expirationTime = startTime + timeout;
  var newTask = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: startTime,
    expirationTime: expirationTime,
    sortIndex: -1
  };

  {
    newTask.isQueued = false;
  }

  if (startTime > currentTime) {
    // This is a delayed task.
    newTask.sortIndex = startTime;
    push(timerQueue, newTask);

    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
      // All tasks are delayed, and this is the task with the earliest delay.
      if (isHostTimeoutScheduled) {
        // Cancel an existing timeout.
        cancelHostTimeout();
      } else {
        isHostTimeoutScheduled = true;
      } // Schedule a timeout.


      requestHostTimeout(handleTimeout, startTime - currentTime);
    }
  } else {
    newTask.sortIndex = expirationTime;
    push(taskQueue, newTask);

    {
      markTaskStart(newTask, currentTime);
      newTask.isQueued = true;
    } // Schedule a host callback, if needed. If we're already performing work,
    // wait until the next time we yield.


    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  return newTask;
}

function unstable_pauseExecution() {
}

function unstable_continueExecution() {

  if (!isHostCallbackScheduled && !isPerformingWork) {
    isHostCallbackScheduled = true;
    requestHostCallback(flushWork);
  }
}

function unstable_getFirstCallbackNode() {
  return peek(taskQueue);
}

function unstable_cancelCallback(task) {
  {
    if (task.isQueued) {
      var currentTime = exports.unstable_now();
      markTaskCanceled(task, currentTime);
      task.isQueued = false;
    }
  } // Null out the callback to indicate the task has been canceled. (Can't
  // remove from the queue because you can't remove arbitrary nodes from an
  // array based heap, only the first one.)


  task.callback = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

var unstable_requestPaint = requestPaint;
var unstable_Profiling =  {
  startLoggingProfilingEvents: startLoggingProfilingEvents,
  stopLoggingProfilingEvents: stopLoggingProfilingEvents,
  sharedProfilingBuffer: sharedProfilingBuffer
} ;

exports.unstable_IdlePriority = IdlePriority;
exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_Profiling = unstable_Profiling;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
exports.unstable_next = unstable_next;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_requestPaint = unstable_requestPaint;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_wrapCallback = unstable_wrapCallback;
  })();
}


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ "./node_modules/scheduler/cjs/scheduler.development.js");
}


/***/ }),

/***/ "./node_modules/scheduler/tracing.js":
/*!*******************************************!*\
  !*** ./node_modules/scheduler/tracing.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler-tracing.development.js */ "./node_modules/scheduler/cjs/scheduler-tracing.development.js");
}


/***/ }),

/***/ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js ***!
  \**************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** @preserve
  * package: sweetalert2-react-content v3.3.1
  * file: dist/sweetalert2-react-content.umd.js
  * homepage: https://github.com/sweetalert2/sweetalert2-react-content#readme
  * license: MIT
  **/

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js")) :
  0;
}(this, (function (React, ReactDOM) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var mounts = [{
    key: 'title',
    getter: function getter(swal) {
      return swal.getTitle();
    }
  }, {
    key: 'html',
    getter: function getter(swal) {
      return swal.getHtmlContainer();
    }
  }, {
    key: 'confirmButtonText',
    getter: function getter(swal) {
      return swal.getConfirmButton();
    }
  }, {
    key: 'denyButtonText',
    getter: function getter(swal) {
      return swal.getDenyButton();
    }
  }, {
    key: 'cancelButtonText',
    getter: function getter(swal) {
      return swal.getCancelButton();
    }
  }, {
    key: 'footer',
    getter: function getter(swal) {
      return swal.getFooter();
    }
  }, {
    key: 'closeButtonHtml',
    getter: function getter(swal) {
      return swal.getCloseButton();
    }
  }, {
    key: 'iconHtml',
    getter: function getter(swal) {
      return swal.getIcon().querySelector('.swal2-icon-content');
    }
  }];

  var noop = function noop() {}; // eslint-disable-line @typescript-eslint/no-empty-function


  var error = function error(message) {
    return new Error("sweetalert2-react-content: ".concat(message));
  };

  function withReactContent(ParentSwal) {
    return /*#__PURE__*/function (_ParentSwal) {
      _inherits(_class, _ParentSwal);

      var _super = _createSuper(_class);

      function _class() {
        _classCallCheck(this, _class);

        return _super.apply(this, arguments);
      }

      _createClass(_class, [{
        key: "_main",
        value: function _main(params) {
          params = Object.assign({}, params);
          mounts.forEach(function (_ref) {
            var key = _ref.key,
                getter = _ref.getter;

            if ( /*#__PURE__*/React__default['default'].isValidElement(params[key])) {
              var reactElement = params[key];
              params[key] = ' ';
              var domElement;
              var openHookName = params.onOpen || !ParentSwal.isValidParameter('didOpen') ? 'onOpen' : 'didOpen'; // support legacy onOpen hook

              var superOpenHook = params[openHookName] || noop;

              params[openHookName] = function (element) {
                domElement = getter(ParentSwal);
                domElement && ReactDOM__default['default'].render(reactElement, domElement);
                superOpenHook(element);
              };

              var destroyHookName = params.onDestroy || !ParentSwal.isValidParameter('didDestroy') ? 'onDestroy' : 'didDestroy'; // support legacy onDestroy hook

              var superDestroyHook = params[destroyHookName] || noop;

              params[destroyHookName] = function (element) {
                superDestroyHook(element);

                if (domElement) {
                  ReactDOM__default['default'].unmountComponentAtNode(domElement);
                }
              };
            }
          });
          return _get(_getPrototypeOf(_class.prototype), "_main", this).call(this, params);
        }
      }, {
        key: "update",
        value: function update() {
          throw error('Swal.update() is not yet supported. See https://github.com/sweetalert2/sweetalert2-react-content/issues/73');
        }
      }], [{
        key: "argsToParams",
        value: function argsToParams(args) {
          if ( /*#__PURE__*/React__default['default'].isValidElement(args[0]) || /*#__PURE__*/React__default['default'].isValidElement(args[1])) {
            var params = {};
            ['title', 'html', 'icon'].forEach(function (name, index) {
              if (args[index] !== undefined) {
                params[name] = args[index];
              }
            });
            return params;
          } else {
            return ParentSwal.argsToParams(args);
          }
        }
      }]);

      return _class;
    }(ParentSwal);
  }

  return withReactContent;

})));
//# sourceMappingURL=sweetalert2-react-content.umd.js.map


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v10.15.5
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcon = function getIcon() {
    return elementByClass(swalClasses.icon);
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getDenyButton = function getDenyButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.display = 'none';
  };
  var setStyle = function setStyle(parent, selector, property, value) {
    var el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  };
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    var getPadding = function getPadding(el) {
      return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
    };

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block'); // Content as plain text
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block'); // No content
    } else {
      hide(htmlContainer);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance);
    var icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };

  var applyStyles = function applyStyles(icon, params) {
    for (var iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
      var sel = _arr[_i];
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var container = getContainer();
    var popup = getPopup(); // Width

    if (params.toast) {
      // #2170
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    } else if (typeof params.onRender === 'function') {
      params.onRender(getPopup()); // @deprecated
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Deny' button
   */

  var clickDeny = function clickDeny() {
    return getDenyButton() && getDenyButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, priorityMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({}, mixinParams, priorityMixinParams));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};
  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  var bodyClickListener = function bodyClickListener(event) {
    // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
    // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    willOpen: undefined,
    didOpen: undefined,
    onRender: undefined,
    didRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    willClose: undefined,
    didClose: undefined,
    onDestroy: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass',
    onBeforeOpen: 'willOpen',
    onOpen: 'didOpen',
    onRender: 'didRender',
    onClose: 'willClose',
    onAfterClose: 'didClose',
    onDestroy: 'didDestroy'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var isStylys = function isStylys(event) {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  var isZoom = function isZoom(event) {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, didClose) {
    if (isToast$$1) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return _extends({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose,
        willClose = innerParams.willClose,
        didClose = innerParams.didClose;
    runDidClose(popup, willClose, onClose);

    if (animationIsSupported) {
      animatePopup(instance, popup, container, didClose || onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), didClose || onAfterClose);
    }
  };

  var runDidClose = function runDidClose(popup, willClose, onClose) {
    if (willClose !== null && typeof willClose === 'function') {
      willClose(popup);
    } else if (onClose !== null && typeof onClose === 'function') {
      onClose(popup); // @deprecated
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, didClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  var getTemplateParams = function getTemplateParams(params) {
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    var templateContent = template.content || template; // IE11

    showWarningsForElements(templateContent);

    var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));

    return result;
  };

  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (_typeof(defaultParams[paramName]) === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    var image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    var icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    var input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    var inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};

    for (var i in paramNames) {
      var paramName = paramNames[i];
      var tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML;
      }
    }

    return result;
  };

  var showWarningsForElements = function showWarningsForElements(template) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.querySelectorAll('*')).forEach(function (el) {
      if (el.parentNode !== template) {
        // can't use template.children because of IE11
        return;
      }

      var tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    toArray(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    } else if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup); // @deprecated
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    runDidOpen(popup, params);
    removeClass(container, swalClasses['no-transition']);
  };

  var runDidOpen = function runDidOpen(popup, params) {
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    } else if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      }); // @deprecated
    }
  };

  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup);
    setTimeout(function () {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var isSelected = function isSelected(optionValue, inputValue) {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
    } else {
      deny(instance, innerParams, false);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
  /* type is either 'confirm' or 'deny' */
  ) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, innerParams, inputValue);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, innerParams, inputValue);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  };

  var deny = function deny(instance, innerParams, value) {
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value: value
      });
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      isConfirmed: true,
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
  ];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
      handleArrows(e.key); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows(key) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();

    if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
      return;
    }

    var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    showWarningsForParams(_extends({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);

    var showClass = _extends({}, defaultParams.showClass, mixinParams.showClass, templateParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, mixinParams.hideClass, templateParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131


    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          isDismissed: true,
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.denyButton.onclick = function () {
        return handleDenyButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    runDidDestroy(innerParams);
    disposeSwal(this);
  }

  var runDidDestroy = function runDidDestroy(innerParams) {
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    } else if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy(); // @deprecated
    }
  };

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '10.15.5';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.125em .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{display:none;align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (invariant);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warning);


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valueEqual);


/***/ })

},
0,[["./resources/assets/web/index.js","/assets/web/js/manifest","assets/web/js/vendor"],["./resources/assets/web/scss/style.scss","/assets/web/js/manifest","assets/web/js/vendor"]]]);