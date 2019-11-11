/*! msal v1.1.3 2019-10-14 */
'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Msal", [], factory);
	else if(typeof exports === 'object')
		exports["Msal"] = factory();
	else
		root["Msal"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.__extends = __extends;
exports.__assign = function () {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
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
exports.__rest = __rest;
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
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
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
exports.__awaiter = __awaiter;
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
exports.__generator = __generator;
function __exportStar(m, exports) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
exports.__exportStar = __exportStar;
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
exports.__values = __values;
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
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
exports.__spreadArrays = __spreadArrays;
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
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
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
exports.__asyncValues = __asyncValues;
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
exports.__makeTemplateObject = __makeTemplateObject;
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
exports.__importStar = __importStar;
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}
exports.__importDefault = __importDefault;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * Check if a string is empty
     *
     * @param str
     */
    StringUtils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var CryptoUtils = /** @class */ (function () {
    function CryptoUtils() {
    }
    /**
     * Creates a new random GUID - used to populate state?
     * @returns string (GUID)
     */
    CryptoUtils.createNewGuid = function () {
        /*
         * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
         * pseudo-random numbers.
         * The algorithm is as follows:
         *     Set the two most significant bits (bits 6 and 7) of the
         *        clock_seq_hi_and_reserved to zero and one, respectively.
         *     Set the four most significant bits (bits 12 through 15) of the
         *        time_hi_and_version field to the 4-bit version number from
         *        Section 4.1.3. Version4
         *     Set all the other bits to randomly (or pseudo-randomly) chosen
         *     values.
         * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
         * time-low               = 4hexOctet
         * time-mid               = 2hexOctet
         * time-high-and-version  = 2hexOctet
         * clock-seq-and-reserved = hexOctet:
         * clock-seq-low          = hexOctet
         * node                   = 6hexOctet
         * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
         * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
         * y values are 8, 9, A, B
         */
        var cryptoObj = window.crypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
            return CryptoUtils.decimalToHex(buffer[0]) + CryptoUtils.decimalToHex(buffer[1])
                + CryptoUtils.decimalToHex(buffer[2]) + CryptoUtils.decimalToHex(buffer[3])
                + "-" + CryptoUtils.decimalToHex(buffer[4]) + CryptoUtils.decimalToHex(buffer[5])
                + "-" + CryptoUtils.decimalToHex(buffer[6]) + CryptoUtils.decimalToHex(buffer[7])
                + "-" + CryptoUtils.decimalToHex(buffer[8]) + CryptoUtils.decimalToHex(buffer[9])
                + "-" + CryptoUtils.decimalToHex(buffer[10]) + CryptoUtils.decimalToHex(buffer[11])
                + CryptoUtils.decimalToHex(buffer[12]) + CryptoUtils.decimalToHex(buffer[13])
                + CryptoUtils.decimalToHex(buffer[14]) + CryptoUtils.decimalToHex(buffer[15]);
        }
        else {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === "x") {
                    guidResponse += hex[r];
                }
                else if (guidHolder[i] === "y") {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                }
                else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    /**
     * Decimal to Hex
     *
     * @param num
     */
    CryptoUtils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    // See: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_4_%E2%80%93_escaping_the_string_before_encoding_it
    /**
     * encoding string to base64 - platform specific check
     *
     * @param input
     */
    CryptoUtils.base64Encode = function (input) {
        return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode(Number("0x" + p1));
        }));
    };
    /**
     * Decodes a base64 encoded string.
     *
     * @param input
     */
    CryptoUtils.base64Decode = function (input) {
        var encodedString = input.replace(/-/g, "+").replace(/_/g, "/");
        switch (encodedString.length % 4) {
            case 0:
                break;
            case 2:
                encodedString += "==";
                break;
            case 3:
                encodedString += "=";
                break;
            default:
                throw new Error("Invalid base64 string");
        }
        return decodeURIComponent(atob(encodedString).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    };
    /**
     * deserialize a string
     *
     * @param query
     */
    CryptoUtils.deserialize = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    return CryptoUtils;
}());
exports.CryptoUtils = CryptoUtils;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(4);
var ScopeSet_1 = __webpack_require__(15);
var StringUtils_1 = __webpack_require__(1);
var CryptoUtils_1 = __webpack_require__(2);
/**
 * @hidden
 */
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    /**
     * generates the URL with QueryString Parameters
     * @param scopes
     */
    UrlUtils.createNavigateUrl = function (serverRequestParams) {
        var str = this.createNavigationUrlString(serverRequestParams);
        var authEndpoint = serverRequestParams.authorityInstance.AuthorizationEndpoint;
        // if the endpoint already has queryparams, lets add to it, otherwise add the first one
        if (authEndpoint.indexOf("?") < 0) {
            authEndpoint += "?";
        }
        else {
            authEndpoint += "&";
        }
        var requestUrl = "" + authEndpoint + str.join("&");
        return requestUrl;
    };
    /**
     * Generate the array of all QueryStringParams to be sent to the server
     * @param scopes
     */
    UrlUtils.createNavigationUrlString = function (serverRequestParams) {
        var scopes = serverRequestParams.scopes;
        if (scopes.indexOf(serverRequestParams.clientId) === -1) {
            scopes.push(serverRequestParams.clientId);
        }
        var str = [];
        str.push("response_type=" + serverRequestParams.responseType);
        this.translateclientIdUsedInScope(scopes, serverRequestParams.clientId);
        str.push("scope=" + encodeURIComponent(ScopeSet_1.ScopeSet.parseScope(scopes)));
        str.push("client_id=" + encodeURIComponent(serverRequestParams.clientId));
        str.push("redirect_uri=" + encodeURIComponent(serverRequestParams.redirectUri));
        str.push("state=" + encodeURIComponent(serverRequestParams.state));
        str.push("nonce=" + encodeURIComponent(serverRequestParams.nonce));
        str.push("client_info=1");
        str.push("x-client-SKU=" + serverRequestParams.xClientSku);
        str.push("x-client-Ver=" + serverRequestParams.xClientVer);
        if (serverRequestParams.promptValue) {
            str.push("prompt=" + encodeURIComponent(serverRequestParams.promptValue));
        }
        if (serverRequestParams.claimsValue) {
            str.push("claims=" + encodeURIComponent(serverRequestParams.claimsValue));
        }
        if (serverRequestParams.queryParameters) {
            str.push(serverRequestParams.queryParameters);
        }
        if (serverRequestParams.extraQueryParameters) {
            str.push(serverRequestParams.extraQueryParameters);
        }
        str.push("client-request-id=" + encodeURIComponent(serverRequestParams.correlationId));
        return str;
    };
    /**
     * append the required scopes: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes
     * @param scopes
     */
    UrlUtils.translateclientIdUsedInScope = function (scopes, clientId) {
        var clientIdIndex = scopes.indexOf(clientId);
        if (clientIdIndex >= 0) {
            scopes.splice(clientIdIndex, 1);
            if (scopes.indexOf("openid") === -1) {
                scopes.push("openid");
            }
            if (scopes.indexOf("profile") === -1) {
                scopes.push("profile");
            }
        }
    };
    /**
     * Returns current window URL as redirect uri
     */
    UrlUtils.getCurrentUri = function () {
        return window.location.href.split("?")[0].split("#")[0];
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    UrlUtils.replaceTenantPath = function (url, tenantId) {
        url = url.toLowerCase();
        var urlObject = this.GetUrlComponents(url);
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return this.constructAuthorityUriFromObject(urlObject, pathArray);
    };
    UrlUtils.constructAuthorityUriFromObject = function (urlObject, pathArray) {
        return this.CanonicalizeUri(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/"));
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    UrlUtils.GetUrlComponents = function (url) {
        if (!url) {
            throw "Url required";
        }
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var match = url.match(regEx);
        if (!match || match.length < 6) {
            throw "Valid url required";
        }
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        return urlComponents;
    };
    /**
     * Given a url or path, append a trailing slash if one doesnt exist
     *
     * @param url
     */
    UrlUtils.CanonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
        }
        if (url && !UrlUtils.endsWith(url, "/")) {
            url += "/";
        }
        return url;
    };
    /**
     * Checks to see if the url ends with the suffix
     * Required because we are compiling for es5 instead of es6
     * @param url
     * @param str
     */
    // TODO: Rename this, not clear what it is supposed to do
    UrlUtils.endsWith = function (url, suffix) {
        if (!url || !suffix) {
            return false;
        }
        return url.indexOf(suffix, url.length - suffix.length) !== -1;
    };
    /**
     * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
     * @param url
     * @param name
     */
    UrlUtils.urlRemoveQueryStringParameter = function (url, name) {
        if (StringUtils_1.StringUtils.isEmpty(url)) {
            return url;
        }
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        url = url.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        return url;
    };
    /**
     * @hidden
     * @ignore
     *
     * Returns the anchor part(#) of the URL
     */
    UrlUtils.getHashFromUrl = function (urlStringOrFragment) {
        var hashIndex1 = urlStringOrFragment.indexOf("#");
        var hashIndex2 = urlStringOrFragment.indexOf("#/");
        if (hashIndex2 > -1) {
            return urlStringOrFragment.substring(hashIndex2 + 2);
        }
        else if (hashIndex1 > -1) {
            return urlStringOrFragment.substring(hashIndex1 + 1);
        }
        return urlStringOrFragment;
    };
    /**
     * @hidden
     * Check if the url contains a hash with known properties
     * @ignore
     */
    UrlUtils.urlContainsHash = function (urlString) {
        var parameters = UrlUtils.deserializeHash(urlString);
        return (parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION) ||
            parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR) ||
            parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ACCESS_TOKEN) ||
            parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN));
    };
    /**
     * @hidden
     * Returns deserialized portion of URL hash
     * @ignore
     */
    UrlUtils.deserializeHash = function (urlFragment) {
        var hash = UrlUtils.getHashFromUrl(urlFragment);
        return CryptoUtils_1.CryptoUtils.deserialize(hash);
    };
    return UrlUtils;
}());
exports.UrlUtils = UrlUtils;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 * Constants
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "claims", {
        get: function () { return "claims"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientId", {
        get: function () { return "clientId"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "adalIdToken", {
        get: function () { return "adal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cachePrefix", {
        get: function () { return "msal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "no_account", {
        get: function () { return "NO_ACCOUNT"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "consumersUtid", {
        get: function () { return "9188040d-6c67-4c5b-b112-36a304b66dad"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "upn", {
        get: function () { return "upn"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_select_account", {
        get: function () { return "&prompt=select_account"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_none", {
        get: function () { return "&prompt=none"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt", {
        get: function () { return "prompt"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "response_mode_fragment", {
        get: function () { return "&response_mode=fragment"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "resourceDelimiter", {
        get: function () { return "|"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheDelimiter", {
        get: function () { return "."; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpWidth", {
        get: function () { return this._popUpWidth; },
        set: function (width) {
            this._popUpWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpHeight", {
        get: function () { return this._popUpHeight; },
        set: function (height) {
            this._popUpHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "login", {
        get: function () { return "LOGIN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewToken", {
        get: function () { return "RENEW_TOKEN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "unknown", {
        get: function () { return "UNKNOWN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "homeAccountIdentifier", {
        get: function () { return "homeAccountIdentifier"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "common", {
        get: function () { return "common"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "openidScope", {
        get: function () { return "openid"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "profileScope", {
        get: function () { return "profile"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypeRedirect", {
        get: function () { return "redirectInteraction"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypePopup", {
        get: function () { return "popupInteraction"; },
        enumerable: true,
        configurable: true
    });
    Constants._popUpWidth = 483;
    Constants._popUpHeight = 600;
    return Constants;
}());
exports.Constants = Constants;
/**
 * Status of the current token request
 */
var RequestStatus;
(function (RequestStatus) {
    RequestStatus["CANCELLED"] = "Cancelled";
    RequestStatus["COMPLETED"] = "Completed";
    RequestStatus["IN_PROGRESS"] = "InProgress";
})(RequestStatus = exports.RequestStatus || (exports.RequestStatus = {}));
;
/**
 * Keys in the hashParams
 */
var ServerHashParamKeys;
(function (ServerHashParamKeys) {
    ServerHashParamKeys["SCOPE"] = "scope";
    ServerHashParamKeys["ERROR"] = "error";
    ServerHashParamKeys["ERROR_DESCRIPTION"] = "error_description";
    ServerHashParamKeys["ACCESS_TOKEN"] = "access_token";
    ServerHashParamKeys["ID_TOKEN"] = "id_token";
    ServerHashParamKeys["EXPIRES_IN"] = "expires_in";
    ServerHashParamKeys["SESSION_STATE"] = "session_state";
    ServerHashParamKeys["CLIENT_INFO"] = "client_info";
})(ServerHashParamKeys = exports.ServerHashParamKeys || (exports.ServerHashParamKeys = {}));
;
/**
 * @hidden
 * CacheKeys for MSAL
 */
var TemporaryCacheKeys;
(function (TemporaryCacheKeys) {
    TemporaryCacheKeys["AUTHORITY"] = "authority";
    TemporaryCacheKeys["ACQUIRE_TOKEN_ACCOUNT"] = "acquireTokenAccount";
    TemporaryCacheKeys["SESSION_STATE"] = "session.state";
    TemporaryCacheKeys["STATE_LOGIN"] = "state.login";
    TemporaryCacheKeys["STATE_ACQ_TOKEN"] = "state.acquireToken";
    TemporaryCacheKeys["STATE_RENEW"] = "state.renew";
    TemporaryCacheKeys["NONCE_IDTOKEN"] = "nonce.idtoken";
    TemporaryCacheKeys["LOGIN_REQUEST"] = "login.request";
    TemporaryCacheKeys["RENEW_STATUS"] = "token.renew.status";
    TemporaryCacheKeys["URL_HASH"] = "urlHash";
    TemporaryCacheKeys["ANGULAR_LOGIN_REQUEST"] = "angular.login.request";
})(TemporaryCacheKeys = exports.TemporaryCacheKeys || (exports.TemporaryCacheKeys = {}));
var PersistentCacheKeys;
(function (PersistentCacheKeys) {
    PersistentCacheKeys["IDTOKEN"] = "idtoken";
    PersistentCacheKeys["CLIENT_INFO"] = "client.info";
})(PersistentCacheKeys = exports.PersistentCacheKeys || (exports.PersistentCacheKeys = {}));
var ErrorCacheKeys;
(function (ErrorCacheKeys) {
    ErrorCacheKeys["LOGIN_ERROR"] = "login.error";
    ErrorCacheKeys["ERROR"] = "error";
    ErrorCacheKeys["ERROR_DESC"] = "error.description";
})(ErrorCacheKeys = exports.ErrorCacheKeys || (exports.ErrorCacheKeys = {}));
exports.INTERACTION_STATUS = "interaction.status";
exports.AADTrustedHostList = {
    "login.windows.net": "login.windows.net",
    "login.chinacloudapi.cn": "login.chinacloudapi.cn",
    "login.cloudgovapi.us": "login.cloudgovapi.us",
    "login.microsoftonline.com": "login.microsoftonline.com",
    "login.microsoftonline.de": "login.microsoftonline.de",
    "login.microsoftonline.us": "login.microsoftonline.us"
};
/**
 * @hidden
 * SSO Types - generated to populate hints
 */
var SSOTypes;
(function (SSOTypes) {
    SSOTypes["ACCOUNT"] = "account";
    SSOTypes["SID"] = "sid";
    SSOTypes["LOGIN_HINT"] = "login_hint";
    SSOTypes["ID_TOKEN"] = "id_token";
    SSOTypes["DOMAIN_HINT"] = "domain_hint";
    SSOTypes["ORGANIZATIONS"] = "organizations";
    SSOTypes["CONSUMERS"] = "consumers";
    SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
    SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
    SSOTypes["LOGIN_REQ"] = "login_req";
    SSOTypes["DOMAIN_REQ"] = "domain_req";
})(SSOTypes = exports.SSOTypes || (exports.SSOTypes = {}));
;
/**
 * @hidden
 */
exports.BlacklistedEQParams = [
    SSOTypes.SID,
    SSOTypes.LOGIN_HINT
];
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 * @hidden
 */
exports.PromptState = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};
/**
 * MSAL JS Library Version
 */
function libraryVersion() {
    return "1.1.3";
}
exports.libraryVersion = libraryVersion;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientConfigurationErrorMessage = {
    configurationNotSet: {
        code: "no_config_set",
        desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
    },
    storageNotSupported: {
        code: "storage_not_supported",
        desc: "The value for the cacheLocation is not supported."
    },
    noRedirectCallbacksSet: {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    invalidCallbackObject: {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    scopesRequired: {
        code: "scopes_required",
        desc: "Scopes are required to obtain an access token."
    },
    emptyScopes: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as empty array."
    },
    nonArrayScopes: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientScope: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
    },
    invalidAuthorityType: {
        code: "invalid_authority_type",
        desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https."
    },
    authorityUriInvalidPath: {
        code: "authority_uri_invalid_path",
        desc: "Given authority URI is invalid."
    },
    unsupportedAuthorityValidation: {
        code: "unsupported_authority_validation",
        desc: "The authority validation is not supported for this authority type."
    },
    b2cAuthorityUriInvalidPath: {
        code: "b2c_authority_uri_invalid_path",
        desc: "The given URI for the B2C authority is invalid."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    emptyRequestError: {
        code: "empty_request_error",
        desc: "Request object is required."
    },
    telemetryConfigError: {
        code: "telemetry_config_error",
        desc: "Telemetry config is not configured with required values"
    }
};
/**
 * Error thrown when there is an error in configuration of the .js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    ClientConfigurationError.createNoSetConfigurationError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.configurationNotSet.code, "" + exports.ClientConfigurationErrorMessage.configurationNotSet.desc);
    };
    ClientConfigurationError.createStorageNotSupportedError = function (givenCacheLocation) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.storageNotSupported.code, exports.ClientConfigurationErrorMessage.storageNotSupported.desc + " Given location: " + givenCacheLocation);
    };
    ClientConfigurationError.createRedirectCallbacksNotSetError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code, exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc);
    };
    ClientConfigurationError.createInvalidCallbackObjectError = function (callbackObject) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
    };
    ClientConfigurationError.createEmptyScopesArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.emptyScopes.code, exports.ClientConfigurationErrorMessage.emptyScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesNonArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.nonArrayScopes.code, exports.ClientConfigurationErrorMessage.nonArrayScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createClientIdSingleScopeError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.clientScope.code, exports.ClientConfigurationErrorMessage.clientScope.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesRequiredError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.scopesRequired.code, exports.ClientConfigurationErrorMessage.scopesRequired.desc + " Given value: " + scopesValue);
    };
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidPrompt.code, exports.ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    ClientConfigurationError.createEmptyRequestError = function () {
        var _a = exports.ClientConfigurationErrorMessage.emptyRequestError, code = _a.code, desc = _a.desc;
        return new ClientConfigurationError(code, desc);
    };
    ClientConfigurationError.createTelemetryConfigError = function (config) {
        var _a = exports.ClientConfigurationErrorMessage.telemetryConfigError, code = _a.code, desc = _a.desc;
        var requiredKeys = {
            applicationName: "string",
            applicationVersion: "string",
            telemetryEmitter: "function"
        };
        var missingKeys = Object.keys(requiredKeys)
            .reduce(function (keys, key) {
            return config[key] ? keys : keys.concat([key + " (" + requiredKeys[key] + ")"]);
        }, []);
        return new ClientConfigurationError(code, desc + " mising values: " + missingKeys.join(","));
    };
    return ClientConfigurationError;
}(ClientAuthError_1.ClientAuthError));
exports.ClientConfigurationError = ClientConfigurationError;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
var StringUtils_1 = __webpack_require__(1);
exports.ClientAuthErrorMessage = {
    multipleMatchingTokens: {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements like authority."
    },
    multipleCacheAuthorities: {
        code: "multiple_authorities",
        desc: "Multiple authorities found in the cache. Pass authority in the API overload."
    },
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    popUpWindowError: {
        code: "popup_window_error",
        desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
    },
    tokenRenewalError: {
        code: "token_renewal_error",
        desc: "Token renewal operation failed due to timeout."
    },
    invalidIdToken: {
        code: "invalid_id_token",
        desc: "Invalid ID token format."
    },
    invalidStateError: {
        code: "invalid_state_error",
        desc: "Invalid state."
    },
    nonceMismatchError: {
        code: "nonce_mismatch_error",
        desc: "Nonce is not matching, Nonce received: "
    },
    loginProgressError: {
        code: "login_progress_error",
        desc: "Login_In_Progress: Error during login call - login is already in progress."
    },
    acquireTokenProgressError: {
        code: "acquiretoken_progress_error",
        desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
    },
    userCancelledError: {
        code: "user_cancelled",
        desc: "User cancelled the flow."
    },
    callbackError: {
        code: "callback_error",
        desc: "Error occurred in token received callback function."
    },
    userLoginRequiredError: {
        code: "user_login_error",
        desc: "User login is required."
    },
    userDoesNotExistError: {
        code: "user_non_existent",
        desc: "User object does not exist. Please call a login API."
    },
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoNotPopulatedError: {
        code: "client_info_not_populated_error",
        desc: "The service did not populate client_info in the response, Please verify with the service team"
    },
    nullOrEmptyIdToken: {
        code: "null_or_empty_id_token",
        desc: "The idToken is null or empty. Please review the trace to determine the root cause."
    },
    idTokenNotParsed: {
        code: "id_token_parsing_error",
        desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
    },
    tokenEncodingError: {
        code: "token_encoding_error",
        desc: "The token to be decoded is not encoded correctly."
    },
    invalidInteractionType: {
        code: "invalid_interaction_type",
        desc: "The interaction type passed to the handler was incorrect or unknown"
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    ClientAuthError.createEndpointResolutionError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.endpointResolutionError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.endpointResolutionError.code, errorMessage);
    };
    ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    ClientAuthError.createMultipleAuthoritiesInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleCacheAuthorities.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleCacheAuthorities.desc + ".");
    };
    ClientAuthError.createPopupWindowError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.popUpWindowError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.popUpWindowError.code, errorMessage);
    };
    ClientAuthError.createTokenRenewalTimeoutError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenRenewalError.code, exports.ClientAuthErrorMessage.tokenRenewalError.desc);
    };
    ClientAuthError.createInvalidIdTokenError = function (idToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidIdToken.code, exports.ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + idToken);
    };
    // TODO: Is this not a security flaw to send the user the state expected??
    ClientAuthError.createInvalidStateError = function (invalidState, actualState) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidStateError.code, exports.ClientAuthErrorMessage.invalidStateError.desc + " " + invalidState + ", state expected : " + actualState + ".");
    };
    // TODO: Is this not a security flaw to send the user the Nonce expected??
    ClientAuthError.createNonceMismatchError = function (invalidNonce, actualNonce) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nonceMismatchError.code, exports.ClientAuthErrorMessage.nonceMismatchError.desc + " " + invalidNonce + ", nonce expected : " + actualNonce + ".");
    };
    ClientAuthError.createLoginInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.loginProgressError.code, exports.ClientAuthErrorMessage.loginProgressError.desc);
    };
    ClientAuthError.createAcquireTokenInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.acquireTokenProgressError.code, exports.ClientAuthErrorMessage.acquireTokenProgressError.desc);
    };
    ClientAuthError.createUserCancelledError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userCancelledError.code, exports.ClientAuthErrorMessage.userCancelledError.desc);
    };
    ClientAuthError.createErrorInCallbackFunction = function (errorDesc) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.callbackError.code, exports.ClientAuthErrorMessage.callbackError.desc + " " + errorDesc + ".");
    };
    ClientAuthError.createUserLoginRequiredError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userLoginRequiredError.code, exports.ClientAuthErrorMessage.userLoginRequiredError.desc);
    };
    ClientAuthError.createUserDoesNotExistError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userDoesNotExistError.code, exports.ClientAuthErrorMessage.userDoesNotExistError.desc);
    };
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoDecodingError.code, exports.ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createClientInfoNotPopulatedError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.code, exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code, exports.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
    };
    ClientAuthError.createIdTokenParsingError = function (caughtParsingError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.idTokenNotParsed.code, exports.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + caughtParsingError);
    };
    ClientAuthError.createTokenEncodingError = function (incorrectlyEncodedToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenEncodingError.code, exports.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + incorrectlyEncodedToken);
    };
    ClientAuthError.createInvalidInteractionTypeError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidInteractionType.code, exports.ClientAuthErrorMessage.invalidInteractionType.desc);
    };
    return ClientAuthError;
}(AuthError_1.AuthError));
exports.ClientAuthError = ClientAuthError;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
exports.AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    },
    noWindowObjectError: {
        code: "no_window_object",
        desc: "No window object available. Details:"
    }
};
/**
 * General error class thrown by the MSAL.js library.
 */
var AuthError = /** @class */ (function (_super) {
    tslib_1.__extends(AuthError, _super);
    function AuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorMessage) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode;
        _this.errorMessage = errorMessage;
        _this.name = "AuthError";
        return _this;
    }
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(exports.AuthErrorMessage.unexpectedError.code, exports.AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    AuthError.createNoWindowObjectError = function (errDesc) {
        return new AuthError(exports.AuthErrorMessage.noWindowObjectError.code, exports.AuthErrorMessage.noWindowObjectError.desc + " " + errDesc);
    };
    return AuthError;
}(Error));
exports.AuthError = AuthError;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ClientConfigurationError_1 = __webpack_require__(5);
var XHRClient_1 = __webpack_require__(20);
var UrlUtils_1 = __webpack_require__(3);
/**
 * @hidden
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
})(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
/**
 * @hidden
 */
var Authority = /** @class */ (function () {
    function Authority(authority, validateAuthority) {
        this.IsValidationEnabled = validateAuthority;
        this.CanonicalAuthority = authority;
        this.validateAsUri();
    }
    Object.defineProperty(Authority.prototype, "Tenant", {
        get: function () {
            return this.CanonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.Issuer.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Authority.prototype.validateResolved = function () {
        if (!this.tenantDiscoveryResponse) {
            throw "Please call ResolveEndpointsAsync first";
        }
    };
    Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this.canonicalAuthority;
        },
        set: function (url) {
            this.canonicalAuthority = UrlUtils_1.UrlUtils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
        get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
                this.canonicalAuthorityUrlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(this.CanonicalAuthority);
            }
            return this.canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
        /**
         * // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
         */
        get: function () {
            return this.CanonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Given a string, validate that it is of the form https://domain/path
     */
    Authority.prototype.validateAsUri = function () {
        var components;
        try {
            components = this.CanonicalAuthorityUrlComponents;
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInsecure;
        }
        if (!components.PathSegments || components.PathSegments.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInvalidPath;
        }
    };
    /**
     * Calls the OIDC endpoint and returns the response
     */
    Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint) {
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(openIdConfigurationEndpoint, "GET", /* enableCaching: */ true)
            .then(function (response) {
            return {
                AuthorizationEndpoint: response.authorization_endpoint,
                EndSessionEndpoint: response.end_session_endpoint,
                Issuer: response.issuer
            };
        });
    };
    /**
     * Returns a promise.
     * Checks to see if the authority is in the cache
     * Discover endpoints via openid-configuration
     * If successful, caches the endpoint for later use in OIDC
     */
    Authority.prototype.resolveEndpointsAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var openIdConfigurationEndpointResponse, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.GetOpenIdConfigurationEndpointAsync()];
                    case 1:
                        openIdConfigurationEndpointResponse = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.DiscoverEndpoints(openIdConfigurationEndpointResponse)];
                    case 2:
                        _a.tenantDiscoveryResponse = _b.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return Authority;
}());
exports.Authority = Authority;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_NAME_PREFIX = "msal.";
exports.EVENT_NAME_KEY = "event_name";
exports.START_TIME_KEY = "start_time";
exports.ELAPSED_TIME_KEY = "elapsed_time";
exports.TELEMETRY_BLOB_EVENT_NAMES = {
    MsalCorrelationIdConstStrKey: "Microsoft.MSAL.correlation_id",
    ApiTelemIdConstStrKey: "msal.api_telem_id",
    ApiIdConstStrKey: "msal.api_id",
    BrokerAppConstStrKey: "Microsoft_MSAL_broker_app",
    CacheEventCountConstStrKey: "Microsoft_MSAL_cache_event_count",
    HttpEventCountTelemetryBatchKey: "Microsoft_MSAL_http_event_count",
    IdpConstStrKey: "Microsoft_MSAL_idp",
    IsSilentTelemetryBatchKey: "",
    IsSuccessfulConstStrKey: "Microsoft_MSAL_is_successful",
    ResponseTimeConstStrKey: "Microsoft_MSAL_response_time",
    TenantIdConstStrKey: "Microsoft_MSAL_tenant_id",
    UiEventCountTelemetryBatchKey: "Microsoft_MSAL_ui_event_count"
};
// This is used to replace the real tenant in telemetry info
exports.TENANT_PLACEHOLDER = "<tenant>";


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClientAuthError_1 = __webpack_require__(6);
var UrlUtils_1 = __webpack_require__(3);
var StringUtils_1 = __webpack_require__(1);
var AuthError_1 = __webpack_require__(7);
var WindowUtils = /** @class */ (function () {
    function WindowUtils() {
    }
    /**
     * @hidden
     * Checks if the current page is running in an iframe.
     * @ignore
     */
    WindowUtils.isInIframe = function () {
        return window.parent !== window;
    };
    /**
     * @hidden
     * Checks if the current page is running in an iframe.
     * @ignore
     */
    WindowUtils.isWindowOnTop = function () {
        return window.top === window;
    };
    /**
     * @hidden
     * Check if the current page is running in a popup.
     * @ignore
     */
    WindowUtils.isInPopup = function () {
        return !!(window.opener && window.opener !== window);
    };
    /**
     * @hidden
     * Monitors a window until it loads a url with a hash
     * @ignore
     */
    WindowUtils.monitorWindowForHash = function (contentWindow, timeout) {
        return new Promise(function (resolve, reject) {
            var maxTicks = timeout / WindowUtils.POLLING_INTERVAL_MS;
            var ticks = 0;
            var intervalId = setInterval(function () {
                if (contentWindow.closed) {
                    clearInterval(intervalId);
                    resolve();
                }
                var href;
                try {
                    /*
                     * Will throw if cross origin,
                     * which should be caught and ignored
                     * since we need the interval to keep running while on STS UI.
                     */
                    href = contentWindow.location.href;
                }
                catch (e) { }
                // Don't process blank pages or cross domain
                if (!href || href === "about:blank") {
                    return;
                }
                // Only run clock when we are on same domain
                ticks++;
                if (UrlUtils_1.UrlUtils.urlContainsHash(href)) {
                    clearInterval(intervalId);
                    resolve(contentWindow.location.hash);
                }
                else if (ticks > maxTicks) {
                    clearInterval(intervalId);
                    reject(ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError()); // better error?
                }
            }, WindowUtils.POLLING_INTERVAL_MS);
        });
    };
    /**
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    WindowUtils.loadFrame = function (urlNavigate, frameName, timeoutMs, logger) {
        /*
         * This trick overcomes iframe navigation in IE
         * IE does not load the page consistently in iframe
         */
        logger.info("LoadFrame: " + frameName);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var frameHandle = WindowUtils.addHiddenIFrame(frameName, logger);
                if (!frameHandle) {
                    reject("Unable to load iframe with name: " + frameName);
                    return;
                }
                if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                    frameHandle.src = urlNavigate;
                    logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
                }
                resolve(frameHandle);
            }, timeoutMs);
        });
    };
    /**
     * @hidden
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     */
    WindowUtils.addHiddenIFrame = function (iframeId, logger) {
        if (typeof iframeId === "undefined") {
            return null;
        }
        logger.info("Add msal frame to document:" + iframeId);
        var adalFrame = document.getElementById(iframeId);
        if (!adalFrame) {
            if (document.createElement &&
                document.documentElement &&
                (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                var ifr = document.createElement("iframe");
                ifr.setAttribute("id", iframeId);
                ifr.style.visibility = "hidden";
                ifr.style.position = "absolute";
                ifr.style.width = ifr.style.height = "0";
                ifr.style.border = "0";
                ifr.setAttribute("sandbox", "allow-same-origin");
                adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }
        return adalFrame;
    };
    /**
     * @hidden
     * Find and return the iframe element with the given hash
     * @ignore
     */
    WindowUtils.getIframeWithHash = function (hash) {
        return Array.from(document.getElementsByTagName("iframe")).find(function (iframe) {
            try {
                return iframe.contentWindow.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        });
    };
    /**
     * @hidden
     * Returns an array of all the popups opened by MSAL
     * @ignore
     */
    WindowUtils.getPopups = function () {
        if (!window.openedWindows) {
            window.openedWindows = [];
        }
        return window.openedWindows;
    };
    /**
     * @hidden
     * Find and return the popup with the given hash
     * @ignore
     */
    WindowUtils.getPopUpWithHash = function (hash) {
        return WindowUtils.getPopups().find(function (popup) {
            try {
                return popup.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        });
    };
    /**
     * @hidden
     * Add the popup to the known list of popups
     * @ignore
     */
    WindowUtils.trackPopup = function (popup) {
        WindowUtils.getPopups().push(popup);
    };
    /**
     * @hidden
     * Close all popups
     * @ignore
     */
    WindowUtils.closePopups = function () {
        WindowUtils.getPopups().forEach(function (popup) { return popup.close(); });
    };
    /**
     * @hidden
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
     */
    WindowUtils.navigateWindow = function (urlNavigate, logger, popupWindow) {
        // Navigate if valid URL
        if (urlNavigate && !StringUtils_1.StringUtils.isEmpty(urlNavigate)) {
            var navigateWindow = popupWindow ? popupWindow : window;
            var logMessage = popupWindow ? "Navigated Popup window to:" + urlNavigate : "Navigate to:" + urlNavigate;
            logger.infoPii(logMessage);
            navigateWindow.location.replace(urlNavigate);
        }
        else {
            logger.info("Navigate url is empty");
            throw AuthError_1.AuthError.createUnexpectedError("Navigate url is empty");
        }
    };
    /**
     * @hidden
     * Interval in milliseconds that we poll a window
     * @ignore
     */
    WindowUtils.POLLING_INTERVAL_MS = 50;
    return WindowUtils;
}());
exports.WindowUtils = WindowUtils;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = __webpack_require__(1);
var Constants_1 = __webpack_require__(4);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(localCallback, options) {
        if (options === void 0) { options = {}; }
        /**
         * @hidden
         */
        this.level = LogLevel.Info;
        var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
        this.localCallback = localCallback;
        this.correlationId = correlationId;
        this.level = level;
        this.piiLoggingEnabled = piiLoggingEnabled;
    }
    /**
     * @hidden
     */
    Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
        if ((logLevel > this.level) || (!this.piiLoggingEnabled && containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var log;
        if (!StringUtils_1.StringUtils.isEmpty(this.correlationId)) {
            log = timestamp + ":" + this.correlationId + "-" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        else {
            log = timestamp + ":" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        this.executeCallback(logLevel, log, containsPii);
    };
    /**
     * @hidden
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * @hidden
     */
    Logger.prototype.error = function (message) {
        this.logMessage(LogLevel.Error, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.errorPii = function (message) {
        this.logMessage(LogLevel.Error, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.warning = function (message) {
        this.logMessage(LogLevel.Warning, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.warningPii = function (message) {
        this.logMessage(LogLevel.Warning, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.info = function (message) {
        this.logMessage(LogLevel.Info, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.infoPii = function (message) {
        this.logMessage(LogLevel.Info, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbose = function (message) {
        this.logMessage(LogLevel.Verbose, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbosePii = function (message) {
        this.logMessage(LogLevel.Verbose, message, true);
    };
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled;
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
exports.ServerErrorMessage = {
    serverUnavailable: {
        code: "server_unavailable",
        desc: "Server is temporarily unavailable."
    },
    unknownServerError: {
        code: "unknown_server_error"
    },
};
/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    tslib_1.__extends(ServerError, _super);
    function ServerError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ServerError";
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    ServerError.createServerUnavailableError = function () {
        return new ServerError(exports.ServerErrorMessage.serverUnavailable.code, exports.ServerErrorMessage.serverUnavailable.desc);
    };
    ServerError.createUnknownServerError = function (errorDesc) {
        return new ServerError(exports.ServerErrorMessage.unknownServerError.code, errorDesc);
    };
    return ServerError;
}(AuthError_1.AuthError));
exports.ServerError = ServerError;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var WindowUtils_1 = __webpack_require__(10);
var MessageDispatcher_1 = __webpack_require__(26);
// type of the message
var MessageType;
(function (MessageType) {
    MessageType["REDIRECT_REQUEST"] = "REDIRECT_REQUEST";
    MessageType["HASH"] = "HASH";
    MessageType["URL_TOP_FRAME"] = "URL_TOP_FRAME";
    MessageType["URL_NAVIGATE"] = "URL_NAVIGATE";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
;
// helps differentiate topframe and iframe context
var WindowType;
(function (WindowType) {
    WindowType[WindowType["TOP_FRAME"] = 0] = "TOP_FRAME";
    WindowType[WindowType["IFRAME"] = 1] = "IFRAME";
})(WindowType = exports.WindowType || (exports.WindowType = {}));
;
var MessageHelper = /** @class */ (function () {
    function MessageHelper() {
    }
    /**
     * returns the current window type: Top Frame app or Iframed app
     */
    MessageHelper.currentWindow = function () {
        if (WindowUtils_1.WindowUtils.isWindowOnTop()) {
            return WindowType.TOP_FRAME;
        }
        else if (WindowUtils_1.WindowUtils.isInIframe()) {
            return WindowType.IFRAME;
        }
        else
            return null;
    };
    /**
     * Builds a message in the format: MESSAGE_SCHEMA
     *
     * @param messageType
     * @param contentType
     * @param messageData
     */
    MessageHelper.buildMessage = function (messageType, messageData) {
        var message = {
            type: messageType,
            data: messageData
        };
        return message;
    };
    /**
     * utility to handle redirect(302) from the service on behalf of the iframed application
     *
     * @param messageCache
     * @param urlTopFrame
     * @param urlHash
     * @param logger
     */
    MessageHelper.handleTopFrameRedirect = function (messageCache, urlTopFrame, urlHash, logger) {
        // write the hash to the cache of the redirect URI, clear the cache(and hence the state) for the Top Frame delegation indication
        messageCache.write(MessageType.HASH, urlHash);
        messageCache.erase(MessageType.URL_TOP_FRAME);
        // navigate to the saved URL
        WindowUtils_1.WindowUtils.navigateWindow(urlTopFrame, logger);
    };
    /**
     * Handle the redirect delegation at the topframe on behalf of the embedded (iframed) application
     *
     * @param messageCache
     * @param urlNavigate
     */
    MessageHelper.redirectDelegationRequest = function (messageCache, urlNavigate, topFrameOrigin) {
        // save the URL to navigate in the cache and send a request to the topframe
        messageCache.write(MessageType.URL_NAVIGATE, urlNavigate);
        // dispatch the message to the top window to start redirect flow by delegation
        var targetWindow = window.top;
        var message = MessageHelper.buildMessage(MessageType.REDIRECT_REQUEST);
        MessageDispatcher_1.MessageDispatcher.dispatchMessage(targetWindow, message, topFrameOrigin);
    };
    return MessageHelper;
}());
exports.MessageHelper = MessageHelper;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AccessTokenKey_1 = __webpack_require__(29);
var AccessTokenValue_1 = __webpack_require__(30);
var ServerRequestParameters_1 = __webpack_require__(31);
var ClientInfo_1 = __webpack_require__(32);
var IdToken_1 = __webpack_require__(33);
var AuthCache_1 = __webpack_require__(34);
var Account_1 = __webpack_require__(18);
var ScopeSet_1 = __webpack_require__(15);
var StringUtils_1 = __webpack_require__(1);
var WindowUtils_1 = __webpack_require__(10);
var TokenUtils_1 = __webpack_require__(17);
var TimeUtils_1 = __webpack_require__(37);
var UrlUtils_1 = __webpack_require__(3);
var ErrorUtils_1 = __webpack_require__(38);
var ResponseUtils_1 = __webpack_require__(39);
var AuthorityFactory_1 = __webpack_require__(40);
var Configuration_1 = __webpack_require__(22);
var ClientConfigurationError_1 = __webpack_require__(5);
var AuthError_1 = __webpack_require__(7);
var ClientAuthError_1 = __webpack_require__(6);
var ServerError_1 = __webpack_require__(12);
var InteractionRequiredAuthError_1 = __webpack_require__(23);
var AuthResponse_1 = __webpack_require__(24);
var TelemetryManager_1 = tslib_1.__importDefault(__webpack_require__(41));
var MessageHelper_1 = __webpack_require__(13);
var MessageCache_1 = __webpack_require__(44);
var MessageListener_1 = __webpack_require__(45);
var Constants_1 = __webpack_require__(4);
// default authority
var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
/**
 * @hidden
 * @ignore
 * response_type from OpenIDConnect
 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
 * Since we support only implicit flow in this library, we restrict the response_type support to only 'token' and 'id_token'
 *
 */
var ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};
/**
 * UserAgentApplication class
 *
 * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
 */
var UserAgentApplication = /** @class */ (function () {
    /**
     * @constructor
     * Constructor for the UserAgentApplication used to instantiate the UserAgentApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application.
     * You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;.
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     *
     * In Azure B2C, authority is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/&lt;policyName&gt;/
     *
     * @param {@link (Configuration:type)} configuration object for the MSAL UserAgentApplication instance
     */
    function UserAgentApplication(configuration) {
        // callbacks for token/error
        this.authResponseCallback = null;
        this.tokenReceivedCallback = null;
        this.errorReceivedCallback = null;
        this.iframeRedirectCallback = null;
        // Set the Configuration
        this.config = Configuration_1.buildConfiguration(configuration);
        // Set the callback boolean
        this.redirectCallbacksSet = false;
        this.logger = this.config.system.logger;
        this.clientId = this.config.auth.clientId;
        this.inCookie = this.config.cache.storeAuthStateInCookie;
        this.telemetryManager = this.getTelemetryManagerFromConfig(this.config.system.telemetry, this.clientId);
        // if no authority is passed, set the default: "https://login.microsoftonline.com/common"
        this.authority = this.config.auth.authority || DEFAULT_AUTHORITY;
        // cache keys msal - typescript throws an error if any value other than "localStorage" or "sessionStorage" is passed
        this.cacheStorage = new AuthCache_1.AuthCache(this.clientId, this.config.cache.cacheLocation, this.inCookie);
        // initialize the message interface
        this.messageCache = new MessageCache_1.MessageCache(this.cacheStorage);
        this.messageListener = new MessageListener_1.MessageListener(this.messageCache, this.logger, this.config.broker.embeddedFrameOrigin);
        // Initialize window handling code
        window.activeRenewals = {};
        window.renewStates = [];
        window.callbackMappedToRenewStates = {};
        window.promiseMappedToRenewStates = {};
        window.msal = this;
        var urlHash = window.location.hash;
        var urlContainsHash = UrlUtils_1.UrlUtils.urlContainsHash(urlHash);
        // read the hash stored through the topframe in redirect by delegation flow
        var urlTopFrame = this.messageCache.read(MessageHelper_1.MessageType.URL_TOP_FRAME);
        var cachedUrlHash = this.messageCache.read(MessageHelper_1.MessageType.HASH);
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular && urlContainsHash && !WindowUtils_1.WindowUtils.isInIframe() && !WindowUtils_1.WindowUtils.isInPopup()) {
            // REDIRECT_IFRAMES: if we are in topframe, store the hash in the cache
            if (urlTopFrame) {
                MessageHelper_1.MessageHelper.handleTopFrameRedirect(this.messageCache, urlTopFrame, urlHash, this.logger);
            }
            else {
                this.handleAuthenticationResponse(urlHash);
            }
        }
        // REDIRECT_IFRAMES: Handle the auth response on reload if the topframe redirected on the iframed app's behalf and saved the hash
        else if (WindowUtils_1.WindowUtils.isInIframe() && cachedUrlHash) {
            this.handleAuthenticationResponse(cachedUrlHash);
        }
    }
    Object.defineProperty(UserAgentApplication.prototype, "authority", {
        /**
         * Method to manage the authority URL.
         *
         * @returns {string} authority
         */
        get: function () {
            return this.authorityInstance.CanonicalAuthority;
        },
        /**
         * setter for the authority URL
         * @param {string} authority
         */
        // If the developer passes an authority, create an instance
        set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.config.auth.validateAuthority);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the current authority instance from the MSAL configuration object
     *
     * @returns {@link Authority} authority instance
     */
    UserAgentApplication.prototype.getAuthorityInstance = function () {
        return this.authorityInstance;
    };
    UserAgentApplication.prototype.handleRedirectCallback = function (authOrTokenCallback, errorReceivedCallback) {
        if (!authOrTokenCallback) {
            this.redirectCallbacksSet = false;
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError(authOrTokenCallback));
        }
        // Set callbacks
        if (errorReceivedCallback) {
            this.tokenReceivedCallback = authOrTokenCallback;
            this.errorReceivedCallback = errorReceivedCallback;
            this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).");
        }
        else {
            this.authResponseCallback = authOrTokenCallback;
        }
        this.redirectCallbacksSet = true;
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular) {
            var cachedHash = this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.URL_HASH);
            if (cachedHash) {
                this.processCallBack(cachedHash, null);
            }
        }
    };
    UserAgentApplication.prototype.authResponseHandler = function (interactionType, response, resolve) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.tokenReceivedCallback(response);
            }
            else if (this.authResponseCallback) {
                this.authResponseCallback(null, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            resolve(response);
        }
        else {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError());
        }
    };
    UserAgentApplication.prototype.authErrorHandler = function (interactionType, authErr, response, reject) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.errorReceivedCallback(authErr, response.accountState);
            }
            else {
                this.authResponseCallback(authErr, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            reject(authErr);
        }
        else {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError());
        }
    };
    /**
     * Call back registered by the top frame to notify the user for iframed application redirect requests
     * @param iframeRedirectCallback
     */
    UserAgentApplication.prototype.handleRedirectInIframes = function (iframeRedirectCallback) {
        if (iframeRedirectCallback) {
            this.messageListener.setCallBack(true, iframeRedirectCallback);
        }
    };
    // #endregion
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     */
    UserAgentApplication.prototype.loginRedirect = function (request) {
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError());
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, true, request);
    };
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenRedirect = function (request) {
        if (!request) {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError());
        }
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError());
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, false, request);
    };
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param {@link (AuthenticationParameters:type)}
     *
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.loginPopup = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, true, request, resolve, reject);
        });
    };
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.acquireTokenPopup = function (request) {
        var _this = this;
        if (!request) {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError());
        }
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, false, request, resolve, reject);
        });
    };
    // #region Acquire Token
    /**
     * Use when initiating the login process or when you want to obtain an access_token for your API,
     * either by redirecting the user's browser window to the authorization endpoint or via opening a popup window in the user's browser.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenInteractive = function (interactionType, isLoginCall, request, resolve, reject) {
        var _this = this;
        var interactionProgress = this.cacheStorage.getItem(Constants_1.INTERACTION_STATUS);
        // If already in progress, do not proceed
        if (interactionProgress === Constants_1.RequestStatus.IN_PROGRESS) {
            var thrownError = isLoginCall ? ClientAuthError_1.ClientAuthError.createLoginInProgressError() : ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError();
            var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request && request.state));
            this.authErrorHandler(interactionType, thrownError, stateOnlyResponse, reject);
            return;
        }
        // if extraScopesToConsent is passed in loginCall, append them to the login request
        var scopes = isLoginCall ? this.appendScopes(request) : request.scopes;
        // Validate and filter scopes (the validate function will throw if validation fails)
        this.validateInputScope(scopes, !isLoginCall);
        // Get the account object if a session exists
        var account = (request && request.account && !isLoginCall) ? request.account : this.getAccount();
        // If no session exists, prompt the user to login.
        if (!account && !ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request)) {
            if (isLoginCall) {
                // extract ADAL id_token if exists
                var adalIdToken = this.extractADALIdToken();
                // silent login if ADAL id_token is retrieved successfully - SSO
                if (adalIdToken && !scopes) {
                    this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                    var tokenRequest = this.buildIDTokenRequest(request);
                    this.silentLogin = true;
                    this.acquireTokenSilent(tokenRequest).then(function (response) {
                        _this.silentLogin = false;
                        _this.logger.info("Unified cache call is successful");
                        _this.authResponseHandler(interactionType, response, resolve);
                        return;
                    }, function (error) {
                        _this.silentLogin = false;
                        _this.logger.error("Error occurred during unified cache ATS: " + error);
                        // proceed to login since ATS failed
                        _this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                    });
                }
                // No ADAL token found, proceed to login
                else {
                    this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                }
            }
            // AcquireToken call, but no account or context given, so throw error
            else {
                this.logger.info("User login is required");
                throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
        }
        // User session exists
        else {
            this.acquireTokenHelper(account, interactionType, isLoginCall, request, scopes, resolve, reject);
        }
    };
    /**
     * @hidden
     * @ignore
     * Helper function to acquireToken
     *
     */
    UserAgentApplication.prototype.acquireTokenHelper = function (account, interactionType, isLoginCall, request, scopes, resolve, reject) {
        var _this = this;
        // Track the acquireToken progress
        this.cacheStorage.setItem(Constants_1.INTERACTION_STATUS, Constants_1.RequestStatus.IN_PROGRESS);
        var scope = scopes ? scopes.join(" ").toLowerCase() : this.clientId.toLowerCase();
        var serverAuthenticationRequest;
        var acquireTokenAuthority = (request && request.authority) ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority) : this.authorityInstance;
        var popUpWindow;
        if (interactionType === Constants_1.Constants.interactionTypePopup) {
            // Generate a popup window
            try {
                popUpWindow = this.openPopup("about:blank", "msal", Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
                // Push popup window handle onto stack for tracking
                WindowUtils_1.WindowUtils.trackPopup(popUpWindow);
            }
            catch (e) {
                this.cacheStorage.setItem(Constants_1.INTERACTION_STATUS, Constants_1.RequestStatus.COMPLETED);
                this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code);
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
                if (reject) {
                    reject(ClientAuthError_1.ClientAuthError.createPopupWindowError());
                }
            }
            if (!popUpWindow) {
                return;
            }
        }
        acquireTokenAuthority.resolveEndpointsAsync().then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var responseType, loginStartPage, urlNavigate, hash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        responseType = isLoginCall ? ResponseTypes.id_token : this.getTokenType(account, scopes, false);
                        if (isLoginCall) {
                            // if the user sets the login start page - angular only??
                            loginStartPage = this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.ANGULAR_LOGIN_REQUEST);
                            if (!loginStartPage || loginStartPage === "") {
                                loginStartPage = window.location.href;
                            }
                            else {
                                this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.ANGULAR_LOGIN_REQUEST, "");
                            }
                        }
                        serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, this.clientId, scopes, responseType, this.getRedirectUri(), request && request.state);
                        this.updateCacheEntries(serverAuthenticationRequest, account, loginStartPage);
                        // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
                        serverAuthenticationRequest.populateQueryParams(account, request);
                        urlNavigate = UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest) + Constants_1.Constants.response_mode_fragment;
                        // set state in cache
                        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                            if (!isLoginCall) {
                                this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN, serverAuthenticationRequest.state, this.inCookie);
                            }
                        }
                        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
                            window.renewStates.push(serverAuthenticationRequest.state);
                            window.requestType = isLoginCall ? Constants_1.Constants.login : Constants_1.Constants.renewToken;
                            // Register callback to capture results from server
                            this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
                        }
                        else {
                            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError());
                        }
                        // IFRAMEDAPPS: if we are redirecting in an iframe, post a message to the topFrame
                        if (WindowUtils_1.WindowUtils.isInIframe() && !popUpWindow) {
                            MessageHelper_1.MessageHelper.redirectDelegationRequest(this.messageCache, urlNavigate, this.config.broker.topFrameOrigin);
                        }
                        else {
                            // prompt user for interaction
                            WindowUtils_1.WindowUtils.navigateWindow(urlNavigate, this.logger, popUpWindow);
                        }
                        if (!popUpWindow) return [3 /*break*/, 2];
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorWindowForHash(popUpWindow, this.config.system.loadFrameTimeout)];
                    case 1:
                        hash = _a.sent();
                        if (hash) {
                            // Hash found
                            this.handleAuthenticationResponse(hash);
                            // Request completed successfully, set to completed
                            this.cacheStorage.setItem(Constants_1.INTERACTION_STATUS, Constants_1.RequestStatus.COMPLETED);
                            this.logger.info("Closing popup window");
                            // TODO: Check how this can be extracted for any framework specific code?
                            if (this.config.framework.isAngular) {
                                this.broadcast("msal:popUpHashChanged", hash);
                                WindowUtils_1.WindowUtils.closePopups();
                            }
                        }
                        else {
                            // Window closed
                            if (reject) {
                                this.cacheStorage.resetTempCacheItems();
                                reject(ClientAuthError_1.ClientAuthError.createUserCancelledError());
                            }
                            if (this.config.framework.isAngular) {
                                this.broadcast("msal:popUpClosed", ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.code + Constants_1.Constants.resourceDelimiter + ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.desc);
                                return [2 /*return*/];
                            }
                            // Request failed, set to canceled
                            this.cacheStorage.setItem(Constants_1.INTERACTION_STATUS, Constants_1.RequestStatus.COMPLETED);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); }).catch(function (err) {
            _this.logger.warning("could not resolve endpoints");
            _this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString), AuthResponse_1.buildResponseStateOnly(request.state), reject);
            if (popUpWindow) {
                popUpWindow.close();
            }
        });
    };
    /**
     * Use this function to obtain a token before every call to the API / resource provider
     *
     * MSAL return's a cached token when available
     * Or it send's a request to the STS to obtain a new token using a hidden iframe.
     *
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     *
     */
    UserAgentApplication.prototype.acquireTokenSilent = function (request) {
        var _this = this;
        if (!request) {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError());
        }
        return new Promise(function (resolve, reject) {
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(request.scopes, true);
            var scope = request.scopes.join(" ").toLowerCase();
            // if the developer passes an account, give that account the priority
            var account = request.account || _this.getAccount();
            // extract if there is an adalIdToken stashed in the cache
            var adalIdToken = _this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
            // if there is no account logged in and no login_hint/sid is passed in the request
            if (!account && !(request.sid || request.loginHint) && StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                _this.logger.info("User login is required");
                return reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
            var responseType = _this.getTokenType(account, request.scopes, true);
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority), _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request && request.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            if (ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request) || account) {
                serverAuthenticationRequest.populateQueryParams(account, request);
            }
            // if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
            else if (!account && !StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                // if adalIdToken exists, extract the SSO info from the same
                var adalIdTokenObject = TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
                _this.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                serverAuthenticationRequest.populateQueryParams(account, null, adalIdTokenObject);
            }
            var userContainedClaims = request.claimsRequest || serverAuthenticationRequest.claimsValue;
            var authErr;
            var cacheResultResponse;
            if (!userContainedClaims && !request.forceRefresh) {
                try {
                    cacheResultResponse = _this.getCachedToken(serverAuthenticationRequest, account);
                }
                catch (e) {
                    authErr = e;
                }
            }
            // resolve/reject based on cacheResult
            if (cacheResultResponse) {
                _this.logger.info("Token is already in cache for scope:" + scope);
                resolve(cacheResultResponse);
                return null;
            }
            else if (authErr) {
                _this.logger.infoPii(authErr.errorCode + ":" + authErr.errorMessage);
                reject(authErr);
                return null;
            }
            // else proceed with login
            else {
                var logMessage = void 0;
                if (userContainedClaims) {
                    logMessage = "Skipped cache lookup since claims were given.";
                }
                else if (request.forceRefresh) {
                    logMessage = "Skipped cache lookup since request.forceRefresh option was set to true";
                }
                else {
                    logMessage = "Token is not in cache for scope:" + scope;
                }
                _this.logger.verbose(logMessage);
                // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
                if (!serverAuthenticationRequest.authorityInstance) {
                    serverAuthenticationRequest.authorityInstance = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority) : _this.authorityInstance;
                }
                // cache miss
                return serverAuthenticationRequest.authorityInstance.resolveEndpointsAsync()
                    .then(function () {
                    /*
                     * refresh attempt with iframe
                     * Already renewing for this scope, callback when we get the token.
                     */
                    if (window.activeRenewals[scope]) {
                        _this.logger.verbose("Renew token for scope: " + scope + " is in progress. Registering callback");
                        // Active renewals contains the state for each renewal.
                        _this.registerCallback(window.activeRenewals[scope], scope, resolve, reject);
                    }
                    else {
                        if (request.scopes && request.scopes.indexOf(_this.clientId) > -1 && request.scopes.length === 1) {
                            /*
                             * App uses idToken to send to api endpoints
                             * Default scope is tracked as clientId to store this token
                             */
                            _this.logger.verbose("renewing idToken");
                            _this.silentLogin = true;
                            _this.renewIdToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                        else {
                            // renew access token
                            _this.logger.verbose("renewing accesstoken");
                            _this.renewToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                    }
                }).catch(function (err) {
                    _this.logger.warning("could not resolve endpoints");
                    reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString()));
                    return null;
                });
            }
        });
    };
    // #endregion
    // #region Popup Window Creation
    /**
     * @hidden
     *
     * Configures popup window for login.
     *
     * @param urlNavigate
     * @param title
     * @param popUpWidth
     * @param popUpHeight
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
        try {
            /**
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top = ((height / 2) - (popUpHeight / 2)) + winTop;
            // open the window
            var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top + ", left=" + left);
            if (!popupWindow) {
                throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientAuthError_1.ClientAuthError.createPopupWindowError());
            }
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            return popupWindow;
        }
        catch (e) {
            this.logger.error("error opening popup " + e.message);
            this.cacheStorage.setItem(Constants_1.INTERACTION_STATUS, Constants_1.RequestStatus.COMPLETED);
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientAuthError_1.ClientAuthError.createPopupWindowError(e.toString()));
        }
    };
    // #endregion
    // #region Iframe Management
    /**
     * @hidden
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
     */
    UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, scope) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var expectedState, iframe, hash;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expectedState = window.activeRenewals[scope];
                        this.logger.verbose("Set loading state to pending for: " + scope + ":" + expectedState);
                        this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.RENEW_STATUS + expectedState, Constants_1.RequestStatus.IN_PROGRESS);
                        setTimeout(function () {
                            if (_this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.RENEW_STATUS + expectedState) === Constants_1.RequestStatus.IN_PROGRESS) {
                                // fail the iframe session if it's in pending state
                                _this.logger.verbose("Loading frame has timed out after: " + (_this.config.system.loadFrameTimeout / 1000) + " seconds for scope " + scope + ":" + expectedState);
                                // Error after timeout
                                if (expectedState && window.callbackMappedToRenewStates[expectedState]) {
                                    window.callbackMappedToRenewStates[expectedState](null, ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError());
                                }
                                _this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.RENEW_STATUS + expectedState, Constants_1.RequestStatus.COMPLETED);
                            }
                        }, this.config.system.loadFrameTimeout);
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.loadFrame(urlNavigate, frameName, this.config.system.navigateFrameWait, this.logger)];
                    case 1:
                        iframe = _a.sent();
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorWindowForHash(iframe.contentWindow, this.config.system.loadFrameTimeout)];
                    case 2:
                        hash = _a.sent();
                        if (hash) {
                            this.handleAuthenticationResponse(hash);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // #endregion
    // #region General Helpers
    /**
     * @hidden
     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
     * @param {string} expectedState - Unique state identifier (guid).
     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {Function} resolve - The resolve function of the promise object.
     * @param {Function} reject - The reject function of the promise object.
     * @ignore
     */
    UserAgentApplication.prototype.registerCallback = function (expectedState, scope, resolve, reject) {
        var _this = this;
        // track active renewals
        window.activeRenewals[scope] = expectedState;
        // initialize callbacks mapped array
        if (!window.promiseMappedToRenewStates[expectedState]) {
            window.promiseMappedToRenewStates[expectedState] = [];
        }
        // indexing on the current state, push the callback params to callbacks mapped
        window.promiseMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
        // Store the server response in the current window??
        if (!window.callbackMappedToRenewStates[expectedState]) {
            window.callbackMappedToRenewStates[expectedState] =
                function (response, error) {
                    // reset active renewals
                    window.activeRenewals[scope] = null;
                    // for all promiseMappedtoRenewStates for a given 'state' - call the reject/resolve with error/token respectively
                    for (var i = 0; i < window.promiseMappedToRenewStates[expectedState].length; ++i) {
                        try {
                            if (error) {
                                window.promiseMappedToRenewStates[expectedState][i].reject(error);
                            }
                            else if (response) {
                                window.promiseMappedToRenewStates[expectedState][i].resolve(response);
                            }
                            else {
                                throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(_this.cacheStorage, AuthError_1.AuthError.createUnexpectedError("Error and response are both null"));
                            }
                        }
                        catch (e) {
                            _this.logger.warning(e);
                        }
                    }
                    // reset
                    window.promiseMappedToRenewStates[expectedState] = null;
                    window.callbackMappedToRenewStates[expectedState] = null;
                };
        }
    };
    // #endregion
    // #region Logout
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     */
    UserAgentApplication.prototype.logout = function () {
        var _this = this;
        this.clearCache();
        this.account = null;
        var logout = "";
        if (this.getPostLogoutRedirectUri()) {
            logout = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
        }
        this.authorityInstance.resolveEndpointsAsync().then(function (authority) {
            var urlNavigate = authority.EndSessionEndpoint
                ? authority.EndSessionEndpoint + "?" + logout
                : _this.authority + "oauth2/v2.0/logout?" + logout;
            WindowUtils_1.WindowUtils.navigateWindow(urlNavigate, _this.logger);
        });
    };
    /**
     * @hidden
     * Clear all access tokens in the cache.
     * @ignore
     */
    UserAgentApplication.prototype.clearCache = function () {
        window.renewStates = [];
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            this.cacheStorage.removeItem(JSON.stringify(accessTokenItems[i].key));
        }
        this.cacheStorage.resetCacheItems();
        this.cacheStorage.clearMsalCookie();
    };
    /**
     * @hidden
     * Clear a given access token from the cache.
     *
     * @param accessToken
     */
    UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            var token = accessTokenItems[i];
            if (token.value.accessToken === accessToken) {
                this.cacheStorage.removeItem(JSON.stringify(token.key));
            }
        }
    };
    // #endregion
    // #region Response
    /**
     * @hidden
     * @ignore
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
     */
    UserAgentApplication.prototype.isCallback = function (hash) {
        this.logger.info("isCallback will be deprecated in favor of urlContainsHash in MSAL.js v2.0.");
        return UrlUtils_1.UrlUtils.urlContainsHash(hash);
    };
    /**
     * @hidden
     * Used to call the constructor callback with the token/error
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.processCallBack = function (hash, stateInfo, parentCallback) {
        this.logger.info("Processing the callback from redirect response");
        // get the state info from the hash
        if (!stateInfo) {
            stateInfo = this.getResponseState(hash);
        }
        var response;
        var authErr;
        // Save the token info from the hash
        try {
            response = this.saveTokenFromHash(hash, stateInfo);
        }
        catch (err) {
            authErr = err;
        }
        // remove hash from the cache
        this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.URL_HASH);
        try {
            // Clear the cookie in the hash
            this.cacheStorage.clearMsalCookie(stateInfo.state);
            var accountState = this.getAccountState(stateInfo.state);
            if (response) {
                if ((stateInfo.requestType === Constants_1.Constants.renewToken) || response.accessToken) {
                    if (window.parent !== window) {
                        this.logger.verbose("Window is in iframe, acquiring token silently");
                    }
                    else {
                        this.logger.verbose("acquiring token interactive in progress");
                    }
                    response.tokenType = Constants_1.ServerHashParamKeys.ACCESS_TOKEN;
                }
                else if (stateInfo.requestType === Constants_1.Constants.login) {
                    response.tokenType = Constants_1.ServerHashParamKeys.ID_TOKEN;
                }
                if (!parentCallback) {
                    this.authResponseHandler(Constants_1.Constants.interactionTypeRedirect, response);
                    return;
                }
            }
            else if (!parentCallback) {
                this.authErrorHandler(Constants_1.Constants.interactionTypeRedirect, authErr, AuthResponse_1.buildResponseStateOnly(accountState));
                return;
            }
            parentCallback(response, authErr);
        }
        catch (err) {
            this.logger.error("Error occurred in token received callback function: " + err);
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientAuthError_1.ClientAuthError.createErrorInCallbackFunction(err.toString()));
        }
    };
    /**
     * @hidden
     * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
     * calls the registered callbacks in case of redirect or resolves the promises with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
        // retrieve the hash
        var locationHash = hash || window.location.hash;
        // Check if the current flow is popup or hidden iframe
        var iframeWithHash = WindowUtils_1.WindowUtils.getIframeWithHash(locationHash);
        var popUpWithHash = WindowUtils_1.WindowUtils.getPopUpWithHash(locationHash);
        var isPopupOrIframe = !!(iframeWithHash || popUpWithHash);
        // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
        var stateInfo = this.getResponseState(locationHash);
        var tokenResponseCallback = null;
        this.logger.info("Returned from redirect url");
        // If parent window is the msal instance which opened the current window (iframe)
        if (isPopupOrIframe) {
            tokenResponseCallback = window.callbackMappedToRenewStates[stateInfo.state];
        }
        else {
            // Redirect cases
            tokenResponseCallback = null;
            // if set to navigate to loginRequest page post login
            if (this.config.auth.navigateToLoginRequestUrl) {
                this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.URL_HASH, locationHash);
                if (window.parent === window) {
                    window.location.href = this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.LOGIN_REQUEST, this.inCookie);
                }
                return;
            }
            else {
                window.location.hash = "";
            }
            if (!this.redirectCallbacksSet) {
                // We reached this point too early - cache hash, return and process in handleRedirectCallbacks
                this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.URL_HASH, locationHash);
                return;
            }
        }
        this.processCallBack(locationHash, stateInfo, tokenResponseCallback);
        // If current window is opener, close all windows
        if (isPopupOrIframe) {
            WindowUtils_1.WindowUtils.closePopups();
        }
    };
    /**
     * @hidden
     * Creates a stateInfo object from the URL fragment and returns it.
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @ignore
     */
    UserAgentApplication.prototype.getResponseState = function (hash) {
        var parameters = UrlUtils_1.UrlUtils.deserializeHash(hash);
        var stateResponse;
        if (!parameters) {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, AuthError_1.AuthError.createUnexpectedError("Hash was not parsed correctly."));
        }
        if (parameters.hasOwnProperty("state")) {
            stateResponse = {
                requestType: Constants_1.Constants.unknown,
                state: parameters.state,
                stateMatch: false
            };
        }
        else {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, AuthError_1.AuthError.createUnexpectedError("Hash does not contain state."));
        }
        /*
         * async calls can fire iframe and login request at the same time if developer does not use the API as expected
         * incoming callback needs to be looked up to find the request type
         */
        // loginRedirect
        if (stateResponse.state === this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.STATE_LOGIN, this.inCookie) || stateResponse.state === this.silentAuthenticationState) { // loginRedirect
            stateResponse.requestType = Constants_1.Constants.login;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // acquireTokenRedirect
        else if (stateResponse.state === this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN, this.inCookie)) { // acquireTokenRedirect
            stateResponse.requestType = Constants_1.Constants.renewToken;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // external api requests may have many renewtoken requests for different resource
        if (!stateResponse.stateMatch) {
            stateResponse.requestType = window.requestType;
            var statesInParentContext = window.renewStates;
            for (var i = 0; i < statesInParentContext.length; i++) {
                if (statesInParentContext[i] === stateResponse.state) {
                    stateResponse.stateMatch = true;
                    break;
                }
            }
        }
        return stateResponse;
    };
    // #endregion
    // #region Token Processing (Extract to TokenProcessing.ts)
    /**
     * @hidden
     * Used to get token for the specified set of scopes from the cache
     * @param {@link ServerRequestParameters} - Request sent to the STS to obtain an id_token/access_token
     * @param {Account} account - Account for which the scopes were requested
     */
    UserAgentApplication.prototype.getCachedToken = function (serverAuthenticationRequest, account) {
        var accessTokenCacheItem = null;
        var scopes = serverAuthenticationRequest.scopes;
        // filter by clientId and account
        var tokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, account ? account.homeAccountIdentifier : null);
        // No match found after initial filtering
        if (tokenCacheItems.length === 0) {
            return null;
        }
        var filteredItems = [];
        // if no authority passed
        if (!serverAuthenticationRequest.authority) {
            // filter by scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes)) {
                    filteredItems.push(cacheItem);
                }
            }
            // if only one cached token found
            if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.config.auth.validateAuthority);
            }
            // if more than one cached token is found
            else if (filteredItems.length > 1) {
                throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString()));
            }
            // if no match found, check if there was a single authority used
            else {
                var authorityList = this.getUniqueAuthority(tokenCacheItems, "authority");
                if (authorityList.length > 1) {
                    throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientAuthError_1.ClientAuthError.createMultipleAuthoritiesInCacheError(scopes.toString()));
                }
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(authorityList[0], this.config.auth.validateAuthority);
            }
        }
        // if an authority is passed in the API
        else {
            // filter by authority and scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes) && UrlUtils_1.UrlUtils.CanonicalizeUri(cacheItem.key.authority) === serverAuthenticationRequest.authority) {
                    filteredItems.push(cacheItem);
                }
            }
            // no match
            if (filteredItems.length === 0) {
                return null;
            }
            // if only one cachedToken Found
            else if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
            }
            else {
                // if more than one cached token is found
                throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString()));
            }
        }
        if (accessTokenCacheItem != null) {
            var expired = Number(accessTokenCacheItem.value.expiresIn);
            // If expiration is within offset, it will force renew
            var offset = this.config.system.tokenRenewalOffsetSeconds || 300;
            if (expired && (expired > TimeUtils_1.TimeUtils.now() + offset)) {
                var idTokenObj = new IdToken_1.IdToken(accessTokenCacheItem.value.idToken);
                if (!account) {
                    account = this.getAccount();
                    if (!account) {
                        throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, AuthError_1.AuthError.createUnexpectedError("Account should not be null here."));
                    }
                }
                var aState = this.getAccountState(serverAuthenticationRequest.state);
                var response = {
                    uniqueId: "",
                    tenantId: "",
                    tokenType: (accessTokenCacheItem.value.idToken === accessTokenCacheItem.value.accessToken) ? Constants_1.ServerHashParamKeys.ID_TOKEN : Constants_1.ServerHashParamKeys.ACCESS_TOKEN,
                    idToken: idTokenObj,
                    idTokenClaims: idTokenObj.claims,
                    accessToken: accessTokenCacheItem.value.accessToken,
                    scopes: accessTokenCacheItem.key.scopes.split(" "),
                    expiresOn: new Date(expired * 1000),
                    account: account,
                    accountState: aState
                };
                ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                return response;
            }
            else {
                this.cacheStorage.removeItem(JSON.stringify(filteredItems[0].key));
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * @hidden
     * Used to get a unique list of authorities from the cache
     * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAuthority = function (accessTokenCacheItems, property) {
        var authorityList = [];
        var flags = [];
        accessTokenCacheItems.forEach(function (element) {
            if (element.key.hasOwnProperty(property) && (flags.indexOf(element.key[property]) === -1)) {
                flags.push(element.key[property]);
                authorityList.push(element.key[property]);
            }
        });
        return authorityList;
    };
    /**
     * @hidden
     * Check if ADAL id_token exists and return if exists.
     *
     */
    UserAgentApplication.prototype.extractADALIdToken = function () {
        var adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
        if (!StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
            return TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
        }
        return null;
    };
    /**
     * @hidden
     * Acquires access token using a hidden iframe.
     * @ignore
     */
    UserAgentApplication.prototype.renewToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        var scope = scopes.join(" ").toLowerCase();
        this.logger.verbose("renewToken is called for scope:" + scope);
        var frameName = "msalRenewFrame" + scope;
        var frameHandle = WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew token Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        window.renewStates.push(serverAuthenticationRequest.state);
        window.requestType = Constants_1.Constants.renewToken;
        this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, frameName, scope);
    };
    /**
     * @hidden
     * Renews idtoken for app's own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
     */
    UserAgentApplication.prototype.renewIdToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        this.logger.info("renewidToken is called");
        var frameName = "msalIdTokenFrame";
        var frameHandle = WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew Idtoken Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        if (this.silentLogin) {
            window.requestType = Constants_1.Constants.login;
            this.silentAuthenticationState = serverAuthenticationRequest.state;
        }
        else {
            window.requestType = Constants_1.Constants.renewToken;
            window.renewStates.push(serverAuthenticationRequest.state);
        }
        // note: scope here is clientId
        this.registerCallback(serverAuthenticationRequest.state, this.clientId, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, frameName, this.clientId);
    };
    /**
     * @hidden
     *
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
     * @param {string} authority authority received in the redirect response from AAD.
     * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @param {Account} account account object for which scopes are consented for. The default account is the logged in account.
     * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
     * @param {IdToken} idToken idToken received as part of the response.
     * @ignore
     * @private
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveAccessToken = function (response, authority, parameters, clientInfo, idTokenObj) {
        var scope;
        var accessTokenResponse = tslib_1.__assign({}, response);
        var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
        var expiration;
        // if the response contains "scope"
        if (parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.SCOPE)) {
            // read the scopes
            scope = parameters[Constants_1.ServerHashParamKeys.SCOPE];
            var consentedScopes = scope.split(" ");
            // retrieve all access tokens from the cache, remove the dup scores
            var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, authority);
            for (var i = 0; i < accessTokenCacheItems.length; i++) {
                var accessTokenCacheItem = accessTokenCacheItems[i];
                if (accessTokenCacheItem.key.homeAccountIdentifier === response.account.homeAccountIdentifier) {
                    var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                    if (ScopeSet_1.ScopeSet.isIntersectingScopes(cachedScopes, consentedScopes)) {
                        this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                    }
                }
            }
            // Generate and cache accessTokenKey and accessTokenValue
            var expiresIn = TimeUtils_1.TimeUtils.parseExpiresIn(parameters[Constants_1.ServerHashParamKeys.EXPIRES_IN]);
            expiration = TimeUtils_1.TimeUtils.now() + expiresIn;
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.ServerHashParamKeys.ACCESS_TOKEN], idTokenObj.rawIdToken, expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.accessToken = parameters[Constants_1.ServerHashParamKeys.ACCESS_TOKEN];
            accessTokenResponse.scopes = consentedScopes;
        }
        // if the response does not contain "scope" - scope is usually client_id and the token will be id_token
        else {
            scope = this.clientId;
            // Generate and cache accessTokenKey and accessTokenValue
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            expiration = Number(idTokenObj.expiration);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.ServerHashParamKeys.ID_TOKEN], parameters[Constants_1.ServerHashParamKeys.ID_TOKEN], expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.scopes = [scope];
            accessTokenResponse.accessToken = parameters[Constants_1.ServerHashParamKeys.ID_TOKEN];
        }
        if (expiration) {
            accessTokenResponse.expiresOn = new Date(expiration * 1000);
        }
        else {
            this.logger.error("Could not parse expiresIn parameter");
        }
        return accessTokenResponse;
    };
    /**
     * @hidden
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
     * @ignore
     */
    UserAgentApplication.prototype.saveTokenFromHash = function (hash, stateInfo) {
        this.logger.info("State status:" + stateInfo.stateMatch + "; Request type:" + stateInfo.requestType);
        var response = {
            uniqueId: "",
            tenantId: "",
            tokenType: "",
            idToken: null,
            idTokenClaims: null,
            accessToken: null,
            scopes: [],
            expiresOn: null,
            account: null,
            accountState: "",
        };
        var error;
        var hashParams = UrlUtils_1.UrlUtils.deserializeHash(hash);
        var authorityKey = "";
        var acquireTokenAccountKey = "";
        var idTokenObj = null;
        // If server returns an error
        if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION) || hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR)) {
            this.logger.infoPii("Error :" + hashParams[Constants_1.ServerHashParamKeys.ERROR] + "; Error description:" + hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, hashParams[Constants_1.ServerHashParamKeys.ERROR]);
            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            // login
            if (stateInfo.requestType === Constants_1.Constants.login) {
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.LOGIN_ERROR, hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION] + ":" + hashParams[Constants_1.ServerHashParamKeys.ERROR]);
                authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(stateInfo.state);
            }
            // acquireToken
            if (stateInfo.requestType === Constants_1.Constants.renewToken) {
                authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(stateInfo.state);
                var account = this.getAccount();
                var accountId = void 0;
                if (account && !StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
                    accountId = account.homeAccountIdentifier;
                }
                else {
                    accountId = Constants_1.Constants.no_account;
                }
                acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountId, stateInfo.state);
            }
            var _a = Constants_1.ServerHashParamKeys.ERROR, hashErr = hashParams[_a], _b = Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION, hashErrDesc = hashParams[_b];
            if (InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErr) ||
                InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErrDesc)) {
                error = new InteractionRequiredAuthError_1.InteractionRequiredAuthError(hashParams[Constants_1.ServerHashParamKeys.ERROR], hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            }
            else {
                error = new ServerError_1.ServerError(hashParams[Constants_1.ServerHashParamKeys.ERROR], hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            }
        }
        // If the server returns "Success"
        else {
            // Verify the state from redirect and record tokens to storage if exists
            if (stateInfo.stateMatch) {
                this.logger.info("State is right");
                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.SESSION_STATE)) {
                    this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.SESSION_STATE, hashParams[Constants_1.ServerHashParamKeys.SESSION_STATE]);
                }
                response.accountState = this.getAccountState(stateInfo.state);
                var clientInfo = "";
                // Process access_token
                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ACCESS_TOKEN)) {
                    this.logger.info("Fragment has access token");
                    // retrieve the id_token from response if present
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN)) {
                        idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN]);
                        response.idToken = idTokenObj;
                        response.idTokenClaims = idTokenObj.claims;
                    }
                    else {
                        idTokenObj = new IdToken_1.IdToken(this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.IDTOKEN));
                        response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    }
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    // retrieve client_info - if it is not found, generate the uid and utid from idToken
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.CLIENT_INFO)) {
                        clientInfo = hashParams[Constants_1.ServerHashParamKeys.CLIENT_INFO];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                        throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientAuthError_1.ClientAuthError.createClientInfoNotPopulatedError("ClientInfo not received in the response from the server"));
                    }
                    response.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    var accountKey = void 0;
                    if (response.account && !StringUtils_1.StringUtils.isEmpty(response.account.homeAccountIdentifier)) {
                        accountKey = response.account.homeAccountIdentifier;
                    }
                    else {
                        accountKey = Constants_1.Constants.no_account;
                    }
                    acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountKey, stateInfo.state);
                    var acquireTokenAccountKey_noaccount = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(Constants_1.Constants.no_account, stateInfo.state);
                    var cachedAccount = this.cacheStorage.getItem(acquireTokenAccountKey);
                    var acquireTokenAccount = void 0;
                    // Check with the account in the Cache
                    if (!StringUtils_1.StringUtils.isEmpty(cachedAccount)) {
                        acquireTokenAccount = JSON.parse(cachedAccount);
                        if (response.account && acquireTokenAccount && Account_1.Account.compareAccounts(response.account, acquireTokenAccount)) {
                            response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                            this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                        }
                        else {
                            this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request");
                        }
                    }
                    else if (!StringUtils_1.StringUtils.isEmpty(this.cacheStorage.getItem(acquireTokenAccountKey_noaccount))) {
                        response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                    }
                }
                // Process id_token
                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN)) {
                    this.logger.info("Fragment has id token");
                    // set the idToken
                    idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN]);
                    response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.CLIENT_INFO)) {
                        clientInfo = hashParams[Constants_1.ServerHashParamKeys.CLIENT_INFO];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                    }
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    this.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    response.account = this.account;
                    if (idTokenObj && idTokenObj.nonce) {
                        // check nonce integrity if idToken has nonce - throw an error if not matched
                        if (idTokenObj.nonce !== this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + "|" + stateInfo.state, this.inCookie)) {
                            this.account = null;
                            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.LOGIN_ERROR, "Nonce Mismatch. Expected Nonce: " + this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + "|" + stateInfo.state, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            this.logger.error("Nonce Mismatch.Expected Nonce: " + this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + "|" + stateInfo.state, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            error = ClientAuthError_1.ClientAuthError.createNonceMismatchError(this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + "|" + stateInfo.state, this.inCookie), idTokenObj.nonce);
                        }
                        // Save the token
                        else {
                            this.cacheStorage.setItem(Constants_1.PersistentCacheKeys.IDTOKEN, hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN]);
                            this.cacheStorage.setItem(Constants_1.PersistentCacheKeys.CLIENT_INFO, clientInfo);
                            // Save idToken as access token for app itself
                            this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                        }
                    }
                    else {
                        authorityKey = stateInfo.state;
                        acquireTokenAccountKey = stateInfo.state;
                        this.logger.error("Invalid id_token received in the response");
                        error = ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(idTokenObj);
                        this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, error.errorCode);
                        this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, error.errorMessage);
                    }
                }
            }
            // State mismatch - unexpected/invalid state
            else {
                authorityKey = stateInfo.state;
                acquireTokenAccountKey = stateInfo.state;
                var expectedState = this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.STATE_LOGIN, this.inCookie);
                this.logger.error("State Mismatch.Expected State: " + expectedState + "," + "Actual State: " + stateInfo.state);
                error = ClientAuthError_1.ClientAuthError.createInvalidStateError(stateInfo.state, expectedState);
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, error.errorCode);
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, error.errorMessage);
            }
        }
        // Set status to completed
        this.cacheStorage.setItem(Constants_1.INTERACTION_STATUS, Constants_1.RequestStatus.COMPLETED);
        this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.RENEW_STATUS + stateInfo.state, Constants_1.RequestStatus.COMPLETED);
        this.cacheStorage.removeAcquireTokenEntries(stateInfo.state);
        // this is required if navigateToLoginRequestUrl=false
        if (this.inCookie) {
            this.cacheStorage.setItemCookie(authorityKey, "", -1);
            this.cacheStorage.clearMsalCookie(stateInfo.state);
        }
        if (error) {
            // Error case, set status to cancelled
            this.cacheStorage.removeAcquireTokenEntries(stateInfo.state);
            throw error;
        }
        if (!response) {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, AuthError_1.AuthError.createUnexpectedError("Response is null"));
        }
        return response;
    };
    /**
     * Set Authority when saving Token from the hash
     * @param state
     * @param inCookie
     * @param cacheStorage
     * @param idTokenObj
     * @param response
     */
    UserAgentApplication.prototype.populateAuthority = function (state, inCookie, cacheStorage, idTokenObj) {
        var authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(state);
        var cachedAuthority = cacheStorage.getItem(authorityKey, inCookie);
        // retrieve the authority from cache and replace with tenantID
        return StringUtils_1.StringUtils.isEmpty(cachedAuthority) ? cachedAuthority : UrlUtils_1.UrlUtils.replaceTenantPath(cachedAuthority, idTokenObj.tenantId);
    };
    /* tslint:enable:no-string-literal */
    // #endregion
    // #region Account
    /**
     * Returns the signed in account
     * (the account object is created at the time of successful login)
     * or null when no state is found
     * @returns {@link Account} - the account object stored in MSAL
     */
    UserAgentApplication.prototype.getAccount = function () {
        // if a session already exists, get the account from the session
        if (this.account) {
            return this.account;
        }
        // frame is used to get idToken and populate the account for the given session
        var rawIdToken = this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.IDTOKEN);
        var rawClientInfo = this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.CLIENT_INFO);
        if (!StringUtils_1.StringUtils.isEmpty(rawIdToken) && !StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo);
            this.account = Account_1.Account.createAccount(idToken, clientInfo);
            return this.account;
        }
        // if login not yet done, return null
        return null;
    };
    /**
     * @hidden
     *
     * Extracts state value from the accountState sent with the authentication request.
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getAccountState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return state;
    };
    /**
     * Use to get a list of unique accounts in MSAL cache based on homeAccountIdentifier.
     *
     * @param {@link Array<Account>} Account - all unique accounts in MSAL cache.
     */
    UserAgentApplication.prototype.getAllAccounts = function () {
        var accounts = [];
        var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
            var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.homeAccountIdentifier);
            var account = Account_1.Account.createAccount(idToken, clientInfo);
            accounts.push(account);
        }
        return this.getUniqueAccounts(accounts);
    };
    /**
     * @hidden
     *
     * Used to filter accounts based on homeAccountIdentifier
     * @param {Array<Account>}  Accounts - accounts saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAccounts = function (accounts) {
        if (!accounts || accounts.length <= 1) {
            return accounts;
        }
        var flags = [];
        var uniqueAccounts = [];
        for (var index = 0; index < accounts.length; ++index) {
            if (accounts[index].homeAccountIdentifier && flags.indexOf(accounts[index].homeAccountIdentifier) === -1) {
                flags.push(accounts[index].homeAccountIdentifier);
                uniqueAccounts.push(accounts[index]);
            }
        }
        return uniqueAccounts;
    };
    // #endregion
    // #region Scopes (Extract to Scopes.ts)
    /*
     * Note: "this" dependency in this section is minimal.
     * If pCacheStorage is separated from the class object, or passed as a fn param, scopesUtils.ts can be created
     */
    /**
     * @hidden
     *
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     * @ignore
     */
    UserAgentApplication.prototype.validateInputScope = function (scopes, scopesRequired) {
        if (!scopes) {
            if (scopesRequired) {
                throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createScopesRequiredError(scopes));
            }
            else {
                return;
            }
        }
        // Check that scopes is an array object (also throws error if scopes == null)
        if (!Array.isArray(scopes)) {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createScopesNonArrayError(scopes));
        }
        // Check that scopes is not an empty array
        if (scopes.length < 1) {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createEmptyScopesArrayError(scopes.toString()));
        }
        // Check that clientId is passed as single scope
        if (scopes.indexOf(this.clientId) > -1) {
            if (scopes.length > 1) {
                throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createClientIdSingleScopeError(scopes.toString()));
            }
        }
    };
    /**
     * @hidden
     *
     * Extracts scope value from the state sent with the authentication request.
     * @param {string} state
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getScopeFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /**
     * @ignore
     * Appends extraScopesToConsent if passed
     * @param {@link AuthenticationParameters}
     */
    UserAgentApplication.prototype.appendScopes = function (request) {
        var scopes;
        if (request && request.scopes) {
            if (request.extraScopesToConsent) {
                scopes = request.scopes.concat(request.extraScopesToConsent);
            }
            else {
                scopes = request.scopes;
            }
        }
        return scopes;
    };
    // #endregion
    // #region Angular
    /**
     * @hidden
     *
     * Broadcast messages - Used only for Angular?  *
     * @param eventName
     * @param data
     */
    UserAgentApplication.prototype.broadcast = function (eventName, data) {
        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };
    /**
     * @hidden
     *
     * Helper function to retrieve the cached token
     *
     * @param scopes
     * @param {@link Account} account
     * @param state
     * @return {@link AuthResponse} AuthResponse
     */
    UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, account, state) {
        // Get the current session's account object
        var accountObject = account || this.getAccount();
        if (!accountObject) {
            return null;
        }
        // Construct AuthenticationRequest based on response type
        var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.config.auth.validateAuthority);
        var responseType = this.getTokenType(accountObject, scopes, true);
        var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(newAuthority, this.clientId, scopes, responseType, this.getRedirectUri(), state);
        // get cached token
        return this.getCachedToken(serverAuthenticationRequest, account);
    };
    /**
     * @hidden
     *
     * Get scopes for the Endpoint - Used in Angular to track protected and unprotected resources without interaction from the developer app
     *
     * @param endpoint
     */
    UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
        // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
        if (this.config.framework.unprotectedResources.length > 0) {
            for (var i = 0; i < this.config.framework.unprotectedResources.length; i++) {
                if (endpoint.indexOf(this.config.framework.unprotectedResources[i]) > -1) {
                    return null;
                }
            }
        }
        // process all protected resources and send the matched one
        if (this.config.framework.protectedResourceMap.size > 0) {
            for (var _i = 0, _a = Array.from(this.config.framework.protectedResourceMap.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(key) > -1) {
                    return this.config.framework.protectedResourceMap.get(key);
                }
            }
        }
        /*
         * default resource will be clientid if nothing specified
         * App will use idtoken for calls to itself
         * check if it's staring from http or https, needs to match with app host
         */
        if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (this.getHostFromUri(endpoint) === this.getHostFromUri(this.getRedirectUri())) {
                return new Array(this.clientId);
            }
        }
        else {
            /*
             * in angular level, the url for $http interceptor call could be relative url,
             * if it's relative call, we'll treat it as app backend call.
             */
            return new Array(this.clientId);
        }
        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };
    /**
     * Return boolean flag to developer to help inform if login is in progress
     * @returns {boolean} true/false
     */
    UserAgentApplication.prototype.getLoginInProgress = function () {
        var pendingCallback = this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.URL_HASH);
        if (pendingCallback) {
            return true;
        }
        return this.cacheStorage.getItem(Constants_1.INTERACTION_STATUS) === Constants_1.RequestStatus.IN_PROGRESS;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param inProgress
     */
    UserAgentApplication.prototype.setInteractionInProgress = function (inProgress) {
        if (inProgress) {
            this.cacheStorage.setItem(Constants_1.INTERACTION_STATUS, Constants_1.RequestStatus.IN_PROGRESS);
        }
        else {
            this.cacheStorage.removeItem(Constants_1.INTERACTION_STATUS);
        }
    };
    /**
     * @hidden
     * @ignore
     *
     * @param loginInProgress
     */
    UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
        this.setInteractionInProgress(loginInProgress);
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the status of acquireTokenInProgress
     */
    UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
        return this.cacheStorage.getItem(Constants_1.INTERACTION_STATUS) === Constants_1.RequestStatus.IN_PROGRESS;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param acquireTokenInProgress
     */
    UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
        this.setInteractionInProgress(acquireTokenInProgress);
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the logger handle
     */
    UserAgentApplication.prototype.getLogger = function () {
        return this.config.system.logger;
    };
    // #endregion
    // #region Getters and Setters
    /**
     *
     * Use to get the redirect uri configured in MSAL or null.
     * Evaluates redirectUri if its a function, otherwise simply returns its value.
     * @returns {string} redirect URL
     *
     */
    UserAgentApplication.prototype.getRedirectUri = function () {
        if (typeof this.config.auth.redirectUri === "function") {
            return this.config.auth.redirectUri();
        }
        return this.config.auth.redirectUri;
    };
    /**
     * Use to get the post logout redirect uri configured in MSAL or null.
     * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     *
     * @returns {string} post logout redirect URL
     */
    UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
        if (typeof this.config.auth.postLogoutRedirectUri === "function") {
            return this.config.auth.postLogoutRedirectUri();
        }
        return this.config.auth.postLogoutRedirectUri;
    };
    /**
     * Use to get the current {@link Configuration} object in MSAL
     *
     * @returns {@link Configuration}
     */
    UserAgentApplication.prototype.getCurrentConfiguration = function () {
        if (!this.config) {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError());
        }
        return this.config;
    };
    // #endregion
    // #region String Util (Should be extracted to Utils.ts)
    /**
     * @hidden
     * @ignore
     *
     * extract URI from the host
     *
     * @param {string} URI
     * @returns {string} host from the URI
     */
    UserAgentApplication.prototype.getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
        extractedUri = extractedUri.split("/")[0];
        return extractedUri;
    };
    /**
     * @hidden
     * @ignore
     *
     * Utils function to create the Authentication
     * @param {@link account} account object
     * @param scopes
     * @param silentCall
     *
     * @returns {string} token type: id_token or access_token
     *
     */
    UserAgentApplication.prototype.getTokenType = function (accountObject, scopes, silentCall) {
        /*
         * if account is passed and matches the account object/or set to getAccount() from cache
         * if client-id is passed as scope, get id_token else token/id_token_token (in case no session exists)
         */
        var tokenType;
        // acquireTokenSilent
        if (silentCall) {
            if (Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            else {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.id_token_token;
            }
            return tokenType;
        }
        // all other cases
        else {
            if (!Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = ResponseTypes.id_token_token;
            }
            else {
                tokenType = (scopes.indexOf(this.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            return tokenType;
        }
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cachekeys for and stores the account information in cache
     * @param account
     * @param state
     * @hidden
     */
    UserAgentApplication.prototype.setAccountCache = function (account, state) {
        // Cache acquireTokenAccountKey
        var accountId = account ? this.getAccountId(account) : Constants_1.Constants.no_account;
        var acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountId, state);
        this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cacheKey for and stores the authority information in cache
     * @param state
     * @param authority
     * @hidden
     */
    UserAgentApplication.prototype.setAuthorityCache = function (state, authority) {
        // Cache authorityKey
        var authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(state);
        this.cacheStorage.setItem(authorityKey, UrlUtils_1.UrlUtils.CanonicalizeUri(authority), this.inCookie);
    };
    /**
     * Updates account, authority, and nonce in cache
     * @param serverAuthenticationRequest
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.updateCacheEntries = function (serverAuthenticationRequest, account, loginStartPage) {
        // Cache account and authority
        if (loginStartPage) {
            // Cache the state, nonce, and login request data
            this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.LOGIN_REQUEST, loginStartPage, this.inCookie);
            this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.STATE_LOGIN, serverAuthenticationRequest.state, this.inCookie);
        }
        else {
            this.setAccountCache(account, serverAuthenticationRequest.state);
        }
        // Cache authorityKey
        this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
        // Cache nonce
        this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + "|" + serverAuthenticationRequest.state, serverAuthenticationRequest.nonce, this.inCookie);
    };
    /**
     * Returns the unique identifier for the logged in account
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.getAccountId = function (account) {
        // return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
        var accountId;
        if (!StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
            accountId = account.homeAccountIdentifier;
        }
        else {
            accountId = Constants_1.Constants.no_account;
        }
        return accountId;
    };
    /**
     * @hidden
     * @ignore
     *
     * Construct 'tokenRequest' from the available data in adalIdToken
     * @param extraQueryParameters
     * @hidden
     */
    UserAgentApplication.prototype.buildIDTokenRequest = function (request) {
        var tokenRequest = {
            scopes: [this.clientId],
            authority: this.authority,
            account: this.getAccount(),
            extraQueryParameters: request.extraQueryParameters
        };
        return tokenRequest;
    };
    // #endregion
    UserAgentApplication.prototype.getTelemetryManagerFromConfig = function (config, clientId) {
        if (!config) { // if unset
            return null;
        }
        // if set then validate
        var applicationName = config.applicationName, applicationVersion = config.applicationVersion, telemetryEmitter = config.telemetryEmitter;
        if (!applicationName || !applicationVersion || !telemetryEmitter) {
            throw ErrorUtils_1.ErrorUtils.throwErrorAndClearTempCache(this.cacheStorage, ClientConfigurationError_1.ClientConfigurationError.createTelemetryConfigError(config));
        }
        // if valid then construct
        var telemetryPlatform = {
            sdk: "msal.js",
            sdkVersion: Constants_1.libraryVersion(),
            applicationName: applicationName,
            applicationVersion: applicationVersion
        };
        var telemetryManagerConfig = {
            platform: telemetryPlatform,
            clientId: clientId
        };
        return new TelemetryManager_1.default(telemetryManagerConfig, telemetryEmitter);
    };
    return UserAgentApplication;
}());
exports.UserAgentApplication = UserAgentApplication;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ScopeSet = /** @class */ (function () {
    function ScopeSet() {
    }
    /**
     * Check if there are dup scopes in a given request
     *
     * @param cachedScopes
     * @param scopes
     */
    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
    ScopeSet.isIntersectingScopes = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        for (var i = 0; i < scopes.length; i++) {
            if (cachedScopes.indexOf(scopes[i].toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if a given scope is present in the request
     *
     * @param cachedScopes
     * @param scopes
     */
    ScopeSet.containsScope = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    /**
     * toLower
     *
     * @param scopes
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.convertToLowerCase = function (scopes) {
        return scopes.map(function (scope) { return scope.toLowerCase(); });
    };
    /**
     * remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.removeElement = function (scopes, scope) {
        return scopes.filter(function (value) { return value !== scope; });
    };
    /**
     * Parse the scopes into a formatted scopeList
     * @param scopes
     */
    ScopeSet.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    return ScopeSet;
}());
exports.ScopeSet = ScopeSet;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfigurationError_1 = __webpack_require__(5);
function validateClaimsRequest(request) {
    if (!request.claimsRequest) {
        return;
    }
    var claims;
    try {
        claims = JSON.parse(request.claimsRequest);
    }
    catch (e) {
        throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
    }
    // TODO: More validation will be added when the server team tells us how they have actually implemented claims
}
exports.validateClaimsRequest = validateClaimsRequest;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(2);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var TokenUtils = /** @class */ (function () {
    function TokenUtils() {
    }
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    TokenUtils.decodeJwt = function (jwtToken) {
        if (StringUtils_1.StringUtils.isEmpty(jwtToken)) {
            return null;
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            // this._requestContext.logger.warn("The returned id_token is not parseable.");
            return null;
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Extract IdToken by decoding the RAWIdToken
     *
     * @param encodedIdToken
     */
    TokenUtils.extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = CryptoUtils_1.CryptoUtils.base64Decode(base64IdToken);
            if (!base64Decoded) {
                // this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            // this._requestContext.logger.error("The returned id_token could not be decoded" + err);
        }
        return null;
    };
    return TokenUtils;
}());
exports.TokenUtils = TokenUtils;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(2);
var StringUtils_1 = __webpack_require__(1);
/**
 * accountIdentifier       combination of idToken.uid and idToken.utid
 * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
 * userName                idToken.preferred_username
 * name                    idToken.name
 * idToken                 idToken
 * sid                     idToken.sid - session identifier
 * environment             idtoken.issuer (the authority that issues the token)
 */
var Account = /** @class */ (function () {
    /**
     * Creates an Account Object
     * @praram accountIdentifier
     * @param homeAccountIdentifier
     * @param userName
     * @param name
     * @param idToken
     * @param sid
     * @param environment
     */
    function Account(accountIdentifier, homeAccountIdentifier, userName, name, idTokenClaims, sid, environment) {
        this.accountIdentifier = accountIdentifier;
        this.homeAccountIdentifier = homeAccountIdentifier;
        this.userName = userName;
        this.name = name;
        // will be deprecated soon
        this.idToken = idTokenClaims;
        this.idTokenClaims = idTokenClaims;
        this.sid = sid;
        this.environment = environment;
    }
    /**
     * @hidden
     * @param idToken
     * @param clientInfo
     */
    Account.createAccount = function (idToken, clientInfo) {
        // create accountIdentifier
        var accountIdentifier = idToken.objectId || idToken.subject;
        // create homeAccountIdentifier
        var uid = clientInfo ? clientInfo.uid : "";
        var utid = clientInfo ? clientInfo.utid : "";
        var homeAccountIdentifier;
        if (!StringUtils_1.StringUtils.isEmpty(uid) && !StringUtils_1.StringUtils.isEmpty(utid)) {
            homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
        }
        return new Account(accountIdentifier, homeAccountIdentifier, idToken.preferredName, idToken.name, idToken.claims, idToken.sid, idToken.issuer);
    };
    /**
     * Utils function to compare two Account objects - used to check if the same user account is logged in
     *
     * @param a1: Account object
     * @param a2: Account object
     */
    Account.compareAccounts = function (a1, a2) {
        if (!a1 || !a2) {
            return false;
        }
        if (a1.homeAccountIdentifier && a2.homeAccountIdentifier) {
            if (a1.homeAccountIdentifier === a2.homeAccountIdentifier) {
                return true;
            }
        }
        return false;
    };
    return Account;
}());
exports.Account = Account;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Authority_1 = __webpack_require__(8);
var XHRClient_1 = __webpack_require__(20);
var Constants_1 = __webpack_require__(4);
/**
 * @hidden
 */
var AadAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(AadAuthority, _super);
    function AadAuthority(authority, validateAuthority) {
        return _super.call(this, authority, validateAuthority) || this;
    }
    Object.defineProperty(AadAuthority.prototype, "AadInstanceDiscoveryEndpointUrl", {
        get: function () {
            return AadAuthority.AadInstanceDiscoveryEndpoint + "?api-version=1.0&authorization_endpoint=" + this.CanonicalAuthority + "oauth2/v2.0/authorize";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AadAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.Aad;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise which resolves to the OIDC endpoint
     * Only responds with the endpoint
     */
    AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var client;
            return tslib_1.__generator(this, function (_a) {
                if (!this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
                    return [2 /*return*/, this.DefaultOpenIdConfigurationEndpoint];
                }
                client = new XHRClient_1.XhrClient();
                return [2 /*return*/, client.sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", true)
                        .then(function (response) {
                        return response.tenant_discovery_endpoint;
                    })];
            });
        });
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param {string} The host to look up
     */
    AadAuthority.prototype.IsInTrustedHostList = function (host) {
        return Constants_1.AADTrustedHostList[host.toLowerCase()];
    };
    AadAuthority.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance";
    return AadAuthority;
}(Authority_1.Authority));
exports.AadAuthority = AadAuthority;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * XHR client for JSON endpoints
 * https://www.npmjs.com/package/async-promise
 * @hidden
 */
var XhrClient = /** @class */ (function () {
    function XhrClient() {
    }
    XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /* async: */ true);
            if (enableCaching) {
                /*
                 * TODO: (shivb) ensure that this can be cached
                 * xhr.setRequestHeader("Cache-Control", "Public");
                 */
            }
            xhr.onload = function (ev) {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(_this.handleError(xhr.responseText));
                }
                var jsonResponse;
                try {
                    jsonResponse = JSON.parse(xhr.responseText);
                }
                catch (e) {
                    reject(_this.handleError(xhr.responseText));
                }
                resolve(jsonResponse);
            };
            xhr.onerror = function (ev) {
                reject(xhr.status);
            };
            if (method === "GET") {
                xhr.send();
            }
            else {
                throw "not implemented";
            }
        });
    };
    XhrClient.prototype.handleError = function (responseText) {
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
            if (jsonResponse.error) {
                return jsonResponse.error;
            }
            else {
                throw responseText;
            }
        }
        catch (e) {
            return responseText;
        }
    };
    return XhrClient;
}());
exports.XhrClient = XhrClient;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AadAuthority_1 = __webpack_require__(19);
var Authority_1 = __webpack_require__(8);
var ClientConfigurationError_1 = __webpack_require__(5);
var UrlUtils_1 = __webpack_require__(3);
/**
 * @hidden
 */
var B2cAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(B2cAuthority, _super);
    function B2cAuthority(authority, validateAuthority) {
        var _this = _super.call(this, authority, validateAuthority) || this;
        var urlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(authority);
        var pathSegments = urlComponents.PathSegments;
        if (pathSegments.length < 3) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.b2cAuthorityUriInvalidPath;
        }
        _this.CanonicalAuthority = "https://" + urlComponents.HostNameAndPort + "/" + pathSegments[0] + "/" + pathSegments[1] + "/" + pathSegments[2] + "/";
        return _this;
    }
    Object.defineProperty(B2cAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.B2C;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise with the TenantDiscoveryEndpoint
     */
    B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
                    return [2 /*return*/, this.DefaultOpenIdConfigurationEndpoint];
                }
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.unsupportedAuthorityValidation;
            });
        });
    };
    B2cAuthority.B2C_PREFIX = "tfp";
    return B2cAuthority;
}(AadAuthority_1.AadAuthority));
exports.B2cAuthority = B2cAuthority;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Logger_1 = __webpack_require__(11);
var UrlUtils_1 = __webpack_require__(3);
/**
 * Defaults for the Configuration Options
 */
var FRAME_TIMEOUT = 6000;
var OFFSET = 300;
var NAVIGATE_FRAME_WAIT = 500;
var DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: null,
    validateAuthority: true,
    redirectUri: function () { return UrlUtils_1.UrlUtils.getCurrentUri(); },
    postLogoutRedirectUri: function () { return UrlUtils_1.UrlUtils.getCurrentUri(); },
    navigateToLoginRequestUrl: true
};
var DEFAULT_CACHE_OPTIONS = {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
};
var DEFAULT_SYSTEM_OPTIONS = {
    logger: new Logger_1.Logger(null),
    loadFrameTimeout: FRAME_TIMEOUT,
    tokenRenewalOffsetSeconds: OFFSET,
    navigateFrameWait: NAVIGATE_FRAME_WAIT
};
var DEFAULT_FRAMEWORK_OPTIONS = {
    isAngular: false,
    unprotectedResources: new Array(),
    protectedResourceMap: new Map()
};
var DEFAULT_BROKER_OPTIONS = {
    topFrameOrigin: null,
    embeddedFrameOrigin: null,
};
/**
 * MSAL function that sets the default options when not explicitly configured from app developer
 *
 * @param AuthOptions
 * @param CacheOptions
 * @param SystemOptions
 * @param FrameworkOptions
 * @param BrokerOptions
 *
 * @returns Configuration object
 */
function buildConfiguration(_a) {
    var auth = _a.auth, _b = _a.cache, cache = _b === void 0 ? {} : _b, _c = _a.system, system = _c === void 0 ? {} : _c, _d = _a.framework, framework = _d === void 0 ? {} : _d, _e = _a.broker, broker = _e === void 0 ? {} : _e;
    var overlayedConfig = {
        auth: tslib_1.__assign({}, DEFAULT_AUTH_OPTIONS, auth),
        cache: tslib_1.__assign({}, DEFAULT_CACHE_OPTIONS, cache),
        system: tslib_1.__assign({}, DEFAULT_SYSTEM_OPTIONS, system),
        framework: tslib_1.__assign({}, DEFAULT_FRAMEWORK_OPTIONS, framework),
        broker: tslib_1.__assign({}, DEFAULT_BROKER_OPTIONS, broker)
    };
    return overlayedConfig;
}
exports.buildConfiguration = buildConfiguration;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ServerError_1 = __webpack_require__(12);
exports.InteractionRequiredAuthErrorMessage = {
    interactionRequired: {
        code: "interaction_required"
    },
    consentRequired: {
        code: "consent_required"
    },
    loginRequired: {
        code: "login_required"
    },
};
/**
 * Error thrown when the user is required to perform an interactive token request.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorString) {
        var interactionRequiredCodes = [
            exports.InteractionRequiredAuthErrorMessage.interactionRequired.code,
            exports.InteractionRequiredAuthErrorMessage.consentRequired.code,
            exports.InteractionRequiredAuthErrorMessage.loginRequired.code
        ];
        return errorString && interactionRequiredCodes.indexOf(errorString) > -1;
    };
    InteractionRequiredAuthError.createLoginRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.loginRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createInteractionRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.interactionRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createConsentRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.consentRequired.code, errorDesc);
    };
    return InteractionRequiredAuthError;
}(ServerError_1.ServerError));
exports.InteractionRequiredAuthError = InteractionRequiredAuthError;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function buildResponseStateOnly(state) {
    return {
        uniqueId: "",
        tenantId: "",
        tokenType: "",
        idToken: null,
        idTokenClaims: null,
        accessToken: "",
        scopes: null,
        expiresOn: null,
        account: null,
        accountState: state
    };
}
exports.buildResponseStateOnly = buildResponseStateOnly;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var B2cAuthority_1 = __webpack_require__(21);
var Constants_1 = __webpack_require__(4);
var TelemetryConstants_1 = __webpack_require__(9);
var CryptoUtils_1 = __webpack_require__(2);
var UrlUtils_1 = __webpack_require__(3);
exports.scrubTenantFromUri = function (uri) {
    var url = UrlUtils_1.UrlUtils.GetUrlComponents(uri);
    // validate trusted host
    if (!Constants_1.AADTrustedHostList[url.HostNameAndPort.toLocaleLowerCase()]) {
        // Should this return null or what was passed?
        return null;
    }
    var pathParams = url.PathSegments;
    if (pathParams && pathParams.length >= 2) {
        var tenantPosition = pathParams[1] === B2cAuthority_1.B2cAuthority.B2C_PREFIX ? 2 : 1;
        if (tenantPosition < pathParams.length) {
            pathParams[tenantPosition] = TelemetryConstants_1.TENANT_PLACEHOLDER;
        }
    }
    return url.Protocol + "//" + url.HostNameAndPort + "/" + pathParams.join("/");
};
exports.hashPersonalIdentifier = function (valueToHash) {
    /*
     * TODO sha256 this
     * Current test runner is being funny with node libs that are webpacked anyway
     * need a different solution
     */
    return CryptoUtils_1.CryptoUtils.base64Encode(valueToHash);
};
exports.prependEventNamePrefix = function (suffix) { return "" + TelemetryConstants_1.EVENT_NAME_PREFIX + (suffix || ""); };


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var MessageDispatcher = /** @class */ (function () {
    function MessageDispatcher() {
    }
    MessageDispatcher.dispatchMessage = function (target, message, originCheck) {
        originCheck ? target.postMessage(message, originCheck) : target.postMessage(message, "*");
    };
    return MessageDispatcher;
}());
exports.MessageDispatcher = MessageDispatcher;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAgentApplication_1 = __webpack_require__(14);
exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
var Logger_1 = __webpack_require__(11);
exports.Logger = Logger_1.Logger;
var Logger_2 = __webpack_require__(11);
exports.LogLevel = Logger_2.LogLevel;
var Account_1 = __webpack_require__(18);
exports.Account = Account_1.Account;
var Constants_1 = __webpack_require__(4);
exports.Constants = Constants_1.Constants;
var Authority_1 = __webpack_require__(8);
exports.Authority = Authority_1.Authority;
var UserAgentApplication_2 = __webpack_require__(14);
exports.CacheResult = UserAgentApplication_2.CacheResult;
var Configuration_1 = __webpack_require__(22);
exports.CacheLocation = Configuration_1.CacheLocation;
exports.Configuration = Configuration_1.Configuration;
var AuthenticationParameters_1 = __webpack_require__(16);
exports.AuthenticationParameters = AuthenticationParameters_1.AuthenticationParameters;
var AuthResponse_1 = __webpack_require__(24);
exports.AuthResponse = AuthResponse_1.AuthResponse;
// Errors
var AuthError_1 = __webpack_require__(7);
exports.AuthError = AuthError_1.AuthError;
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
var ServerError_1 = __webpack_require__(12);
exports.ServerError = ServerError_1.ServerError;
var ClientConfigurationError_1 = __webpack_require__(5);
exports.ClientConfigurationError = ClientConfigurationError_1.ClientConfigurationError;
var InteractionRequiredAuthError_1 = __webpack_require__(23);
exports.InteractionRequiredAuthError = InteractionRequiredAuthError_1.InteractionRequiredAuthError;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(2);
var UrlUtils_1 = __webpack_require__(3);
/**
 * @hidden
 */
var AccessTokenKey = /** @class */ (function () {
    function AccessTokenKey(authority, clientId, scopes, uid, utid) {
        this.authority = UrlUtils_1.UrlUtils.CanonicalizeUri(authority);
        this.clientId = clientId;
        this.scopes = scopes;
        this.homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
    }
    return AccessTokenKey;
}());
exports.AccessTokenKey = AccessTokenKey;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenValue = /** @class */ (function () {
    function AccessTokenValue(accessToken, idToken, expiresIn, homeAccountIdentifier) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.homeAccountIdentifier = homeAccountIdentifier;
    }
    return AccessTokenValue;
}());
exports.AccessTokenValue = AccessTokenValue;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(2);
var AuthenticationParameters_1 = __webpack_require__(16);
var Constants_1 = __webpack_require__(4);
var ClientConfigurationError_1 = __webpack_require__(5);
var StringUtils_1 = __webpack_require__(1);
/**
 * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
 * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
 * @hidden
 */
var ServerRequestParameters = /** @class */ (function () {
    /**
     * Constructor
     * @param authority
     * @param clientId
     * @param scope
     * @param responseType
     * @param redirectUri
     * @param state
     */
    function ServerRequestParameters(authority, clientId, scope, responseType, redirectUri, state) {
        this.authorityInstance = authority;
        this.clientId = clientId;
        if (!scope) {
            this.scopes = [clientId];
        }
        else {
            this.scopes = scope.slice();
        }
        this.nonce = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.state = state && !StringUtils_1.StringUtils.isEmpty(state) ? CryptoUtils_1.CryptoUtils.createNewGuid() + "|" + state : CryptoUtils_1.CryptoUtils.createNewGuid();
        // TODO: Change this to user passed vs generated with the new PR
        this.correlationId = CryptoUtils_1.CryptoUtils.createNewGuid();
        // telemetry information
        this.xClientSku = "MSAL.JS";
        this.xClientVer = Constants_1.libraryVersion();
        this.responseType = responseType;
        this.redirectUri = redirectUri;
    }
    Object.defineProperty(ServerRequestParameters.prototype, "authority", {
        get: function () {
            return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     * @ignore
     *
     * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
     * @param request
     * @param serverAuthenticationRequest
     */
    ServerRequestParameters.prototype.populateQueryParams = function (account, request, adalIdTokenObject) {
        var queryParameters = {};
        if (request) {
            // add the prompt parameter to serverRequestParameters if passed
            if (request.prompt) {
                this.validatePromptParameter(request.prompt);
                this.promptValue = request.prompt;
            }
            // Add claims challenge to serverRequestParameters if passed
            if (request.claimsRequest) {
                AuthenticationParameters_1.validateClaimsRequest(request);
                this.claimsValue = request.claimsRequest;
            }
            // if the developer provides one of these, give preference to developer choice
            if (ServerRequestParameters.isSSOParam(request)) {
                queryParameters = this.constructUnifiedCacheQueryParameter(request, null);
            }
        }
        if (adalIdTokenObject) {
            queryParameters = this.constructUnifiedCacheQueryParameter(null, adalIdTokenObject);
        }
        /*
         * adds sid/login_hint if not populated; populates domain_req, login_req and domain_hint
         * this.logger.verbose("Calling addHint parameters");
         */
        queryParameters = this.addHintParameters(account, queryParameters);
        // sanity check for developer passed extraQueryParameters
        var eQParams;
        if (request) {
            eQParams = this.sanitizeEQParams(request);
        }
        // Populate the extraQueryParameters to be sent to the server
        this.queryParameters = ServerRequestParameters.generateQueryParametersString(queryParameters);
        this.extraQueryParameters = ServerRequestParameters.generateQueryParametersString(eQParams);
    };
    // #region QueryParam helpers
    /**
     * @hidden
     * @ignore
     *
     * Utility to test if valid prompt value is passed in the request
     * @param request
     */
    ServerRequestParameters.prototype.validatePromptParameter = function (prompt) {
        if ([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) < 0) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    /**
     * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
     * in any login() or acquireToken() calls
     * @param idTokenObject
     * @param extraQueryParameters
     * @param sid
     * @param loginHint
     */
    // TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
    ServerRequestParameters.prototype.constructUnifiedCacheQueryParameter = function (request, idTokenObject) {
        // preference order: account > sid > login_hint
        var ssoType;
        var ssoData;
        var serverReqParam = {};
        // if account info is passed, account.sid > account.login_hint
        if (request) {
            if (request.account) {
                var account = request.account;
                if (account.sid) {
                    ssoType = Constants_1.SSOTypes.SID;
                    ssoData = account.sid;
                }
                else if (account.userName) {
                    ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                    ssoData = account.userName;
                }
            }
            // sid from request
            else if (request.sid) {
                ssoType = Constants_1.SSOTypes.SID;
                ssoData = request.sid;
            }
            // loginHint from request
            else if (request.loginHint) {
                ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                ssoData = request.loginHint;
            }
        }
        // adalIdToken retrieved from cache
        else if (idTokenObject) {
            if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
                ssoType = Constants_1.SSOTypes.ID_TOKEN;
                ssoData = idTokenObject.upn;
            }
            else {
                ssoType = Constants_1.SSOTypes.ORGANIZATIONS;
                ssoData = null;
            }
        }
        serverReqParam = this.addSSOParameter(ssoType, ssoData);
        // add the HomeAccountIdentifier info/ domain_hint
        if (request && request.account && request.account.homeAccountIdentifier) {
            serverReqParam = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, request.account.homeAccountIdentifier, serverReqParam);
        }
        return serverReqParam;
    };
    /**
     * @hidden
     *
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint can be one of users/organizations which when added skips the email based discovery process of the user
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
     *
     * @param {@link Account} account - Account for which the token is requested
     * @param queryparams
     * @param {@link ServerRequestParameters}
     * @ignore
     */
    ServerRequestParameters.prototype.addHintParameters = function (account, qParams) {
        /*
         * This is a final check for all queryParams added so far; preference order: sid > login_hint
         * sid cannot be passed along with login_hint or domain_hint, hence we check both are not populated yet in queryParameters
         */
        if (account && !qParams[Constants_1.SSOTypes.SID]) {
            // sid - populate only if login_hint is not already populated and the account has sid
            var populateSID = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.sid && this.promptValue === Constants_1.PromptState.NONE;
            if (populateSID) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.SID, account.sid, qParams);
            }
            // login_hint - account.userName
            else {
                var populateLoginHint = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.userName && !StringUtils_1.StringUtils.isEmpty(account.userName);
                if (populateLoginHint) {
                    qParams = this.addSSOParameter(Constants_1.SSOTypes.LOGIN_HINT, account.userName, qParams);
                }
            }
            var populateReqParams = !qParams[Constants_1.SSOTypes.DOMAIN_REQ] && !qParams[Constants_1.SSOTypes.LOGIN_REQ];
            if (populateReqParams) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, account.homeAccountIdentifier, qParams);
            }
        }
        return qParams;
    };
    /**
     * Add SID to extraQueryParameters
     * @param sid
     */
    ServerRequestParameters.prototype.addSSOParameter = function (ssoType, ssoData, ssoParam) {
        if (!ssoParam) {
            ssoParam = {};
        }
        if (!ssoData) {
            return ssoParam;
        }
        switch (ssoType) {
            case Constants_1.SSOTypes.SID: {
                ssoParam[Constants_1.SSOTypes.SID] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ID_TOKEN: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.LOGIN_HINT: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ORGANIZATIONS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.CONSUMERS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                break;
            }
            case Constants_1.SSOTypes.HOMEACCOUNT_ID: {
                var homeAccountId = ssoData.split(".");
                var uid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[0]);
                var utid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[1]);
                // TODO: domain_req and login_req are not needed according to eSTS team
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = uid;
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = utid;
                if (utid === Constants_1.Constants.consumersUtid) {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                }
                else {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                }
                break;
            }
            case Constants_1.SSOTypes.LOGIN_REQ: {
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.DOMAIN_REQ: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = ssoData;
                break;
            }
        }
        return ssoParam;
    };
    /**
     * @hidden
     * @ignore
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    ServerRequestParameters.prototype.sanitizeEQParams = function (request) {
        var eQParams = request.extraQueryParameters;
        if (!eQParams) {
            return null;
        }
        if (request.claimsRequest) {
            // this.logger.warning("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
            delete eQParams[Constants_1.Constants.claims];
        }
        Constants_1.BlacklistedEQParams.forEach(function (param) {
            if (eQParams[param]) {
                // this.logger.warning("Removed duplicate " + param + " from extraQueryParameters. Please use the " + param + " field in request object.");
                delete eQParams[param];
            }
        });
        return eQParams;
    };
    /**
     * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
     * @param extraQueryParameters
     */
    ServerRequestParameters.generateQueryParametersString = function (queryParameters) {
        var paramsString = null;
        if (queryParameters) {
            Object.keys(queryParameters).forEach(function (key) {
                if (paramsString == null) {
                    paramsString = key + "=" + encodeURIComponent(queryParameters[key]);
                }
                else {
                    paramsString += "&" + key + "=" + encodeURIComponent(queryParameters[key]);
                }
            });
        }
        return paramsString;
    };
    // #endregion
    /**
     * Check to see if there are SSO params set in the Request
     * @param request
     */
    ServerRequestParameters.isSSOParam = function (request) {
        return request && (request.account || request.sid || request.loginHint);
    };
    return ServerRequestParameters;
}());
exports.ServerRequestParameters = ServerRequestParameters;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(2);
var ClientAuthError_1 = __webpack_require__(6);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var ClientInfo = /** @class */ (function () {
    function ClientInfo(rawClientInfo) {
        if (!rawClientInfo || StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
        }
        try {
            var decodedClientInfo = CryptoUtils_1.CryptoUtils.base64Decode(rawClientInfo);
            var clientInfo = JSON.parse(decodedClientInfo);
            if (clientInfo) {
                if (clientInfo.hasOwnProperty("uid")) {
                    this.uid = clientInfo.uid;
                }
                if (clientInfo.hasOwnProperty("utid")) {
                    this.utid = clientInfo.utid;
                }
            }
        }
        catch (e) {
            throw ClientAuthError_1.ClientAuthError.createClientInfoDecodingError(e);
        }
    }
    Object.defineProperty(ClientInfo.prototype, "uid", {
        get: function () {
            return this._uid ? this._uid : "";
        },
        set: function (uid) {
            this._uid = uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientInfo.prototype, "utid", {
        get: function () {
            return this._utid ? this._utid : "";
        },
        set: function (utid) {
            this._utid = utid;
        },
        enumerable: true,
        configurable: true
    });
    return ClientInfo;
}());
exports.ClientInfo = ClientInfo;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientAuthError_1 = __webpack_require__(6);
var TokenUtils_1 = __webpack_require__(17);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var IdToken = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    function IdToken(rawIdToken) {
        if (StringUtils_1.StringUtils.isEmpty(rawIdToken)) {
            throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
        }
        try {
            this.rawIdToken = rawIdToken;
            this.claims = TokenUtils_1.TokenUtils.extractIdToken(rawIdToken);
            if (this.claims) {
                if (this.claims.hasOwnProperty("iss")) {
                    this.issuer = this.claims["iss"];
                }
                if (this.claims.hasOwnProperty("oid")) {
                    this.objectId = this.claims["oid"];
                }
                if (this.claims.hasOwnProperty("sub")) {
                    this.subject = this.claims["sub"];
                }
                if (this.claims.hasOwnProperty("tid")) {
                    this.tenantId = this.claims["tid"];
                }
                if (this.claims.hasOwnProperty("ver")) {
                    this.version = this.claims["ver"];
                }
                if (this.claims.hasOwnProperty("preferred_username")) {
                    this.preferredName = this.claims["preferred_username"];
                }
                if (this.claims.hasOwnProperty("name")) {
                    this.name = this.claims["name"];
                }
                if (this.claims.hasOwnProperty("nonce")) {
                    this.nonce = this.claims["nonce"];
                }
                if (this.claims.hasOwnProperty("exp")) {
                    this.expiration = this.claims["exp"];
                }
                if (this.claims.hasOwnProperty("home_oid")) {
                    this.homeObjectId = this.claims["home_oid"];
                }
                if (this.claims.hasOwnProperty("sid")) {
                    this.sid = this.claims["sid"];
                }
                if (this.claims.hasOwnProperty("cloud_instance_host_name")) {
                    this.cloudInstance = this.claims["cloud_instance_host_name"];
                }
                /* tslint:enable:no-string-literal */
            }
        }
        catch (e) {
            /*
             * TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
             * Need to add better error handling here to account for being unable to decode jwts.
             */
            throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(e);
        }
    }
    return IdToken;
}());
exports.IdToken = IdToken;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Constants_1 = __webpack_require__(4);
var AccessTokenCacheItem_1 = __webpack_require__(35);
var BrowserStorage_1 = __webpack_require__(36);
/**
 * @hidden
 */
var AuthCache = /** @class */ (function (_super) {
    tslib_1.__extends(AuthCache, _super);
    function AuthCache(clientId, cacheLocation, storeAuthStateInCookie) {
        var _this = _super.call(this, cacheLocation) || this;
        _this.clientId = clientId;
        // This is hardcoded to true for now. We may make this configurable in the future
        _this.rollbackEnabled = true;
        _this.migrateCacheEntries(storeAuthStateInCookie);
        return _this;
    }
    /**
     * Support roll back to old cache schema until the next major release: true by default now
     * @param storeAuthStateInCookie
     */
    AuthCache.prototype.migrateCacheEntries = function (storeAuthStateInCookie) {
        var _this = this;
        var persistentCacheSet = Object.keys(Constants_1.PersistentCacheKeys).map(function (key) { return _super.prototype.getItem.call(_this, "msal." + Constants_1.PersistentCacheKeys[key]); });
        var errorCacheSet = Object.keys(Constants_1.ErrorCacheKeys).map(function (key) { return _super.prototype.getItem.call(_this, "msal." + Constants_1.ErrorCacheKeys[key]); });
        var cacheSet = persistentCacheSet.concat(errorCacheSet);
        var keysToMigrate = Object.keys(cacheSet);
        keysToMigrate.forEach(function (cacheKey, index) { return _this.duplicateCacheEntry(cacheKey, cacheSet[index], storeAuthStateInCookie); });
    };
    /**
     * Utility function to help with roll back keys
     * @param newKey
     * @param value
     * @param storeAuthStateInCookie
     */
    AuthCache.prototype.duplicateCacheEntry = function (newKey, value, storeAuthStateInCookie) {
        if (value) {
            this.setItem(newKey, value, storeAuthStateInCookie);
        }
    };
    /**
     * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
     * @param key
     * @param addInstanceId
     */
    AuthCache.prototype.generateCacheKey = function (key, addInstanceId) {
        try {
            // Defined schemas do not need the key appended
            JSON.parse(key);
            return key;
        }
        catch (e) {
            if (key.startsWith("" + Constants_1.Constants.cachePrefix) || key.startsWith(Constants_1.Constants.adalIdToken)) {
                return key;
            }
            return addInstanceId ? Constants_1.Constants.cachePrefix + "." + this.clientId + "." + key : Constants_1.Constants.cachePrefix + "." + key;
        }
    };
    /**
     * add value to storage
     * @param key
     * @param value
     * @param enableCookieStorage
     */
    AuthCache.prototype.setItem = function (key, value, enableCookieStorage) {
        _super.prototype.setItem.call(this, this.generateCacheKey(key, true), value, enableCookieStorage);
        if (this.rollbackEnabled) {
            _super.prototype.setItem.call(this, this.generateCacheKey(key, false), value, enableCookieStorage);
        }
    };
    /**
     * get one item by key from storage
     * @param key
     * @param enableCookieStorage
     */
    AuthCache.prototype.getItem = function (key, enableCookieStorage) {
        return _super.prototype.getItem.call(this, this.generateCacheKey(key, true), enableCookieStorage);
    };
    /**
     * remove value from storage
     * @param key
     */
    AuthCache.prototype.removeItem = function (key) {
        _super.prototype.removeItem.call(this, this.generateCacheKey(key, true));
        if (this.rollbackEnabled) {
            _super.prototype.removeItem.call(this, this.generateCacheKey(key, false));
        }
    };
    /**
     * Reset the cache items
     */
    AuthCache.prototype.resetCacheItems = function () {
        var storage = window[this.cacheLocation];
        var key;
        for (key in storage) {
            // Check if key contains msal prefix; For now, we are clearing all cache items created by MSAL.js
            if (storage.hasOwnProperty(key) && (key.indexOf(Constants_1.Constants.cachePrefix) !== -1)) {
                _super.prototype.removeItem.call(this, key);
                // TODO: Clear cache based on client id (clarify use cases where this is needed)
            }
        }
    };
    /**
     * Reset all temporary cache items
     */
    AuthCache.prototype.resetTempCacheItems = function () {
        var storage = window[this.cacheLocation];
        var key;
        for (key in storage) {
            // Check if key contains msal prefix; For now, we are clearing all cache items created by MSAL.js
            if (Object.keys(Constants_1.TemporaryCacheKeys).indexOf(key) > -1) {
                _super.prototype.removeItem.call(this, key);
            }
        }
    };
    /**
     * Set cookies for IE
     * @param cName
     * @param cValue
     * @param expires
     */
    AuthCache.prototype.setItemCookie = function (cName, cValue, expires) {
        _super.prototype.setItemCookie.call(this, this.generateCacheKey(cName, true), cValue, expires);
        if (this.rollbackEnabled) {
            _super.prototype.setItemCookie.call(this, this.generateCacheKey(cName, false), cValue, expires);
        }
    };
    /**
     * get one item by key from cookies
     * @param cName
     */
    AuthCache.prototype.getItemCookie = function (cName) {
        return _super.prototype.getItemCookie.call(this, this.generateCacheKey(cName, true));
    };
    /**
     * Get all access tokens in the cache
     * @param clientId
     * @param homeAccountIdentifier
     */
    AuthCache.prototype.getAllAccessTokens = function (clientId, homeAccountIdentifier) {
        var _this = this;
        var results = Object.keys(window[this.cacheLocation]).reduce(function (tokens, key) {
            if (window[_this.cacheLocation].hasOwnProperty(key) && key.match(clientId) && key.match(homeAccountIdentifier)) {
                var value = _this.getItem(key);
                if (value) {
                    var newAccessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(JSON.parse(key), JSON.parse(value));
                    return tokens.concat([newAccessTokenCacheItem]);
                }
            }
            return tokens;
        }, []);
        return results;
    };
    /**
     * Remove all temporary cache entries
     * @param state
     */
    AuthCache.prototype.removeAcquireTokenEntries = function (state) {
        var storage = window[this.cacheLocation];
        var key;
        for (key in storage) {
            if (storage.hasOwnProperty(key)) {
                if ((key.indexOf(Constants_1.TemporaryCacheKeys.AUTHORITY) !== -1 || key.indexOf(Constants_1.TemporaryCacheKeys.ACQUIRE_TOKEN_ACCOUNT) !== 1) && (!state || key.indexOf(state) !== -1)) {
                    var resourceDelimSplitKey = key.split(Constants_1.Constants.resourceDelimiter);
                    var keyState = void 0;
                    if (resourceDelimSplitKey.length > 1) {
                        keyState = resourceDelimSplitKey[resourceDelimSplitKey.length - 1];
                    }
                    if (keyState === state && !this.tokenRenewalInProgress(keyState)) {
                        this.removeItem(key);
                        this.removeItem(Constants_1.TemporaryCacheKeys.RENEW_STATUS + state);
                        this.removeItem(Constants_1.TemporaryCacheKeys.STATE_LOGIN);
                        this.removeItem(Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN);
                        this.removeItem(Constants_1.TemporaryCacheKeys.LOGIN_REQUEST);
                        this.removeItem(Constants_1.INTERACTION_STATUS);
                        this.removeItem(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + "|" + state);
                        this.setItemCookie(key, "", -1);
                        this.clearMsalCookie(state);
                    }
                }
            }
        }
    };
    /**
     * Return if the token renewal is still in progress
     * @param stateValue
     */
    AuthCache.prototype.tokenRenewalInProgress = function (stateValue) {
        var renewStatus = this.getItem(Constants_1.TemporaryCacheKeys.RENEW_STATUS + stateValue);
        return !!(renewStatus && renewStatus === Constants_1.RequestStatus.IN_PROGRESS);
    };
    /**
     * Clear all cookies
     */
    AuthCache.prototype.clearMsalCookie = function (state) {
        var nonceKey = state ? Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN + "|" + state : Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN;
        this.clearItemCookie(nonceKey);
        this.clearItemCookie(Constants_1.TemporaryCacheKeys.STATE_LOGIN);
        this.clearItemCookie(Constants_1.TemporaryCacheKeys.LOGIN_REQUEST);
        this.clearItemCookie(Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN);
    };
    /**
     * Create acquireTokenAccountKey to cache account object
     * @param accountId
     * @param state
     */
    AuthCache.generateAcquireTokenAccountKey = function (accountId, state) {
        return "" + Constants_1.TemporaryCacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants_1.Constants.resourceDelimiter + accountId + Constants_1.Constants.resourceDelimiter + state;
    };
    /**
     * Create authorityKey to cache authority
     * @param state
     */
    AuthCache.generateAuthorityKey = function (state) {
        return "" + Constants_1.TemporaryCacheKeys.AUTHORITY + Constants_1.Constants.resourceDelimiter + state;
    };
    return AuthCache;
}(BrowserStorage_1.BrowserStorage));
exports.AuthCache = AuthCache;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenCacheItem = /** @class */ (function () {
    function AccessTokenCacheItem(key, value) {
        this.key = key;
        this.value = value;
    }
    return AccessTokenCacheItem;
}());
exports.AccessTokenCacheItem = AccessTokenCacheItem;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfigurationError_1 = __webpack_require__(5);
var AuthError_1 = __webpack_require__(7);
/**
 * @hidden
 */
var BrowserStorage = /** @class */ (function () {
    function BrowserStorage(cacheLocation) {
        if (!window) {
            throw AuthError_1.AuthError.createNoWindowObjectError("Browser storage class could not find window object");
        }
        var storageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] != null;
        if (!storageSupported) {
            throw ClientConfigurationError_1.ClientConfigurationError.createStorageNotSupportedError(cacheLocation);
        }
        this.cacheLocation = cacheLocation;
    }
    /**
     * add value to storage
     * @param key
     * @param value
     * @param enableCookieStorage
     */
    BrowserStorage.prototype.setItem = function (key, value, enableCookieStorage) {
        window[this.cacheLocation].setItem(key, value);
        if (enableCookieStorage) {
            this.setItemCookie(key, value);
        }
    };
    /**
     * get one item by key from storage
     * @param key
     * @param enableCookieStorage
     */
    BrowserStorage.prototype.getItem = function (key, enableCookieStorage) {
        if (enableCookieStorage && this.getItemCookie(key)) {
            return this.getItemCookie(key);
        }
        return window[this.cacheLocation].getItem(key);
    };
    /**
     * remove value from storage
     * @param key
     */
    BrowserStorage.prototype.removeItem = function (key) {
        return window[this.cacheLocation].removeItem(key);
    };
    /**
     * clear storage (remove all items from it)
     */
    BrowserStorage.prototype.clear = function () {
        return window[this.cacheLocation].clear();
    };
    /**
     * add value to cookies
     * @param cName
     * @param cValue
     * @param expires
     */
    BrowserStorage.prototype.setItemCookie = function (cName, cValue, expires) {
        var cookieStr = cName + "=" + cValue + ";";
        if (expires) {
            var expireTime = this.getCookieExpirationTime(expires);
            cookieStr += "expires=" + expireTime + ";";
        }
        document.cookie = cookieStr;
    };
    /**
     * get one item by key from cookies
     * @param cName
     */
    BrowserStorage.prototype.getItemCookie = function (cName) {
        var name = cName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    /**
     * Clear an item in the cookies by key
     * @param cName
     */
    BrowserStorage.prototype.clearItemCookie = function (cName) {
        this.setItemCookie(cName, "", -1);
    };
    /**
     * Get cookie expiration time
     * @param cookieLifeDays
     */
    BrowserStorage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLifeDays * 24 * 60 * 60 * 1000);
        return expr.toUTCString();
    };
    return BrowserStorage;
}());
exports.BrowserStorage = BrowserStorage;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     * Returns time in seconds for expiration based on string value passed in.
     *
     * @param expiresIn
     */
    TimeUtils.parseExpiresIn = function (expiresIn) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        if (!expiresIn) {
            expiresIn = "3599";
        }
        return parseInt(expiresIn, 10);
    };
    /**
     * return the current time in Unix time. Date.getTime() returns in milliseconds.
     */
    TimeUtils.now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };
    return TimeUtils;
}());
exports.TimeUtils = TimeUtils;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var ErrorUtils = /** @class */ (function () {
    function ErrorUtils() {
    }
    ErrorUtils.throwErrorAndClearTempCache = function (storage, error) {
        storage.resetTempCacheItems();
        return error;
    };
    return ErrorUtils;
}());
exports.ErrorUtils = ErrorUtils;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 */
var ResponseUtils = /** @class */ (function () {
    function ResponseUtils() {
    }
    ResponseUtils.setResponseIdToken = function (originalResponse, idTokenObj) {
        if (!originalResponse) {
            return null;
        }
        else if (!idTokenObj) {
            return originalResponse;
        }
        var exp = Number(idTokenObj.expiration);
        if (exp && !originalResponse.expiresOn) {
            originalResponse.expiresOn = new Date(exp * 1000);
        }
        return tslib_1.__assign({}, originalResponse, { idToken: idTokenObj, idTokenClaims: idTokenObj.claims, uniqueId: idTokenObj.objectId || idTokenObj.subject, tenantId: idTokenObj.tenantId });
    };
    return ResponseUtils;
}());
exports.ResponseUtils = ResponseUtils;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AadAuthority_1 = __webpack_require__(19);
var B2cAuthority_1 = __webpack_require__(21);
var Authority_1 = __webpack_require__(8);
var ClientConfigurationError_1 = __webpack_require__(5);
var UrlUtils_1 = __webpack_require__(3);
var StringUtils_1 = __webpack_require__(1);
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
     * Parse the url and determine the type of authority
     */
    AuthorityFactory.DetectAuthorityFromUrl = function (authorityUrl) {
        authorityUrl = UrlUtils_1.UrlUtils.CanonicalizeUri(authorityUrl);
        var components = UrlUtils_1.UrlUtils.GetUrlComponents(authorityUrl);
        var pathSegments = components.PathSegments;
        switch (pathSegments[0]) {
            case "tfp":
                return Authority_1.AuthorityType.B2C;
            default:
                return Authority_1.AuthorityType.Aad;
        }
    };
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
     */
    AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority) {
        if (StringUtils_1.StringUtils.isEmpty(authorityUrl)) {
            return null;
        }
        var type = AuthorityFactory.DetectAuthorityFromUrl(authorityUrl);
        // Depending on above detection, create the right type.
        switch (type) {
            case Authority_1.AuthorityType.B2C:
                return new B2cAuthority_1.B2cAuthority(authorityUrl, validateAuthority);
            case Authority_1.AuthorityType.Aad:
                return new AadAuthority_1.AadAuthority(authorityUrl, validateAuthority);
            default:
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
    };
    return AuthorityFactory;
}());
exports.AuthorityFactory = AuthorityFactory;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var DefaultEvent_1 = tslib_1.__importDefault(__webpack_require__(42));
// for use in cache events
var MSAL_CACHE_EVENT_VALUE_PREFIX = "msal.token";
var MSAL_CACHE_EVENT_NAME = "msal.cache_event";
var createEventKey = function (event) { return (event.telemetryCorrelationId + "-" + event.eventId + "-" + event.eventName); };
var TelemetryManager = /** @class */ (function () {
    function TelemetryManager(config, telemetryEmitter) {
        // correlation Id to list of events
        this.completedEvents = {};
        // event key to event
        this.inProgressEvents = {};
        // correlation id to map of eventname to count
        this.eventCountByCorrelationId = {};
        // Implement after API EVENT
        this.onlySendFailureTelemetry = false;
        // TODO THROW if bad options
        this.telemetryPlatform = config.platform;
        this.clientId = config.clientId;
        this.onlySendFailureTelemetry = config.onlySendFailureTelemetry;
        /*
         * TODO, when i get to wiring this through, think about what it means if
         * a developer does not implement telem at all, we still instrument, but telemetryEmitter can be
         * optional?
         */
        this.telemetryEmitter = telemetryEmitter;
    }
    TelemetryManager.prototype.startEvent = function (event) {
        if (!this.telemetryEmitter) {
            return;
        }
        var eventKey = createEventKey(event);
        this.inProgressEvents[eventKey] = event;
    };
    TelemetryManager.prototype.stopEvent = function (event) {
        var eventKey = createEventKey(event);
        if (!this.telemetryEmitter || !this.inProgressEvents[eventKey]) {
            return;
        }
        event.stop();
        this.incrementEventCount(event);
        var completedEvents = this.completedEvents[event.telemetryCorrelationId];
        this.completedEvents[event.telemetryCorrelationId] = (completedEvents || []).concat([event]);
        delete this.inProgressEvents[eventKey];
    };
    TelemetryManager.prototype.flush = function (correlationId) {
        var _this = this;
        // If there is only unfinished events should this still return them?
        if (!this.telemetryEmitter || !this.completedEvents[correlationId]) {
            return;
        }
        var orphanedEvents = this.getOrphanedEvents(correlationId);
        orphanedEvents.forEach(function (event) { return _this.incrementEventCount(event); });
        var eventsToFlush = this.completedEvents[correlationId].concat(orphanedEvents);
        delete this.completedEvents[correlationId];
        var eventCountsToFlush = this.eventCountByCorrelationId[correlationId];
        delete this.eventCountByCorrelationId[correlationId];
        // TODO add funcitonality for onlyFlushFailures after implementing api event? ??
        if (!eventsToFlush || !eventsToFlush.length) {
            return;
        }
        var defaultEvent = new DefaultEvent_1.default(this.telemetryPlatform, correlationId, this.clientId, eventCountsToFlush);
        var eventsWithDefaultEvent = eventsToFlush.concat([defaultEvent]);
        this.telemetryEmitter(eventsWithDefaultEvent.map(function (e) { return e.get(); }));
    };
    TelemetryManager.prototype.incrementEventCount = function (event) {
        var _a;
        /*
         * TODO, name cache event different?
         * if type is cache event, change name
         */
        var eventName = event.eventName;
        var eventCount = this.eventCountByCorrelationId[event.telemetryCorrelationId];
        if (!eventCount) {
            this.eventCountByCorrelationId[event.telemetryCorrelationId] = (_a = {},
                _a[eventName] = 1,
                _a);
        }
        else {
            eventCount[eventName] = eventCount[eventName] ? eventCount[eventName] + 1 : 1;
        }
    };
    TelemetryManager.prototype.getOrphanedEvents = function (correlationId) {
        var _this = this;
        return Object.keys(this.inProgressEvents)
            .reduce(function (memo, eventKey) {
            if (eventKey.indexOf(correlationId) !== -1) {
                var event = _this.inProgressEvents[eventKey];
                delete _this.inProgressEvents[eventKey];
                return memo.concat([event]);
            }
            return memo;
        }, []);
    };
    return TelemetryManager;
}());
exports.default = TelemetryManager;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(9);
var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(43));
var TelemetryUtils_1 = __webpack_require__(25);
var DefaultEvent = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultEvent, _super);
    // TODO Platform Type
    function DefaultEvent(platform, correlationId, clientId, eventCount) {
        var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("default_event"), correlationId) || this;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("client_id")] = clientId;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_plaform")] = platform.sdk;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_version")] = platform.sdkVersion;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_name")] = platform.applicationName;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_version")] = platform.applicationVersion;
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.UiEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("ui_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.HttpEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("http_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.CacheEventCountConstStrKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("cache_event"), eventCount);
        return _this;
        // / Device id?
    }
    DefaultEvent.prototype.getEventCount = function (eventName, eventCount) {
        if (!eventCount[eventName]) {
            return 0;
        }
        return eventCount[eventName];
    };
    return DefaultEvent;
}(TelemetryEvent_1.default));
exports.default = DefaultEvent;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(9);
var TelemetryConstants_2 = __webpack_require__(9);
var TelemetryUtils_1 = __webpack_require__(25);
var CryptoUtils_1 = __webpack_require__(2);
var TelemetryEvent = /** @class */ (function () {
    function TelemetryEvent(eventName, correlationId) {
        var _a;
        this.startTimestamp = Date.now();
        this.eventId = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.event = (_a = {},
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)] = eventName,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.START_TIME_KEY)] = this.startTimestamp,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = -1,
            _a["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = correlationId,
            _a);
    }
    TelemetryEvent.prototype.setElapsedTime = function (time) {
        this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = time;
    };
    TelemetryEvent.prototype.stop = function () {
        // Set duration of event
        this.setElapsedTime(+Date.now() - +this.startTimestamp);
    };
    Object.defineProperty(TelemetryEvent.prototype, "telemetryCorrelationId", {
        get: function () {
            return this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey];
        },
        set: function (value) {
            this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TelemetryEvent.prototype, "eventName", {
        get: function () {
            return this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)];
        },
        enumerable: true,
        configurable: true
    });
    TelemetryEvent.prototype.get = function () {
        return tslib_1.__assign({}, this.event, { eventId: this.eventId });
    };
    return TelemetryEvent;
}());
exports.default = TelemetryEvent;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Handles Message cache operations
 * @hidden
 */
var MessageCache = /** @class */ (function () {
    /**
     * initialize the class with Storage type
     * @param cacheStorage
     */
    function MessageCache(cacheStorage) {
        this.storage = null;
        this.storage = cacheStorage;
    }
    /**
     * Writes the message to the cache
     * @param key
     * @param data
     */
    MessageCache.prototype.write = function (key, data) {
        this.storage.setItem(key, data);
    };
    /**
     * retrieves the message from the cache
     * @param key
     */
    MessageCache.prototype.read = function (key) {
        return this.storage.getItem(key);
    };
    /**
     * erase the message from the cache
     * @param key
     */
    MessageCache.prototype.erase = function (key) {
        this.storage.removeItem(key);
    };
    return MessageCache;
}());
exports.MessageCache = MessageCache;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var MessageHelper_1 = __webpack_require__(13);
var WindowUtils_1 = __webpack_require__(10);
var MessageHelper_2 = __webpack_require__(13);
var MessageDispatcher_1 = __webpack_require__(26);
var MessageListener = /** @class */ (function () {
    /**
     * initialize the message listener, and register the callback to process messages
     */
    function MessageListener(messageCache, logger, topFrameOrigin, embeddedFrameOrigin) {
        this.messageCache = messageCache;
        this.logger = logger;
        this.topFrameOrigin = topFrameOrigin;
        this.embeddedFrameOrigin = embeddedFrameOrigin;
        // listen to all incoming messages
        window.addEventListener("message", this.receiveMessage, false);
    }
    MessageListener.prototype.setCallBack = function (consentNeeded, callback) {
        this.consentNeeded = consentNeeded;
        this.iframeRedirectCallback = callback;
    };
    /**
     * top frame application calls this function to ack to proceed
     * @param message
     */
    MessageListener.prototype.processIframeRedirectCallback = function (url) {
        var _this = this;
        return function () { return WindowUtils_1.WindowUtils.navigateWindow(url, _this.logger); };
    };
    /**
     * Parses the messages receieved
     * This will be a unique handler per message, we will allow only one active request at a time
     * @param event
     */
    MessageListener.prototype.receiveMessage = function (event) {
        var windowType = MessageHelper_1.MessageHelper.currentWindow();
        var receivedMessage = tslib_1.__assign({}, event.data);
        switch (windowType) {
            // Top framed application: handles the delegation on behalf of the iframed app
            case MessageHelper_1.WindowType.TOP_FRAME: {
                switch (receivedMessage.type) {
                    case MessageHelper_2.MessageType.REDIRECT_REQUEST: {
                        // acknowlege the redirect on behalf of the iframed app by sending the current location
                        var message = MessageHelper_1.MessageHelper.buildMessage(MessageHelper_2.MessageType.URL_TOP_FRAME, window.location.href);
                        MessageDispatcher_1.MessageDispatcher.dispatchMessage(event.source, message, this.embeddedFrameOrigin);
                        break;
                    }
                    case MessageHelper_2.MessageType.URL_NAVIGATE: {
                        // if the response is the URL to navigate for token acquisition, navigate to STS
                        if (receivedMessage.type === MessageHelper_2.MessageType.URL_NAVIGATE) {
                            this.logger.info("navigating to the Service on behalf of the iframed app");
                            if (this.consentNeeded) {
                                this.iframeRedirectCallback(this.processIframeRedirectCallback(receivedMessage.data));
                            }
                            else {
                                WindowUtils_1.WindowUtils.navigateWindow(receivedMessage.data, this.logger);
                            }
                        }
                        break;
                    }
                }
            }
            // embedded (in an iframe) application
            case MessageHelper_1.WindowType.IFRAME: {
                // check the origin, should match window.top always; message channel may be more secure
                if (window.top != event.source) {
                    this.logger.warning("The message origin is not verified");
                    return;
                }
                if (receivedMessage.type === MessageHelper_2.MessageType.URL_TOP_FRAME) {
                    // record the ack from the top frame - store the URL
                    this.messageCache.write(MessageHelper_2.MessageType.URL_TOP_FRAME, receivedMessage.data);
                    // respond with the URL to navigate for token acquisition
                    var urlNavigate = this.messageCache.read(MessageHelper_2.MessageType.URL_NAVIGATE);
                    var message = MessageHelper_1.MessageHelper.buildMessage(MessageHelper_2.MessageType.URL_NAVIGATE, urlNavigate);
                    MessageDispatcher_1.MessageDispatcher.dispatchMessage(event.source, message, this.topFrameOrigin);
                }
                break;
            }
        }
    };
    return MessageListener;
}());
exports.MessageListener = MessageListener;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01zYWwvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL01zYWwvLi9zcmMvdXRpbHMvU3RyaW5nVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9DcnlwdG9VdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1VybFV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdXRpbHMvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQ2xpZW50QXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvYXV0aG9yaXR5L0F1dGhvcml0eS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3RlbGVtZXRyeS9UZWxlbWV0cnlDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9XaW5kb3dVdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0xvZ2dlci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL1NlcnZlckVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvbWVzc2FnaW5nL01lc3NhZ2VIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Vc2VyQWdlbnRBcHBsaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1Njb3BlU2V0LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdXRpbHMvVG9rZW5VdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FjY291bnQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9hdXRob3JpdHkvQWFkQXV0aG9yaXR5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvWEhSQ2xpZW50LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvYXV0aG9yaXR5L0IyY0F1dGhvcml0eS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQXV0aFJlc3BvbnNlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdGVsZW1ldHJ5L1RlbGVtZXRyeVV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvbWVzc2FnaW5nL01lc3NhZ2VEaXNwYXRjaGVyLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9jYWNoZS9BY2Nlc3NUb2tlbktleS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2NhY2hlL0FjY2Vzc1Rva2VuVmFsdWUudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9TZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0NsaWVudEluZm8udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9JZFRva2VuLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvY2FjaGUvQXV0aENhY2hlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvY2FjaGUvQWNjZXNzVG9rZW5DYWNoZUl0ZW0udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9jYWNoZS9Ccm93c2VyU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1RpbWVVdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL0Vycm9yVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9SZXNwb25zZVV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvYXV0aG9yaXR5L0F1dGhvcml0eUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5TWFuYWdlci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3RlbGVtZXRyeS9EZWZhdWx0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5RXZlbnQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9tZXNzYWdpbmcvTWVzc2FnZUNhY2hlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvbWVzc2FnaW5nL01lc3NhZ2VMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFB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Q0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDdEYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDbkUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQUMsU0FBUztpQkFDOUI7Z0JBQ0QsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFBRTtvQkFBUztnQkFBRSxDQUFDLEdBQUcsQ0FBQyxH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QUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUN2RixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsY0FBYyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEgsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxSSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7UUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUFFLENBQUMsQ0FBQztJQUNsRixTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFD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QztJQUNMLHNCQUFDO0FBQUQsQ0FBQztBQW5HWSwwQ0FBZSIsImZpbGUiOiJtc2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJNc2FsXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1zYWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTXNhbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI3KTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWxzIHtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIHN0cmluZyBpcyBlbXB0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0clxuICAgICAqL1xuICAgIHN0YXRpYyBpc0VtcHR5KHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhc3RyIHx8IDAgPT09IHN0ci5sZW5ndGgpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENyeXB0b1V0aWxzIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmFuZG9tIEdVSUQgLSB1c2VkIHRvIHBvcHVsYXRlIHN0YXRlP1xuICAgICAqIEByZXR1cm5zIHN0cmluZyAoR1VJRClcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlTmV3R3VpZCgpOiBzdHJpbmcge1xuICAgICAgICAvKlxuICAgICAgICAgKiBSRkM0MTIyOiBUaGUgdmVyc2lvbiA0IFVVSUQgaXMgbWVhbnQgZm9yIGdlbmVyYXRpbmcgVVVJRHMgZnJvbSB0cnVseS1yYW5kb20gb3JcbiAgICAgICAgICogcHNldWRvLXJhbmRvbSBudW1iZXJzLlxuICAgICAgICAgKiBUaGUgYWxnb3JpdGhtIGlzIGFzIGZvbGxvd3M6XG4gICAgICAgICAqICAgICBTZXQgdGhlIHR3byBtb3N0IHNpZ25pZmljYW50IGJpdHMgKGJpdHMgNiBhbmQgNykgb2YgdGhlXG4gICAgICAgICAqICAgICAgICBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIHplcm8gYW5kIG9uZSwgcmVzcGVjdGl2ZWx5LlxuICAgICAgICAgKiAgICAgU2V0IHRoZSBmb3VyIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoYml0cyAxMiB0aHJvdWdoIDE1KSBvZiB0aGVcbiAgICAgICAgICogICAgICAgIHRpbWVfaGlfYW5kX3ZlcnNpb24gZmllbGQgdG8gdGhlIDQtYml0IHZlcnNpb24gbnVtYmVyIGZyb21cbiAgICAgICAgICogICAgICAgIFNlY3Rpb24gNC4xLjMuIFZlcnNpb240XG4gICAgICAgICAqICAgICBTZXQgYWxsIHRoZSBvdGhlciBiaXRzIHRvIHJhbmRvbWx5IChvciBwc2V1ZG8tcmFuZG9tbHkpIGNob3NlblxuICAgICAgICAgKiAgICAgdmFsdWVzLlxuICAgICAgICAgKiBVVUlEICAgICAgICAgICAgICAgICAgID0gdGltZS1sb3cgXCItXCIgdGltZS1taWQgXCItXCJ0aW1lLWhpZ2gtYW5kLXZlcnNpb24gXCItXCJjbG9jay1zZXEtcmVzZXJ2ZWQgYW5kIGxvdygyaGV4T2N0ZXQpXCItXCIgbm9kZVxuICAgICAgICAgKiB0aW1lLWxvdyAgICAgICAgICAgICAgID0gNGhleE9jdGV0XG4gICAgICAgICAqIHRpbWUtbWlkICAgICAgICAgICAgICAgPSAyaGV4T2N0ZXRcbiAgICAgICAgICogdGltZS1oaWdoLWFuZC12ZXJzaW9uICA9IDJoZXhPY3RldFxuICAgICAgICAgKiBjbG9jay1zZXEtYW5kLXJlc2VydmVkID0gaGV4T2N0ZXQ6XG4gICAgICAgICAqIGNsb2NrLXNlcS1sb3cgICAgICAgICAgPSBoZXhPY3RldFxuICAgICAgICAgKiBub2RlICAgICAgICAgICAgICAgICAgID0gNmhleE9jdGV0XG4gICAgICAgICAqIEZvcm1hdDogeHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XG4gICAgICAgICAqIHkgY291bGQgYmUgMTAwMCwgMTAwMSwgMTAxMCwgMTAxMSBzaW5jZSBtb3N0IHNpZ25pZmljYW50IHR3byBiaXRzIG5lZWRzIHRvIGJlIDEwXG4gICAgICAgICAqIHkgdmFsdWVzIGFyZSA4LCA5LCBBLCBCXG4gICAgICAgICAqL1xuXG4gICAgICAgIGNvbnN0IGNyeXB0b09iajogQ3J5cHRvID0gd2luZG93LmNyeXB0bzsgLy8gZm9yIElFIDExXG4gICAgICAgIGlmIChjcnlwdG9PYmogJiYgY3J5cHRvT2JqLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICAgICAgY3J5cHRvT2JqLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuXG4gICAgICAgICAgICAvLyBidWZmZXJbNl0gYW5kIGJ1ZmZlcls3XSByZXByZXNlbnRzIHRoZSB0aW1lX2hpX2FuZF92ZXJzaW9uIGZpZWxkLiBXZSB3aWxsIHNldCB0aGUgZm91ciBtb3N0IHNpZ25pZmljYW50IGJpdHMgKDQgdGhyb3VnaCA3KSBvZiBidWZmZXJbNl0gdG8gcmVwcmVzZW50IGRlY2ltYWwgbnVtYmVyIDQgKFVVSUQgdmVyc2lvbiBudW1iZXIpLlxuICAgICAgICAgICAgYnVmZmVyWzZdIHw9IDB4NDA7IC8vIGJ1ZmZlcls2XSB8IDAxMDAwMDAwIHdpbGwgc2V0IHRoZSA2IGJpdCB0byAxLlxuICAgICAgICAgICAgYnVmZmVyWzZdICY9IDB4NGY7IC8vIGJ1ZmZlcls2XSAmIDAxMDAxMTExIHdpbGwgc2V0IHRoZSA0LCA1LCBhbmQgNyBiaXQgdG8gMCBzdWNoIHRoYXQgYml0cyA0LTcgPT0gMDEwMCA9IFwiNFwiLlxuXG4gICAgICAgICAgICAvLyBidWZmZXJbOF0gcmVwcmVzZW50cyB0aGUgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZCBmaWVsZC4gV2Ugd2lsbCBzZXQgdGhlIHR3byBtb3N0IHNpZ25pZmljYW50IGJpdHMgKDYgYW5kIDcpIG9mIHRoZSBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIHplcm8gYW5kIG9uZSwgcmVzcGVjdGl2ZWx5LlxuICAgICAgICAgICAgYnVmZmVyWzhdIHw9IDB4ODA7IC8vIGJ1ZmZlcls4XSB8IDEwMDAwMDAwIHdpbGwgc2V0IHRoZSA3IGJpdCB0byAxLlxuICAgICAgICAgICAgYnVmZmVyWzhdICY9IDB4YmY7IC8vIGJ1ZmZlcls4XSAmIDEwMTExMTExIHdpbGwgc2V0IHRoZSA2IGJpdCB0byAwLlxuXG4gICAgICAgICAgICByZXR1cm4gQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclswXSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzFdKVxuICAgICAgICAgICAgICAgICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsyXSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzNdKVxuICAgICAgICAgICAgICAgICsgXCItXCIgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzRdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNV0pXG4gICAgICAgICAgICAgICAgKyBcIi1cIiArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNl0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls3XSlcbiAgICAgICAgICAgICAgICArIFwiLVwiICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls4XSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzldKVxuICAgICAgICAgICAgICAgICsgXCItXCIgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzEwXSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzExXSlcbiAgICAgICAgICAgICAgICArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTJdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTNdKVxuICAgICAgICAgICAgICAgICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxNF0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxNV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZ3VpZEhvbGRlcjogc3RyaW5nID0gXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIjtcbiAgICAgICAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XG4gICAgICAgICAgICBsZXQgcjogbnVtYmVyID0gMDtcbiAgICAgICAgICAgIGxldCBndWlkUmVzcG9uc2U6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChndWlkSG9sZGVyW2ldICE9PSBcIi1cIiAmJiBndWlkSG9sZGVyW2ldICE9PSBcIjRcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBlYWNoIHggYW5kIHkgbmVlZHMgdG8gYmUgcmFuZG9tXG4gICAgICAgICAgICAgICAgICAgIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ3VpZEhvbGRlcltpXSA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGhleFtyXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGd1aWRIb2xkZXJbaV0gPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb2NrLXNlcS1hbmQtcmVzZXJ2ZWQgZmlyc3QgaGV4IGlzIGZpbHRlcmVkIGFuZCByZW1haW5pbmcgaGV4IHZhbHVlcyBhcmUgcmFuZG9tXG4gICAgICAgICAgICAgICAgICAgIHIgJj0gMHgzOyAvLyBiaXQgYW5kIHdpdGggMDAxMSB0byBzZXQgcG9zIDIgdG8gemVybyA/MD8/XG4gICAgICAgICAgICAgICAgICAgIHIgfD0gMHg4OyAvLyBzZXQgcG9zIDMgdG8gMSBhcyAxPz8/XG4gICAgICAgICAgICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBoZXhbcl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGd1aWRIb2xkZXJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGd1aWRSZXNwb25zZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY2ltYWwgdG8gSGV4XG4gICAgICpcbiAgICAgKiBAcGFyYW0gbnVtXG4gICAgICovXG4gICAgc3RhdGljIGRlY2ltYWxUb0hleChudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBoZXg6IHN0cmluZyA9IG51bS50b1N0cmluZygxNik7XG4gICAgICAgIHdoaWxlIChoZXgubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgaGV4ID0gXCIwXCIgKyBoZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhleDtcbiAgICB9XG5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZyNTb2x1dGlvbl80XyVFMiU4MCU5M19lc2NhcGluZ190aGVfc3RyaW5nX2JlZm9yZV9lbmNvZGluZ19pdFxuXG4gICAgLyoqXG4gICAgICogZW5jb2Rpbmcgc3RyaW5nIHRvIGJhc2U2NCAtIHBsYXRmb3JtIHNwZWNpZmljIGNoZWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKi9cbiAgICBzdGF0aWMgYmFzZTY0RW5jb2RlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csXG4gICAgICAgICAgICBmdW5jdGlvbiB0b1NvbGlkQnl0ZXMobWF0Y2gsIHAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoTnVtYmVyKFwiMHhcIiArIHAxKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlcyBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbnB1dFxuICAgICAqL1xuICAgIHN0YXRpYyBiYXNlNjREZWNvZGUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBlbmNvZGVkU3RyaW5nID0gaW5wdXQucmVwbGFjZSgvLS9nLCBcIitcIikucmVwbGFjZSgvXy9nLCBcIi9cIik7XG4gICAgICAgIHN3aXRjaCAoZW5jb2RlZFN0cmluZy5sZW5ndGggJSA0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZW5jb2RlZFN0cmluZyArPSBcIj09XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZW5jb2RlZFN0cmluZyArPSBcIj1cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBiYXNlNjQgc3RyaW5nXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhdG9iKGVuY29kZWRTdHJpbmcpLnNwbGl0KFwiXCIpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIFwiJVwiICsgKFwiMDBcIiArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICAgICAgfSkuam9pbihcIlwiKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGVzZXJpYWxpemUgYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZShxdWVyeTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgbGV0IG1hdGNoOiBBcnJheTxzdHJpbmc+OyAvLyBSZWdleCBmb3IgcmVwbGFjaW5nIGFkZGl0aW9uIHN5bWJvbCB3aXRoIGEgc3BhY2VcbiAgICAgICAgY29uc3QgcGwgPSAvXFwrL2c7XG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IC8oW14mPV0rKT0oW14mXSopL2c7XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChzOiBzdHJpbmcpID0+IGRlY29kZVVSSUNvbXBvbmVudChzLnJlcGxhY2UocGwsIFwiIFwiKSk7XG4gICAgICAgIGNvbnN0IG9iajoge30gPSB7fTtcbiAgICAgICAgbWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSk7XG4gICAgICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICAgICAgb2JqW2RlY29kZShtYXRjaFsxXSldID0gZGVjb2RlKG1hdGNoWzJdKTtcbiAgICAgICAgICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuLi9JVXJpXCI7XG5pbXBvcnQgeyBDb25zdGFudHMsIFNTT1R5cGVzLCBTZXJ2ZXJIYXNoUGFyYW1LZXlzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyB9IGZyb20gXCIuLi9TZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi4vU2NvcGVTZXRcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vU3RyaW5nVXRpbHNcIjtcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vQ3J5cHRvVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBVcmxVdGlscyB7XG5cbiAgICAvKipcbiAgICAgKiBnZW5lcmF0ZXMgdGhlIFVSTCB3aXRoIFF1ZXJ5U3RyaW5nIFBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZU5hdmlnYXRlVXJsKHNlcnZlclJlcXVlc3RQYXJhbXM6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5jcmVhdGVOYXZpZ2F0aW9uVXJsU3RyaW5nKHNlcnZlclJlcXVlc3RQYXJhbXMpO1xuICAgICAgICBsZXQgYXV0aEVuZHBvaW50OiBzdHJpbmcgPSBzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmF1dGhvcml0eUluc3RhbmNlLkF1dGhvcml6YXRpb25FbmRwb2ludDtcbiAgICAgICAgLy8gaWYgdGhlIGVuZHBvaW50IGFscmVhZHkgaGFzIHF1ZXJ5cGFyYW1zLCBsZXRzIGFkZCB0byBpdCwgb3RoZXJ3aXNlIGFkZCB0aGUgZmlyc3Qgb25lXG4gICAgICAgIGlmIChhdXRoRW5kcG9pbnQuaW5kZXhPZihcIj9cIikgPCAwKSB7XG4gICAgICAgICAgICBhdXRoRW5kcG9pbnQgKz0gXCI/XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdXRoRW5kcG9pbnQgKz0gXCImXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXF1ZXN0VXJsOiBzdHJpbmcgPSBgJHthdXRoRW5kcG9pbnR9JHtzdHIuam9pbihcIiZcIil9YDtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgdGhlIGFycmF5IG9mIGFsbCBRdWVyeVN0cmluZ1BhcmFtcyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZU5hdmlnYXRpb25VcmxTdHJpbmcoc2VydmVyUmVxdWVzdFBhcmFtczogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3Qgc2NvcGVzID0gc2VydmVyUmVxdWVzdFBhcmFtcy5zY29wZXM7XG5cbiAgICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKHNlcnZlclJlcXVlc3RQYXJhbXMuY2xpZW50SWQpID09PSAtMSkge1xuICAgICAgICAgICAgc2NvcGVzLnB1c2goc2VydmVyUmVxdWVzdFBhcmFtcy5jbGllbnRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICAgIHN0ci5wdXNoKFwicmVzcG9uc2VfdHlwZT1cIiArIHNlcnZlclJlcXVlc3RQYXJhbXMucmVzcG9uc2VUeXBlKTtcblxuICAgICAgICB0aGlzLnRyYW5zbGF0ZWNsaWVudElkVXNlZEluU2NvcGUoc2NvcGVzLCBzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsaWVudElkKTtcbiAgICAgICAgc3RyLnB1c2goXCJzY29wZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChTY29wZVNldC5wYXJzZVNjb3BlKHNjb3BlcykpKTtcbiAgICAgICAgc3RyLnB1c2goXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5jbGllbnRJZCkpO1xuICAgICAgICBzdHIucHVzaChcInJlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnJlZGlyZWN0VXJpKSk7XG5cbiAgICAgICAgc3RyLnB1c2goXCJzdGF0ZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnN0YXRlKSk7XG4gICAgICAgIHN0ci5wdXNoKFwibm9uY2U9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5ub25jZSkpO1xuXG4gICAgICAgIHN0ci5wdXNoKFwiY2xpZW50X2luZm89MVwiKTtcbiAgICAgICAgc3RyLnB1c2goYHgtY2xpZW50LVNLVT0ke3NlcnZlclJlcXVlc3RQYXJhbXMueENsaWVudFNrdX1gKTtcbiAgICAgICAgc3RyLnB1c2goYHgtY2xpZW50LVZlcj0ke3NlcnZlclJlcXVlc3RQYXJhbXMueENsaWVudFZlcn1gKTtcbiAgICAgICAgaWYgKHNlcnZlclJlcXVlc3RQYXJhbXMucHJvbXB0VmFsdWUpIHtcbiAgICAgICAgICAgIHN0ci5wdXNoKFwicHJvbXB0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMucHJvbXB0VmFsdWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsYWltc1ZhbHVlKSB7XG4gICAgICAgICAgICBzdHIucHVzaChcImNsYWltcz1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsYWltc1ZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VydmVyUmVxdWVzdFBhcmFtcy5xdWVyeVBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIHN0ci5wdXNoKHNlcnZlclJlcXVlc3RQYXJhbXMucXVlcnlQYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmV4dHJhUXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBzdHIucHVzaChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmV4dHJhUXVlcnlQYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ci5wdXNoKFwiY2xpZW50LXJlcXVlc3QtaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5jb3JyZWxhdGlvbklkKSk7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYXBwZW5kIHRoZSByZXF1aXJlZCBzY29wZXM6IGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1iYXNpYy0xXzAuaHRtbCNTY29wZXNcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgdHJhbnNsYXRlY2xpZW50SWRVc2VkSW5TY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4sIGNsaWVudElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2xpZW50SWRJbmRleDogbnVtYmVyID0gc2NvcGVzLmluZGV4T2YoY2xpZW50SWQpO1xuICAgICAgICBpZiAoY2xpZW50SWRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBzY29wZXMuc3BsaWNlKGNsaWVudElkSW5kZXgsIDEpO1xuICAgICAgICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKFwib3BlbmlkXCIpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHNjb3Blcy5wdXNoKFwib3BlbmlkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKFwicHJvZmlsZVwiKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzY29wZXMucHVzaChcInByb2ZpbGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGN1cnJlbnQgd2luZG93IFVSTCBhcyByZWRpcmVjdCB1cmlcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q3VycmVudFVyaSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdLnNwbGl0KFwiI1wiKVswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHVybCBsaWtlIGh0dHBzOi8vYTpiL2NvbW1vbi9kP2U9ZiNnLCBhbmQgYSB0ZW5hbnRJZCwgcmV0dXJucyBodHRwczovL2E6Yi90ZW5hbnRJZC9kXG4gICAgICogQHBhcmFtIGhyZWYgVGhlIHVybFxuICAgICAqIEBwYXJhbSB0ZW5hbnRJZCBUaGUgdGVuYW50IGlkIHRvIHJlcGxhY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVwbGFjZVRlbmFudFBhdGgodXJsOiBzdHJpbmcsIHRlbmFudElkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB1cmwgPSB1cmwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gdGhpcy5HZXRVcmxDb21wb25lbnRzKHVybCk7XG4gICAgICAgIGNvbnN0IHBhdGhBcnJheSA9IHVybE9iamVjdC5QYXRoU2VnbWVudHM7XG4gICAgICAgIGlmICh0ZW5hbnRJZCAmJiAocGF0aEFycmF5Lmxlbmd0aCAhPT0gMCAmJiAocGF0aEFycmF5WzBdID09PSBDb25zdGFudHMuY29tbW9uIHx8IHBhdGhBcnJheVswXSA9PT0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUykpKSB7XG4gICAgICAgICAgICBwYXRoQXJyYXlbMF0gPSB0ZW5hbnRJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RBdXRob3JpdHlVcmlGcm9tT2JqZWN0KHVybE9iamVjdCwgcGF0aEFycmF5KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3Q6IElVcmksIHBhdGhBcnJheTogc3RyaW5nW10pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ2Fub25pY2FsaXplVXJpKHVybE9iamVjdC5Qcm90b2NvbCArIFwiLy9cIiArIHVybE9iamVjdC5Ib3N0TmFtZUFuZFBvcnQgKyBcIi9cIiArIHBhdGhBcnJheS5qb2luKFwiL1wiKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIG91dCB0aGUgY29tcG9uZW50cyBmcm9tIGEgdXJsIHN0cmluZy5cbiAgICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgdmFyaW91cyBjb21wb25lbnRzLiBQbGVhc2UgY2FjaGUgdGhpcyB2YWx1ZSBpbnN0ZWQgb2YgY2FsbGluZyB0aGlzIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIHVybC5cbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VXJsQ29tcG9uZW50cyh1cmw6IHN0cmluZyk6IElVcmkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgdGhyb3cgXCJVcmwgcmVxdWlyZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2N1cnRpc3ovMTExMzliMmNmY2FlZjRhMjYxZTBcbiAgICAgICAgY29uc3QgcmVnRXggPSBSZWdFeHAoXCJeKChbXjovPyNdKyk6KT8oLy8oW14vPyNdKikpPyhbXj8jXSopKFxcXFw/KFteI10qKSk/KCMoLiopKT9cIik7XG5cbiAgICAgICAgY29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXgpO1xuXG4gICAgICAgIGlmICghbWF0Y2ggfHwgbWF0Y2gubGVuZ3RoIDwgNikge1xuICAgICAgICAgICAgdGhyb3cgXCJWYWxpZCB1cmwgcmVxdWlyZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybENvbXBvbmVudHMgPSA8SVVyaT57XG4gICAgICAgICAgICBQcm90b2NvbDogbWF0Y2hbMV0sXG4gICAgICAgICAgICBIb3N0TmFtZUFuZFBvcnQ6IG1hdGNoWzRdLFxuICAgICAgICAgICAgQWJzb2x1dGVQYXRoOiBtYXRjaFs1XVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBwYXRoU2VnbWVudHMgPSB1cmxDb21wb25lbnRzLkFic29sdXRlUGF0aC5zcGxpdChcIi9cIik7XG4gICAgICAgIHBhdGhTZWdtZW50cyA9IHBhdGhTZWdtZW50cy5maWx0ZXIoKHZhbCkgPT4gdmFsICYmIHZhbC5sZW5ndGggPiAwKTsgLy8gcmVtb3ZlIGVtcHR5IGVsZW1lbnRzXG4gICAgICAgIHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzO1xuICAgICAgICByZXR1cm4gdXJsQ29tcG9uZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHVybCBvciBwYXRoLCBhcHBlbmQgYSB0cmFpbGluZyBzbGFzaCBpZiBvbmUgZG9lc250IGV4aXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgc3RhdGljIENhbm9uaWNhbGl6ZVVyaSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHVybCA9IHVybC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVybCAmJiAhVXJsVXRpbHMuZW5kc1dpdGgodXJsLCBcIi9cIikpIHtcbiAgICAgICAgICAgIHVybCArPSBcIi9cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgdXJsIGVuZHMgd2l0aCB0aGUgc3VmZml4XG4gICAgICogUmVxdWlyZWQgYmVjYXVzZSB3ZSBhcmUgY29tcGlsaW5nIGZvciBlczUgaW5zdGVhZCBvZiBlczZcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIHN0clxuICAgICAqL1xuICAgIC8vIFRPRE86IFJlbmFtZSB0aGlzLCBub3QgY2xlYXIgd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBkb1xuICAgIHN0YXRpYyBlbmRzV2l0aCh1cmw6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF1cmwgfHwgIXN1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybC5pbmRleE9mKHN1ZmZpeCwgdXJsLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVdGlscyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGxvZ2luX2hpbnQgYW5kIGRvbWFpbl9oaW50IGZyb20gdGhlIGkvcCBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyB1cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcih1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoXCIoXFxcXCZcIiArIG5hbWUgKyBcIj0pW15cXCZdK1wiKTtcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xuICAgICAgICAvLyBuYW1lPXZhbHVlJlxuICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBuYW1lICsgXCI9KVteXFwmXSsmXCIpO1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgIC8vIG5hbWU9dmFsdWVcbiAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIFJldHVybnMgdGhlIGFuY2hvciBwYXJ0KCMpIG9mIHRoZSBVUkxcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SGFzaEZyb21VcmwodXJsU3RyaW5nT3JGcmFnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaGFzaEluZGV4MSA9IHVybFN0cmluZ09yRnJhZ21lbnQuaW5kZXhPZihcIiNcIik7XG4gICAgICAgIGNvbnN0IGhhc2hJbmRleDIgPSB1cmxTdHJpbmdPckZyYWdtZW50LmluZGV4T2YoXCIjL1wiKTtcbiAgICAgICAgaWYgKGhhc2hJbmRleDIgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybFN0cmluZ09yRnJhZ21lbnQuc3Vic3RyaW5nKGhhc2hJbmRleDIgKyAyKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoSW5kZXgxID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmxTdHJpbmdPckZyYWdtZW50LnN1YnN0cmluZyhoYXNoSW5kZXgxICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybFN0cmluZ09yRnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENoZWNrIGlmIHRoZSB1cmwgY29udGFpbnMgYSBoYXNoIHdpdGgga25vd24gcHJvcGVydGllc1xuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgdXJsQ29udGFpbnNIYXNoKHVybFN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBVcmxVdGlscy5kZXNlcmlhbGl6ZUhhc2godXJsU3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUl9ERVNDUklQVElPTikgfHxcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUikgfHxcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoU2VydmVySGFzaFBhcmFtS2V5cy5BQ0NFU1NfVE9LRU4pIHx8XG4gICAgICAgICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KFNlcnZlckhhc2hQYXJhbUtleXMuSURfVE9LRU4pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFJldHVybnMgZGVzZXJpYWxpemVkIHBvcnRpb24gb2YgVVJMIGhhc2hcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplSGFzaCh1cmxGcmFnbWVudDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBVcmxVdGlscy5nZXRIYXNoRnJvbVVybCh1cmxGcmFnbWVudCk7XG4gICAgICAgIHJldHVybiBDcnlwdG9VdGlscy5kZXNlcmlhbGl6ZShoYXNoKTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBDb25zdGFudHNcbiAqL1xuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XG4gICAgc3RhdGljIGdldCBjbGFpbXMoKTogc3RyaW5nIHsgcmV0dXJuIFwiY2xhaW1zXCI7IH1cbiAgICBzdGF0aWMgZ2V0IGNsaWVudElkKCk6IHN0cmluZyB7IHJldHVybiBcImNsaWVudElkXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgYWRhbElkVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiYWRhbC5pZHRva2VuXCI7IH1cbiAgICBzdGF0aWMgZ2V0IGNhY2hlUHJlZml4KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWxcIjsgfVxuXG4gICAgc3RhdGljIGdldCBub19hY2NvdW50KCk6IHN0cmluZyB7IHJldHVybiBcIk5PX0FDQ09VTlRcIjsgfVxuICAgIHN0YXRpYyBnZXQgY29uc3VtZXJzVXRpZCgpOiBzdHJpbmcgeyByZXR1cm4gXCI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWRcIjsgfVxuICAgIHN0YXRpYyBnZXQgdXBuKCk6IHN0cmluZyB7IHJldHVybiBcInVwblwiOyB9XG5cbiAgICBzdGF0aWMgZ2V0IHByb21wdF9zZWxlY3RfYWNjb3VudCgpOiBzdHJpbmcgeyByZXR1cm4gXCImcHJvbXB0PXNlbGVjdF9hY2NvdW50XCI7IH1cbiAgICBzdGF0aWMgZ2V0IHByb21wdF9ub25lKCk6IHN0cmluZyB7IHJldHVybiBcIiZwcm9tcHQ9bm9uZVwiOyB9XG4gICAgc3RhdGljIGdldCBwcm9tcHQoKTogc3RyaW5nIHsgcmV0dXJuIFwicHJvbXB0XCI7IH1cblxuICAgIHN0YXRpYyBnZXQgcmVzcG9uc2VfbW9kZV9mcmFnbWVudCgpOiBzdHJpbmcgeyByZXR1cm4gXCImcmVzcG9uc2VfbW9kZT1mcmFnbWVudFwiOyB9XG4gICAgc3RhdGljIGdldCByZXNvdXJjZURlbGltaXRlcigpOiBzdHJpbmcgeyByZXR1cm4gXCJ8XCI7IH1cbiAgICBzdGF0aWMgZ2V0IGNhY2hlRGVsaW1pdGVyKCk6IHN0cmluZyB7IHJldHVybiBcIi5cIjsgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3BvcFVwV2lkdGg6IG51bWJlciA9IDQ4MztcbiAgICBzdGF0aWMgZ2V0IHBvcFVwV2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3BvcFVwV2lkdGg7IH1cbiAgICBzdGF0aWMgc2V0IHBvcFVwV2lkdGgod2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wb3BVcFdpZHRoID0gd2lkdGg7XG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIF9wb3BVcEhlaWdodDogbnVtYmVyID0gNjAwO1xuICAgIHN0YXRpYyBnZXQgcG9wVXBIZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3BvcFVwSGVpZ2h0OyB9XG4gICAgc3RhdGljIHNldCBwb3BVcEhlaWdodChoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wb3BVcEhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGxvZ2luKCk6IHN0cmluZyB7IHJldHVybiBcIkxPR0lOXCI7IH1cbiAgICBzdGF0aWMgZ2V0IHJlbmV3VG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiUkVORVdfVE9LRU5cIjsgfVxuICAgIHN0YXRpYyBnZXQgdW5rbm93bigpOiBzdHJpbmcgeyByZXR1cm4gXCJVTktOT1dOXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgaG9tZUFjY291bnRJZGVudGlmaWVyKCk6IHN0cmluZyB7IHJldHVybiBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiOyB9XG5cbiAgICBzdGF0aWMgZ2V0IGNvbW1vbigpOiBzdHJpbmcgeyByZXR1cm4gXCJjb21tb25cIjsgfVxuICAgIHN0YXRpYyBnZXQgb3BlbmlkU2NvcGUoKTogc3RyaW5nIHsgcmV0dXJuIFwib3BlbmlkXCI7IH1cbiAgICBzdGF0aWMgZ2V0IHByb2ZpbGVTY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9maWxlXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QoKTogSW50ZXJhY3Rpb25UeXBlIHsgcmV0dXJuIFwicmVkaXJlY3RJbnRlcmFjdGlvblwiOyB9XG4gICAgc3RhdGljIGdldCBpbnRlcmFjdGlvblR5cGVQb3B1cCgpOiBJbnRlcmFjdGlvblR5cGUgeyByZXR1cm4gXCJwb3B1cEludGVyYWN0aW9uXCI7IH1cbn1cblxuLyoqXG4gKiBTdGF0dXMgb2YgdGhlIGN1cnJlbnQgdG9rZW4gcmVxdWVzdFxuICovXG5leHBvcnQgZW51bSBSZXF1ZXN0U3RhdHVzIHtcbiAgICBDQU5DRUxMRUQgPSBcIkNhbmNlbGxlZFwiLFxuICAgIENPTVBMRVRFRCA9IFwiQ29tcGxldGVkXCIsXG4gICAgSU5fUFJPR1JFU1MgPSBcIkluUHJvZ3Jlc3NcIlxufTtcblxuLyoqXG4gKiBLZXlzIGluIHRoZSBoYXNoUGFyYW1zXG4gKi9cbmV4cG9ydCBlbnVtIFNlcnZlckhhc2hQYXJhbUtleXMge1xuICAgIFNDT1BFID0gXCJzY29wZVwiLFxuICAgIEVSUk9SID0gXCJlcnJvclwiLFxuICAgIEVSUk9SX0RFU0NSSVBUSU9OID0gXCJlcnJvcl9kZXNjcmlwdGlvblwiLFxuICAgIEFDQ0VTU19UT0tFTiA9IFwiYWNjZXNzX3Rva2VuXCIsXG4gICAgSURfVE9LRU4gPSBcImlkX3Rva2VuXCIsXG4gICAgRVhQSVJFU19JTiA9IFwiZXhwaXJlc19pblwiLFxuICAgIFNFU1NJT05fU1RBVEUgPSBcInNlc3Npb25fc3RhdGVcIixcbiAgICBDTElFTlRfSU5GTyA9IFwiY2xpZW50X2luZm9cIlxufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBDYWNoZUtleXMgZm9yIE1TQUxcbiAqL1xuZXhwb3J0IGVudW0gVGVtcG9yYXJ5Q2FjaGVLZXlzIHtcbiAgICBBVVRIT1JJVFkgPSBcImF1dGhvcml0eVwiLFxuICAgIEFDUVVJUkVfVE9LRU5fQUNDT1VOVCA9IFwiYWNxdWlyZVRva2VuQWNjb3VudFwiLFxuICAgIFNFU1NJT05fU1RBVEUgPSBcInNlc3Npb24uc3RhdGVcIixcbiAgICBTVEFURV9MT0dJTiA9IFwic3RhdGUubG9naW5cIixcbiAgICBTVEFURV9BQ1FfVE9LRU4gPSBcInN0YXRlLmFjcXVpcmVUb2tlblwiLFxuICAgIFNUQVRFX1JFTkVXID0gXCJzdGF0ZS5yZW5ld1wiLFxuICAgIE5PTkNFX0lEVE9LRU4gPSBcIm5vbmNlLmlkdG9rZW5cIixcbiAgICBMT0dJTl9SRVFVRVNUID0gXCJsb2dpbi5yZXF1ZXN0XCIsXG4gICAgUkVORVdfU1RBVFVTID0gXCJ0b2tlbi5yZW5ldy5zdGF0dXNcIixcbiAgICBVUkxfSEFTSCA9IFwidXJsSGFzaFwiLFxuICAgIEFOR1VMQVJfTE9HSU5fUkVRVUVTVCA9IFwiYW5ndWxhci5sb2dpbi5yZXF1ZXN0XCJcbn1cblxuZXhwb3J0IGVudW0gUGVyc2lzdGVudENhY2hlS2V5cyB7XG4gICAgSURUT0tFTiA9IFwiaWR0b2tlblwiLFxuICAgIENMSUVOVF9JTkZPID0gXCJjbGllbnQuaW5mb1wiXG59XG5cbmV4cG9ydCBlbnVtIEVycm9yQ2FjaGVLZXlzIHtcbiAgICBMT0dJTl9FUlJPUiA9IFwibG9naW4uZXJyb3JcIixcbiAgICBFUlJPUiA9IFwiZXJyb3JcIixcbiAgICBFUlJPUl9ERVNDID0gXCJlcnJvci5kZXNjcmlwdGlvblwiXG59XG5cbmV4cG9ydCBjb25zdCBJTlRFUkFDVElPTl9TVEFUVVMgPSBcImludGVyYWN0aW9uLnN0YXR1c1wiO1xuXG5leHBvcnQgY29uc3QgQUFEVHJ1c3RlZEhvc3RMaXN0ID0gIHtcbiAgICBcImxvZ2luLndpbmRvd3MubmV0XCI6IFwibG9naW4ud2luZG93cy5uZXRcIixcbiAgICBcImxvZ2luLmNoaW5hY2xvdWRhcGkuY25cIjogXCJsb2dpbi5jaGluYWNsb3VkYXBpLmNuXCIsXG4gICAgXCJsb2dpbi5jbG91ZGdvdmFwaS51c1wiOiBcImxvZ2luLmNsb3VkZ292YXBpLnVzXCIsXG4gICAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLmNvbVwiLFxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCIsXG4gICAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUudXNcIjogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUudXNcIlxufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBTU08gVHlwZXMgLSBnZW5lcmF0ZWQgdG8gcG9wdWxhdGUgaGludHNcbiAqL1xuZXhwb3J0IGVudW0gU1NPVHlwZXMge1xuICAgIEFDQ09VTlQgPSBcImFjY291bnRcIixcbiAgICBTSUQgPSBcInNpZFwiLFxuICAgIExPR0lOX0hJTlQgPSBcImxvZ2luX2hpbnRcIixcbiAgICBJRF9UT0tFTiA9XCJpZF90b2tlblwiLFxuICAgIERPTUFJTl9ISU5UID0gXCJkb21haW5faGludFwiLFxuICAgIE9SR0FOSVpBVElPTlMgPSBcIm9yZ2FuaXphdGlvbnNcIixcbiAgICBDT05TVU1FUlMgPSBcImNvbnN1bWVyc1wiLFxuICAgIEFDQ09VTlRfSUQgPSBcImFjY291bnRJZGVudGlmaWVyXCIsXG4gICAgSE9NRUFDQ09VTlRfSUQgPSBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiLFxuICAgIExPR0lOX1JFUSA9IFwibG9naW5fcmVxXCIsXG4gICAgRE9NQUlOX1JFUSA9IFwiZG9tYWluX3JlcVwiXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IEJsYWNrbGlzdGVkRVFQYXJhbXMgPSBbXG4gICAgU1NPVHlwZXMuU0lELFxuICAgIFNTT1R5cGVzLkxPR0lOX0hJTlRcbl07XG5cbmV4cG9ydCB0eXBlIEludGVyYWN0aW9uVHlwZSA9IFwicmVkaXJlY3RJbnRlcmFjdGlvblwiIHwgXCJwb3B1cEludGVyYWN0aW9uXCI7XG5cbi8qKlxuICogd2UgY29uc2lkZXJlZCBtYWtpbmcgdGhpcyBcImVudW1cIiBpbiB0aGUgcmVxdWVzdCBpbnN0ZWFkIG9mIHN0cmluZywgaG93ZXZlciBpdCBsb29rcyBsaWtlIHRoZSBhbGxvd2VkIGxpc3Qgb2ZcbiAqIHByb21wdCB2YWx1ZXMga2VwdCBjaGFuZ2luZyBvdmVyIHBhc3QgY291cGxlIG9mIHllYXJzLiBUaGVyZSBhcmUgc29tZSB1bmRvY3VtZW50ZWQgcHJvbXB0IHZhbHVlcyBmb3Igc29tZVxuICogaW50ZXJuYWwgcGFydG5lcnMgdG9vLCBoZW5jZSB0aGUgY2hvaWNlIG9mIGdlbmVyaWMgXCJzdHJpbmdcIiB0eXBlIGluc3RlYWQgb2YgdGhlIFwiZW51bVwiXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9tcHRTdGF0ZSA9IHtcbiAgICBMT0dJTjogXCJsb2dpblwiLFxuICAgIFNFTEVDVF9BQ0NPVU5UOiBcInNlbGVjdF9hY2NvdW50XCIsXG4gICAgQ09OU0VOVDogXCJjb25zZW50XCIsXG4gICAgTk9ORTogXCJub25lXCIsXG59O1xuXG4vKipcbiAqIE1TQUwgSlMgTGlicmFyeSBWZXJzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaWJyYXJ5VmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIjEuMS4zXCI7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vQ2xpZW50QXV0aEVycm9yXCI7XG5pbXBvcnQgeyBUZWxlbWV0cnlPcHRpb25zIH0gZnJvbSBcIi4uL0NvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgPSB7XG4gICAgY29uZmlndXJhdGlvbk5vdFNldDoge1xuICAgICAgICBjb2RlOiBcIm5vX2NvbmZpZ19zZXRcIixcbiAgICAgICAgZGVzYzogXCJDb25maWd1cmF0aW9uIGhhcyBub3QgYmVlbiBzZXQuIFBsZWFzZSBjYWxsIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbiBjb25zdHJ1Y3RvciB3aXRoIGEgdmFsaWQgQ29uZmlndXJhdGlvbiBvYmplY3QuXCJcbiAgICB9LFxuICAgIHN0b3JhZ2VOb3RTdXBwb3J0ZWQ6IHtcbiAgICAgICAgY29kZTogXCJzdG9yYWdlX25vdF9zdXBwb3J0ZWRcIixcbiAgICAgICAgZGVzYzogXCJUaGUgdmFsdWUgZm9yIHRoZSBjYWNoZUxvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuXCJcbiAgICB9LFxuICAgIG5vUmVkaXJlY3RDYWxsYmFja3NTZXQ6IHtcbiAgICAgICAgY29kZTogXCJub19yZWRpcmVjdF9jYWxsYmFja3NcIixcbiAgICAgICAgZGVzYzogXCJObyByZWRpcmVjdCBjYWxsYmFja3MgaGF2ZSBiZWVuIHNldC4gUGxlYXNlIGNhbGwgc2V0UmVkaXJlY3RDYWxsYmFja3MoKSB3aXRoIHRoZSBhcHByb3ByaWF0ZSBmdW5jdGlvbiBhcmd1bWVudHMgYmVmb3JlIGNvbnRpbnVpbmcuIFwiICtcbiAgICAgICAgICAgIFwiTW9yZSBpbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0F6dXJlQUQvbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL3dpa2kvTVNBTC1iYXNpY3MuXCJcbiAgICB9LFxuICAgIGludmFsaWRDYWxsYmFja09iamVjdDoge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfY2FsbGJhY2tfb2JqZWN0XCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIG9iamVjdCBwYXNzZWQgZm9yIHRoZSBjYWxsYmFjayB3YXMgaW52YWxpZC4gXCIgK1xuICAgICAgICAgIFwiTW9yZSBpbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0F6dXJlQUQvbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL3dpa2kvTVNBTC1iYXNpY3MuXCJcbiAgICB9LFxuICAgIHNjb3Blc1JlcXVpcmVkOiB7XG4gICAgICAgIGNvZGU6IFwic2NvcGVzX3JlcXVpcmVkXCIsXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGFyZSByZXF1aXJlZCB0byBvYnRhaW4gYW4gYWNjZXNzIHRva2VuLlwiXG4gICAgfSxcbiAgICBlbXB0eVNjb3Blczoge1xuICAgICAgICBjb2RlOiBcImVtcHR5X2lucHV0X3Njb3Blc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlNjb3BlcyBjYW5ub3QgYmUgcGFzc2VkIGFzIGVtcHR5IGFycmF5LlwiXG4gICAgfSxcbiAgICBub25BcnJheVNjb3Blczoge1xuICAgICAgICBjb2RlOiBcIm5vbmFycmF5X2lucHV0X3Njb3Blc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlNjb3BlcyBjYW5ub3QgYmUgcGFzc2VkIGFzIG5vbi1hcnJheS5cIlxuICAgIH0sXG4gICAgY2xpZW50U2NvcGU6IHtcbiAgICAgICAgY29kZTogXCJjbGllbnRpZF9pbnB1dF9zY29wZXNfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJDbGllbnQgSUQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgYXMgYSBzaW5nbGUgc2NvcGUuXCJcbiAgICB9LFxuICAgIGludmFsaWRQcm9tcHQ6IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX3Byb21wdF92YWx1ZVwiLFxuICAgICAgICBkZXNjOiBcIlN1cHBvcnRlZCBwcm9tcHQgdmFsdWVzIGFyZSAnbG9naW4nLCAnc2VsZWN0X2FjY291bnQnLCAnY29uc2VudCcgYW5kICdub25lJ1wiLFxuICAgIH0sXG4gICAgaW52YWxpZEF1dGhvcml0eVR5cGU6IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2F1dGhvcml0eV90eXBlXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGdpdmVuIGF1dGhvcml0eSBpcyBub3QgYSB2YWxpZCB0eXBlIG9mIGF1dGhvcml0eSBzdXBwb3J0ZWQgYnkgTVNBTC4gUGxlYXNlIHNlZSBoZXJlIGZvciB2YWxpZCBhdXRob3JpdGllczogPGluc2VydCBVUkwgaGVyZT4uXCJcbiAgICB9LFxuICAgIGF1dGhvcml0eVVyaUluc2VjdXJlOiB7XG4gICAgICAgIGNvZGU6IFwiYXV0aG9yaXR5X3VyaV9pbnNlY3VyZVwiLFxuICAgICAgICBkZXNjOiBcIkF1dGhvcml0eSBVUklzIG11c3QgdXNlIGh0dHBzLlwiXG4gICAgfSxcbiAgICBhdXRob3JpdHlVcmlJbnZhbGlkUGF0aDoge1xuICAgICAgICBjb2RlOiBcImF1dGhvcml0eV91cmlfaW52YWxpZF9wYXRoXCIsXG4gICAgICAgIGRlc2M6IFwiR2l2ZW4gYXV0aG9yaXR5IFVSSSBpcyBpbnZhbGlkLlwiXG4gICAgfSxcbiAgICB1bnN1cHBvcnRlZEF1dGhvcml0eVZhbGlkYXRpb246IHtcbiAgICAgICAgY29kZTogXCJ1bnN1cHBvcnRlZF9hdXRob3JpdHlfdmFsaWRhdGlvblwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBhdXRob3JpdHkgdmFsaWRhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIGF1dGhvcml0eSB0eXBlLlwiXG4gICAgfSxcbiAgICBiMmNBdXRob3JpdHlVcmlJbnZhbGlkUGF0aDoge1xuICAgICAgICBjb2RlOiBcImIyY19hdXRob3JpdHlfdXJpX2ludmFsaWRfcGF0aFwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBnaXZlbiBVUkkgZm9yIHRoZSBCMkMgYXV0aG9yaXR5IGlzIGludmFsaWQuXCJcbiAgICB9LFxuICAgIGNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJjbGFpbXNfcmVxdWVzdF9wYXJzaW5nX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiQ291bGQgbm90IHBhcnNlIHRoZSBnaXZlbiBjbGFpbXMgcmVxdWVzdCBvYmplY3QuXCJcbiAgICB9LFxuICAgIGVtcHR5UmVxdWVzdEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiZW1wdHlfcmVxdWVzdF9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlJlcXVlc3Qgb2JqZWN0IGlzIHJlcXVpcmVkLlwiXG4gICAgfSxcbiAgICB0ZWxlbWV0cnlDb25maWdFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInRlbGVtZXRyeV9jb25maWdfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJUZWxlbWV0cnkgY29uZmlnIGlzIG5vdCBjb25maWd1cmVkIHdpdGggcmVxdWlyZWQgdmFsdWVzXCJcbiAgICB9XG59O1xuXG4vKipcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGluIGNvbmZpZ3VyYXRpb24gb2YgdGhlIC5qcyBsaWJyYXJ5LlxuICovXG5leHBvcnQgY2xhc3MgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIGV4dGVuZHMgQ2xpZW50QXV0aEVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLnByb3RvdHlwZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZU5vU2V0Q29uZmlndXJhdGlvbkVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY29uZmlndXJhdGlvbk5vdFNldC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jb25maWd1cmF0aW9uTm90U2V0LmRlc2N9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVN0b3JhZ2VOb3RTdXBwb3J0ZWRFcnJvcihnaXZlbkNhY2hlTG9jYXRpb246IHN0cmluZykgOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnN0b3JhZ2VOb3RTdXBwb3J0ZWQuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uuc3RvcmFnZU5vdFN1cHBvcnRlZC5kZXNjfSBHaXZlbiBsb2NhdGlvbjogJHtnaXZlbkNhY2hlTG9jYXRpb259YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVJlZGlyZWN0Q2FsbGJhY2tzTm90U2V0RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub1JlZGlyZWN0Q2FsbGJhY2tzU2V0LmNvZGUsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9SZWRpcmVjdENhbGxiYWNrc1NldC5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZENhbGxiYWNrT2JqZWN0RXJyb3IoY2FsbGJhY2tPYmplY3Q6IG9iamVjdCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhbGxiYWNrT2JqZWN0LmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWxsYmFja09iamVjdC5kZXNjfSBHaXZlbiB2YWx1ZSBmb3IgY2FsbGJhY2sgZnVuY3Rpb246ICR7Y2FsbGJhY2tPYmplY3R9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5U2NvcGVzQXJyYXlFcnJvcihzY29wZXNWYWx1ZTogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5lbXB0eVNjb3Blcy5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5lbXB0eVNjb3Blcy5kZXNjfSBHaXZlbiB2YWx1ZTogJHtzY29wZXNWYWx1ZX0uYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVNjb3Blc05vbkFycmF5RXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9uQXJyYXlTY29wZXMuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9uQXJyYXlTY29wZXMuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJZFNpbmdsZVNjb3BlRXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY2xpZW50U2NvcGUuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY2xpZW50U2NvcGUuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTY29wZXNSZXF1aXJlZEVycm9yKHNjb3Blc1ZhbHVlOiBhbnkpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnNjb3Blc1JlcXVpcmVkLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnNjb3Blc1JlcXVpcmVkLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0VmFsdWU6IGFueSk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZFByb21wdC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkUHJvbXB0LmRlc2N9IEdpdmVuIHZhbHVlOiAke3Byb21wdFZhbHVlfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yKGNsYWltc1JlcXVlc3RQYXJzZUVycm9yOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvci5kZXNjfSBHaXZlbiB2YWx1ZTogJHtjbGFpbXNSZXF1ZXN0UGFyc2VFcnJvcn1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRW1wdHlSZXF1ZXN0RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgY29uc3QgeyBjb2RlLCBkZXNjIH0gPSBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmVtcHR5UmVxdWVzdEVycm9yO1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihjb2RlLCBkZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVGVsZW1ldHJ5Q29uZmlnRXJyb3IoY29uZmlnOiBUZWxlbWV0cnlPcHRpb25zKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgY29uc3QgeyBjb2RlLCBkZXNjIH0gPSBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnRlbGVtZXRyeUNvbmZpZ0Vycm9yO1xuICAgICAgICBjb25zdCByZXF1aXJlZEtleXMgPSB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbk5hbWU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBhcHBsaWNhdGlvblZlcnNpb246IFwic3RyaW5nXCIsXG4gICAgICAgICAgICB0ZWxlbWV0cnlFbWl0dGVyOiBcImZ1bmN0aW9uXCJcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtaXNzaW5nS2V5cyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkS2V5cylcbiAgICAgICAgICAgIC5yZWR1Y2UoKGtleXMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWdba2V5XSA/IGtleXMgOiBrZXlzLmNvbmNhdChbIGAke2tleX0gKCR7cmVxdWlyZWRLZXlzW2tleV19KWAgXSk7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoY29kZSwgYCR7ZGVzY30gbWlzaW5nIHZhbHVlczogJHttaXNzaW5nS2V5cy5qb2luKFwiLFwiKX1gKTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vQXV0aEVycm9yXCI7XG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4uL0lkVG9rZW5cIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlID0ge1xuICAgIG11bHRpcGxlTWF0Y2hpbmdUb2tlbnM6IHtcbiAgICAgICAgY29kZTogXCJtdWx0aXBsZV9tYXRjaGluZ190b2tlbnNcIixcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGUgY29udGFpbnMgbXVsdGlwbGUgdG9rZW5zIHNhdGlzZnlpbmcgdGhlIHJlcXVpcmVtZW50cy4gXCIgK1xuICAgICAgICAgICAgXCJDYWxsIEFjcXVpcmVUb2tlbiBhZ2FpbiBwcm92aWRpbmcgbW9yZSByZXF1aXJlbWVudHMgbGlrZSBhdXRob3JpdHkuXCJcbiAgICB9LFxuICAgIG11bHRpcGxlQ2FjaGVBdXRob3JpdGllczoge1xuICAgICAgICBjb2RlOiBcIm11bHRpcGxlX2F1dGhvcml0aWVzXCIsXG4gICAgICAgIGRlc2M6IFwiTXVsdGlwbGUgYXV0aG9yaXRpZXMgZm91bmQgaW4gdGhlIGNhY2hlLiBQYXNzIGF1dGhvcml0eSBpbiB0aGUgQVBJIG92ZXJsb2FkLlwiXG4gICAgfSxcbiAgICBlbmRwb2ludFJlc29sdXRpb25FcnJvcjoge1xuICAgICAgICBjb2RlOiBcImVuZHBvaW50c19yZXNvbHV0aW9uX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiRXJyb3I6IGNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50cy4gUGxlYXNlIGNoZWNrIG5ldHdvcmsgYW5kIHRyeSBhZ2Fpbi5cIlxuICAgIH0sXG4gICAgcG9wVXBXaW5kb3dFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInBvcHVwX3dpbmRvd19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93LiBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IGFyZSB1c2luZyBJRSBvciBpZiBwb3B1cHMgYXJlIGJsb2NrZWQgaW4gdGhlIGJyb3dzZXIuXCJcbiAgICB9LFxuICAgIHRva2VuUmVuZXdhbEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidG9rZW5fcmVuZXdhbF9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlRva2VuIHJlbmV3YWwgb3BlcmF0aW9uIGZhaWxlZCBkdWUgdG8gdGltZW91dC5cIlxuICAgIH0sXG4gICAgaW52YWxpZElkVG9rZW46IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2lkX3Rva2VuXCIsXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBJRCB0b2tlbiBmb3JtYXQuXCJcbiAgICB9LFxuICAgIGludmFsaWRTdGF0ZUVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9zdGF0ZV9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkludmFsaWQgc3RhdGUuXCJcbiAgICB9LFxuICAgIG5vbmNlTWlzbWF0Y2hFcnJvcjoge1xuICAgICAgICBjb2RlOiBcIm5vbmNlX21pc21hdGNoX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiTm9uY2UgaXMgbm90IG1hdGNoaW5nLCBOb25jZSByZWNlaXZlZDogXCJcbiAgICB9LFxuICAgIGxvZ2luUHJvZ3Jlc3NFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImxvZ2luX3Byb2dyZXNzX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiTG9naW5fSW5fUHJvZ3Jlc3M6IEVycm9yIGR1cmluZyBsb2dpbiBjYWxsIC0gbG9naW4gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcy5cIlxuICAgIH0sXG4gICAgYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImFjcXVpcmV0b2tlbl9wcm9ncmVzc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkFjcXVpcmVUb2tlbl9Jbl9Qcm9ncmVzczogRXJyb3IgZHVyaW5nIGxvZ2luIGNhbGwgLSBsb2dpbiBpcyBhbHJlYWR5IGluIHByb2dyZXNzLlwiXG4gICAgfSxcbiAgICB1c2VyQ2FuY2VsbGVkRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1c2VyX2NhbmNlbGxlZFwiLFxuICAgICAgICBkZXNjOiBcIlVzZXIgY2FuY2VsbGVkIHRoZSBmbG93LlwiXG4gICAgfSxcbiAgICBjYWxsYmFja0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiY2FsbGJhY2tfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJFcnJvciBvY2N1cnJlZCBpbiB0b2tlbiByZWNlaXZlZCBjYWxsYmFjayBmdW5jdGlvbi5cIlxuICAgIH0sXG4gICAgdXNlckxvZ2luUmVxdWlyZWRFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInVzZXJfbG9naW5fZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkLlwiXG4gICAgfSxcbiAgICB1c2VyRG9lc05vdEV4aXN0RXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1c2VyX25vbl9leGlzdGVudFwiLFxuICAgICAgICBkZXNjOiBcIlVzZXIgb2JqZWN0IGRvZXMgbm90IGV4aXN0LiBQbGVhc2UgY2FsbCBhIGxvZ2luIEFQSS5cIlxuICAgIH0sXG4gICAgY2xpZW50SW5mb0RlY29kaW5nRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJjbGllbnRfaW5mb19kZWNvZGluZ19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBjbGllbnQgaW5mbyBjb3VsZCBub3QgYmUgcGFyc2VkL2RlY29kZWQgY29ycmVjdGx5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcbiAgICB9LFxuICAgIGNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImNsaWVudF9pbmZvX25vdF9wb3B1bGF0ZWRfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJUaGUgc2VydmljZSBkaWQgbm90IHBvcHVsYXRlIGNsaWVudF9pbmZvIGluIHRoZSByZXNwb25zZSwgUGxlYXNlIHZlcmlmeSB3aXRoIHRoZSBzZXJ2aWNlIHRlYW1cIlxuICAgIH0sXG4gICAgbnVsbE9yRW1wdHlJZFRva2VuOiB7XG4gICAgICAgIGNvZGU6IFwibnVsbF9vcl9lbXB0eV9pZF90b2tlblwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBpZFRva2VuIGlzIG51bGwgb3IgZW1wdHkuIFBsZWFzZSByZXZpZXcgdGhlIHRyYWNlIHRvIGRldGVybWluZSB0aGUgcm9vdCBjYXVzZS5cIlxuICAgIH0sXG4gICAgaWRUb2tlbk5vdFBhcnNlZDoge1xuICAgICAgICBjb2RlOiBcImlkX3Rva2VuX3BhcnNpbmdfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJJRCB0b2tlbiBjYW5ub3QgYmUgcGFyc2VkLiBQbGVhc2UgcmV2aWV3IHN0YWNrIHRyYWNlIHRvIGRldGVybWluZSByb290IGNhdXNlLlwiXG4gICAgfSxcbiAgICB0b2tlbkVuY29kaW5nRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ0b2tlbl9lbmNvZGluZ19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlRoZSB0b2tlbiB0byBiZSBkZWNvZGVkIGlzIG5vdCBlbmNvZGVkIGNvcnJlY3RseS5cIlxuICAgIH0sXG4gICAgaW52YWxpZEludGVyYWN0aW9uVHlwZToge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfaW50ZXJhY3Rpb25fdHlwZVwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBpbnRlcmFjdGlvbiB0eXBlIHBhc3NlZCB0byB0aGUgaGFuZGxlciB3YXMgaW5jb3JyZWN0IG9yIHVua25vd25cIlxuICAgIH1cbn07XG5cbi8qKlxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlcmUgaXMgYW4gZXJyb3IgaW4gdGhlIGNsaWVudCBjb2RlIHJ1bm5pbmcgb24gdGhlIGJyb3dzZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbGllbnRBdXRoRXJyb3IgZXh0ZW5kcyBBdXRoRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ2xpZW50QXV0aEVycm9yXCI7XG5cbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIENsaWVudEF1dGhFcnJvci5wcm90b3R5cGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcihlcnJEZXRhaWw/OiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5kZXNjO1xuICAgICAgICBpZiAoZXJyRGV0YWlsICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGVyckRldGFpbCkpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgIERldGFpbHM6ICR7ZXJyRGV0YWlsfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5jb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3BlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdUb2tlbnMuY29kZSxcbiAgICAgICAgICAgIGBDYWNoZSBlcnJvciBmb3Igc2NvcGUgJHtzY29wZX06ICR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZU1hdGNoaW5nVG9rZW5zLmRlc2N9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVNdWx0aXBsZUF1dGhvcml0aWVzSW5DYWNoZUVycm9yKHNjb3BlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlQ2FjaGVBdXRob3JpdGllcy5jb2RlLFxuICAgICAgICAgICAgYENhY2hlIGVycm9yIGZvciBzY29wZSAke3Njb3BlfTogJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlQ2FjaGVBdXRob3JpdGllcy5kZXNjfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlcnJEZXRhaWw/OiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmRlc2M7XG4gICAgICAgIGlmIChlcnJEZXRhaWwgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkoZXJyRGV0YWlsKSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGAgRGV0YWlsczogJHtlcnJEZXRhaWx9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuY29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVG9rZW5SZW5ld2FsVGltZW91dEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5SZW5ld2FsRXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5SZW5ld2FsRXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRJZFRva2VuRXJyb3IoaWRUb2tlbjogSWRUb2tlbikgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJZFRva2VuLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJZFRva2VuLmRlc2N9IEdpdmVuIHRva2VuOiAke2lkVG9rZW59YCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogSXMgdGhpcyBub3QgYSBzZWN1cml0eSBmbGF3IHRvIHNlbmQgdGhlIHVzZXIgdGhlIHN0YXRlIGV4cGVjdGVkPz9cbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZFN0YXRlRXJyb3IoaW52YWxpZFN0YXRlOiBzdHJpbmcsIGFjdHVhbFN0YXRlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmRlc2N9ICR7aW52YWxpZFN0YXRlfSwgc3RhdGUgZXhwZWN0ZWQgOiAke2FjdHVhbFN0YXRlfS5gKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBJcyB0aGlzIG5vdCBhIHNlY3VyaXR5IGZsYXcgdG8gc2VuZCB0aGUgdXNlciB0aGUgTm9uY2UgZXhwZWN0ZWQ/P1xuICAgIHN0YXRpYyBjcmVhdGVOb25jZU1pc21hdGNoRXJyb3IoaW52YWxpZE5vbmNlOiBzdHJpbmcsIGFjdHVhbE5vbmNlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTWlzbWF0Y2hFcnJvci5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5ub25jZU1pc21hdGNoRXJyb3IuZGVzY30gJHtpbnZhbGlkTm9uY2V9LCBub25jZSBleHBlY3RlZCA6ICR7YWN0dWFsTm9uY2V9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVMb2dpbkluUHJvZ3Jlc3NFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUHJvZ3Jlc3NFcnJvci5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5sb2dpblByb2dyZXNzRXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUFjcXVpcmVUb2tlbkluUHJvZ3Jlc3NFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmFjcXVpcmVUb2tlblByb2dyZXNzRXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvci5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVXNlckNhbmNlbGxlZEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRXJyb3JJbkNhbGxiYWNrRnVuY3Rpb24oZXJyb3JEZXNjOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNhbGxiYWNrRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2FsbGJhY2tFcnJvci5kZXNjfSAke2Vycm9yRGVzY30uYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckxvZ2luUmVxdWlyZWRFcnJvci5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyTG9naW5SZXF1aXJlZEVycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVVc2VyRG9lc05vdEV4aXN0RXJyb3IoKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckRvZXNOb3RFeGlzdEVycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJEb2VzTm90RXhpc3RFcnJvci5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SW5mb0RlY29kaW5nRXJyb3IoY2F1Z2h0RXJyb3I6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9EZWNvZGluZ0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9EZWNvZGluZ0Vycm9yLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodEVycm9yfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IoY2F1Z2h0RXJyb3I6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvci5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0RXJyb3J9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUlkVG9rZW5OdWxsT3JFbXB0eUVycm9yKGludmFsaWRSYXdUb2tlblN0cmluZzogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubnVsbE9yRW1wdHlJZFRva2VuLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5SWRUb2tlbi5kZXNjfSBSYXcgSUQgVG9rZW4gVmFsdWU6ICR7aW52YWxpZFJhd1Rva2VuU3RyaW5nfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKGNhdWdodFBhcnNpbmdFcnJvcjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaWRUb2tlbk5vdFBhcnNlZC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pZFRva2VuTm90UGFyc2VkLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodFBhcnNpbmdFcnJvcn1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVG9rZW5FbmNvZGluZ0Vycm9yKGluY29ycmVjdGx5RW5jb2RlZFRva2VuOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlbkVuY29kaW5nRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5FbmNvZGluZ0Vycm9yLmRlc2N9IEF0dGVtcHRlZCB0byBkZWNvZGU6ICR7aW5jb3JyZWN0bHlFbmNvZGVkVG9rZW59YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSW50ZXJhY3Rpb25UeXBlLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJbnRlcmFjdGlvblR5cGUuZGVzYyk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjb25zdCBBdXRoRXJyb3JNZXNzYWdlID0ge1xuICAgIHVuZXhwZWN0ZWRFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInVuZXhwZWN0ZWRfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJVbmV4cGVjdGVkIGVycm9yIGluIGF1dGhlbnRpY2F0aW9uLlwiXG4gICAgfSxcbiAgICBub1dpbmRvd09iamVjdEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwibm9fd2luZG93X29iamVjdFwiLFxuICAgICAgICBkZXNjOiBcIk5vIHdpbmRvdyBvYmplY3QgYXZhaWxhYmxlLiBEZXRhaWxzOlwiXG4gICAgfVxufTtcblxuLyoqXG4gKiBHZW5lcmFsIGVycm9yIGNsYXNzIHRocm93biBieSB0aGUgTVNBTC5qcyBsaWJyYXJ5LlxuICovXG5leHBvcnQgY2xhc3MgQXV0aEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgZXJyb3JDb2RlOiBzdHJpbmc7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBBdXRoRXJyb3IucHJvdG90eXBlKTtcblxuICAgICAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQXV0aEVycm9yXCI7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihlcnJEZXNjOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRoRXJyb3IoQXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkRXJyb3IuY29kZSwgYCR7QXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkRXJyb3IuZGVzY306ICR7ZXJyRGVzY31gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTm9XaW5kb3dPYmplY3RFcnJvcihlcnJEZXNjOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRoRXJyb3IoQXV0aEVycm9yTWVzc2FnZS5ub1dpbmRvd09iamVjdEVycm9yLmNvZGUsIGAke0F1dGhFcnJvck1lc3NhZ2Uubm9XaW5kb3dPYmplY3RFcnJvci5kZXNjfSAke2VyckRlc2N9YCk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IElVcmkgfSBmcm9tIFwiLi4vSVVyaVwiO1xuaW1wb3J0IHsgSVRlbmFudERpc2NvdmVyeVJlc3BvbnNlIH0gZnJvbSBcIi4vSVRlbmFudERpc2NvdmVyeVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgWGhyQ2xpZW50IH0gZnJvbSBcIi4uL1hIUkNsaWVudFwiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVXJsVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBlbnVtIEF1dGhvcml0eVR5cGUge1xuICAgIEFhZCxcbiAgICBBZGZzLFxuICAgIEIyQ1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEF1dGhvcml0eSB7XG4gICAgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuSXNWYWxpZGF0aW9uRW5hYmxlZCA9IHZhbGlkYXRlQXV0aG9yaXR5O1xuICAgICAgICB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eSA9IGF1dGhvcml0eTtcblxuICAgICAgICB0aGlzLnZhbGlkYXRlQXNVcmkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IEF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZTtcblxuICAgIHB1YmxpYyBJc1ZhbGlkYXRpb25FbmFibGVkOiBib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBUZW5hbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHNbMF07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0ZW5hbnREaXNjb3ZlcnlSZXNwb25zZTogSVRlbmFudERpc2NvdmVyeVJlc3BvbnNlO1xuXG4gICAgcHVibGljIGdldCBBdXRob3JpemF0aW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLkF1dGhvcml6YXRpb25FbmRwb2ludC5yZXBsYWNlKFwie3RlbmFudH1cIiwgdGhpcy5UZW5hbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgRW5kU2Vzc2lvbkVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5FbmRTZXNzaW9uRW5kcG9pbnQucmVwbGFjZShcInt0ZW5hbnR9XCIsIHRoaXMuVGVuYW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IFNlbGZTaWduZWRKd3RBdWRpZW5jZSgpOiBzdHJpbmcge1xuICAgICAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuSXNzdWVyLnJlcGxhY2UoXCJ7dGVuYW50fVwiLCB0aGlzLlRlbmFudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVJlc29sdmVkKCkge1xuICAgICAgICBpZiAoIXRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IFwiUGxlYXNlIGNhbGwgUmVzb2x2ZUVuZHBvaW50c0FzeW5jIGZpcnN0XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIFVSTCB0aGF0IGlzIHRoZSBhdXRob3JpdHkgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IENhbm9uaWNhbEF1dGhvcml0eSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5vbmljYWxBdXRob3JpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBDYW5vbmljYWxBdXRob3JpdHkodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jYW5vbmljYWxBdXRob3JpdHkgPSBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkodXJsKTtcbiAgICAgICAgdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbm9uaWNhbEF1dGhvcml0eTogc3RyaW5nO1xuICAgIHByaXZhdGUgY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50czogSVVyaTtcblxuICAgIHB1YmxpYyBnZXQgQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cygpOiBJVXJpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IFVybFV0aWxzLkdldFVybENvbXBvbmVudHModGhpcy5DYW5vbmljYWxBdXRob3JpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAvLyBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1kaXNjb3ZlcnktMV8wLmh0bWwjUHJvdmlkZXJNZXRhZGF0YVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5DYW5vbmljYWxBdXRob3JpdHl9djIuMC8ud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbmA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBzdHJpbmcsIHZhbGlkYXRlIHRoYXQgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly9kb21haW4vcGF0aFxuICAgICAqL1xuICAgIHByaXZhdGUgdmFsaWRhdGVBc1VyaSgpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudHM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb21wb25lbnRzID0gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRBdXRob3JpdHlUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb21wb25lbnRzLlByb3RvY29sIHx8IGNvbXBvbmVudHMuUHJvdG9jb2wudG9Mb3dlckNhc2UoKSAhPT0gXCJodHRwczpcIikge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5hdXRob3JpdHlVcmlJbnNlY3VyZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29tcG9uZW50cy5QYXRoU2VnbWVudHMgfHwgY29tcG9uZW50cy5QYXRoU2VnbWVudHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5hdXRob3JpdHlVcmlJbnZhbGlkUGF0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBPSURDIGVuZHBvaW50IGFuZCByZXR1cm5zIHRoZSByZXNwb25zZVxuICAgICAqL1xuICAgIHByaXZhdGUgRGlzY292ZXJFbmRwb2ludHMob3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50OiBzdHJpbmcpOiBQcm9taXNlPElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgWGhyQ2xpZW50KCk7XG4gICAgICAgIHJldHVybiBjbGllbnQuc2VuZFJlcXVlc3RBc3luYyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQsIFwiR0VUXCIsIC8qIGVuYWJsZUNhY2hpbmc6ICovIHRydWUpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8SVRlbmFudERpc2NvdmVyeVJlc3BvbnNlPntcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbkVuZHBvaW50OiByZXNwb25zZS5hdXRob3JpemF0aW9uX2VuZHBvaW50LFxuICAgICAgICAgICAgICAgICAgICBFbmRTZXNzaW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmVuZF9zZXNzaW9uX2VuZHBvaW50LFxuICAgICAgICAgICAgICAgICAgICBJc3N1ZXI6IHJlc3BvbnNlLmlzc3VlclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZS5cbiAgICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBhdXRob3JpdHkgaXMgaW4gdGhlIGNhY2hlXG4gICAgICogRGlzY292ZXIgZW5kcG9pbnRzIHZpYSBvcGVuaWQtY29uZmlndXJhdGlvblxuICAgICAqIElmIHN1Y2Nlc3NmdWwsIGNhY2hlcyB0aGUgZW5kcG9pbnQgZm9yIGxhdGVyIHVzZSBpbiBPSURDXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHJlc29sdmVFbmRwb2ludHNBc3luYygpOiBQcm9taXNlPEF1dGhvcml0eT4ge1xuICAgICAgICBjb25zdCBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZSA9IGF3YWl0IHRoaXMuR2V0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50QXN5bmMoKTtcbiAgICAgICAgdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZSA9IGF3YWl0IHRoaXMuRGlzY292ZXJFbmRwb2ludHMob3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50UmVzcG9uc2UpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIFRlbmFudERpc2NvdmVyeUVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPjtcbn1cbiIsImV4cG9ydCBjb25zdCBFVkVOVF9OQU1FX1BSRUZJWCA9IFwibXNhbC5cIjtcbmV4cG9ydCBjb25zdCBFVkVOVF9OQU1FX0tFWSA9IFwiZXZlbnRfbmFtZVwiO1xuZXhwb3J0IGNvbnN0IFNUQVJUX1RJTUVfS0VZID0gXCJzdGFydF90aW1lXCI7XG5leHBvcnQgY29uc3QgRUxBUFNFRF9USU1FX0tFWSAgPSBcImVsYXBzZWRfdGltZVwiO1xuXG5leHBvcnQgY29uc3QgVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMgPSAge1xuICAgIE1zYWxDb3JyZWxhdGlvbklkQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0Lk1TQUwuY29ycmVsYXRpb25faWRcIixcbiAgICBBcGlUZWxlbUlkQ29uc3RTdHJLZXk6IFwibXNhbC5hcGlfdGVsZW1faWRcIixcbiAgICBBcGlJZENvbnN0U3RyS2V5OiBcIm1zYWwuYXBpX2lkXCIsXG4gICAgQnJva2VyQXBwQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfYnJva2VyX2FwcFwiLFxuICAgIENhY2hlRXZlbnRDb3VudENvbnN0U3RyS2V5OiBcIk1pY3Jvc29mdF9NU0FMX2NhY2hlX2V2ZW50X2NvdW50XCIsXG4gICAgSHR0cEV2ZW50Q291bnRUZWxlbWV0cnlCYXRjaEtleTogXCJNaWNyb3NvZnRfTVNBTF9odHRwX2V2ZW50X2NvdW50XCIsXG4gICAgSWRwQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfaWRwXCIsXG4gICAgSXNTaWxlbnRUZWxlbWV0cnlCYXRjaEtleTogXCJcIixcbiAgICBJc1N1Y2Nlc3NmdWxDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9pc19zdWNjZXNzZnVsXCIsXG4gICAgUmVzcG9uc2VUaW1lQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfcmVzcG9uc2VfdGltZVwiLFxuICAgIFRlbmFudElkQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfdGVuYW50X2lkXCIsXG4gICAgVWlFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXk6IFwiTWljcm9zb2Z0X01TQUxfdWlfZXZlbnRfY291bnRcIlxufTtcblxuLy8gVGhpcyBpcyB1c2VkIHRvIHJlcGxhY2UgdGhlIHJlYWwgdGVuYW50IGluIHRlbGVtZXRyeSBpbmZvXG5leHBvcnQgY29uc3QgVEVOQU5UX1BMQUNFSE9MREVSID0gXCI8dGVuYW50PlwiO1xuXG4iLCJpbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gXCIuL1VybFV0aWxzXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi8uLi9lcnJvci9BdXRoRXJyb3JcIjtcblxuZXhwb3J0IGNsYXNzIFdpbmRvd1V0aWxzIHtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogSW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzIHRoYXQgd2UgcG9sbCBhIHdpbmRvd1xuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBQT0xMSU5HX0lOVEVSVkFMX01TID0gNTA7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgcnVubmluZyBpbiBhbiBpZnJhbWUuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0luSWZyYW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgcGFnZSBpcyBydW5uaW5nIGluIGFuIGlmcmFtZS5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIGlzV2luZG93T25Ub3AoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB3aW5kb3cudG9wID09PSB3aW5kb3c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENoZWNrIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgcnVubmluZyBpbiBhIHBvcHVwLlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNJblBvcHVwKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEod2luZG93Lm9wZW5lciAmJiB3aW5kb3cub3BlbmVyICE9PSB3aW5kb3cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBNb25pdG9ycyBhIHdpbmRvdyB1bnRpbCBpdCBsb2FkcyBhIHVybCB3aXRoIGEgaGFzaFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgbW9uaXRvcldpbmRvd0Zvckhhc2goY29udGVudFdpbmRvdzogV2luZG93LCB0aW1lb3V0OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF4VGlja3MgPSB0aW1lb3V0IC8gV2luZG93VXRpbHMuUE9MTElOR19JTlRFUlZBTF9NUztcbiAgICAgICAgICAgIGxldCB0aWNrcyA9IDA7XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRXaW5kb3cuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgaHJlZjtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgKiBXaWxsIHRocm93IGlmIGNyb3NzIG9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICogd2hpY2ggc2hvdWxkIGJlIGNhdWdodCBhbmQgaWdub3JlZFxuICAgICAgICAgICAgICAgICAgICAgKiBzaW5jZSB3ZSBuZWVkIHRoZSBpbnRlcnZhbCB0byBrZWVwIHJ1bm5pbmcgd2hpbGUgb24gU1RTIFVJLlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgaHJlZiA9IGNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJvY2VzcyBibGFuayBwYWdlcyBvciBjcm9zcyBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWhyZWYgfHwgaHJlZiA9PT0gXCJhYm91dDpibGFua1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJ1biBjbG9jayB3aGVuIHdlIGFyZSBvbiBzYW1lIGRvbWFpblxuICAgICAgICAgICAgICAgIHRpY2tzKys7XG5cbiAgICAgICAgICAgICAgICBpZiAoVXJsVXRpbHMudXJsQ29udGFpbnNIYXNoKGhyZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29udGVudFdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRpY2tzID4gbWF4VGlja3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVUb2tlblJlbmV3YWxUaW1lb3V0RXJyb3IoKSk7IC8vIGJldHRlciBlcnJvcj9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBXaW5kb3dVdGlscy5QT0xMSU5HX0lOVEVSVkFMX01TKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIExvYWRzIGlmcmFtZSB3aXRoIGF1dGhvcml6YXRpb24gZW5kcG9pbnQgVVJMXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyBsb2FkRnJhbWUodXJsTmF2aWdhdGU6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcsIHRpbWVvdXRNczogbnVtYmVyLCBsb2dnZXI6IExvZ2dlcik6IFByb21pc2U8SFRNTElGcmFtZUVsZW1lbnQ+IHtcbiAgICAgICAgLypcbiAgICAgICAgICogVGhpcyB0cmljayBvdmVyY29tZXMgaWZyYW1lIG5hdmlnYXRpb24gaW4gSUVcbiAgICAgICAgICogSUUgZG9lcyBub3QgbG9hZCB0aGUgcGFnZSBjb25zaXN0ZW50bHkgaW4gaWZyYW1lXG4gICAgICAgICAqL1xuICAgICAgICBsb2dnZXIuaW5mbyhcIkxvYWRGcmFtZTogXCIgKyBmcmFtZU5hbWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFtZUhhbmRsZSA9IFdpbmRvd1V0aWxzLmFkZEhpZGRlbklGcmFtZShmcmFtZU5hbWUsIGxvZ2dlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZyYW1lSGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChgVW5hYmxlIHRvIGxvYWQgaWZyYW1lIHdpdGggbmFtZTogJHtmcmFtZU5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZnJhbWVIYW5kbGUuc3JjID09PSBcIlwiIHx8IGZyYW1lSGFuZGxlLnNyYyA9PT0gXCJhYm91dDpibGFua1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lSGFuZGxlLnNyYyA9IHVybE5hdmlnYXRlO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mb1BpaShcIkZyYW1lIE5hbWUgOiBcIiArIGZyYW1lTmFtZSArIFwiIE5hdmlnYXRlZCB0bzogXCIgKyB1cmxOYXZpZ2F0ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmcmFtZUhhbmRsZSk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0TXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQWRkcyB0aGUgaGlkZGVuIGlmcmFtZSBmb3Igc2lsZW50IHRva2VuIHJlbmV3YWwuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyBhZGRIaWRkZW5JRnJhbWUoaWZyYW1lSWQ6IHN0cmluZywgbG9nZ2VyOiBMb2dnZXIpOiBIVE1MSUZyYW1lRWxlbWVudCB7XG4gICAgICAgIGlmICh0eXBlb2YgaWZyYW1lSWQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nZ2VyLmluZm8oXCJBZGQgbXNhbCBmcmFtZSB0byBkb2N1bWVudDpcIiArIGlmcmFtZUlkKTtcbiAgICAgICAgbGV0IGFkYWxGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlmcmFtZUlkKSBhcyBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICAgICAgaWYgKCFhZGFsRnJhbWUpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFbGVtZW50ICYmXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgNS4wXCIpID09PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICAgICAgICAgIGlmci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZnJhbWVJZCk7XG4gICAgICAgICAgICAgICAgaWZyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgIGlmci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICBpZnIuc3R5bGUud2lkdGggPSBpZnIuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgaWZyLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGlmci5zZXRBdHRyaWJ1dGUoXCJzYW5kYm94XCIsIFwiYWxsb3ctc2FtZS1vcmlnaW5cIik7XG4gICAgICAgICAgICAgICAgYWRhbEZyYW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChpZnIpIGFzIEhUTUxJRnJhbWVFbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFwiPGlmcmFtZSBuYW1lPSdcIiArIGlmcmFtZUlkICsgXCInIGlkPSdcIiArIGlmcmFtZUlkICsgXCInIHN0eWxlPSdkaXNwbGF5Om5vbmUnPjwvaWZyYW1lPlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5mcmFtZXMgJiYgd2luZG93LmZyYW1lc1tpZnJhbWVJZF0pIHtcbiAgICAgICAgICAgICAgICBhZGFsRnJhbWUgPSB3aW5kb3cuZnJhbWVzW2lmcmFtZUlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhZGFsRnJhbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEZpbmQgYW5kIHJldHVybiB0aGUgaWZyYW1lIGVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gaGFzaFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SWZyYW1lV2l0aEhhc2goaGFzaDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpKS5maW5kKGlmcmFtZSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZnJhbWUuY29udGVudFdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBoYXNoO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHRoZSBwb3B1cHMgb3BlbmVkIGJ5IE1TQUxcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIGdldFBvcHVwcygpOiBBcnJheTxXaW5kb3c+IHtcbiAgICAgICAgaWYgKCF3aW5kb3cub3BlbmVkV2luZG93cykge1xuICAgICAgICAgICAgd2luZG93Lm9wZW5lZFdpbmRvd3MgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB3aW5kb3cub3BlbmVkV2luZG93cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogRmluZCBhbmQgcmV0dXJuIHRoZSBwb3B1cCB3aXRoIHRoZSBnaXZlbiBoYXNoXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQb3BVcFdpdGhIYXNoKGhhc2g6IHN0cmluZyk6IFdpbmRvdyB7XG4gICAgICAgIHJldHVybiBXaW5kb3dVdGlscy5nZXRQb3B1cHMoKS5maW5kKHBvcHVwID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvcHVwLmxvY2F0aW9uLmhhc2ggPT09IGhhc2g7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQWRkIHRoZSBwb3B1cCB0byB0aGUga25vd24gbGlzdCBvZiBwb3B1cHNcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc3RhdGljIHRyYWNrUG9wdXAocG9wdXA6IFdpbmRvdyk6IHZvaWQge1xuICAgICAgICBXaW5kb3dVdGlscy5nZXRQb3B1cHMoKS5wdXNoKHBvcHVwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ2xvc2UgYWxsIHBvcHVwc1xuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzdGF0aWMgY2xvc2VQb3B1cHMoKTogdm9pZCB7XG4gICAgICAgIFdpbmRvd1V0aWxzLmdldFBvcHVwcygpLmZvckVhY2gocG9wdXAgPT4gcG9wdXAuY2xvc2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFVzZWQgdG8gcmVkaXJlY3QgdGhlIGJyb3dzZXIgdG8gdGhlIFNUUyBhdXRob3JpemF0aW9uIGVuZHBvaW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybE5hdmlnYXRlIC0gVVJMIG9mIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50XG4gICAgICovXG4gICAgc3RhdGljIG5hdmlnYXRlV2luZG93KHVybE5hdmlnYXRlOiBzdHJpbmcsIGxvZ2dlcjogTG9nZ2VyLCBwb3B1cFdpbmRvdz86IFdpbmRvdykge1xuICAgICAgICAvLyBOYXZpZ2F0ZSBpZiB2YWxpZCBVUkxcbiAgICAgICAgaWYgKHVybE5hdmlnYXRlICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KHVybE5hdmlnYXRlKSkge1xuICAgICAgICAgICAgY29uc3QgbmF2aWdhdGVXaW5kb3c6IFdpbmRvdyA9IHBvcHVwV2luZG93ID8gcG9wdXBXaW5kb3cgOiB3aW5kb3c7XG4gICAgICAgICAgICBjb25zdCBsb2dNZXNzYWdlOiBzdHJpbmcgPSBwb3B1cFdpbmRvdyA/IFwiTmF2aWdhdGVkIFBvcHVwIHdpbmRvdyB0bzpcIiArIHVybE5hdmlnYXRlIDogXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlO1xuICAgICAgICAgICAgbG9nZ2VyLmluZm9QaWkobG9nTWVzc2FnZSk7XG4gICAgICAgICAgICBuYXZpZ2F0ZVdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybE5hdmlnYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKFwiTmF2aWdhdGUgdXJsIGlzIGVtcHR5XCIpO1xuICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIk5hdmlnYXRlIHVybCBpcyBlbXB0eVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcbmltcG9ydCB7IGxpYnJhcnlWZXJzaW9uIH0gZnJvbSBcIi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ2dlckNhbGxiYWNrIHtcbiAgICAobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKTogdm9pZDtcbn1cblxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICAgIEVycm9yLFxuICAgIFdhcm5pbmcsXG4gICAgSW5mbyxcbiAgICBWZXJib3NlXG59XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIgey8vIFNpbmdsZXRvbiBDbGFzc1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIC8vIFRPRE86IFRoaXMgZG9lcyBub3Qgc2VlbSB0byBiZSBhIHNpbmdsZXRvbiEhIENoYW5nZSBvciBEZWxldGUuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IExvZ2dlcjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGxldmVsOiBMb2dMZXZlbCA9IExvZ0xldmVsLkluZm87XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBwaWlMb2dnaW5nRW5hYmxlZDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGxvY2FsQ2FsbGJhY2s6IElMb2dnZXJDYWxsYmFjaztcblxuICAgIGNvbnN0cnVjdG9yKGxvY2FsQ2FsbGJhY2s6IElMb2dnZXJDYWxsYmFjayxcbiAgICAgICAgb3B0aW9uczpcbiAgICAgICAge1xuICAgICAgICAgICAgY29ycmVsYXRpb25JZD86IHN0cmluZyxcbiAgICAgICAgICAgIGxldmVsPzogTG9nTGV2ZWwsXG4gICAgICAgICAgICBwaWlMb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4sXG4gICAgICAgIH0gPSB7fSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkID0gXCJcIixcbiAgICAgICAgICAgIGxldmVsID0gTG9nTGV2ZWwuSW5mbyxcbiAgICAgICAgICAgIHBpaUxvZ2dpbmdFbmFibGVkID0gZmFsc2VcbiAgICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5sb2NhbENhbGxiYWNrID0gbG9jYWxDYWxsYmFjaztcbiAgICAgICAgdGhpcy5jb3JyZWxhdGlvbklkID0gY29ycmVsYXRpb25JZDtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLnBpaUxvZ2dpbmdFbmFibGVkID0gcGlpTG9nZ2luZ0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgbG9nTWVzc2FnZShsb2dMZXZlbDogTG9nTGV2ZWwsIGxvZ01lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKChsb2dMZXZlbCA+IHRoaXMubGV2ZWwpIHx8ICghdGhpcy5waWlMb2dnaW5nRW5hYmxlZCAmJiBjb250YWluc1BpaSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIGxldCBsb2c6IHN0cmluZztcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY29ycmVsYXRpb25JZCkpIHtcbiAgICAgICAgICAgIGxvZyA9IHRpbWVzdGFtcCArIFwiOlwiICsgdGhpcy5jb3JyZWxhdGlvbklkICsgXCItXCIgKyBsaWJyYXJ5VmVyc2lvbigpICsgXCItXCIgKyBMb2dMZXZlbFtsb2dMZXZlbF0gKyBcIiBcIiArIGxvZ01lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2cgPSB0aW1lc3RhbXAgKyBcIjpcIiArIGxpYnJhcnlWZXJzaW9uKCkgKyBcIi1cIiArIExvZ0xldmVsW2xvZ0xldmVsXSArIFwiIFwiICsgbG9nTWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV4ZWN1dGVDYWxsYmFjayhsb2dMZXZlbCwgbG9nLCBjb250YWluc1BpaSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGV4ZWN1dGVDYWxsYmFjayhsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5sb2NhbENhbGxiYWNrKGxldmVsLCBtZXNzYWdlLCBjb250YWluc1BpaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBlcnJvclBpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLldhcm5pbmcsIG1lc3NhZ2UsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgd2FybmluZ1BpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLldhcm5pbmcsIG1lc3NhZ2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBpbmZvUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHZlcmJvc2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5WZXJib3NlLCBtZXNzYWdlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHZlcmJvc2VQaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5WZXJib3NlLCBtZXNzYWdlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpc1BpaUxvZ2dpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5waWlMb2dnaW5nRW5hYmxlZDtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vQXV0aEVycm9yXCI7XG5cbmV4cG9ydCBjb25zdCBTZXJ2ZXJFcnJvck1lc3NhZ2UgPSB7XG4gICAgc2VydmVyVW5hdmFpbGFibGU6IHtcbiAgICAgICAgY29kZTogXCJzZXJ2ZXJfdW5hdmFpbGFibGVcIixcbiAgICAgICAgZGVzYzogXCJTZXJ2ZXIgaXMgdGVtcG9yYXJpbHkgdW5hdmFpbGFibGUuXCJcbiAgICB9LFxuICAgIHVua25vd25TZXJ2ZXJFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInVua25vd25fc2VydmVyX2Vycm9yXCJcbiAgICB9LFxufTtcblxuLyoqXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciB3aXRoIHRoZSBzZXJ2ZXIgY29kZSwgZm9yIGV4YW1wbGUsIHVuYXZhaWxhYmlsaXR5LlxuICovXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3IgZXh0ZW5kcyBBdXRoRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiU2VydmVyRXJyb3JcIjtcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgU2VydmVyRXJyb3IucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlU2VydmVyVW5hdmFpbGFibGVFcnJvcigpOiBTZXJ2ZXJFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgU2VydmVyRXJyb3IoU2VydmVyRXJyb3JNZXNzYWdlLnNlcnZlclVuYXZhaWxhYmxlLmNvZGUsXG4gICAgICAgICAgICBTZXJ2ZXJFcnJvck1lc3NhZ2Uuc2VydmVyVW5hdmFpbGFibGUuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVua25vd25TZXJ2ZXJFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IFNlcnZlckVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXJFcnJvcihTZXJ2ZXJFcnJvck1lc3NhZ2UudW5rbm93blNlcnZlckVycm9yLmNvZGUsXG4gICAgICAgICAgICBlcnJvckRlc2MpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBXaW5kb3dVdGlscyB9IGZyb20gXCIuLy4uL3V0aWxzL1dpbmRvd1V0aWxzXCI7XG5pbXBvcnQgeyBNZXNzYWdlQ2FjaGUgfSBmcm9tIFwiLi9NZXNzYWdlQ2FjaGVcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLy4uL0xvZ2dlclwiO1xuaW1wb3J0IHsgTWVzc2FnZURpc3BhdGNoZXIgfSBmcm9tIFwiLi9NZXNzYWdlRGlzcGF0Y2hlclwiO1xuXG4vLyB0eXBlIG9mIHRoZSBtZXNzYWdlXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gICAgUkVESVJFQ1RfUkVRVUVTVCA9IFwiUkVESVJFQ1RfUkVRVUVTVFwiLFxuICAgIEhBU0ggPSBcIkhBU0hcIixcbiAgICBVUkxfVE9QX0ZSQU1FID0gXCJVUkxfVE9QX0ZSQU1FXCIsXG4gICAgVVJMX05BVklHQVRFID0gXCJVUkxfTkFWSUdBVEVcIlxufTtcblxuLy8gaGVscHMgZGlmZmVyZW50aWF0ZSB0b3BmcmFtZSBhbmQgaWZyYW1lIGNvbnRleHRcbmV4cG9ydCBlbnVtIFdpbmRvd1R5cGUge1xuICAgIFRPUF9GUkFNRSxcbiAgICBJRlJBTUVcbn07XG5cbi8vIG1lc3NhZ2UgcGF5bG9hZFxuZXhwb3J0IHR5cGUgUEFZTE9BRCA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZSxcbiAgICBkYXRhPzogc3RyaW5nXG59O1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUhlbHBlciB7XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBjdXJyZW50IHdpbmRvdyB0eXBlOiBUb3AgRnJhbWUgYXBwIG9yIElmcmFtZWQgYXBwXG4gICAgICovXG4gICAgc3RhdGljIGN1cnJlbnRXaW5kb3coKTogV2luZG93VHlwZSB7XG4gICAgICAgIGlmKFdpbmRvd1V0aWxzLmlzV2luZG93T25Ub3AoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFdpbmRvd1R5cGUuVE9QX0ZSQU1FO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoV2luZG93VXRpbHMuaXNJbklmcmFtZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gV2luZG93VHlwZS5JRlJBTUU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGEgbWVzc2FnZSBpbiB0aGUgZm9ybWF0OiBNRVNTQUdFX1NDSEVNQVxuICAgICAqXG4gICAgICogQHBhcmFtIG1lc3NhZ2VUeXBlXG4gICAgICogQHBhcmFtIGNvbnRlbnRUeXBlXG4gICAgICogQHBhcmFtIG1lc3NhZ2VEYXRhXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkTWVzc2FnZShtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VEYXRhPzogc3RyaW5nKTogUEFZTE9BRCB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IFBBWUxPQUQgPSB7XG4gICAgICAgICAgICB0eXBlOiBtZXNzYWdlVHlwZSxcbiAgICAgICAgICAgIGRhdGE6IG1lc3NhZ2VEYXRhXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdXRpbGl0eSB0byBoYW5kbGUgcmVkaXJlY3QoMzAyKSBmcm9tIHRoZSBzZXJ2aWNlIG9uIGJlaGFsZiBvZiB0aGUgaWZyYW1lZCBhcHBsaWNhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIG1lc3NhZ2VDYWNoZVxuICAgICAqIEBwYXJhbSB1cmxUb3BGcmFtZVxuICAgICAqIEBwYXJhbSB1cmxIYXNoXG4gICAgICogQHBhcmFtIGxvZ2dlclxuICAgICAqL1xuICAgIHN0YXRpYyBoYW5kbGVUb3BGcmFtZVJlZGlyZWN0KG1lc3NhZ2VDYWNoZTogTWVzc2FnZUNhY2hlLCB1cmxUb3BGcmFtZTogc3RyaW5nLCB1cmxIYXNoOiBzdHJpbmcsIGxvZ2dlcjogTG9nZ2VyKSB7XG4gICAgICAgIC8vIHdyaXRlIHRoZSBoYXNoIHRvIHRoZSBjYWNoZSBvZiB0aGUgcmVkaXJlY3QgVVJJLCBjbGVhciB0aGUgY2FjaGUoYW5kIGhlbmNlIHRoZSBzdGF0ZSkgZm9yIHRoZSBUb3AgRnJhbWUgZGVsZWdhdGlvbiBpbmRpY2F0aW9uXG4gICAgICAgIG1lc3NhZ2VDYWNoZS53cml0ZShNZXNzYWdlVHlwZS5IQVNILCB1cmxIYXNoKTtcbiAgICAgICAgbWVzc2FnZUNhY2hlLmVyYXNlKE1lc3NhZ2VUeXBlLlVSTF9UT1BfRlJBTUUpO1xuXG4gICAgICAgIC8vIG5hdmlnYXRlIHRvIHRoZSBzYXZlZCBVUkxcbiAgICAgICAgV2luZG93VXRpbHMubmF2aWdhdGVXaW5kb3codXJsVG9wRnJhbWUsIGxvZ2dlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSByZWRpcmVjdCBkZWxlZ2F0aW9uIGF0IHRoZSB0b3BmcmFtZSBvbiBiZWhhbGYgb2YgdGhlIGVtYmVkZGVkIChpZnJhbWVkKSBhcHBsaWNhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIG1lc3NhZ2VDYWNoZVxuICAgICAqIEBwYXJhbSB1cmxOYXZpZ2F0ZVxuICAgICAqL1xuICAgIHN0YXRpYyByZWRpcmVjdERlbGVnYXRpb25SZXF1ZXN0KG1lc3NhZ2VDYWNoZTogTWVzc2FnZUNhY2hlLCB1cmxOYXZpZ2F0ZTogc3RyaW5nLCB0b3BGcmFtZU9yaWdpbjogc3RyaW5nKSB7XG4gICAgICAgIC8vIHNhdmUgdGhlIFVSTCB0byBuYXZpZ2F0ZSBpbiB0aGUgY2FjaGUgYW5kIHNlbmQgYSByZXF1ZXN0IHRvIHRoZSB0b3BmcmFtZVxuICAgICAgICBtZXNzYWdlQ2FjaGUud3JpdGUoTWVzc2FnZVR5cGUuVVJMX05BVklHQVRFLCB1cmxOYXZpZ2F0ZSk7XG5cbiAgICAgICAgLy8gZGlzcGF0Y2ggdGhlIG1lc3NhZ2UgdG8gdGhlIHRvcCB3aW5kb3cgdG8gc3RhcnQgcmVkaXJlY3QgZmxvdyBieSBkZWxlZ2F0aW9uXG4gICAgICAgIGNvbnN0IHRhcmdldFdpbmRvdyA9IHdpbmRvdy50b3A7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IFBBWUxPQUQgPSBNZXNzYWdlSGVscGVyLmJ1aWxkTWVzc2FnZShNZXNzYWdlVHlwZS5SRURJUkVDVF9SRVFVRVNUKTtcbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuZGlzcGF0Y2hNZXNzYWdlKHRhcmdldFdpbmRvdywgbWVzc2FnZSwgdG9wRnJhbWVPcmlnaW4pO1xuICAgIH1cbn1cbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5DYWNoZUl0ZW0gfSBmcm9tIFwiLi9jYWNoZS9BY2Nlc3NUb2tlbkNhY2hlSXRlbVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbktleSB9IGZyb20gXCIuL2NhY2hlL0FjY2Vzc1Rva2VuS2V5XCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuVmFsdWUgfSBmcm9tIFwiLi9jYWNoZS9BY2Nlc3NUb2tlblZhbHVlXCI7XHJcbmltcG9ydCB7IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vU2VydmVyUmVxdWVzdFBhcmFtZXRlcnNcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBDbGllbnRJbmZvIH0gZnJvbSBcIi4vQ2xpZW50SW5mb1wiO1xyXG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4vSWRUb2tlblwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgQXV0aENhY2hlIH0gZnJvbSBcIi4vY2FjaGUvQXV0aENhY2hlXCI7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4vU2NvcGVTZXRcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBXaW5kb3dVdGlscyB9IGZyb20gXCIuL3V0aWxzL1dpbmRvd1V0aWxzXCI7XHJcbmltcG9ydCB7IFRva2VuVXRpbHMgfSBmcm9tIFwiLi91dGlscy9Ub2tlblV0aWxzXCI7XHJcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuL3V0aWxzL1RpbWVVdGlsc1wiO1xyXG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gXCIuL3V0aWxzL1VybFV0aWxzXCI7XHJcbmltcG9ydCB7IEVycm9yVXRpbHMgfSBmcm9tIFwiLi91dGlscy9FcnJvclV0aWxzXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlVXRpbHMgfSBmcm9tIFwiLi91dGlscy9SZXNwb25zZVV0aWxzXCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eUZhY3RvcnkgfSBmcm9tIFwiLi9hdXRob3JpdHkvQXV0aG9yaXR5RmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBidWlsZENvbmZpZ3VyYXRpb24sIFRlbGVtZXRyeU9wdGlvbnMgfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZSB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL2Vycm9yL1NlcnZlckVycm9yXCI7XHJcbmltcG9ydCB7IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IEF1dGhSZXNwb25zZSwgYnVpbGRSZXNwb25zZVN0YXRlT25seSB9IGZyb20gXCIuL0F1dGhSZXNwb25zZVwiO1xyXG5pbXBvcnQgVGVsZW1ldHJ5TWFuYWdlciBmcm9tIFwiLi90ZWxlbWV0cnkvVGVsZW1ldHJ5TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUZWxlbWV0cnlQbGF0Zm9ybSwgVGVsZW1ldHJ5Q29uZmlnIH0gZnJvbSBcIi4vdGVsZW1ldHJ5L1RlbGVtZXRyeVR5cGVzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VUeXBlLCBNZXNzYWdlSGVscGVyIH0gZnJvbSBcIi4vbWVzc2FnaW5nL01lc3NhZ2VIZWxwZXJcIjtcclxuaW1wb3J0IHsgTWVzc2FnZUNhY2hlIH0gZnJvbSBcIi4vbWVzc2FnaW5nL01lc3NhZ2VDYWNoZVwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlTGlzdGVuZXIgfSBmcm9tIFwiLi9tZXNzYWdpbmcvTWVzc2FnZUxpc3RlbmVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyxcclxuICAgIFNlcnZlckhhc2hQYXJhbUtleXMsXHJcbiAgICBJbnRlcmFjdGlvblR5cGUsXHJcbiAgICBsaWJyYXJ5VmVyc2lvbixcclxuICAgIFRlbXBvcmFyeUNhY2hlS2V5cyxcclxuICAgIFBlcnNpc3RlbnRDYWNoZUtleXMsXHJcbiAgICBFcnJvckNhY2hlS2V5cyxcclxuICAgIFJlcXVlc3RTdGF0dXMsXHJcbiAgICBJTlRFUkFDVElPTl9TVEFUVVNcclxufSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcclxuXHJcbi8vIGRlZmF1bHQgYXV0aG9yaXR5XHJcbmNvbnN0IERFRkFVTFRfQVVUSE9SSVRZID0gXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRvIGhhbmRsZSBpRnJhbWUgZ2VuZXJhdGlvbiwgUG9wdXAgV2luZG93IGNyZWF0aW9uIGFuZCByZWRpcmVjdCBoYW5kbGluZ1xyXG4gKi9cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgbXNhbDogT2JqZWN0O1xyXG4gICAgICAgIEN1c3RvbUV2ZW50OiBDdXN0b21FdmVudDtcclxuICAgICAgICBFdmVudDogRXZlbnQ7XHJcbiAgICAgICAgYWN0aXZlUmVuZXdhbHM6IHt9O1xyXG4gICAgICAgIHJlbmV3U3RhdGVzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgICAgIGNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlcyA6IHt9O1xyXG4gICAgICAgIHByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzOiB7fTtcclxuICAgICAgICBvcGVuZWRXaW5kb3dzOiBBcnJheTxXaW5kb3c+O1xyXG4gICAgICAgIHJlcXVlc3RUeXBlOiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIEBpZ25vcmVcclxuICogcmVzcG9uc2VfdHlwZSBmcm9tIE9wZW5JRENvbm5lY3RcclxuICogUmVmZXJlbmNlczogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29hdXRoLXYyLW11bHRpcGxlLXJlc3BvbnNlLXR5cGVzLTFfMC5odG1sICYgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NDkjc2VjdGlvbi00LjIuMVxyXG4gKiBTaW5jZSB3ZSBzdXBwb3J0IG9ubHkgaW1wbGljaXQgZmxvdyBpbiB0aGlzIGxpYnJhcnksIHdlIHJlc3RyaWN0IHRoZSByZXNwb25zZV90eXBlIHN1cHBvcnQgdG8gb25seSAndG9rZW4nIGFuZCAnaWRfdG9rZW4nXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBSZXNwb25zZVR5cGVzID0ge1xyXG4gICAgaWRfdG9rZW46IFwiaWRfdG9rZW5cIixcclxuICAgIHRva2VuOiBcInRva2VuXCIsXHJcbiAgICBpZF90b2tlbl90b2tlbjogXCJpZF90b2tlbiB0b2tlblwiXHJcbn07XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlUmVzdWx0IHtcclxuICAgIGVycm9yRGVzYzogc3RyaW5nO1xyXG4gICAgdG9rZW46IHN0cmluZztcclxuICAgIGVycm9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIEBpZ25vcmVcclxuICogRGF0YSB0eXBlIHRvIGhvbGQgaW5mb3JtYXRpb24gYWJvdXQgc3RhdGUgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXNwb25zZVN0YXRlSW5mbyA9IHtcclxuICAgIHN0YXRlOiBzdHJpbmc7XHJcbiAgICBzdGF0ZU1hdGNoOiBib29sZWFuO1xyXG4gICAgcmVxdWVzdFR5cGU6IHN0cmluZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIHR5cGUgYWxpYXMgZm9yIGFuIGF1dGhSZXNwb25zZUNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gKiB7QGxpbmsgKGF1dGhSZXNwb25zZUNhbGxiYWNrOnR5cGUpfVxyXG4gKiBAcGFyYW0gYXV0aEVyciBlcnJvciBjcmVhdGVkIGZvciBmYWlsdXJlIGNhc2VzXHJcbiAqIEBwYXJhbSByZXNwb25zZSByZXNwb25zZSBjb250YWluaW5nIHRva2VuIHN0cmluZ3MgaW4gc3VjY2VzcyBjYXNlcywgb3IganVzdCBzdGF0ZSB2YWx1ZSBpbiBlcnJvciBjYXNlc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgYXV0aFJlc3BvbnNlQ2FsbGJhY2sgPSAoYXV0aEVycjogQXV0aEVycm9yLCByZXNwb25zZT86IEF1dGhSZXNwb25zZSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBBIHR5cGUgYWxpYXMgZm9yIGEgdG9rZW5SZWNlaXZlZENhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gKiB7QGxpbmsgKHRva2VuUmVjZWl2ZWRDYWxsYmFjazp0eXBlKX1cclxuICogQHJldHVybnMgcmVzcG9uc2Ugb2YgdHlwZSB7QGxpbmsgKEF1dGhSZXNwb25zZTp0eXBlKX1cclxuICogVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBnZXQgdGhlIGNhbGwgYmFjayBvbmNlIHRoaXMgQVBJIGlzIGNvbXBsZXRlZCAoZWl0aGVyIHN1Y2Nlc3NmdWxseSBvciB3aXRoIGEgZmFpbHVyZSkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgPSAocmVzcG9uc2U6IEF1dGhSZXNwb25zZSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBBIHR5cGUgYWxpYXMgZm9yIGEgZXJyb3JSZWNlaXZlZENhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gKiB7QGxpbmsgKGVycm9yUmVjZWl2ZWRDYWxsYmFjazp0eXBlKX1cclxuICogQHJldHVybnMgcmVzcG9uc2Ugb2YgdHlwZSB7QGxpbmsgKEF1dGhFcnJvcjpjbGFzcyl9XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGFjY291bnQgc3RhdGVcclxuICovXHJcbmV4cG9ydCB0eXBlIGVycm9yUmVjZWl2ZWRDYWxsYmFjayA9IChhdXRoRXJyOiBBdXRoRXJyb3IsIGFjY291bnRTdGF0ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIHRvcCBmcmFtZSBhcHBsaWNhdGlvbiBjYWxscyB0aGlzIGZ1bmN0aW9uIHRvIGFjayB0byBwcm9jZWVkXHJcbiAqIEBwYXJhbSBtZXNzYWdlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBwcm9jZXNzSWZyYW1lUmVkaXJlY3RDYWxsYmFjayA9ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBBIHR5cGUgYWxpYXMgZm9yIGEgaWZyYW1lUmVkaXJlY3RDYWxsYmFjayBmdW5jdGlvbi5cclxuICoge0BsaW5rIChpZnJhbWVSZWRpcmVjdENhbGxiYWNrOnR5cGUpfVxyXG4gKiBAcmV0dXJucyByZXNwb25zZSBvZiB0eXBlIHtAbGluayAoY2FsbGJhY2sgZnVuY3Rpb24pfVxyXG4gKiBUaGUgZnVuY3Rpb24gdGhlIHRvcCBmcmFtZWQgYXBwbGljYXRpb24gbGlzdGVucyB0byBmb3IgYSBtZXNzYWdlIGZyb20gaWZyYW1lZCBhcHBsaWNhdGlvbiB3aGVuIGNvbnNlbnQgaXMgbWFuZGF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBpZnJhbWVSZWRpcmVjdENhbGxiYWNrID0gKGNhbGxiYWNrOiBwcm9jZXNzSWZyYW1lUmVkaXJlY3RDYWxsYmFjaykgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBVc2VyQWdlbnRBcHBsaWNhdGlvbiBjbGFzc1xyXG4gKlxyXG4gKiBPYmplY3QgSW5zdGFuY2UgdGhhdCB0aGUgZGV2ZWxvcGVyIGNhbiB1c2UgdG8gbWFrZSBsb2dpblhYIE9SIGFjcXVpcmVUb2tlblhYIGZ1bmN0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVzZXJBZ2VudEFwcGxpY2F0aW9uIHtcclxuXHJcbiAgICAvLyBpbnB1dCBDb25maWd1cmF0aW9uIGJ5IHRoZSBkZXZlbG9wZXIvdXNlclxyXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgLy8gY2FsbGJhY2tzIGZvciB0b2tlbi9lcnJvclxyXG4gICAgcHJpdmF0ZSBhdXRoUmVzcG9uc2VDYWxsYmFjazogYXV0aFJlc3BvbnNlQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0b2tlblJlY2VpdmVkQ2FsbGJhY2s6IHRva2VuUmVjZWl2ZWRDYWxsYmFjayA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVycm9yUmVjZWl2ZWRDYWxsYmFjazogZXJyb3JSZWNlaXZlZENhbGxiYWNrID0gbnVsbDtcclxuXHJcbiAgICAvLyBBZGRlZCBmb3IgcmVhZGFiaWxpdHkgYXMgdGhlc2UgcGFyYW1zIGFyZSB2ZXJ5IGZyZXF1ZW50bHkgdXNlZFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcclxuICAgIHByaXZhdGUgY2xpZW50SWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW5Db29raWU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHRlbGVtZXRyeU1hbmFnZXI6IFRlbGVtZXRyeU1hbmFnZXI7XHJcblxyXG4gICAgLy8gQ2FjaGUgYW5kIEFjY291bnQgaW5mbyByZWZlcnJlZCBhY3Jvc3MgdG9rZW4gZ3JhbnQgZmxvd1xyXG4gICAgcHVibGljIGNhY2hlU3RvcmFnZTogQXV0aENhY2hlO1xyXG4gICAgcHJpdmF0ZSBhY2NvdW50OiBBY2NvdW50O1xyXG5cclxuICAgIC8vIHN0YXRlIHZhcmlhYmxlc1xyXG4gICAgcHJpdmF0ZSBzaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHNpbGVudExvZ2luOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSByZWRpcmVjdENhbGxiYWNrc1NldDogYm9vbGVhbjtcclxuXHJcbiAgICAvLyBtZXNzYWdlIGludGVyZmFjZVxyXG4gICAgcHJpdmF0ZSBtZXNzYWdlQ2FjaGU6IE1lc3NhZ2VDYWNoZTtcclxuICAgIHByaXZhdGUgbWVzc2FnZUxpc3RlbmVyOiBNZXNzYWdlTGlzdGVuZXI7XHJcbiAgICBwcml2YXRlIGlmcmFtZVJlZGlyZWN0Q2FsbGJhY2s6IGlmcmFtZVJlZGlyZWN0Q2FsbGJhY2sgPSBudWxsO1xyXG5cclxuICAgIC8vIEF1dGhvcml0eSBGdW5jdGlvbmFsaXR5XHJcbiAgICBwcm90ZWN0ZWQgYXV0aG9yaXR5SW5zdGFuY2U6IEF1dGhvcml0eTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHRlciBmb3IgdGhlIGF1dGhvcml0eSBVUkxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdXRob3JpdHlcclxuICAgICAqL1xyXG4gICAgLy8gSWYgdGhlIGRldmVsb3BlciBwYXNzZXMgYW4gYXV0aG9yaXR5LCBjcmVhdGUgYW4gaW5zdGFuY2VcclxuICAgIHB1YmxpYyBzZXQgYXV0aG9yaXR5KHZhbCkge1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHZhbCwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgdG8gbWFuYWdlIHRoZSBhdXRob3JpdHkgVVJMLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGF1dGhvcml0eVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGF1dGhvcml0eSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhvcml0eUluc3RhbmNlLkNhbm9uaWNhbEF1dGhvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY3VycmVudCBhdXRob3JpdHkgaW5zdGFuY2UgZnJvbSB0aGUgTVNBTCBjb25maWd1cmF0aW9uIG9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtAbGluayBBdXRob3JpdHl9IGF1dGhvcml0eSBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QXV0aG9yaXR5SW5zdGFuY2UoKTogQXV0aG9yaXR5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICogQ29uc3RydWN0b3IgZm9yIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbiB1c2VkIHRvIGluc3RhbnRpYXRlIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBJbXBvcnRhbnQgYXR0cmlidXRlcyBpbiB0aGUgQ29uZmlndXJhdGlvbiBvYmplY3QgZm9yIGF1dGggYXJlOlxyXG4gICAgICogLSBjbGllbnRJRDogdGhlIGFwcGxpY2F0aW9uIElEIG9mIHlvdXIgYXBwbGljYXRpb24uXHJcbiAgICAgKiBZb3UgY2FuIG9idGFpbiBvbmUgYnkgcmVnaXN0ZXJpbmcgeW91ciBhcHBsaWNhdGlvbiB3aXRoIG91ciBBcHBsaWNhdGlvbiByZWdpc3RyYXRpb24gcG9ydGFsIDogaHR0cHM6Ly9wb3J0YWwuYXp1cmUuY29tLyNibGFkZS9NaWNyb3NvZnRfQUFEX0lBTS9BY3RpdmVEaXJlY3RvcnlNZW51QmxhZGUvUmVnaXN0ZXJlZEFwcHNQcmV2aWV3XHJcbiAgICAgKiAtIGF1dGhvcml0eTogdGhlIGF1dGhvcml0eSBVUkwgZm9yIHlvdXIgYXBwbGljYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogSW4gQXp1cmUgQUQsIGF1dGhvcml0eSBpcyBhIFVSTCBpbmRpY2F0aW5nIHRoZSBBenVyZSBhY3RpdmUgZGlyZWN0b3J5IHRoYXQgTVNBTCB1c2VzIHRvIG9idGFpbiB0b2tlbnMuXHJcbiAgICAgKiBJdCBpcyBvZiB0aGUgZm9ybSBodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vJmx0O0VudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlJmd0Oy5cclxuICAgICAqIElmIHlvdXIgYXBwbGljYXRpb24gc3VwcG9ydHMgQWNjb3VudHMgaW4gb25lIG9yZ2FuaXphdGlvbmFsIGRpcmVjdG9yeSwgcmVwbGFjZSBcIkVudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlXCIgdmFsdWUgd2l0aCB0aGUgVGVuYW50IElkIG9yIFRlbmFudCBuYW1lIChmb3IgZXhhbXBsZSwgY29udG9zby5taWNyb3NvZnQuY29tKS5cclxuICAgICAqIElmIHlvdXIgYXBwbGljYXRpb24gc3VwcG9ydHMgQWNjb3VudHMgaW4gYW55IG9yZ2FuaXphdGlvbmFsIGRpcmVjdG9yeSwgcmVwbGFjZSBcIkVudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlXCIgdmFsdWUgd2l0aCBvcmdhbml6YXRpb25zLlxyXG4gICAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0cyBBY2NvdW50cyBpbiBhbnkgb3JnYW5pemF0aW9uYWwgZGlyZWN0b3J5IGFuZCBwZXJzb25hbCBNaWNyb3NvZnQgYWNjb3VudHMsIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggY29tbW9uLlxyXG4gICAgICogVG8gcmVzdHJpY3Qgc3VwcG9ydCB0byBQZXJzb25hbCBNaWNyb3NvZnQgYWNjb3VudHMgb25seSwgcmVwbGFjZSBcIkVudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlXCIgdmFsdWUgd2l0aCBjb25zdW1lcnMuXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEluIEF6dXJlIEIyQywgYXV0aG9yaXR5IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vJmx0O2luc3RhbmNlJmd0Oy90ZnAvJmx0O3RlbmFudCZndDsvJmx0O3BvbGljeU5hbWUmZ3Q7L1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QGxpbmsgKENvbmZpZ3VyYXRpb246dHlwZSl9IGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciB0aGUgTVNBTCBVc2VyQWdlbnRBcHBsaWNhdGlvbiBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgQ29uZmlndXJhdGlvblxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gYnVpbGRDb25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIGNhbGxiYWNrIGJvb2xlYW5cclxuICAgICAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gdGhpcy5jb25maWcuc3lzdGVtLmxvZ2dlcjtcclxuICAgICAgICB0aGlzLmNsaWVudElkID0gdGhpcy5jb25maWcuYXV0aC5jbGllbnRJZDtcclxuICAgICAgICB0aGlzLmluQ29va2llID0gdGhpcy5jb25maWcuY2FjaGUuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZTtcclxuXHJcbiAgICAgICAgdGhpcy50ZWxlbWV0cnlNYW5hZ2VyID0gdGhpcy5nZXRUZWxlbWV0cnlNYW5hZ2VyRnJvbUNvbmZpZyh0aGlzLmNvbmZpZy5zeXN0ZW0udGVsZW1ldHJ5LCB0aGlzLmNsaWVudElkKTtcclxuXHJcbiAgICAgICAgLy8gaWYgbm8gYXV0aG9yaXR5IGlzIHBhc3NlZCwgc2V0IHRoZSBkZWZhdWx0OiBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxyXG4gICAgICAgIHRoaXMuYXV0aG9yaXR5ID0gdGhpcy5jb25maWcuYXV0aC5hdXRob3JpdHkgfHwgREVGQVVMVF9BVVRIT1JJVFk7XHJcblxyXG4gICAgICAgIC8vIGNhY2hlIGtleXMgbXNhbCAtIHR5cGVzY3JpcHQgdGhyb3dzIGFuIGVycm9yIGlmIGFueSB2YWx1ZSBvdGhlciB0aGFuIFwibG9jYWxTdG9yYWdlXCIgb3IgXCJzZXNzaW9uU3RvcmFnZVwiIGlzIHBhc3NlZFxyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlID0gbmV3IEF1dGhDYWNoZSh0aGlzLmNsaWVudElkLCB0aGlzLmNvbmZpZy5jYWNoZS5jYWNoZUxvY2F0aW9uLCB0aGlzLmluQ29va2llKTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgbWVzc2FnZSBpbnRlcmZhY2VcclxuICAgICAgICB0aGlzLm1lc3NhZ2VDYWNoZSA9IG5ldyBNZXNzYWdlQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUxpc3RlbmVyID0gbmV3IE1lc3NhZ2VMaXN0ZW5lcih0aGlzLm1lc3NhZ2VDYWNoZSwgdGhpcy5sb2dnZXIsIHRoaXMuY29uZmlnLmJyb2tlci5lbWJlZGRlZEZyYW1lT3JpZ2luKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB3aW5kb3cgaGFuZGxpbmcgY29kZVxyXG4gICAgICAgIHdpbmRvdy5hY3RpdmVSZW5ld2FscyA9IHt9O1xyXG4gICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xyXG4gICAgICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXMgPSB7IH07XHJcbiAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzID0geyB9O1xyXG4gICAgICAgIHdpbmRvdy5tc2FsID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc3QgdXJsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgIGNvbnN0IHVybENvbnRhaW5zSGFzaCA9IFVybFV0aWxzLnVybENvbnRhaW5zSGFzaCh1cmxIYXNoKTtcclxuXHJcbiAgICAgICAgLy8gcmVhZCB0aGUgaGFzaCBzdG9yZWQgdGhyb3VnaCB0aGUgdG9wZnJhbWUgaW4gcmVkaXJlY3QgYnkgZGVsZWdhdGlvbiBmbG93XHJcbiAgICAgICAgY29uc3QgdXJsVG9wRnJhbWUgPSB0aGlzLm1lc3NhZ2VDYWNoZS5yZWFkKE1lc3NhZ2VUeXBlLlVSTF9UT1BfRlJBTUUpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZFVybEhhc2ggPSB0aGlzLm1lc3NhZ2VDYWNoZS5yZWFkKE1lc3NhZ2VUeXBlLkhBU0gpO1xyXG5cclxuICAgICAgICAvLyBPbiB0aGUgc2VydmVyIDMwMiAtIFJlZGlyZWN0LCBoYW5kbGUgdGhpc1xyXG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhciAmJiB1cmxDb250YWluc0hhc2ggJiYgIVdpbmRvd1V0aWxzLmlzSW5JZnJhbWUoKSAmJiAhV2luZG93VXRpbHMuaXNJblBvcHVwKCkpIHtcclxuICAgICAgICAgICAgLy8gUkVESVJFQ1RfSUZSQU1FUzogaWYgd2UgYXJlIGluIHRvcGZyYW1lLCBzdG9yZSB0aGUgaGFzaCBpbiB0aGUgY2FjaGVcclxuICAgICAgICAgICAgaWYodXJsVG9wRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VIZWxwZXIuaGFuZGxlVG9wRnJhbWVSZWRpcmVjdCh0aGlzLm1lc3NhZ2VDYWNoZSwgdXJsVG9wRnJhbWUsIHVybEhhc2gsIHRoaXMubG9nZ2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb25SZXNwb25zZSh1cmxIYXNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSRURJUkVDVF9JRlJBTUVTOiBIYW5kbGUgdGhlIGF1dGggcmVzcG9uc2Ugb24gcmVsb2FkIGlmIHRoZSB0b3BmcmFtZSByZWRpcmVjdGVkIG9uIHRoZSBpZnJhbWVkIGFwcCdzIGJlaGFsZiBhbmQgc2F2ZWQgdGhlIGhhc2hcclxuICAgICAgICBlbHNlIGlmIChXaW5kb3dVdGlscy5pc0luSWZyYW1lKCkgJiYgY2FjaGVkVXJsSGFzaCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UoY2FjaGVkVXJsSGFzaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICNyZWdpb24gUmVkaXJlY3QgQ2FsbGJhY2tzXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqIFNldCB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zIGZvciB0aGUgcmVkaXJlY3QgZmxvdyB0byBzZW5kIGJhY2sgdGhlIHN1Y2Nlc3Mgb3IgZXJyb3Igb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHtAbGluayAodG9rZW5SZWNlaXZlZENhbGxiYWNrOnR5cGUpfSBzdWNjZXNzQ2FsbGJhY2sgLSBDYWxsYmFjayB3aGljaCBjb250YWlucyB0aGUgQXV0aFJlc3BvbnNlIG9iamVjdCwgY29udGFpbmluZyBkYXRhIGZyb20gdGhlIHNlcnZlci5cclxuICAgICAqIEBwYXJhbSB7QGxpbmsgKGVycm9yUmVjZWl2ZWRDYWxsYmFjazp0eXBlKX0gZXJyb3JDYWxsYmFjayAtIENhbGxiYWNrIHdoaWNoIGNvbnRhaW5zIGEgQXV0aEVycm9yIG9iamVjdCwgY29udGFpbmluZyBlcnJvciBkYXRhIGZyb20gZWl0aGVyIHRoZSBzZXJ2ZXJcclxuICAgICAqIG9yIHRoZSBsaWJyYXJ5LCBkZXBlbmRpbmcgb24gdGhlIG9yaWdpbiBvZiB0aGUgZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2sodG9rZW5SZWNlaXZlZENhbGxiYWNrOiB0b2tlblJlY2VpdmVkQ2FsbGJhY2ssIGVycm9yUmVjZWl2ZWRDYWxsYmFjazogZXJyb3JSZWNlaXZlZENhbGxiYWNrKTogdm9pZDtcclxuICAgIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2soYXV0aENhbGxiYWNrOiBhdXRoUmVzcG9uc2VDYWxsYmFjayk6IHZvaWQ7XHJcbiAgICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrKGF1dGhPclRva2VuQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrIHwgdG9rZW5SZWNlaXZlZENhbGxiYWNrLCBlcnJvclJlY2VpdmVkQ2FsbGJhY2s/OiBlcnJvclJlY2VpdmVkQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWF1dGhPclRva2VuQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvclV0aWxzLnRocm93RXJyb3JBbmRDbGVhclRlbXBDYWNoZSh0aGlzLmNhY2hlU3RvcmFnZSwgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUludmFsaWRDYWxsYmFja09iamVjdEVycm9yKGF1dGhPclRva2VuQ2FsbGJhY2spKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBjYWxsYmFja3NcclxuICAgICAgICBpZiAoZXJyb3JSZWNlaXZlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrID0gYXV0aE9yVG9rZW5DYWxsYmFjayBhcyB0b2tlblJlY2VpdmVkQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrID0gZXJyb3JSZWNlaXZlZENhbGxiYWNrO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiVGhpcyBvdmVybG9hZCBmb3IgY2FsbGJhY2sgaXMgZGVwcmVjYXRlZCAtIHBsZWFzZSBjaGFuZ2UgdGhlIGZvcm1hdCBvZiB0aGUgY2FsbGJhY2tzIHRvIGEgc2luZ2xlIGNhbGxiYWNrIGFzIHNob3duOiAoZXJyOiBBdXRoRXJyb3IsIHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UpLlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUNhbGxiYWNrID0gYXV0aE9yVG9rZW5DYWxsYmFjayBhcyBhdXRoUmVzcG9uc2VDYWxsYmFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBPbiB0aGUgc2VydmVyIDMwMiAtIFJlZGlyZWN0LCBoYW5kbGUgdGhpc1xyXG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xyXG4gICAgICAgICAgICBjb25zdCBjYWNoZWRIYXNoID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShUZW1wb3JhcnlDYWNoZUtleXMuVVJMX0hBU0gpO1xyXG4gICAgICAgICAgICBpZiAoY2FjaGVkSGFzaCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ2FsbEJhY2soY2FjaGVkSGFzaCwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdXRoUmVzcG9uc2VIYW5kbGVyKGludGVyYWN0aW9uVHlwZTogSW50ZXJhY3Rpb25UeXBlLCByZXNwb25zZTogQXV0aFJlc3BvbnNlLCByZXNvbHZlPzogYW55KSA6IHZvaWQge1xyXG4gICAgICAgIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvclJlY2VpdmVkQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dGhSZXNwb25zZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXApIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkSW50ZXJhY3Rpb25UeXBlRXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXV0aEVycm9ySGFuZGxlcihpbnRlcmFjdGlvblR5cGU6IEludGVyYWN0aW9uVHlwZSwgYXV0aEVycjogQXV0aEVycm9yLCByZXNwb25zZTogQXV0aFJlc3BvbnNlLCByZWplY3Q/OiBhbnkpIDogdm9pZCB7XHJcbiAgICAgICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvclJlY2VpdmVkQ2FsbGJhY2soYXV0aEVyciwgcmVzcG9uc2UuYWNjb3VudFN0YXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlQ2FsbGJhY2soYXV0aEVyciwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCkge1xyXG4gICAgICAgICAgICByZWplY3QoYXV0aEVycik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkSW50ZXJhY3Rpb25UeXBlRXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbCBiYWNrIHJlZ2lzdGVyZWQgYnkgdGhlIHRvcCBmcmFtZSB0byBub3RpZnkgdGhlIHVzZXIgZm9yIGlmcmFtZWQgYXBwbGljYXRpb24gcmVkaXJlY3QgcmVxdWVzdHNcclxuICAgICAqIEBwYXJhbSBpZnJhbWVSZWRpcmVjdENhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVJlZGlyZWN0SW5JZnJhbWVzKGlmcmFtZVJlZGlyZWN0Q2FsbGJhY2s6IGlmcmFtZVJlZGlyZWN0Q2FsbGJhY2spIHtcclxuICAgICAgICBpZihpZnJhbWVSZWRpcmVjdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxpc3RlbmVyLnNldENhbGxCYWNrKHRydWUsIGlmcmFtZVJlZGlyZWN0Q2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB3aGVuIGluaXRpYXRpbmcgdGhlIGxvZ2luIHByb2Nlc3MgYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIncyBicm93c2VyIHRvIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50LlxyXG4gICAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxyXG4gICAgICovXHJcbiAgICBsb2dpblJlZGlyZWN0KHJlcXVlc3Q/OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiB2b2lkIHtcclxuICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBjYWxsYmFja3MgYXJlIG5vdCBzZXQgYmVmb3JlIHJlZGlyZWN0XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0KSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yVXRpbHMudGhyb3dFcnJvckFuZENsZWFyVGVtcENhY2hlKHRoaXMuY2FjaGVTdG9yYWdlLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIHRydWUsIHJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHdoZW4geW91IHdhbnQgdG8gb2J0YWluIGFuIGFjY2Vzc190b2tlbiBmb3IgeW91ciBBUEkgYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIncyBicm93c2VyIHdpbmRvdyB0byB0aGUgYXV0aG9yaXphdGlvbiBlbmRwb2ludC5cclxuICAgICAqIEBwYXJhbSB7QGxpbmsgKEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyczp0eXBlKX1cclxuICAgICAqXHJcbiAgICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xyXG4gICAgICovXHJcbiAgICBhY3F1aXJlVG9rZW5SZWRpcmVjdChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVJlcXVlc3RFcnJvcigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRocm93IGVycm9yIGlmIGNhbGxiYWNrcyBhcmUgbm90IHNldCBiZWZvcmUgcmVkaXJlY3RcclxuICAgICAgICBpZiAoIXRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkludGVyYWN0aXZlKENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCwgZmFsc2UsIHJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyB2aWEgb3BlbmluZyBhIHBvcHVwIHdpbmRvdyBpbiB0aGUgdXNlcidzIGJyb3dzZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIChBdXRoZW50aWNhdGlvblBhcmFtZXRlcnM6dHlwZSl9XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPEF1dGhSZXNwb25zZT59IC0gYSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXR1cm5zIHRoZSB7QGxpbmsgQXV0aFJlc3BvbnNlfSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgbG9naW5Qb3B1cChyZXF1ZXN0PzogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW50ZXJhY3RpdmUoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwLCB0cnVlLCByZXF1ZXN0LCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHdoZW4geW91IHdhbnQgdG8gb2J0YWluIGFuIGFjY2Vzc190b2tlbiBmb3IgeW91ciBBUEkgdmlhIG9wZW5pbmcgYSBwb3B1cCB3aW5kb3cgaW4gdGhlIHVzZXIncyBicm93c2VyXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cclxuICAgICAqXHJcbiAgICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPEF1dGhSZXNwb25zZT59IC0gYSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXR1cm5zIHRoZSB7QGxpbmsgQXV0aFJlc3BvbnNlfSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgYWNxdWlyZVRva2VuUG9wdXAocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcclxuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVJlcXVlc3RFcnJvcigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXAsIGZhbHNlLCByZXF1ZXN0LCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNyZWdpb24gQWNxdWlyZSBUb2tlblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyBvciB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJLFxyXG4gICAgICogZWl0aGVyIGJ5IHJlZGlyZWN0aW5nIHRoZSB1c2VyJ3MgYnJvd3NlciB3aW5kb3cgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQgb3IgdmlhIG9wZW5pbmcgYSBwb3B1cCB3aW5kb3cgaW4gdGhlIHVzZXIncyBicm93c2VyLlxyXG4gICAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxyXG4gICAgICpcclxuICAgICAqIFRvIHJlbmV3IGlkVG9rZW4sIHBsZWFzZSBwYXNzIGNsaWVudElkIGFzIHRoZSBvbmx5IHNjb3BlIGluIHRoZSBBdXRoZW50aWNhdGlvbiBQYXJhbWV0ZXJzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYWNxdWlyZVRva2VuSW50ZXJhY3RpdmUoaW50ZXJhY3Rpb25UeXBlOiBJbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsOiBib29sZWFuLCByZXF1ZXN0PzogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCByZXNvbHZlPzogYW55LCByZWplY3Q/OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Qcm9ncmVzcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oSU5URVJBQ1RJT05fU1RBVFVTKTtcclxuXHJcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBpbiBwcm9ncmVzcywgZG8gbm90IHByb2NlZWRcclxuICAgICAgICBpZiAoaW50ZXJhY3Rpb25Qcm9ncmVzcyA9PT0gUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUykge1xyXG4gICAgICAgICAgICBjb25zdCB0aHJvd25FcnJvciA9IGlzTG9naW5DYWxsID8gQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUxvZ2luSW5Qcm9ncmVzc0Vycm9yKCkgOiBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQWNxdWlyZVRva2VuSW5Qcm9ncmVzc0Vycm9yKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlT25seVJlc3BvbnNlID0gYnVpbGRSZXNwb25zZVN0YXRlT25seSh0aGlzLmdldEFjY291bnRTdGF0ZShyZXF1ZXN0ICYmIHJlcXVlc3Quc3RhdGUpKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoRXJyb3JIYW5kbGVyKGludGVyYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHRocm93bkVycm9yLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVPbmx5UmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICByZWplY3QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBleHRyYVNjb3Blc1RvQ29uc2VudCBpcyBwYXNzZWQgaW4gbG9naW5DYWxsLCBhcHBlbmQgdGhlbSB0byB0aGUgbG9naW4gcmVxdWVzdFxyXG4gICAgICAgIGNvbnN0IHNjb3BlczogQXJyYXk8c3RyaW5nPiA9IGlzTG9naW5DYWxsID8gdGhpcy5hcHBlbmRTY29wZXMocmVxdWVzdCkgOiByZXF1ZXN0LnNjb3BlcztcclxuXHJcbiAgICAgICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzLCAhaXNMb2dpbkNhbGwpO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIGFjY291bnQgb2JqZWN0IGlmIGEgc2Vzc2lvbiBleGlzdHNcclxuICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gKHJlcXVlc3QgJiYgcmVxdWVzdC5hY2NvdW50ICYmICFpc0xvZ2luQ2FsbCkgPyByZXF1ZXN0LmFjY291bnQgOiB0aGlzLmdldEFjY291bnQoKTtcclxuXHJcbiAgICAgICAgLy8gSWYgbm8gc2Vzc2lvbiBleGlzdHMsIHByb21wdCB0aGUgdXNlciB0byBsb2dpbi5cclxuICAgICAgICBpZiAoIWFjY291bnQgJiYgIVNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLmlzU1NPUGFyYW0ocmVxdWVzdCkpIHtcclxuICAgICAgICAgICAgaWYgKGlzTG9naW5DYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IEFEQUwgaWRfdG9rZW4gaWYgZXhpc3RzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZGFsSWRUb2tlbiA9IHRoaXMuZXh0cmFjdEFEQUxJZFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2lsZW50IGxvZ2luIGlmIEFEQUwgaWRfdG9rZW4gaXMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSAtIFNTT1xyXG4gICAgICAgICAgICAgICAgaWYgKGFkYWxJZFRva2VuICYmICFzY29wZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQURBTCdzIGlkVG9rZW4gZXhpc3RzLiBFeHRyYWN0aW5nIGxvZ2luIGluZm9ybWF0aW9uIGZyb20gQURBTCdzIGlkVG9rZW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0gdGhpcy5idWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlblNpbGVudCh0b2tlblJlcXVlc3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJVbmlmaWVkIGNhY2hlIGNhbGwgaXMgc3VjY2Vzc2Z1bFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlSGFuZGxlcihpbnRlcmFjdGlvblR5cGUsIHJlc3BvbnNlLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiRXJyb3Igb2NjdXJyZWQgZHVyaW5nIHVuaWZpZWQgY2FjaGUgQVRTOiBcIiArIGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2NlZWQgdG8gbG9naW4gc2luY2UgQVRTIGZhaWxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkhlbHBlcihudWxsLCBpbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsLCByZXF1ZXN0LCBzY29wZXMsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBObyBBREFMIHRva2VuIGZvdW5kLCBwcm9jZWVkIHRvIGxvZ2luXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkhlbHBlcihudWxsLCBpbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsLCByZXF1ZXN0LCBzY29wZXMsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQWNxdWlyZVRva2VuIGNhbGwsIGJ1dCBubyBhY2NvdW50IG9yIGNvbnRleHQgZ2l2ZW4sIHNvIHRocm93IGVycm9yXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvclV0aWxzLnRocm93RXJyb3JBbmRDbGVhclRlbXBDYWNoZSh0aGlzLmNhY2hlU3RvcmFnZSwgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVXNlciBzZXNzaW9uIGV4aXN0c1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkhlbHBlcihhY2NvdW50LCBpbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsLCByZXF1ZXN0LCBzY29wZXMsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGFjcXVpcmVUb2tlblxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhY3F1aXJlVG9rZW5IZWxwZXIoYWNjb3VudDogQWNjb3VudCwgaW50ZXJhY3Rpb25UeXBlOiBJbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsOiBib29sZWFuLCByZXF1ZXN0PzogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBzY29wZXM/OiBBcnJheTxzdHJpbmc+LCByZXNvbHZlPzogYW55LCByZWplY3Q/OiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIFRyYWNrIHRoZSBhY3F1aXJlVG9rZW4gcHJvZ3Jlc3NcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKElOVEVSQUNUSU9OX1NUQVRVUywgUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyk7XHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzY29wZXMgPyBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKSA6IHRoaXMuY2xpZW50SWQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgbGV0IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnM7XHJcbiAgICAgICAgY29uc3QgYWNxdWlyZVRva2VuQXV0aG9yaXR5ID0gKHJlcXVlc3QgJiYgcmVxdWVzdC5hdXRob3JpdHkpID8gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShyZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSkgOiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xyXG5cclxuICAgICAgICBsZXQgcG9wVXBXaW5kb3c6IFdpbmRvdztcclxuICAgICAgICBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXApIHtcclxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBwb3B1cCB3aW5kb3dcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHBvcFVwV2luZG93ID0gdGhpcy5vcGVuUG9wdXAoXCJhYm91dDpibGFua1wiLCBcIm1zYWxcIiwgQ29uc3RhbnRzLnBvcFVwV2lkdGgsIENvbnN0YW50cy5wb3BVcEhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHVzaCBwb3B1cCB3aW5kb3cgaGFuZGxlIG9udG8gc3RhY2sgZm9yIHRyYWNraW5nXHJcbiAgICAgICAgICAgICAgICBXaW5kb3dVdGlscy50cmFja1BvcHVwKHBvcFVwV2luZG93KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShJTlRFUkFDVElPTl9TVEFUVVMsIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5jb2RlICsgXCI6XCIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuZGVzYyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEVycm9yQ2FjaGVLZXlzLkVSUk9SLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuY29kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEVycm9yQ2FjaGVLZXlzLkVSUk9SX0RFU0MsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5kZXNjKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVBvcHVwV2luZG93RXJyb3IoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcG9wVXBXaW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LnJlc29sdmVFbmRwb2ludHNBc3luYygpLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBPbiBGdWxmaWxsbWVudFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVR5cGU6IHN0cmluZyA9IGlzTG9naW5DYWxsID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IHRoaXMuZ2V0VG9rZW5UeXBlKGFjY291bnQsIHNjb3BlcywgZmFsc2UpO1xyXG4gICAgICAgICAgICBsZXQgbG9naW5TdGFydFBhZ2U6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0xvZ2luQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHVzZXIgc2V0cyB0aGUgbG9naW4gc3RhcnQgcGFnZSAtIGFuZ3VsYXIgb25seT8/XHJcbiAgICAgICAgICAgICAgICBsb2dpblN0YXJ0UGFnZSA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLkFOR1VMQVJfTE9HSU5fUkVRVUVTVCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxvZ2luU3RhcnRQYWdlIHx8IGxvZ2luU3RhcnRQYWdlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW5TdGFydFBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShUZW1wb3JhcnlDYWNoZUtleXMuQU5HVUxBUl9MT0dJTl9SRVFVRVNULCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxyXG4gICAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgICAgIHNjb3BlcyxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QgJiYgcmVxdWVzdC5zdGF0ZVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWNoZUVudHJpZXMoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50LCBsb2dpblN0YXJ0UGFnZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXHJcbiAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5wb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQsIHJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29uc3RydWN0IHVybE5hdmlnYXRlXHJcbiAgICAgICAgICAgIGNvbnN0IHVybE5hdmlnYXRlID0gVXJsVXRpbHMuY3JlYXRlTmF2aWdhdGVVcmwoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KSArIENvbnN0YW50cy5yZXNwb25zZV9tb2RlX2ZyYWdtZW50O1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHN0YXRlIGluIGNhY2hlXHJcbiAgICAgICAgICAgIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0xvZ2luQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLlNUQVRFX0FDUV9UT0tFTiwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmluQ29va2llKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IGlzTG9naW5DYWxsID8gQ29uc3RhbnRzLmxvZ2luIDogQ29uc3RhbnRzLnJlbmV3VG9rZW47XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgY2FsbGJhY2sgdG8gY2FwdHVyZSByZXN1bHRzIGZyb20gc2VydmVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yVXRpbHMudGhyb3dFcnJvckFuZENsZWFyVGVtcENhY2hlKHRoaXMuY2FjaGVTdG9yYWdlLCBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZEludGVyYWN0aW9uVHlwZUVycm9yKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJRlJBTUVEQVBQUzogaWYgd2UgYXJlIHJlZGlyZWN0aW5nIGluIGFuIGlmcmFtZSwgcG9zdCBhIG1lc3NhZ2UgdG8gdGhlIHRvcEZyYW1lXHJcbiAgICAgICAgICAgIGlmKFdpbmRvd1V0aWxzLmlzSW5JZnJhbWUoKSAmJiAhcG9wVXBXaW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VIZWxwZXIucmVkaXJlY3REZWxlZ2F0aW9uUmVxdWVzdCh0aGlzLm1lc3NhZ2VDYWNoZSwgdXJsTmF2aWdhdGUsIHRoaXMuY29uZmlnLmJyb2tlci50b3BGcmFtZU9yaWdpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwcm9tcHQgdXNlciBmb3IgaW50ZXJhY3Rpb25cclxuICAgICAgICAgICAgICAgIFdpbmRvd1V0aWxzLm5hdmlnYXRlV2luZG93KHVybE5hdmlnYXRlLCB0aGlzLmxvZ2dlciwgcG9wVXBXaW5kb3cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBwb3BVcFdpbmRvdyB3aWxsIGJlIG51bGwgZm9yIHJlZGlyZWN0cywgc28gd2UgZG9udCBuZWVkIHRvIGF0dGVtcHQgdG8gbW9uaXRvciB0aGUgd2luZG93XHJcbiAgICAgICAgICAgIGlmIChwb3BVcFdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IFdpbmRvd1V0aWxzLm1vbml0b3JXaW5kb3dGb3JIYXNoKHBvcFVwV2luZG93LCB0aGlzLmNvbmZpZy5zeXN0ZW0ubG9hZEZyYW1lVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhc2ggZm91bmRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UoaGFzaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlcXVlc3QgY29tcGxldGVkIHN1Y2Nlc3NmdWxseSwgc2V0IHRvIGNvbXBsZXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oSU5URVJBQ1RJT05fU1RBVFVTLCBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkNsb3NpbmcgcG9wdXAgd2luZG93XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBDaGVjayBob3cgdGhpcyBjYW4gYmUgZXh0cmFjdGVkIGZvciBhbnkgZnJhbWV3b3JrIHNwZWNpZmljIGNvZGU/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoXCJtc2FsOnBvcFVwSGFzaENoYW5nZWRcIiwgaGFzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdpbmRvd1V0aWxzLmNsb3NlUG9wdXBzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaW5kb3cgY2xvc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZXNldFRlbXBDYWNoZUl0ZW1zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlckNhbmNlbGxlZEVycm9yKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoXCJtc2FsOnBvcFVwQ2xvc2VkXCIsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmNvZGUgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5kZXNjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVxdWVzdCBmYWlsZWQsIHNldCB0byBjYW5jZWxlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oSU5URVJBQ1RJT05fU1RBVFVTLCBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhFcnJvckhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlLCBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyLnRvU3RyaW5nKSwgYnVpbGRSZXNwb25zZVN0YXRlT25seShyZXF1ZXN0LnN0YXRlKSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgaWYgKHBvcFVwV2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICBwb3BVcFdpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgdGhpcyBmdW5jdGlvbiB0byBvYnRhaW4gYSB0b2tlbiBiZWZvcmUgZXZlcnkgY2FsbCB0byB0aGUgQVBJIC8gcmVzb3VyY2UgcHJvdmlkZXJcclxuICAgICAqXHJcbiAgICAgKiBNU0FMIHJldHVybidzIGEgY2FjaGVkIHRva2VuIHdoZW4gYXZhaWxhYmxlXHJcbiAgICAgKiBPciBpdCBzZW5kJ3MgYSByZXF1ZXN0IHRvIHRoZSBTVFMgdG8gb2J0YWluIGEgbmV3IHRva2VuIHVzaW5nIGEgaGlkZGVuIGlmcmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cclxuICAgICAqXHJcbiAgICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPEF1dGhSZXNwb25zZT59IC0gYSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXR1cm5zIHRoZSB7QGxpbmsgQXV0aFJlc3BvbnNlfSBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGFjcXVpcmVUb2tlblNpbGVudChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiBQcm9taXNlPEF1dGhSZXNwb25zZT4ge1xyXG4gICAgICAgIGlmICghcmVxdWVzdCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvclV0aWxzLnRocm93RXJyb3JBbmRDbGVhclRlbXBDYWNoZSh0aGlzLmNhY2hlU3RvcmFnZSwgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBhbmQgZmlsdGVyIHNjb3BlcyAodGhlIHZhbGlkYXRlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgaWYgdmFsaWRhdGlvbiBmYWlscylcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUocmVxdWVzdC5zY29wZXMsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NvcGUgPSByZXF1ZXN0LnNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIGRldmVsb3BlciBwYXNzZXMgYW4gYWNjb3VudCwgZ2l2ZSB0aGF0IGFjY291bnQgdGhlIHByaW9yaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSByZXF1ZXN0LmFjY291bnQgfHwgdGhpcy5nZXRBY2NvdW50KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBleHRyYWN0IGlmIHRoZXJlIGlzIGFuIGFkYWxJZFRva2VuIHN0YXNoZWQgaW4gdGhlIGNhY2hlXHJcbiAgICAgICAgICAgIGNvbnN0IGFkYWxJZFRva2VuID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuYWRhbElkVG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gYWNjb3VudCBsb2dnZWQgaW4gYW5kIG5vIGxvZ2luX2hpbnQvc2lkIGlzIHBhc3NlZCBpbiB0aGUgcmVxdWVzdFxyXG4gICAgICAgICAgICBpZiAoIWFjY291bnQgJiYgIShyZXF1ZXN0LnNpZCAgfHwgcmVxdWVzdC5sb2dpbkhpbnQpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkoYWRhbElkVG9rZW4pICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVVc2VyTG9naW5SZXF1aXJlZEVycm9yKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVR5cGUgPSB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50LCByZXF1ZXN0LnNjb3BlcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMoXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHJlcXVlc3QuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNjb3BlcyxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QgJiYgcmVxdWVzdC5zdGF0ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXHJcbiAgICAgICAgICAgIGlmIChTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy5pc1NTT1BhcmFtKHJlcXVlc3QpIHx8IGFjY291bnQpIHtcclxuICAgICAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5wb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHVzZXIgZGlkbid0IHBhc3MgbG9naW5faGludC9zaWQgYW5kIGFkYWwncyBpZHRva2VuIGlzIHByZXNlbnQsIGV4dHJhY3QgdGhlIGxvZ2luX2hpbnQgZnJvbSB0aGUgYWRhbElkVG9rZW5cclxuICAgICAgICAgICAgZWxzZSBpZiAoIWFjY291bnQgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkoYWRhbElkVG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBhZGFsSWRUb2tlbiBleGlzdHMsIGV4dHJhY3QgdGhlIFNTTyBpbmZvIGZyb20gdGhlIHNhbWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkYWxJZFRva2VuT2JqZWN0ID0gVG9rZW5VdGlscy5leHRyYWN0SWRUb2tlbihhZGFsSWRUb2tlbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiQURBTCdzIGlkVG9rZW4gZXhpc3RzLiBFeHRyYWN0aW5nIGxvZ2luIGluZm9ybWF0aW9uIGZyb20gQURBTCdzIGlkVG9rZW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgbnVsbCwgYWRhbElkVG9rZW5PYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJDb250YWluZWRDbGFpbXMgPSByZXF1ZXN0LmNsYWltc1JlcXVlc3QgfHwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmNsYWltc1ZhbHVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGF1dGhFcnI6IEF1dGhFcnJvcjtcclxuICAgICAgICAgICAgbGV0IGNhY2hlUmVzdWx0UmVzcG9uc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXVzZXJDb250YWluZWRDbGFpbXMgJiYgIXJlcXVlc3QuZm9yY2VSZWZyZXNoKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlUmVzdWx0UmVzcG9uc2UgPSB0aGlzLmdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aEVyciA9IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHJlc29sdmUvcmVqZWN0IGJhc2VkIG9uIGNhY2hlUmVzdWx0XHJcbiAgICAgICAgICAgIGlmIChjYWNoZVJlc3VsdFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVG9rZW4gaXMgYWxyZWFkeSBpbiBjYWNoZSBmb3Igc2NvcGU6XCIgKyBzY29wZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNhY2hlUmVzdWx0UmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYXV0aEVycikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShhdXRoRXJyLmVycm9yQ29kZSArIFwiOlwiICsgYXV0aEVyci5lcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGF1dGhFcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZWxzZSBwcm9jZWVkIHdpdGggbG9naW5cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9nTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyQ29udGFpbmVkQ2xhaW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nTWVzc2FnZSA9IFwiU2tpcHBlZCBjYWNoZSBsb29rdXAgc2luY2UgY2xhaW1zIHdlcmUgZ2l2ZW4uXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuZm9yY2VSZWZyZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nTWVzc2FnZSA9IFwiU2tpcHBlZCBjYWNoZSBsb29rdXAgc2luY2UgcmVxdWVzdC5mb3JjZVJlZnJlc2ggb3B0aW9uIHdhcyBzZXQgdG8gdHJ1ZVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dNZXNzYWdlID0gXCJUb2tlbiBpcyBub3QgaW4gY2FjaGUgZm9yIHNjb3BlOlwiICsgc2NvcGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKGxvZ01lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENhY2hlIHJlc3VsdCBjYW4gcmV0dXJuIG51bGwgaWYgY2FjaGUgaXMgZW1wdHkuIEluIHRoYXQgY2FzZSwgc2V0IGF1dGhvcml0eSB0byBkZWZhdWx0IHZhbHVlIGlmIG5vIGF1dGhvcml0eSBpcyBwYXNzZWQgdG8gdGhlIGFwaS5cclxuICAgICAgICAgICAgICAgIGlmICghc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlID0gcmVxdWVzdC5hdXRob3JpdHkgPyBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHJlcXVlc3QuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KSA6IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjYWNoZSBtaXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlLnJlc29sdmVFbmRwb2ludHNBc3luYygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiByZWZyZXNoIGF0dGVtcHQgd2l0aCBpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogQWxyZWFkeSByZW5ld2luZyBmb3IgdGhpcyBzY29wZSwgY2FsbGJhY2sgd2hlbiB3ZSBnZXQgdGhlIHRva2VuLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyB0b2tlbiBmb3Igc2NvcGU6IFwiICsgc2NvcGUgKyBcIiBpcyBpbiBwcm9ncmVzcy4gUmVnaXN0ZXJpbmcgY2FsbGJhY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBY3RpdmUgcmVuZXdhbHMgY29udGFpbnMgdGhlIHN0YXRlIGZvciBlYWNoIHJlbmV3YWwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2sod2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSwgc2NvcGUsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zY29wZXMgJiYgcmVxdWVzdC5zY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xICYmIHJlcXVlc3Quc2NvcGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQXBwIHVzZXMgaWRUb2tlbiB0byBzZW5kIHRvIGFwaSBlbmRwb2ludHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEZWZhdWx0IHNjb3BlIGlzIHRyYWNrZWQgYXMgY2xpZW50SWQgdG8gc3RvcmUgdGhpcyB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJyZW5ld2luZyBpZFRva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lsZW50TG9naW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZXdJZFRva2VuKHJlcXVlc3Quc2NvcGVzLCByZXNvbHZlLCByZWplY3QsIGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmV3IGFjY2VzcyB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJyZW5ld2luZyBhY2Nlc3N0b2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmV3VG9rZW4ocmVxdWVzdC5zY29wZXMsIHJlc29sdmUsIHJlamVjdCwgYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcImNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcihlcnIudG9TdHJpbmcoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFBvcHVwIFdpbmRvdyBDcmVhdGlvblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICpcclxuICAgICAqIENvbmZpZ3VyZXMgcG9wdXAgd2luZG93IGZvciBsb2dpbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsTmF2aWdhdGVcclxuICAgICAqIEBwYXJhbSB0aXRsZVxyXG4gICAgICogQHBhcmFtIHBvcFVwV2lkdGhcclxuICAgICAqIEBwYXJhbSBwb3BVcEhlaWdodFxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9wZW5Qb3B1cCh1cmxOYXZpZ2F0ZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBwb3BVcFdpZHRoOiBudW1iZXIsIHBvcFVwSGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogYWRkaW5nIHdpbkxlZnQgYW5kIHdpblRvcCB0byBhY2NvdW50IGZvciBkdWFsIG1vbml0b3JcclxuICAgICAgICAgICAgICogdXNpbmcgc2NyZWVuTGVmdCBhbmQgc2NyZWVuVG9wIGZvciBJRTggYW5kIGVhcmxpZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNvbnN0IHdpbkxlZnQgPSB3aW5kb3cuc2NyZWVuTGVmdCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlblg7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgPyB3aW5kb3cuc2NyZWVuVG9wIDogd2luZG93LnNjcmVlblk7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiB3aW5kb3cuaW5uZXJXaWR0aCBkaXNwbGF5cyBicm93c2VyIHdpbmRvd1wicyBoZWlnaHQgYW5kIHdpZHRoIGV4Y2x1ZGluZyB0b29sYmFyc1xyXG4gICAgICAgICAgICAgKiB1c2luZyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggZm9yIElFOCBhbmQgZWFybGllclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSAoKHdpZHRoIC8gMikgLSAocG9wVXBXaWR0aCAvIDIpKSArIHdpbkxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9ICgoaGVpZ2h0IC8gMikgLSAocG9wVXBIZWlnaHQgLyAyKSkgKyB3aW5Ub3A7XHJcblxyXG4gICAgICAgICAgICAvLyBvcGVuIHRoZSB3aW5kb3dcclxuICAgICAgICAgICAgY29uc3QgcG9wdXBXaW5kb3cgPSB3aW5kb3cub3Blbih1cmxOYXZpZ2F0ZSwgdGl0bGUsIFwid2lkdGg9XCIgKyBwb3BVcFdpZHRoICsgXCIsIGhlaWdodD1cIiArIHBvcFVwSGVpZ2h0ICsgXCIsIHRvcD1cIiArIHRvcCArIFwiLCBsZWZ0PVwiICsgbGVmdCk7XHJcbiAgICAgICAgICAgIGlmICghcG9wdXBXaW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yVXRpbHMudGhyb3dFcnJvckFuZENsZWFyVGVtcENhY2hlKHRoaXMuY2FjaGVTdG9yYWdlLCBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcigpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9wdXBXaW5kb3cuZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwV2luZG93LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwb3B1cFdpbmRvdztcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiZXJyb3Igb3BlbmluZyBwb3B1cCBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oSU5URVJBQ1RJT05fU1RBVFVTLCBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yVXRpbHMudGhyb3dFcnJvckFuZENsZWFyVGVtcENhY2hlKHRoaXMuY2FjaGVTdG9yYWdlLCBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlLnRvU3RyaW5nKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gSWZyYW1lIE1hbmFnZW1lbnRcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIENhbGxpbmcgX2xvYWRGcmFtZSBidXQgd2l0aCBhIHRpbWVvdXQgdG8gc2lnbmFsIGZhaWx1cmUgaW4gbG9hZGZyYW1lU3RhdHVzLiBDYWxsYmFja3MgYXJlIGxlZnQuXHJcbiAgICAgKiByZWdpc3RlcmVkIHdoZW4gbmV0d29yayBlcnJvcnMgb2NjdXIgYW5kIHN1YnNlcXVlbnQgdG9rZW4gcmVxdWVzdHMgZm9yIHNhbWUgcmVzb3VyY2UgYXJlIHJlZ2lzdGVyZWQgdG8gdGhlIHBlbmRpbmcgcmVxdWVzdC5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkSWZyYW1lVGltZW91dCh1cmxOYXZpZ2F0ZTogc3RyaW5nLCBmcmFtZU5hbWU6IHN0cmluZywgc2NvcGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vIHNldCBpZnJhbWUgc2Vzc2lvbiB0byBwZW5kaW5nXHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRTdGF0ZSA9IHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV07XHJcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlNldCBsb2FkaW5nIHN0YXRlIHRvIHBlbmRpbmcgZm9yOiBcIiArIHNjb3BlICsgXCI6XCIgKyBleHBlY3RlZFN0YXRlKTtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5SRU5FV19TVEFUVVMgKyBleHBlY3RlZFN0YXRlLCBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLlJFTkVXX1NUQVRVUyArIGV4cGVjdGVkU3RhdGUpID09PSBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmYWlsIHRoZSBpZnJhbWUgc2Vzc2lvbiBpZiBpdCdzIGluIHBlbmRpbmcgc3RhdGVcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJMb2FkaW5nIGZyYW1lIGhhcyB0aW1lZCBvdXQgYWZ0ZXI6IFwiICsgKHRoaXMuY29uZmlnLnN5c3RlbS5sb2FkRnJhbWVUaW1lb3V0IC8gMTAwMCkgKyBcIiBzZWNvbmRzIGZvciBzY29wZSBcIiArIHNjb3BlICsgXCI6XCIgKyBleHBlY3RlZFN0YXRlKTtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9yIGFmdGVyIHRpbWVvdXRcclxuICAgICAgICAgICAgICAgIGlmIChleHBlY3RlZFN0YXRlICYmIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKG51bGwsIENsaWVudEF1dGhFcnJvci5jcmVhdGVUb2tlblJlbmV3YWxUaW1lb3V0RXJyb3IoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShUZW1wb3JhcnlDYWNoZUtleXMuUkVORVdfU1RBVFVTICsgZXhwZWN0ZWRTdGF0ZSwgUmVxdWVzdFN0YXR1cy5DT01QTEVURUQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQpO1xyXG5cclxuICAgICAgICBjb25zdCBpZnJhbWUgPSBhd2FpdCBXaW5kb3dVdGlscy5sb2FkRnJhbWUodXJsTmF2aWdhdGUsIGZyYW1lTmFtZSwgdGhpcy5jb25maWcuc3lzdGVtLm5hdmlnYXRlRnJhbWVXYWl0LCB0aGlzLmxvZ2dlcik7XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IFdpbmRvd1V0aWxzLm1vbml0b3JXaW5kb3dGb3JIYXNoKGlmcmFtZS5jb250ZW50V2luZG93LCB0aGlzLmNvbmZpZy5zeXN0ZW0ubG9hZEZyYW1lVGltZW91dCk7XHJcbiAgICAgICAgaWYgKGhhc2gpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKGhhc2gpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBHZW5lcmFsIEhlbHBlcnNcclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogVXNlZCB0byBhZGQgdGhlIGRldmVsb3BlciByZXF1ZXN0ZWQgY2FsbGJhY2sgdG8gdGhlIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgdGhlIHNwZWNpZmllZCBzY29wZXMuIFRoZSB1cGRhdGVkIGFycmF5IGlzIHN0b3JlZCBvbiB0aGUgd2luZG93IG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV4cGVjdGVkU3RhdGUgLSBVbmlxdWUgc3RhdGUgaWRlbnRpZmllciAoZ3VpZCkuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2NvcGUgLSBEZXZlbG9wZXIgcmVxdWVzdGVkIHBlcm1pc3Npb25zLiBOb3QgYWxsIHNjb3BlcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkLlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSAtIFRoZSByZXNvbHZlIGZ1bmN0aW9uIG9mIHRoZSBwcm9taXNlIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCAtIFRoZSByZWplY3QgZnVuY3Rpb24gb2YgdGhlIHByb21pc2Ugb2JqZWN0LlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyQ2FsbGJhY2soZXhwZWN0ZWRTdGF0ZTogc3RyaW5nLCBzY29wZTogc3RyaW5nLCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIC8vIHRyYWNrIGFjdGl2ZSByZW5ld2Fsc1xyXG4gICAgICAgIHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0gPSBleHBlY3RlZFN0YXRlO1xyXG5cclxuICAgICAgICAvLyBpbml0aWFsaXplIGNhbGxiYWNrcyBtYXBwZWQgYXJyYXlcclxuICAgICAgICBpZiAoIXdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSkge1xyXG4gICAgICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW5kZXhpbmcgb24gdGhlIGN1cnJlbnQgc3RhdGUsIHB1c2ggdGhlIGNhbGxiYWNrIHBhcmFtcyB0byBjYWxsYmFja3MgbWFwcGVkXHJcbiAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdLnB1c2goeyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9KTtcclxuXHJcbiAgICAgICAgLy8gU3RvcmUgdGhlIHNlcnZlciByZXNwb25zZSBpbiB0aGUgY3VycmVudCB3aW5kb3c/P1xyXG4gICAgICAgIGlmICghd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID1cclxuICAgICAgKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGVycm9yOiBBdXRoRXJyb3IpID0+IHtcclxuICAgICAgICAgIC8vIHJlc2V0IGFjdGl2ZSByZW5ld2Fsc1xyXG4gICAgICAgICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgLy8gZm9yIGFsbCBwcm9taXNlTWFwcGVkdG9SZW5ld1N0YXRlcyBmb3IgYSBnaXZlbiAnc3RhdGUnIC0gY2FsbCB0aGUgcmVqZWN0L3Jlc29sdmUgd2l0aCBlcnJvci90b2tlbiByZXNwZWN0aXZlbHlcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV1baV0ucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdW2ldLnJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJFcnJvciBhbmQgcmVzcG9uc2UgYXJlIGJvdGggbnVsbFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHJlc2V0XHJcbiAgICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBudWxsO1xyXG4gICAgICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9IG51bGw7XHJcbiAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIExvZ291dFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRvIGxvZyBvdXQgdGhlIGN1cnJlbnQgdXNlciwgYW5kIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBwb3N0TG9nb3V0UmVkaXJlY3RVcmkuXHJcbiAgICAgKiBEZWZhdWx0IGJlaGF2aW91ciBpcyB0byByZWRpcmVjdCB0aGUgdXNlciB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxyXG4gICAgICovXHJcbiAgICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbnVsbDtcclxuICAgICAgICBsZXQgbG9nb3V0ID0gXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5nZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKSkge1xyXG4gICAgICAgICAgICBsb2dvdXQgPSBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKS50aGVuKGF1dGhvcml0eSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybE5hdmlnYXRlID0gYXV0aG9yaXR5LkVuZFNlc3Npb25FbmRwb2ludFxyXG4gICAgICAgICAgICAgICAgPyBgJHthdXRob3JpdHkuRW5kU2Vzc2lvbkVuZHBvaW50fT8ke2xvZ291dH1gXHJcbiAgICAgICAgICAgICAgICA6IGAke3RoaXMuYXV0aG9yaXR5fW9hdXRoMi92Mi4wL2xvZ291dD8ke2xvZ291dH1gO1xyXG4gICAgICAgICAgICBXaW5kb3dVdGlscy5uYXZpZ2F0ZVdpbmRvdyh1cmxOYXZpZ2F0ZSwgdGhpcy5sb2dnZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQ2xlYXIgYWxsIGFjY2VzcyB0b2tlbnMgaW4gdGhlIGNhY2hlLlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2xlYXJDYWNoZSgpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbkl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKENvbnN0YW50cy5jbGllbnRJZCwgQ29uc3RhbnRzLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5JdGVtc1tpXS5rZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVzZXRDYWNoZUl0ZW1zKCk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJNc2FsQ29va2llKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBDbGVhciBhIGdpdmVuIGFjY2VzcyB0b2tlbiBmcm9tIHRoZSBjYWNoZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzVG9rZW5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNsZWFyQ2FjaGVGb3JTY29wZShhY2Nlc3NUb2tlbjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5JdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGFjY2Vzc1Rva2VuSXRlbXNbaV07XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi52YWx1ZS5hY2Nlc3NUb2tlbiA9PT0gYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkodG9rZW4ua2V5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUmVzcG9uc2VcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqIENoZWNrcyBpZiB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgU1RTLiBJbiBjYXNlIG9mIHJlZGlyZWN0LCB0aGUgdXJsIGZyYWdtZW50IGhhcyBlaXRoZXIgaWRfdG9rZW4sIGFjY2Vzc190b2tlbiBvciBlcnJvci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoIC0gSGFzaCBwYXNzZWQgZnJvbSByZWRpcmVjdCBwYWdlLlxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IC0gdHJ1ZSBpZiByZXNwb25zZSBjb250YWlucyBpZF90b2tlbiwgYWNjZXNzX3Rva2VuIG9yIGVycm9yLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICAgKi9cclxuICAgIGlzQ2FsbGJhY2soaGFzaDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzQ2FsbGJhY2sgd2lsbCBiZSBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHVybENvbnRhaW5zSGFzaCBpbiBNU0FMLmpzIHYyLjAuXCIpO1xyXG4gICAgICAgIHJldHVybiBVcmxVdGlscy51cmxDb250YWluc0hhc2goaGFzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBVc2VkIHRvIGNhbGwgdGhlIGNvbnN0cnVjdG9yIGNhbGxiYWNrIHdpdGggdGhlIHRva2VuL2Vycm9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2hhc2g9d2luZG93LmxvY2F0aW9uLmhhc2hdIC0gSGFzaCBmcmFnbWVudCBvZiBVcmwuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJvY2Vzc0NhbGxCYWNrKGhhc2g6IHN0cmluZywgc3RhdGVJbmZvOiBSZXNwb25zZVN0YXRlSW5mbywgcGFyZW50Q2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJQcm9jZXNzaW5nIHRoZSBjYWxsYmFjayBmcm9tIHJlZGlyZWN0IHJlc3BvbnNlXCIpO1xyXG4gICAgICAgIC8vIGdldCB0aGUgc3RhdGUgaW5mbyBmcm9tIHRoZSBoYXNoXHJcbiAgICAgICAgaWYgKCFzdGF0ZUluZm8pIHtcclxuICAgICAgICAgICAgc3RhdGVJbmZvID0gdGhpcy5nZXRSZXNwb25zZVN0YXRlKGhhc2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlIDogQXV0aFJlc3BvbnNlO1xyXG4gICAgICAgIGxldCBhdXRoRXJyIDogQXV0aEVycm9yO1xyXG4gICAgICAgIC8vIFNhdmUgdGhlIHRva2VuIGluZm8gZnJvbSB0aGUgaGFzaFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlVG9rZW5Gcm9tSGFzaChoYXNoLCBzdGF0ZUluZm8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhdXRoRXJyID0gZXJyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGhhc2ggZnJvbSB0aGUgY2FjaGVcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5VUkxfSEFTSCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBjb29raWUgaW4gdGhlIGhhc2hcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJNc2FsQ29va2llKHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRTdGF0ZTogc3RyaW5nID0gdGhpcy5nZXRBY2NvdW50U3RhdGUoc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLnJlbmV3VG9rZW4pIHx8IHJlc3BvbnNlLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiV2luZG93IGlzIGluIGlmcmFtZSwgYWNxdWlyaW5nIHRva2VuIHNpbGVudGx5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJhY3F1aXJpbmcgdG9rZW4gaW50ZXJhY3RpdmUgaW4gcHJvZ3Jlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRva2VuVHlwZSA9IFNlcnZlckhhc2hQYXJhbUtleXMuQUNDRVNTX1RPS0VOO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMubG9naW4pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50b2tlblR5cGUgPSBTZXJ2ZXJIYXNoUGFyYW1LZXlzLklEX1RPS0VOO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlSGFuZGxlcihDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXBhcmVudENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhFcnJvckhhbmRsZXIoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0LCBhdXRoRXJyLCBidWlsZFJlc3BvbnNlU3RhdGVPbmx5KGFjY291bnRTdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXJlbnRDYWxsYmFjayhyZXNwb25zZSwgYXV0aEVycik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiRXJyb3Igb2NjdXJyZWQgaW4gdG9rZW4gcmVjZWl2ZWQgY2FsbGJhY2sgZnVuY3Rpb246IFwiICsgZXJyKTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIENsaWVudEF1dGhFcnJvci5jcmVhdGVFcnJvckluQ2FsbGJhY2tGdW5jdGlvbihlcnIudG9TdHJpbmcoKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgY2FsbGVkIGZvciBwcm9jZXNzaW5nIHRoZSByZXNwb25zZSByZWNlaXZlZCBmcm9tIHRoZSBTVFMuIEl0IGV4dHJhY3RzIHRoZSBoYXNoLCBwcm9jZXNzZXMgdGhlIHRva2VuIG9yIGVycm9yIGluZm9ybWF0aW9uIGFuZCBzYXZlcyBpdCBpbiB0aGUgY2FjaGUuIEl0IHRoZW5cclxuICAgICAqIGNhbGxzIHRoZSByZWdpc3RlcmVkIGNhbGxiYWNrcyBpbiBjYXNlIG9mIHJlZGlyZWN0IG9yIHJlc29sdmVzIHRoZSBwcm9taXNlcyB3aXRoIHRoZSByZXN1bHQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2hhc2g9d2luZG93LmxvY2F0aW9uLmhhc2hdIC0gSGFzaCBmcmFnbWVudCBvZiBVcmwuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlQXV0aGVudGljYXRpb25SZXNwb25zZShoYXNoOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgaGFzaFxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSGFzaCA9IGhhc2ggfHwgd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IGZsb3cgaXMgcG9wdXAgb3IgaGlkZGVuIGlmcmFtZVxyXG4gICAgICAgIGNvbnN0IGlmcmFtZVdpdGhIYXNoID0gV2luZG93VXRpbHMuZ2V0SWZyYW1lV2l0aEhhc2gobG9jYXRpb25IYXNoKTtcclxuICAgICAgICBjb25zdCBwb3BVcFdpdGhIYXNoID0gV2luZG93VXRpbHMuZ2V0UG9wVXBXaXRoSGFzaChsb2NhdGlvbkhhc2gpO1xyXG4gICAgICAgIGNvbnN0IGlzUG9wdXBPcklmcmFtZSA9ICEhKGlmcmFtZVdpdGhIYXNoIHx8IHBvcFVwV2l0aEhhc2gpO1xyXG5cclxuICAgICAgICAvLyBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93KSwgYnkgdXNpbmcgc2VsZiwgd2luZG93LnBhcmVudCBiZWNvbWVzIGVxdWFsIHRvIHdpbmRvdyBpbiBnZXRSZXNwb25zZVN0YXRlIG1ldGhvZCBzcGVjaWZpY2FsbHlcclxuICAgICAgICBjb25zdCBzdGF0ZUluZm8gPSB0aGlzLmdldFJlc3BvbnNlU3RhdGUobG9jYXRpb25IYXNoKTtcclxuXHJcbiAgICAgICAgbGV0IHRva2VuUmVzcG9uc2VDYWxsYmFjazogKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGVycm9yOiBBdXRoRXJyb3IpID0+IHZvaWQgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiUmV0dXJuZWQgZnJvbSByZWRpcmVjdCB1cmxcIik7XHJcbiAgICAgICAgLy8gSWYgcGFyZW50IHdpbmRvdyBpcyB0aGUgbXNhbCBpbnN0YW5jZSB3aGljaCBvcGVuZWQgdGhlIGN1cnJlbnQgd2luZG93IChpZnJhbWUpXHJcbiAgICAgICAgaWYgKGlzUG9wdXBPcklmcmFtZSkge1xyXG4gICAgICAgICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW3N0YXRlSW5mby5zdGF0ZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUmVkaXJlY3QgY2FzZXNcclxuICAgICAgICAgICAgdG9rZW5SZXNwb25zZUNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgLy8gaWYgc2V0IHRvIG5hdmlnYXRlIHRvIGxvZ2luUmVxdWVzdCBwYWdlIHBvc3QgbG9naW5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF1dGgubmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShUZW1wb3JhcnlDYWNoZUtleXMuVVJMX0hBU0gsIGxvY2F0aW9uSGFzaCk7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnBhcmVudCA9PT0gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5MT0dJTl9SRVFVRVNULCB0aGlzLmluQ29va2llKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSByZWFjaGVkIHRoaXMgcG9pbnQgdG9vIGVhcmx5IC0gY2FjaGUgaGFzaCwgcmV0dXJuIGFuZCBwcm9jZXNzIGluIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2tzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5VUkxfSEFTSCwgbG9jYXRpb25IYXNoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzQ2FsbEJhY2sobG9jYXRpb25IYXNoLCBzdGF0ZUluZm8sIHRva2VuUmVzcG9uc2VDYWxsYmFjayk7XHJcblxyXG4gICAgICAgIC8vIElmIGN1cnJlbnQgd2luZG93IGlzIG9wZW5lciwgY2xvc2UgYWxsIHdpbmRvd3NcclxuICAgICAgICBpZiAoaXNQb3B1cE9ySWZyYW1lKSB7XHJcbiAgICAgICAgICAgIFdpbmRvd1V0aWxzLmNsb3NlUG9wdXBzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQ3JlYXRlcyBhIHN0YXRlSW5mbyBvYmplY3QgZnJvbSB0aGUgVVJMIGZyYWdtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2ggIC0gIEhhc2ggcGFzc2VkIGZyb20gcmVkaXJlY3QgcGFnZVxyXG4gICAgICogQHJldHVybnMge1Rva2VuUmVzcG9uc2V9IGFuIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFEIGNvbXByaXNpbmcgb2YgdGhlIGtleXMgLSBwYXJhbWV0ZXJzLCByZXF1ZXN0VHlwZSwgc3RhdGVNYXRjaCwgc3RhdGVSZXNwb25zZSBhbmQgdmFsaWQuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRSZXNwb25zZVN0YXRlKGhhc2g6IHN0cmluZyk6IFJlc3BvbnNlU3RhdGVJbmZvIHtcclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gVXJsVXRpbHMuZGVzZXJpYWxpemVIYXNoKGhhc2gpO1xyXG4gICAgICAgIGxldCBzdGF0ZVJlc3BvbnNlOiBSZXNwb25zZVN0YXRlSW5mbztcclxuICAgICAgICBpZiAoIXBhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJIYXNoIHdhcyBub3QgcGFyc2VkIGNvcnJlY3RseS5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShcInN0YXRlXCIpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VHlwZTogQ29uc3RhbnRzLnVua25vd24sXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogcGFyYW1ldGVycy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHN0YXRlTWF0Y2g6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJIYXNoIGRvZXMgbm90IGNvbnRhaW4gc3RhdGUuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBhc3luYyBjYWxscyBjYW4gZmlyZSBpZnJhbWUgYW5kIGxvZ2luIHJlcXVlc3QgYXQgdGhlIHNhbWUgdGltZSBpZiBkZXZlbG9wZXIgZG9lcyBub3QgdXNlIHRoZSBBUEkgYXMgZXhwZWN0ZWRcclxuICAgICAgICAgKiBpbmNvbWluZyBjYWxsYmFjayBuZWVkcyB0byBiZSBsb29rZWQgdXAgdG8gZmluZCB0aGUgcmVxdWVzdCB0eXBlXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIC8vIGxvZ2luUmVkaXJlY3RcclxuICAgICAgICBpZiAoc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShUZW1wb3JhcnlDYWNoZUtleXMuU1RBVEVfTE9HSU4sIHRoaXMuaW5Db29raWUpIHx8IHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZSkgeyAvLyBsb2dpblJlZGlyZWN0XHJcbiAgICAgICAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSBDb25zdGFudHMubG9naW47XHJcbiAgICAgICAgICAgIHN0YXRlUmVzcG9uc2Uuc3RhdGVNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhY3F1aXJlVG9rZW5SZWRpcmVjdFxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLlNUQVRFX0FDUV9UT0tFTiwgdGhpcy5pbkNvb2tpZSkpIHsgLy8gYWNxdWlyZVRva2VuUmVkaXJlY3RcclxuICAgICAgICAgICAgc3RhdGVSZXNwb25zZS5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xyXG4gICAgICAgICAgICBzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVSZXNwb25zZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGV4dGVybmFsIGFwaSByZXF1ZXN0cyBtYXkgaGF2ZSBtYW55IHJlbmV3dG9rZW4gcmVxdWVzdHMgZm9yIGRpZmZlcmVudCByZXNvdXJjZVxyXG4gICAgICAgIGlmICghc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSB3aW5kb3cucmVxdWVzdFR5cGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlc0luUGFyZW50Q29udGV4dCA9IHdpbmRvdy5yZW5ld1N0YXRlcztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXNJblBhcmVudENvbnRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXNJblBhcmVudENvbnRleHRbaV0gPT09IHN0YXRlUmVzcG9uc2Uuc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGVSZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBUb2tlbiBQcm9jZXNzaW5nIChFeHRyYWN0IHRvIFRva2VuUHJvY2Vzc2luZy50cylcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIFVzZWQgdG8gZ2V0IHRva2VuIGZvciB0aGUgc3BlY2lmaWVkIHNldCBvZiBzY29wZXMgZnJvbSB0aGUgY2FjaGVcclxuICAgICAqIEBwYXJhbSB7QGxpbmsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnN9IC0gUmVxdWVzdCBzZW50IHRvIHRoZSBTVFMgdG8gb2J0YWluIGFuIGlkX3Rva2VuL2FjY2Vzc190b2tlblxyXG4gICAgICogQHBhcmFtIHtBY2NvdW50fSBhY2NvdW50IC0gQWNjb3VudCBmb3Igd2hpY2ggdGhlIHNjb3BlcyB3ZXJlIHJlcXVlc3RlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMsIGFjY291bnQ6IEFjY291bnQpOiBBdXRoUmVzcG9uc2Uge1xyXG4gICAgICAgIGxldCBhY2Nlc3NUb2tlbkNhY2hlSXRlbTogQWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IHNjb3BlcyA9IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zY29wZXM7XHJcblxyXG4gICAgICAgIC8vIGZpbHRlciBieSBjbGllbnRJZCBhbmQgYWNjb3VudFxyXG4gICAgICAgIGNvbnN0IHRva2VuQ2FjaGVJdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2Vucyh0aGlzLmNsaWVudElkLCBhY2NvdW50ID8gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIgOiBudWxsKTtcclxuXHJcbiAgICAgICAgLy8gTm8gbWF0Y2ggZm91bmQgYWZ0ZXIgaW5pdGlhbCBmaWx0ZXJpbmdcclxuICAgICAgICBpZiAodG9rZW5DYWNoZUl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiA9IFtdO1xyXG5cclxuICAgICAgICAvLyBpZiBubyBhdXRob3JpdHkgcGFzc2VkXHJcbiAgICAgICAgaWYgKCFzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgIC8vIGZpbHRlciBieSBzY29wZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVJdGVtID0gdG9rZW5DYWNoZUl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gY2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFNjb3BlU2V0LmNvbnRhaW5zU2NvcGUoY2FjaGVkU2NvcGVzLCBzY29wZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGNhY2hlSXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIG9ubHkgb25lIGNhY2hlZCB0b2tlbiBmb3VuZFxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gZmlsdGVyZWRJdGVtc1swXTtcclxuICAgICAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSA9IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBjYWNoZWQgdG9rZW4gaXMgZm91bmRcclxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvclV0aWxzLnRocm93RXJyb3JBbmRDbGVhclRlbXBDYWNoZSh0aGlzLmNhY2hlU3RvcmFnZSwgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdUb2tlbnNJbkNhY2hlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiBubyBtYXRjaCBmb3VuZCwgY2hlY2sgaWYgdGhlcmUgd2FzIGEgc2luZ2xlIGF1dGhvcml0eSB1c2VkXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aG9yaXR5TGlzdCA9IHRoaXMuZ2V0VW5pcXVlQXV0aG9yaXR5KHRva2VuQ2FjaGVJdGVtcywgXCJhdXRob3JpdHlcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0aG9yaXR5TGlzdC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIENsaWVudEF1dGhFcnJvci5jcmVhdGVNdWx0aXBsZUF1dGhvcml0aWVzSW5DYWNoZUVycm9yKHNjb3Blcy50b1N0cmluZygpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlID0gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShhdXRob3JpdHlMaXN0WzBdLCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiBhbiBhdXRob3JpdHkgaXMgcGFzc2VkIGluIHRoZSBBUElcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZmlsdGVyIGJ5IGF1dGhvcml0eSBhbmQgc2NvcGVcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbkNhY2hlSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlSXRlbSA9IHRva2VuQ2FjaGVJdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChTY29wZVNldC5jb250YWluc1Njb3BlKGNhY2hlZFNjb3Blcywgc2NvcGVzKSAmJiBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkoY2FjaGVJdGVtLmtleS5hdXRob3JpdHkpID09PSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGNhY2hlSXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbm8gbWF0Y2hcclxuICAgICAgICAgICAgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiBvbmx5IG9uZSBjYWNoZWRUb2tlbiBGb3VuZFxyXG4gICAgICAgICAgICBlbHNlIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBmaWx0ZXJlZEl0ZW1zWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBjYWNoZWQgdG9rZW4gaXMgZm91bmRcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yVXRpbHMudGhyb3dFcnJvckFuZENsZWFyVGVtcENhY2hlKHRoaXMuY2FjaGVTdG9yYWdlLCBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBleHBpcmVkID0gTnVtYmVyKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmV4cGlyZXNJbik7XHJcbiAgICAgICAgICAgIC8vIElmIGV4cGlyYXRpb24gaXMgd2l0aGluIG9mZnNldCwgaXQgd2lsbCBmb3JjZSByZW5ld1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmNvbmZpZy5zeXN0ZW0udG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcyB8fCAzMDA7XHJcbiAgICAgICAgICAgIGlmIChleHBpcmVkICYmIChleHBpcmVkID4gVGltZVV0aWxzLm5vdygpICsgb2Zmc2V0KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmlkVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvclV0aWxzLnRocm93RXJyb3JBbmRDbGVhclRlbXBDYWNoZSh0aGlzLmNhY2hlU3RvcmFnZSwgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkFjY291bnQgc2hvdWxkIG5vdCBiZSBudWxsIGhlcmUuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhU3RhdGUgPSB0aGlzLmdldEFjY291bnRTdGF0ZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVuYW50SWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5UeXBlOiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuaWRUb2tlbiA9PT0gYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuYWNjZXNzVG9rZW4pID8gU2VydmVySGFzaFBhcmFtS2V5cy5JRF9UT0tFTiA6IFNlcnZlckhhc2hQYXJhbUtleXMuQUNDRVNTX1RPS0VOLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW5PYmosXHJcbiAgICAgICAgICAgICAgICAgICAgaWRUb2tlbkNsYWltczogaWRUb2tlbk9iai5jbGFpbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlczogYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlc09uOiBuZXcgRGF0ZShleHBpcmVkICogMTAwMCksXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudDogYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50U3RhdGU6IGFTdGF0ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFJlc3BvbnNlVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBpZFRva2VuT2JqKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWRJdGVtc1swXS5rZXkpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogVXNlZCB0byBnZXQgYSB1bmlxdWUgbGlzdCBvZiBhdXRob3JpdGllcyBmcm9tIHRoZSBjYWNoZVxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT59ICBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgLSBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgc2F2ZWQgaW4gdGhlIGNhY2hlXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0VW5pcXVlQXV0aG9yaXR5KGFjY2Vzc1Rva2VuQ2FjaGVJdGVtczogQXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+LCBwcm9wZXJ0eTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5TGlzdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGZsYWdzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAgICAgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgKGZsYWdzLmluZGV4T2YoZWxlbWVudC5rZXlbcHJvcGVydHldKSA9PT0gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFncy5wdXNoKGVsZW1lbnQua2V5W3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JpdHlMaXN0LnB1c2goZWxlbWVudC5rZXlbcHJvcGVydHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhdXRob3JpdHlMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQ2hlY2sgaWYgQURBTCBpZF90b2tlbiBleGlzdHMgYW5kIHJldHVybiBpZiBleGlzdHMuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGV4dHJhY3RBREFMSWRUb2tlbigpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGFkYWxJZFRva2VuID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuYWRhbElkVG9rZW4pO1xyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFRva2VuVXRpbHMuZXh0cmFjdElkVG9rZW4oYWRhbElkVG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEFjcXVpcmVzIGFjY2VzcyB0b2tlbiB1c2luZyBhIGhpZGRlbiBpZnJhbWUuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVuZXdUb2tlbihzY29wZXM6IEFycmF5PHN0cmluZz4sIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhY2NvdW50OiBBY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwicmVuZXdUb2tlbiBpcyBjYWxsZWQgZm9yIHNjb3BlOlwiICsgc2NvcGUpO1xyXG5cclxuICAgICAgICBjb25zdCBmcmFtZU5hbWUgPSBgbXNhbFJlbmV3RnJhbWUke3Njb3BlfWA7XHJcbiAgICAgICAgY29uc3QgZnJhbWVIYW5kbGUgPSBXaW5kb3dVdGlscy5hZGRIaWRkZW5JRnJhbWUoZnJhbWVOYW1lLCB0aGlzLmxvZ2dlcik7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlJlbmV3IHRva2VuIEV4cGVjdGVkIHN0YXRlOiBcIiArIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIEJ1aWxkIHVybE5hdmlnYXRlIHdpdGggXCJwcm9tcHQ9bm9uZVwiIGFuZCBuYXZpZ2F0ZSB0byBVUkwgaW4gaGlkZGVuIGlGcmFtZVxyXG4gICAgICAgIGNvbnN0IHVybE5hdmlnYXRlID0gVXJsVXRpbHMudXJsUmVtb3ZlUXVlcnlTdHJpbmdQYXJhbWV0ZXIoVXJsVXRpbHMuY3JlYXRlTmF2aWdhdGVVcmwoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KSwgQ29uc3RhbnRzLnByb21wdCkgKyBDb25zdGFudHMucHJvbXB0X25vbmU7XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcy5wdXNoKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLnJlbmV3VG9rZW47XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgc2NvcGUsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGUpO1xyXG4gICAgICAgIGZyYW1lSGFuZGxlLnNyYyA9IFwiYWJvdXQ6YmxhbmtcIjtcclxuICAgICAgICB0aGlzLmxvYWRJZnJhbWVUaW1lb3V0KHVybE5hdmlnYXRlLCBmcmFtZU5hbWUsIHNjb3BlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIFJlbmV3cyBpZHRva2VuIGZvciBhcHAncyBvd24gYmFja2VuZCB3aGVuIGNsaWVudElkIGlzIHBhc3NlZCBhcyBhIHNpbmdsZSBzY29wZSBpbiB0aGUgc2NvcGVzIGFycmF5LlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlbmV3SWRUb2tlbihzY29wZXM6IEFycmF5PHN0cmluZz4sIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhY2NvdW50OiBBY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcInJlbmV3aWRUb2tlbiBpcyBjYWxsZWRcIik7XHJcbiAgICAgICAgY29uc3QgZnJhbWVOYW1lID0gXCJtc2FsSWRUb2tlbkZyYW1lXCI7XHJcbiAgICAgICAgY29uc3QgZnJhbWVIYW5kbGUgPSBXaW5kb3dVdGlscy5hZGRIaWRkZW5JRnJhbWUoZnJhbWVOYW1lLCB0aGlzLmxvZ2dlcik7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyBJZHRva2VuIEV4cGVjdGVkIHN0YXRlOiBcIiArIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIEJ1aWxkIHVybE5hdmlnYXRlIHdpdGggXCJwcm9tcHQ9bm9uZVwiIGFuZCBuYXZpZ2F0ZSB0byBVUkwgaW4gaGlkZGVuIGlGcmFtZVxyXG4gICAgICAgIGNvbnN0IHVybE5hdmlnYXRlID0gVXJsVXRpbHMudXJsUmVtb3ZlUXVlcnlTdHJpbmdQYXJhbWV0ZXIoVXJsVXRpbHMuY3JlYXRlTmF2aWdhdGVVcmwoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KSwgQ29uc3RhbnRzLnByb21wdCkgKyBDb25zdGFudHMucHJvbXB0X25vbmU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNpbGVudExvZ2luKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5sb2dpbjtcclxuICAgICAgICAgICAgdGhpcy5zaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm90ZTogc2NvcGUgaGVyZSBpcyBjbGllbnRJZFxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuY2xpZW50SWQsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGUpO1xyXG4gICAgICAgIGZyYW1lSGFuZGxlLnNyYyA9IFwiYWJvdXQ6YmxhbmtcIjtcclxuICAgICAgICB0aGlzLmxvYWRJZnJhbWVUaW1lb3V0KHVybE5hdmlnYXRlLCBmcmFtZU5hbWUsIHRoaXMuY2xpZW50SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICpcclxuICAgICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgY2FsbGVkIGZvciBwcm9jZXNzaW5nIHRoZSByZXNwb25zZSByZWNlaXZlZCBmcm9tIEFBRC4gSXQgZXh0cmFjdHMgdGhlIGhhc2gsIHByb2Nlc3NlcyB0aGUgdG9rZW4gb3IgZXJyb3IsIHNhdmVzIGl0IGluIHRoZSBjYWNoZSBhbmQgY2FsbHMgdGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIHdpdGggdGhlIHJlc3VsdC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdXRob3JpdHkgYXV0aG9yaXR5IHJlY2VpdmVkIGluIHRoZSByZWRpcmVjdCByZXNwb25zZSBmcm9tIEFBRC5cclxuICAgICAqIEBwYXJhbSB7VG9rZW5SZXNwb25zZX0gcmVxdWVzdEluZm8gYW4gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQgY29tcHJpc2luZyBvZiB0aGUga2V5cyAtIHBhcmFtZXRlcnMsIHJlcXVlc3RUeXBlLCBzdGF0ZU1hdGNoLCBzdGF0ZVJlc3BvbnNlIGFuZCB2YWxpZC5cclxuICAgICAqIEBwYXJhbSB7QWNjb3VudH0gYWNjb3VudCBhY2NvdW50IG9iamVjdCBmb3Igd2hpY2ggc2NvcGVzIGFyZSBjb25zZW50ZWQgZm9yLiBUaGUgZGVmYXVsdCBhY2NvdW50IGlzIHRoZSBsb2dnZWQgaW4gYWNjb3VudC5cclxuICAgICAqIEBwYXJhbSB7Q2xpZW50SW5mb30gY2xpZW50SW5mbyBjbGllbnRJbmZvIHJlY2VpdmVkIGFzIHBhcnQgb2YgdGhlIHJlc3BvbnNlIGNvbXByaXNpbmcgb2YgZmllbGRzIHVpZCBhbmQgdXRpZC5cclxuICAgICAqIEBwYXJhbSB7SWRUb2tlbn0gaWRUb2tlbiBpZFRva2VuIHJlY2VpdmVkIGFzIHBhcnQgb2YgdGhlIHJlc3BvbnNlLlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgLyogdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuICAgIHByaXZhdGUgc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGF1dGhvcml0eTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGNsaWVudEluZm86IHN0cmluZywgaWRUb2tlbk9iajogSWRUb2tlbik6IEF1dGhSZXNwb25zZSB7XHJcbiAgICAgICAgbGV0IHNjb3BlOiBzdHJpbmc7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5SZXNwb25zZSA9IHsgLi4ucmVzcG9uc2UgfTtcclxuICAgICAgICBjb25zdCBjbGllbnRPYmo6IENsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhjbGllbnRJbmZvKTtcclxuICAgICAgICBsZXQgZXhwaXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgcmVzcG9uc2UgY29udGFpbnMgXCJzY29wZVwiXHJcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoU2VydmVySGFzaFBhcmFtS2V5cy5TQ09QRSkpIHtcclxuICAgICAgICAgICAgLy8gcmVhZCB0aGUgc2NvcGVzXHJcbiAgICAgICAgICAgIHNjb3BlID0gcGFyYW1ldGVyc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLlNDT1BFXTtcclxuICAgICAgICAgICAgY29uc3QgY29uc2VudGVkU2NvcGVzID0gc2NvcGUuc3BsaXQoXCIgXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmV0cmlldmUgYWxsIGFjY2VzcyB0b2tlbnMgZnJvbSB0aGUgY2FjaGUsIHJlbW92ZSB0aGUgZHVwIHNjb3Jlc1xyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnModGhpcy5jbGllbnRJZCwgYXV0aG9yaXR5KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gcmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWRTY29wZXMgPSBhY2Nlc3NUb2tlbkNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoU2NvcGVTZXQuaXNJbnRlcnNlY3RpbmdTY29wZXMoY2FjaGVkU2NvcGVzLCBjb25zZW50ZWRTY29wZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhbmQgY2FjaGUgYWNjZXNzVG9rZW5LZXkgYW5kIGFjY2Vzc1Rva2VuVmFsdWVcclxuICAgICAgICAgICAgY29uc3QgZXhwaXJlc0luID0gVGltZVV0aWxzLnBhcnNlRXhwaXJlc0luKHBhcmFtZXRlcnNbU2VydmVySGFzaFBhcmFtS2V5cy5FWFBJUkVTX0lOXSk7XHJcbiAgICAgICAgICAgIGV4cGlyYXRpb24gPSBUaW1lVXRpbHMubm93KCkgKyBleHBpcmVzSW47XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuS2V5ID0gbmV3IEFjY2Vzc1Rva2VuS2V5KGF1dGhvcml0eSwgdGhpcy5jbGllbnRJZCwgc2NvcGUsIGNsaWVudE9iai51aWQsIGNsaWVudE9iai51dGlkKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5WYWx1ZSA9IG5ldyBBY2Nlc3NUb2tlblZhbHVlKHBhcmFtZXRlcnNbU2VydmVySGFzaFBhcmFtS2V5cy5BQ0NFU1NfVE9LRU5dLCBpZFRva2VuT2JqLnJhd0lkVG9rZW4sIGV4cGlyYXRpb24udG9TdHJpbmcoKSwgY2xpZW50SW5mbyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuS2V5KSwgSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5WYWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5hY2Nlc3NUb2tlbiAgPSBwYXJhbWV0ZXJzW1NlcnZlckhhc2hQYXJhbUtleXMuQUNDRVNTX1RPS0VOXTtcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5zY29wZXMgPSBjb25zZW50ZWRTY29wZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIHRoZSByZXNwb25zZSBkb2VzIG5vdCBjb250YWluIFwic2NvcGVcIiAtIHNjb3BlIGlzIHVzdWFsbHkgY2xpZW50X2lkIGFuZCB0aGUgdG9rZW4gd2lsbCBiZSBpZF90b2tlblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzY29wZSA9IHRoaXMuY2xpZW50SWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhbmQgY2FjaGUgYWNjZXNzVG9rZW5LZXkgYW5kIGFjY2Vzc1Rva2VuVmFsdWVcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5LZXkgPSBuZXcgQWNjZXNzVG9rZW5LZXkoYXV0aG9yaXR5LCB0aGlzLmNsaWVudElkLCBzY29wZSwgY2xpZW50T2JqLnVpZCwgY2xpZW50T2JqLnV0aWQpO1xyXG4gICAgICAgICAgICBleHBpcmF0aW9uID0gTnVtYmVyKGlkVG9rZW5PYmouZXhwaXJhdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuVmFsdWUgPSBuZXcgQWNjZXNzVG9rZW5WYWx1ZShwYXJhbWV0ZXJzW1NlcnZlckhhc2hQYXJhbUtleXMuSURfVE9LRU5dLCBwYXJhbWV0ZXJzW1NlcnZlckhhc2hQYXJhbUtleXMuSURfVE9LRU5dLCBleHBpcmF0aW9uLnRvU3RyaW5nKCksIGNsaWVudEluZm8pO1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuS2V5KSwgSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5WYWx1ZSkpO1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLnNjb3BlcyA9IFtzY29wZV07XHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuUmVzcG9uc2UuYWNjZXNzVG9rZW4gPSBwYXJhbWV0ZXJzW1NlcnZlckhhc2hQYXJhbUtleXMuSURfVE9LRU5dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV4cGlyYXRpb24pIHtcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5leHBpcmVzT24gPSBuZXcgRGF0ZShleHBpcmF0aW9uICogMTAwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJDb3VsZCBub3QgcGFyc2UgZXhwaXJlc0luIHBhcmFtZXRlclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY2Nlc3NUb2tlblJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogU2F2ZXMgdG9rZW4gb3IgZXJyb3IgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEIGluIHRoZSBjYWNoZS4gSW4gY2FzZSBvZiBpZF90b2tlbiwgaXQgYWxzbyBjcmVhdGVzIHRoZSBhY2NvdW50IG9iamVjdC5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHNhdmVUb2tlbkZyb21IYXNoKGhhc2g6IHN0cmluZywgc3RhdGVJbmZvOiBSZXNwb25zZVN0YXRlSW5mbyk6IEF1dGhSZXNwb25zZSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlN0YXRlIHN0YXR1czpcIiArIHN0YXRlSW5mby5zdGF0ZU1hdGNoICsgXCI7IFJlcXVlc3QgdHlwZTpcIiArIHN0YXRlSW5mby5yZXF1ZXN0VHlwZSk7XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZSA6IEF1dGhSZXNwb25zZSA9IHtcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHRlbmFudElkOiBcIlwiLFxyXG4gICAgICAgICAgICB0b2tlblR5cGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGlkVG9rZW46IG51bGwsXHJcbiAgICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IG51bGwsXHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxyXG4gICAgICAgICAgICBzY29wZXM6IFtdLFxyXG4gICAgICAgICAgICBleHBpcmVzT246IG51bGwsXHJcbiAgICAgICAgICAgIGFjY291bnQ6IG51bGwsXHJcbiAgICAgICAgICAgIGFjY291bnRTdGF0ZTogXCJcIixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgZXJyb3I6IEF1dGhFcnJvcjtcclxuICAgICAgICBjb25zdCBoYXNoUGFyYW1zID0gVXJsVXRpbHMuZGVzZXJpYWxpemVIYXNoKGhhc2gpO1xyXG4gICAgICAgIGxldCBhdXRob3JpdHlLZXk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGFjcXVpcmVUb2tlbkFjY291bnRLZXk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGlkVG9rZW5PYmo6IElkVG9rZW4gPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBJZiBzZXJ2ZXIgcmV0dXJucyBhbiBlcnJvclxyXG4gICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KFNlcnZlckhhc2hQYXJhbUtleXMuRVJST1JfREVTQ1JJUFRJT04pIHx8IGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUikpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIkVycm9yIDpcIiArIGhhc2hQYXJhbXNbU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUl0gKyBcIjsgRXJyb3IgZGVzY3JpcHRpb246XCIgKyBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuRVJST1JfREVTQ1JJUFRJT05dKTtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShFcnJvckNhY2hlS2V5cy5FUlJPUiwgaGFzaFBhcmFtc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLkVSUk9SXSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oRXJyb3JDYWNoZUtleXMuRVJST1JfREVTQywgaGFzaFBhcmFtc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLkVSUk9SX0RFU0NSSVBUSU9OXSk7XHJcblxyXG4gICAgICAgICAgICAvLyBsb2dpblxyXG4gICAgICAgICAgICBpZiAoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMubG9naW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oRXJyb3JDYWNoZUtleXMuTE9HSU5fRVJST1IsIGhhc2hQYXJhbXNbU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUl9ERVNDUklQVElPTl0gKyBcIjpcIiArIGhhc2hQYXJhbXNbU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUl0pO1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gQXV0aENhY2hlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGFjcXVpcmVUb2tlblxyXG4gICAgICAgICAgICBpZiAoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMucmVuZXdUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gQXV0aENhY2hlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlSW5mby5zdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY291bnRJZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWNjb3VudCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQgPSBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZCA9IENvbnN0YW50cy5ub19hY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBBdXRoQ2FjaGUuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRJZCwgc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgW1NlcnZlckhhc2hQYXJhbUtleXMuRVJST1JdOiBoYXNoRXJyLFxyXG4gICAgICAgICAgICAgICAgW1NlcnZlckhhc2hQYXJhbUtleXMuRVJST1JfREVTQ1JJUFRJT05dOiBoYXNoRXJyRGVzY1xyXG4gICAgICAgICAgICB9ID0gaGFzaFBhcmFtcztcclxuICAgICAgICAgICAgaWYgKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IuaXNJbnRlcmFjdGlvblJlcXVpcmVkRXJyb3IoaGFzaEVycikgfHxcclxuICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLmlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yKGhhc2hFcnJEZXNjKSkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuRVJST1JdLCBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuRVJST1JfREVTQ1JJUFRJT05dKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IFNlcnZlckVycm9yKGhhc2hQYXJhbXNbU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUl0sIGhhc2hQYXJhbXNbU2VydmVySGFzaFBhcmFtS2V5cy5FUlJPUl9ERVNDUklQVElPTl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIHRoZSBzZXJ2ZXIgcmV0dXJucyBcIlN1Y2Nlc3NcIlxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBWZXJpZnkgdGhlIHN0YXRlIGZyb20gcmVkaXJlY3QgYW5kIHJlY29yZCB0b2tlbnMgdG8gc3RvcmFnZSBpZiBleGlzdHNcclxuICAgICAgICAgICAgaWYgKHN0YXRlSW5mby5zdGF0ZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU3RhdGUgaXMgcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShTZXJ2ZXJIYXNoUGFyYW1LZXlzLlNFU1NJT05fU1RBVEUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShUZW1wb3JhcnlDYWNoZUtleXMuU0VTU0lPTl9TVEFURSwgaGFzaFBhcmFtc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLlNFU1NJT05fU1RBVEVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmFjY291bnRTdGF0ZSA9IHRoaXMuZ2V0QWNjb3VudFN0YXRlKHN0YXRlSW5mby5zdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudEluZm86IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyBhY2Nlc3NfdG9rZW5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KFNlcnZlckhhc2hQYXJhbUtleXMuQUNDRVNTX1RPS0VOKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJGcmFnbWVudCBoYXMgYWNjZXNzIHRva2VuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSB0aGUgaWRfdG9rZW4gZnJvbSByZXNwb25zZSBpZiBwcmVzZW50XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoU2VydmVySGFzaFBhcmFtS2V5cy5JRF9UT0tFTikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKGhhc2hQYXJhbXNbU2VydmVySGFzaFBhcmFtS2V5cy5JRF9UT0tFTl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pZFRva2VuID0gaWRUb2tlbk9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaWRUb2tlbkNsYWltcyA9IGlkVG9rZW5PYmouY2xhaW1zO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkVG9rZW5PYmogPSBuZXcgSWRUb2tlbih0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKFBlcnNpc3RlbnRDYWNoZUtleXMuSURUT0tFTikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFJlc3BvbnNlVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBpZFRva2VuT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBhdXRob3JpdHlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMucG9wdWxhdGVBdXRob3JpdHkoc3RhdGVJbmZvLnN0YXRlLCB0aGlzLmluQ29va2llLCB0aGlzLmNhY2hlU3RvcmFnZSwgaWRUb2tlbk9iaik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIGNsaWVudF9pbmZvIC0gaWYgaXQgaXMgbm90IGZvdW5kLCBnZW5lcmF0ZSB0aGUgdWlkIGFuZCB1dGlkIGZyb20gaWRUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KFNlcnZlckhhc2hQYXJhbUtleXMuQ0xJRU5UX0lORk8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudEluZm8gPSBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuQ0xJRU5UX0lORk9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJDbGllbnRJbmZvIG5vdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSBBQURcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yVXRpbHMudGhyb3dFcnJvckFuZENsZWFyVGVtcENhY2hlKHRoaXMuY2FjaGVTdG9yYWdlLCBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQ2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW5PYmosIG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRLZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWNjb3VudCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShyZXNwb25zZS5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEtleSA9IHJlc3BvbnNlLmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEtleSA9IENvbnN0YW50cy5ub19hY2NvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IEF1dGhDYWNoZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoYWNjb3VudEtleSwgc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5X25vYWNjb3VudCA9IEF1dGhDYWNoZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoQ29uc3RhbnRzLm5vX2FjY291bnQsIHN0YXRlSW5mby5zdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZEFjY291bnQ6IHN0cmluZyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjcXVpcmVUb2tlbkFjY291bnQ6IEFjY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHdpdGggdGhlIGFjY291bnQgaW4gdGhlIENhY2hlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGNhY2hlZEFjY291bnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnQgPSBKU09OLnBhcnNlKGNhY2hlZEFjY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWNjb3VudCAmJiBhY3F1aXJlVG9rZW5BY2NvdW50ICYmIEFjY291bnQuY29tcGFyZUFjY291bnRzKHJlc3BvbnNlLmFjY291bnQsIGFjcXVpcmVUb2tlbkFjY291bnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlLCBhdXRob3JpdHksIGhhc2hQYXJhbXMsIGNsaWVudEluZm8sIGlkVG9rZW5PYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlRoZSB1c2VyIG9iamVjdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgaXMgdGhlIHNhbWUgYXMgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFjcXVpcmVUb2tlbiByZXF1ZXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBhY2NvdW50IG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlc3BvbnNlIGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgb25lIHBhc3NlZCBpbiB0aGUgYWNxdWlyZVRva2VuIHJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShhY3F1aXJlVG9rZW5BY2NvdW50S2V5X25vYWNjb3VudCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2UsIGF1dGhvcml0eSwgaGFzaFBhcmFtcywgY2xpZW50SW5mbywgaWRUb2tlbk9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgaWRfdG9rZW5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KFNlcnZlckhhc2hQYXJhbUtleXMuSURfVE9LRU4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkZyYWdtZW50IGhhcyBpZCB0b2tlblwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBpZFRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKGhhc2hQYXJhbXNbU2VydmVySGFzaFBhcmFtS2V5cy5JRF9UT0tFTl0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFJlc3BvbnNlVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBpZFRva2VuT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShTZXJ2ZXJIYXNoUGFyYW1LZXlzLkNMSUVOVF9JTkZPKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvID0gaGFzaFBhcmFtc1tTZXJ2ZXJIYXNoUGFyYW1LZXlzLkNMSUVOVF9JTkZPXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGF1dGhvcml0eVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhvcml0eTogc3RyaW5nID0gdGhpcy5wb3B1bGF0ZUF1dGhvcml0eShzdGF0ZUluZm8uc3RhdGUsIHRoaXMuaW5Db29raWUsIHRoaXMuY2FjaGVTdG9yYWdlLCBpZFRva2VuT2JqKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW5PYmosIG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5hY2NvdW50ID0gdGhpcy5hY2NvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRUb2tlbk9iaiAmJiBpZFRva2VuT2JqLm5vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIG5vbmNlIGludGVncml0eSBpZiBpZFRva2VuIGhhcyBub25jZSAtIHRocm93IGFuIGVycm9yIGlmIG5vdCBtYXRjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZFRva2VuT2JqLm5vbmNlICE9PSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGAke1RlbXBvcmFyeUNhY2hlS2V5cy5OT05DRV9JRFRPS0VOfXwke3N0YXRlSW5mby5zdGF0ZX1gLCB0aGlzLmluQ29va2llKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oRXJyb3JDYWNoZUtleXMuTE9HSU5fRVJST1IsIFwiTm9uY2UgTWlzbWF0Y2guIEV4cGVjdGVkIE5vbmNlOiBcIiArIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLk5PTkNFX0lEVE9LRU59fCR7c3RhdGVJbmZvLnN0YXRlfWAsIHRoaXMuaW5Db29raWUpICsgXCIsXCIgKyBcIkFjdHVhbCBOb25jZTogXCIgKyBpZFRva2VuT2JqLm5vbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiTm9uY2UgTWlzbWF0Y2guRXhwZWN0ZWQgTm9uY2U6IFwiICsgdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShgJHtUZW1wb3JhcnlDYWNoZUtleXMuTk9OQ0VfSURUT0tFTn18JHtzdGF0ZUluZm8uc3RhdGV9YCwgdGhpcy5pbkNvb2tpZSkgKyBcIixcIiArIFwiQWN0dWFsIE5vbmNlOiBcIiArIGlkVG9rZW5PYmoubm9uY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTm9uY2VNaXNtYXRjaEVycm9yKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLk5PTkNFX0lEVE9LRU59fCR7c3RhdGVJbmZvLnN0YXRlfWAsIHRoaXMuaW5Db29raWUpLCBpZFRva2VuT2JqLm5vbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oUGVyc2lzdGVudENhY2hlS2V5cy5JRFRPS0VOLCBoYXNoUGFyYW1zW1NlcnZlckhhc2hQYXJhbUtleXMuSURfVE9LRU5dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oUGVyc2lzdGVudENhY2hlS2V5cy5DTElFTlRfSU5GTywgY2xpZW50SW5mbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBpZFRva2VuIGFzIGFjY2VzcyB0b2tlbiBmb3IgYXBwIGl0c2VsZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2UsIGF1dGhvcml0eSwgaGFzaFBhcmFtcywgY2xpZW50SW5mbywgaWRUb2tlbk9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JpdHlLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkludmFsaWQgaWRfdG9rZW4gcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkSWRUb2tlbkVycm9yKGlkVG9rZW5PYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEVycm9yQ2FjaGVLZXlzLkVSUk9SLCBlcnJvci5lcnJvckNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEVycm9yQ2FjaGVLZXlzLkVSUk9SX0RFU0MsIGVycm9yLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFN0YXRlIG1pc21hdGNoIC0gdW5leHBlY3RlZC9pbnZhbGlkIHN0YXRlXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IHN0YXRlSW5mby5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZFN0YXRlID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShUZW1wb3JhcnlDYWNoZUtleXMuU1RBVEVfTE9HSU4sIHRoaXMuaW5Db29raWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJTdGF0ZSBNaXNtYXRjaC5FeHBlY3RlZCBTdGF0ZTogXCIgKyBleHBlY3RlZFN0YXRlICsgXCIsXCIgKyBcIkFjdHVhbCBTdGF0ZTogXCIgKyBzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZFN0YXRlRXJyb3Ioc3RhdGVJbmZvLnN0YXRlLCBleHBlY3RlZFN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oRXJyb3JDYWNoZUtleXMuRVJST1IsIGVycm9yLmVycm9yQ29kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEVycm9yQ2FjaGVLZXlzLkVSUk9SX0RFU0MsIGVycm9yLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBzdGF0dXMgdG8gY29tcGxldGVkXHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShJTlRFUkFDVElPTl9TVEFUVVMsIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEKTtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5SRU5FV19TVEFUVVMgKyBzdGF0ZUluZm8uc3RhdGUsIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEKTtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVBY3F1aXJlVG9rZW5FbnRyaWVzKHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgLy8gdGhpcyBpcyByZXF1aXJlZCBpZiBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsPWZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMuaW5Db29raWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbUNvb2tpZShhdXRob3JpdHlLZXksIFwiXCIsIC0xKTtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJNc2FsQ29va2llKHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBFcnJvciBjYXNlLCBzZXQgc3RhdHVzIHRvIGNhbmNlbGxlZFxyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVBY3F1aXJlVG9rZW5FbnRyaWVzKHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvclV0aWxzLnRocm93RXJyb3JBbmRDbGVhclRlbXBDYWNoZSh0aGlzLmNhY2hlU3RvcmFnZSwgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIlJlc3BvbnNlIGlzIG51bGxcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IEF1dGhvcml0eSB3aGVuIHNhdmluZyBUb2tlbiBmcm9tIHRoZSBoYXNoXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqIEBwYXJhbSBpbkNvb2tpZVxyXG4gICAgICogQHBhcmFtIGNhY2hlU3RvcmFnZVxyXG4gICAgICogQHBhcmFtIGlkVG9rZW5PYmpcclxuICAgICAqIEBwYXJhbSByZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBvcHVsYXRlQXV0aG9yaXR5KHN0YXRlOiBzdHJpbmcsIGluQ29va2llOiBib29sZWFuLCBjYWNoZVN0b3JhZ2U6IEF1dGhDYWNoZSwgaWRUb2tlbk9iajogSWRUb2tlbik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5S2V5OiBzdHJpbmcgPSBBdXRoQ2FjaGUuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEF1dGhvcml0eTogc3RyaW5nID0gY2FjaGVTdG9yYWdlLmdldEl0ZW0oYXV0aG9yaXR5S2V5LCBpbkNvb2tpZSk7XHJcblxyXG4gICAgICAgIC8vIHJldHJpZXZlIHRoZSBhdXRob3JpdHkgZnJvbSBjYWNoZSBhbmQgcmVwbGFjZSB3aXRoIHRlbmFudElEXHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ1V0aWxzLmlzRW1wdHkoY2FjaGVkQXV0aG9yaXR5KSA/IGNhY2hlZEF1dGhvcml0eSA6IFVybFV0aWxzLnJlcGxhY2VUZW5hbnRQYXRoKGNhY2hlZEF1dGhvcml0eSwgaWRUb2tlbk9iai50ZW5hbnRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogdHNsaW50OmVuYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIEFjY291bnRcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHNpZ25lZCBpbiBhY2NvdW50XHJcbiAgICAgKiAodGhlIGFjY291bnQgb2JqZWN0IGlzIGNyZWF0ZWQgYXQgdGhlIHRpbWUgb2Ygc3VjY2Vzc2Z1bCBsb2dpbilcclxuICAgICAqIG9yIG51bGwgd2hlbiBubyBzdGF0ZSBpcyBmb3VuZFxyXG4gICAgICogQHJldHVybnMge0BsaW5rIEFjY291bnR9IC0gdGhlIGFjY291bnQgb2JqZWN0IHN0b3JlZCBpbiBNU0FMXHJcbiAgICAgKi9cclxuICAgIGdldEFjY291bnQoKTogQWNjb3VudCB7XHJcbiAgICAgICAgLy8gaWYgYSBzZXNzaW9uIGFscmVhZHkgZXhpc3RzLCBnZXQgdGhlIGFjY291bnQgZnJvbSB0aGUgc2Vzc2lvblxyXG4gICAgICAgIGlmICh0aGlzLmFjY291bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZyYW1lIGlzIHVzZWQgdG8gZ2V0IGlkVG9rZW4gYW5kIHBvcHVsYXRlIHRoZSBhY2NvdW50IGZvciB0aGUgZ2l2ZW4gc2Vzc2lvblxyXG4gICAgICAgIGNvbnN0IHJhd0lkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKFBlcnNpc3RlbnRDYWNoZUtleXMuSURUT0tFTik7XHJcbiAgICAgICAgY29uc3QgcmF3Q2xpZW50SW5mbyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oUGVyc2lzdGVudENhY2hlS2V5cy5DTElFTlRfSU5GTyk7XHJcblxyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdJZFRva2VuKSAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdDbGllbnRJbmZvKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpZFRva2VuID0gbmV3IElkVG9rZW4ocmF3SWRUb2tlbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhyYXdDbGllbnRJbmZvKTtcclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW4sIGNsaWVudEluZm8pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiBsb2dpbiBub3QgeWV0IGRvbmUsIHJldHVybiBudWxsXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKlxyXG4gICAgICogRXh0cmFjdHMgc3RhdGUgdmFsdWUgZnJvbSB0aGUgYWNjb3VudFN0YXRlIHNlbnQgd2l0aCB0aGUgYXV0aGVudGljYXRpb24gcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHNjb3BlLlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBnZXRBY2NvdW50U3RhdGUgKHN0YXRlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXRJbmRleCA9IHN0YXRlLmluZGV4T2YoXCJ8XCIpO1xyXG4gICAgICAgICAgICBpZiAoc3BsaXRJbmRleCA+IC0xICYmIHNwbGl0SW5kZXggKyAxIDwgc3RhdGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuc3Vic3RyaW5nKHNwbGl0SW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgdG8gZ2V0IGEgbGlzdCBvZiB1bmlxdWUgYWNjb3VudHMgaW4gTVNBTCBjYWNoZSBiYXNlZCBvbiBob21lQWNjb3VudElkZW50aWZpZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtAbGluayBBcnJheTxBY2NvdW50Pn0gQWNjb3VudCAtIGFsbCB1bmlxdWUgYWNjb3VudHMgaW4gTVNBTCBjYWNoZS5cclxuICAgICAqL1xyXG4gICAgZ2V0QWxsQWNjb3VudHMoKTogQXJyYXk8QWNjb3VudD4ge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBBcnJheTxBY2NvdW50PiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpZFRva2VuID0gbmV3IElkVG9rZW4oYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldLnZhbHVlLmlkVG9rZW4pO1xyXG4gICAgICAgICAgICBjb25zdCBjbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8oYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldLnZhbHVlLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSBBY2NvdW50LmNyZWF0ZUFjY291bnQoaWRUb2tlbiwgY2xpZW50SW5mbyk7XHJcbiAgICAgICAgICAgIGFjY291bnRzLnB1c2goYWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRVbmlxdWVBY2NvdW50cyhhY2NvdW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKlxyXG4gICAgICogVXNlZCB0byBmaWx0ZXIgYWNjb3VudHMgYmFzZWQgb24gaG9tZUFjY291bnRJZGVudGlmaWVyXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFjY291bnQ+fSAgQWNjb3VudHMgLSBhY2NvdW50cyBzYXZlZCBpbiB0aGUgY2FjaGVcclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRVbmlxdWVBY2NvdW50cyhhY2NvdW50czogQXJyYXk8QWNjb3VudD4pOiBBcnJheTxBY2NvdW50PiB7XHJcbiAgICAgICAgaWYgKCFhY2NvdW50cyB8fCBhY2NvdW50cy5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmbGFnczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUFjY291bnRzOiBBcnJheTxBY2NvdW50PiA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhY2NvdW50cy5sZW5ndGg7ICsraW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGFjY291bnRzW2luZGV4XS5ob21lQWNjb3VudElkZW50aWZpZXIgJiYgZmxhZ3MuaW5kZXhPZihhY2NvdW50c1tpbmRleF0uaG9tZUFjY291bnRJZGVudGlmaWVyKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGZsYWdzLnB1c2goYWNjb3VudHNbaW5kZXhdLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVBY2NvdW50cy5wdXNoKGFjY291bnRzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmlxdWVBY2NvdW50cztcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBTY29wZXMgKEV4dHJhY3QgdG8gU2NvcGVzLnRzKVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBOb3RlOiBcInRoaXNcIiBkZXBlbmRlbmN5IGluIHRoaXMgc2VjdGlvbiBpcyBtaW5pbWFsLlxyXG4gICAgICogSWYgcENhY2hlU3RvcmFnZSBpcyBzZXBhcmF0ZWQgZnJvbSB0aGUgY2xhc3Mgb2JqZWN0LCBvciBwYXNzZWQgYXMgYSBmbiBwYXJhbSwgc2NvcGVzVXRpbHMudHMgY2FuIGJlIGNyZWF0ZWRcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICpcclxuICAgICAqIFVzZWQgdG8gdmFsaWRhdGUgdGhlIHNjb3BlcyBpbnB1dCBwYXJhbWV0ZXIgcmVxdWVzdGVkICBieSB0aGUgZGV2ZWxvcGVyLlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzY29wZXMgLSBEZXZlbG9wZXIgcmVxdWVzdGVkIHBlcm1pc3Npb25zLiBOb3QgYWxsIHNjb3BlcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkLlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzY29wZXNSZXF1aXJlZCAtIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzY29wZXMgYXJyYXkgaXMgcmVxdWlyZWQgb3Igbm90XHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdmFsaWRhdGVJbnB1dFNjb3BlKHNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzUmVxdWlyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXNjb3Blcykge1xyXG4gICAgICAgICAgICBpZiAoc2NvcGVzUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yVXRpbHMudGhyb3dFcnJvckFuZENsZWFyVGVtcENhY2hlKHRoaXMuY2FjaGVTdG9yYWdlLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlU2NvcGVzUmVxdWlyZWRFcnJvcihzY29wZXMpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBzY29wZXMgaXMgYW4gYXJyYXkgb2JqZWN0IChhbHNvIHRocm93cyBlcnJvciBpZiBzY29wZXMgPT0gbnVsbClcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NvcGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvclV0aWxzLnRocm93RXJyb3JBbmRDbGVhclRlbXBDYWNoZSh0aGlzLmNhY2hlU3RvcmFnZSwgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVNjb3Blc05vbkFycmF5RXJyb3Ioc2NvcGVzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayB0aGF0IHNjb3BlcyBpcyBub3QgYW4gZW1wdHkgYXJyYXlcclxuICAgICAgICBpZiAoc2NvcGVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIHRoYXQgY2xpZW50SWQgaXMgcGFzc2VkIGFzIHNpbmdsZSBzY29wZVxyXG4gICAgICAgIGlmIChzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGlmIChzY29wZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVDbGllbnRJZFNpbmdsZVNjb3BlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqXHJcbiAgICAgKiBFeHRyYWN0cyBzY29wZSB2YWx1ZSBmcm9tIHRoZSBzdGF0ZSBzZW50IHdpdGggdGhlIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHNjb3BlLlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFNjb3BlRnJvbVN0YXRlKHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzcGxpdEluZGV4ID0gc3RhdGUuaW5kZXhPZihcInxcIik7XHJcbiAgICAgICAgICAgIGlmIChzcGxpdEluZGV4ID4gLTEgJiYgc3BsaXRJbmRleCArIDEgPCBzdGF0ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5zdWJzdHJpbmcoc3BsaXRJbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICogQXBwZW5kcyBleHRyYVNjb3Blc1RvQ29uc2VudCBpZiBwYXNzZWRcclxuICAgICAqIEBwYXJhbSB7QGxpbmsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzfVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFwcGVuZFNjb3BlcyhyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiBBcnJheTxzdHJpbmc+IHtcclxuXHJcbiAgICAgICAgbGV0IHNjb3BlczogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3QgJiYgcmVxdWVzdC5zY29wZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QuZXh0cmFTY29wZXNUb0NvbnNlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlcyA9IFsuLi5yZXF1ZXN0LnNjb3BlcywgLi4ucmVxdWVzdC5leHRyYVNjb3Blc1RvQ29uc2VudF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZXMgPSByZXF1ZXN0LnNjb3BlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNjb3BlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBBbmd1bGFyXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKlxyXG4gICAgICogQnJvYWRjYXN0IG1lc3NhZ2VzIC0gVXNlZCBvbmx5IGZvciBBbmd1bGFyPyAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZVxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBicm9hZGNhc3QoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHsgZGV0YWlsOiBkYXRhIH0pO1xyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKlxyXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBjYWNoZWQgdG9rZW5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEFjY291bnR9IGFjY291bnRcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHJldHVybiB7QGxpbmsgQXV0aFJlc3BvbnNlfSBBdXRoUmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldENhY2hlZFRva2VuSW50ZXJuYWwoc2NvcGVzIDogQXJyYXk8c3RyaW5nPiAsIGFjY291bnQ6IEFjY291bnQsIHN0YXRlOiBzdHJpbmcpOiBBdXRoUmVzcG9uc2Uge1xyXG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzZXNzaW9uJ3MgYWNjb3VudCBvYmplY3RcclxuICAgICAgICBjb25zdCBhY2NvdW50T2JqZWN0OiBBY2NvdW50ID0gYWNjb3VudCB8fCB0aGlzLmdldEFjY291bnQoKTtcclxuICAgICAgICBpZiAoIWFjY291bnRPYmplY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25zdHJ1Y3QgQXV0aGVudGljYXRpb25SZXF1ZXN0IGJhc2VkIG9uIHJlc3BvbnNlIHR5cGVcclxuICAgICAgICBjb25zdCBuZXdBdXRob3JpdHkgPSB0aGlzLmF1dGhvcml0eUluc3RhbmNlID8gdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA6IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UodGhpcy5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHRoaXMuZ2V0VG9rZW5UeXBlKGFjY291bnRPYmplY3QsIHNjb3BlcywgdHJ1ZSk7XHJcbiAgICAgICAgY29uc3Qgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxyXG4gICAgICAgICAgICBuZXdBdXRob3JpdHksXHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIHNjb3BlcyxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJpKCksXHJcbiAgICAgICAgICAgIHN0YXRlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IGNhY2hlZCB0b2tlblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKlxyXG4gICAgICogR2V0IHNjb3BlcyBmb3IgdGhlIEVuZHBvaW50IC0gVXNlZCBpbiBBbmd1bGFyIHRvIHRyYWNrIHByb3RlY3RlZCBhbmQgdW5wcm90ZWN0ZWQgcmVzb3VyY2VzIHdpdGhvdXQgaW50ZXJhY3Rpb24gZnJvbSB0aGUgZGV2ZWxvcGVyIGFwcFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbmRwb2ludFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0U2NvcGVzRm9yRW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZykgOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICAvLyBpZiB1c2VyIHNwZWNpZmllZCBsaXN0IG9mIHVucHJvdGVjdGVkUmVzb3VyY2VzLCBubyBuZWVkIHRvIHNlbmQgdG9rZW4gdG8gdGhlc2UgZW5kcG9pbnRzLCByZXR1cm4gbnVsbC5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLnVucHJvdGVjdGVkUmVzb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbmZpZy5mcmFtZXdvcmsudW5wcm90ZWN0ZWRSZXNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbmRwb2ludC5pbmRleE9mKHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlc1tpXSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwcm9jZXNzIGFsbCBwcm90ZWN0ZWQgcmVzb3VyY2VzIGFuZCBzZW5kIHRoZSBtYXRjaGVkIG9uZVxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5mcmFtZXdvcmsucHJvdGVjdGVkUmVzb3VyY2VNYXAuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbSh0aGlzLmNvbmZpZy5mcmFtZXdvcmsucHJvdGVjdGVkUmVzb3VyY2VNYXAua2V5cygpKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uZmlnRW5kcG9pbnQgaXMgbGlrZSAvYXBpL1RvZG8gcmVxdWVzdGVkIGVuZHBvaW50IGNhbiBiZSAvYXBpL1RvZG8vMVxyXG4gICAgICAgICAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2Yoa2V5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmZyYW1ld29yay5wcm90ZWN0ZWRSZXNvdXJjZU1hcC5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBkZWZhdWx0IHJlc291cmNlIHdpbGwgYmUgY2xpZW50aWQgaWYgbm90aGluZyBzcGVjaWZpZWRcclxuICAgICAgICAgKiBBcHAgd2lsbCB1c2UgaWR0b2tlbiBmb3IgY2FsbHMgdG8gaXRzZWxmXHJcbiAgICAgICAgICogY2hlY2sgaWYgaXQncyBzdGFyaW5nIGZyb20gaHR0cCBvciBodHRwcywgbmVlZHMgdG8gbWF0Y2ggd2l0aCBhcHAgaG9zdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmIChlbmRwb2ludC5pbmRleE9mKFwiaHR0cDovL1wiKSA+IC0xIHx8IGVuZHBvaW50LmluZGV4T2YoXCJodHRwczovL1wiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldEhvc3RGcm9tVXJpKGVuZHBvaW50KSA9PT0gdGhpcy5nZXRIb3N0RnJvbVVyaSh0aGlzLmdldFJlZGlyZWN0VXJpKCkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5PHN0cmluZz4odGhpcy5jbGllbnRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgKiBpbiBhbmd1bGFyIGxldmVsLCB0aGUgdXJsIGZvciAkaHR0cCBpbnRlcmNlcHRvciBjYWxsIGNvdWxkIGJlIHJlbGF0aXZlIHVybCxcclxuICAgICAgICAgICAgICogaWYgaXQncyByZWxhdGl2ZSBjYWxsLCB3ZSdsbCB0cmVhdCBpdCBhcyBhcHAgYmFja2VuZCBjYWxsLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheTxzdHJpbmc+KHRoaXMuY2xpZW50SWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgbm90IHRoZSBhcHAncyBvd24gYmFja2VuZCBvciBub3QgYSBkb21haW4gbGlzdGVkIGluIHRoZSBlbmRwb2ludHMgc3RydWN0dXJlXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYm9vbGVhbiBmbGFnIHRvIGRldmVsb3BlciB0byBoZWxwIGluZm9ybSBpZiBsb2dpbiBpcyBpbiBwcm9ncmVzc1xyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUvZmFsc2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldExvZ2luSW5Qcm9ncmVzcygpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBwZW5kaW5nQ2FsbGJhY2sgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5VUkxfSEFTSCk7XHJcbiAgICAgICAgaWYgKHBlbmRpbmdDYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oSU5URVJBQ1RJT05fU1RBVFVTKSA9PT0gUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5Qcm9ncmVzc1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc2V0SW50ZXJhY3Rpb25JblByb2dyZXNzKGluUHJvZ3Jlc3M6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoaW5Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKElOVEVSQUNUSU9OX1NUQVRVUywgUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShJTlRFUkFDVElPTl9TVEFUVVMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbG9naW5JblByb2dyZXNzXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzZXRsb2dpbkluUHJvZ3Jlc3MobG9naW5JblByb2dyZXNzIDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2V0SW50ZXJhY3Rpb25JblByb2dyZXNzKGxvZ2luSW5Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKlxyXG4gICAgICogcmV0dXJucyB0aGUgc3RhdHVzIG9mIGFjcXVpcmVUb2tlbkluUHJvZ3Jlc3NcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldEFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oSU5URVJBQ1RJT05fU1RBVFVTKSA9PT0gUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYWNxdWlyZVRva2VuSW5Qcm9ncmVzc1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc2V0QWNxdWlyZVRva2VuSW5Qcm9ncmVzcyhhY3F1aXJlVG9rZW5JblByb2dyZXNzIDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2V0SW50ZXJhY3Rpb25JblByb2dyZXNzKGFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICpcclxuICAgICAqIHJldHVybnMgdGhlIGxvZ2dlciBoYW5kbGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldExvZ2dlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuc3lzdGVtLmxvZ2dlcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBHZXR0ZXJzIGFuZCBTZXR0ZXJzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogVXNlIHRvIGdldCB0aGUgcmVkaXJlY3QgdXJpIGNvbmZpZ3VyZWQgaW4gTVNBTCBvciBudWxsLlxyXG4gICAgICogRXZhbHVhdGVzIHJlZGlyZWN0VXJpIGlmIGl0cyBhIGZ1bmN0aW9uLCBvdGhlcndpc2Ugc2ltcGx5IHJldHVybnMgaXRzIHZhbHVlLlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcmVkaXJlY3QgVVJMXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmF1dGgucmVkaXJlY3RVcmkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB0byBnZXQgdGhlIHBvc3QgbG9nb3V0IHJlZGlyZWN0IHVyaSBjb25maWd1cmVkIGluIE1TQUwgb3IgbnVsbC5cclxuICAgICAqIEV2YWx1YXRlcyBwb3N0TG9nb3V0cmVkaXJlY3RVcmkgaWYgaXRzIGEgZnVuY3Rpb24sIG90aGVyd2lzZSBzaW1wbHkgcmV0dXJucyBpdHMgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcG9zdCBsb2dvdXQgcmVkaXJlY3QgVVJMXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmF1dGgucG9zdExvZ291dFJlZGlyZWN0VXJpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmF1dGgucG9zdExvZ291dFJlZGlyZWN0VXJpKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB0byBnZXQgdGhlIGN1cnJlbnQge0BsaW5rIENvbmZpZ3VyYXRpb259IG9iamVjdCBpbiBNU0FMXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0BsaW5rIENvbmZpZ3VyYXRpb259XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50Q29uZmlndXJhdGlvbigpOiBDb25maWd1cmF0aW9uIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yVXRpbHMudGhyb3dFcnJvckFuZENsZWFyVGVtcENhY2hlKHRoaXMuY2FjaGVTdG9yYWdlLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlTm9TZXRDb25maWd1cmF0aW9uRXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBTdHJpbmcgVXRpbCAoU2hvdWxkIGJlIGV4dHJhY3RlZCB0byBVdGlscy50cylcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqXHJcbiAgICAgKiBleHRyYWN0IFVSSSBmcm9tIHRoZSBob3N0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFVSSVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gaG9zdCBmcm9tIHRoZSBVUklcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRIb3N0RnJvbVVyaSh1cmk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGh0dHA6Ly8gb3IgaHR0cHM6Ly8gZnJvbSB1cmlcclxuICAgICAgICBsZXQgZXh0cmFjdGVkVXJpID0gU3RyaW5nKHVyaSkucmVwbGFjZSgvXihodHRwcz86KVxcL1xcLy8sIFwiXCIpO1xyXG4gICAgICAgIGV4dHJhY3RlZFVyaSA9IGV4dHJhY3RlZFVyaS5zcGxpdChcIi9cIilbMF07XHJcbiAgICAgICAgcmV0dXJuIGV4dHJhY3RlZFVyaTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqXHJcbiAgICAgKiBVdGlscyBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIEF1dGhlbnRpY2F0aW9uXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIGFjY291bnR9IGFjY291bnQgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICAgKiBAcGFyYW0gc2lsZW50Q2FsbFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHRva2VuIHR5cGU6IGlkX3Rva2VuIG9yIGFjY2Vzc190b2tlblxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRUb2tlblR5cGUoYWNjb3VudE9iamVjdDogQWNjb3VudCwgc2NvcGVzOiBzdHJpbmdbXSwgc2lsZW50Q2FsbDogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBpZiBhY2NvdW50IGlzIHBhc3NlZCBhbmQgbWF0Y2hlcyB0aGUgYWNjb3VudCBvYmplY3Qvb3Igc2V0IHRvIGdldEFjY291bnQoKSBmcm9tIGNhY2hlXHJcbiAgICAgICAgICogaWYgY2xpZW50LWlkIGlzIHBhc3NlZCBhcyBzY29wZSwgZ2V0IGlkX3Rva2VuIGVsc2UgdG9rZW4vaWRfdG9rZW5fdG9rZW4gKGluIGNhc2Ugbm8gc2Vzc2lvbiBleGlzdHMpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IHRva2VuVHlwZTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvLyBhY3F1aXJlVG9rZW5TaWxlbnRcclxuICAgICAgICBpZiAoc2lsZW50Q2FsbCkge1xyXG4gICAgICAgICAgICBpZiAoQWNjb3VudC5jb21wYXJlQWNjb3VudHMoYWNjb3VudE9iamVjdCwgdGhpcy5nZXRBY2NvdW50KCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlblR5cGUgPSAoc2NvcGVzLmluZGV4T2YodGhpcy5jb25maWcuYXV0aC5jbGllbnRJZCkgPiAtMSkgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogUmVzcG9uc2VUeXBlcy50b2tlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRva2VuVHlwZSAgPSAoc2NvcGVzLmluZGV4T2YodGhpcy5jb25maWcuYXV0aC5jbGllbnRJZCkgPiAtMSkgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogUmVzcG9uc2VUeXBlcy5pZF90b2tlbl90b2tlbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuVHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYWxsIG90aGVyIGNhc2VzXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghQWNjb3VudC5jb21wYXJlQWNjb3VudHMoYWNjb3VudE9iamVjdCwgdGhpcy5nZXRBY2NvdW50KCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlblR5cGUgPSBSZXNwb25zZVR5cGVzLmlkX3Rva2VuX3Rva2VuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5UeXBlID0gKHNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEpID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IFJlc3BvbnNlVHlwZXMudG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlblR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqXHJcbiAgICAgKiBTZXRzIHRoZSBjYWNoZWtleXMgZm9yIGFuZCBzdG9yZXMgdGhlIGFjY291bnQgaW5mb3JtYXRpb24gaW4gY2FjaGVcclxuICAgICAqIEBwYXJhbSBhY2NvdW50XHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXRBY2NvdW50Q2FjaGUoYWNjb3VudDogQWNjb3VudCwgc3RhdGU6IHN0cmluZykge1xyXG5cclxuICAgICAgICAvLyBDYWNoZSBhY3F1aXJlVG9rZW5BY2NvdW50S2V5XHJcbiAgICAgICAgY29uc3QgYWNjb3VudElkID0gYWNjb3VudCA/IHRoaXMuZ2V0QWNjb3VudElkKGFjY291bnQpIDogQ29uc3RhbnRzLm5vX2FjY291bnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBBdXRoQ2FjaGUuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRJZCwgc3RhdGUpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleSwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICpcclxuICAgICAqIFNldHMgdGhlIGNhY2hlS2V5IGZvciBhbmQgc3RvcmVzIHRoZSBhdXRob3JpdHkgaW5mb3JtYXRpb24gaW4gY2FjaGVcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldEF1dGhvcml0eUNhY2hlKHN0YXRlOiBzdHJpbmcsIGF1dGhvcml0eTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gQ2FjaGUgYXV0aG9yaXR5S2V5XHJcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5S2V5ID0gQXV0aENhY2hlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlKTtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKGF1dGhvcml0eUtleSwgVXJsVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eSksIHRoaXMuaW5Db29raWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBhY2NvdW50LCBhdXRob3JpdHksIGFuZCBub25jZSBpbiBjYWNoZVxyXG4gICAgICogQHBhcmFtIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdFxyXG4gICAgICogQHBhcmFtIGFjY291bnRcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDYWNoZUVudHJpZXMoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycywgYWNjb3VudDogQWNjb3VudCwgbG9naW5TdGFydFBhZ2U/OiBhbnkpIHtcclxuICAgICAgICAvLyBDYWNoZSBhY2NvdW50IGFuZCBhdXRob3JpdHlcclxuICAgICAgICBpZiAobG9naW5TdGFydFBhZ2UpIHtcclxuICAgICAgICAgICAgLy8gQ2FjaGUgdGhlIHN0YXRlLCBub25jZSwgYW5kIGxvZ2luIHJlcXVlc3QgZGF0YVxyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5MT0dJTl9SRVFVRVNULCBsb2dpblN0YXJ0UGFnZSwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLlNUQVRFX0xPR0lOLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuaW5Db29raWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWNjb3VudENhY2hlKGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENhY2hlIGF1dGhvcml0eUtleVxyXG4gICAgICAgIHRoaXMuc2V0QXV0aG9yaXR5Q2FjaGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KTtcclxuXHJcbiAgICAgICAgLy8gQ2FjaGUgbm9uY2VcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKGAke1RlbXBvcmFyeUNhY2hlS2V5cy5OT05DRV9JRFRPS0VOfXwke3NlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZX1gLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Qubm9uY2UsIHRoaXMuaW5Db29raWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBsb2dnZWQgaW4gYWNjb3VudFxyXG4gICAgICogQHBhcmFtIGFjY291bnRcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRBY2NvdW50SWQoYWNjb3VudDogQWNjb3VudCk6IGFueSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGAke2FjY291bnQuYWNjb3VudElkZW50aWZpZXJ9YCArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIGAke2FjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyfWA7XHJcbiAgICAgICAgbGV0IGFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgYWNjb3VudElkID0gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhY2NvdW50SWQgPSBDb25zdGFudHMubm9fYWNjb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY2NvdW50SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKlxyXG4gICAgICogQ29uc3RydWN0ICd0b2tlblJlcXVlc3QnIGZyb20gdGhlIGF2YWlsYWJsZSBkYXRhIGluIGFkYWxJZFRva2VuXHJcbiAgICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0ge1xyXG4gICAgICAgICAgICBzY29wZXM6IFt0aGlzLmNsaWVudElkXSxcclxuICAgICAgICAgICAgYXV0aG9yaXR5OiB0aGlzLmF1dGhvcml0eSxcclxuICAgICAgICAgICAgYWNjb3VudDogdGhpcy5nZXRBY2NvdW50KCksXHJcbiAgICAgICAgICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRva2VuUmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUZWxlbWV0cnlNYW5hZ2VyRnJvbUNvbmZpZyhjb25maWc6IFRlbGVtZXRyeU9wdGlvbnMsIGNsaWVudElkOiBzdHJpbmcpOiBUZWxlbWV0cnlNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIWNvbmZpZykgeyAvLyBpZiB1bnNldFxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgc2V0IHRoZW4gdmFsaWRhdGVcclxuICAgICAgICBjb25zdCB7IGFwcGxpY2F0aW9uTmFtZSwgYXBwbGljYXRpb25WZXJzaW9uLCB0ZWxlbWV0cnlFbWl0dGVyIH0gPSBjb25maWc7XHJcbiAgICAgICAgaWYgKCFhcHBsaWNhdGlvbk5hbWUgfHwgIWFwcGxpY2F0aW9uVmVyc2lvbiB8fCAhIHRlbGVtZXRyeUVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3JVdGlscy50aHJvd0Vycm9yQW5kQ2xlYXJUZW1wQ2FjaGUodGhpcy5jYWNoZVN0b3JhZ2UsIENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVUZWxlbWV0cnlDb25maWdFcnJvcihjb25maWcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgdmFsaWQgdGhlbiBjb25zdHJ1Y3RcclxuICAgICAgICBjb25zdCB0ZWxlbWV0cnlQbGF0Zm9ybTogVGVsZW1ldHJ5UGxhdGZvcm0gPSB7XHJcbiAgICAgICAgICAgIHNkazogXCJtc2FsLmpzXCIsIC8vIFRPRE8gbmVlZCB0byBiZSBhYmxlIHRvIG92ZXJyaWRlIHRoaXMgZm9yIGFuZ3VsYXIsIHJlYWN0LCBldGNcclxuICAgICAgICAgICAgc2RrVmVyc2lvbjogbGlicmFyeVZlcnNpb24oKSxcclxuICAgICAgICAgICAgYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICBhcHBsaWNhdGlvblZlcnNpb25cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHRlbGVtZXRyeU1hbmFnZXJDb25maWc6IFRlbGVtZXRyeUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgcGxhdGZvcm06IHRlbGVtZXRyeVBsYXRmb3JtLFxyXG4gICAgICAgICAgICBjbGllbnRJZDogY2xpZW50SWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgVGVsZW1ldHJ5TWFuYWdlcih0ZWxlbWV0cnlNYW5hZ2VyQ29uZmlnLCB0ZWxlbWV0cnlFbWl0dGVyKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFNjb3BlU2V0IHtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZXJlIGFyZSBkdXAgc2NvcGVzIGluIGEgZ2l2ZW4gcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhY2hlZFNjb3Blc1xuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKi9cbiAgICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgaW50ZXJzZWN0aW5nIHNjb3BlcyBpc24ndCBhIGdyZWF0IG5hbWUgZm9yIGR1cGxpY2F0ZSBjaGVja2VyXG4gICAgc3RhdGljIGlzSW50ZXJzZWN0aW5nU2NvcGVzKGNhY2hlZFNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgICAgIGNhY2hlZFNjb3BlcyA9IHRoaXMuY29udmVydFRvTG93ZXJDYXNlKGNhY2hlZFNjb3Blcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NvcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkU2NvcGVzLmluZGV4T2Yoc2NvcGVzW2ldLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBnaXZlbiBzY29wZSBpcyBwcmVzZW50IGluIHRoZSByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FjaGVkU2NvcGVzXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIHN0YXRpYyBjb250YWluc1Njb3BlKGNhY2hlZFNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgICAgIGNhY2hlZFNjb3BlcyA9IHRoaXMuY29udmVydFRvTG93ZXJDYXNlKGNhY2hlZFNjb3Blcyk7XG4gICAgICAgIHJldHVybiBzY29wZXMuZXZlcnkoKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IGNhY2hlZFNjb3Blcy5pbmRleE9mKHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkgPj0gMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG9Mb3dlclxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIC8vIFRPRE86IFJlbmFtZSB0aGlzLCB0b28gZ2VuZXJpYyBuYW1lIGZvciBhIGZ1bmN0aW9uIHRoYXQgb25seSBkZWFscyB3aXRoIHNjb3Blc1xuICAgIHN0YXRpYyBjb252ZXJ0VG9Mb3dlckNhc2Uoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBzY29wZXMubWFwKHNjb3BlID0+IHNjb3BlLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlbW92ZSBvbmUgZWxlbWVudCBmcm9tIGEgc2NvcGUgYXJyYXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKiBAcGFyYW0gc2NvcGVcbiAgICAgKi9cbiAgICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgdG9vIGdlbmVyaWMgbmFtZSBmb3IgYSBmdW5jdGlvbiB0aGF0IG9ubHkgZGVhbHMgd2l0aCBzY29wZXNcbiAgICBzdGF0aWMgcmVtb3ZlRWxlbWVudChzY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHNjb3Blcy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHNjb3BlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSB0aGUgc2NvcGVzIGludG8gYSBmb3JtYXR0ZWQgc2NvcGVMaXN0XG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZVNjb3BlKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzY29wZUxpc3Q6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIGlmIChzY29wZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzY29wZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzY29wZUxpc3QgKz0gKGkgIT09IHNjb3Blcy5sZW5ndGggLSAxKSA/IHNjb3Blc1tpXSArIFwiIFwiIDogc2NvcGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNjb3BlTGlzdDtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuL01zYWxUeXBlc1wiO1xuXG4vKipcbiAqIEBsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcbiAqL1xuZXhwb3J0IHR5cGUgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0ge1xuICAgIHNjb3Blcz86IEFycmF5PHN0cmluZz47XG4gICAgZXh0cmFTY29wZXNUb0NvbnNlbnQ/OiBBcnJheTxzdHJpbmc+O1xuICAgIHByb21wdD86IHN0cmluZztcbiAgICBleHRyYVF1ZXJ5UGFyYW1ldGVycz86IFN0cmluZ0RpY3Q7XG4gICAgY2xhaW1zUmVxdWVzdD86IHN0cmluZztcbiAgICBhdXRob3JpdHk/OiBzdHJpbmc7XG4gICAgc3RhdGU/OiBzdHJpbmc7XG4gICAgY29ycmVsYXRpb25JZD86IHN0cmluZztcbiAgICBhY2NvdW50PzogQWNjb3VudDtcbiAgICBzaWQ/OiBzdHJpbmc7XG4gICAgbG9naW5IaW50Pzogc3RyaW5nO1xuICAgIGZvcmNlUmVmcmVzaD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDbGFpbXNSZXF1ZXN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycykge1xuICAgIGlmICghcmVxdWVzdC5jbGFpbXNSZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGNsYWltcztcbiAgICB0cnkge1xuICAgICAgICBjbGFpbXMgPSBKU09OLnBhcnNlKHJlcXVlc3QuY2xhaW1zUmVxdWVzdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihlKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBNb3JlIHZhbGlkYXRpb24gd2lsbCBiZSBhZGRlZCB3aGVuIHRoZSBzZXJ2ZXIgdGVhbSB0ZWxscyB1cyBob3cgdGhleSBoYXZlIGFjdHVhbGx5IGltcGxlbWVudGVkIGNsYWltc1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vU3RyaW5nVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2tlblV0aWxzIHtcblxuICAgIC8qKlxuICAgICAqIGRlY29kZSBhIEpXVFxuICAgICAqXG4gICAgICogQHBhcmFtIGp3dFRva2VuXG4gICAgICovXG4gICAgc3RhdGljIGRlY29kZUp3dChqd3RUb2tlbjogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoand0VG9rZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZFRva2VuUGFydHNSZWdleCA9IC9eKFteXFwuXFxzXSopXFwuKFteXFwuXFxzXSspXFwuKFteXFwuXFxzXSopJC87XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBpZFRva2VuUGFydHNSZWdleC5leGVjKGp3dFRva2VuKTtcbiAgICAgICAgaWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgLy8gdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLndhcm4oXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gaXMgbm90IHBhcnNlYWJsZS5cIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjcmFja2VkVG9rZW4gPSB7XG4gICAgICAgICAgICBoZWFkZXI6IG1hdGNoZXNbMV0sXG4gICAgICAgICAgICBKV1NQYXlsb2FkOiBtYXRjaGVzWzJdLFxuICAgICAgICAgICAgSldTU2lnOiBtYXRjaGVzWzNdXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjcmFja2VkVG9rZW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBJZFRva2VuIGJ5IGRlY29kaW5nIHRoZSBSQVdJZFRva2VuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW5jb2RlZElkVG9rZW5cbiAgICAgKi9cbiAgICBzdGF0aWMgZXh0cmFjdElkVG9rZW4oZW5jb2RlZElkVG9rZW46IHN0cmluZyk6IGFueSB7XG4gICAgLy8gaWQgdG9rZW4gd2lsbCBiZSBkZWNvZGVkIHRvIGdldCB0aGUgdXNlcm5hbWVcbiAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gdGhpcy5kZWNvZGVKd3QoZW5jb2RlZElkVG9rZW4pO1xuICAgICAgICBpZiAoIWRlY29kZWRUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NElkVG9rZW4gPSBkZWNvZGVkVG9rZW4uSldTUGF5bG9hZDtcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NERlY29kZWQgPSBDcnlwdG9VdGlscy5iYXNlNjREZWNvZGUoYmFzZTY0SWRUb2tlbik7XG4gICAgICAgICAgICBpZiAoIWJhc2U2NERlY29kZWQpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9yZXF1ZXN0Q29udGV4dC5sb2dnZXIuaW5mbyhcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBjb3VsZCBub3QgYmUgYmFzZTY0IHVybCBzYWZlIGRlY29kZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRUNNQSBzY3JpcHQgaGFzIEpTT04gYnVpbHQtaW4gc3VwcG9ydFxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0RGVjb2RlZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLmVycm9yKFwiVGhlIHJldHVybmVkIGlkX3Rva2VuIGNvdWxkIG5vdCBiZSBkZWNvZGVkXCIgKyBlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENsaWVudEluZm8gfSBmcm9tIFwiLi9DbGllbnRJbmZvXCI7XG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4vSWRUb2tlblwiO1xuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi91dGlscy9DcnlwdG9VdGlsc1wiO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuL01zYWxUeXBlc1wiO1xuXG4vKipcbiAqIGFjY291bnRJZGVudGlmaWVyICAgICAgIGNvbWJpbmF0aW9uIG9mIGlkVG9rZW4udWlkIGFuZCBpZFRva2VuLnV0aWRcbiAqIGhvbWVBY2NvdW50SWRlbnRpZmllciAgIGNvbWJpbmF0aW9uIG9mIGNsaWVudEluZm8udWlkIGFuZCBjbGllbnRJbmZvLnV0aWRcbiAqIHVzZXJOYW1lICAgICAgICAgICAgICAgIGlkVG9rZW4ucHJlZmVycmVkX3VzZXJuYW1lXG4gKiBuYW1lICAgICAgICAgICAgICAgICAgICBpZFRva2VuLm5hbWVcbiAqIGlkVG9rZW4gICAgICAgICAgICAgICAgIGlkVG9rZW5cbiAqIHNpZCAgICAgICAgICAgICAgICAgICAgIGlkVG9rZW4uc2lkIC0gc2Vzc2lvbiBpZGVudGlmaWVyXG4gKiBlbnZpcm9ubWVudCAgICAgICAgICAgICBpZHRva2VuLmlzc3VlciAodGhlIGF1dGhvcml0eSB0aGF0IGlzc3VlcyB0aGUgdG9rZW4pXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2NvdW50IHtcblxuICAgIGFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgdXNlck5hbWU6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaWRUb2tlbjogU3RyaW5nRGljdDsgLy8gd2lsbCBiZSBkZXByZWNhdGVkIHNvb25cbiAgICBpZFRva2VuQ2xhaW1zOiBTdHJpbmdEaWN0O1xuICAgIHNpZDogc3RyaW5nO1xuICAgIGVudmlyb25tZW50OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIEFjY291bnQgT2JqZWN0XG4gICAgICogQHByYXJhbSBhY2NvdW50SWRlbnRpZmllclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkZW50aWZpZXJcbiAgICAgKiBAcGFyYW0gdXNlck5hbWVcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBpZFRva2VuXG4gICAgICogQHBhcmFtIHNpZFxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nLCB1c2VyTmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGlkVG9rZW5DbGFpbXM6IFN0cmluZ0RpY3QsIHNpZDogc3RyaW5nLCAgZW52aXJvbm1lbnQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmFjY291bnRJZGVudGlmaWVyID0gYWNjb3VudElkZW50aWZpZXI7XG4gICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIC8vIHdpbGwgYmUgZGVwcmVjYXRlZCBzb29uXG4gICAgICAgIHRoaXMuaWRUb2tlbiA9IGlkVG9rZW5DbGFpbXM7XG4gICAgICAgIHRoaXMuaWRUb2tlbkNsYWltcyA9IGlkVG9rZW5DbGFpbXM7XG4gICAgICAgIHRoaXMuc2lkID0gc2lkO1xuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBwYXJhbSBpZFRva2VuXG4gICAgICogQHBhcmFtIGNsaWVudEluZm9cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlQWNjb3VudChpZFRva2VuOiBJZFRva2VuLCBjbGllbnRJbmZvOiBDbGllbnRJbmZvKTogQWNjb3VudCB7XG5cbiAgICAgICAgLy8gY3JlYXRlIGFjY291bnRJZGVudGlmaWVyXG4gICAgICAgIGNvbnN0IGFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcgPSBpZFRva2VuLm9iamVjdElkIHx8ICBpZFRva2VuLnN1YmplY3Q7XG5cbiAgICAgICAgLy8gY3JlYXRlIGhvbWVBY2NvdW50SWRlbnRpZmllclxuICAgICAgICBjb25zdCB1aWQ6IHN0cmluZyA9IGNsaWVudEluZm8gPyBjbGllbnRJbmZvLnVpZCA6IFwiXCI7XG4gICAgICAgIGNvbnN0IHV0aWQ6IHN0cmluZyA9IGNsaWVudEluZm8gPyBjbGllbnRJbmZvLnV0aWQgOiBcIlwiO1xuXG4gICAgICAgIGxldCBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHVpZCkgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkodXRpZCkpIHtcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWRlbnRpZmllciA9IENyeXB0b1V0aWxzLmJhc2U2NEVuY29kZSh1aWQpICsgXCIuXCIgKyBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodXRpZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBBY2NvdW50KGFjY291bnRJZGVudGlmaWVyLCBob21lQWNjb3VudElkZW50aWZpZXIsIGlkVG9rZW4ucHJlZmVycmVkTmFtZSwgaWRUb2tlbi5uYW1lLCBpZFRva2VuLmNsYWltcywgaWRUb2tlbi5zaWQsIGlkVG9rZW4uaXNzdWVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVdGlscyBmdW5jdGlvbiB0byBjb21wYXJlIHR3byBBY2NvdW50IG9iamVjdHMgLSB1c2VkIHRvIGNoZWNrIGlmIHRoZSBzYW1lIHVzZXIgYWNjb3VudCBpcyBsb2dnZWQgaW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhMTogQWNjb3VudCBvYmplY3RcbiAgICAgKiBAcGFyYW0gYTI6IEFjY291bnQgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVBY2NvdW50cyhhMTogQWNjb3VudCwgYTI6IEFjY291bnQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFhMSB8fCAhYTIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYTEuaG9tZUFjY291bnRJZGVudGlmaWVyICYmIGEyLmhvbWVBY2NvdW50SWRlbnRpZmllcikge1xuICAgICAgICAgICAgaWYgKGExLmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gYTIuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBdXRob3JpdHksIEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcbmltcG9ydCB7IFhockNsaWVudCB9IGZyb20gXCIuLi9YSFJDbGllbnRcIjtcbmltcG9ydCB7IEFBRFRydXN0ZWRIb3N0TGlzdCB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBBYWRBdXRob3JpdHkgZXh0ZW5kcyBBdXRob3JpdHkge1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnQ6IHN0cmluZyA9IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vbi9kaXNjb3ZlcnkvaW5zdGFuY2VcIjtcblxuICAgIHByaXZhdGUgZ2V0IEFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke0FhZEF1dGhvcml0eS5BYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50fT9hcGktdmVyc2lvbj0xLjAmYXV0aG9yaXphdGlvbl9lbmRwb2ludD0ke3RoaXMuQ2Fub25pY2FsQXV0aG9yaXR5fW9hdXRoMi92Mi4wL2F1dGhvcml6ZWA7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihhdXRob3JpdHksIHZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IEF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZSB7XG4gICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkFhZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgT0lEQyBlbmRwb2ludFxuICAgICAqIE9ubHkgcmVzcG9uZHMgd2l0aCB0aGUgZW5kcG9pbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgR2V0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50QXN5bmMoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKCF0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQgfHwgdGhpcy5Jc0luVHJ1c3RlZEhvc3RMaXN0KHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIGN1c3RvbSBkb21haW5zIGluIEFBRCB3aGVyZSB3ZSBxdWVyeSB0aGUgc2VydmljZSBmb3IgdGhlIEluc3RhbmNlIGRpc2NvdmVyeVxuICAgICAgICBjb25zdCBjbGllbnQ6IFhockNsaWVudCA9IG5ldyBYaHJDbGllbnQoKTtcblxuICAgICAgICByZXR1cm4gY2xpZW50LnNlbmRSZXF1ZXN0QXN5bmModGhpcy5BYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50VXJsLCBcIkdFVFwiLCB0cnVlKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRlbmFudF9kaXNjb3ZlcnlfZW5kcG9pbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBob3N0IGlzIGluIGEgbGlzdCBvZiB0cnVzdGVkIGhvc3RzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFRoZSBob3N0IHRvIGxvb2sgdXBcbiAgICAgKi9cbiAgICBwdWJsaWMgSXNJblRydXN0ZWRIb3N0TGlzdChob3N0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEFBRFRydXN0ZWRIb3N0TGlzdFtob3N0LnRvTG93ZXJDYXNlKCldO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFhIUiBjbGllbnQgZm9yIEpTT04gZW5kcG9pbnRzXG4gKiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9hc3luYy1wcm9taXNlXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBYaHJDbGllbnQge1xuICAgIHB1YmxpYyBzZW5kUmVxdWVzdEFzeW5jKHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgZW5hYmxlQ2FjaGluZz86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCAvKiBhc3luYzogKi8gdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZW5hYmxlQ2FjaGluZykge1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICogVE9ETzogKHNoaXZiKSBlbnN1cmUgdGhhdCB0aGlzIGNhbiBiZSBjYWNoZWRcbiAgICAgICAgICAgICAgICAgKiB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNhY2hlLUNvbnRyb2xcIiwgXCJQdWJsaWNcIik7XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDIwMCB8fCB4aHIuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5oYW5kbGVFcnJvcih4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBqc29uUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLmhhbmRsZUVycm9yKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKGpzb25SZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IChldikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCh4aHIuc3RhdHVzKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJub3QgaW1wbGVtZW50ZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhbmRsZUVycm9yKHJlc3BvbnNlVGV4dDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgbGV0IGpzb25SZXNwb25zZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGpzb25SZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGlmIChqc29uUmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvblJlc3BvbnNlLmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZXNwb25zZVRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVRleHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQWFkQXV0aG9yaXR5IH0gZnJvbSBcIi4vQWFkQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVXJsVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBCMmNBdXRob3JpdHkgZXh0ZW5kcyBBYWRBdXRob3JpdHkge1xuICAgIHB1YmxpYyBzdGF0aWMgQjJDX1BSRUZJWDogU3RyaW5nID0gXCJ0ZnBcIjtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKGF1dGhvcml0eSwgdmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgICBjb25zdCB1cmxDb21wb25lbnRzID0gVXJsVXRpbHMuR2V0VXJsQ29tcG9uZW50cyhhdXRob3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzO1xuICAgICAgICBpZiAocGF0aFNlZ21lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYjJjQXV0aG9yaXR5VXJpSW52YWxpZFBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eSA9IGBodHRwczovLyR7dXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnR9LyR7cGF0aFNlZ21lbnRzWzBdfS8ke3BhdGhTZWdtZW50c1sxXX0vJHtwYXRoU2VnbWVudHNbMl19L2A7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xuICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5CMkM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgVGVuYW50RGlzY292ZXJ5RW5kcG9pbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgR2V0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50QXN5bmMoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKCF0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQgfHwgdGhpcy5Jc0luVHJ1c3RlZEhvc3RMaXN0KHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS51bnN1cHBvcnRlZEF1dGhvcml0eVZhbGlkYXRpb247XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi91dGlscy9VcmxVdGlsc1wiO1xuaW1wb3J0IHsgVGVsZW1ldHJ5RW1pdHRlciB9IGZyb20gXCIuL3RlbGVtZXRyeS9UZWxlbWV0cnlUeXBlc1wiO1xuXG4vKipcbiAqIENhY2hlIGxvY2F0aW9uIG9wdGlvbnMgc3VwcG9ydGVkIGJ5IE1TQUwgYXJlOlxuICpcbiAqIC0gbG9jYWwgc3RvcmFnZTogTVNBTCB1c2VzIGJyb3dzZXJzIGxvY2FsIHN0b3JhZ2UgdG8gc3RvcmUgaXRzIGNhY2hlXG4gKiAtIHNlc3Npb24gc3RvcmFnZTogTVNBTCB1c2VzIHRoZSBicm93c2VycyBzZXNzaW9uIHN0b3JhZ2UgdG8gc3RvcmUgaXRzIGNhY2hlXG4gKi9cbmV4cG9ydCB0eXBlIENhY2hlTG9jYXRpb24gPSBcImxvY2FsU3RvcmFnZVwiIHwgXCJzZXNzaW9uU3RvcmFnZVwiO1xuXG4vKipcbiAqIERlZmF1bHRzIGZvciB0aGUgQ29uZmlndXJhdGlvbiBPcHRpb25zXG4gKi9cbmNvbnN0IEZSQU1FX1RJTUVPVVQgPSA2MDAwO1xuY29uc3QgT0ZGU0VUID0gMzAwO1xuY29uc3QgTkFWSUdBVEVfRlJBTUVfV0FJVCA9IDUwMDtcblxuLyoqXG4gKiBAdHlwZSBBdXRoT3B0aW9uczogVXNlIHRoaXMgdG8gY29uZmlndXJlIHRoZSBhdXRoIG9wdGlvbnMgaW4gdGhlIENvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKlxuICogIC0gY2xpZW50SWQgICAgICAgICAgICAgICAgICAgIC0gQ2xpZW50IElEIG9mIHlvdXIgYXBwIHJlZ2lzdGVyZWQgd2l0aCBvdXIgQXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbCA6IGh0dHBzOi8vcG9ydGFsLmF6dXJlLmNvbS8jYmxhZGUvTWljcm9zb2Z0X0FBRF9JQU0vQWN0aXZlRGlyZWN0b3J5TWVudUJsYWRlL1JlZ2lzdGVyZWRBcHBzUHJldmlldyBpbiBNaWNyb3NvZnQgSWRlbnRpdHkgUGxhdGZvcm1cbiAqICAtIGF1dGhvcml0eSAgICAgICAgICAgICAgICAgICAtIFlvdSBjYW4gY29uZmlndXJlIGEgc3BlY2lmaWMgYXV0aG9yaXR5LCBkZWZhdWx0cyB0byBcIiBcIiBvciBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxuICogIC0gdmFsaWRhdGVBdXRob3JpdHkgICAgICAgICAgIC0gVXNlZCB0byB0dXJuIGF1dGhvcml0eSB2YWxpZGF0aW9uIG9uL29mZi4gV2hlbiBzZXQgdG8gdHJ1ZSAoZGVmYXVsdCksIE1TQUwgd2lsbCBjb21wYXJlIHRoZSBhcHBsaWNhdGlvbidzIGF1dGhvcml0eSBhZ2FpbnN0IHdlbGwta25vd24gVVJMcyB0ZW1wbGF0ZXMgcmVwcmVzZW50aW5nIHdlbGwtZm9ybWVkIGF1dGhvcml0aWVzLiBJdCBpcyB1c2VmdWwgd2hlbiB0aGUgYXV0aG9yaXR5IGlzIG9idGFpbmVkIGF0IHJ1biB0aW1lIHRvIHByZXZlbnQgTVNBTCBmcm9tIGRpc3BsYXlpbmcgYXV0aGVudGljYXRpb24gcHJvbXB0cyBmcm9tIG1hbGljaW91cyBwYWdlcy5cbiAqICAtIHJlZGlyZWN0VXJpICAgICAgICAgICAgICAgICAtIFRoZSByZWRpcmVjdCBVUkkgb2YgdGhlIGFwcGxpY2F0aW9uLCB0aGlzIHNob3VsZCBiZSBzYW1lIGFzIHRoZSB2YWx1ZSBpbiB0aGUgYXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbC5EZWZhdWx0cyB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxuICogIC0gcG9zdExvZ291dFJlZGlyZWN0VXJpICAgICAgIC0gVXNlZCB0byByZWRpcmVjdCB0aGUgdXNlciB0byB0aGlzIGxvY2F0aW9uIGFmdGVyIGxvZ291dC4gRGVmYXVsdHMgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cbiAqICAtIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmwgICAtIFVzZWQgdG8gdHVybiBvZmYgZGVmYXVsdCBuYXZpZ2F0aW9uIHRvIHN0YXJ0IHBhZ2UgYWZ0ZXIgbG9naW4uIERlZmF1bHQgaXMgdHJ1ZS4gVGhpcyBpcyB1c2VkIG9ubHkgZm9yIHJlZGlyZWN0IGZsb3dzLlxuICovXG5leHBvcnQgdHlwZSBBdXRoT3B0aW9ucyA9IHtcbiAgICBjbGllbnRJZDogc3RyaW5nO1xuICAgIGF1dGhvcml0eT86IHN0cmluZztcbiAgICB2YWxpZGF0ZUF1dGhvcml0eT86IGJvb2xlYW47XG4gICAgcmVkaXJlY3RVcmk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcbiAgICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcbiAgICBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogVXNlIHRoaXMgdG8gY29uZmlndXJlIHRoZSBiZWxvdyBjYWNoZSBjb25maWd1cmF0aW9uIG9wdGlvbnM6XG4gKlxuICogLSBjYWNoZUxvY2F0aW9uICAgICAgICAgICAgLSBVc2VkIHRvIHNwZWNpZnkgdGhlIGNhY2hlTG9jYXRpb24gdXNlciB3YW50cyB0byBzZXQuIFZhbGlkIHZhbHVlcyBhcmUgXCJsb2NhbFN0b3JhZ2VcIiBhbmQgXCJzZXNzaW9uU3RvcmFnZVwiXG4gKiAtIHN0b3JlQXV0aFN0YXRlSW5Db29raWUgICAtIElmIHNldCwgTVNBTCBzdG9yZSdzIHRoZSBhdXRoIHJlcXVlc3Qgc3RhdGUgcmVxdWlyZWQgZm9yIHZhbGlkYXRpb24gb2YgdGhlIGF1dGggZmxvd3MgaW4gdGhlIGJyb3dzZXIgY29va2llcy4gQnkgZGVmYXVsdCB0aGlzIGZsYWcgaXMgc2V0IHRvIGZhbHNlLlxuICovXG5leHBvcnQgdHlwZSBDYWNoZU9wdGlvbnMgPSB7XG4gICAgY2FjaGVMb2NhdGlvbj86IENhY2hlTG9jYXRpb247XG4gICAgc3RvcmVBdXRoU3RhdGVJbkNvb2tpZT86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFRlbGVtZXRyeSBDb25maWcgT3B0aW9uc1xuICpcbiAqIC0gYXBwbGljYXRpb25OYW1lICAgICAgICAgICAgICAtIE5hbWUgb2YgdGhlIGNvbnN1bWluZyBhcHBzIGFwcGxpY2F0aW9uXG4gKiAtIGFwcGxpY2F0aW9uVmVyc2lvbiAgICAgICAgICAgLSBWZXJpc29uIG9mIHRoZSBjb25zdW1pbmcgYXBwbGljYXRpb25cbiAqIC0gdGVsZW1ldHJ5RW1pdHRlciAgICAgICAgICAgICAtIEZ1bmN0aW9uIHdoZXJlIHRlbGVtZXRyeSBldmVudHMgYXJlIGZsdXNoZWQgdG9cbiAqL1xuZXhwb3J0IHR5cGUgVGVsZW1ldHJ5T3B0aW9ucyA9IHtcbiAgICBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZztcbiAgICBhcHBsaWNhdGlvblZlcnNpb246IHN0cmluZztcbiAgICB0ZWxlbWV0cnlFbWl0dGVyOiBUZWxlbWV0cnlFbWl0dGVyXG4gICAgLy8gVE9ETywgYWRkIG9ubHlBZGRGYWlsdXJlVGVsZW1ldHJ5IG9wdGlvblxufTtcblxuLyoqXG4gKiBMaWJyYXJ5IFNwZWNpZmljIE9wdGlvbnNcbiAqXG4gKiAtIGxvZ2dlciAgICAgICAgICAgICAgICAgICAgICAgLSBVc2VkIHRvIGluaXRpYWxpemUgdGhlIExvZ2dlciBvYmplY3Q7IFRPRE86IEV4cGFuZCBvbiBsb2dnZXIgZGV0YWlscyBvciBsaW5rIHRvIHRoZSBkb2N1bWVudGF0aW9uIG9uIGxvZ2dlclxuICogLSBsb2FkRnJhbWVUaW1lb3V0ICAgICAgICAgICAgIC0gbWF4aW11bSB0aW1lIHRoZSBsaWJyYXJ5IHNob3VsZCB3YWl0IGZvciBhIGZyYW1lIHRvIGxvYWRcbiAqIC0gdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcyAgICAtIHNldHMgdGhlIHdpbmRvdyBvZiBvZmZzZXQgbmVlZGVkIHRvIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJ5XG4gKiAtIG5hdmlnYXRlRnJhbWVXYWl0ICAgICAgICAgICAgLSBzZXRzIHRoZSB3YWl0IHRpbWUgZm9yIGhpZGRlbiBpRnJhbWUgbmF2aWdhdGlvblxuICovXG5leHBvcnQgdHlwZSBTeXN0ZW1PcHRpb25zID0ge1xuICAgIGxvZ2dlcj86IExvZ2dlcjtcbiAgICBsb2FkRnJhbWVUaW1lb3V0PzogbnVtYmVyO1xuICAgIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM/OiBudW1iZXI7XG4gICAgbmF2aWdhdGVGcmFtZVdhaXQ/OiBudW1iZXI7XG4gICAgdGVsZW1ldHJ5PzogVGVsZW1ldHJ5T3B0aW9uc1xufTtcblxuLyoqXG4gKiBBcHAvRnJhbWV3b3JrIHNwZWNpZmljIGVudmlyb25tZW50IHN1cHBvcnRcbiAqXG4gKiAtIGlzQW5ndWxhciAgICAgICAgICAgICAgICAtIGZsYWcgc2V0IHRvIGRldGVybWluZSBpZiBpdCBpcyBBbmd1bGFyIEZyYW1ld29yay4gTVNBTCB1c2VzIHRoaXMgdG8gYnJvYWRjYXN0IHRva2Vucy4gTW9yZSB0byBjb21lIGhlcmU6IGRldGFuZ2xlIHRoaXMgZGVwZW5kZW5jeSBmcm9tIGNvcmUuXG4gKiAtIHVucHJvdGVjdGVkUmVzb3VyY2VzICAgICAtIEFycmF5IG9mIFVSSSdzIHdoaWNoIGFyZSB1bnByb3RlY3RlZCByZXNvdXJjZXMuIE1TQUwgd2lsbCBub3QgYXR0YWNoIGEgdG9rZW4gdG8gb3V0Z29pbmcgcmVxdWVzdHMgdGhhdCBoYXZlIHRoZXNlIFVSSS4gRGVmYXVsdHMgdG8gJ251bGwnLlxuICogLSBwcm90ZWN0ZWRSZXNvdXJjZU1hcCAgICAgLSBUaGlzIGlzIG1hcHBpbmcgb2YgcmVzb3VyY2VzIHRvIHNjb3BlcyB1c2VkIGJ5IE1TQUwgZm9yIGF1dG9tYXRpY2FsbHkgYXR0YWNoaW5nIGFjY2VzcyB0b2tlbnMgaW4gd2ViIEFQSSBjYWxscy5BIHNpbmdsZSBhY2Nlc3MgdG9rZW4gaXMgb2J0YWluZWQgZm9yIHRoZSByZXNvdXJjZS4gU28geW91IGNhbiBtYXAgYSBzcGVjaWZpYyByZXNvdXJjZSBwYXRoIGFzIGZvbGxvd3M6IHtcImh0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbS92MS4wL21lXCIsIFtcInVzZXIucmVhZFwiXX0sIG9yIHRoZSBhcHAgVVJMIG9mIHRoZSByZXNvdXJjZSBhczoge1wiaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL1wiLCBbXCJ1c2VyLnJlYWRcIiwgXCJtYWlsLnNlbmRcIl19LiBUaGlzIGlzIHJlcXVpcmVkIGZvciBDT1JTIGNhbGxzLlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgRnJhbWV3b3JrT3B0aW9ucyA9IHtcbiAgICBpc0FuZ3VsYXI/OiBib29sZWFuO1xuICAgIHVucHJvdGVjdGVkUmVzb3VyY2VzPzogQXJyYXk8c3RyaW5nPjtcbiAgICBwcm90ZWN0ZWRSZXNvdXJjZU1hcD86IE1hcDxzdHJpbmcsIEFycmF5PHN0cmluZz4+O1xufTtcblxuLyoqXG4gKiBPcHRpb25zIHRvIHNwZWNpZnkgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIGVtYmVkZGVkIChpZnJhbWVkKSBhcHBzIGFuZCB0aGUgVG9wIEZyYW1lXG4gKlxuICogLSB0b3BGcmFtZU9yaWdpbiAgICAgICAgICAgICAtIG9yaWdpbiBjaGVjayB0byByZXN0cmljdCBtZXNzYWdlcyB0byB0aGUgdG9wIGZyYW1lIG9yaWdpbiBvbmx5XG4gKiAtIGNvbnNlbnROZWVkZWQgICAgICAgICAgICAgIC0gaW5kaWNhdGVzIGlmIHRoZSBsaWJyYXJ5IG5lZWRzIGNvbnNlbnQgZnJvbSB0aGUgdG9wZnJhbWUgdG8gZGVsZWdhdGUgaW50ZXJhY3Rpb24gZnJvbSB0aGUgZW1iZWRkZWQgKGlmcmFtZSkgYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IHR5cGUgQnJva2VyT3B0aW9ucyA9IHtcbiAgICB0b3BGcmFtZU9yaWdpbj86IHN0cmluZztcbiAgICBlbWJlZGRlZEZyYW1lT3JpZ2luPzogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBVc2UgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIGNvbmZpZ3VyZSBNU0FMIGFuZCBpbml0aWFsaXplIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbi5cbiAqXG4gKiBUaGlzIG9iamVjdCBhbGxvd3MgeW91IHRvIGNvbmZpZ3VyZSBpbXBvcnRhbnQgZWxlbWVudHMgb2YgTVNBTCBmdW5jdGlvbmFsaXR5OlxuICogLSBhdXRoOiB0aGlzIGlzIHdoZXJlIHlvdSBjb25maWd1cmUgYXV0aCBlbGVtZW50cyBsaWtlIGNsaWVudElELCAgYXV0aG9yaXR5IHVzZWQgZm9yIGF1dGhlbnRpY2F0aW5nIGFnYWluc3QgdGhlIE1pY3Jvc29mdCBJZGVudGl0eSBQbGF0Zm9ybVxuICogLSBjYWNoZTogdGhpcyBpcyB3aGVyZSB5b3UgY29uZmlndXJlIGNhY2hlIGxvY2F0aW9uIGFuZCB3aGV0aGVyIHRvIHN0b3JlIGNhY2hlIGluIGNvb2tpZXNcbiAqIC0gc3lzdGVtOiB0aGlzIGlzIHdoZXJlIHlvdSBjYW4gY29uZmlndXJlIHRoZSBsb2dnZXIsIGZyYW1lIHRpbWVvdXQgZXRjLlxuICogLSBmcmFtZXdvcms6IHRoaXMgaXMgd2hlcmUgeW91IGNhbiBjb25maWd1cmUgdGhlIHJ1bm5pbmcgbW9kZSBvZiBhbmd1bGFyLiBNb3JlIHRvIGNvbWUgaGVyZSBzb29uLlxuICogLSBicm9rZXI6IHRoaXMgaXMgd2hlcmUgeW91IGNhbiBjb25maWd1cmUgYnJva2VyIG9wdGlvbnMgaWYgeW91ciBhcHBsaWNhdGlvbiByZXNpZGVzIGluIGFuIGlmcmFtZSBhbmQgbmVlZHMgdGhlIHRvcGZyYW1lIGZvciBpbnRlcmFjdGlvbiBmbG93cyAocmVkaXJlY3QgQVBJcyBvbmx5KVxuICovXG5leHBvcnQgdHlwZSBDb25maWd1cmF0aW9uID0ge1xuICAgIGF1dGg6IEF1dGhPcHRpb25zLFxuICAgIGNhY2hlPzogQ2FjaGVPcHRpb25zLFxuICAgIHN5c3RlbT86IFN5c3RlbU9wdGlvbnMsXG4gICAgZnJhbWV3b3JrPzogRnJhbWV3b3JrT3B0aW9ucyxcbiAgICBicm9rZXI/OiBCcm9rZXJPcHRpb25zXG59O1xuXG5jb25zdCBERUZBVUxUX0FVVEhfT1BUSU9OUzogQXV0aE9wdGlvbnMgPSB7XG4gICAgY2xpZW50SWQ6IFwiXCIsXG4gICAgYXV0aG9yaXR5OiBudWxsLFxuICAgIHZhbGlkYXRlQXV0aG9yaXR5OiB0cnVlLFxuICAgIHJlZGlyZWN0VXJpOiAoKSA9PiBVcmxVdGlscy5nZXRDdXJyZW50VXJpKCksXG4gICAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiAoKSA9PiBVcmxVdGlscy5nZXRDdXJyZW50VXJpKCksXG4gICAgbmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybDogdHJ1ZVxufTtcblxuY29uc3QgREVGQVVMVF9DQUNIRV9PUFRJT05TOiBDYWNoZU9wdGlvbnMgPSB7XG4gICAgY2FjaGVMb2NhdGlvbjogXCJzZXNzaW9uU3RvcmFnZVwiLFxuICAgIHN0b3JlQXV0aFN0YXRlSW5Db29raWU6IGZhbHNlXG59O1xuXG5jb25zdCBERUZBVUxUX1NZU1RFTV9PUFRJT05TOiBTeXN0ZW1PcHRpb25zID0ge1xuICAgIGxvZ2dlcjogbmV3IExvZ2dlcihudWxsKSxcbiAgICBsb2FkRnJhbWVUaW1lb3V0OiBGUkFNRV9USU1FT1VULFxuICAgIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM6IE9GRlNFVCxcbiAgICBuYXZpZ2F0ZUZyYW1lV2FpdDogTkFWSUdBVEVfRlJBTUVfV0FJVFxufTtcblxuY29uc3QgREVGQVVMVF9GUkFNRVdPUktfT1BUSU9OUzogRnJhbWV3b3JrT3B0aW9ucyA9IHtcbiAgICBpc0FuZ3VsYXI6IGZhbHNlLFxuICAgIHVucHJvdGVjdGVkUmVzb3VyY2VzOiBuZXcgQXJyYXk8c3RyaW5nPigpLFxuICAgIHByb3RlY3RlZFJlc291cmNlTWFwOiBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKVxufTtcblxuY29uc3QgREVGQVVMVF9CUk9LRVJfT1BUSU9OUzogQnJva2VyT3B0aW9ucyA9IHtcbiAgICB0b3BGcmFtZU9yaWdpbjogbnVsbCxcbiAgICBlbWJlZGRlZEZyYW1lT3JpZ2luOiBudWxsLFxufTtcblxuLyoqXG4gKiBNU0FMIGZ1bmN0aW9uIHRoYXQgc2V0cyB0aGUgZGVmYXVsdCBvcHRpb25zIHdoZW4gbm90IGV4cGxpY2l0bHkgY29uZmlndXJlZCBmcm9tIGFwcCBkZXZlbG9wZXJcbiAqXG4gKiBAcGFyYW0gQXV0aE9wdGlvbnNcbiAqIEBwYXJhbSBDYWNoZU9wdGlvbnNcbiAqIEBwYXJhbSBTeXN0ZW1PcHRpb25zXG4gKiBAcGFyYW0gRnJhbWV3b3JrT3B0aW9uc1xuICogQHBhcmFtIEJyb2tlck9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBDb25maWd1cmF0aW9uIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDb25maWd1cmF0aW9uKHsgYXV0aCwgY2FjaGUgPSB7fSwgc3lzdGVtID0ge30sIGZyYW1ld29yayA9IHt9LCBicm9rZXIgPSB7fX06IENvbmZpZ3VyYXRpb24pOiBDb25maWd1cmF0aW9uIHtcbiAgICBjb25zdCBvdmVybGF5ZWRDb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgIGF1dGg6IHsgLi4uREVGQVVMVF9BVVRIX09QVElPTlMsIC4uLmF1dGggfSxcbiAgICAgICAgY2FjaGU6IHsgLi4uREVGQVVMVF9DQUNIRV9PUFRJT05TLCAuLi5jYWNoZSB9LFxuICAgICAgICBzeXN0ZW06IHsgLi4uREVGQVVMVF9TWVNURU1fT1BUSU9OUywgLi4uc3lzdGVtIH0sXG4gICAgICAgIGZyYW1ld29yazogeyAuLi5ERUZBVUxUX0ZSQU1FV09SS19PUFRJT05TLCAuLi5mcmFtZXdvcmsgfSxcbiAgICAgICAgYnJva2VyOiB7IC4uLkRFRkFVTFRfQlJPS0VSX09QVElPTlMsIC4uLmJyb2tlciB9XG4gICAgfTtcbiAgICByZXR1cm4gb3ZlcmxheWVkQ29uZmlnO1xufVxuXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi9TZXJ2ZXJFcnJvclwiO1xuXG5leHBvcnQgY29uc3QgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UgPSB7XG4gICAgaW50ZXJhY3Rpb25SZXF1aXJlZDoge1xuICAgICAgICBjb2RlOiBcImludGVyYWN0aW9uX3JlcXVpcmVkXCJcbiAgICB9LFxuICAgIGNvbnNlbnRSZXF1aXJlZDoge1xuICAgICAgICBjb2RlOiBcImNvbnNlbnRfcmVxdWlyZWRcIlxuICAgIH0sXG4gICAgbG9naW5SZXF1aXJlZDoge1xuICAgICAgICBjb2RlOiBcImxvZ2luX3JlcXVpcmVkXCJcbiAgICB9LFxufTtcblxuLyoqXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGUgdXNlciBpcyByZXF1aXJlZCB0byBwZXJmb3JtIGFuIGludGVyYWN0aXZlIHRva2VuIHJlcXVlc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIGV4dGVuZHMgU2VydmVyRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLnByb3RvdHlwZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yKGVycm9yU3RyaW5nOiBzdHJpbmcpIDogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGludGVyYWN0aW9uUmVxdWlyZWRDb2RlcyA9IFtcbiAgICAgICAgICAgIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmludGVyYWN0aW9uUmVxdWlyZWQuY29kZSxcbiAgICAgICAgICAgIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmNvbnNlbnRSZXF1aXJlZC5jb2RlLFxuICAgICAgICAgICAgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UubG9naW5SZXF1aXJlZC5jb2RlXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIGVycm9yU3RyaW5nICYmIGludGVyYWN0aW9uUmVxdWlyZWRDb2Rlcy5pbmRleE9mKGVycm9yU3RyaW5nKSA+IC0xO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVMb2dpblJlcXVpcmVkQXV0aEVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5sb2dpblJlcXVpcmVkLmNvZGUsIGVycm9yRGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmludGVyYWN0aW9uUmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ29uc2VudFJlcXVpcmVkQXV0aEVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5jb25zZW50UmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi9JZFRva2VuXCI7XG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4vTXNhbFR5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIEF1dGhSZXNwb25zZSA9IHtcbiAgICB1bmlxdWVJZDogc3RyaW5nO1xuICAgIHRlbmFudElkOiBzdHJpbmc7XG4gICAgdG9rZW5UeXBlOiBzdHJpbmc7XG4gICAgaWRUb2tlbjogSWRUb2tlbjtcbiAgICBpZFRva2VuQ2xhaW1zOiBTdHJpbmdEaWN0O1xuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gICAgc2NvcGVzOiBBcnJheTxzdHJpbmc+O1xuICAgIGV4cGlyZXNPbjogRGF0ZTtcbiAgICBhY2NvdW50OiBBY2NvdW50O1xuICAgIGFjY291bnRTdGF0ZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkoc3RhdGU6IHN0cmluZykgOiBBdXRoUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVuaXF1ZUlkOiBcIlwiLFxuICAgICAgICB0ZW5hbnRJZDogXCJcIixcbiAgICAgICAgdG9rZW5UeXBlOiBcIlwiLFxuICAgICAgICBpZFRva2VuOiBudWxsLFxuICAgICAgICBpZFRva2VuQ2xhaW1zOiBudWxsLFxuICAgICAgICBhY2Nlc3NUb2tlbjogXCJcIixcbiAgICAgICAgc2NvcGVzOiBudWxsLFxuICAgICAgICBleHBpcmVzT246IG51bGwsXG4gICAgICAgIGFjY291bnQ6IG51bGwsXG4gICAgICAgIGFjY291bnRTdGF0ZTogc3RhdGVcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgQjJjQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9CMmNBdXRob3JpdHlcIjtcbmltcG9ydCB7IEFBRFRydXN0ZWRIb3N0TGlzdCB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcbmltcG9ydCB7IFRFTkFOVF9QTEFDRUhPTERFUiwgRVZFTlRfTkFNRV9QUkVGSVggfSBmcm9tIFwiLi9UZWxlbWV0cnlDb25zdGFudHNcIjtcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL0NyeXB0b1V0aWxzXCI7XG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gXCIuLi91dGlscy9VcmxVdGlsc1wiO1xuXG5leHBvcnQgY29uc3Qgc2NydWJUZW5hbnRGcm9tVXJpID0gKHVyaTogc3RyaW5nKTogU3RyaW5nID0+IHtcblxuICAgIGNvbnN0IHVybCA9IFVybFV0aWxzLkdldFVybENvbXBvbmVudHModXJpKTtcblxuICAgIC8vIHZhbGlkYXRlIHRydXN0ZWQgaG9zdFxuICAgIGlmICghQUFEVHJ1c3RlZEhvc3RMaXN0W3VybC5Ib3N0TmFtZUFuZFBvcnQudG9Mb2NhbGVMb3dlckNhc2UoKV0pIHtcbiAgICAgICAgLy8gU2hvdWxkIHRoaXMgcmV0dXJuIG51bGwgb3Igd2hhdCB3YXMgcGFzc2VkP1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwYXRoUGFyYW1zID0gdXJsLlBhdGhTZWdtZW50cztcblxuICAgIGlmIChwYXRoUGFyYW1zICYmIHBhdGhQYXJhbXMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgY29uc3QgdGVuYW50UG9zaXRpb24gPSBwYXRoUGFyYW1zWzFdID09PSAgQjJjQXV0aG9yaXR5LkIyQ19QUkVGSVggPyAyIDogMTtcbiAgICAgICAgaWYgKHRlbmFudFBvc2l0aW9uIDwgcGF0aFBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhdGhQYXJhbXNbdGVuYW50UG9zaXRpb25dID0gVEVOQU5UX1BMQUNFSE9MREVSO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICBgJHt1cmwuUHJvdG9jb2x9Ly8ke3VybC5Ib3N0TmFtZUFuZFBvcnR9LyR7cGF0aFBhcmFtcy5qb2luKFwiL1wiKX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhc2hQZXJzb25hbElkZW50aWZpZXIgPSAodmFsdWVUb0hhc2g6IHN0cmluZykgPT4ge1xuICAgIC8qXG4gICAgICogVE9ETyBzaGEyNTYgdGhpc1xuICAgICAqIEN1cnJlbnQgdGVzdCBydW5uZXIgaXMgYmVpbmcgZnVubnkgd2l0aCBub2RlIGxpYnMgdGhhdCBhcmUgd2VicGFja2VkIGFueXdheVxuICAgICAqIG5lZWQgYSBkaWZmZXJlbnQgc29sdXRpb25cbiAgICAgKi9cbiAgICByZXR1cm4gQ3J5cHRvVXRpbHMuYmFzZTY0RW5jb2RlKHZhbHVlVG9IYXNoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcmVwZW5kRXZlbnROYW1lUHJlZml4ID0gKHN1ZmZpeDogc3RyaW5nKTogc3RyaW5nID0+IGAke0VWRU5UX05BTUVfUFJFRklYfSR7c3VmZml4IHx8IFwiXCJ9YDtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBQQVlMT0FEIH0gZnJvbSBcIi4vTWVzc2FnZUhlbHBlclwiO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZURpc3BhdGNoZXIge1xuXG4gICAgc3RhdGljIGRpc3BhdGNoTWVzc2FnZSh0YXJnZXQ6IFdpbmRvdywgbWVzc2FnZTogUEFZTE9BRCwgb3JpZ2luQ2hlY2s/OiBzdHJpbmcpIHtcbiAgICAgICAgb3JpZ2luQ2hlY2sgPyB0YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgb3JpZ2luQ2hlY2spOiB0YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgXCIqXCIpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IFVzZXJBZ2VudEFwcGxpY2F0aW9uIH0gZnJvbSBcIi4vVXNlckFnZW50QXBwbGljYXRpb25cIjtcbmV4cG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlclwiO1xuZXhwb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmV4cG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XG5leHBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcbmV4cG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcbmV4cG9ydCB7IENhY2hlUmVzdWx0IH0gZnJvbSBcIi4vVXNlckFnZW50QXBwbGljYXRpb25cIjtcbmV4cG9ydCB7IENhY2hlTG9jYXRpb24sIENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XG5leHBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcbmV4cG9ydCB7IEF1dGhSZXNwb25zZSB9IGZyb20gXCIuL0F1dGhSZXNwb25zZVwiO1xuXG4vLyBFcnJvcnNcbmV4cG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0F1dGhFcnJvclwiO1xuZXhwb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XG5leHBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL2Vycm9yL1NlcnZlckVycm9yXCI7XG5leHBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbmV4cG9ydCB7IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5LZXkge1xuXG4gICAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gICAgY2xpZW50SWQ6IHN0cmluZztcbiAgICBzY29wZXM6IHN0cmluZztcbiAgICBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBzY29wZXM6IHN0cmluZywgdWlkOiBzdHJpbmcsIHV0aWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmF1dGhvcml0eSA9IFVybFV0aWxzLkNhbm9uaWNhbGl6ZVVyaShhdXRob3JpdHkpO1xuICAgICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgICAgIHRoaXMuc2NvcGVzID0gc2NvcGVzO1xuICAgICAgICB0aGlzLmhvbWVBY2NvdW50SWRlbnRpZmllciA9IENyeXB0b1V0aWxzLmJhc2U2NEVuY29kZSh1aWQpICsgXCIuXCIgKyBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodXRpZCk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5WYWx1ZSB7XG5cbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICAgIGlkVG9rZW46IHN0cmluZztcbiAgICBleHBpcmVzSW46IHN0cmluZztcbiAgICBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIGlkVG9rZW46IHN0cmluZywgZXhwaXJlc0luOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5pZFRva2VuID0gaWRUb2tlbjtcbiAgICAgICAgdGhpcy5leHBpcmVzSW4gPSBleHBpcmVzSW47XG4gICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL3V0aWxzL0NyeXB0b1V0aWxzXCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIHZhbGlkYXRlQ2xhaW1zUmVxdWVzdCB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuL01zYWxUeXBlc1wiO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCB7IFNTT1R5cGVzLCBDb25zdGFudHMsIFByb21wdFN0YXRlLCBCbGFja2xpc3RlZEVRUGFyYW1zLCBsaWJyYXJ5VmVyc2lvbiB9IGZyb20gXCIuL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5cbi8qKlxuICogTm9uY2U6IE9JREMgTm9uY2UgZGVmaW5pdGlvbjogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjSURUb2tlblxuICogU3RhdGU6IE9BdXRoIFNwZWM6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tMTAuMTJcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIHtcblxuICAgIGF1dGhvcml0eUluc3RhbmNlOiBBdXRob3JpdHk7XG4gICAgY2xpZW50SWQ6IHN0cmluZztcbiAgICBzY29wZXM6IEFycmF5PHN0cmluZz47XG5cbiAgICBub25jZTogc3RyaW5nO1xuICAgIHN0YXRlOiBzdHJpbmc7XG5cbiAgICAvLyB0ZWxlbWV0cnkgaW5mb3JtYXRpb25cbiAgICB4Q2xpZW50VmVyOiBzdHJpbmc7XG4gICAgeENsaWVudFNrdTogc3RyaW5nO1xuICAgIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcblxuICAgIHJlc3BvbnNlVHlwZTogc3RyaW5nO1xuICAgIHJlZGlyZWN0VXJpOiBzdHJpbmc7XG5cbiAgICBwcm9tcHRWYWx1ZTogc3RyaW5nO1xuICAgIGNsYWltc1ZhbHVlOiBzdHJpbmc7XG5cbiAgICBxdWVyeVBhcmFtZXRlcnM6IHN0cmluZztcbiAgICBleHRyYVF1ZXJ5UGFyYW1ldGVyczogc3RyaW5nO1xuXG4gICAgcHVibGljIGdldCBhdXRob3JpdHkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPyB0aGlzLmF1dGhvcml0eUluc3RhbmNlLkNhbm9uaWNhbEF1dGhvcml0eSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XG4gICAgICogQHBhcmFtIGNsaWVudElkXG4gICAgICogQHBhcmFtIHNjb3BlXG4gICAgICogQHBhcmFtIHJlc3BvbnNlVHlwZVxuICAgICAqIEBwYXJhbSByZWRpcmVjdFVyaVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChhdXRob3JpdHk6IEF1dGhvcml0eSwgY2xpZW50SWQ6IHN0cmluZywgc2NvcGU6IEFycmF5PHN0cmluZz4sIHJlc3BvbnNlVHlwZTogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPSBhdXRob3JpdHk7XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgICAgaWYgKCFzY29wZSkge1xuICAgICAgICAgICAgdGhpcy5zY29wZXMgPSBbY2xpZW50SWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29wZXMgPSBbIC4uLnNjb3BlIF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vbmNlID0gQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGUgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkoc3RhdGUpID8gIENyeXB0b1V0aWxzLmNyZWF0ZU5ld0d1aWQoKSArIFwifFwiICsgc3RhdGUgICA6IENyeXB0b1V0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcblxuICAgICAgICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byB1c2VyIHBhc3NlZCB2cyBnZW5lcmF0ZWQgd2l0aCB0aGUgbmV3IFBSXG4gICAgICAgIHRoaXMuY29ycmVsYXRpb25JZCA9IENyeXB0b1V0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcblxuICAgICAgICAvLyB0ZWxlbWV0cnkgaW5mb3JtYXRpb25cbiAgICAgICAgdGhpcy54Q2xpZW50U2t1ID0gXCJNU0FMLkpTXCI7XG4gICAgICAgIHRoaXMueENsaWVudFZlciA9IGxpYnJhcnlWZXJzaW9uKCk7XG5cbiAgICAgICAgdGhpcy5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7XG4gICAgICAgIHRoaXMucmVkaXJlY3RVcmkgPSByZWRpcmVjdFVyaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogVXRpbGl0eSB0byBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgYW5kIEV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIFNlcnZlclJlcXVlc3RQYXJhbWVyZXJzXG4gICAgICogQHBhcmFtIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0XG4gICAgICovXG4gICAgcG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50OiBBY2NvdW50LCByZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIGFkYWxJZFRva2VuT2JqZWN0PzogYW55KTogdm9pZCB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtZXRlcnM6IFN0cmluZ0RpY3QgPSB7fTtcblxuICAgICAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gYWRkIHRoZSBwcm9tcHQgcGFyYW1ldGVyIHRvIHNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIGlmIHBhc3NlZFxuICAgICAgICAgICAgaWYgKHJlcXVlc3QucHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVByb21wdFBhcmFtZXRlcihyZXF1ZXN0LnByb21wdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRWYWx1ZSA9IHJlcXVlc3QucHJvbXB0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgY2xhaW1zIGNoYWxsZW5nZSB0byBzZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyBpZiBwYXNzZWRcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmNsYWltc1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUNsYWltc1JlcXVlc3QocmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFpbXNWYWx1ZSA9IHJlcXVlc3QuY2xhaW1zUmVxdWVzdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhlIGRldmVsb3BlciBwcm92aWRlcyBvbmUgb2YgdGhlc2UsIGdpdmUgcHJlZmVyZW5jZSB0byBkZXZlbG9wZXIgY2hvaWNlXG4gICAgICAgICAgICBpZiAoU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuaXNTU09QYXJhbShyZXF1ZXN0KSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIocmVxdWVzdCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWRhbElkVG9rZW5PYmplY3QpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIobnVsbCwgYWRhbElkVG9rZW5PYmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICogYWRkcyBzaWQvbG9naW5faGludCBpZiBub3QgcG9wdWxhdGVkOyBwb3B1bGF0ZXMgZG9tYWluX3JlcSwgbG9naW5fcmVxIGFuZCBkb21haW5faGludFxuICAgICAgICAgKiB0aGlzLmxvZ2dlci52ZXJib3NlKFwiQ2FsbGluZyBhZGRIaW50IHBhcmFtZXRlcnNcIik7XG4gICAgICAgICAqL1xuICAgICAgICBxdWVyeVBhcmFtZXRlcnMgPSB0aGlzLmFkZEhpbnRQYXJhbWV0ZXJzKGFjY291bnQsIHF1ZXJ5UGFyYW1ldGVycyk7XG5cbiAgICAgICAgLy8gc2FuaXR5IGNoZWNrIGZvciBkZXZlbG9wZXIgcGFzc2VkIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgICAgIGxldCBlUVBhcmFtczogU3RyaW5nRGljdDtcbiAgICAgICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGVRUGFyYW1zID0gdGhpcy5zYW5pdGl6ZUVRUGFyYW1zKHJlcXVlc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUG9wdWxhdGUgdGhlIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1ldGVycyA9IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLmdlbmVyYXRlUXVlcnlQYXJhbWV0ZXJzU3RyaW5nKHF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMuZXh0cmFRdWVyeVBhcmFtZXRlcnMgPSBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy5nZW5lcmF0ZVF1ZXJ5UGFyYW1ldGVyc1N0cmluZyhlUVBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gI3JlZ2lvbiBRdWVyeVBhcmFtIGhlbHBlcnNcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBVdGlsaXR5IHRvIHRlc3QgaWYgdmFsaWQgcHJvbXB0IHZhbHVlIGlzIHBhc3NlZCBpbiB0aGUgcmVxdWVzdFxuICAgICAqIEBwYXJhbSByZXF1ZXN0XG4gICAgICovXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVByb21wdFBhcmFtZXRlciAocHJvbXB0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKFtQcm9tcHRTdGF0ZS5MT0dJTiwgUHJvbXB0U3RhdGUuU0VMRUNUX0FDQ09VTlQsIFByb21wdFN0YXRlLkNPTlNFTlQsIFByb21wdFN0YXRlLk5PTkVdLmluZGV4T2YocHJvbXB0KSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgZXh0cmFRdWVyeVBhcmFtZXRlcnMgdG8gYmUgc2VudCB0byB0aGUgc2VydmVyIGZvciB0aGUgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXG4gICAgICogaW4gYW55IGxvZ2luKCkgb3IgYWNxdWlyZVRva2VuKCkgY2FsbHNcbiAgICAgKiBAcGFyYW0gaWRUb2tlbk9iamVjdFxuICAgICAqIEBwYXJhbSBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSBzaWRcbiAgICAgKiBAcGFyYW0gbG9naW5IaW50XG4gICAgICovXG4gICAgLy8gVE9ETzogY2hlY2sgaG93IHRoaXMgYmVoYXZlcyB3aGVuIGRvbWFpbl9oaW50IG9ubHkgaXMgc2VudCBpbiBleHRyYXBhcmFtZXRlcnMgYW5kIGlkVG9rZW4gaGFzIG5vIHVwbi5cbiAgICBwcml2YXRlIGNvbnN0cnVjdFVuaWZpZWRDYWNoZVF1ZXJ5UGFyYW1ldGVyKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgaWRUb2tlbk9iamVjdDogYW55KTogU3RyaW5nRGljdCB7XG5cbiAgICAgICAgLy8gcHJlZmVyZW5jZSBvcmRlcjogYWNjb3VudCA+IHNpZCA+IGxvZ2luX2hpbnRcbiAgICAgICAgbGV0IHNzb1R5cGU7XG4gICAgICAgIGxldCBzc29EYXRhO1xuICAgICAgICBsZXQgc2VydmVyUmVxUGFyYW06IFN0cmluZ0RpY3QgPSB7fTtcbiAgICAgICAgLy8gaWYgYWNjb3VudCBpbmZvIGlzIHBhc3NlZCwgYWNjb3VudC5zaWQgPiBhY2NvdW50LmxvZ2luX2hpbnRcbiAgICAgICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmFjY291bnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50O1xuICAgICAgICAgICAgICAgIGlmIChhY2NvdW50LnNpZCkge1xuICAgICAgICAgICAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuU0lEO1xuICAgICAgICAgICAgICAgICAgICBzc29EYXRhID0gYWNjb3VudC5zaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFjY291bnQudXNlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLkxPR0lOX0hJTlQ7XG4gICAgICAgICAgICAgICAgICAgIHNzb0RhdGEgPSBhY2NvdW50LnVzZXJOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNpZCBmcm9tIHJlcXVlc3RcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlcXVlc3Quc2lkKSB7XG4gICAgICAgICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLlNJRDtcbiAgICAgICAgICAgICAgICBzc29EYXRhID0gcmVxdWVzdC5zaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsb2dpbkhpbnQgZnJvbSByZXF1ZXN0XG4gICAgICAgICAgICBlbHNlIGlmIChyZXF1ZXN0LmxvZ2luSGludCkge1xuICAgICAgICAgICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5MT0dJTl9ISU5UO1xuICAgICAgICAgICAgICAgIHNzb0RhdGEgPSByZXF1ZXN0LmxvZ2luSGludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBhZGFsSWRUb2tlbiByZXRyaWV2ZWQgZnJvbSBjYWNoZVxuICAgICAgICBlbHNlIGlmIChpZFRva2VuT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaWRUb2tlbk9iamVjdC5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMudXBuKSkge1xuICAgICAgICAgICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5JRF9UT0tFTjtcbiAgICAgICAgICAgICAgICBzc29EYXRhID0gaWRUb2tlbk9iamVjdC51cG47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcbiAgICAgICAgICAgICAgICBzc29EYXRhID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZlclJlcVBhcmFtID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoc3NvVHlwZSwgc3NvRGF0YSk7XG5cbiAgICAgICAgLy8gYWRkIHRoZSBIb21lQWNjb3VudElkZW50aWZpZXIgaW5mby8gZG9tYWluX2hpbnRcbiAgICAgICAgaWYgKHJlcXVlc3QgJiYgcmVxdWVzdC5hY2NvdW50ICYmIHJlcXVlc3QuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHNlcnZlclJlcVBhcmFtID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuSE9NRUFDQ09VTlRfSUQsIHJlcXVlc3QuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIsIHNlcnZlclJlcVBhcmFtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXJ2ZXJSZXFQYXJhbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBBZGRzIGxvZ2luX2hpbnQgdG8gYXV0aG9yaXphdGlvbiBVUkwgd2hpY2ggaXMgdXNlZCB0byBwcmUtZmlsbCB0aGUgdXNlcm5hbWUgZmllbGQgb2Ygc2lnbiBpbiBwYWdlIGZvciB0aGUgdXNlciBpZiBrbm93biBhaGVhZCBvZiB0aW1lXG4gICAgICogZG9tYWluX2hpbnQgY2FuIGJlIG9uZSBvZiB1c2Vycy9vcmdhbml6YXRpb25zIHdoaWNoIHdoZW4gYWRkZWQgc2tpcHMgdGhlIGVtYWlsIGJhc2VkIGRpc2NvdmVyeSBwcm9jZXNzIG9mIHRoZSB1c2VyXG4gICAgICogZG9tYWluX3JlcSB1dGlkIHJlY2VpdmVkIGFzIHBhcnQgb2YgdGhlIGNsaWVudEluZm9cbiAgICAgKiBsb2dpbl9yZXEgdWlkIHJlY2VpdmVkIGFzIHBhcnQgb2YgY2xpZW50SW5mb1xuICAgICAqIEFsc28gZG9lcyBhIHNhbml0eSBjaGVjayBmb3IgZXh0cmFRdWVyeVBhcmFtZXRlcnMgcGFzc2VkIGJ5IHRoZSB1c2VyIHRvIGVuc3VyZSBubyByZXBlYXQgcXVlcnlQYXJhbWV0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEFjY291bnR9IGFjY291bnQgLSBBY2NvdW50IGZvciB3aGljaCB0aGUgdG9rZW4gaXMgcmVxdWVzdGVkXG4gICAgICogQHBhcmFtIHF1ZXJ5cGFyYW1zXG4gICAgICogQHBhcmFtIHtAbGluayBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVyc31cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRIaW50UGFyYW1ldGVycyhhY2NvdW50OiBBY2NvdW50LCBxUGFyYW1zOiBTdHJpbmdEaWN0KTogU3RyaW5nRGljdCB7XG4gICAgLypcbiAgICAgKiBUaGlzIGlzIGEgZmluYWwgY2hlY2sgZm9yIGFsbCBxdWVyeVBhcmFtcyBhZGRlZCBzbyBmYXI7IHByZWZlcmVuY2Ugb3JkZXI6IHNpZCA+IGxvZ2luX2hpbnRcbiAgICAgKiBzaWQgY2Fubm90IGJlIHBhc3NlZCBhbG9uZyB3aXRoIGxvZ2luX2hpbnQgb3IgZG9tYWluX2hpbnQsIGhlbmNlIHdlIGNoZWNrIGJvdGggYXJlIG5vdCBwb3B1bGF0ZWQgeWV0IGluIHF1ZXJ5UGFyYW1ldGVyc1xuICAgICAqL1xuICAgICAgICBpZiAoYWNjb3VudCAmJiAhcVBhcmFtc1tTU09UeXBlcy5TSURdKSB7XG4gICAgICAgICAgICAvLyBzaWQgLSBwb3B1bGF0ZSBvbmx5IGlmIGxvZ2luX2hpbnQgaXMgbm90IGFscmVhZHkgcG9wdWxhdGVkIGFuZCB0aGUgYWNjb3VudCBoYXMgc2lkXG4gICAgICAgICAgICBjb25zdCBwb3B1bGF0ZVNJRCA9ICFxUGFyYW1zW1NTT1R5cGVzLkxPR0lOX0hJTlRdICYmIGFjY291bnQuc2lkICYmIHRoaXMucHJvbXB0VmFsdWUgPT09IFByb21wdFN0YXRlLk5PTkU7XG4gICAgICAgICAgICBpZiAocG9wdWxhdGVTSUQpIHtcbiAgICAgICAgICAgICAgICBxUGFyYW1zID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuU0lELCBhY2NvdW50LnNpZCwgcVBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsb2dpbl9oaW50IC0gYWNjb3VudC51c2VyTmFtZVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdWxhdGVMb2dpbkhpbnQgPSAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9ISU5UXSAmJiBhY2NvdW50LnVzZXJOYW1lICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGFjY291bnQudXNlck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChwb3B1bGF0ZUxvZ2luSGludCkge1xuICAgICAgICAgICAgICAgICAgICBxUGFyYW1zID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuTE9HSU5fSElOVCwgYWNjb3VudC51c2VyTmFtZSwgcVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwb3B1bGF0ZVJlcVBhcmFtcyA9ICFxUGFyYW1zW1NTT1R5cGVzLkRPTUFJTl9SRVFdICYmICFxUGFyYW1zW1NTT1R5cGVzLkxPR0lOX1JFUV07XG4gICAgICAgICAgICBpZiAocG9wdWxhdGVSZXFQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBxUGFyYW1zID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuSE9NRUFDQ09VTlRfSUQsIGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyLCBxUGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBxUGFyYW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBTSUQgdG8gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0gc2lkXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTU09QYXJhbWV0ZXIoc3NvVHlwZTogc3RyaW5nLCBzc29EYXRhOiBzdHJpbmcsIHNzb1BhcmFtPzogU3RyaW5nRGljdCk6IFN0cmluZ0RpY3Qge1xuICAgICAgICBpZiAoIXNzb1BhcmFtKSB7XG4gICAgICAgICAgICBzc29QYXJhbSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzc29EYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gc3NvUGFyYW07XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHNzb1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgU1NPVHlwZXMuU0lEOiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuU0lEXSA9IHNzb0RhdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLklEX1RPS0VOOiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fSElOVF0gPSBzc29EYXRhO1xuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9ISU5UXSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLkxPR0lOX0hJTlQ6IHtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5MT0dJTl9ISU5UXSA9IHNzb0RhdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLk9SR0FOSVpBVElPTlM6IHtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5DT05TVU1FUlM6IHtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5DT05TVU1FUlM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lEOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG9tZUFjY291bnRJZCA9IHNzb0RhdGEuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVpZCA9IENyeXB0b1V0aWxzLmJhc2U2NERlY29kZShob21lQWNjb3VudElkWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1dGlkID0gQ3J5cHRvVXRpbHMuYmFzZTY0RGVjb2RlKGhvbWVBY2NvdW50SWRbMV0pO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZG9tYWluX3JlcSBhbmQgbG9naW5fcmVxIGFyZSBub3QgbmVlZGVkIGFjY29yZGluZyB0byBlU1RTIHRlYW1cbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5MT0dJTl9SRVFdID0gdWlkO1xuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9SRVFdID0gdXRpZDtcblxuICAgICAgICAgICAgICAgIGlmICh1dGlkID09PSBDb25zdGFudHMuY29uc3VtZXJzVXRpZCkge1xuICAgICAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5DT05TVU1FUlM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgU1NPVHlwZXMuTE9HSU5fUkVROiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fUkVRXSA9IHNzb0RhdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLkRPTUFJTl9SRVE6IHtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fUkVRXSA9IHNzb0RhdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3NvUGFyYW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBSZW1vdmVzIHVubmVjZXNzYXJ5IG9yIGR1cGxpY2F0ZSBxdWVyeSBwYXJhbWV0ZXJzIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgICAqL1xuICAgIHByaXZhdGUgc2FuaXRpemVFUVBhcmFtcyhyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpIDogU3RyaW5nRGljdCB7XG4gICAgICAgIGNvbnN0IGVRUGFyYW1zIDogU3RyaW5nRGljdCA9IHJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnM7XG4gICAgICAgIGlmICghZVFQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXF1ZXN0LmNsYWltc1JlcXVlc3QpIHtcbiAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJSZW1vdmVkIGR1cGxpY2F0ZSBjbGFpbXMgZnJvbSBleHRyYVF1ZXJ5UGFyYW1ldGVycy4gUGxlYXNlIHVzZSBlaXRoZXIgdGhlIGNsYWltc1JlcXVlc3QgZmllbGQgT1IgcGFzcyBhcyBleHRyYVF1ZXJ5UGFyYW1ldGVyIC0gbm90IGJvdGguXCIpO1xuICAgICAgICAgICAgZGVsZXRlIGVRUGFyYW1zW0NvbnN0YW50cy5jbGFpbXNdO1xuICAgICAgICB9XG4gICAgICAgIEJsYWNrbGlzdGVkRVFQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICBpZiAoZVFQYXJhbXNbcGFyYW1dKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dnZXIud2FybmluZyhcIlJlbW92ZWQgZHVwbGljYXRlIFwiICsgcGFyYW0gKyBcIiBmcm9tIGV4dHJhUXVlcnlQYXJhbWV0ZXJzLiBQbGVhc2UgdXNlIHRoZSBcIiArIHBhcmFtICsgXCIgZmllbGQgaW4gcmVxdWVzdCBvYmplY3QuXCIpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBlUVBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZVFQYXJhbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSB0byBnZW5lcmF0ZSBhIFF1ZXJ5UGFyYW1ldGVyU3RyaW5nIGZyb20gYSBLZXktVmFsdWUgbWFwcGluZyBvZiBleHRyYVF1ZXJ5UGFyYW1ldGVycyBwYXNzZWRcbiAgICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2VuZXJhdGVRdWVyeVBhcmFtZXRlcnNTdHJpbmcocXVlcnlQYXJhbWV0ZXJzOiBTdHJpbmdEaWN0KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBhcmFtc1N0cmluZzogc3RyaW5nID0gbnVsbDtcblxuICAgICAgICBpZiAocXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtZXRlcnMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1N0cmluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1N0cmluZyA9IGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlQYXJhbWV0ZXJzW2tleV0pfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNTdHJpbmcgKz0gYCYke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlQYXJhbWV0ZXJzW2tleV0pfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zU3RyaW5nO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgU1NPIHBhcmFtcyBzZXQgaW4gdGhlIFJlcXVlc3RcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgICAqL1xuICAgIHN0YXRpYyBpc1NTT1BhcmFtKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycykge1xuICAgICAgICByZXR1cm4gcmVxdWVzdCAmJiAocmVxdWVzdC5hY2NvdW50IHx8IHJlcXVlc3Quc2lkIHx8IHJlcXVlc3QubG9naW5IaW50KTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi91dGlscy9DcnlwdG9VdGlsc1wiO1xuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ2xpZW50SW5mbyB7XG5cbiAgICBwcml2YXRlIF91aWQ6IHN0cmluZztcbiAgICBnZXQgdWlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91aWQgPyB0aGlzLl91aWQgOiBcIlwiO1xuICAgIH1cblxuICAgIHNldCB1aWQodWlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdWlkID0gdWlkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3V0aWQ6IHN0cmluZztcbiAgICBnZXQgdXRpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXRpZCA/IHRoaXMuX3V0aWQgOiBcIlwiO1xuICAgIH1cblxuICAgIHNldCB1dGlkKHV0aWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl91dGlkID0gdXRpZDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyYXdDbGllbnRJbmZvOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFyYXdDbGllbnRJbmZvIHx8IFN0cmluZ1V0aWxzLmlzRW1wdHkocmF3Q2xpZW50SW5mbykpIHtcbiAgICAgICAgICAgIHRoaXMudWlkID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMudXRpZCA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGVjb2RlZENsaWVudEluZm86IHN0cmluZyA9IENyeXB0b1V0aWxzLmJhc2U2NERlY29kZShyYXdDbGllbnRJbmZvKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudEluZm86IENsaWVudEluZm8gPSA8Q2xpZW50SW5mbz5KU09OLnBhcnNlKGRlY29kZWRDbGllbnRJbmZvKTtcbiAgICAgICAgICAgIGlmIChjbGllbnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsaWVudEluZm8uaGFzT3duUHJvcGVydHkoXCJ1aWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aWQgPSBjbGllbnRJbmZvLnVpZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2xpZW50SW5mby5oYXNPd25Qcm9wZXJ0eShcInV0aWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51dGlkID0gY2xpZW50SW5mby51dGlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUNsaWVudEluZm9EZWNvZGluZ0Vycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xuaW1wb3J0IHsgVG9rZW5VdGlscyB9IGZyb20gXCIuL3V0aWxzL1Rva2VuVXRpbHNcIjtcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBJZFRva2VuIHtcblxuICAgIGlzc3Vlcjogc3RyaW5nO1xuICAgIG9iamVjdElkOiBzdHJpbmc7XG4gICAgc3ViamVjdDogc3RyaW5nO1xuICAgIHRlbmFudElkOiBzdHJpbmc7XG4gICAgdmVyc2lvbjogc3RyaW5nO1xuICAgIHByZWZlcnJlZE5hbWU6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaG9tZU9iamVjdElkOiBzdHJpbmc7XG4gICAgbm9uY2U6IHN0cmluZztcbiAgICBleHBpcmF0aW9uOiBzdHJpbmc7XG4gICAgcmF3SWRUb2tlbjogc3RyaW5nO1xuICAgIGNsYWltczogU3RyaW5nRGljdDtcbiAgICBzaWQ6IHN0cmluZztcbiAgICBjbG91ZEluc3RhbmNlOiBzdHJpbmc7XG4gICAgLyogdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICBjb25zdHJ1Y3RvcihyYXdJZFRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkocmF3SWRUb2tlbikpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJZFRva2VuTnVsbE9yRW1wdHlFcnJvcihyYXdJZFRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5yYXdJZFRva2VuID0gcmF3SWRUb2tlbjtcbiAgICAgICAgICAgIHRoaXMuY2xhaW1zID0gVG9rZW5VdGlscy5leHRyYWN0SWRUb2tlbihyYXdJZFRva2VuKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcImlzc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzc3VlciA9IHRoaXMuY2xhaW1zW1wiaXNzXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcIm9pZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdElkID0gdGhpcy5jbGFpbXNbXCJvaWRcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwic3ViXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdCA9IHRoaXMuY2xhaW1zW1wic3ViXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcInRpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbmFudElkID0gdGhpcy5jbGFpbXNbXCJ0aWRcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwidmVyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IHRoaXMuY2xhaW1zW1widmVyXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcInByZWZlcnJlZF91c2VybmFtZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWZlcnJlZE5hbWUgPSB0aGlzLmNsYWltc1tcInByZWZlcnJlZF91c2VybmFtZVwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMuY2xhaW1zW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJub25jZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vbmNlID0gdGhpcy5jbGFpbXNbXCJub25jZVwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJleHBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBpcmF0aW9uID0gdGhpcy5jbGFpbXNbXCJleHBcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwiaG9tZV9vaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob21lT2JqZWN0SWQgPSB0aGlzLmNsYWltc1tcImhvbWVfb2lkXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcInNpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZCA9IHRoaXMuY2xhaW1zW1wic2lkXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcImNsb3VkX2luc3RhbmNlX2hvc3RfbmFtZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3VkSW5zdGFuY2UgPSB0aGlzLmNsYWltc1tcImNsb3VkX2luc3RhbmNlX2hvc3RfbmFtZVwiXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyogdHNsaW50OmVuYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogVE9ETzogVGhpcyBlcnJvciBoZXJlIHdvbid0IHJlYWxseSBldmVyeSBiZSB0aHJvd24sIHNpbmNlIGV4dHJhY3RJZFRva2VuKCkgcmV0dXJucyBudWxsIGlmIHRoZSBkZWNvZGVKd3QoKSBmYWlscy5cbiAgICAgICAgICAgICAqIE5lZWQgdG8gYWRkIGJldHRlciBlcnJvciBoYW5kbGluZyBoZXJlIHRvIGFjY291bnQgZm9yIGJlaW5nIHVuYWJsZSB0byBkZWNvZGUgand0cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUlkVG9rZW5QYXJzaW5nRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29uc3RhbnRzLCBQZXJzaXN0ZW50Q2FjaGVLZXlzLCBUZW1wb3JhcnlDYWNoZUtleXMsIEVycm9yQ2FjaGVLZXlzLCBJTlRFUkFDVElPTl9TVEFUVVMsIFJlcXVlc3RTdGF0dXMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5DYWNoZUl0ZW1cIjtcclxuaW1wb3J0IHsgQ2FjaGVMb2NhdGlvbiB9IGZyb20gXCIuLi9Db25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJTdG9yYWdlIH0gZnJvbSBcIi4vQnJvd3NlclN0b3JhZ2VcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXV0aENhY2hlIGV4dGVuZHMgQnJvd3NlclN0b3JhZ2Ugey8vIFNpbmdsZXRvblxyXG5cclxuICAgIHByaXZhdGUgY2xpZW50SWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcm9sbGJhY2tFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElkOiBzdHJpbmcsIGNhY2hlTG9jYXRpb246IENhY2hlTG9jYXRpb24sIHN0b3JlQXV0aFN0YXRlSW5Db29raWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcihjYWNoZUxvY2F0aW9uKTtcclxuICAgICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XHJcbiAgICAgICAgLy8gVGhpcyBpcyBoYXJkY29kZWQgdG8gdHJ1ZSBmb3Igbm93LiBXZSBtYXkgbWFrZSB0aGlzIGNvbmZpZ3VyYWJsZSBpbiB0aGUgZnV0dXJlXHJcbiAgICAgICAgdGhpcy5yb2xsYmFja0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWlncmF0ZUNhY2hlRW50cmllcyhzdG9yZUF1dGhTdGF0ZUluQ29va2llKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1cHBvcnQgcm9sbCBiYWNrIHRvIG9sZCBjYWNoZSBzY2hlbWEgdW50aWwgdGhlIG5leHQgbWFqb3IgcmVsZWFzZTogdHJ1ZSBieSBkZWZhdWx0IG5vd1xyXG4gICAgICogQHBhcmFtIHN0b3JlQXV0aFN0YXRlSW5Db29raWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtaWdyYXRlQ2FjaGVFbnRyaWVzKHN0b3JlQXV0aFN0YXRlSW5Db29raWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCBwZXJzaXN0ZW50Q2FjaGVTZXQgPSBPYmplY3Qua2V5cyhQZXJzaXN0ZW50Q2FjaGVLZXlzKS5tYXAoa2V5ID0+IHN1cGVyLmdldEl0ZW0oYG1zYWwuJHtQZXJzaXN0ZW50Q2FjaGVLZXlzW2tleV19YCkpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yQ2FjaGVTZXQgPSBPYmplY3Qua2V5cyhFcnJvckNhY2hlS2V5cykubWFwKGtleSA9PiBzdXBlci5nZXRJdGVtKGBtc2FsLiR7RXJyb3JDYWNoZUtleXNba2V5XX1gKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhY2hlU2V0ID0gcGVyc2lzdGVudENhY2hlU2V0LmNvbmNhdChlcnJvckNhY2hlU2V0KTtcclxuICAgICAgICBjb25zdCBrZXlzVG9NaWdyYXRlID0gT2JqZWN0LmtleXMoY2FjaGVTZXQpO1xyXG4gICAgICAgIGtleXNUb01pZ3JhdGUuZm9yRWFjaCgoY2FjaGVLZXksIGluZGV4KSA9PiB0aGlzLmR1cGxpY2F0ZUNhY2hlRW50cnkoY2FjaGVLZXksIGNhY2hlU2V0W2luZGV4XSwgc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBoZWxwIHdpdGggcm9sbCBiYWNrIGtleXNcclxuICAgICAqIEBwYXJhbSBuZXdLZXlcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHN0b3JlQXV0aFN0YXRlSW5Db29raWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkdXBsaWNhdGVDYWNoZUVudHJ5KG5ld0tleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBzdG9yZUF1dGhTdGF0ZUluQ29va2llPzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW0obmV3S2V5LCB2YWx1ZSwgc3RvcmVBdXRoU3RhdGVJbkNvb2tpZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJlcGVuZCBtc2FsLjxjbGllbnQtaWQ+IHRvIGVhY2gga2V5OyBTa2lwIGZvciBhbnkgSlNPTiBvYmplY3QgYXMgS2V5IChkZWZpbmVkIHNjaGVtYXMgZG8gbm90IG5lZWQgdGhlIGtleSBhcHBlbmRlZDogQWNjZXNzVG9rZW4gS2V5cyBvciB0aGUgdXBjb21pbmcgc2NoZW1hKVxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIGFkZEluc3RhbmNlSWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUNhY2hlS2V5KGtleTogc3RyaW5nLCBhZGRJbnN0YW5jZUlkOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBEZWZpbmVkIHNjaGVtYXMgZG8gbm90IG5lZWQgdGhlIGtleSBhcHBlbmRlZFxyXG4gICAgICAgICAgICBKU09OLnBhcnNlKGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoYCR7Q29uc3RhbnRzLmNhY2hlUHJlZml4fWApIHx8IGtleS5zdGFydHNXaXRoKENvbnN0YW50cy5hZGFsSWRUb2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFkZEluc3RhbmNlSWQgPyBgJHtDb25zdGFudHMuY2FjaGVQcmVmaXh9LiR7dGhpcy5jbGllbnRJZH0uJHtrZXl9YCA6IGAke0NvbnN0YW50cy5jYWNoZVByZWZpeH0uJHtrZXl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgdmFsdWUgdG8gc3RvcmFnZVxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gZW5hYmxlQ29va2llU3RvcmFnZVxyXG4gICAgICovXHJcbiAgICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBlbmFibGVDb29raWVTdG9yYWdlPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnNldEl0ZW0odGhpcy5nZW5lcmF0ZUNhY2hlS2V5KGtleSwgdHJ1ZSksIHZhbHVlLCBlbmFibGVDb29raWVTdG9yYWdlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucm9sbGJhY2tFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnNldEl0ZW0odGhpcy5nZW5lcmF0ZUNhY2hlS2V5KGtleSwgZmFsc2UpLCB2YWx1ZSwgZW5hYmxlQ29va2llU3RvcmFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IG9uZSBpdGVtIGJ5IGtleSBmcm9tIHN0b3JhZ2VcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBlbmFibGVDb29raWVTdG9yYWdlXHJcbiAgICAgKi9cclxuICAgIGdldEl0ZW0oa2V5OiBzdHJpbmcsIGVuYWJsZUNvb2tpZVN0b3JhZ2U/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0SXRlbSh0aGlzLmdlbmVyYXRlQ2FjaGVLZXkoa2V5LCB0cnVlKSwgZW5hYmxlQ29va2llU3RvcmFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgdmFsdWUgZnJvbSBzdG9yYWdlXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZW1vdmVJdGVtKHRoaXMuZ2VuZXJhdGVDYWNoZUtleShrZXksIHRydWUpKTtcclxuICAgICAgICBpZiAodGhpcy5yb2xsYmFja0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgc3VwZXIucmVtb3ZlSXRlbSh0aGlzLmdlbmVyYXRlQ2FjaGVLZXkoa2V5LCBmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBjYWNoZSBpdGVtc1xyXG4gICAgICovXHJcbiAgICByZXNldENhY2hlSXRlbXMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dO1xyXG4gICAgICAgIGxldCBrZXk6IHN0cmluZztcclxuICAgICAgICBmb3IgKGtleSBpbiBzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGtleSBjb250YWlucyBtc2FsIHByZWZpeDsgRm9yIG5vdywgd2UgYXJlIGNsZWFyaW5nIGFsbCBjYWNoZSBpdGVtcyBjcmVhdGVkIGJ5IE1TQUwuanNcclxuICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAoa2V5LmluZGV4T2YoQ29uc3RhbnRzLmNhY2hlUHJlZml4KSAhPT0gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlci5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBDbGVhciBjYWNoZSBiYXNlZCBvbiBjbGllbnQgaWQgKGNsYXJpZnkgdXNlIGNhc2VzIHdoZXJlIHRoaXMgaXMgbmVlZGVkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgYWxsIHRlbXBvcmFyeSBjYWNoZSBpdGVtc1xyXG4gICAgICovXHJcbiAgICByZXNldFRlbXBDYWNoZUl0ZW1zKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcclxuICAgICAgICBsZXQga2V5OiBzdHJpbmc7XHJcbiAgICAgICAgZm9yIChrZXkgaW4gc3RvcmFnZSkge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBrZXkgY29udGFpbnMgbXNhbCBwcmVmaXg7IEZvciBub3csIHdlIGFyZSBjbGVhcmluZyBhbGwgY2FjaGUgaXRlbXMgY3JlYXRlZCBieSBNU0FMLmpzXHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhUZW1wb3JhcnlDYWNoZUtleXMpLmluZGV4T2Yoa2V5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlci5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY29va2llcyBmb3IgSUVcclxuICAgICAqIEBwYXJhbSBjTmFtZVxyXG4gICAgICogQHBhcmFtIGNWYWx1ZVxyXG4gICAgICogQHBhcmFtIGV4cGlyZXNcclxuICAgICAqL1xyXG4gICAgc2V0SXRlbUNvb2tpZShjTmFtZTogc3RyaW5nLCBjVmFsdWU6IHN0cmluZywgZXhwaXJlcz86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnNldEl0ZW1Db29raWUodGhpcy5nZW5lcmF0ZUNhY2hlS2V5KGNOYW1lLCB0cnVlKSwgY1ZhbHVlLCBleHBpcmVzKTtcclxuICAgICAgICBpZiAodGhpcy5yb2xsYmFja0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgc3VwZXIuc2V0SXRlbUNvb2tpZSh0aGlzLmdlbmVyYXRlQ2FjaGVLZXkoY05hbWUsIGZhbHNlKSwgY1ZhbHVlLCBleHBpcmVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgb25lIGl0ZW0gYnkga2V5IGZyb20gY29va2llc1xyXG4gICAgICogQHBhcmFtIGNOYW1lXHJcbiAgICAgKi9cclxuICAgIGdldEl0ZW1Db29raWUoY05hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldEl0ZW1Db29raWUodGhpcy5nZW5lcmF0ZUNhY2hlS2V5KGNOYW1lLCB0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIGFjY2VzcyB0b2tlbnMgaW4gdGhlIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkZW50aWZpZXJcclxuICAgICAqL1xyXG4gICAgZ2V0QWxsQWNjZXNzVG9rZW5zKGNsaWVudElkOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nKTogQXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gT2JqZWN0LmtleXMod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pLnJlZHVjZSgodG9rZW5zLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKCB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleS5tYXRjaChjbGllbnRJZCkgJiYga2V5Lm1hdGNoKGhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdBY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IG5ldyBBY2Nlc3NUb2tlbkNhY2hlSXRlbShKU09OLnBhcnNlKGtleSksIEpTT04ucGFyc2UodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW5zLmNvbmNhdChbIG5ld0FjY2Vzc1Rva2VuQ2FjaGVJdGVtIF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYWxsIHRlbXBvcmFyeSBjYWNoZSBlbnRyaWVzXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcyhzdGF0ZT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcclxuICAgICAgICBsZXQga2V5OiBzdHJpbmc7XHJcbiAgICAgICAgZm9yIChrZXkgaW4gc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGtleS5pbmRleE9mKFRlbXBvcmFyeUNhY2hlS2V5cy5BVVRIT1JJVFkpICE9PSAtMSB8fCBrZXkuaW5kZXhPZihUZW1wb3JhcnlDYWNoZUtleXMuQUNRVUlSRV9UT0tFTl9BQ0NPVU5UKSAhPT0gMSkgJiYgKCFzdGF0ZSB8fCBrZXkuaW5kZXhPZihzdGF0ZSkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlRGVsaW1TcGxpdEtleSA9IGtleS5zcGxpdChDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2VEZWxpbVNwbGl0S2V5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5U3RhdGUgPSByZXNvdXJjZURlbGltU3BsaXRLZXlbcmVzb3VyY2VEZWxpbVNwbGl0S2V5Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleVN0YXRlID09PSBzdGF0ZSAmJiAhdGhpcy50b2tlblJlbmV3YWxJblByb2dyZXNzKGtleVN0YXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5SRU5FV19TVEFUVVMgKyBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShUZW1wb3JhcnlDYWNoZUtleXMuU1RBVEVfTE9HSU4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oVGVtcG9yYXJ5Q2FjaGVLZXlzLlNUQVRFX0FDUV9UT0tFTik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShUZW1wb3JhcnlDYWNoZUtleXMuTE9HSU5fUkVRVUVTVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShJTlRFUkFDVElPTl9TVEFUVVMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oYCR7VGVtcG9yYXJ5Q2FjaGVLZXlzLk5PTkNFX0lEVE9LRU59fCR7c3RhdGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShrZXksIFwiXCIsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck1zYWxDb29raWUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBpZiB0aGUgdG9rZW4gcmVuZXdhbCBpcyBzdGlsbCBpbiBwcm9ncmVzc1xyXG4gICAgICogQHBhcmFtIHN0YXRlVmFsdWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB0b2tlblJlbmV3YWxJblByb2dyZXNzKHN0YXRlVmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHJlbmV3U3RhdHVzID0gdGhpcy5nZXRJdGVtKFRlbXBvcmFyeUNhY2hlS2V5cy5SRU5FV19TVEFUVVMgKyBzdGF0ZVZhbHVlKTtcclxuICAgICAgICByZXR1cm4gISEocmVuZXdTdGF0dXMgJiYgcmVuZXdTdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgYWxsIGNvb2tpZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsZWFyTXNhbENvb2tpZShzdGF0ZT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vbmNlS2V5ID0gc3RhdGUgPyBgJHtUZW1wb3JhcnlDYWNoZUtleXMuTk9OQ0VfSURUT0tFTn18JHtzdGF0ZX1gIDogVGVtcG9yYXJ5Q2FjaGVLZXlzLk5PTkNFX0lEVE9LRU47XHJcbiAgICAgICAgdGhpcy5jbGVhckl0ZW1Db29raWUobm9uY2VLZXkpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJJdGVtQ29va2llKFRlbXBvcmFyeUNhY2hlS2V5cy5TVEFURV9MT0dJTik7XHJcbiAgICAgICAgdGhpcy5jbGVhckl0ZW1Db29raWUoVGVtcG9yYXJ5Q2FjaGVLZXlzLkxPR0lOX1JFUVVFU1QpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJJdGVtQ29va2llKFRlbXBvcmFyeUNhY2hlS2V5cy5TVEFURV9BQ1FfVE9LRU4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgdG8gY2FjaGUgYWNjb3VudCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBhY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQ6IGFueSwgc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke1RlbXBvcmFyeUNhY2hlS2V5cy5BQ1FVSVJFX1RPS0VOX0FDQ09VTlR9JHtDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXJ9JHthY2NvdW50SWR9JHtDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXJ9JHtzdGF0ZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGF1dGhvcml0eUtleSB0byBjYWNoZSBhdXRob3JpdHlcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHtUZW1wb3JhcnlDYWNoZUtleXMuQVVUSE9SSVRZfSR7Q29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyfSR7c3RhdGV9YDtcclxuICAgIH1cclxufVxyXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQWNjZXNzVG9rZW5LZXkgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlbktleVwiO1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5WYWx1ZSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuVmFsdWVcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkNhY2hlSXRlbSB7XG5cbiAgICBrZXk6IEFjY2Vzc1Rva2VuS2V5O1xuICAgIHZhbHVlOiBBY2Nlc3NUb2tlblZhbHVlO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5OiBBY2Nlc3NUb2tlbktleSwgdmFsdWU6IEFjY2Vzc1Rva2VuVmFsdWUpIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ2FjaGVMb2NhdGlvbiB9IGZyb20gXCIuLi9Db25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQXV0aEVycm9yXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQnJvd3NlclN0b3JhZ2Ugey8vIFNpbmdsZXRvblxuXG4gICAgcHJvdGVjdGVkIGNhY2hlTG9jYXRpb246IENhY2hlTG9jYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihjYWNoZUxvY2F0aW9uOiBDYWNoZUxvY2F0aW9uKSB7XG4gICAgICAgIGlmICghd2luZG93KSB7XG4gICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlTm9XaW5kb3dPYmplY3RFcnJvcihcIkJyb3dzZXIgc3RvcmFnZSBjbGFzcyBjb3VsZCBub3QgZmluZCB3aW5kb3cgb2JqZWN0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RvcmFnZVN1cHBvcnRlZCA9IHR5cGVvZiB3aW5kb3dbY2FjaGVMb2NhdGlvbl0gIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93W2NhY2hlTG9jYXRpb25dICE9IG51bGw7XG4gICAgICAgIGlmICghc3RvcmFnZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVN0b3JhZ2VOb3RTdXBwb3J0ZWRFcnJvcihjYWNoZUxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlTG9jYXRpb24gPSBjYWNoZUxvY2F0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGFkZCB2YWx1ZSB0byBzdG9yYWdlXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBlbmFibGVDb29raWVTdG9yYWdlXG4gICAgICovXG4gICAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZW5hYmxlQ29va2llU3RvcmFnZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKGVuYWJsZUNvb2tpZVN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBvbmUgaXRlbSBieSBrZXkgZnJvbSBzdG9yYWdlXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSBlbmFibGVDb29raWVTdG9yYWdlXG4gICAgICovXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZywgZW5hYmxlQ29va2llU3RvcmFnZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBpZiAoZW5hYmxlQ29va2llU3RvcmFnZSAmJiB0aGlzLmdldEl0ZW1Db29raWUoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUNvb2tpZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5nZXRJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlIHZhbHVlIGZyb20gc3RvcmFnZVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKi9cbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2xlYXIgc3RvcmFnZSAocmVtb3ZlIGFsbCBpdGVtcyBmcm9tIGl0KVxuICAgICAqL1xuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICByZXR1cm4gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBhZGQgdmFsdWUgdG8gY29va2llc1xuICAgICAqIEBwYXJhbSBjTmFtZVxuICAgICAqIEBwYXJhbSBjVmFsdWVcbiAgICAgKiBAcGFyYW0gZXhwaXJlc1xuICAgICAqL1xuICAgIHNldEl0ZW1Db29raWUoY05hbWU6IHN0cmluZywgY1ZhbHVlOiBzdHJpbmcsIGV4cGlyZXM/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvb2tpZVN0ciA9IGNOYW1lICsgXCI9XCIgKyBjVmFsdWUgKyBcIjtcIjtcbiAgICAgICAgaWYgKGV4cGlyZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZVRpbWUgPSB0aGlzLmdldENvb2tpZUV4cGlyYXRpb25UaW1lKGV4cGlyZXMpO1xuICAgICAgICAgICAgY29va2llU3RyICs9IFwiZXhwaXJlcz1cIiArIGV4cGlyZVRpbWUgKyBcIjtcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgb25lIGl0ZW0gYnkga2V5IGZyb20gY29va2llc1xuICAgICAqIEBwYXJhbSBjTmFtZVxuICAgICAqL1xuICAgIGdldEl0ZW1Db29raWUoY05hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjTmFtZSArIFwiPVwiO1xuICAgICAgICBjb25zdCBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gY2FbaV07XG4gICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFuIGl0ZW0gaW4gdGhlIGNvb2tpZXMgYnkga2V5XG4gICAgICogQHBhcmFtIGNOYW1lXG4gICAgICovXG4gICAgY2xlYXJJdGVtQ29va2llKGNOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKGNOYW1lLCBcIlwiLCAtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvb2tpZSBleHBpcmF0aW9uIHRpbWVcbiAgICAgKiBAcGFyYW0gY29va2llTGlmZURheXNcbiAgICAgKi9cbiAgICBnZXRDb29raWVFeHBpcmF0aW9uVGltZShjb29raWVMaWZlRGF5czogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBleHByID0gbmV3IERhdGUodG9kYXkuZ2V0VGltZSgpICsgY29va2llTGlmZURheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgcmV0dXJuIGV4cHIudG9VVENTdHJpbmcoKTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBUaW1lVXRpbHMge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGltZSBpbiBzZWNvbmRzIGZvciBleHBpcmF0aW9uIGJhc2VkIG9uIHN0cmluZyB2YWx1ZSBwYXNzZWQgaW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwaXJlc0luXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlRXhwaXJlc0luKGV4cGlyZXNJbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgLy8gaWYgQUFEIGRpZCBub3Qgc2VuZCBcImV4cGlyZXNfaW5cIiBwcm9wZXJ0eSwgdXNlIGRlZmF1bHQgZXhwaXJhdGlvbiBvZiAzNTk5IHNlY29uZHMsIGZvciBzb21lIHJlYXNvbiBBQUQgc2VuZHMgMzU5OSBhcyBcImV4cGlyZXNfaW5cIiB2YWx1ZSBpbnN0ZWFkIG9mIDM2MDBcbiAgICAgICAgaWYgKCFleHBpcmVzSW4pIHtcbiAgICAgICAgICAgIGV4cGlyZXNJbiA9IFwiMzU5OVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZUludChleHBpcmVzSW4sIDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gdGhlIGN1cnJlbnQgdGltZSBpbiBVbml4IHRpbWUuIERhdGUuZ2V0VGltZSgpIHJldHVybnMgaW4gbWlsbGlzZWNvbmRzLlxuICAgICAqL1xuICAgIHN0YXRpYyBub3coKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLjApO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBdXRoQ2FjaGUgfSBmcm9tIFwiLi4vY2FjaGUvQXV0aENhY2hlXCI7XG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQXV0aEVycm9yXCI7XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEVycm9yVXRpbHMge1xuXG4gICAgc3RhdGljIHRocm93RXJyb3JBbmRDbGVhclRlbXBDYWNoZShzdG9yYWdlOiBBdXRoQ2FjaGUsIGVycm9yOiBBdXRoRXJyb3IpOiBBdXRoRXJyb3Ige1xuICAgICAgICBzdG9yYWdlLnJlc2V0VGVtcENhY2hlSXRlbXMoKTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEF1dGhSZXNwb25zZSB9IGZyb20gXCIuLi9BdXRoUmVzcG9uc2VcIjtcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi4vSWRUb2tlblwiO1xuXG4vKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNwb25zZVV0aWxzIHtcblxuICAgIHN0YXRpYyBzZXRSZXNwb25zZUlkVG9rZW4ob3JpZ2luYWxSZXNwb25zZTogQXV0aFJlc3BvbnNlLCBpZFRva2VuT2JqOiBJZFRva2VuKSA6IEF1dGhSZXNwb25zZSB7XG4gICAgICAgIGlmICghb3JpZ2luYWxSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlkVG9rZW5PYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbFJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhwID0gTnVtYmVyKGlkVG9rZW5PYmouZXhwaXJhdGlvbik7XG4gICAgICAgIGlmIChleHAgJiYgIW9yaWdpbmFsUmVzcG9uc2UuZXhwaXJlc09uKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFJlc3BvbnNlLmV4cGlyZXNPbiA9IG5ldyBEYXRlKGV4cCAqIDEwMDApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5vcmlnaW5hbFJlc3BvbnNlLFxuICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbk9iaixcbiAgICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IGlkVG9rZW5PYmouY2xhaW1zLFxuICAgICAgICAgICAgdW5pcXVlSWQ6IGlkVG9rZW5PYmoub2JqZWN0SWQgfHwgaWRUb2tlbk9iai5zdWJqZWN0LFxuICAgICAgICAgICAgdGVuYW50SWQ6IGlkVG9rZW5PYmoudGVuYW50SWQsXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5pbXBvcnQgeyBBYWRBdXRob3JpdHkgfSBmcm9tIFwiLi9BYWRBdXRob3JpdHlcIjtcbmltcG9ydCB7IEIyY0F1dGhvcml0eSB9IGZyb20gXCIuL0IyY0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVXJsVXRpbHNcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpdHlGYWN0b3J5IHtcbiAgICAvKipcbiAgICAgKiBQYXJzZSB0aGUgdXJsIGFuZCBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgYXV0aG9yaXR5XG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgRGV0ZWN0QXV0aG9yaXR5RnJvbVVybChhdXRob3JpdHlVcmw6IHN0cmluZyk6IEF1dGhvcml0eVR5cGUge1xuICAgICAgICBhdXRob3JpdHlVcmwgPSBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkoYXV0aG9yaXR5VXJsKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFVybFV0aWxzLkdldFVybENvbXBvbmVudHMoYXV0aG9yaXR5VXJsKTtcbiAgICAgICAgY29uc3QgcGF0aFNlZ21lbnRzID0gY29tcG9uZW50cy5QYXRoU2VnbWVudHM7XG4gICAgICAgIHN3aXRjaCAocGF0aFNlZ21lbnRzWzBdKSB7XG4gICAgICAgICAgICBjYXNlIFwidGZwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQjJDO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BYWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gYXV0aG9yaXR5IG9iamVjdCBvZiB0aGUgY29ycmVjdCB0eXBlIGJhc2VkIG9uIHRoZSB1cmxcbiAgICAgKiBQZXJmb3JtcyBiYXNpYyBhdXRob3JpdHkgdmFsaWRhdGlvbiAtIGNoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBvZiBhIHZhbGlkIHR5cGUgKGVnIGFhZCwgYjJjKVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlSW5zdGFuY2UoYXV0aG9yaXR5VXJsOiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKTogQXV0aG9yaXR5IHtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoYXV0aG9yaXR5VXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHlwZSA9IEF1dGhvcml0eUZhY3RvcnkuRGV0ZWN0QXV0aG9yaXR5RnJvbVVybChhdXRob3JpdHlVcmwpO1xuICAgICAgICAvLyBEZXBlbmRpbmcgb24gYWJvdmUgZGV0ZWN0aW9uLCBjcmVhdGUgdGhlIHJpZ2h0IHR5cGUuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBdXRob3JpdHlUeXBlLkIyQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEIyY0F1dGhvcml0eShhdXRob3JpdHlVcmwsIHZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICAgICAgICAgIGNhc2UgQXV0aG9yaXR5VHlwZS5BYWQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBYWRBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZEF1dGhvcml0eVR5cGU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBUZWxlbWV0cnlFdmVudCBmcm9tIFwiLi9UZWxlbWV0cnlFdmVudFwiO1xuaW1wb3J0IHtcbiAgICBDb21wbGV0ZWRFdmVudHMsXG4gICAgRXZlbnRDb3VudCxcbiAgICBFdmVudENvdW50QnlDb3JyZWxhdGlvbklkLFxuICAgIEluUHJvZ3Jlc3NFdmVudHMsXG4gICAgVGVsZW1ldHJ5Q29uZmlnLFxuICAgIFRlbGVtZXRyeVBsYXRmb3JtLFxuICAgIFRlbGVtZXRyeUVtaXR0ZXJcbn0gZnJvbSBcIi4vVGVsZW1ldHJ5VHlwZXNcIjtcbmltcG9ydCBEZWZhdWx0RXZlbnQgZnJvbSBcIi4vRGVmYXVsdEV2ZW50XCI7XG5cbi8vIGZvciB1c2UgaW4gY2FjaGUgZXZlbnRzXG5jb25zdCBNU0FMX0NBQ0hFX0VWRU5UX1ZBTFVFX1BSRUZJWCA9IFwibXNhbC50b2tlblwiO1xuY29uc3QgTVNBTF9DQUNIRV9FVkVOVF9OQU1FID0gXCJtc2FsLmNhY2hlX2V2ZW50XCI7XG5cbmNvbnN0IGNyZWF0ZUV2ZW50S2V5ID0gKGV2ZW50OiBUZWxlbWV0cnlFdmVudCk6IHN0cmluZyA9PiAoXG4gICAgYCR7ZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZH0tJHtldmVudC5ldmVudElkfS0ke2V2ZW50LmV2ZW50TmFtZX1gXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlNYW5hZ2VyIHtcblxuICAgIC8vIGNvcnJlbGF0aW9uIElkIHRvIGxpc3Qgb2YgZXZlbnRzXG4gICAgcHJpdmF0ZSBjb21wbGV0ZWRFdmVudHM6IENvbXBsZXRlZEV2ZW50cyA9IHt9O1xuICAgIC8vIGV2ZW50IGtleSB0byBldmVudFxuICAgIHByaXZhdGUgaW5Qcm9ncmVzc0V2ZW50czogSW5Qcm9ncmVzc0V2ZW50cyA9IHt9O1xuICAgIC8vIGNvcnJlbGF0aW9uIGlkIHRvIG1hcCBvZiBldmVudG5hbWUgdG8gY291bnRcbiAgICBwcml2YXRlIGV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWQ6IEV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWQgPSB7fTtcblxuICAgIC8vIEltcGxlbWVudCBhZnRlciBBUEkgRVZFTlRcbiAgICBwcml2YXRlIG9ubHlTZW5kRmFpbHVyZVRlbGVtZXRyeTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgdGVsZW1ldHJ5UGxhdGZvcm06IFRlbGVtZXRyeVBsYXRmb3JtO1xuICAgIHByaXZhdGUgY2xpZW50SWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHRlbGVtZXRyeUVtaXR0ZXI6IFRlbGVtZXRyeUVtaXR0ZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFRlbGVtZXRyeUNvbmZpZywgdGVsZW1ldHJ5RW1pdHRlcjogVGVsZW1ldHJ5RW1pdHRlcikge1xuICAgICAgICAvLyBUT0RPIFRIUk9XIGlmIGJhZCBvcHRpb25zXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5UGxhdGZvcm0gPSBjb25maWcucGxhdGZvcm07XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBjb25maWcuY2xpZW50SWQ7XG4gICAgICAgIHRoaXMub25seVNlbmRGYWlsdXJlVGVsZW1ldHJ5ID0gY29uZmlnLm9ubHlTZW5kRmFpbHVyZVRlbGVtZXRyeTtcbiAgICAgICAgLypcbiAgICAgICAgICogVE9ETywgd2hlbiBpIGdldCB0byB3aXJpbmcgdGhpcyB0aHJvdWdoLCB0aGluayBhYm91dCB3aGF0IGl0IG1lYW5zIGlmXG4gICAgICAgICAqIGEgZGV2ZWxvcGVyIGRvZXMgbm90IGltcGxlbWVudCB0ZWxlbSBhdCBhbGwsIHdlIHN0aWxsIGluc3RydW1lbnQsIGJ1dCB0ZWxlbWV0cnlFbWl0dGVyIGNhbiBiZVxuICAgICAgICAgKiBvcHRpb25hbD9cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5RW1pdHRlciA9IHRlbGVtZXRyeUVtaXR0ZXI7XG4gICAgfVxuXG4gICAgc3RhcnRFdmVudChldmVudDogVGVsZW1ldHJ5RXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRlbGVtZXRyeUVtaXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudEtleSA9IGNyZWF0ZUV2ZW50S2V5KGV2ZW50KTtcbiAgICAgICAgdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XSA9IGV2ZW50O1xuICAgIH1cblxuICAgIHN0b3BFdmVudChldmVudDogVGVsZW1ldHJ5RXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBjcmVhdGVFdmVudEtleShldmVudCk7XG4gICAgICAgIGlmICghdGhpcy50ZWxlbWV0cnlFbWl0dGVyIHx8ICF0aGlzLmluUHJvZ3Jlc3NFdmVudHNbZXZlbnRLZXldKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuc3RvcCgpO1xuICAgICAgICB0aGlzLmluY3JlbWVudEV2ZW50Q291bnQoZXZlbnQpO1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZEV2ZW50cyA9IHRoaXMuY29tcGxldGVkRXZlbnRzW2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWRdO1xuXG4gICAgICAgIHRoaXMuY29tcGxldGVkRXZlbnRzW2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWRdID0gWy4uLihjb21wbGV0ZWRFdmVudHMgfHwgW10pLCBldmVudF07XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV07XG4gICAgfVxuXG4gICAgZmx1c2goY29ycmVsYXRpb25JZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25seSB1bmZpbmlzaGVkIGV2ZW50cyBzaG91bGQgdGhpcyBzdGlsbCByZXR1cm4gdGhlbT9cbiAgICAgICAgaWYgKCF0aGlzLnRlbGVtZXRyeUVtaXR0ZXIgfHwgIXRoaXMuY29tcGxldGVkRXZlbnRzW2NvcnJlbGF0aW9uSWRdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcnBoYW5lZEV2ZW50cyA9IHRoaXMuZ2V0T3JwaGFuZWRFdmVudHMoY29ycmVsYXRpb25JZCk7XG4gICAgICAgIG9ycGhhbmVkRXZlbnRzLmZvckVhY2goZXZlbnQgPT4gdGhpcy5pbmNyZW1lbnRFdmVudENvdW50KGV2ZW50KSk7XG4gICAgICAgIGNvbnN0IGV2ZW50c1RvRmx1c2g6IEFycmF5PFRlbGVtZXRyeUV2ZW50PiA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuY29tcGxldGVkRXZlbnRzW2NvcnJlbGF0aW9uSWRdLFxuICAgICAgICAgICAgLi4ub3JwaGFuZWRFdmVudHNcbiAgICAgICAgXTtcblxuICAgICAgICBkZWxldGUgdGhpcy5jb21wbGV0ZWRFdmVudHNbY29ycmVsYXRpb25JZF07XG4gICAgICAgIGNvbnN0IGV2ZW50Q291bnRzVG9GbHVzaDogRXZlbnRDb3VudCA9IHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtjb3JyZWxhdGlvbklkXTtcblxuICAgICAgICBkZWxldGUgdGhpcy5ldmVudENvdW50QnlDb3JyZWxhdGlvbklkW2NvcnJlbGF0aW9uSWRdO1xuICAgICAgICAvLyBUT0RPIGFkZCBmdW5jaXRvbmFsaXR5IGZvciBvbmx5Rmx1c2hGYWlsdXJlcyBhZnRlciBpbXBsZW1lbnRpbmcgYXBpIGV2ZW50PyA/P1xuXG4gICAgICAgIGlmICghZXZlbnRzVG9GbHVzaCB8fCAhZXZlbnRzVG9GbHVzaC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRFdmVudDogRGVmYXVsdEV2ZW50ID0gbmV3IERlZmF1bHRFdmVudChcbiAgICAgICAgICAgIHRoaXMudGVsZW1ldHJ5UGxhdGZvcm0sXG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkLFxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcbiAgICAgICAgICAgIGV2ZW50Q291bnRzVG9GbHVzaFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50c1dpdGhEZWZhdWx0RXZlbnQgPSBbIC4uLmV2ZW50c1RvRmx1c2gsIGRlZmF1bHRFdmVudCBdO1xuXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5RW1pdHRlcihldmVudHNXaXRoRGVmYXVsdEV2ZW50Lm1hcChlID0+IGUuZ2V0KCkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluY3JlbWVudEV2ZW50Q291bnQoZXZlbnQ6IFRlbGVtZXRyeUV2ZW50KTogdm9pZCB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRPRE8sIG5hbWUgY2FjaGUgZXZlbnQgZGlmZmVyZW50P1xuICAgICAgICAgKiBpZiB0eXBlIGlzIGNhY2hlIGV2ZW50LCBjaGFuZ2UgbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnQuZXZlbnROYW1lO1xuICAgICAgICBjb25zdCBldmVudENvdW50ID0gdGhpcy5ldmVudENvdW50QnlDb3JyZWxhdGlvbklkW2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWRdO1xuICAgICAgICBpZiAoIWV2ZW50Q291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtldmVudC50ZWxlbWV0cnlDb3JyZWxhdGlvbklkXSA9IHtcbiAgICAgICAgICAgICAgICBbZXZlbnROYW1lXTogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50Q291bnRbZXZlbnROYW1lXSA9IGV2ZW50Q291bnRbZXZlbnROYW1lXSA/IGV2ZW50Q291bnRbZXZlbnROYW1lXSArIDEgOiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRPcnBoYW5lZEV2ZW50cyhjb3JyZWxhdGlvbklkOiBzdHJpbmcpOiBBcnJheTxUZWxlbWV0cnlFdmVudD4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5pblByb2dyZXNzRXZlbnRzKVxuICAgICAgICAgICAgLnJlZHVjZSgobWVtbywgZXZlbnRLZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRLZXkuaW5kZXhPZihjb3JyZWxhdGlvbklkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmluUHJvZ3Jlc3NFdmVudHNbZXZlbnRLZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5tZW1vLCBldmVudF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVWRU5UX05BTUVfUFJFRklYLCBURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUyB9IGZyb20gXCIuL1RlbGVtZXRyeUNvbnN0YW50c1wiO1xuaW1wb3J0IFRlbGVtZXRyeUV2ZW50IGZyb20gXCIuL1RlbGVtZXRyeUV2ZW50XCI7XG5pbXBvcnQgeyBFdmVudENvdW50LCBUZWxlbWV0cnlQbGF0Zm9ybSB9IGZyb20gXCIuL1RlbGVtZXRyeVR5cGVzXCI7XG5pbXBvcnQgeyBwcmVwZW5kRXZlbnROYW1lUHJlZml4IH0gZnJvbSBcIi4vVGVsZW1ldHJ5VXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdEV2ZW50IGV4dGVuZHMgVGVsZW1ldHJ5RXZlbnQge1xuICAgIC8vIFRPRE8gUGxhdGZvcm0gVHlwZVxuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtOiBUZWxlbWV0cnlQbGF0Zm9ybSwgY29ycmVsYXRpb25JZDogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBldmVudENvdW50OiBFdmVudENvdW50KSB7XG4gICAgICAgIHN1cGVyKHByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJkZWZhdWx0X2V2ZW50XCIpLCBjb3JyZWxhdGlvbklkKTtcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiY2xpZW50X2lkXCIpXSA9IGNsaWVudElkO1xuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJzZGtfcGxhZm9ybVwiKV0gPSBwbGF0Zm9ybS5zZGs7XG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcInNka192ZXJzaW9uXCIpXSA9IHBsYXRmb3JtLnNka1ZlcnNpb247XG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImFwcGxpY2F0aW9uX25hbWVcIildID0gcGxhdGZvcm0uYXBwbGljYXRpb25OYW1lO1xuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJhcHBsaWNhdGlvbl92ZXJzaW9uXCIpXSA9IHBsYXRmb3JtLmFwcGxpY2F0aW9uVmVyc2lvbjtcbiAgICAgICAgdGhpcy5ldmVudFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5VaUV2ZW50Q291bnRUZWxlbWV0cnlCYXRjaEtleX1gXSA9IHRoaXMuZ2V0RXZlbnRDb3VudChwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwidWlfZXZlbnRcIiksIGV2ZW50Q291bnQpO1xuICAgICAgICB0aGlzLmV2ZW50W2Ake1RFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTLkh0dHBFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXl9YF0gPSB0aGlzLmdldEV2ZW50Q291bnQocHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImh0dHBfZXZlbnRcIiksIGV2ZW50Q291bnQpO1xuICAgICAgICB0aGlzLmV2ZW50W2Ake1RFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTLkNhY2hlRXZlbnRDb3VudENvbnN0U3RyS2V5fWBdID0gdGhpcy5nZXRFdmVudENvdW50KHByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJjYWNoZV9ldmVudFwiKSwgZXZlbnRDb3VudCk7XG4gICAgICAgIC8vIC8gRGV2aWNlIGlkP1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RXZlbnRDb3VudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRDb3VudDogRXZlbnRDb3VudCk6IG51bWJlciB7XG4gICAgICAgIGlmICghZXZlbnRDb3VudFtldmVudE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnRDb3VudFtldmVudE5hbWVdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTIH0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICAgIEVWRU5UX05BTUVfS0VZLFxuICAgIFNUQVJUX1RJTUVfS0VZLFxuICAgIEVMQVBTRURfVElNRV9LRVlcbn0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwcmVwZW5kRXZlbnROYW1lUHJlZml4IH0gZnJvbSBcIi4vVGVsZW1ldHJ5VXRpbHNcIjtcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL0NyeXB0b1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbGVtZXRyeUV2ZW50IHtcblxuICAgIHByaXZhdGUgc3RhcnRUaW1lc3RhbXA6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgZXZlbnQ6IGFueTsgLy8gVE9ETyBUWVBFIFRISVNcbiAgICBwdWJsaWMgZXZlbnRJZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnROYW1lOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmV2ZW50SWQgPSBDcnlwdG9VdGlscy5jcmVhdGVOZXdHdWlkKCk7XG4gICAgICAgIHRoaXMuZXZlbnQgPSB7XG4gICAgICAgICAgICBbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFVkVOVF9OQU1FX0tFWSldOiBldmVudE5hbWUsXG4gICAgICAgICAgICBbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChTVEFSVF9USU1FX0tFWSldOiB0aGlzLnN0YXJ0VGltZXN0YW1wLFxuICAgICAgICAgICAgW3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoRUxBUFNFRF9USU1FX0tFWSldOiAtMSxcbiAgICAgICAgICAgIFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5Nc2FsQ29ycmVsYXRpb25JZENvbnN0U3RyS2V5fWBdOiBjb3JyZWxhdGlvbklkXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRFbGFwc2VkVGltZSh0aW1lOiBOdW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KEVMQVBTRURfVElNRV9LRVkpXSA9IHRpbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XG4gICAgICAgIC8vIFNldCBkdXJhdGlvbiBvZiBldmVudFxuICAgICAgICB0aGlzLnNldEVsYXBzZWRUaW1lKCtEYXRlLm5vdygpIC0gK3RoaXMuc3RhcnRUaW1lc3RhbXApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdGVsZW1ldHJ5Q29ycmVsYXRpb25JZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5Nc2FsQ29ycmVsYXRpb25JZENvbnN0U3RyS2V5fWBdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdGVsZW1ldHJ5Q29ycmVsYXRpb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXZlbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoRVZFTlRfTkFNRV9LRVkpXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50aGlzLmV2ZW50LFxuICAgICAgICAgICAgZXZlbnRJZDogdGhpcy5ldmVudElkXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSBcIi4vTWVzc2FnZUhlbHBlclwiO1xuaW1wb3J0IHsgQXV0aENhY2hlIH0gZnJvbSBcIi4vLi4vY2FjaGUvQXV0aENhY2hlXCI7XG5cbi8qKlxuICogSGFuZGxlcyBNZXNzYWdlIGNhY2hlIG9wZXJhdGlvbnNcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDYWNoZSB7XG5cbiAgICBwcml2YXRlIHN0b3JhZ2U6IEF1dGhDYWNoZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBpbml0aWFsaXplIHRoZSBjbGFzcyB3aXRoIFN0b3JhZ2UgdHlwZVxuICAgICAqIEBwYXJhbSBjYWNoZVN0b3JhZ2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYWNoZVN0b3JhZ2U6IEF1dGhDYWNoZSkge1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBjYWNoZVN0b3JhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSBtZXNzYWdlIHRvIHRoZSBjYWNoZVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHdyaXRlKGtleTogTWVzc2FnZVR5cGUsIGRhdGE6IHN0cmluZykge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHJpZXZlcyB0aGUgbWVzc2FnZSBmcm9tIHRoZSBjYWNoZVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKi9cbiAgICByZWFkKGtleTogTWVzc2FnZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZXJhc2UgdGhlIG1lc3NhZ2UgZnJvbSB0aGUgY2FjaGVcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICovXG4gICAgZXJhc2Uoa2V5OiBNZXNzYWdlVHlwZSkge1xuICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IFdpbmRvd1R5cGUsIE1lc3NhZ2VIZWxwZXIgfSBmcm9tIFwiLi9NZXNzYWdlSGVscGVyXCI7XG5pbXBvcnQgeyBXaW5kb3dVdGlscyB9IGZyb20gXCIuLy4uL3V0aWxzL1dpbmRvd1V0aWxzXCI7XG5pbXBvcnQgeyBNZXNzYWdlVHlwZSwgUEFZTE9BRCB9IGZyb20gXCIuL01lc3NhZ2VIZWxwZXJcIjtcbmltcG9ydCB7IE1lc3NhZ2VDYWNoZSB9IGZyb20gXCIuL01lc3NhZ2VDYWNoZVwiO1xuaW1wb3J0IHsgTWVzc2FnZURpc3BhdGNoZXIgfSBmcm9tIFwiLi9NZXNzYWdlRGlzcGF0Y2hlclwiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vLi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBpZnJhbWVSZWRpcmVjdENhbGxiYWNrIH0gZnJvbSBcIi4vLi4vVXNlckFnZW50QXBwbGljYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0ZW5lciB7XG5cbiAgICBwcml2YXRlIG1lc3NhZ2VDYWNoZTogTWVzc2FnZUNhY2hlO1xuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXI7XG4gICAgcHJpdmF0ZSB0b3BGcmFtZU9yaWdpbjogc3RyaW5nO1xuICAgIHByaXZhdGUgZW1iZWRkZWRGcmFtZU9yaWdpbjogc3RyaW5nO1xuICAgIHByaXZhdGUgY29uc2VudE5lZWRlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGlmcmFtZVJlZGlyZWN0Q2FsbGJhY2s6IGlmcmFtZVJlZGlyZWN0Q2FsbGJhY2s7XG5cbiAgICAvKipcbiAgICAgKiBpbml0aWFsaXplIHRoZSBtZXNzYWdlIGxpc3RlbmVyLCBhbmQgcmVnaXN0ZXIgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgbWVzc2FnZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlQ2FjaGU6IE1lc3NhZ2VDYWNoZSwgbG9nZ2VyOiBMb2dnZXIsIHRvcEZyYW1lT3JpZ2luPzogc3RyaW5nLCBlbWJlZGRlZEZyYW1lT3JpZ2luPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUNhY2hlID0gbWVzc2FnZUNhY2hlO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy50b3BGcmFtZU9yaWdpbiA9IHRvcEZyYW1lT3JpZ2luO1xuICAgICAgICB0aGlzLmVtYmVkZGVkRnJhbWVPcmlnaW4gPSBlbWJlZGRlZEZyYW1lT3JpZ2luO1xuXG4gICAgICAgIC8vIGxpc3RlbiB0byBhbGwgaW5jb21pbmcgbWVzc2FnZXNcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q2FsbEJhY2soY29uc2VudE5lZWRlZDogYm9vbGVhbiwgY2FsbGJhY2s6IGlmcmFtZVJlZGlyZWN0Q2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jb25zZW50TmVlZGVkID0gY29uc2VudE5lZWRlZDtcbiAgICAgICAgdGhpcy5pZnJhbWVSZWRpcmVjdENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG9wIGZyYW1lIGFwcGxpY2F0aW9uIGNhbGxzIHRoaXMgZnVuY3Rpb24gdG8gYWNrIHRvIHByb2NlZWRcbiAgICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgICAqL1xuICAgIHByb2Nlc3NJZnJhbWVSZWRpcmVjdENhbGxiYWNrKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAoKSA9PiBXaW5kb3dVdGlscy5uYXZpZ2F0ZVdpbmRvdyh1cmwsIHRoaXMubG9nZ2VyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIG1lc3NhZ2VzIHJlY2VpZXZlZFxuICAgICAqIFRoaXMgd2lsbCBiZSBhIHVuaXF1ZSBoYW5kbGVyIHBlciBtZXNzYWdlLCB3ZSB3aWxsIGFsbG93IG9ubHkgb25lIGFjdGl2ZSByZXF1ZXN0IGF0IGEgdGltZVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgcmVjZWl2ZU1lc3NhZ2UoZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGNvbnN0IHdpbmRvd1R5cGUgPSBNZXNzYWdlSGVscGVyLmN1cnJlbnRXaW5kb3coKTtcbiAgICAgICAgY29uc3QgcmVjZWl2ZWRNZXNzYWdlOiBQQVlMT0FEID0geyAuLi5ldmVudC5kYXRhfTtcblxuICAgICAgICBzd2l0Y2god2luZG93VHlwZSkge1xuXG4gICAgICAgICAgICAvLyBUb3AgZnJhbWVkIGFwcGxpY2F0aW9uOiBoYW5kbGVzIHRoZSBkZWxlZ2F0aW9uIG9uIGJlaGFsZiBvZiB0aGUgaWZyYW1lZCBhcHBcbiAgICAgICAgICAgIGNhc2UgV2luZG93VHlwZS5UT1BfRlJBTUU6IHtcblxuICAgICAgICAgICAgICAgIHN3aXRjaChyZWNlaXZlZE1lc3NhZ2UudHlwZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuUkVESVJFQ1RfUkVRVUVTVDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWNrbm93bGVnZSB0aGUgcmVkaXJlY3Qgb24gYmVoYWxmIG9mIHRoZSBpZnJhbWVkIGFwcCBieSBzZW5kaW5nIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gTWVzc2FnZUhlbHBlci5idWlsZE1lc3NhZ2UoTWVzc2FnZVR5cGUuVVJMX1RPUF9GUkFNRSwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuZGlzcGF0Y2hNZXNzYWdlKGV2ZW50LnNvdXJjZSwgbWVzc2FnZSwgdGhpcy5lbWJlZGRlZEZyYW1lT3JpZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5VUkxfTkFWSUdBVEU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZXNwb25zZSBpcyB0aGUgVVJMIHRvIG5hdmlnYXRlIGZvciB0b2tlbiBhY3F1aXNpdGlvbiwgbmF2aWdhdGUgdG8gU1RTXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjZWl2ZWRNZXNzYWdlLnR5cGUgPT09IE1lc3NhZ2VUeXBlLlVSTF9OQVZJR0FURSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJuYXZpZ2F0aW5nIHRvIHRoZSBTZXJ2aWNlIG9uIGJlaGFsZiBvZiB0aGUgaWZyYW1lZCBhcHBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmNvbnNlbnROZWVkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZnJhbWVSZWRpcmVjdENhbGxiYWNrKHRoaXMucHJvY2Vzc0lmcmFtZVJlZGlyZWN0Q2FsbGJhY2socmVjZWl2ZWRNZXNzYWdlLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpbmRvd1V0aWxzLm5hdmlnYXRlV2luZG93KHJlY2VpdmVkTWVzc2FnZS5kYXRhLCB0aGlzLmxvZ2dlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGVtYmVkZGVkIChpbiBhbiBpZnJhbWUpIGFwcGxpY2F0aW9uXG4gICAgICAgICAgICBjYXNlIFdpbmRvd1R5cGUuSUZSQU1FOiB7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGUgb3JpZ2luLCBzaG91bGQgbWF0Y2ggd2luZG93LnRvcCBhbHdheXM7IG1lc3NhZ2UgY2hhbm5lbCBtYXkgYmUgbW9yZSBzZWN1cmVcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnRvcCAhPSBldmVudC5zb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcIlRoZSBtZXNzYWdlIG9yaWdpbiBpcyBub3QgdmVyaWZpZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVjZWl2ZWRNZXNzYWdlLnR5cGUgPT09IE1lc3NhZ2VUeXBlLlVSTF9UT1BfRlJBTUUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjb3JkIHRoZSBhY2sgZnJvbSB0aGUgdG9wIGZyYW1lIC0gc3RvcmUgdGhlIFVSTFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDYWNoZS53cml0ZShNZXNzYWdlVHlwZS5VUkxfVE9QX0ZSQU1FLCByZWNlaXZlZE1lc3NhZ2UuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzcG9uZCB3aXRoIHRoZSBVUkwgdG8gbmF2aWdhdGUgZm9yIHRva2VuIGFjcXVpc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybE5hdmlnYXRlID0gdGhpcy5tZXNzYWdlQ2FjaGUucmVhZChNZXNzYWdlVHlwZS5VUkxfTkFWSUdBVEUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gTWVzc2FnZUhlbHBlci5idWlsZE1lc3NhZ2UoTWVzc2FnZVR5cGUuVVJMX05BVklHQVRFLCB1cmxOYXZpZ2F0ZSk7XG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLmRpc3BhdGNoTWVzc2FnZShldmVudC5zb3VyY2UsIG1lc3NhZ2UsIHRoaXMudG9wRnJhbWVPcmlnaW4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==