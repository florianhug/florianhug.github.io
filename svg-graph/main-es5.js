var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"side\">\n    <app-settings></app-settings>\n  </div>\n  <div class=\"main\">\n    <h1>Content</h1>\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/graph/graph.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graph/graph.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"graph\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\"\n       width=\"100%\"\n       height=\"800px\"\n       viewBox=\"0 0 1000 1000\">\n    <g *ngFor=\"let mesh of (currentScene | async).meshes\">\n      <g *ngFor=\"let edge of mesh.edges\" app-line\n         [fromX]=\"edge.nodeA.posX\" [fromY]=\"edge.nodeA.posY\"\n         [toX]=\"edge.nodeB.posX\" [toY]=\"edge.nodeB.posY\"></g>\n      <g *ngFor=\"let point of mesh.nodes\" app-point [posX]=\"point.posX\" [posY]=\"point.posY\"></g>\n    </g>\n    <g app-point [posX]=\"50\" [posY]=\"50\"></g>\n  </svg>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Settings component</h1>\n<div class=\"form-container\">\n  <span>Number of subdivisions</span>\n  <mat-slider min=\"0\"\n              max=\"10\"\n              step=\"1\"\n              [value]=\"initialValue\"\n              thumbLabel\n              tickInterval=\"1\"\n              (valueChange)=\"settings.setSubdivisions($event.valueOf())\"></mat-slider>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/svgelements/line/line.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/svgelements/line/line.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<svg:line [attr.x1]=\"fromX\" [attr.y1]=\"fromY\" [attr.x2]=\"toX\" [attr.y2]=\"toY\" stroke=\"black\"/>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/svgelements/point/point.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/svgelements/point/point.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<svg:circle [attr.cx]=\"posX\" [attr.cy]=\"posY\" r=\"4\" style=\"fill:red\"/>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/svgelements/rect/rect.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/svgelements/rect/rect.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<svg:rect [attr.x]=\"posX\"\n          [attr.y]=\"posY\"\n          [attr.width]=\"width\"\n          [attr.height]=\"height\"\n          style=\"fill: aquamarine\"></svg:rect>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graph/graph.component */ "./src/app/graph/graph.component.ts");
            var routes = [
                { path: '', component: _graph_graph_component__WEBPACK_IMPORTED_MODULE_3__["GraphComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n.container .side {\n  flex: initial;\n  min-width: 300px;\n  padding: 1em;\n}\n.container .main {\n  flex: auto;\n  background-color: navy;\n  color: floralwhite;\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZodWcvbXlQcm9qZWN0cy9wcml2YXRlL3N2Zy1ncmFwaC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURFRTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcblxuICAuc2lkZSB7XG4gICAgZmxleDogaW5pdGlhbDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBmbGV4OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG4gICAgY29sb3I6IGZsb3JhbHdoaXRlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgLnNpZGUge1xuICBmbGV4OiBpbml0aWFsO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAxZW07XG59XG4uY29udGFpbmVyIC5tYWluIHtcbiAgZmxleDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xuICBwYWRkaW5nOiAxZW07XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'svg-graph';
                    this.numberOfSubdivisions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
            /* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./graph/graph.component */ "./src/app/graph/graph.component.ts");
            /* harmony import */ var _svgelements_svgelements_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./svgelements/svgelements.module */ "./src/app/svgelements/svgelements.module.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
                        _graph_graph_component__WEBPACK_IMPORTED_MODULE_9__["GraphComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                        _svgelements_svgelements_module__WEBPACK_IMPORTED_MODULE_10__["SvgelementsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/domain/face/quadrangle.ts": 
        /*!*******************************************!*\
          !*** ./src/app/domain/face/quadrangle.ts ***!
          \*******************************************/
        /*! exports provided: Quadrangle */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quadrangle", function () { return Quadrangle; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _primitive_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../primitive/node */ "./src/app/domain/primitive/node.ts");
            var Quadrangle = /** @class */ (function () {
                function Quadrangle(nodes, edges) {
                    this.nodes = nodes;
                    this.edges = edges;
                    this.centroid = Quadrangle.getCentroid(nodes);
                }
                Quadrangle.getCentroid = function (nodes) {
                    var centerX = nodes.map(function (node) { return node.posX; }).reduce(function (sum, current) { return sum + current; }) / nodes.length;
                    var centerY = nodes.map(function (node) { return node.posY; }).reduce(function (sum, current) { return sum + current; }) / nodes.length;
                    return new _primitive_node__WEBPACK_IMPORTED_MODULE_1__["Node"](centerX, centerY);
                };
                return Quadrangle;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/mesh.ts": 
        /*!********************************!*\
          !*** ./src/app/domain/mesh.ts ***!
          \********************************/
        /*! exports provided: Mesh */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function () { return Mesh; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _primitive_edge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primitive/edge */ "./src/app/domain/primitive/edge.ts");
            /* harmony import */ var _primitive_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./primitive/node */ "./src/app/domain/primitive/node.ts");
            /* harmony import */ var _face_quadrangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./face/quadrangle */ "./src/app/domain/face/quadrangle.ts");
            var Mesh = /** @class */ (function () {
                function Mesh(nodes, edges, faces) {
                    this.nodes = nodes;
                    this.edges = edges;
                    this.faces = faces;
                }
                Mesh.subdivideEdge = function (edge) {
                    var centerX = (edge.nodeA.posX + edge.nodeB.posX) / 2;
                    var centerY = (edge.nodeA.posY + edge.nodeB.posY) / 2;
                    var centroid = new _primitive_node__WEBPACK_IMPORTED_MODULE_2__["Node"](centerX, centerY);
                    var edgeA = new _primitive_edge__WEBPACK_IMPORTED_MODULE_1__["Edge"](edge.nodeA, centroid);
                    var edgeB = new _primitive_edge__WEBPACK_IMPORTED_MODULE_1__["Edge"](centroid, edge.nodeB);
                    return { centroid: centroid, edgeA: edgeA, edgeB: edgeB };
                };
                Mesh.prototype.subdivide = function () {
                    var edgeMap = new Map();
                    var nodeMap = new Map();
                    var faceMap = new Map();
                    var centroidMap = new Map();
                    this.edges.forEach(function (edge) { return faceMap.set(edge, []); });
                    this.faces.forEach(function (face) {
                        edgeMap.set(face, []);
                        nodeMap.set(face, __spread(face.nodes, [face.centroid]));
                        centroidMap.set(face, face.centroid);
                        face.edges.forEach(function (edge) { return faceMap.get(edge).push(face); });
                    });
                    var nodes = this.nodes.concat(this.faces.map(function (face) { return face.centroid; }));
                    var edges = [];
                    this.edges.forEach(function (edge) {
                        var affectedFaces = faceMap.get(edge);
                        var subdivided = Mesh.subdivideEdge(edge);
                        nodes.push(subdivided.centroid);
                        edges.push(subdivided.edgeA);
                        edges.push(subdivided.edgeB);
                        affectedFaces.forEach(function (face) {
                            nodeMap.get(face).push(subdivided.centroid);
                            edgeMap.get(face).push(subdivided.edgeA);
                            edgeMap.get(face).push(subdivided.edgeB);
                            var faceCentroid = centroidMap.get(face);
                            var centroidEdge = new _primitive_edge__WEBPACK_IMPORTED_MODULE_1__["Edge"](subdivided.centroid, faceCentroid);
                            edges.push(centroidEdge);
                            edgeMap.get(face).push(centroidEdge);
                        });
                        return subdivided;
                    });
                    // Connect the faces
                    var faces = this.faces.map(function (face) {
                        var faceNodes = face.nodes.map(function (node) { return edgeMap.get(face).filter(function (edge) { return edge.containsNode(node); })
                            .map(function (edge) { return edge.getOtherEnd(node); })
                            .concat(centroidMap.get(face))
                            .concat(node); });
                        return faceNodes.map(function (n) {
                            var faceEdges = [];
                            var _loop_1 = function (i) {
                                var _loop_2 = function (j) {
                                    faceEdges.push.apply(faceEdges, __spread(edges.filter(function (e) { return e.connects(n[i], n[j]); })));
                                };
                                for (var j = 0; j < n.length; j++) {
                                    _loop_2(j);
                                }
                            };
                            for (var i = 0; i < n.length; i++) {
                                _loop_1(i);
                            }
                            return new _face_quadrangle__WEBPACK_IMPORTED_MODULE_3__["Quadrangle"](n, Array.from(new Set(faceEdges)));
                        });
                    }).reduce(function (collection, f) { return collection.concat(f); });
                    return new Mesh(nodes, edges, faces);
                };
                return Mesh;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/primitive/edge.ts": 
        /*!******************************************!*\
          !*** ./src/app/domain/primitive/edge.ts ***!
          \******************************************/
        /*! exports provided: Edge */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edge", function () { return Edge; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Edge = /** @class */ (function () {
                function Edge(nodeA, nodeB) {
                    this.nodeA = nodeA;
                    this.nodeB = nodeB;
                }
                Edge.prototype.containsNode = function (node) {
                    return this.nodeA === node || this.nodeB === node;
                };
                Edge.prototype.getOtherEnd = function (node) {
                    if (node === this.nodeA) {
                        return this.nodeB;
                    }
                    return this.nodeA;
                };
                Edge.prototype.connects = function (nodeA, nodeB) {
                    return (this.nodeA === nodeA && this.nodeB === nodeB)
                        || (this.nodeA === nodeB && this.nodeB === nodeA);
                };
                return Edge;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/primitive/node.ts": 
        /*!******************************************!*\
          !*** ./src/app/domain/primitive/node.ts ***!
          \******************************************/
        /*! exports provided: Node */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function () { return Node; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Node = /** @class */ (function () {
                function Node(posX, posY) {
                    this.posX = posX;
                    this.posY = posY;
                }
                Node.prototype.clone = function () {
                    return new Node(this.posX, this.posY);
                };
                return Node;
            }());
            /***/ 
        }),
        /***/ "./src/app/domain/scene.ts": 
        /*!*********************************!*\
          !*** ./src/app/domain/scene.ts ***!
          \*********************************/
        /*! exports provided: Scene */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function () { return Scene; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _primitive_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primitive/node */ "./src/app/domain/primitive/node.ts");
            /* harmony import */ var _primitive_edge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./primitive/edge */ "./src/app/domain/primitive/edge.ts");
            /* harmony import */ var _face_quadrangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./face/quadrangle */ "./src/app/domain/face/quadrangle.ts");
            /* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mesh */ "./src/app/domain/mesh.ts");
            var Scene = /** @class */ (function () {
                function Scene(meshes) {
                    var nodeA = new _primitive_node__WEBPACK_IMPORTED_MODULE_1__["Node"](10, 10);
                    var nodeB = new _primitive_node__WEBPACK_IMPORTED_MODULE_1__["Node"](990, 10);
                    var nodeC = new _primitive_node__WEBPACK_IMPORTED_MODULE_1__["Node"](990, 990);
                    var nodeD = new _primitive_node__WEBPACK_IMPORTED_MODULE_1__["Node"](10, 990);
                    var points = [nodeA, nodeB, nodeC, nodeD];
                    var edges = [
                        new _primitive_edge__WEBPACK_IMPORTED_MODULE_2__["Edge"](nodeA, nodeB),
                        new _primitive_edge__WEBPACK_IMPORTED_MODULE_2__["Edge"](nodeB, nodeC),
                        new _primitive_edge__WEBPACK_IMPORTED_MODULE_2__["Edge"](nodeC, nodeD),
                        new _primitive_edge__WEBPACK_IMPORTED_MODULE_2__["Edge"](nodeD, nodeA)
                    ];
                    var face = [new _face_quadrangle__WEBPACK_IMPORTED_MODULE_3__["Quadrangle"](points, edges)];
                    if (!meshes) {
                        this.meshes = [new _mesh__WEBPACK_IMPORTED_MODULE_4__["Mesh"](points, edges, face)];
                    }
                    else {
                        this.meshes = meshes;
                    }
                }
                Scene.prototype.subdivideMeshes = function () {
                    return new Scene(this.meshes.map(function (mesh) { return mesh.subdivide(); }));
                };
                return Scene;
            }());
            /***/ 
        }),
        /***/ "./src/app/graph/graph.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/graph/graph.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("app-graph {\n  display: flex;\n  flex-direction: column;\n}\n\n.graph {\n  border: solid greenyellow 1px;\n  flex: 1 auto;\n  display: flex;\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZodWcvbXlQcm9qZWN0cy9wcml2YXRlL3N2Zy1ncmFwaC9zcmMvYXBwL2dyYXBoL2dyYXBoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ncmFwaC9ncmFwaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoL2dyYXBoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWdyYXBoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmdyYXBoIHtcbiAgYm9yZGVyOiBzb2xpZCBncmVlbnllbGxvdyAxcHg7XG4gIGZsZXg6IDEgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMWVtO1xuXG4gIC8vc3ZnIHtcbiAgLy8gIGZsZXg6IDEgYXV0bztcbiAgLy8gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC8vfVxufVxuXG5cblxuIiwiYXBwLWdyYXBoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmdyYXBoIHtcbiAgYm9yZGVyOiBzb2xpZCBncmVlbnllbGxvdyAxcHg7XG4gIGZsZXg6IDEgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMWVtO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/graph/graph.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/graph/graph.component.ts ***!
          \******************************************/
        /*! exports provided: GraphComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function () { return GraphComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _domain_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/scene */ "./src/app/domain/scene.ts");
            /* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/settings.service */ "./src/app/settings/settings.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var GraphComponent_1;
            var GraphComponent = GraphComponent_1 = /** @class */ (function () {
                function GraphComponent(settings) {
                    var _this = this;
                    this.settings = settings;
                    this.baseScene = new _domain_scene__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
                    this.currentScene = settings.getSubdivisionObservable()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (subdivisions) { return GraphComponent_1.subdivideScene(_this.baseScene, subdivisions); }));
                }
                GraphComponent.subdivideScene = function (scene, divisions) {
                    if (divisions <= 0) {
                        return scene;
                    }
                    return this.subdivideScene(scene, divisions - 1).subdivideMeshes();
                };
                GraphComponent.prototype.ngOnInit = function () {
                };
                return GraphComponent;
            }());
            GraphComponent.ctorParameters = function () { return [
                { type: _settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }
            ]; };
            GraphComponent = GraphComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-graph',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./graph.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/graph/graph.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./graph.component.scss */ "./src/app/graph/graph.component.scss")).default]
                })
            ], GraphComponent);
            /***/ 
        }),
        /***/ "./src/app/settings/settings.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/settings/settings.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZodWcvbXlQcm9qZWN0cy9wcml2YXRlL3N2Zy1ncmFwaC9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/settings/settings.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/settings/settings.component.ts ***!
          \************************************************/
        /*! exports provided: SettingsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () { return SettingsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.service */ "./src/app/settings/settings.service.ts");
            var SettingsComponent = /** @class */ (function () {
                function SettingsComponent(settings) {
                    this.settings = settings;
                    this.initialValue = 0;
                }
                SettingsComponent.prototype.ngOnInit = function () {
                };
                return SettingsComponent;
            }());
            SettingsComponent.ctorParameters = function () { return [
                { type: _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], SettingsComponent.prototype, "numberOfSubdivisions", void 0);
            SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-settings',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")).default]
                })
            ], SettingsComponent);
            /***/ 
        }),
        /***/ "./src/app/settings/settings.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/settings/settings.service.ts ***!
          \**********************************************/
        /*! exports provided: SettingsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function () { return SettingsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var SettingsService = /** @class */ (function () {
                function SettingsService() {
                    this.subdivisions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
                    this.subdivisions.asObservable().subscribe(function (value) { return console.log('value:' + value); });
                }
                SettingsService.prototype.setSubdivisions = function (subdivisions) {
                    this.subdivisions.next(subdivisions);
                };
                SettingsService.prototype.getSubdivisionObservable = function () {
                    return this.subdivisions;
                };
                return SettingsService;
            }());
            SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SettingsService);
            /***/ 
        }),
        /***/ "./src/app/svgelements/line/line.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/svgelements/line/line.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Z2VsZW1lbnRzL2xpbmUvbGluZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/svgelements/line/line.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/svgelements/line/line.component.ts ***!
          \****************************************************/
        /*! exports provided: LineComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineComponent", function () { return LineComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LineComponent = /** @class */ (function () {
                function LineComponent() {
                }
                LineComponent.prototype.ngOnInit = function () {
                };
                return LineComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LineComponent.prototype, "fromX", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LineComponent.prototype, "fromY", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LineComponent.prototype, "toX", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LineComponent.prototype, "toY", void 0);
            LineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: '[app-line]',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./line.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/svgelements/line/line.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./line.component.scss */ "./src/app/svgelements/line/line.component.scss")).default]
                })
            ], LineComponent);
            /***/ 
        }),
        /***/ "./src/app/svgelements/point/point.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/svgelements/point/point.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Z2VsZW1lbnRzL3BvaW50L3BvaW50LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/svgelements/point/point.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/svgelements/point/point.component.ts ***!
          \******************************************************/
        /*! exports provided: PointComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointComponent", function () { return PointComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PointComponent = /** @class */ (function () {
                function PointComponent() {
                }
                PointComponent.prototype.ngOnInit = function () {
                };
                return PointComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PointComponent.prototype, "posX", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PointComponent.prototype, "posY", void 0);
            PointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: '[app-point]',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./point.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/svgelements/point/point.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./point.component.scss */ "./src/app/svgelements/point/point.component.scss")).default]
                })
            ], PointComponent);
            /***/ 
        }),
        /***/ "./src/app/svgelements/rect/rect.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/svgelements/rect/rect.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Z2VsZW1lbnRzL3JlY3QvcmVjdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/svgelements/rect/rect.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/svgelements/rect/rect.component.ts ***!
          \****************************************************/
        /*! exports provided: RectComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectComponent", function () { return RectComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RectComponent = /** @class */ (function () {
                function RectComponent() {
                }
                RectComponent.prototype.ngOnInit = function () {
                };
                return RectComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], RectComponent.prototype, "posX", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], RectComponent.prototype, "posY", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], RectComponent.prototype, "width", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], RectComponent.prototype, "height", void 0);
            RectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: '[app-rect]',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rect.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/svgelements/rect/rect.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rect.component.scss */ "./src/app/svgelements/rect/rect.component.scss")).default]
                })
            ], RectComponent);
            /***/ 
        }),
        /***/ "./src/app/svgelements/svgelements.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/svgelements/svgelements.module.ts ***!
          \***************************************************/
        /*! exports provided: SvgelementsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgelementsModule", function () { return SvgelementsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _rect_rect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rect/rect.component */ "./src/app/svgelements/rect/rect.component.ts");
            /* harmony import */ var _point_point_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point/point.component */ "./src/app/svgelements/point/point.component.ts");
            /* harmony import */ var _line_line_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line/line.component */ "./src/app/svgelements/line/line.component.ts");
            var SvgelementsModule = /** @class */ (function () {
                function SvgelementsModule() {
                }
                return SvgelementsModule;
            }());
            SvgelementsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_rect_rect_component__WEBPACK_IMPORTED_MODULE_3__["RectComponent"], _point_point_component__WEBPACK_IMPORTED_MODULE_4__["PointComponent"], _line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"]],
                    exports: [
                        _rect_rect_component__WEBPACK_IMPORTED_MODULE_3__["RectComponent"],
                        _point_point_component__WEBPACK_IMPORTED_MODULE_4__["PointComponent"],
                        _line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ]
                })
            ], SvgelementsModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/fhug/myProjects/private/svg-graph/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map