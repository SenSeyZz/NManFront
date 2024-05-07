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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavBar */ \"./src/NavBar.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../table */ \"./src/table.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n(__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config)();\nconst Trivia = ()=>{\n    _s();\n    const api = \"\";\n    const initialData = [];\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(dbURI + \"/api/maxData\");\n                setData(response.data);\n                console.log(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            // Handle error, e.g., show error message\n            }\n        };\n        fetchData();\n    }, []);\n    const handleAddRow = ()=>{\n        const newRow = {\n            first_name: \"\",\n            birth_year: 0,\n            nationality: \"\",\n            boobs: 0,\n            ass: 0,\n            bj_quality: 0,\n            intelligence: 0,\n            where_you_met: \"\",\n            quality_of_the_sex: 0,\n            complicity: 0,\n            special_physical_trait: \"\",\n            global_grade: 0,\n            Creator: \"Max\",\n            isNew: true\n        };\n        setData([\n            ...data,\n            newRow\n        ]);\n        console.log(dbURI);\n    };\n    const handleInputChange = (index, name, value)=>{\n        const newData = [\n            ...data\n        ];\n        // Parse certain values as integers\n        if (name === \"birth_year\" || name === \"boobs\" || name === \"ass\" || name === \"bj_quality\" || name === \"intelligence\" || name === \"quality_of_the_sex\" || name === \"complicity\" || name === \"global_grade\") {\n            newData[index][name] = parseInt(value, 10); // Parse as integer\n        } else {\n            newData[index][name] = value;\n        }\n        setData(newData);\n    };\n    const handleSave = async ()=>{\n        try {\n            // Filter out the fetched rows and send only the newly added rows\n            const newDataToSave = data.filter((row)=>row.isNew);\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(dbURI + \"/api/addRow\", newDataToSave);\n            alert(\"Data saved successfully\");\n        } catch (error) {\n            console.error(\"Error saving data:\", error);\n            alert(\"Error saving data. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Max's page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data,\n                onInputChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddRow,\n                children: \"Add Row\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphFront\\\\Front\\\\src\\\\max\\\\index.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Trivia, \"A2wpUDj2vsVhzBQraLwic4bnRJI=\");\n_c = Trivia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trivia);\nvar _c;\n$RefreshReg$(_c, \"Trivia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWF4L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUNUO0FBQ0g7QUFDMUJNLCtFQUF3QjtBQUV4QixNQUFNRSxTQUFTOztJQUViLE1BQU1DLE1BQU07SUFFWixNQUFNQyxjQUFjLEVBRW5CO0lBRUQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDUztJQUVqQ1IsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNVCxpREFBUyxDQUFDVyxRQUFNO2dCQUN2Q0osUUFBUUUsU0FBU0gsSUFBSTtnQkFDckJNLFFBQVFDLEdBQUcsQ0FBQ1A7WUFDZCxFQUFFLE9BQU9RLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDLHlDQUF5QztZQUMzQztRQUNGO1FBRUFOO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU8sZUFBZTtRQUNuQixNQUFNQyxTQUFTO1lBQ2JDLFlBQVk7WUFDWkMsWUFBWTtZQUNaQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEMsS0FBSztZQUNMQyxZQUFZO1lBQ1pDLGNBQWM7WUFDZEMsZUFBZTtZQUNmQyxvQkFBb0I7WUFDcEJDLFlBQVk7WUFDWkMsd0JBQXdCO1lBQ3hCQyxjQUFjO1lBQ2RDLFNBQVM7WUFDVEMsT0FBTztRQUNUO1FBQ0F2QixRQUFRO2VBQUlEO1lBQU1VO1NBQU87UUFDekJKLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtJQUdBLE1BQU1vQixvQkFBb0IsQ0FBQ0MsT0FBT0MsTUFBTUM7UUFDdEMsTUFBTUMsVUFBVTtlQUFJN0I7U0FBSztRQUN6QixtQ0FBbUM7UUFDbkMsSUFBSTJCLFNBQVMsZ0JBQWdCQSxTQUFTLFdBQVdBLFNBQVMsU0FBU0EsU0FBUyxnQkFBZ0JBLFNBQVMsa0JBQWtCQSxTQUFTLHdCQUF3QkEsU0FBUyxnQkFBZ0JBLFNBQVMsZ0JBQWdCO1lBQ3hNRSxPQUFPLENBQUNILE1BQU0sQ0FBQ0MsS0FBSyxHQUFHRyxTQUFTRixPQUFPLEtBQUssbUJBQW1CO1FBQ2pFLE9BQU87WUFDTEMsT0FBTyxDQUFDSCxNQUFNLENBQUNDLEtBQUssR0FBR0M7UUFDekI7UUFDQTNCLFFBQVE0QjtJQUNWO0lBRUEsTUFBTUUsYUFBYTtRQUNqQixJQUFJO1lBQ0YsaUVBQWlFO1lBQ2pFLE1BQU1DLGdCQUFnQmhDLEtBQUtpQyxNQUFNLENBQUNDLENBQUFBLE1BQU9BLElBQUlWLEtBQUs7WUFFbEQsTUFBTTlCLGtEQUFVLENBQUNXLFFBQU0sZUFBZTJCO1lBQ3RDSSxNQUFNO1FBQ1IsRUFBRSxPQUFPNUIsT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsc0JBQXNCQTtZQUNwQzRCLE1BQU07UUFDUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQzdDLCtDQUFhQTs7Ozs7MEJBQ2QsOERBQUM4QzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDN0MsOENBQUtBO2dCQUFDTyxNQUFNQTtnQkFBTXVDLGVBQWVkOzs7Ozs7MEJBQ2xDLDhEQUFDZTtnQkFBT0MsU0FBU2hDOzBCQUFjOzs7Ozs7MEJBQy9CLDhEQUFDK0I7Z0JBQU9DLFNBQVNWOzBCQUFZOzs7Ozs7Ozs7Ozs7QUFHbkM7R0FoRk1sQztLQUFBQTtBQWtGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWF4L2luZGV4LmpzP2Q1ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4uL05hdkJhcic7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi90YWJsZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xyXG5cclxuY29uc3QgVHJpdmlhID0gKCkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IGFwaSA9IFwiXCJcclxuXHJcbiAgY29uc3QgaW5pdGlhbERhdGEgPSBbXHJcbiAgICAvLyBZb3VyIGluaXRpYWwgZGF0YSBoZXJlXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGRiVVJJKycvYXBpL21heERhdGEnKTtcclxuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvciwgZS5nLiwgc2hvdyBlcnJvciBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRSb3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdSb3cgPSB7XHJcbiAgICAgIGZpcnN0X25hbWU6ICcnLFxyXG4gICAgICBiaXJ0aF95ZWFyOiAwLFxyXG4gICAgICBuYXRpb25hbGl0eTogJycsXHJcbiAgICAgIGJvb2JzOiAwLFxyXG4gICAgICBhc3M6IDAsXHJcbiAgICAgIGJqX3F1YWxpdHk6IDAsXHJcbiAgICAgIGludGVsbGlnZW5jZTogMCxcclxuICAgICAgd2hlcmVfeW91X21ldDogJycsXHJcbiAgICAgIHF1YWxpdHlfb2ZfdGhlX3NleDogMCxcclxuICAgICAgY29tcGxpY2l0eTogMCxcclxuICAgICAgc3BlY2lhbF9waHlzaWNhbF90cmFpdDogJycsXHJcbiAgICAgIGdsb2JhbF9ncmFkZTogMCxcclxuICAgICAgQ3JlYXRvcjogXCJNYXhcIixcclxuICAgICAgaXNOZXc6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgc2V0RGF0YShbLi4uZGF0YSwgbmV3Um93XSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYlVSSSk7XHJcbiAgfTtcclxuICAgIFxyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChpbmRleCwgbmFtZSwgdmFsdWUpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBbLi4uZGF0YV07XHJcbiAgICAvLyBQYXJzZSBjZXJ0YWluIHZhbHVlcyBhcyBpbnRlZ2Vyc1xyXG4gICAgaWYgKG5hbWUgPT09ICdiaXJ0aF95ZWFyJyB8fCBuYW1lID09PSAnYm9vYnMnIHx8IG5hbWUgPT09ICdhc3MnIHx8IG5hbWUgPT09ICdial9xdWFsaXR5JyB8fCBuYW1lID09PSAnaW50ZWxsaWdlbmNlJyB8fCBuYW1lID09PSAncXVhbGl0eV9vZl90aGVfc2V4JyB8fCBuYW1lID09PSAnY29tcGxpY2l0eScgfHwgbmFtZSA9PT0gJ2dsb2JhbF9ncmFkZScpIHtcclxuICAgICAgbmV3RGF0YVtpbmRleF1bbmFtZV0gPSBwYXJzZUludCh2YWx1ZSwgMTApOyAvLyBQYXJzZSBhcyBpbnRlZ2VyXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdEYXRhW2luZGV4XVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShuZXdEYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgZmV0Y2hlZCByb3dzIGFuZCBzZW5kIG9ubHkgdGhlIG5ld2x5IGFkZGVkIHJvd3NcclxuICAgICAgY29uc3QgbmV3RGF0YVRvU2F2ZSA9IGRhdGEuZmlsdGVyKHJvdyA9PiByb3cuaXNOZXcpO1xyXG5cclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChkYlVSSSsnL2FwaS9hZGRSb3cnLCBuZXdEYXRhVG9TYXZlKTtcclxuICAgICAgYWxlcnQoJ0RhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIGFsZXJ0KCdFcnJvciBzYXZpbmcgZGF0YS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmlnYXRpb25CYXIgLz5cclxuICAgICAgPGgxPldlbGNvbWUgdG8gTWF4J3MgcGFnZTwvaDE+XHJcbiAgICAgIDxUYWJsZSBkYXRhPXtkYXRhfSBvbklucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRSb3d9PkFkZCBSb3c8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlfT5TYXZlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJpdmlhOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2aWdhdGlvbkJhciIsIlRhYmxlIiwiYXhpb3MiLCJyZXF1aXJlIiwiY29uZmlnIiwiVHJpdmlhIiwiYXBpIiwiaW5pdGlhbERhdGEiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZGJVUkkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVBZGRSb3ciLCJuZXdSb3ciLCJmaXJzdF9uYW1lIiwiYmlydGhfeWVhciIsIm5hdGlvbmFsaXR5IiwiYm9vYnMiLCJhc3MiLCJial9xdWFsaXR5IiwiaW50ZWxsaWdlbmNlIiwid2hlcmVfeW91X21ldCIsInF1YWxpdHlfb2ZfdGhlX3NleCIsImNvbXBsaWNpdHkiLCJzcGVjaWFsX3BoeXNpY2FsX3RyYWl0IiwiZ2xvYmFsX2dyYWRlIiwiQ3JlYXRvciIsImlzTmV3IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJpbmRleCIsIm5hbWUiLCJ2YWx1ZSIsIm5ld0RhdGEiLCJwYXJzZUludCIsImhhbmRsZVNhdmUiLCJuZXdEYXRhVG9TYXZlIiwiZmlsdGVyIiwicm93IiwicG9zdCIsImFsZXJ0IiwiZGl2IiwiaDEiLCJvbklucHV0Q2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/max/index.js\n"));

/***/ })

});