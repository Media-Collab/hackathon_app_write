"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Auth",{

/***/ "./src/pages/Auth/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/Auth/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Login = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"mx-96 mt-32 shadow-2xl rounded-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-4xl text-center\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Workspace\\\\Projects\\\\dev\\\\devapp\\\\src\\\\pages\\\\Auth\\\\index.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"User\",\n                    className: \"border-black border rounded-md\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Workspace\\\\Projects\\\\dev\\\\devapp\\\\src\\\\pages\\\\Auth\\\\index.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/\",\n                    className: \"pd-2 bg-black text-white\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Workspace\\\\Projects\\\\dev\\\\devapp\\\\src\\\\pages\\\\Auth\\\\index.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Workspace\\\\Projects\\\\dev\\\\devapp\\\\src\\\\pages\\\\Auth\\\\index.jsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQXV0aC9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBNEI7QUFFNUIsSUFBTUMsS0FBSyxHQUFHLFdBQU07SUFDbEIscUJBQ0U7a0JBQ0UsNEVBQUNDLFNBQU87WUFBQ0MsU0FBUyxFQUFDLG1DQUFtQzs7OEJBQ3BELDhEQUFDQyxHQUFDO29CQUFDRCxTQUFTLEVBQUMsZ0NBQWdDOzhCQUFDLE9BQUs7Ozs7O3lCQUFJOzhCQUN2RCw4REFBQ0UsT0FBSztvQkFBQ0MsSUFBSSxFQUFDLE1BQU07b0JBQUNDLFdBQVcsRUFBQyxNQUFNO29CQUFDSixTQUFTLEVBQUMsZ0NBQWdDOzs7Ozt5QkFBUzs4QkFDekYsOERBQUNLLEdBQUM7b0JBQUNDLElBQUksRUFBQyxHQUFHO29CQUFDTixTQUFTLEVBQUMsMEJBQTBCOzhCQUFDLE9BQUs7Ozs7O3lCQUFJOzs7Ozs7aUJBQ2xEO3FCQUNULENBQ0o7Q0FDRjtBQVZLRixLQUFBQSxLQUFLO0FBWVgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0F1dGgvaW5kZXguanN4P2NjZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXgtOTYgbXQtMzIgc2hhZG93LTJ4bCByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIHRleHQtY2VudGVyXCI+TG9naW48L3A+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VyXCIgY2xhc3NOYW1lPVwiYm9yZGVyLWJsYWNrIGJvcmRlciByb3VuZGVkLW1kXCI+PC9pbnB1dD5cclxuICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInBkLTIgYmctYmxhY2sgdGV4dC13aGl0ZVwiPkxvZ2luPC9hPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbIkxpbmsiLCJMb2dpbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Auth/index.jsx\n");

/***/ })

});