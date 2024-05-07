"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Max",{

/***/ "./src/max/index.js":
/*!**************************!*\
  !*** ./src/max/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavBar */ \"./src/NavBar.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../table */ \"./src/table.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n(__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config)();\nconst Trivia = ()=>{\n    _s();\n    const api_URI = \"\";\n    const initialData = [];\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(api_URI + \"/api/maxData\");\n                setData(response.data);\n                console.log(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            // Handle error, e.g., show error message\n            }\n        };\n        fetchData();\n    }, []);\n    const handleAddRow = ()=>{\n        const newRow = {\n            first_name: \"\",\n            birth_year: 0,\n            nationality: \"\",\n            boobs: 0,\n            ass: 0,\n            bj_quality: 0,\n            intelligence: 0,\n            where_you_met: \"\",\n            quality_of_the_sex: 0,\n            complicity: 0,\n            special_physical_trait: \"\",\n            global_grade: 0,\n            Creator: \"Max\",\n            isNew: true\n        };\n        setData([\n            ...data,\n            newRow\n        ]);\n        console.log(dbURI);\n    };\n    const handleInputChange = (index, name, value)=>{\n        const newData = [\n            ...data\n        ];\n        // Parse certain values as integers\n        if (name === \"birth_year\" || name === \"boobs\" || name === \"ass\" || name === \"bj_quality\" || name === \"intelligence\" || name === \"quality_of_the_sex\" || name === \"complicity\" || name === \"global_grade\") {\n            newData[index][name] = parseInt(value, 10); // Parse as integer\n        } else {\n            newData[index][name] = value;\n        }\n        setData(newData);\n    };\n    const handleSave = async ()=>{\n        try {\n            // Filter out the fetched rows and send only the newly added rows\n            const newDataToSave = data.filter((row)=>row.isNew);\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(api + \"/api/addRow\", newDataToSave);\n            alert(\"Data saved successfully\");\n        } catch (error) {\n            console.error(\"Error saving data:\", error);\n            alert(\"Error saving data. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Max's page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data,\n                onInputChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddRow,\n                children: \"Add Row\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Trivia, \"A2wpUDj2vsVhzBQraLwic4bnRJI=\");\n_c = Trivia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trivia);\nvar _c;\n$RefreshReg$(_c, \"Trivia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWF4L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUNUO0FBQ0g7QUFDMUJNLCtFQUF3QjtBQUV4QixNQUFNRSxTQUFTOztJQUViLE1BQU1DLFVBQVU7SUFFaEIsTUFBTUMsY0FBYyxFQUVuQjtJQUVELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQ1M7SUFFakNSLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVQsaURBQVMsQ0FBQ0ksVUFBUTtnQkFDekNHLFFBQVFFLFNBQVNILElBQUk7Z0JBQ3JCSyxRQUFRQyxHQUFHLENBQUNOO1lBQ2QsRUFBRSxPQUFPTyxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsd0JBQXdCQTtZQUN0Qyx5Q0FBeUM7WUFDM0M7UUFDRjtRQUVBTDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1NLGVBQWU7UUFDbkIsTUFBTUMsU0FBUztZQUNiQyxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsYUFBYTtZQUNiQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsWUFBWTtZQUNaQyxjQUFjO1lBQ2RDLGVBQWU7WUFDZkMsb0JBQW9CO1lBQ3BCQyxZQUFZO1lBQ1pDLHdCQUF3QjtZQUN4QkMsY0FBYztZQUNkQyxTQUFTO1lBQ1RDLE9BQU87UUFDVDtRQUNBdEIsUUFBUTtlQUFJRDtZQUFNUztTQUFPO1FBQ3pCSixRQUFRQyxHQUFHLENBQUNrQjtJQUNkO0lBR0EsTUFBTUMsb0JBQW9CLENBQUNDLE9BQU9DLE1BQU1DO1FBQ3RDLE1BQU1DLFVBQVU7ZUFBSTdCO1NBQUs7UUFDekIsbUNBQW1DO1FBQ25DLElBQUkyQixTQUFTLGdCQUFnQkEsU0FBUyxXQUFXQSxTQUFTLFNBQVNBLFNBQVMsZ0JBQWdCQSxTQUFTLGtCQUFrQkEsU0FBUyx3QkFBd0JBLFNBQVMsZ0JBQWdCQSxTQUFTLGdCQUFnQjtZQUN4TUUsT0FBTyxDQUFDSCxNQUFNLENBQUNDLEtBQUssR0FBR0csU0FBU0YsT0FBTyxLQUFLLG1CQUFtQjtRQUNqRSxPQUFPO1lBQ0xDLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDQyxLQUFLLEdBQUdDO1FBQ3pCO1FBQ0EzQixRQUFRNEI7SUFDVjtJQUVBLE1BQU1FLGFBQWE7UUFDakIsSUFBSTtZQUNGLGlFQUFpRTtZQUNqRSxNQUFNQyxnQkFBZ0JoQyxLQUFLaUMsTUFBTSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJWCxLQUFLO1lBRWxELE1BQU03QixrREFBVSxDQUFDMEMsTUFBSSxlQUFlSjtZQUNwQ0ssTUFBTTtRQUNSLEVBQUUsT0FBTzlCLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLHNCQUFzQkE7WUFDcEM4QixNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUM5QywrQ0FBYUE7Ozs7OzBCQUNkLDhEQUFDK0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQzlDLDhDQUFLQTtnQkFBQ08sTUFBTUE7Z0JBQU13QyxlQUFlZjs7Ozs7OzBCQUNsQyw4REFBQ2dCO2dCQUFPQyxTQUFTbEM7MEJBQWM7Ozs7OzswQkFDL0IsOERBQUNpQztnQkFBT0MsU0FBU1g7MEJBQVk7Ozs7Ozs7Ozs7OztBQUduQztHQWhGTWxDO0tBQUFBO0FBa0ZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tYXgvaW5kZXguanM/ZDVkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vTmF2QmFyJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL3RhYmxlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XHJcblxyXG5jb25zdCBUcml2aWEgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgYXBpX1VSSSA9IFwiXCJcclxuXHJcbiAgY29uc3QgaW5pdGlhbERhdGEgPSBbXHJcbiAgICAvLyBZb3VyIGluaXRpYWwgZGF0YSBoZXJlXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGFwaV9VUkkrJy9hcGkvbWF4RGF0YScpO1xyXG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yLCBlLmcuLCBzaG93IGVycm9yIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFJvdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1JvdyA9IHtcclxuICAgICAgZmlyc3RfbmFtZTogJycsXHJcbiAgICAgIGJpcnRoX3llYXI6IDAsXHJcbiAgICAgIG5hdGlvbmFsaXR5OiAnJyxcclxuICAgICAgYm9vYnM6IDAsXHJcbiAgICAgIGFzczogMCxcclxuICAgICAgYmpfcXVhbGl0eTogMCxcclxuICAgICAgaW50ZWxsaWdlbmNlOiAwLFxyXG4gICAgICB3aGVyZV95b3VfbWV0OiAnJyxcclxuICAgICAgcXVhbGl0eV9vZl90aGVfc2V4OiAwLFxyXG4gICAgICBjb21wbGljaXR5OiAwLFxyXG4gICAgICBzcGVjaWFsX3BoeXNpY2FsX3RyYWl0OiAnJyxcclxuICAgICAgZ2xvYmFsX2dyYWRlOiAwLFxyXG4gICAgICBDcmVhdG9yOiBcIk1heFwiLFxyXG4gICAgICBpc05ldzogdHJ1ZSxcclxuICAgIH07XHJcbiAgICBzZXREYXRhKFsuLi5kYXRhLCBuZXdSb3ddKTtcclxuICAgIGNvbnNvbGUubG9nKGRiVVJJKTtcclxuICB9O1xyXG4gICAgXHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGluZGV4LCBuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IFsuLi5kYXRhXTtcclxuICAgIC8vIFBhcnNlIGNlcnRhaW4gdmFsdWVzIGFzIGludGVnZXJzXHJcbiAgICBpZiAobmFtZSA9PT0gJ2JpcnRoX3llYXInIHx8IG5hbWUgPT09ICdib29icycgfHwgbmFtZSA9PT0gJ2FzcycgfHwgbmFtZSA9PT0gJ2JqX3F1YWxpdHknIHx8IG5hbWUgPT09ICdpbnRlbGxpZ2VuY2UnIHx8IG5hbWUgPT09ICdxdWFsaXR5X29mX3RoZV9zZXgnIHx8IG5hbWUgPT09ICdjb21wbGljaXR5JyB8fCBuYW1lID09PSAnZ2xvYmFsX2dyYWRlJykge1xyXG4gICAgICBuZXdEYXRhW2luZGV4XVtuYW1lXSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7IC8vIFBhcnNlIGFzIGludGVnZXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0RhdGFbaW5kZXhdW25hbWVdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKG5ld0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSBmZXRjaGVkIHJvd3MgYW5kIHNlbmQgb25seSB0aGUgbmV3bHkgYWRkZWQgcm93c1xyXG4gICAgICBjb25zdCBuZXdEYXRhVG9TYXZlID0gZGF0YS5maWx0ZXIocm93ID0+IHJvdy5pc05ldyk7XHJcblxyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGFwaSsnL2FwaS9hZGRSb3cnLCBuZXdEYXRhVG9TYXZlKTtcclxuICAgICAgYWxlcnQoJ0RhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIGFsZXJ0KCdFcnJvciBzYXZpbmcgZGF0YS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmlnYXRpb25CYXIgLz5cclxuICAgICAgPGgxPldlbGNvbWUgdG8gTWF4J3MgcGFnZTwvaDE+XHJcbiAgICAgIDxUYWJsZSBkYXRhPXtkYXRhfSBvbklucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRSb3d9PkFkZCBSb3c8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlfT5TYXZlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJpdmlhOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2aWdhdGlvbkJhciIsIlRhYmxlIiwiYXhpb3MiLCJyZXF1aXJlIiwiY29uZmlnIiwiVHJpdmlhIiwiYXBpX1VSSSIsImluaXRpYWxEYXRhIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZUFkZFJvdyIsIm5ld1JvdyIsImZpcnN0X25hbWUiLCJiaXJ0aF95ZWFyIiwibmF0aW9uYWxpdHkiLCJib29icyIsImFzcyIsImJqX3F1YWxpdHkiLCJpbnRlbGxpZ2VuY2UiLCJ3aGVyZV95b3VfbWV0IiwicXVhbGl0eV9vZl90aGVfc2V4IiwiY29tcGxpY2l0eSIsInNwZWNpYWxfcGh5c2ljYWxfdHJhaXQiLCJnbG9iYWxfZ3JhZGUiLCJDcmVhdG9yIiwiaXNOZXciLCJkYlVSSSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaW5kZXgiLCJuYW1lIiwidmFsdWUiLCJuZXdEYXRhIiwicGFyc2VJbnQiLCJoYW5kbGVTYXZlIiwibmV3RGF0YVRvU2F2ZSIsImZpbHRlciIsInJvdyIsInBvc3QiLCJhcGkiLCJhbGVydCIsImRpdiIsImgxIiwib25JbnB1dENoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/max/index.js\n"));

/***/ })

});