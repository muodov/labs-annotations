/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/axios/lib/utils.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var bind = __webpack_require__(/*! ./helpers/bind */ 11);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is a Node Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Node Buffer, otherwise false
 */
function isBuffer(val) {
  return ((typeof Buffer !== 'undefined') && (Buffer.isBuffer) && (Buffer.isBuffer(val)));
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../buffer/index.js */ 12).Buffer))

/***/ }),
/* 1 */
/* unknown exports provided */
/* exports used: default */
/*!****************************!*\
  !*** ./client/styles.scss ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../~/css-loader??ref--0-1!../~/sass-loader/lib/loader.js!./styles.scss */ 37);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../~/style-loader/addStyles.js */ 47)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--0-1!../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--0-1!../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/* unknown exports provided */
/* exports used: fromRange, toRange */
/*!********************************!*\
  !*** ./~/xpath-range/index.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/range */ 50)


/***/ }),
/* 3 */
/* exports provided: getPanel, showPanel, hidePanel, renderPanel */
/* exports used: getPanel, hidePanel, renderPanel, showPanel */
/*!*************************!*\
  !*** ./client/panel.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xpath_range__ = __webpack_require__(/*! xpath-range */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xpath_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xpath_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(/*! ./styles.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiclient_js__ = __webpack_require__(/*! ./apiclient.js */ 6);
/* harmony export (immutable) */ __webpack_exports__["a"] = getPanel;
/* harmony export (immutable) */ __webpack_exports__["d"] = showPanel;
/* harmony export (immutable) */ __webpack_exports__["b"] = hidePanel;
/* harmony export (immutable) */ __webpack_exports__["c"] = renderPanel;




function getPanel() {
    let panel = document.querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['annotation-panel']);
    if (!panel) {
        panel = document.createElement('div');
        // hidden by default
        panel.classList.add(
            __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['annotation-panel'],
            __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['hidden']
        );
        panel.textContent = 'PANEL';
        document.body.appendChild(panel);
    }
    return panel;
}

function showPanel() {
    let panel = getPanel();
    panel.classList.remove(__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['hidden']);
}

function hidePanel() {
    let panel = getPanel();
    panel.classList.add(__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['hidden']);
}

function renderPanel(xpathRange, snippet) {
    let existingAnnotation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__apiclient_js__["b" /* getAnnotationForRange */])(xpathRange);
    let contents = document.createElement('div');
    contents.classList.add(__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['panel-contents']);
    contents.innerHTML = `
    <div class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['content']}">
        <blockquote class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['snippet']}">annotate this</blockquote>
    </div>
    <div class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['comments']}"></div>
    <div class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['title']} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['is-4']}">Add comment:</div>
    <div class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['add-form']}">
        <div class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['field']}">
            <p class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['control']}">
                <input class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['input']} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['new-annotation-name']}" type="text" placeholder="Your name">
            </p>
        </div>
        <div class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['field']}">
            <p class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['control']}">
                <textarea class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['textarea']} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['new-annotation-text']}" placeholder="Enter the text annotation"></textarea>
            </p>
        </div>
        <div class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['field']} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['is-grouped']}">
            <p class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['control']}">
                <button class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['button']} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['is-primary']} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['new-annotation-submit']}">Submit</button>
            </p>
            <p class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['control']}">
                <button class="${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['button']} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['is-link']} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['new-annotation-cancel']}">Cancel</button>
            </p>
        </div>
    </div>
    `;

    let textToAnnotate = contents.querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['snippet']);
    textToAnnotate.textContent = existingAnnotation ? existingAnnotation.snippet : snippet;

    if (existingAnnotation) {
        let commentsCont = contents.querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['comments']);
        existingAnnotation.comments.forEach(comment => {
            let commentEl = document.createElement('div');
            commentEl.classList.add(
                __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['box'],
                __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['comment']
            );
            let title = document.createElement('strong');
            title.textContent = comment.name;
            commentEl.appendChild(title);
            commentEl.appendChild(document.createElement('br'));
            commentEl.appendChild(document.createTextNode(comment.text));
            commentsCont.appendChild(commentEl);
        });
    }

    let nameInput = contents.querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['new-annotation-name']);
    let commentInput = contents.querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['new-annotation-text']);
    let submitBut = contents.querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['new-annotation-submit']);
    submitBut.addEventListener('click', e => {
        let url = location.href;
        if (url.indexOf('?') !== -1) {
            url = url.slice(0, url.indexOf('?'));
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__apiclient_js__["c" /* submitAnnotation */])({
            url: url,
            name: nameInput.value,
            text: commentInput.value,
            range: xpathRange,
            snippet: snippet
        });
        hidePanel();
    });
    let cancelBut = contents.querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['new-annotation-cancel']);
    cancelBut.addEventListener('click', e => {
        hidePanel();
    });

    let panel = getPanel();
    panel.innerHTML = '';
    panel.appendChild(contents);
}


/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/axios/lib/defaults.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ 0);
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 33);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ 7);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ 7);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 5)))

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ (function(module, exports) {

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

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/* exports provided: getAnnotationForRange, submitAnnotation, fetchAnnotations */
/* exports used: fetchAnnotations, getAnnotationForRange, submitAnnotation */
/*!*****************************!*\
  !*** ./client/apiclient.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xpath_range__ = __webpack_require__(/*! xpath-range */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xpath_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xpath_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__annotate_js__ = __webpack_require__(/*! ./annotate.js */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(/*! axios */ 18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony export (immutable) */ __webpack_exports__["b"] = getAnnotationForRange;
/* harmony export (immutable) */ __webpack_exports__["c"] = submitAnnotation;
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchAnnotations;




window.surfly_annotations = [
    // {
    //     id: 34,
    //     snippet: 'TEST SNIPPET',
    //     range: {
    //         start: "/html[1]/body[1]/h3[1]/text()[1]",
    //         end: "/html[1]/body[1]/p[1]/text()[1]",
    //         startOffset: 19,
    //         endOffset: 26
    //     },
    //     comments: [
    //         {
    //             name: 'Test name 1',
    //             text: 'Test text 1'
    //         },
    //         {
    //             name: 'Test name 2',
    //             text: 'Test text 2'
    //         }
    //     ]
    // }
];
window.ANNOTATION_SERVER = process && process.env && process.env.NODE_ENV === 'production' ? '//someserver.com' : 'http://localhost:5000';

function isEqualRanges(r1, r2) {
    // compare two xpath-ranges
    return r1.start === r2.start &&
           r1.end === r2.end &&
           r1.startOffset === r2.startOffset &&
           r1.endOffset === r2.endOffset;
}

function getAnnotationForRange(xpathRange) {
    for(let i = 0; i < window.surfly_annotations.length; i++) {
        if (isEqualRanges(window.surfly_annotations[i].range, xpathRange)) {
            return window.surfly_annotations[i];
        }
    }
    return null;
}

function submitAnnotation(data) {
    console.log('submitting', JSON.stringify(data));
    let annotation = getAnnotationForRange(data.range);
    if (annotation) {
        annotation.comments.push({
            name: data.name,
            text: data.text
        });
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put(window.ANNOTATION_SERVER + '/' + annotation.id, annotation, {params: {url: window.location.href}});
    } else {    
        annotation = {
            snippet: data.snippet,
            range: data.range,
            comments: [
                {
                    name: data.name,
                    text: data.text
                }
            ]
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a
            .post(window.ANNOTATION_SERVER + '/', annotation, {params: {url: window.location.href}})
            .then(resp => {
                window.surfly_annotations.push(resp.data);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__annotate_js__["a" /* markAnnotation */])(resp.data);
                console.log('successfully submitted', JSON.stringify(data));
            });
    }
}

function fetchAnnotations(url) {
    return __WEBPACK_IMPORTED_MODULE_2_axios___default.a
        .get(window.ANNOTATION_SERVER + '/', {params: {url: window.location.href}})
        .then(resp => {
            window.surfly_annotations = resp.data;
            window.surfly_annotations.forEach(annotation => {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__annotate_js__["a" /* markAnnotation */])(annotation);
            });
        })
        .catch(err => {
            console.error(err)
        });
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../~/process/browser.js */ 5)))

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/axios/lib/adapters/xhr.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./../utils */ 0);
var settle = __webpack_require__(/*! ./../core/settle */ 25);
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 28);
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 34);
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 32);
var createError = __webpack_require__(/*! ../core/createError */ 10);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ 27);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ 30);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../process/browser.js */ 5)))

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/axios/lib/cancel/Cancel.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./~/axios/lib/cancel/isCancel.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/axios/lib/core/createError.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ 24);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/axios/lib/helpers/bind.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./~/buffer/index.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 36)
var ieee754 = __webpack_require__(/*! ieee754 */ 41)
var isArray = __webpack_require__(/*! isarray */ 43)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 49)))

/***/ }),
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/get-document/index.js ***!
  \*********************************/
/***/ (function(module, exports) {


/**
 * Module exports.
 */

module.exports = getDocument;

// defined by w3c
var DOCUMENT_NODE = 9;

/**
 * Returns `true` if `w` is a Document object, or `false` otherwise.
 *
 * @param {?} d - Document object, maybe
 * @return {Boolean}
 * @private
 */

function isDocument (d) {
  return d && d.nodeType === DOCUMENT_NODE;
}

/**
 * Returns the `document` object associated with the given `node`, which may be
 * a DOM element, the Window object, a Selection, a Range. Basically any DOM
 * object that references the Document in some way, this function will find it.
 *
 * @param {Mixed} node - DOM node, selection, or range in which to find the `document` object
 * @return {Document} the `document` object associated with `node`
 * @public
 */

function getDocument(node) {
  if (isDocument(node)) {
    return node;

  } else if (isDocument(node.ownerDocument)) {
    return node.ownerDocument;

  } else if (isDocument(node.document)) {
    return node.document;

  } else if (node.parentNode) {
    return getDocument(node.parentNode);

  // Range support
  } else if (node.commonAncestorContainer) {
    return getDocument(node.commonAncestorContainer);

  } else if (node.startContainer) {
    return getDocument(node.startContainer);

  // Selection support
  } else if (node.anchorNode) {
    return getDocument(node.anchorNode);
  }
}


/***/ }),
/* 14 */
/* exports provided: getAddButton, hideAddButton, showAddButton */
/* exports used: hideAddButton, showAddButton */
/*!**************************!*\
  !*** ./client/button.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xpath_range__ = __webpack_require__(/*! xpath-range */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xpath_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xpath_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(/*! ./styles.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panel_js__ = __webpack_require__(/*! ./panel.js */ 3);
/* unused harmony export getAddButton */
/* harmony export (immutable) */ __webpack_exports__["a"] = hideAddButton;
/* harmony export (immutable) */ __webpack_exports__["b"] = showAddButton;




function getAddButton() {
    let but = document.querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['add-annotation-button']);
    if (!but) {
        but = document.createElement('button');
        but.classList.add(
            __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['button'],
            __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['is-primary'],
            __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['add-annotation-button'],
        );
        but.textContent = 'Add annotation';
        but.addEventListener('click', e => {
            e.stopPropagation();
            let selection = document.getSelection();
            if (selection.isCollapsed) {
                console.warn('no selection active');
                return;
            }
            let range = selection.getRangeAt(0);
            hideAddButton();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__panel_js__["c" /* renderPanel */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_xpath_range__["fromRange"])(range), range.toString());
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__panel_js__["d" /* showPanel */])();
        });
        document.body.appendChild(but);
    }
    return but;
}

function hideAddButton() {
    console.log('hiding button');
    let buttonEl = getAddButton();
    buttonEl.classList.add(__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['hidden']);
}

function showAddButton() {
    console.log('showing button');
    let buttonEl = getAddButton();
    buttonEl.classList.remove(__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a['hidden']);
}


/***/ }),
/* 15 */
/* exports provided: markAnnotation */
/* exports used: markAnnotation */
/*!****************************!*\
  !*** ./client/annotate.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss__ = __webpack_require__(/*! ./styles.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xpath_range__ = __webpack_require__(/*! xpath-range */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xpath_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xpath_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panel_js__ = __webpack_require__(/*! ./panel.js */ 3);
/* harmony export (immutable) */ __webpack_exports__["a"] = markAnnotation;




function markAnnotation(annotation, className) {
    className = className || __WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['annotation-mark'];
    let range = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_xpath_range__["toRange"])(
        annotation.range.start,
        annotation.range.startOffset,
        annotation.range.end,
        annotation.range.endOffset,
        document
    );
    let textNode = range.startContainer;
    let toReplace = textNode.splitText(annotation.range.startOffset);
    let suffix = toReplace.splitText(
        annotation.range.endOffset - annotation.range.startOffset
    );
    let mark = document.createElement('span');
    mark.className = className;
    mark.textContent = toReplace.textContent;
    mark.addEventListener('click', e => {
        e.stopPropagation();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__panel_js__["c" /* renderPanel */])(annotation.range, annotation.snippet);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__panel_js__["d" /* showPanel */])();
    });

    toReplace.parentNode.replaceChild(mark, toReplace);
}


/***/ }),
/* 16 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss__ = __webpack_require__(/*! ./styles.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__panel_js__ = __webpack_require__(/*! ./panel.js */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_js__ = __webpack_require__(/*! ./button.js */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiclient_js__ = __webpack_require__(/*! ./apiclient.js */ 6);





function initAnnotations() {
    let panel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__panel_js__["a" /* getPanel */])();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__apiclient_js__["a" /* fetchAnnotations */])().then(() => {
        document.addEventListener('selectionchange', e => {
            let selection = document.getSelection();
            if (selection.rangeCount === 0) {
                return;
            }
            let range = selection.getRangeAt(0);
            if (panel.contains(range.startContainer) || panel.contains(range.endContainer)) {
                // ignore selections in the panel
                return;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__panel_js__["b" /* hidePanel */])();
            if (selection.isCollapsed ||
                // for simplicity, we don't allow:
                // 1. selections across elements
                range.startContainer !== range.endContainer ||
                // 2. overlapping selections
                range.startContainer.parentNode.classList.contains(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['annotation-mark']) ||
                // 3. too long selections
                range.endOffset - range.startOffset > 300
            ) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__button_js__["a" /* hideAddButton */])();
            } else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__button_js__["b" /* showAddButton */])();
            }
        });
        console.log('annotations initialized!');
    });
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', e => {
        initAnnotations();
    });
} else {
    initAnnotations();
}


/***/ }),
/* 17 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/ancestors/index.js ***!
  \******************************/
/***/ (function(module, exports) {

module.exports = parents

function parents(node, filter) {
  var out = []

  filter = filter || noop

  do {
    out.push(node)
    node = node.parentNode
  } while(node && node.tagName && filter(node))

  return out.slice(1)
}

function noop(n) {
  return true
}


/***/ }),
/* 18 */
/* unknown exports provided */
/* exports used: default */
/*!**************************!*\
  !*** ./~/axios/index.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ 19);

/***/ }),
/* 19 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/axios/lib/axios.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 0);
var bind = __webpack_require__(/*! ./helpers/bind */ 11);
var Axios = __webpack_require__(/*! ./core/Axios */ 21);
var defaults = __webpack_require__(/*! ./defaults */ 4);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 8);
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 20);
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 9);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ 35);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 20 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/axios/lib/cancel/CancelToken.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ 8);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 21 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/axios/lib/core/Axios.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ 4);
var utils = __webpack_require__(/*! ./../utils */ 0);
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 22);
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 23);
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ 31);
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ 29);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 22 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/axios/lib/core/InterceptorManager.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 23 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/axios/lib/core/dispatchRequest.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 0);
var transformData = __webpack_require__(/*! ./transformData */ 26);
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 9);
var defaults = __webpack_require__(/*! ../defaults */ 4);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 24 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./~/axios/lib/core/enhanceError.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 25 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/axios/lib/core/settle.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ 10);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 26 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/axios/lib/core/transformData.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 27 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/axios/lib/helpers/btoa.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 28 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/axios/lib/helpers/buildURL.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 29 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/axios/lib/helpers/combineURLs.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 30 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./~/axios/lib/helpers/cookies.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 31 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/axios/lib/helpers/isAbsoluteURL.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 32 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/axios/lib/helpers/isURLSameOrigin.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 33 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/axios/lib/helpers/normalizeHeaderName.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 34 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/axios/lib/helpers/parseHeaders.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 35 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/axios/lib/helpers/spread.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 36 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/base64-js/index.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 37 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./~/sass-loader/lib/loader.js!./client/styles.scss ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../~/css-loader/lib/css-base.js */ 38)(undefined);
// imports


// module
exports.push([module.i, "@keyframes styles__spinAround___3VumK {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n.styles__box___1CKrE {\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  display: block;\n  padding: 1.25rem; }\n  .styles__box___1CKrE:not(:last-child) {\n    margin-bottom: 1.5rem; }\n\na.styles__box___1CKrE:hover, a.styles__box___1CKrE:focus {\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #e54747; }\n\na.styles__box___1CKrE:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #e54747; }\n\n.styles__button___15veZ {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  text-align: center;\n  white-space: nowrap; }\n  .styles__button___15veZ:focus, .styles__button___15veZ.styles__is-focused___IqO12, .styles__button___15veZ:active, .styles__button___15veZ.styles__is-active___10U5U {\n    outline: none; }\n  .styles__button___15veZ[disabled] {\n    cursor: not-allowed; }\n  .styles__button___15veZ strong {\n    color: inherit; }\n  .styles__button___15veZ .styles__icon___2P2zJ, .styles__button___15veZ .styles__icon___2P2zJ.styles__is-small___2N8KK, .styles__button___15veZ .styles__icon___2P2zJ.styles__is-medium___1bExO, .styles__button___15veZ .styles__icon___2P2zJ.styles__is-large___2IqpI {\n    height: 1.5em;\n    width: 1.5em; }\n  .styles__button___15veZ .styles__icon___2P2zJ:first-child:not(:last-child) {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: 0.1875em; }\n  .styles__button___15veZ .styles__icon___2P2zJ:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: calc(-0.375em - 1px); }\n  .styles__button___15veZ .styles__icon___2P2zJ:first-child:last-child {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: calc(-0.375em - 1px); }\n  .styles__button___15veZ:hover, .styles__button___15veZ.styles__is-hovered___21JS5 {\n    border-color: #b5b5b5;\n    color: #363636; }\n  .styles__button___15veZ:focus, .styles__button___15veZ.styles__is-focused___IqO12 {\n    border-color: #e54747;\n    box-shadow: 0 0 0.5em rgba(229, 71, 71, 0.25);\n    color: #363636; }\n  .styles__button___15veZ:active, .styles__button___15veZ.styles__is-active___10U5U {\n    border-color: #4a4a4a;\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n    color: #363636; }\n  .styles__button___15veZ.styles__is-link___3VoKk {\n    background-color: transparent;\n    border-color: transparent;\n    color: #4a4a4a;\n    text-decoration: underline; }\n    .styles__button___15veZ.styles__is-link___3VoKk:hover, .styles__button___15veZ.styles__is-link___3VoKk.styles__is-hovered___21JS5, .styles__button___15veZ.styles__is-link___3VoKk:focus, .styles__button___15veZ.styles__is-link___3VoKk.styles__is-focused___IqO12, .styles__button___15veZ.styles__is-link___3VoKk:active, .styles__button___15veZ.styles__is-link___3VoKk.styles__is-active___10U5U {\n      background-color: whitesmoke;\n      color: #363636; }\n    .styles__button___15veZ.styles__is-link___3VoKk[disabled] {\n      background-color: transparent;\n      border-color: transparent;\n      box-shadow: none; }\n  .styles__button___15veZ.styles__is-white___1SLAl {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a; }\n    .styles__button___15veZ.styles__is-white___1SLAl:hover, .styles__button___15veZ.styles__is-white___1SLAl.styles__is-hovered___21JS5 {\n      background-color: #f9f9f9;\n      border-color: transparent;\n      color: #0a0a0a; }\n    .styles__button___15veZ.styles__is-white___1SLAl:focus, .styles__button___15veZ.styles__is-white___1SLAl.styles__is-focused___IqO12 {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n      color: #0a0a0a; }\n    .styles__button___15veZ.styles__is-white___1SLAl:active, .styles__button___15veZ.styles__is-white___1SLAl.styles__is-active___10U5U {\n      background-color: #f2f2f2;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #0a0a0a; }\n    .styles__button___15veZ.styles__is-white___1SLAl[disabled] {\n      background-color: white;\n      border-color: transparent;\n      box-shadow: none; }\n    .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv {\n      background-color: #0a0a0a;\n      color: white; }\n      .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv:hover {\n        background-color: black; }\n      .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv[disabled] {\n        background-color: #0a0a0a;\n        border-color: transparent;\n        box-shadow: none;\n        color: white; }\n    .styles__button___15veZ.styles__is-white___1SLAl.styles__is-loading___3mj4a:after {\n      border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n    .styles__button___15veZ.styles__is-white___1SLAl.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: white;\n      color: white; }\n      .styles__button___15veZ.styles__is-white___1SLAl.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-white___1SLAl.styles__is-outlined___1fL_P:focus {\n        background-color: white;\n        border-color: white;\n        color: #0a0a0a; }\n      .styles__button___15veZ.styles__is-white___1SLAl.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent white white !important; }\n      .styles__button___15veZ.styles__is-white___1SLAl.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white; }\n    .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a; }\n      .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n        background-color: #0a0a0a;\n        color: white; }\n      .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a; }\n  .styles__button___15veZ.styles__is-black___qATrq {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white; }\n    .styles__button___15veZ.styles__is-black___qATrq:hover, .styles__button___15veZ.styles__is-black___qATrq.styles__is-hovered___21JS5 {\n      background-color: #040404;\n      border-color: transparent;\n      color: white; }\n    .styles__button___15veZ.styles__is-black___qATrq:focus, .styles__button___15veZ.styles__is-black___qATrq.styles__is-focused___IqO12 {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n      color: white; }\n    .styles__button___15veZ.styles__is-black___qATrq:active, .styles__button___15veZ.styles__is-black___qATrq.styles__is-active___10U5U {\n      background-color: black;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: white; }\n    .styles__button___15veZ.styles__is-black___qATrq[disabled] {\n      background-color: #0a0a0a;\n      border-color: transparent;\n      box-shadow: none; }\n    .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv {\n      background-color: white;\n      color: #0a0a0a; }\n      .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv:hover {\n        background-color: #f2f2f2; }\n      .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv[disabled] {\n        background-color: white;\n        border-color: transparent;\n        box-shadow: none;\n        color: #0a0a0a; }\n    .styles__button___15veZ.styles__is-black___qATrq.styles__is-loading___3mj4a:after {\n      border-color: transparent transparent white white !important; }\n    .styles__button___15veZ.styles__is-black___qATrq.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a; }\n      .styles__button___15veZ.styles__is-black___qATrq.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-black___qATrq.styles__is-outlined___1fL_P:focus {\n        background-color: #0a0a0a;\n        border-color: #0a0a0a;\n        color: white; }\n      .styles__button___15veZ.styles__is-black___qATrq.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n      .styles__button___15veZ.styles__is-black___qATrq.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a; }\n    .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: white;\n      color: white; }\n      .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n        background-color: white;\n        color: #0a0a0a; }\n      .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white; }\n  .styles__button___15veZ.styles__is-light___3_Rp5 {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: #363636; }\n    .styles__button___15veZ.styles__is-light___3_Rp5:hover, .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-hovered___21JS5 {\n      background-color: #eeeeee;\n      border-color: transparent;\n      color: #363636; }\n    .styles__button___15veZ.styles__is-light___3_Rp5:focus, .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-focused___IqO12 {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n      color: #363636; }\n    .styles__button___15veZ.styles__is-light___3_Rp5:active, .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-active___10U5U {\n      background-color: #e8e8e8;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #363636; }\n    .styles__button___15veZ.styles__is-light___3_Rp5[disabled] {\n      background-color: whitesmoke;\n      border-color: transparent;\n      box-shadow: none; }\n    .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv {\n      background-color: #363636;\n      color: whitesmoke; }\n      .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv:hover {\n        background-color: #292929; }\n      .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv[disabled] {\n        background-color: #363636;\n        border-color: transparent;\n        box-shadow: none;\n        color: whitesmoke; }\n    .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-loading___3mj4a:after {\n      border-color: transparent transparent #363636 #363636 !important; }\n    .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke; }\n      .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-outlined___1fL_P:focus {\n        background-color: whitesmoke;\n        border-color: whitesmoke;\n        color: #363636; }\n      .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent whitesmoke whitesmoke !important; }\n      .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: whitesmoke; }\n    .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636; }\n      .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n        background-color: #363636;\n        color: whitesmoke; }\n      .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #363636;\n        box-shadow: none;\n        color: #363636; }\n  .styles__button___15veZ.styles__is-dark___2SGrM {\n    background-color: #363636;\n    border-color: transparent;\n    color: whitesmoke; }\n    .styles__button___15veZ.styles__is-dark___2SGrM:hover, .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-hovered___21JS5 {\n      background-color: #2f2f2f;\n      border-color: transparent;\n      color: whitesmoke; }\n    .styles__button___15veZ.styles__is-dark___2SGrM:focus, .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-focused___IqO12 {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n      color: whitesmoke; }\n    .styles__button___15veZ.styles__is-dark___2SGrM:active, .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-active___10U5U {\n      background-color: #292929;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: whitesmoke; }\n    .styles__button___15veZ.styles__is-dark___2SGrM[disabled] {\n      background-color: #363636;\n      border-color: transparent;\n      box-shadow: none; }\n    .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv {\n      background-color: whitesmoke;\n      color: #363636; }\n      .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv:hover {\n        background-color: #e8e8e8; }\n      .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv[disabled] {\n        background-color: whitesmoke;\n        border-color: transparent;\n        box-shadow: none;\n        color: #363636; }\n    .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-loading___3mj4a:after {\n      border-color: transparent transparent whitesmoke whitesmoke !important; }\n    .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636; }\n      .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-outlined___1fL_P:focus {\n        background-color: #363636;\n        border-color: #363636;\n        color: whitesmoke; }\n      .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #363636 #363636 !important; }\n      .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #363636;\n        box-shadow: none;\n        color: #363636; }\n    .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke; }\n      .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n        background-color: whitesmoke;\n        color: #363636; }\n      .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: whitesmoke; }\n  .styles__button___15veZ.styles__is-primary___pfmjM {\n    background-color: #e54747;\n    border-color: transparent;\n    color: #fff; }\n    .styles__button___15veZ.styles__is-primary___pfmjM:hover, .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-hovered___21JS5 {\n      background-color: #e33c3c;\n      border-color: transparent;\n      color: #fff; }\n    .styles__button___15veZ.styles__is-primary___pfmjM:focus, .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-focused___IqO12 {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(229, 71, 71, 0.25);\n      color: #fff; }\n    .styles__button___15veZ.styles__is-primary___pfmjM:active, .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-active___10U5U {\n      background-color: #e23131;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #fff; }\n    .styles__button___15veZ.styles__is-primary___pfmjM[disabled] {\n      background-color: #e54747;\n      border-color: transparent;\n      box-shadow: none; }\n    .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv {\n      background-color: #fff;\n      color: #e54747; }\n      .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv:hover {\n        background-color: #f2f2f2; }\n      .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #e54747; }\n    .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-loading___3mj4a:after {\n      border-color: transparent transparent #fff #fff !important; }\n    .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #e54747;\n      color: #e54747; }\n      .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-outlined___1fL_P:focus {\n        background-color: #e54747;\n        border-color: #e54747;\n        color: #fff; }\n      .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #e54747 #e54747 !important; }\n      .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #e54747;\n        box-shadow: none;\n        color: #e54747; }\n    .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n      .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n        background-color: #fff;\n        color: #e54747; }\n      .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n  .styles__button___15veZ.styles__is-info___ps_7r {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff; }\n    .styles__button___15veZ.styles__is-info___ps_7r:hover, .styles__button___15veZ.styles__is-info___ps_7r.styles__is-hovered___21JS5 {\n      background-color: #276cda;\n      border-color: transparent;\n      color: #fff; }\n    .styles__button___15veZ.styles__is-info___ps_7r:focus, .styles__button___15veZ.styles__is-info___ps_7r.styles__is-focused___IqO12 {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n      color: #fff; }\n    .styles__button___15veZ.styles__is-info___ps_7r:active, .styles__button___15veZ.styles__is-info___ps_7r.styles__is-active___10U5U {\n      background-color: #2366d1;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #fff; }\n    .styles__button___15veZ.styles__is-info___ps_7r[disabled] {\n      background-color: #3273dc;\n      border-color: transparent;\n      box-shadow: none; }\n    .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv {\n      background-color: #fff;\n      color: #3273dc; }\n      .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv:hover {\n        background-color: #f2f2f2; }\n      .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #3273dc; }\n    .styles__button___15veZ.styles__is-info___ps_7r.styles__is-loading___3mj4a:after {\n      border-color: transparent transparent #fff #fff !important; }\n    .styles__button___15veZ.styles__is-info___ps_7r.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #3273dc;\n      color: #3273dc; }\n      .styles__button___15veZ.styles__is-info___ps_7r.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-info___ps_7r.styles__is-outlined___1fL_P:focus {\n        background-color: #3273dc;\n        border-color: #3273dc;\n        color: #fff; }\n      .styles__button___15veZ.styles__is-info___ps_7r.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #3273dc #3273dc !important; }\n      .styles__button___15veZ.styles__is-info___ps_7r.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #3273dc;\n        box-shadow: none;\n        color: #3273dc; }\n    .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n      .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n        background-color: #fff;\n        color: #3273dc; }\n      .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n  .styles__button___15veZ.styles__is-success___Ige_l {\n    background-color: #23d160;\n    border-color: transparent;\n    color: #fff; }\n    .styles__button___15veZ.styles__is-success___Ige_l:hover, .styles__button___15veZ.styles__is-success___Ige_l.styles__is-hovered___21JS5 {\n      background-color: #22c65b;\n      border-color: transparent;\n      color: #fff; }\n    .styles__button___15veZ.styles__is-success___Ige_l:focus, .styles__button___15veZ.styles__is-success___Ige_l.styles__is-focused___IqO12 {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n      color: #fff; }\n    .styles__button___15veZ.styles__is-success___Ige_l:active, .styles__button___15veZ.styles__is-success___Ige_l.styles__is-active___10U5U {\n      background-color: #20bc56;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #fff; }\n    .styles__button___15veZ.styles__is-success___Ige_l[disabled] {\n      background-color: #23d160;\n      border-color: transparent;\n      box-shadow: none; }\n    .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv {\n      background-color: #fff;\n      color: #23d160; }\n      .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv:hover {\n        background-color: #f2f2f2; }\n      .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #23d160; }\n    .styles__button___15veZ.styles__is-success___Ige_l.styles__is-loading___3mj4a:after {\n      border-color: transparent transparent #fff #fff !important; }\n    .styles__button___15veZ.styles__is-success___Ige_l.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #23d160;\n      color: #23d160; }\n      .styles__button___15veZ.styles__is-success___Ige_l.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-success___Ige_l.styles__is-outlined___1fL_P:focus {\n        background-color: #23d160;\n        border-color: #23d160;\n        color: #fff; }\n      .styles__button___15veZ.styles__is-success___Ige_l.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #23d160 #23d160 !important; }\n      .styles__button___15veZ.styles__is-success___Ige_l.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #23d160;\n        box-shadow: none;\n        color: #23d160; }\n    .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n      .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n        background-color: #fff;\n        color: #23d160; }\n      .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n  .styles__button___15veZ.styles__is-warning___mpL38 {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n    .styles__button___15veZ.styles__is-warning___mpL38:hover, .styles__button___15veZ.styles__is-warning___mpL38.styles__is-hovered___21JS5 {\n      background-color: #ffdb4a;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .styles__button___15veZ.styles__is-warning___mpL38:focus, .styles__button___15veZ.styles__is-warning___mpL38.styles__is-focused___IqO12 {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n      color: rgba(0, 0, 0, 0.7); }\n    .styles__button___15veZ.styles__is-warning___mpL38:active, .styles__button___15veZ.styles__is-warning___mpL38.styles__is-active___10U5U {\n      background-color: #ffd83d;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: rgba(0, 0, 0, 0.7); }\n    .styles__button___15veZ.styles__is-warning___mpL38[disabled] {\n      background-color: #ffdd57;\n      border-color: transparent;\n      box-shadow: none; }\n    .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv {\n      background-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57; }\n      .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv:hover {\n        background-color: rgba(0, 0, 0, 0.7); }\n      .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv[disabled] {\n        background-color: rgba(0, 0, 0, 0.7);\n        border-color: transparent;\n        box-shadow: none;\n        color: #ffdd57; }\n    .styles__button___15veZ.styles__is-warning___mpL38.styles__is-loading___3mj4a:after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n    .styles__button___15veZ.styles__is-warning___mpL38.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #ffdd57;\n      color: #ffdd57; }\n      .styles__button___15veZ.styles__is-warning___mpL38.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-warning___mpL38.styles__is-outlined___1fL_P:focus {\n        background-color: #ffdd57;\n        border-color: #ffdd57;\n        color: rgba(0, 0, 0, 0.7); }\n      .styles__button___15veZ.styles__is-warning___mpL38.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #ffdd57 #ffdd57 !important; }\n      .styles__button___15veZ.styles__is-warning___mpL38.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #ffdd57;\n        box-shadow: none;\n        color: #ffdd57; }\n    .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: rgba(0, 0, 0, 0.7);\n      color: rgba(0, 0, 0, 0.7); }\n      .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n        background-color: rgba(0, 0, 0, 0.7);\n        color: #ffdd57; }\n      .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: rgba(0, 0, 0, 0.7);\n        box-shadow: none;\n        color: rgba(0, 0, 0, 0.7); }\n  .styles__button___15veZ.styles__is-danger___4A8c9 {\n    background-color: #ff3860;\n    border-color: transparent;\n    color: #fff; }\n    .styles__button___15veZ.styles__is-danger___4A8c9:hover, .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-hovered___21JS5 {\n      background-color: #ff2b56;\n      border-color: transparent;\n      color: #fff; }\n    .styles__button___15veZ.styles__is-danger___4A8c9:focus, .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-focused___IqO12 {\n      border-color: transparent;\n      box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);\n      color: #fff; }\n    .styles__button___15veZ.styles__is-danger___4A8c9:active, .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-active___10U5U {\n      background-color: #ff1f4b;\n      border-color: transparent;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #fff; }\n    .styles__button___15veZ.styles__is-danger___4A8c9[disabled] {\n      background-color: #ff3860;\n      border-color: transparent;\n      box-shadow: none; }\n    .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv {\n      background-color: #fff;\n      color: #ff3860; }\n      .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv:hover {\n        background-color: #f2f2f2; }\n      .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #ff3860; }\n    .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-loading___3mj4a:after {\n      border-color: transparent transparent #fff #fff !important; }\n    .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #ff3860;\n      color: #ff3860; }\n      .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-outlined___1fL_P:focus {\n        background-color: #ff3860;\n        border-color: #ff3860;\n        color: #fff; }\n      .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #ff3860 #ff3860 !important; }\n      .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #ff3860;\n        box-shadow: none;\n        color: #ff3860; }\n    .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n      .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n        background-color: #fff;\n        color: #ff3860; }\n      .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n  .styles__button___15veZ.styles__is-small___2N8KK {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n  .styles__button___15veZ.styles__is-medium___1bExO {\n    font-size: 1.25rem; }\n  .styles__button___15veZ.styles__is-large___2IqpI {\n    font-size: 1.5rem; }\n  .styles__button___15veZ[disabled] {\n    background-color: white;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    opacity: 0.5; }\n  .styles__button___15veZ.styles__is-fullwidth___22abZ {\n    display: flex;\n    width: 100%; }\n  .styles__button___15veZ.styles__is-loading___3mj4a {\n    color: transparent !important;\n    pointer-events: none; }\n    .styles__button___15veZ.styles__is-loading___3mj4a:after {\n      animation: styles__spinAround___3VumK 500ms infinite linear;\n      border: 2px solid #dbdbdb;\n      border-radius: 290486px;\n      border-right-color: transparent;\n      border-top-color: transparent;\n      content: \"\";\n      display: block;\n      height: 1em;\n      position: relative;\n      width: 1em;\n      position: absolute;\n      left: calc(50% - (1em / 2));\n      top: calc(50% - (1em / 2));\n      position: absolute !important; }\n\nbutton.styles__button___15veZ,\ninput[type=\"submit\"].styles__button___15veZ {\n  line-height: 1;\n  padding-bottom: 0.4em;\n  padding-top: 0.35em; }\n\n.styles__content___39lD8 {\n  color: #4a4a4a; }\n  .styles__content___39lD8:not(:last-child) {\n    margin-bottom: 1.5rem; }\n  .styles__content___39lD8 li + li {\n    margin-top: 0.25em; }\n  .styles__content___39lD8 p:not(:last-child),\n  .styles__content___39lD8 dl:not(:last-child),\n  .styles__content___39lD8 ol:not(:last-child),\n  .styles__content___39lD8 ul:not(:last-child),\n  .styles__content___39lD8 blockquote:not(:last-child),\n  .styles__content___39lD8 pre:not(:last-child),\n  .styles__content___39lD8 table:not(:last-child) {\n    margin-bottom: 1em; }\n  .styles__content___39lD8 h1,\n  .styles__content___39lD8 h2,\n  .styles__content___39lD8 h3,\n  .styles__content___39lD8 h4,\n  .styles__content___39lD8 h5,\n  .styles__content___39lD8 h6 {\n    color: #363636;\n    font-weight: 400;\n    line-height: 1.125; }\n  .styles__content___39lD8 h1 {\n    font-size: 2em;\n    margin-bottom: 0.5em; }\n    .styles__content___39lD8 h1:not(:first-child) {\n      margin-top: 1em; }\n  .styles__content___39lD8 h2 {\n    font-size: 1.75em;\n    margin-bottom: 0.5714em; }\n    .styles__content___39lD8 h2:not(:first-child) {\n      margin-top: 1.1428em; }\n  .styles__content___39lD8 h3 {\n    font-size: 1.5em;\n    margin-bottom: 0.6666em; }\n    .styles__content___39lD8 h3:not(:first-child) {\n      margin-top: 1.3333em; }\n  .styles__content___39lD8 h4 {\n    font-size: 1.25em;\n    margin-bottom: 0.8em; }\n  .styles__content___39lD8 h5 {\n    font-size: 1.125em;\n    margin-bottom: 0.8888em; }\n  .styles__content___39lD8 h6 {\n    font-size: 1em;\n    margin-bottom: 1em; }\n  .styles__content___39lD8 blockquote {\n    background-color: whitesmoke;\n    border-left: 5px solid #dbdbdb;\n    padding: 1.25em 1.5em; }\n  .styles__content___39lD8 ol {\n    list-style: decimal outside;\n    margin-left: 2em;\n    margin-right: 2em;\n    margin-top: 1em; }\n  .styles__content___39lD8 ul {\n    list-style: disc outside;\n    margin-left: 2em;\n    margin-right: 2em;\n    margin-top: 1em; }\n    .styles__content___39lD8 ul ul {\n      list-style-type: circle;\n      margin-top: 0.5em; }\n      .styles__content___39lD8 ul ul ul {\n        list-style-type: square; }\n  .styles__content___39lD8 dd {\n    margin-left: 2em; }\n  .styles__content___39lD8 pre {\n    -webkit-overflow-scrolling: touch;\n    overflow-x: auto;\n    padding: 1.25em 1.5em;\n    white-space: pre;\n    word-wrap: normal; }\n  .styles__content___39lD8 table {\n    width: 100%; }\n    .styles__content___39lD8 table td,\n    .styles__content___39lD8 table th {\n      border: 1px solid #dbdbdb;\n      border-width: 0 0 1px;\n      padding: 0.5em 0.75em;\n      vertical-align: top; }\n    .styles__content___39lD8 table th {\n      color: #363636;\n      text-align: left; }\n    .styles__content___39lD8 table tr:hover {\n      background-color: whitesmoke; }\n    .styles__content___39lD8 table thead td,\n    .styles__content___39lD8 table thead th {\n      border-width: 0 0 2px;\n      color: #363636; }\n    .styles__content___39lD8 table tfoot td,\n    .styles__content___39lD8 table tfoot th {\n      border-width: 2px 0 0;\n      color: #363636; }\n    .styles__content___39lD8 table tbody tr:last-child td,\n    .styles__content___39lD8 table tbody tr:last-child th {\n      border-bottom-width: 0; }\n  .styles__content___39lD8.styles__is-small___2N8KK {\n    font-size: 0.75rem; }\n  .styles__content___39lD8.styles__is-medium___1bExO {\n    font-size: 1.25rem; }\n  .styles__content___39lD8.styles__is-large___2IqpI {\n    font-size: 1.5rem; }\n\n.styles__input___23AZL,\n.styles__textarea___i1MY2 {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  width: 100%; }\n  .styles__input___23AZL:focus, .styles__input___23AZL.styles__is-focused___IqO12, .styles__input___23AZL:active, .styles__input___23AZL.styles__is-active___10U5U,\n  .styles__textarea___i1MY2:focus,\n  .styles__textarea___i1MY2.styles__is-focused___IqO12,\n  .styles__textarea___i1MY2:active,\n  .styles__textarea___i1MY2.styles__is-active___10U5U {\n    outline: none; }\n  .styles__input___23AZL[disabled],\n  .styles__textarea___i1MY2[disabled] {\n    cursor: not-allowed; }\n  .styles__input___23AZL:hover, .styles__input___23AZL.styles__is-hovered___21JS5,\n  .styles__textarea___i1MY2:hover,\n  .styles__textarea___i1MY2.styles__is-hovered___21JS5 {\n    border-color: #b5b5b5; }\n  .styles__input___23AZL:focus, .styles__input___23AZL.styles__is-focused___IqO12, .styles__input___23AZL:active, .styles__input___23AZL.styles__is-active___10U5U,\n  .styles__textarea___i1MY2:focus,\n  .styles__textarea___i1MY2.styles__is-focused___IqO12,\n  .styles__textarea___i1MY2:active,\n  .styles__textarea___i1MY2.styles__is-active___10U5U {\n    border-color: #e54747; }\n  .styles__input___23AZL[disabled],\n  .styles__textarea___i1MY2[disabled] {\n    background-color: whitesmoke;\n    border-color: whitesmoke;\n    box-shadow: none;\n    color: #7a7a7a; }\n    .styles__input___23AZL[disabled]::-moz-placeholder,\n    .styles__textarea___i1MY2[disabled]::-moz-placeholder {\n      color: rgba(54, 54, 54, 0.3); }\n    .styles__input___23AZL[disabled]::-webkit-input-placeholder,\n    .styles__textarea___i1MY2[disabled]::-webkit-input-placeholder {\n      color: rgba(54, 54, 54, 0.3); }\n    .styles__input___23AZL[disabled]:-moz-placeholder,\n    .styles__textarea___i1MY2[disabled]:-moz-placeholder {\n      color: rgba(54, 54, 54, 0.3); }\n    .styles__input___23AZL[disabled]:-ms-input-placeholder,\n    .styles__textarea___i1MY2[disabled]:-ms-input-placeholder {\n      color: rgba(54, 54, 54, 0.3); }\n  .styles__input___23AZL[type=\"search\"],\n  .styles__textarea___i1MY2[type=\"search\"] {\n    border-radius: 290486px; }\n  .styles__input___23AZL.styles__is-white___1SLAl,\n  .styles__textarea___i1MY2.styles__is-white___1SLAl {\n    border-color: white; }\n  .styles__input___23AZL.styles__is-black___qATrq,\n  .styles__textarea___i1MY2.styles__is-black___qATrq {\n    border-color: #0a0a0a; }\n  .styles__input___23AZL.styles__is-light___3_Rp5,\n  .styles__textarea___i1MY2.styles__is-light___3_Rp5 {\n    border-color: whitesmoke; }\n  .styles__input___23AZL.styles__is-dark___2SGrM,\n  .styles__textarea___i1MY2.styles__is-dark___2SGrM {\n    border-color: #363636; }\n  .styles__input___23AZL.styles__is-primary___pfmjM,\n  .styles__textarea___i1MY2.styles__is-primary___pfmjM {\n    border-color: #e54747; }\n  .styles__input___23AZL.styles__is-info___ps_7r,\n  .styles__textarea___i1MY2.styles__is-info___ps_7r {\n    border-color: #3273dc; }\n  .styles__input___23AZL.styles__is-success___Ige_l,\n  .styles__textarea___i1MY2.styles__is-success___Ige_l {\n    border-color: #23d160; }\n  .styles__input___23AZL.styles__is-warning___mpL38,\n  .styles__textarea___i1MY2.styles__is-warning___mpL38 {\n    border-color: #ffdd57; }\n  .styles__input___23AZL.styles__is-danger___4A8c9,\n  .styles__textarea___i1MY2.styles__is-danger___4A8c9 {\n    border-color: #ff3860; }\n  .styles__input___23AZL.styles__is-small___2N8KK,\n  .styles__textarea___i1MY2.styles__is-small___2N8KK {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n  .styles__input___23AZL.styles__is-medium___1bExO,\n  .styles__textarea___i1MY2.styles__is-medium___1bExO {\n    font-size: 1.25rem; }\n  .styles__input___23AZL.styles__is-large___2IqpI,\n  .styles__textarea___i1MY2.styles__is-large___2IqpI {\n    font-size: 1.5rem; }\n  .styles__input___23AZL.styles__is-fullwidth___22abZ,\n  .styles__textarea___i1MY2.styles__is-fullwidth___22abZ {\n    display: block;\n    width: 100%; }\n  .styles__input___23AZL.styles__is-inline___1KWzu,\n  .styles__textarea___i1MY2.styles__is-inline___1KWzu {\n    display: inline;\n    width: auto; }\n\n.styles__textarea___i1MY2 {\n  display: block;\n  max-height: 600px;\n  max-width: 100%;\n  min-height: 120px;\n  min-width: 100%;\n  padding: 0.625em;\n  resize: vertical; }\n\n.styles__checkbox___xbJVD,\n.styles__radio___GyVU_ {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative; }\n  .styles__checkbox___xbJVD input,\n  .styles__radio___GyVU_ input {\n    cursor: pointer; }\n  .styles__checkbox___xbJVD:hover,\n  .styles__radio___GyVU_:hover {\n    color: #363636; }\n  .styles__checkbox___xbJVD[disabled],\n  .styles__radio___GyVU_[disabled] {\n    color: #7a7a7a;\n    cursor: not-allowed; }\n\n.styles__radio___GyVU_ + .styles__radio___GyVU_ {\n  margin-left: 0.5em; }\n\n.styles__select___2KQGE {\n  display: inline-block;\n  height: 2.25em;\n  position: relative;\n  vertical-align: top; }\n  .styles__select___2KQGE:after {\n    border: 1px solid #e54747;\n    border-right: 0;\n    border-top: 0;\n    content: \" \";\n    display: block;\n    height: 0.5em;\n    pointer-events: none;\n    position: absolute;\n    transform: rotate(-45deg);\n    width: 0.5em;\n    margin-top: -0.375em;\n    right: 1.125em;\n    top: 50%;\n    z-index: 4; }\n  .styles__select___2KQGE select {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    align-items: center;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    box-shadow: none;\n    display: inline-flex;\n    font-size: 1rem;\n    height: 2.25em;\n    justify-content: flex-start;\n    line-height: 1.5;\n    padding-bottom: calc(0.375em - 1px);\n    padding-left: calc(0.625em - 1px);\n    padding-right: calc(0.625em - 1px);\n    padding-top: calc(0.375em - 1px);\n    position: relative;\n    vertical-align: top;\n    background-color: white;\n    border-color: #dbdbdb;\n    color: #363636;\n    cursor: pointer;\n    display: block;\n    font-size: 1em;\n    outline: none;\n    padding-right: 2.5em; }\n    .styles__select___2KQGE select:focus, .styles__select___2KQGE select.styles__is-focused___IqO12, .styles__select___2KQGE select:active, .styles__select___2KQGE select.styles__is-active___10U5U {\n      outline: none; }\n    .styles__select___2KQGE select[disabled] {\n      cursor: not-allowed; }\n    .styles__select___2KQGE select:hover, .styles__select___2KQGE select.styles__is-hovered___21JS5 {\n      border-color: #b5b5b5; }\n    .styles__select___2KQGE select:focus, .styles__select___2KQGE select.styles__is-focused___IqO12, .styles__select___2KQGE select:active, .styles__select___2KQGE select.styles__is-active___10U5U {\n      border-color: #e54747; }\n    .styles__select___2KQGE select[disabled] {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      box-shadow: none;\n      color: #7a7a7a; }\n      .styles__select___2KQGE select[disabled]::-moz-placeholder {\n        color: rgba(54, 54, 54, 0.3); }\n      .styles__select___2KQGE select[disabled]::-webkit-input-placeholder {\n        color: rgba(54, 54, 54, 0.3); }\n      .styles__select___2KQGE select[disabled]:-moz-placeholder {\n        color: rgba(54, 54, 54, 0.3); }\n      .styles__select___2KQGE select[disabled]:-ms-input-placeholder {\n        color: rgba(54, 54, 54, 0.3); }\n    .styles__select___2KQGE select:hover {\n      border-color: #b5b5b5; }\n    .styles__select___2KQGE select::-ms-expand {\n      display: none; }\n    .styles__select___2KQGE select[disabled]:hover {\n      border-color: whitesmoke; }\n  .styles__select___2KQGE:hover:after {\n    border-color: #363636; }\n  .styles__select___2KQGE.styles__is-white___1SLAl select {\n    border-color: white; }\n  .styles__select___2KQGE.styles__is-black___qATrq select {\n    border-color: #0a0a0a; }\n  .styles__select___2KQGE.styles__is-light___3_Rp5 select {\n    border-color: whitesmoke; }\n  .styles__select___2KQGE.styles__is-dark___2SGrM select {\n    border-color: #363636; }\n  .styles__select___2KQGE.styles__is-primary___pfmjM select {\n    border-color: #e54747; }\n  .styles__select___2KQGE.styles__is-info___ps_7r select {\n    border-color: #3273dc; }\n  .styles__select___2KQGE.styles__is-success___Ige_l select {\n    border-color: #23d160; }\n  .styles__select___2KQGE.styles__is-warning___mpL38 select {\n    border-color: #ffdd57; }\n  .styles__select___2KQGE.styles__is-danger___4A8c9 select {\n    border-color: #ff3860; }\n  .styles__select___2KQGE.styles__is-small___2N8KK {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n  .styles__select___2KQGE.styles__is-medium___1bExO {\n    font-size: 1.25rem; }\n  .styles__select___2KQGE.styles__is-large___2IqpI {\n    font-size: 1.5rem; }\n  .styles__select___2KQGE.styles__is-disabled___1aX81:after {\n    border-color: #7a7a7a; }\n  .styles__select___2KQGE.styles__is-fullwidth___22abZ {\n    width: 100%; }\n    .styles__select___2KQGE.styles__is-fullwidth___22abZ select {\n      width: 100%; }\n  .styles__select___2KQGE.styles__is-loading___3mj4a:after {\n    animation: styles__spinAround___3VumK 500ms infinite linear;\n    border: 2px solid #dbdbdb;\n    border-radius: 290486px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: \"\";\n    display: block;\n    height: 1em;\n    position: relative;\n    width: 1em;\n    margin-top: 0;\n    position: absolute;\n    right: 0.625em;\n    top: 0.625em;\n    transform: none; }\n\n.styles__label___24SLN {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700; }\n  .styles__label___24SLN:not(:last-child) {\n    margin-bottom: 0.5em; }\n  .styles__label___24SLN.styles__is-small___2N8KK {\n    font-size: 0.75rem; }\n  .styles__label___24SLN.styles__is-medium___1bExO {\n    font-size: 1.25rem; }\n  .styles__label___24SLN.styles__is-large___2IqpI {\n    font-size: 1.5rem; }\n\n.styles__help___o34Ni {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem; }\n  .styles__help___o34Ni.styles__is-white___1SLAl {\n    color: white; }\n  .styles__help___o34Ni.styles__is-black___qATrq {\n    color: #0a0a0a; }\n  .styles__help___o34Ni.styles__is-light___3_Rp5 {\n    color: whitesmoke; }\n  .styles__help___o34Ni.styles__is-dark___2SGrM {\n    color: #363636; }\n  .styles__help___o34Ni.styles__is-primary___pfmjM {\n    color: #e54747; }\n  .styles__help___o34Ni.styles__is-info___ps_7r {\n    color: #3273dc; }\n  .styles__help___o34Ni.styles__is-success___Ige_l {\n    color: #23d160; }\n  .styles__help___o34Ni.styles__is-warning___mpL38 {\n    color: #ffdd57; }\n  .styles__help___o34Ni.styles__is-danger___4A8c9 {\n    color: #ff3860; }\n\n.styles__field___2_6u-:not(:last-child) {\n  margin-bottom: 0.75rem; }\n\n.styles__field___2_6u-.styles__has-addons___1uWuj {\n  display: flex;\n  justify-content: flex-start; }\n  .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax {\n    margin-right: -1px; }\n    .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:first-child .styles__button___15veZ,\n    .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:first-child .styles__input___23AZL,\n    .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:first-child .styles__select___2KQGE select {\n      border-bottom-left-radius: 3px;\n      border-top-left-radius: 3px; }\n    .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:last-child .styles__button___15veZ,\n    .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:last-child .styles__input___23AZL,\n    .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:last-child .styles__select___2KQGE select {\n      border-bottom-right-radius: 3px;\n      border-top-right-radius: 3px; }\n    .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ,\n    .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL,\n    .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select {\n      border-radius: 0; }\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ:hover, .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ.styles__is-hovered___21JS5,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL:hover,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL.styles__is-hovered___21JS5,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select:hover,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select.styles__is-hovered___21JS5 {\n        z-index: 2; }\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ:focus, .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ.styles__is-focused___IqO12, .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ:active, .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ.styles__is-active___10U5U,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL:focus,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL.styles__is-focused___IqO12,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL:active,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL.styles__is-active___10U5U,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select:focus,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select.styles__is-focused___IqO12,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select:active,\n      .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select.styles__is-active___10U5U {\n        z-index: 3; }\n        .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ:focus:hover, .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ.styles__is-focused___IqO12:hover, .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ:active:hover, .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ.styles__is-active___10U5U:hover,\n        .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL:focus:hover,\n        .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL.styles__is-focused___IqO12:hover,\n        .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL:active:hover,\n        .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL.styles__is-active___10U5U:hover,\n        .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select:focus:hover,\n        .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select.styles__is-focused___IqO12:hover,\n        .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select:active:hover,\n        .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select.styles__is-active___10U5U:hover {\n          z-index: 4; }\n    .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax.styles__is-expanded___Jy9Pz {\n      flex-grow: 1;\n      flex-shrink: 0; }\n  .styles__field___2_6u-.styles__has-addons___1uWuj.styles__has-addons-centered___24wLw {\n    justify-content: center; }\n  .styles__field___2_6u-.styles__has-addons___1uWuj.styles__has-addons-right___2MEx4 {\n    justify-content: flex-end; }\n  .styles__field___2_6u-.styles__has-addons___1uWuj.styles__has-addons-fullwidth___u5fCV .styles__control___3Tgax {\n    flex-grow: 1;\n    flex-shrink: 0; }\n\n.styles__field___2_6u-.styles__is-grouped___1mbks {\n  display: flex;\n  justify-content: flex-start; }\n  .styles__field___2_6u-.styles__is-grouped___1mbks > .styles__control___3Tgax {\n    flex-shrink: 0; }\n    .styles__field___2_6u-.styles__is-grouped___1mbks > .styles__control___3Tgax:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 0.75rem; }\n    .styles__field___2_6u-.styles__is-grouped___1mbks > .styles__control___3Tgax.styles__is-expanded___Jy9Pz {\n      flex-grow: 1;\n      flex-shrink: 1; }\n  .styles__field___2_6u-.styles__is-grouped___1mbks.styles__is-grouped-centered___2Ctdt {\n    justify-content: center; }\n  .styles__field___2_6u-.styles__is-grouped___1mbks.styles__is-grouped-right___380In {\n    justify-content: flex-end; }\n\n@media screen and (min-width: 769px), print {\n  .styles__field___2_6u-.styles__is-horizontal___hRSJp {\n    display: flex; } }\n\n.styles__field-label___1hNhC .styles__label___24SLN {\n  font-size: inherit; }\n\n@media screen and (max-width: 768px) {\n  .styles__field-label___1hNhC {\n    margin-bottom: 0.5rem; } }\n\n@media screen and (min-width: 769px), print {\n  .styles__field-label___1hNhC {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right; }\n    .styles__field-label___1hNhC.styles__is-small___2N8KK {\n      font-size: 0.75rem;\n      padding-top: 0.375em; }\n    .styles__field-label___1hNhC.styles__is-normal___R81gI {\n      padding-top: 0.375em; }\n    .styles__field-label___1hNhC.styles__is-medium___1bExO {\n      font-size: 1.25rem;\n      padding-top: 0.375em; }\n    .styles__field-label___1hNhC.styles__is-large___2IqpI {\n      font-size: 1.5rem;\n      padding-top: 0.375em; } }\n\n@media screen and (min-width: 769px), print {\n  .styles__field-body___1zr7H {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1; }\n    .styles__field-body___1zr7H .styles__field___2_6u- {\n      flex-shrink: 1; }\n      .styles__field-body___1zr7H .styles__field___2_6u-:not(.styles__is-narrow___2e2dy) {\n        flex-grow: 1; }\n      .styles__field-body___1zr7H .styles__field___2_6u-:not(:last-child) {\n        margin-bottom: 0;\n        margin-right: 0.75rem; } }\n\n.styles__control___3Tgax {\n  font-size: 1rem;\n  position: relative;\n  text-align: left; }\n  .styles__control___3Tgax.styles__has-icon___2VHjN .styles__icon___2P2zJ {\n    color: #dbdbdb;\n    height: 2.25em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.25em;\n    z-index: 4; }\n  .styles__control___3Tgax.styles__has-icon___2VHjN .styles__input___23AZL:focus + .styles__icon___2P2zJ {\n    color: #7a7a7a; }\n  .styles__control___3Tgax.styles__has-icon___2VHjN .styles__input___23AZL.styles__is-small___2N8KK + .styles__icon___2P2zJ {\n    font-size: 0.75rem; }\n  .styles__control___3Tgax.styles__has-icon___2VHjN .styles__input___23AZL.styles__is-medium___1bExO + .styles__icon___2P2zJ {\n    font-size: 1.25rem; }\n  .styles__control___3Tgax.styles__has-icon___2VHjN .styles__input___23AZL.styles__is-large___2IqpI + .styles__icon___2P2zJ {\n    font-size: 1.5rem; }\n  .styles__control___3Tgax.styles__has-icon___2VHjN:not(.styles__has-icon-right___aTW4b) .styles__icon___2P2zJ {\n    left: 0; }\n  .styles__control___3Tgax.styles__has-icon___2VHjN:not(.styles__has-icon-right___aTW4b) .styles__input___23AZL {\n    padding-left: 2.25em; }\n  .styles__control___3Tgax.styles__has-icon___2VHjN.styles__has-icon-right___aTW4b .styles__icon___2P2zJ {\n    right: 0; }\n  .styles__control___3Tgax.styles__has-icon___2VHjN.styles__has-icon-right___aTW4b .styles__input___23AZL {\n    padding-right: 2.25em; }\n  .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__input___23AZL:focus ~ .styles__icon___2P2zJ, .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__input___23AZL:focus ~ .styles__icon___2P2zJ {\n    color: #7a7a7a; }\n  .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__input___23AZL.styles__is-small___2N8KK ~ .styles__icon___2P2zJ, .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__input___23AZL.styles__is-small___2N8KK ~ .styles__icon___2P2zJ {\n    font-size: 0.75rem; }\n  .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__input___23AZL.styles__is-medium___1bExO ~ .styles__icon___2P2zJ, .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__input___23AZL.styles__is-medium___1bExO ~ .styles__icon___2P2zJ {\n    font-size: 1.25rem; }\n  .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__input___23AZL.styles__is-large___2IqpI ~ .styles__icon___2P2zJ, .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__input___23AZL.styles__is-large___2IqpI ~ .styles__icon___2P2zJ {\n    font-size: 1.5rem; }\n  .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__icon___2P2zJ, .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__icon___2P2zJ {\n    color: #dbdbdb;\n    height: 2.25em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.25em;\n    z-index: 4; }\n  .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__input___23AZL {\n    padding-left: 2.25em; }\n  .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__icon___2P2zJ.styles__is-left___24Vun {\n    left: 0; }\n  .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__input___23AZL {\n    padding-right: 2.25em; }\n  .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__icon___2P2zJ.styles__is-right___3Q5w8 {\n    right: 0; }\n  .styles__control___3Tgax.styles__is-loading___3mj4a:after {\n    animation: styles__spinAround___3VumK 500ms infinite linear;\n    border: 2px solid #dbdbdb;\n    border-radius: 290486px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: \"\";\n    display: block;\n    height: 1em;\n    position: relative;\n    width: 1em;\n    position: absolute !important;\n    right: 0.625em;\n    top: 0.625em; }\n\n.styles__icon___2P2zJ {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem; }\n  .styles__icon___2P2zJ .styles__fa___2Gsew {\n    font-size: 21px; }\n  .styles__icon___2P2zJ.styles__is-small___2N8KK {\n    height: 1rem;\n    width: 1rem; }\n    .styles__icon___2P2zJ.styles__is-small___2N8KK .styles__fa___2Gsew {\n      font-size: 14px; }\n  .styles__icon___2P2zJ.styles__is-medium___1bExO {\n    height: 2rem;\n    width: 2rem; }\n    .styles__icon___2P2zJ.styles__is-medium___1bExO .styles__fa___2Gsew {\n      font-size: 28px; }\n  .styles__icon___2P2zJ.styles__is-large___2IqpI {\n    height: 3rem;\n    width: 3rem; }\n    .styles__icon___2P2zJ.styles__is-large___2IqpI .styles__fa___2Gsew {\n      font-size: 42px; }\n\n.styles__image___2kKMr {\n  display: block;\n  position: relative; }\n  .styles__image___2kKMr img {\n    display: block;\n    height: auto;\n    width: 100%; }\n  .styles__image___2kKMr.styles__is-square___17a6W img, .styles__image___2kKMr.styles__is-1by1___1SVIL img, .styles__image___2kKMr.styles__is-4by3___-36YL img, .styles__image___2kKMr.styles__is-3by2___3JA0v img, .styles__image___2kKMr.styles__is-16by9___xu_zY img, .styles__image___2kKMr.styles__is-2by1___IjLZr img {\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 100%;\n    width: 100%; }\n  .styles__image___2kKMr.styles__is-square___17a6W, .styles__image___2kKMr.styles__is-1by1___1SVIL {\n    padding-top: 100%; }\n  .styles__image___2kKMr.styles__is-4by3___-36YL {\n    padding-top: 75%; }\n  .styles__image___2kKMr.styles__is-3by2___3JA0v {\n    padding-top: 66.6666%; }\n  .styles__image___2kKMr.styles__is-16by9___xu_zY {\n    padding-top: 56.25%; }\n  .styles__image___2kKMr.styles__is-2by1___IjLZr {\n    padding-top: 50%; }\n  .styles__image___2kKMr.styles__is-16x16___2eQHI {\n    height: 16px;\n    width: 16px; }\n  .styles__image___2kKMr.styles__is-24x24___QLAup {\n    height: 24px;\n    width: 24px; }\n  .styles__image___2kKMr.styles__is-32x32___3BJpt {\n    height: 32px;\n    width: 32px; }\n  .styles__image___2kKMr.styles__is-48x48___iyi2A {\n    height: 48px;\n    width: 48px; }\n  .styles__image___2kKMr.styles__is-64x64___21u4Z {\n    height: 64px;\n    width: 64px; }\n  .styles__image___2kKMr.styles__is-96x96___1CdZP {\n    height: 96px;\n    width: 96px; }\n  .styles__image___2kKMr.styles__is-128x128___jSNZT {\n    height: 128px;\n    width: 128px; }\n\n.styles__notification___3i7Bk {\n  background-color: whitesmoke;\n  border-radius: 3px;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n  position: relative; }\n  .styles__notification___3i7Bk:not(:last-child) {\n    margin-bottom: 1.5rem; }\n  .styles__notification___3i7Bk a:not(.styles__button___15veZ) {\n    color: currentColor;\n    text-decoration: underline; }\n  .styles__notification___3i7Bk code,\n  .styles__notification___3i7Bk pre {\n    background: white; }\n  .styles__notification___3i7Bk pre code {\n    background: transparent; }\n  .styles__notification___3i7Bk > .styles__delete___Eofxp {\n    position: absolute;\n    right: 0.5em;\n    top: 0.5em; }\n  .styles__notification___3i7Bk .styles__title___2te3V,\n  .styles__notification___3i7Bk .styles__subtitle___2opLu,\n  .styles__notification___3i7Bk .styles__content___39lD8 {\n    color: inherit; }\n  .styles__notification___3i7Bk.styles__is-white___1SLAl {\n    background-color: white;\n    color: #0a0a0a; }\n  .styles__notification___3i7Bk.styles__is-black___qATrq {\n    background-color: #0a0a0a;\n    color: white; }\n  .styles__notification___3i7Bk.styles__is-light___3_Rp5 {\n    background-color: whitesmoke;\n    color: #363636; }\n  .styles__notification___3i7Bk.styles__is-dark___2SGrM {\n    background-color: #363636;\n    color: whitesmoke; }\n  .styles__notification___3i7Bk.styles__is-primary___pfmjM {\n    background-color: #e54747;\n    color: #fff; }\n  .styles__notification___3i7Bk.styles__is-info___ps_7r {\n    background-color: #3273dc;\n    color: #fff; }\n  .styles__notification___3i7Bk.styles__is-success___Ige_l {\n    background-color: #23d160;\n    color: #fff; }\n  .styles__notification___3i7Bk.styles__is-warning___mpL38 {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n  .styles__notification___3i7Bk.styles__is-danger___4A8c9 {\n    background-color: #ff3860;\n    color: #fff; }\n\n.styles__progress___3Vp97 {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%; }\n  .styles__progress___3Vp97:not(:last-child) {\n    margin-bottom: 1.5rem; }\n  .styles__progress___3Vp97::-webkit-progress-bar {\n    background-color: #dbdbdb; }\n  .styles__progress___3Vp97::-webkit-progress-value {\n    background-color: #4a4a4a; }\n  .styles__progress___3Vp97::-moz-progress-bar {\n    background-color: #4a4a4a; }\n  .styles__progress___3Vp97.styles__is-white___1SLAl::-webkit-progress-value {\n    background-color: white; }\n  .styles__progress___3Vp97.styles__is-white___1SLAl::-moz-progress-bar {\n    background-color: white; }\n  .styles__progress___3Vp97.styles__is-black___qATrq::-webkit-progress-value {\n    background-color: #0a0a0a; }\n  .styles__progress___3Vp97.styles__is-black___qATrq::-moz-progress-bar {\n    background-color: #0a0a0a; }\n  .styles__progress___3Vp97.styles__is-light___3_Rp5::-webkit-progress-value {\n    background-color: whitesmoke; }\n  .styles__progress___3Vp97.styles__is-light___3_Rp5::-moz-progress-bar {\n    background-color: whitesmoke; }\n  .styles__progress___3Vp97.styles__is-dark___2SGrM::-webkit-progress-value {\n    background-color: #363636; }\n  .styles__progress___3Vp97.styles__is-dark___2SGrM::-moz-progress-bar {\n    background-color: #363636; }\n  .styles__progress___3Vp97.styles__is-primary___pfmjM::-webkit-progress-value {\n    background-color: #e54747; }\n  .styles__progress___3Vp97.styles__is-primary___pfmjM::-moz-progress-bar {\n    background-color: #e54747; }\n  .styles__progress___3Vp97.styles__is-info___ps_7r::-webkit-progress-value {\n    background-color: #3273dc; }\n  .styles__progress___3Vp97.styles__is-info___ps_7r::-moz-progress-bar {\n    background-color: #3273dc; }\n  .styles__progress___3Vp97.styles__is-success___Ige_l::-webkit-progress-value {\n    background-color: #23d160; }\n  .styles__progress___3Vp97.styles__is-success___Ige_l::-moz-progress-bar {\n    background-color: #23d160; }\n  .styles__progress___3Vp97.styles__is-warning___mpL38::-webkit-progress-value {\n    background-color: #ffdd57; }\n  .styles__progress___3Vp97.styles__is-warning___mpL38::-moz-progress-bar {\n    background-color: #ffdd57; }\n  .styles__progress___3Vp97.styles__is-danger___4A8c9::-webkit-progress-value {\n    background-color: #ff3860; }\n  .styles__progress___3Vp97.styles__is-danger___4A8c9::-moz-progress-bar {\n    background-color: #ff3860; }\n  .styles__progress___3Vp97.styles__is-small___2N8KK {\n    height: 0.75rem; }\n  .styles__progress___3Vp97.styles__is-medium___1bExO {\n    height: 1.25rem; }\n  .styles__progress___3Vp97.styles__is-large___2IqpI {\n    height: 1.5rem; }\n\n.styles__table___c_NVW {\n  background-color: white;\n  color: #363636;\n  margin-bottom: 1.5rem;\n  width: 100%; }\n  .styles__table___c_NVW td,\n  .styles__table___c_NVW th {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top; }\n    .styles__table___c_NVW td.styles__is-narrow___2e2dy,\n    .styles__table___c_NVW th.styles__is-narrow___2e2dy {\n      white-space: nowrap;\n      width: 1%; }\n  .styles__table___c_NVW th {\n    color: #363636;\n    text-align: left; }\n  .styles__table___c_NVW tr:hover {\n    background-color: #fafafa; }\n  .styles__table___c_NVW tr.styles__is-selected___lVwuB {\n    background-color: #e54747;\n    color: #fff; }\n    .styles__table___c_NVW tr.styles__is-selected___lVwuB a,\n    .styles__table___c_NVW tr.styles__is-selected___lVwuB strong {\n      color: currentColor; }\n    .styles__table___c_NVW tr.styles__is-selected___lVwuB td,\n    .styles__table___c_NVW tr.styles__is-selected___lVwuB th {\n      border-color: #fff;\n      color: currentColor; }\n  .styles__table___c_NVW thead td,\n  .styles__table___c_NVW thead th {\n    border-width: 0 0 2px;\n    color: #7a7a7a; }\n  .styles__table___c_NVW tfoot td,\n  .styles__table___c_NVW tfoot th {\n    border-width: 2px 0 0;\n    color: #7a7a7a; }\n  .styles__table___c_NVW tbody tr:last-child td,\n  .styles__table___c_NVW tbody tr:last-child th {\n    border-bottom-width: 0; }\n  .styles__table___c_NVW.styles__is-bordered___2mYQI td,\n  .styles__table___c_NVW.styles__is-bordered___2mYQI th {\n    border-width: 1px; }\n  .styles__table___c_NVW.styles__is-bordered___2mYQI tr:last-child td,\n  .styles__table___c_NVW.styles__is-bordered___2mYQI tr:last-child th {\n    border-bottom-width: 1px; }\n  .styles__table___c_NVW.styles__is-narrow___2e2dy td,\n  .styles__table___c_NVW.styles__is-narrow___2e2dy th {\n    padding: 0.25em 0.5em; }\n  .styles__table___c_NVW.styles__is-striped___ktD3B tbody tr:nth-child(even) {\n    background-color: #fafafa; }\n    .styles__table___c_NVW.styles__is-striped___ktD3B tbody tr:nth-child(even):hover {\n      background-color: whitesmoke; }\n\n.styles__tag___3DiWy {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.875em;\n  padding-right: 0.875em;\n  white-space: nowrap; }\n  .styles__tag___3DiWy .styles__delete___Eofxp {\n    margin-left: 0.25em;\n    margin-right: -0.375em; }\n  .styles__tag___3DiWy.styles__is-white___1SLAl {\n    background-color: white;\n    color: #0a0a0a; }\n  .styles__tag___3DiWy.styles__is-black___qATrq {\n    background-color: #0a0a0a;\n    color: white; }\n  .styles__tag___3DiWy.styles__is-light___3_Rp5 {\n    background-color: whitesmoke;\n    color: #363636; }\n  .styles__tag___3DiWy.styles__is-dark___2SGrM {\n    background-color: #363636;\n    color: whitesmoke; }\n  .styles__tag___3DiWy.styles__is-primary___pfmjM {\n    background-color: #e54747;\n    color: #fff; }\n  .styles__tag___3DiWy.styles__is-info___ps_7r {\n    background-color: #3273dc;\n    color: #fff; }\n  .styles__tag___3DiWy.styles__is-success___Ige_l {\n    background-color: #23d160;\n    color: #fff; }\n  .styles__tag___3DiWy.styles__is-warning___mpL38 {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n  .styles__tag___3DiWy.styles__is-danger___4A8c9 {\n    background-color: #ff3860;\n    color: #fff; }\n  .styles__tag___3DiWy.styles__is-medium___1bExO {\n    font-size: 1rem; }\n  .styles__tag___3DiWy.styles__is-large___2IqpI {\n    font-size: 1.25rem; }\n\n.styles__title___2te3V,\n.styles__subtitle___2opLu {\n  word-break: break-word; }\n  .styles__title___2te3V:not(:last-child),\n  .styles__subtitle___2opLu:not(:last-child) {\n    margin-bottom: 1.5rem; }\n  .styles__title___2te3V em,\n  .styles__title___2te3V span,\n  .styles__subtitle___2opLu em,\n  .styles__subtitle___2opLu span {\n    font-weight: 300; }\n  .styles__title___2te3V strong,\n  .styles__subtitle___2opLu strong {\n    font-weight: 500; }\n  .styles__title___2te3V .styles__tag___3DiWy,\n  .styles__subtitle___2opLu .styles__tag___3DiWy {\n    vertical-align: middle; }\n\n.styles__title___2te3V {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 300;\n  line-height: 1.125; }\n  .styles__title___2te3V strong {\n    color: inherit; }\n  .styles__title___2te3V + .styles__highlight___3sX1- {\n    margin-top: -0.75rem; }\n  .styles__title___2te3V:not(.styles__is-spaced___fZIzW) + .styles__subtitle___2opLu {\n    margin-top: -1.5rem; }\n  .styles__title___2te3V.styles__is-1___3_KU8 {\n    font-size: 3rem; }\n  .styles__title___2te3V.styles__is-2___1djuO {\n    font-size: 2.5rem; }\n  .styles__title___2te3V.styles__is-3___1FyMX {\n    font-size: 2rem; }\n  .styles__title___2te3V.styles__is-4___uvTg4 {\n    font-size: 1.5rem; }\n  .styles__title___2te3V.styles__is-5___3yjko {\n    font-size: 1.25rem; }\n  .styles__title___2te3V.styles__is-6___2OJd4 {\n    font-size: 1rem; }\n\n.styles__subtitle___2opLu {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 300;\n  line-height: 1.25; }\n  .styles__subtitle___2opLu strong {\n    color: #363636; }\n  .styles__subtitle___2opLu:not(.styles__is-spaced___fZIzW) + .styles__title___2te3V {\n    margin-top: -1.5rem; }\n  .styles__subtitle___2opLu.styles__is-1___3_KU8 {\n    font-size: 3rem; }\n  .styles__subtitle___2opLu.styles__is-2___1djuO {\n    font-size: 2.5rem; }\n  .styles__subtitle___2opLu.styles__is-3___1FyMX {\n    font-size: 2rem; }\n  .styles__subtitle___2opLu.styles__is-4___uvTg4 {\n    font-size: 1.5rem; }\n  .styles__subtitle___2opLu.styles__is-5___3yjko {\n    font-size: 1.25rem; }\n  .styles__subtitle___2opLu.styles__is-6___2OJd4 {\n    font-size: 1rem; }\n\n.styles__block___3U14C:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.styles__container___29g2u {\n  position: relative; }\n  @media screen and (min-width: 1000px) {\n    .styles__container___29g2u {\n      margin: 0 auto;\n      max-width: 960px;\n      width: 960px; }\n      .styles__container___29g2u.styles__is-fluid___4iUIR {\n        margin: 0 20px;\n        max-width: none;\n        width: auto; } }\n  @media screen and (min-width: 1192px) {\n    .styles__container___29g2u {\n      max-width: 1152px;\n      width: 1152px; } }\n  @media screen and (min-width: 1384px) {\n    .styles__container___29g2u {\n      max-width: 1344px;\n      width: 1344px; } }\n\n.styles__delete___Eofxp {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1rem;\n  height: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px; }\n  .styles__delete___Eofxp:before, .styles__delete___Eofxp:after {\n    background-color: white;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform-origin: center center; }\n  .styles__delete___Eofxp:before {\n    height: 2px;\n    width: 50%; }\n  .styles__delete___Eofxp:after {\n    height: 50%;\n    width: 2px; }\n  .styles__delete___Eofxp:hover, .styles__delete___Eofxp:focus {\n    background-color: rgba(10, 10, 10, 0.3); }\n  .styles__delete___Eofxp:active {\n    background-color: rgba(10, 10, 10, 0.4); }\n  .styles__delete___Eofxp.styles__is-small___2N8KK {\n    height: 16px;\n    width: 16px; }\n  .styles__delete___Eofxp.styles__is-medium___1bExO {\n    height: 24px;\n    width: 24px; }\n  .styles__delete___Eofxp.styles__is-large___2IqpI {\n    height: 32px;\n    width: 32px; }\n\n.styles__fa___2Gsew {\n  font-size: 21px;\n  text-align: center;\n  vertical-align: top; }\n\n.styles__heading___2RWxa {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase; }\n\n.styles__highlight___3sX1- {\n  font-weight: 400;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0; }\n  .styles__highlight___3sX1-:not(:last-child) {\n    margin-bottom: 1.5rem; }\n  .styles__highlight___3sX1- pre {\n    overflow: auto;\n    max-width: 100%; }\n\n.styles__loader___2e_pf {\n  animation: styles__spinAround___3VumK 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em; }\n\n.styles__number___3eAL- {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top; }\n\n.styles__hero-video___yqhy1 {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  overflow: hidden; }\n  .styles__hero-video___yqhy1 video {\n    left: 50%;\n    min-height: 100%;\n    min-width: 100%;\n    position: absolute;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0); }\n  .styles__hero-video___yqhy1.styles__is-transparent___DFJLf {\n    opacity: 0.3; }\n  @media screen and (max-width: 768px) {\n    .styles__hero-video___yqhy1 {\n      display: none; } }\n\n.styles__hero-buttons___3MayJ {\n  margin-top: 1.5rem; }\n  @media screen and (max-width: 768px) {\n    .styles__hero-buttons___3MayJ .styles__button___15veZ {\n      display: flex; }\n      .styles__hero-buttons___3MayJ .styles__button___15veZ:not(:last-child) {\n        margin-bottom: 0.75rem; } }\n  @media screen and (min-width: 769px), print {\n    .styles__hero-buttons___3MayJ {\n      display: flex;\n      justify-content: center; }\n      .styles__hero-buttons___3MayJ .styles__button___15veZ:not(:last-child) {\n        margin-right: 1.5rem; } }\n\n.styles__hero-head___2_tzA,\n.styles__hero-foot___3ltNT {\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.styles__hero-body___1xipy {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem; }\n  @media screen and (min-width: 1192px) {\n    .styles__hero-body___1xipy {\n      padding-left: 0;\n      padding-right: 0; } }\n\n.styles__hero___1T609 {\n  align-items: stretch;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n  .styles__hero___1T609 .styles__nav___1uOB6 {\n    background: none;\n    box-shadow: 0 1px 0 rgba(219, 219, 219, 0.3); }\n  .styles__hero___1T609 .styles__tabs___30uZb ul {\n    border-bottom: none; }\n  .styles__hero___1T609.styles__is-white___1SLAl {\n    background-color: white;\n    color: #0a0a0a; }\n    .styles__hero___1T609.styles__is-white___1SLAl a:not(.styles__button___15veZ),\n    .styles__hero___1T609.styles__is-white___1SLAl strong {\n      color: inherit; }\n    .styles__hero___1T609.styles__is-white___1SLAl .styles__title___2te3V {\n      color: #0a0a0a; }\n    .styles__hero___1T609.styles__is-white___1SLAl .styles__subtitle___2opLu {\n      color: rgba(10, 10, 10, 0.9); }\n      .styles__hero___1T609.styles__is-white___1SLAl .styles__subtitle___2opLu a:not(.styles__button___15veZ),\n      .styles__hero___1T609.styles__is-white___1SLAl .styles__subtitle___2opLu strong {\n        color: #0a0a0a; }\n    .styles__hero___1T609.styles__is-white___1SLAl .styles__nav___1uOB6 {\n      box-shadow: 0 1px 0 rgba(10, 10, 10, 0.2); }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-white___1SLAl .styles__nav-menu___2vU1z {\n        background-color: white; } }\n    .styles__hero___1T609.styles__is-white___1SLAl a.styles__nav-item___2dPKD,\n    .styles__hero___1T609.styles__is-white___1SLAl .styles__nav-item___2dPKD a:not(.styles__button___15veZ) {\n      color: rgba(10, 10, 10, 0.7); }\n      .styles__hero___1T609.styles__is-white___1SLAl a.styles__nav-item___2dPKD:hover, .styles__hero___1T609.styles__is-white___1SLAl a.styles__nav-item___2dPKD.styles__is-active___10U5U,\n      .styles__hero___1T609.styles__is-white___1SLAl .styles__nav-item___2dPKD a:not(.styles__button___15veZ):hover,\n      .styles__hero___1T609.styles__is-white___1SLAl .styles__nav-item___2dPKD a:not(.styles__button___15veZ).styles__is-active___10U5U {\n        color: #0a0a0a; }\n    .styles__hero___1T609.styles__is-white___1SLAl .styles__tabs___30uZb a {\n      color: #0a0a0a;\n      opacity: 0.9; }\n      .styles__hero___1T609.styles__is-white___1SLAl .styles__tabs___30uZb a:hover {\n        opacity: 1; }\n    .styles__hero___1T609.styles__is-white___1SLAl .styles__tabs___30uZb li.styles__is-active___10U5U a {\n      opacity: 1; }\n    .styles__hero___1T609.styles__is-white___1SLAl .styles__tabs___30uZb.styles__is-boxed___ZEF4l a, .styles__hero___1T609.styles__is-white___1SLAl .styles__tabs___30uZb.styles__is-toggle___3p0sy a {\n      color: #0a0a0a; }\n      .styles__hero___1T609.styles__is-white___1SLAl .styles__tabs___30uZb.styles__is-boxed___ZEF4l a:hover, .styles__hero___1T609.styles__is-white___1SLAl .styles__tabs___30uZb.styles__is-toggle___3p0sy a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n    .styles__hero___1T609.styles__is-white___1SLAl .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-white___1SLAl .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a:hover, .styles__hero___1T609.styles__is-white___1SLAl .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-white___1SLAl .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a:hover {\n      background-color: #0a0a0a;\n      border-color: #0a0a0a;\n      color: white; }\n    .styles__hero___1T609.styles__is-white___1SLAl.styles__is-bold___3LmNs {\n      background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%); }\n      @media screen and (max-width: 768px) {\n        .styles__hero___1T609.styles__is-white___1SLAl.styles__is-bold___3LmNs .styles__nav-menu___2vU1z {\n          background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%); } }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-white___1SLAl .styles__nav-toggle___35uc6 span {\n        background-color: #0a0a0a; }\n      .styles__hero___1T609.styles__is-white___1SLAl .styles__nav-toggle___35uc6:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n      .styles__hero___1T609.styles__is-white___1SLAl .styles__nav-toggle___35uc6.styles__is-active___10U5U span {\n        background-color: #0a0a0a; }\n      .styles__hero___1T609.styles__is-white___1SLAl .styles__nav-menu___2vU1z .styles__nav-item___2dPKD {\n        border-top-color: rgba(10, 10, 10, 0.2); } }\n  .styles__hero___1T609.styles__is-black___qATrq {\n    background-color: #0a0a0a;\n    color: white; }\n    .styles__hero___1T609.styles__is-black___qATrq a:not(.styles__button___15veZ),\n    .styles__hero___1T609.styles__is-black___qATrq strong {\n      color: inherit; }\n    .styles__hero___1T609.styles__is-black___qATrq .styles__title___2te3V {\n      color: white; }\n    .styles__hero___1T609.styles__is-black___qATrq .styles__subtitle___2opLu {\n      color: rgba(255, 255, 255, 0.9); }\n      .styles__hero___1T609.styles__is-black___qATrq .styles__subtitle___2opLu a:not(.styles__button___15veZ),\n      .styles__hero___1T609.styles__is-black___qATrq .styles__subtitle___2opLu strong {\n        color: white; }\n    .styles__hero___1T609.styles__is-black___qATrq .styles__nav___1uOB6 {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-black___qATrq .styles__nav-menu___2vU1z {\n        background-color: #0a0a0a; } }\n    .styles__hero___1T609.styles__is-black___qATrq a.styles__nav-item___2dPKD,\n    .styles__hero___1T609.styles__is-black___qATrq .styles__nav-item___2dPKD a:not(.styles__button___15veZ) {\n      color: rgba(255, 255, 255, 0.7); }\n      .styles__hero___1T609.styles__is-black___qATrq a.styles__nav-item___2dPKD:hover, .styles__hero___1T609.styles__is-black___qATrq a.styles__nav-item___2dPKD.styles__is-active___10U5U,\n      .styles__hero___1T609.styles__is-black___qATrq .styles__nav-item___2dPKD a:not(.styles__button___15veZ):hover,\n      .styles__hero___1T609.styles__is-black___qATrq .styles__nav-item___2dPKD a:not(.styles__button___15veZ).styles__is-active___10U5U {\n        color: white; }\n    .styles__hero___1T609.styles__is-black___qATrq .styles__tabs___30uZb a {\n      color: white;\n      opacity: 0.9; }\n      .styles__hero___1T609.styles__is-black___qATrq .styles__tabs___30uZb a:hover {\n        opacity: 1; }\n    .styles__hero___1T609.styles__is-black___qATrq .styles__tabs___30uZb li.styles__is-active___10U5U a {\n      opacity: 1; }\n    .styles__hero___1T609.styles__is-black___qATrq .styles__tabs___30uZb.styles__is-boxed___ZEF4l a, .styles__hero___1T609.styles__is-black___qATrq .styles__tabs___30uZb.styles__is-toggle___3p0sy a {\n      color: white; }\n      .styles__hero___1T609.styles__is-black___qATrq .styles__tabs___30uZb.styles__is-boxed___ZEF4l a:hover, .styles__hero___1T609.styles__is-black___qATrq .styles__tabs___30uZb.styles__is-toggle___3p0sy a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n    .styles__hero___1T609.styles__is-black___qATrq .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-black___qATrq .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a:hover, .styles__hero___1T609.styles__is-black___qATrq .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-black___qATrq .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a:hover {\n      background-color: white;\n      border-color: white;\n      color: #0a0a0a; }\n    .styles__hero___1T609.styles__is-black___qATrq.styles__is-bold___3LmNs {\n      background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%); }\n      @media screen and (max-width: 768px) {\n        .styles__hero___1T609.styles__is-black___qATrq.styles__is-bold___3LmNs .styles__nav-menu___2vU1z {\n          background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%); } }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-black___qATrq .styles__nav-toggle___35uc6 span {\n        background-color: white; }\n      .styles__hero___1T609.styles__is-black___qATrq .styles__nav-toggle___35uc6:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n      .styles__hero___1T609.styles__is-black___qATrq .styles__nav-toggle___35uc6.styles__is-active___10U5U span {\n        background-color: white; }\n      .styles__hero___1T609.styles__is-black___qATrq .styles__nav-menu___2vU1z .styles__nav-item___2dPKD {\n        border-top-color: rgba(255, 255, 255, 0.2); } }\n  .styles__hero___1T609.styles__is-light___3_Rp5 {\n    background-color: whitesmoke;\n    color: #363636; }\n    .styles__hero___1T609.styles__is-light___3_Rp5 a:not(.styles__button___15veZ),\n    .styles__hero___1T609.styles__is-light___3_Rp5 strong {\n      color: inherit; }\n    .styles__hero___1T609.styles__is-light___3_Rp5 .styles__title___2te3V {\n      color: #363636; }\n    .styles__hero___1T609.styles__is-light___3_Rp5 .styles__subtitle___2opLu {\n      color: rgba(54, 54, 54, 0.9); }\n      .styles__hero___1T609.styles__is-light___3_Rp5 .styles__subtitle___2opLu a:not(.styles__button___15veZ),\n      .styles__hero___1T609.styles__is-light___3_Rp5 .styles__subtitle___2opLu strong {\n        color: #363636; }\n    .styles__hero___1T609.styles__is-light___3_Rp5 .styles__nav___1uOB6 {\n      box-shadow: 0 1px 0 rgba(54, 54, 54, 0.2); }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-light___3_Rp5 .styles__nav-menu___2vU1z {\n        background-color: whitesmoke; } }\n    .styles__hero___1T609.styles__is-light___3_Rp5 a.styles__nav-item___2dPKD,\n    .styles__hero___1T609.styles__is-light___3_Rp5 .styles__nav-item___2dPKD a:not(.styles__button___15veZ) {\n      color: rgba(54, 54, 54, 0.7); }\n      .styles__hero___1T609.styles__is-light___3_Rp5 a.styles__nav-item___2dPKD:hover, .styles__hero___1T609.styles__is-light___3_Rp5 a.styles__nav-item___2dPKD.styles__is-active___10U5U,\n      .styles__hero___1T609.styles__is-light___3_Rp5 .styles__nav-item___2dPKD a:not(.styles__button___15veZ):hover,\n      .styles__hero___1T609.styles__is-light___3_Rp5 .styles__nav-item___2dPKD a:not(.styles__button___15veZ).styles__is-active___10U5U {\n        color: #363636; }\n    .styles__hero___1T609.styles__is-light___3_Rp5 .styles__tabs___30uZb a {\n      color: #363636;\n      opacity: 0.9; }\n      .styles__hero___1T609.styles__is-light___3_Rp5 .styles__tabs___30uZb a:hover {\n        opacity: 1; }\n    .styles__hero___1T609.styles__is-light___3_Rp5 .styles__tabs___30uZb li.styles__is-active___10U5U a {\n      opacity: 1; }\n    .styles__hero___1T609.styles__is-light___3_Rp5 .styles__tabs___30uZb.styles__is-boxed___ZEF4l a, .styles__hero___1T609.styles__is-light___3_Rp5 .styles__tabs___30uZb.styles__is-toggle___3p0sy a {\n      color: #363636; }\n      .styles__hero___1T609.styles__is-light___3_Rp5 .styles__tabs___30uZb.styles__is-boxed___ZEF4l a:hover, .styles__hero___1T609.styles__is-light___3_Rp5 .styles__tabs___30uZb.styles__is-toggle___3p0sy a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n    .styles__hero___1T609.styles__is-light___3_Rp5 .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-light___3_Rp5 .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a:hover, .styles__hero___1T609.styles__is-light___3_Rp5 .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-light___3_Rp5 .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a:hover {\n      background-color: #363636;\n      border-color: #363636;\n      color: whitesmoke; }\n    .styles__hero___1T609.styles__is-light___3_Rp5.styles__is-bold___3LmNs {\n      background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%); }\n      @media screen and (max-width: 768px) {\n        .styles__hero___1T609.styles__is-light___3_Rp5.styles__is-bold___3LmNs .styles__nav-menu___2vU1z {\n          background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%); } }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-light___3_Rp5 .styles__nav-toggle___35uc6 span {\n        background-color: #363636; }\n      .styles__hero___1T609.styles__is-light___3_Rp5 .styles__nav-toggle___35uc6:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n      .styles__hero___1T609.styles__is-light___3_Rp5 .styles__nav-toggle___35uc6.styles__is-active___10U5U span {\n        background-color: #363636; }\n      .styles__hero___1T609.styles__is-light___3_Rp5 .styles__nav-menu___2vU1z .styles__nav-item___2dPKD {\n        border-top-color: rgba(54, 54, 54, 0.2); } }\n  .styles__hero___1T609.styles__is-dark___2SGrM {\n    background-color: #363636;\n    color: whitesmoke; }\n    .styles__hero___1T609.styles__is-dark___2SGrM a:not(.styles__button___15veZ),\n    .styles__hero___1T609.styles__is-dark___2SGrM strong {\n      color: inherit; }\n    .styles__hero___1T609.styles__is-dark___2SGrM .styles__title___2te3V {\n      color: whitesmoke; }\n    .styles__hero___1T609.styles__is-dark___2SGrM .styles__subtitle___2opLu {\n      color: rgba(245, 245, 245, 0.9); }\n      .styles__hero___1T609.styles__is-dark___2SGrM .styles__subtitle___2opLu a:not(.styles__button___15veZ),\n      .styles__hero___1T609.styles__is-dark___2SGrM .styles__subtitle___2opLu strong {\n        color: whitesmoke; }\n    .styles__hero___1T609.styles__is-dark___2SGrM .styles__nav___1uOB6 {\n      box-shadow: 0 1px 0 rgba(245, 245, 245, 0.2); }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-dark___2SGrM .styles__nav-menu___2vU1z {\n        background-color: #363636; } }\n    .styles__hero___1T609.styles__is-dark___2SGrM a.styles__nav-item___2dPKD,\n    .styles__hero___1T609.styles__is-dark___2SGrM .styles__nav-item___2dPKD a:not(.styles__button___15veZ) {\n      color: rgba(245, 245, 245, 0.7); }\n      .styles__hero___1T609.styles__is-dark___2SGrM a.styles__nav-item___2dPKD:hover, .styles__hero___1T609.styles__is-dark___2SGrM a.styles__nav-item___2dPKD.styles__is-active___10U5U,\n      .styles__hero___1T609.styles__is-dark___2SGrM .styles__nav-item___2dPKD a:not(.styles__button___15veZ):hover,\n      .styles__hero___1T609.styles__is-dark___2SGrM .styles__nav-item___2dPKD a:not(.styles__button___15veZ).styles__is-active___10U5U {\n        color: whitesmoke; }\n    .styles__hero___1T609.styles__is-dark___2SGrM .styles__tabs___30uZb a {\n      color: whitesmoke;\n      opacity: 0.9; }\n      .styles__hero___1T609.styles__is-dark___2SGrM .styles__tabs___30uZb a:hover {\n        opacity: 1; }\n    .styles__hero___1T609.styles__is-dark___2SGrM .styles__tabs___30uZb li.styles__is-active___10U5U a {\n      opacity: 1; }\n    .styles__hero___1T609.styles__is-dark___2SGrM .styles__tabs___30uZb.styles__is-boxed___ZEF4l a, .styles__hero___1T609.styles__is-dark___2SGrM .styles__tabs___30uZb.styles__is-toggle___3p0sy a {\n      color: whitesmoke; }\n      .styles__hero___1T609.styles__is-dark___2SGrM .styles__tabs___30uZb.styles__is-boxed___ZEF4l a:hover, .styles__hero___1T609.styles__is-dark___2SGrM .styles__tabs___30uZb.styles__is-toggle___3p0sy a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n    .styles__hero___1T609.styles__is-dark___2SGrM .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-dark___2SGrM .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a:hover, .styles__hero___1T609.styles__is-dark___2SGrM .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-dark___2SGrM .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a:hover {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      color: #363636; }\n    .styles__hero___1T609.styles__is-dark___2SGrM.styles__is-bold___3LmNs {\n      background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%); }\n      @media screen and (max-width: 768px) {\n        .styles__hero___1T609.styles__is-dark___2SGrM.styles__is-bold___3LmNs .styles__nav-menu___2vU1z {\n          background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%); } }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-dark___2SGrM .styles__nav-toggle___35uc6 span {\n        background-color: whitesmoke; }\n      .styles__hero___1T609.styles__is-dark___2SGrM .styles__nav-toggle___35uc6:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n      .styles__hero___1T609.styles__is-dark___2SGrM .styles__nav-toggle___35uc6.styles__is-active___10U5U span {\n        background-color: whitesmoke; }\n      .styles__hero___1T609.styles__is-dark___2SGrM .styles__nav-menu___2vU1z .styles__nav-item___2dPKD {\n        border-top-color: rgba(245, 245, 245, 0.2); } }\n  .styles__hero___1T609.styles__is-primary___pfmjM {\n    background-color: #e54747;\n    color: #fff; }\n    .styles__hero___1T609.styles__is-primary___pfmjM a:not(.styles__button___15veZ),\n    .styles__hero___1T609.styles__is-primary___pfmjM strong {\n      color: inherit; }\n    .styles__hero___1T609.styles__is-primary___pfmjM .styles__title___2te3V {\n      color: #fff; }\n    .styles__hero___1T609.styles__is-primary___pfmjM .styles__subtitle___2opLu {\n      color: rgba(255, 255, 255, 0.9); }\n      .styles__hero___1T609.styles__is-primary___pfmjM .styles__subtitle___2opLu a:not(.styles__button___15veZ),\n      .styles__hero___1T609.styles__is-primary___pfmjM .styles__subtitle___2opLu strong {\n        color: #fff; }\n    .styles__hero___1T609.styles__is-primary___pfmjM .styles__nav___1uOB6 {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-primary___pfmjM .styles__nav-menu___2vU1z {\n        background-color: #e54747; } }\n    .styles__hero___1T609.styles__is-primary___pfmjM a.styles__nav-item___2dPKD,\n    .styles__hero___1T609.styles__is-primary___pfmjM .styles__nav-item___2dPKD a:not(.styles__button___15veZ) {\n      color: rgba(255, 255, 255, 0.7); }\n      .styles__hero___1T609.styles__is-primary___pfmjM a.styles__nav-item___2dPKD:hover, .styles__hero___1T609.styles__is-primary___pfmjM a.styles__nav-item___2dPKD.styles__is-active___10U5U,\n      .styles__hero___1T609.styles__is-primary___pfmjM .styles__nav-item___2dPKD a:not(.styles__button___15veZ):hover,\n      .styles__hero___1T609.styles__is-primary___pfmjM .styles__nav-item___2dPKD a:not(.styles__button___15veZ).styles__is-active___10U5U {\n        color: #fff; }\n    .styles__hero___1T609.styles__is-primary___pfmjM .styles__tabs___30uZb a {\n      color: #fff;\n      opacity: 0.9; }\n      .styles__hero___1T609.styles__is-primary___pfmjM .styles__tabs___30uZb a:hover {\n        opacity: 1; }\n    .styles__hero___1T609.styles__is-primary___pfmjM .styles__tabs___30uZb li.styles__is-active___10U5U a {\n      opacity: 1; }\n    .styles__hero___1T609.styles__is-primary___pfmjM .styles__tabs___30uZb.styles__is-boxed___ZEF4l a, .styles__hero___1T609.styles__is-primary___pfmjM .styles__tabs___30uZb.styles__is-toggle___3p0sy a {\n      color: #fff; }\n      .styles__hero___1T609.styles__is-primary___pfmjM .styles__tabs___30uZb.styles__is-boxed___ZEF4l a:hover, .styles__hero___1T609.styles__is-primary___pfmjM .styles__tabs___30uZb.styles__is-toggle___3p0sy a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n    .styles__hero___1T609.styles__is-primary___pfmjM .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-primary___pfmjM .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a:hover, .styles__hero___1T609.styles__is-primary___pfmjM .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-primary___pfmjM .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #e54747; }\n    .styles__hero___1T609.styles__is-primary___pfmjM.styles__is-bold___3LmNs {\n      background-image: linear-gradient(141deg, #e71236 0%, #e54747 71%, #ed7159 100%); }\n      @media screen and (max-width: 768px) {\n        .styles__hero___1T609.styles__is-primary___pfmjM.styles__is-bold___3LmNs .styles__nav-menu___2vU1z {\n          background-image: linear-gradient(141deg, #e71236 0%, #e54747 71%, #ed7159 100%); } }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-primary___pfmjM .styles__nav-toggle___35uc6 span {\n        background-color: #fff; }\n      .styles__hero___1T609.styles__is-primary___pfmjM .styles__nav-toggle___35uc6:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n      .styles__hero___1T609.styles__is-primary___pfmjM .styles__nav-toggle___35uc6.styles__is-active___10U5U span {\n        background-color: #fff; }\n      .styles__hero___1T609.styles__is-primary___pfmjM .styles__nav-menu___2vU1z .styles__nav-item___2dPKD {\n        border-top-color: rgba(255, 255, 255, 0.2); } }\n  .styles__hero___1T609.styles__is-info___ps_7r {\n    background-color: #3273dc;\n    color: #fff; }\n    .styles__hero___1T609.styles__is-info___ps_7r a:not(.styles__button___15veZ),\n    .styles__hero___1T609.styles__is-info___ps_7r strong {\n      color: inherit; }\n    .styles__hero___1T609.styles__is-info___ps_7r .styles__title___2te3V {\n      color: #fff; }\n    .styles__hero___1T609.styles__is-info___ps_7r .styles__subtitle___2opLu {\n      color: rgba(255, 255, 255, 0.9); }\n      .styles__hero___1T609.styles__is-info___ps_7r .styles__subtitle___2opLu a:not(.styles__button___15veZ),\n      .styles__hero___1T609.styles__is-info___ps_7r .styles__subtitle___2opLu strong {\n        color: #fff; }\n    .styles__hero___1T609.styles__is-info___ps_7r .styles__nav___1uOB6 {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-info___ps_7r .styles__nav-menu___2vU1z {\n        background-color: #3273dc; } }\n    .styles__hero___1T609.styles__is-info___ps_7r a.styles__nav-item___2dPKD,\n    .styles__hero___1T609.styles__is-info___ps_7r .styles__nav-item___2dPKD a:not(.styles__button___15veZ) {\n      color: rgba(255, 255, 255, 0.7); }\n      .styles__hero___1T609.styles__is-info___ps_7r a.styles__nav-item___2dPKD:hover, .styles__hero___1T609.styles__is-info___ps_7r a.styles__nav-item___2dPKD.styles__is-active___10U5U,\n      .styles__hero___1T609.styles__is-info___ps_7r .styles__nav-item___2dPKD a:not(.styles__button___15veZ):hover,\n      .styles__hero___1T609.styles__is-info___ps_7r .styles__nav-item___2dPKD a:not(.styles__button___15veZ).styles__is-active___10U5U {\n        color: #fff; }\n    .styles__hero___1T609.styles__is-info___ps_7r .styles__tabs___30uZb a {\n      color: #fff;\n      opacity: 0.9; }\n      .styles__hero___1T609.styles__is-info___ps_7r .styles__tabs___30uZb a:hover {\n        opacity: 1; }\n    .styles__hero___1T609.styles__is-info___ps_7r .styles__tabs___30uZb li.styles__is-active___10U5U a {\n      opacity: 1; }\n    .styles__hero___1T609.styles__is-info___ps_7r .styles__tabs___30uZb.styles__is-boxed___ZEF4l a, .styles__hero___1T609.styles__is-info___ps_7r .styles__tabs___30uZb.styles__is-toggle___3p0sy a {\n      color: #fff; }\n      .styles__hero___1T609.styles__is-info___ps_7r .styles__tabs___30uZb.styles__is-boxed___ZEF4l a:hover, .styles__hero___1T609.styles__is-info___ps_7r .styles__tabs___30uZb.styles__is-toggle___3p0sy a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n    .styles__hero___1T609.styles__is-info___ps_7r .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-info___ps_7r .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a:hover, .styles__hero___1T609.styles__is-info___ps_7r .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-info___ps_7r .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #3273dc; }\n    .styles__hero___1T609.styles__is-info___ps_7r.styles__is-bold___3LmNs {\n      background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%); }\n      @media screen and (max-width: 768px) {\n        .styles__hero___1T609.styles__is-info___ps_7r.styles__is-bold___3LmNs .styles__nav-menu___2vU1z {\n          background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%); } }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-info___ps_7r .styles__nav-toggle___35uc6 span {\n        background-color: #fff; }\n      .styles__hero___1T609.styles__is-info___ps_7r .styles__nav-toggle___35uc6:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n      .styles__hero___1T609.styles__is-info___ps_7r .styles__nav-toggle___35uc6.styles__is-active___10U5U span {\n        background-color: #fff; }\n      .styles__hero___1T609.styles__is-info___ps_7r .styles__nav-menu___2vU1z .styles__nav-item___2dPKD {\n        border-top-color: rgba(255, 255, 255, 0.2); } }\n  .styles__hero___1T609.styles__is-success___Ige_l {\n    background-color: #23d160;\n    color: #fff; }\n    .styles__hero___1T609.styles__is-success___Ige_l a:not(.styles__button___15veZ),\n    .styles__hero___1T609.styles__is-success___Ige_l strong {\n      color: inherit; }\n    .styles__hero___1T609.styles__is-success___Ige_l .styles__title___2te3V {\n      color: #fff; }\n    .styles__hero___1T609.styles__is-success___Ige_l .styles__subtitle___2opLu {\n      color: rgba(255, 255, 255, 0.9); }\n      .styles__hero___1T609.styles__is-success___Ige_l .styles__subtitle___2opLu a:not(.styles__button___15veZ),\n      .styles__hero___1T609.styles__is-success___Ige_l .styles__subtitle___2opLu strong {\n        color: #fff; }\n    .styles__hero___1T609.styles__is-success___Ige_l .styles__nav___1uOB6 {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-success___Ige_l .styles__nav-menu___2vU1z {\n        background-color: #23d160; } }\n    .styles__hero___1T609.styles__is-success___Ige_l a.styles__nav-item___2dPKD,\n    .styles__hero___1T609.styles__is-success___Ige_l .styles__nav-item___2dPKD a:not(.styles__button___15veZ) {\n      color: rgba(255, 255, 255, 0.7); }\n      .styles__hero___1T609.styles__is-success___Ige_l a.styles__nav-item___2dPKD:hover, .styles__hero___1T609.styles__is-success___Ige_l a.styles__nav-item___2dPKD.styles__is-active___10U5U,\n      .styles__hero___1T609.styles__is-success___Ige_l .styles__nav-item___2dPKD a:not(.styles__button___15veZ):hover,\n      .styles__hero___1T609.styles__is-success___Ige_l .styles__nav-item___2dPKD a:not(.styles__button___15veZ).styles__is-active___10U5U {\n        color: #fff; }\n    .styles__hero___1T609.styles__is-success___Ige_l .styles__tabs___30uZb a {\n      color: #fff;\n      opacity: 0.9; }\n      .styles__hero___1T609.styles__is-success___Ige_l .styles__tabs___30uZb a:hover {\n        opacity: 1; }\n    .styles__hero___1T609.styles__is-success___Ige_l .styles__tabs___30uZb li.styles__is-active___10U5U a {\n      opacity: 1; }\n    .styles__hero___1T609.styles__is-success___Ige_l .styles__tabs___30uZb.styles__is-boxed___ZEF4l a, .styles__hero___1T609.styles__is-success___Ige_l .styles__tabs___30uZb.styles__is-toggle___3p0sy a {\n      color: #fff; }\n      .styles__hero___1T609.styles__is-success___Ige_l .styles__tabs___30uZb.styles__is-boxed___ZEF4l a:hover, .styles__hero___1T609.styles__is-success___Ige_l .styles__tabs___30uZb.styles__is-toggle___3p0sy a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n    .styles__hero___1T609.styles__is-success___Ige_l .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-success___Ige_l .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a:hover, .styles__hero___1T609.styles__is-success___Ige_l .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-success___Ige_l .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #23d160; }\n    .styles__hero___1T609.styles__is-success___Ige_l.styles__is-bold___3LmNs {\n      background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%); }\n      @media screen and (max-width: 768px) {\n        .styles__hero___1T609.styles__is-success___Ige_l.styles__is-bold___3LmNs .styles__nav-menu___2vU1z {\n          background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%); } }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-success___Ige_l .styles__nav-toggle___35uc6 span {\n        background-color: #fff; }\n      .styles__hero___1T609.styles__is-success___Ige_l .styles__nav-toggle___35uc6:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n      .styles__hero___1T609.styles__is-success___Ige_l .styles__nav-toggle___35uc6.styles__is-active___10U5U span {\n        background-color: #fff; }\n      .styles__hero___1T609.styles__is-success___Ige_l .styles__nav-menu___2vU1z .styles__nav-item___2dPKD {\n        border-top-color: rgba(255, 255, 255, 0.2); } }\n  .styles__hero___1T609.styles__is-warning___mpL38 {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n    .styles__hero___1T609.styles__is-warning___mpL38 a:not(.styles__button___15veZ),\n    .styles__hero___1T609.styles__is-warning___mpL38 strong {\n      color: inherit; }\n    .styles__hero___1T609.styles__is-warning___mpL38 .styles__title___2te3V {\n      color: rgba(0, 0, 0, 0.7); }\n    .styles__hero___1T609.styles__is-warning___mpL38 .styles__subtitle___2opLu {\n      color: rgba(0, 0, 0, 0.9); }\n      .styles__hero___1T609.styles__is-warning___mpL38 .styles__subtitle___2opLu a:not(.styles__button___15veZ),\n      .styles__hero___1T609.styles__is-warning___mpL38 .styles__subtitle___2opLu strong {\n        color: rgba(0, 0, 0, 0.7); }\n    .styles__hero___1T609.styles__is-warning___mpL38 .styles__nav___1uOB6 {\n      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2); }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-warning___mpL38 .styles__nav-menu___2vU1z {\n        background-color: #ffdd57; } }\n    .styles__hero___1T609.styles__is-warning___mpL38 a.styles__nav-item___2dPKD,\n    .styles__hero___1T609.styles__is-warning___mpL38 .styles__nav-item___2dPKD a:not(.styles__button___15veZ) {\n      color: rgba(0, 0, 0, 0.7); }\n      .styles__hero___1T609.styles__is-warning___mpL38 a.styles__nav-item___2dPKD:hover, .styles__hero___1T609.styles__is-warning___mpL38 a.styles__nav-item___2dPKD.styles__is-active___10U5U,\n      .styles__hero___1T609.styles__is-warning___mpL38 .styles__nav-item___2dPKD a:not(.styles__button___15veZ):hover,\n      .styles__hero___1T609.styles__is-warning___mpL38 .styles__nav-item___2dPKD a:not(.styles__button___15veZ).styles__is-active___10U5U {\n        color: rgba(0, 0, 0, 0.7); }\n    .styles__hero___1T609.styles__is-warning___mpL38 .styles__tabs___30uZb a {\n      color: rgba(0, 0, 0, 0.7);\n      opacity: 0.9; }\n      .styles__hero___1T609.styles__is-warning___mpL38 .styles__tabs___30uZb a:hover {\n        opacity: 1; }\n    .styles__hero___1T609.styles__is-warning___mpL38 .styles__tabs___30uZb li.styles__is-active___10U5U a {\n      opacity: 1; }\n    .styles__hero___1T609.styles__is-warning___mpL38 .styles__tabs___30uZb.styles__is-boxed___ZEF4l a, .styles__hero___1T609.styles__is-warning___mpL38 .styles__tabs___30uZb.styles__is-toggle___3p0sy a {\n      color: rgba(0, 0, 0, 0.7); }\n      .styles__hero___1T609.styles__is-warning___mpL38 .styles__tabs___30uZb.styles__is-boxed___ZEF4l a:hover, .styles__hero___1T609.styles__is-warning___mpL38 .styles__tabs___30uZb.styles__is-toggle___3p0sy a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n    .styles__hero___1T609.styles__is-warning___mpL38 .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-warning___mpL38 .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a:hover, .styles__hero___1T609.styles__is-warning___mpL38 .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-warning___mpL38 .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a:hover {\n      background-color: rgba(0, 0, 0, 0.7);\n      border-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57; }\n    .styles__hero___1T609.styles__is-warning___mpL38.styles__is-bold___3LmNs {\n      background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%); }\n      @media screen and (max-width: 768px) {\n        .styles__hero___1T609.styles__is-warning___mpL38.styles__is-bold___3LmNs .styles__nav-menu___2vU1z {\n          background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%); } }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-warning___mpL38 .styles__nav-toggle___35uc6 span {\n        background-color: rgba(0, 0, 0, 0.7); }\n      .styles__hero___1T609.styles__is-warning___mpL38 .styles__nav-toggle___35uc6:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n      .styles__hero___1T609.styles__is-warning___mpL38 .styles__nav-toggle___35uc6.styles__is-active___10U5U span {\n        background-color: rgba(0, 0, 0, 0.7); }\n      .styles__hero___1T609.styles__is-warning___mpL38 .styles__nav-menu___2vU1z .styles__nav-item___2dPKD {\n        border-top-color: rgba(0, 0, 0, 0.2); } }\n  .styles__hero___1T609.styles__is-danger___4A8c9 {\n    background-color: #ff3860;\n    color: #fff; }\n    .styles__hero___1T609.styles__is-danger___4A8c9 a:not(.styles__button___15veZ),\n    .styles__hero___1T609.styles__is-danger___4A8c9 strong {\n      color: inherit; }\n    .styles__hero___1T609.styles__is-danger___4A8c9 .styles__title___2te3V {\n      color: #fff; }\n    .styles__hero___1T609.styles__is-danger___4A8c9 .styles__subtitle___2opLu {\n      color: rgba(255, 255, 255, 0.9); }\n      .styles__hero___1T609.styles__is-danger___4A8c9 .styles__subtitle___2opLu a:not(.styles__button___15veZ),\n      .styles__hero___1T609.styles__is-danger___4A8c9 .styles__subtitle___2opLu strong {\n        color: #fff; }\n    .styles__hero___1T609.styles__is-danger___4A8c9 .styles__nav___1uOB6 {\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-danger___4A8c9 .styles__nav-menu___2vU1z {\n        background-color: #ff3860; } }\n    .styles__hero___1T609.styles__is-danger___4A8c9 a.styles__nav-item___2dPKD,\n    .styles__hero___1T609.styles__is-danger___4A8c9 .styles__nav-item___2dPKD a:not(.styles__button___15veZ) {\n      color: rgba(255, 255, 255, 0.7); }\n      .styles__hero___1T609.styles__is-danger___4A8c9 a.styles__nav-item___2dPKD:hover, .styles__hero___1T609.styles__is-danger___4A8c9 a.styles__nav-item___2dPKD.styles__is-active___10U5U,\n      .styles__hero___1T609.styles__is-danger___4A8c9 .styles__nav-item___2dPKD a:not(.styles__button___15veZ):hover,\n      .styles__hero___1T609.styles__is-danger___4A8c9 .styles__nav-item___2dPKD a:not(.styles__button___15veZ).styles__is-active___10U5U {\n        color: #fff; }\n    .styles__hero___1T609.styles__is-danger___4A8c9 .styles__tabs___30uZb a {\n      color: #fff;\n      opacity: 0.9; }\n      .styles__hero___1T609.styles__is-danger___4A8c9 .styles__tabs___30uZb a:hover {\n        opacity: 1; }\n    .styles__hero___1T609.styles__is-danger___4A8c9 .styles__tabs___30uZb li.styles__is-active___10U5U a {\n      opacity: 1; }\n    .styles__hero___1T609.styles__is-danger___4A8c9 .styles__tabs___30uZb.styles__is-boxed___ZEF4l a, .styles__hero___1T609.styles__is-danger___4A8c9 .styles__tabs___30uZb.styles__is-toggle___3p0sy a {\n      color: #fff; }\n      .styles__hero___1T609.styles__is-danger___4A8c9 .styles__tabs___30uZb.styles__is-boxed___ZEF4l a:hover, .styles__hero___1T609.styles__is-danger___4A8c9 .styles__tabs___30uZb.styles__is-toggle___3p0sy a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n    .styles__hero___1T609.styles__is-danger___4A8c9 .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-danger___4A8c9 .styles__tabs___30uZb.styles__is-boxed___ZEF4l li.styles__is-active___10U5U a:hover, .styles__hero___1T609.styles__is-danger___4A8c9 .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a, .styles__hero___1T609.styles__is-danger___4A8c9 .styles__tabs___30uZb.styles__is-toggle___3p0sy li.styles__is-active___10U5U a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #ff3860; }\n    .styles__hero___1T609.styles__is-danger___4A8c9.styles__is-bold___3LmNs {\n      background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%); }\n      @media screen and (max-width: 768px) {\n        .styles__hero___1T609.styles__is-danger___4A8c9.styles__is-bold___3LmNs .styles__nav-menu___2vU1z {\n          background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%); } }\n    @media screen and (max-width: 768px) {\n      .styles__hero___1T609.styles__is-danger___4A8c9 .styles__nav-toggle___35uc6 span {\n        background-color: #fff; }\n      .styles__hero___1T609.styles__is-danger___4A8c9 .styles__nav-toggle___35uc6:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n      .styles__hero___1T609.styles__is-danger___4A8c9 .styles__nav-toggle___35uc6.styles__is-active___10U5U span {\n        background-color: #fff; }\n      .styles__hero___1T609.styles__is-danger___4A8c9 .styles__nav-menu___2vU1z .styles__nav-item___2dPKD {\n        border-top-color: rgba(255, 255, 255, 0.2); } }\n  @media screen and (min-width: 769px), print {\n    .styles__hero___1T609.styles__is-medium___1bExO .styles__hero-body___1xipy {\n      padding-bottom: 9rem;\n      padding-top: 9rem; } }\n  @media screen and (min-width: 769px), print {\n    .styles__hero___1T609.styles__is-large___2IqpI .styles__hero-body___1xipy {\n      padding-bottom: 18rem;\n      padding-top: 18rem; } }\n  .styles__hero___1T609.styles__is-fullheight___3tA1A {\n    min-height: 100vh; }\n    .styles__hero___1T609.styles__is-fullheight___3tA1A .styles__hero-body___1xipy {\n      align-items: center;\n      display: flex; }\n      .styles__hero___1T609.styles__is-fullheight___3tA1A .styles__hero-body___1xipy > .styles__container___29g2u {\n        flex-grow: 1;\n        flex-shrink: 1; }\n\n.styles__section___27Uhx {\n  background-color: white;\n  padding: 3rem 1.5rem; }\n  @media screen and (min-width: 1000px) {\n    .styles__section___27Uhx.styles__is-medium___1bExO {\n      padding: 9rem 1.5rem; }\n    .styles__section___27Uhx.styles__is-large___2IqpI {\n      padding: 18rem 1.5rem; } }\n\n.styles__footer___1HLJ- {\n  background-color: whitesmoke;\n  padding: 3rem 1.5rem 6rem; }\n\n.styles__annotation-mark___1SUZq {\n  background-color: #e54747;\n  cursor: pointer;\n  border-radius: 5px; }\n\n.styles__annotation-panel___37iiJ {\n  /*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */\n  font-size: 16px;\n  text-rendering: optimizeLegibility;\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  color: #4a4a4a;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  overflow-y: auto;\n  position: fixed;\n  background: white;\n  height: 100%;\n  width: 290px;\n  right: 0;\n  top: 0;\n  box-shadow: -3px 0px 10px 0px rgba(10, 10, 10, 0.1);\n  transition: right .5s, opacity .4s; }\n  .styles__annotation-panel___37iiJ html,\n  .styles__annotation-panel___37iiJ body,\n  .styles__annotation-panel___37iiJ p,\n  .styles__annotation-panel___37iiJ ol,\n  .styles__annotation-panel___37iiJ ul,\n  .styles__annotation-panel___37iiJ li,\n  .styles__annotation-panel___37iiJ dl,\n  .styles__annotation-panel___37iiJ dt,\n  .styles__annotation-panel___37iiJ dd,\n  .styles__annotation-panel___37iiJ blockquote,\n  .styles__annotation-panel___37iiJ figure,\n  .styles__annotation-panel___37iiJ fieldset,\n  .styles__annotation-panel___37iiJ legend,\n  .styles__annotation-panel___37iiJ textarea,\n  .styles__annotation-panel___37iiJ pre,\n  .styles__annotation-panel___37iiJ iframe,\n  .styles__annotation-panel___37iiJ hr,\n  .styles__annotation-panel___37iiJ h1,\n  .styles__annotation-panel___37iiJ h2,\n  .styles__annotation-panel___37iiJ h3,\n  .styles__annotation-panel___37iiJ h4,\n  .styles__annotation-panel___37iiJ h5,\n  .styles__annotation-panel___37iiJ h6 {\n    margin: 0;\n    padding: 0; }\n  .styles__annotation-panel___37iiJ h1,\n  .styles__annotation-panel___37iiJ h2,\n  .styles__annotation-panel___37iiJ h3,\n  .styles__annotation-panel___37iiJ h4,\n  .styles__annotation-panel___37iiJ h5,\n  .styles__annotation-panel___37iiJ h6 {\n    font-size: 100%;\n    font-weight: normal; }\n  .styles__annotation-panel___37iiJ ul {\n    list-style: none; }\n  .styles__annotation-panel___37iiJ button,\n  .styles__annotation-panel___37iiJ input,\n  .styles__annotation-panel___37iiJ select,\n  .styles__annotation-panel___37iiJ textarea {\n    margin: 0; }\n  .styles__annotation-panel___37iiJ html {\n    box-sizing: border-box; }\n  .styles__annotation-panel___37iiJ * {\n    box-sizing: inherit; }\n    .styles__annotation-panel___37iiJ *:before, .styles__annotation-panel___37iiJ *:after {\n      box-sizing: inherit; }\n  .styles__annotation-panel___37iiJ img,\n  .styles__annotation-panel___37iiJ embed,\n  .styles__annotation-panel___37iiJ object,\n  .styles__annotation-panel___37iiJ audio,\n  .styles__annotation-panel___37iiJ video {\n    height: auto;\n    max-width: 100%; }\n  .styles__annotation-panel___37iiJ iframe {\n    border: 0; }\n  .styles__annotation-panel___37iiJ table {\n    border-collapse: collapse;\n    border-spacing: 0; }\n  .styles__annotation-panel___37iiJ td,\n  .styles__annotation-panel___37iiJ th {\n    padding: 0;\n    text-align: left; }\n  .styles__annotation-panel___37iiJ html {\n    background-color: #fff;\n    font-size: 16px;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    min-width: 300px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    text-rendering: optimizeLegibility; }\n  .styles__annotation-panel___37iiJ article,\n  .styles__annotation-panel___37iiJ aside,\n  .styles__annotation-panel___37iiJ figure,\n  .styles__annotation-panel___37iiJ footer,\n  .styles__annotation-panel___37iiJ header,\n  .styles__annotation-panel___37iiJ hgroup,\n  .styles__annotation-panel___37iiJ section {\n    display: block; }\n  .styles__annotation-panel___37iiJ body,\n  .styles__annotation-panel___37iiJ button,\n  .styles__annotation-panel___37iiJ input,\n  .styles__annotation-panel___37iiJ select,\n  .styles__annotation-panel___37iiJ textarea {\n    font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\n  .styles__annotation-panel___37iiJ code,\n  .styles__annotation-panel___37iiJ pre {\n    -moz-osx-font-smoothing: auto;\n    -webkit-font-smoothing: auto;\n    font-family: monospace; }\n  .styles__annotation-panel___37iiJ body {\n    color: #4a4a4a;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5; }\n  .styles__annotation-panel___37iiJ a {\n    color: #e54747;\n    cursor: pointer;\n    text-decoration: none;\n    transition: none 86ms ease-out; }\n    .styles__annotation-panel___37iiJ a:hover {\n      color: #363636; }\n  .styles__annotation-panel___37iiJ code {\n    background-color: whitesmoke;\n    color: #ff3860;\n    font-size: 0.8em;\n    font-weight: normal;\n    padding: 0.25em 0.5em 0.25em; }\n  .styles__annotation-panel___37iiJ hr {\n    background-color: #dbdbdb;\n    border: none;\n    display: block;\n    height: 1px;\n    margin: 1.5rem 0; }\n  .styles__annotation-panel___37iiJ img {\n    max-width: 100%; }\n  .styles__annotation-panel___37iiJ input[type=\"checkbox\"],\n  .styles__annotation-panel___37iiJ input[type=\"radio\"] {\n    vertical-align: baseline; }\n  .styles__annotation-panel___37iiJ small {\n    font-size: 0.8em; }\n  .styles__annotation-panel___37iiJ span {\n    font-style: inherit;\n    font-weight: inherit; }\n  .styles__annotation-panel___37iiJ strong {\n    color: #363636;\n    font-weight: 700; }\n  .styles__annotation-panel___37iiJ pre {\n    background-color: whitesmoke;\n    color: #4a4a4a;\n    font-size: 0.8em;\n    white-space: pre;\n    word-wrap: normal; }\n    .styles__annotation-panel___37iiJ pre code {\n      -webkit-overflow-scrolling: touch;\n      background: none;\n      color: inherit;\n      display: block;\n      font-size: 1em;\n      overflow-x: auto;\n      padding: 1.25rem 1.5rem; }\n  .styles__annotation-panel___37iiJ table {\n    width: 100%; }\n    .styles__annotation-panel___37iiJ table td,\n    .styles__annotation-panel___37iiJ table th {\n      text-align: left;\n      vertical-align: top; }\n    .styles__annotation-panel___37iiJ table th {\n      color: #363636; }\n  .styles__annotation-panel___37iiJ .styles__is-block___3UkmX {\n    display: block; }\n  @media screen and (max-width: 768px) {\n    .styles__annotation-panel___37iiJ .styles__is-block-mobile___2GhrD {\n      display: block !important; } }\n  @media screen and (min-width: 769px), print {\n    .styles__annotation-panel___37iiJ .styles__is-block-tablet___29BSb {\n      display: block !important; } }\n  @media screen and (min-width: 769px) and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-block-tablet-only___2mzA0 {\n      display: block !important; } }\n  @media screen and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-block-touch___2EAhY {\n      display: block !important; } }\n  @media screen and (min-width: 1000px) {\n    .styles__annotation-panel___37iiJ .styles__is-block-desktop___39GtE {\n      display: block !important; } }\n  @media screen and (min-width: 1000px) and (max-width: 1191px) {\n    .styles__annotation-panel___37iiJ .styles__is-block-desktop-only___2xOBg {\n      display: block !important; } }\n  @media screen and (min-width: 1192px) {\n    .styles__annotation-panel___37iiJ .styles__is-block-widescreen___10tA8 {\n      display: block !important; } }\n  .styles__annotation-panel___37iiJ .styles__is-flex___2AIJm {\n    display: flex; }\n  @media screen and (max-width: 768px) {\n    .styles__annotation-panel___37iiJ .styles__is-flex-mobile___uTNgk {\n      display: flex !important; } }\n  @media screen and (min-width: 769px), print {\n    .styles__annotation-panel___37iiJ .styles__is-flex-tablet___1Twes {\n      display: flex !important; } }\n  @media screen and (min-width: 769px) and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-flex-tablet-only___2lLen {\n      display: flex !important; } }\n  @media screen and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-flex-touch___1Z5rA {\n      display: flex !important; } }\n  @media screen and (min-width: 1000px) {\n    .styles__annotation-panel___37iiJ .styles__is-flex-desktop___1u6r5 {\n      display: flex !important; } }\n  @media screen and (min-width: 1000px) and (max-width: 1191px) {\n    .styles__annotation-panel___37iiJ .styles__is-flex-desktop-only___38aPa {\n      display: flex !important; } }\n  @media screen and (min-width: 1192px) {\n    .styles__annotation-panel___37iiJ .styles__is-flex-widescreen___LRw6h {\n      display: flex !important; } }\n  .styles__annotation-panel___37iiJ .styles__is-inline___1KWzu {\n    display: inline; }\n  @media screen and (max-width: 768px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-mobile___22RQI {\n      display: inline !important; } }\n  @media screen and (min-width: 769px), print {\n    .styles__annotation-panel___37iiJ .styles__is-inline-tablet___1K6wL {\n      display: inline !important; } }\n  @media screen and (min-width: 769px) and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-tablet-only___1ylyr {\n      display: inline !important; } }\n  @media screen and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-touch___3lbov {\n      display: inline !important; } }\n  @media screen and (min-width: 1000px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-desktop___3zQY- {\n      display: inline !important; } }\n  @media screen and (min-width: 1000px) and (max-width: 1191px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-desktop-only___1Phih {\n      display: inline !important; } }\n  @media screen and (min-width: 1192px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-widescreen___36eOH {\n      display: inline !important; } }\n  .styles__annotation-panel___37iiJ .styles__is-inline-block___-vlwj {\n    display: inline-block; }\n  @media screen and (max-width: 768px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-block-mobile___36CjM {\n      display: inline-block !important; } }\n  @media screen and (min-width: 769px), print {\n    .styles__annotation-panel___37iiJ .styles__is-inline-block-tablet___uzbt5 {\n      display: inline-block !important; } }\n  @media screen and (min-width: 769px) and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-block-tablet-only___2Fjtf {\n      display: inline-block !important; } }\n  @media screen and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-block-touch___3_I_c {\n      display: inline-block !important; } }\n  @media screen and (min-width: 1000px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-block-desktop___2OFM6 {\n      display: inline-block !important; } }\n  @media screen and (min-width: 1000px) and (max-width: 1191px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-block-desktop-only___2d_dg {\n      display: inline-block !important; } }\n  @media screen and (min-width: 1192px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-block-widescreen___2bC7I {\n      display: inline-block !important; } }\n  .styles__annotation-panel___37iiJ .styles__is-inline-flex___wf7ac {\n    display: inline-flex; }\n  @media screen and (max-width: 768px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-flex-mobile___3HUHL {\n      display: inline-flex !important; } }\n  @media screen and (min-width: 769px), print {\n    .styles__annotation-panel___37iiJ .styles__is-inline-flex-tablet___XJT3j {\n      display: inline-flex !important; } }\n  @media screen and (min-width: 769px) and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-flex-tablet-only___7quEU {\n      display: inline-flex !important; } }\n  @media screen and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-flex-touch___3KnWt {\n      display: inline-flex !important; } }\n  @media screen and (min-width: 1000px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-flex-desktop___1Erp8 {\n      display: inline-flex !important; } }\n  @media screen and (min-width: 1000px) and (max-width: 1191px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-flex-desktop-only___3bJKF {\n      display: inline-flex !important; } }\n  @media screen and (min-width: 1192px) {\n    .styles__annotation-panel___37iiJ .styles__is-inline-flex-widescreen___3FFTF {\n      display: inline-flex !important; } }\n  .styles__annotation-panel___37iiJ .styles__is-clearfix___3D1L7:after {\n    clear: both;\n    content: \" \";\n    display: table; }\n  .styles__annotation-panel___37iiJ .styles__is-pulled-left___1VKAe {\n    float: left; }\n  .styles__annotation-panel___37iiJ .styles__is-pulled-right___2cgv_ {\n    float: right; }\n  .styles__annotation-panel___37iiJ .styles__is-clipped___1nE9T {\n    overflow: hidden !important; }\n  .styles__annotation-panel___37iiJ .styles__is-overlay___12rR0 {\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  .styles__annotation-panel___37iiJ .styles__has-text-centered___21-HS {\n    text-align: center; }\n  .styles__annotation-panel___37iiJ .styles__has-text-left___2S2zX {\n    text-align: left; }\n  .styles__annotation-panel___37iiJ .styles__has-text-right___B6Mxd {\n    text-align: right; }\n  .styles__annotation-panel___37iiJ .styles__has-text-white___2Xssf {\n    color: white; }\n  .styles__annotation-panel___37iiJ a.styles__has-text-white___2Xssf:hover, .styles__annotation-panel___37iiJ a.styles__has-text-white___2Xssf:focus {\n    color: #e6e6e6; }\n  .styles__annotation-panel___37iiJ .styles__has-text-black___1g36S {\n    color: #0a0a0a; }\n  .styles__annotation-panel___37iiJ a.styles__has-text-black___1g36S:hover, .styles__annotation-panel___37iiJ a.styles__has-text-black___1g36S:focus {\n    color: black; }\n  .styles__annotation-panel___37iiJ .styles__has-text-light___3egow {\n    color: whitesmoke; }\n  .styles__annotation-panel___37iiJ a.styles__has-text-light___3egow:hover, .styles__annotation-panel___37iiJ a.styles__has-text-light___3egow:focus {\n    color: #dbdbdb; }\n  .styles__annotation-panel___37iiJ .styles__has-text-dark___3oN4g {\n    color: #363636; }\n  .styles__annotation-panel___37iiJ a.styles__has-text-dark___3oN4g:hover, .styles__annotation-panel___37iiJ a.styles__has-text-dark___3oN4g:focus {\n    color: #1c1c1c; }\n  .styles__annotation-panel___37iiJ .styles__has-text-primary___27duh {\n    color: #e54747; }\n  .styles__annotation-panel___37iiJ a.styles__has-text-primary___27duh:hover, .styles__annotation-panel___37iiJ a.styles__has-text-primary___27duh:focus {\n    color: #da1f1f; }\n  .styles__annotation-panel___37iiJ .styles__has-text-info___1fFwj {\n    color: #3273dc; }\n  .styles__annotation-panel___37iiJ a.styles__has-text-info___1fFwj:hover, .styles__annotation-panel___37iiJ a.styles__has-text-info___1fFwj:focus {\n    color: #205bbc; }\n  .styles__annotation-panel___37iiJ .styles__has-text-success___3TEOl {\n    color: #23d160; }\n  .styles__annotation-panel___37iiJ a.styles__has-text-success___3TEOl:hover, .styles__annotation-panel___37iiJ a.styles__has-text-success___3TEOl:focus {\n    color: #1ca64c; }\n  .styles__annotation-panel___37iiJ .styles__has-text-warning___32DRr {\n    color: #ffdd57; }\n  .styles__annotation-panel___37iiJ a.styles__has-text-warning___32DRr:hover, .styles__annotation-panel___37iiJ a.styles__has-text-warning___32DRr:focus {\n    color: #ffd324; }\n  .styles__annotation-panel___37iiJ .styles__has-text-danger___1FWf7 {\n    color: #ff3860; }\n  .styles__annotation-panel___37iiJ a.styles__has-text-danger___1FWf7:hover, .styles__annotation-panel___37iiJ a.styles__has-text-danger___1FWf7:focus {\n    color: #ff0537; }\n  .styles__annotation-panel___37iiJ .styles__is-hidden___26YPu {\n    display: none !important; }\n  @media screen and (max-width: 768px) {\n    .styles__annotation-panel___37iiJ .styles__is-hidden-mobile___1oKqN {\n      display: none !important; } }\n  @media screen and (min-width: 769px), print {\n    .styles__annotation-panel___37iiJ .styles__is-hidden-tablet___1yTWH {\n      display: none !important; } }\n  @media screen and (min-width: 769px) and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-hidden-tablet-only____KjEn {\n      display: none !important; } }\n  @media screen and (max-width: 999px) {\n    .styles__annotation-panel___37iiJ .styles__is-hidden-touch___3QpVk {\n      display: none !important; } }\n  @media screen and (min-width: 1000px) {\n    .styles__annotation-panel___37iiJ .styles__is-hidden-desktop___jRfph {\n      display: none !important; } }\n  @media screen and (min-width: 1000px) and (max-width: 1191px) {\n    .styles__annotation-panel___37iiJ .styles__is-hidden-desktop-only___2c1M1 {\n      display: none !important; } }\n  @media screen and (min-width: 1192px) {\n    .styles__annotation-panel___37iiJ .styles__is-hidden-widescreen___3YCbw {\n      display: none !important; } }\n  .styles__annotation-panel___37iiJ .styles__is-marginless___3pvTK {\n    margin: 0 !important; }\n  .styles__annotation-panel___37iiJ .styles__is-paddingless___1lb_u {\n    padding: 0 !important; }\n  .styles__annotation-panel___37iiJ .styles__is-unselectable___2EAGv {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .styles__annotation-panel___37iiJ .styles__box___1CKrE {\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    display: block;\n    padding: 1.25rem; }\n    .styles__annotation-panel___37iiJ .styles__box___1CKrE:not(:last-child) {\n      margin-bottom: 1.5rem; }\n  .styles__annotation-panel___37iiJ a.styles__box___1CKrE:hover, .styles__annotation-panel___37iiJ a.styles__box___1CKrE:focus {\n    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #e54747; }\n  .styles__annotation-panel___37iiJ a.styles__box___1CKrE:active {\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #e54747; }\n  .styles__annotation-panel___37iiJ .styles__button___15veZ {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    align-items: center;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    box-shadow: none;\n    display: inline-flex;\n    font-size: 1rem;\n    height: 2.25em;\n    justify-content: flex-start;\n    line-height: 1.5;\n    padding-bottom: calc(0.375em - 1px);\n    padding-left: calc(0.625em - 1px);\n    padding-right: calc(0.625em - 1px);\n    padding-top: calc(0.375em - 1px);\n    position: relative;\n    vertical-align: top;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-color: white;\n    border-color: #dbdbdb;\n    color: #363636;\n    cursor: pointer;\n    justify-content: center;\n    padding-left: 0.75em;\n    padding-right: 0.75em;\n    text-align: center;\n    white-space: nowrap; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-focused___IqO12, .styles__annotation-panel___37iiJ .styles__button___15veZ:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-active___10U5U {\n      outline: none; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ[disabled] {\n      cursor: not-allowed; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ strong {\n      color: inherit; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ .styles__icon___2P2zJ, .styles__annotation-panel___37iiJ .styles__button___15veZ .styles__icon___2P2zJ.styles__is-small___2N8KK, .styles__annotation-panel___37iiJ .styles__button___15veZ .styles__icon___2P2zJ.styles__is-medium___1bExO, .styles__annotation-panel___37iiJ .styles__button___15veZ .styles__icon___2P2zJ.styles__is-large___2IqpI {\n      height: 1.5em;\n      width: 1.5em; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ .styles__icon___2P2zJ:first-child:not(:last-child) {\n      margin-left: calc(-0.375em - 1px);\n      margin-right: 0.1875em; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ .styles__icon___2P2zJ:last-child:not(:first-child) {\n      margin-left: 0.1875em;\n      margin-right: calc(-0.375em - 1px); }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ .styles__icon___2P2zJ:first-child:last-child {\n      margin-left: calc(-0.375em - 1px);\n      margin-right: calc(-0.375em - 1px); }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-hovered___21JS5 {\n      border-color: #b5b5b5;\n      color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-focused___IqO12 {\n      border-color: #e54747;\n      box-shadow: 0 0 0.5em rgba(229, 71, 71, 0.25);\n      color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-active___10U5U {\n      border-color: #4a4a4a;\n      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n      color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-link___3VoKk {\n      background-color: transparent;\n      border-color: transparent;\n      color: #4a4a4a;\n      text-decoration: underline; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-link___3VoKk:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-link___3VoKk.styles__is-hovered___21JS5, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-link___3VoKk:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-link___3VoKk.styles__is-focused___IqO12, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-link___3VoKk:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-link___3VoKk.styles__is-active___10U5U {\n        background-color: whitesmoke;\n        color: #363636; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-link___3VoKk[disabled] {\n        background-color: transparent;\n        border-color: transparent;\n        box-shadow: none; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl {\n      background-color: white;\n      border-color: transparent;\n      color: #0a0a0a; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-hovered___21JS5 {\n        background-color: #f9f9f9;\n        border-color: transparent;\n        color: #0a0a0a; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-focused___IqO12 {\n        border-color: transparent;\n        box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n        color: #0a0a0a; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-active___10U5U {\n        background-color: #f2f2f2;\n        border-color: transparent;\n        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n        color: #0a0a0a; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl[disabled] {\n        background-color: white;\n        border-color: transparent;\n        box-shadow: none; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv {\n        background-color: #0a0a0a;\n        color: white; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv:hover {\n          background-color: black; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv[disabled] {\n          background-color: #0a0a0a;\n          border-color: transparent;\n          box-shadow: none;\n          color: white; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: white;\n        color: white; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-outlined___1fL_P:focus {\n          background-color: white;\n          border-color: white;\n          color: #0a0a0a; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n          border-color: transparent transparent white white !important; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: white;\n          box-shadow: none;\n          color: white; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        color: #0a0a0a; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n          background-color: #0a0a0a;\n          color: white; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-white___1SLAl.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #0a0a0a;\n          box-shadow: none;\n          color: #0a0a0a; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq {\n      background-color: #0a0a0a;\n      border-color: transparent;\n      color: white; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-hovered___21JS5 {\n        background-color: #040404;\n        border-color: transparent;\n        color: white; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-focused___IqO12 {\n        border-color: transparent;\n        box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n        color: white; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-active___10U5U {\n        background-color: black;\n        border-color: transparent;\n        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n        color: white; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq[disabled] {\n        background-color: #0a0a0a;\n        border-color: transparent;\n        box-shadow: none; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv {\n        background-color: white;\n        color: #0a0a0a; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv:hover {\n          background-color: #f2f2f2; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv[disabled] {\n          background-color: white;\n          border-color: transparent;\n          box-shadow: none;\n          color: #0a0a0a; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent white white !important; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        color: #0a0a0a; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-outlined___1fL_P:focus {\n          background-color: #0a0a0a;\n          border-color: #0a0a0a;\n          color: white; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n          border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #0a0a0a;\n          box-shadow: none;\n          color: #0a0a0a; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: white;\n        color: white; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n          background-color: white;\n          color: #0a0a0a; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-black___qATrq.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: white;\n          box-shadow: none;\n          color: white; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5 {\n      background-color: whitesmoke;\n      border-color: transparent;\n      color: #363636; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-hovered___21JS5 {\n        background-color: #eeeeee;\n        border-color: transparent;\n        color: #363636; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-focused___IqO12 {\n        border-color: transparent;\n        box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n        color: #363636; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-active___10U5U {\n        background-color: #e8e8e8;\n        border-color: transparent;\n        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n        color: #363636; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5[disabled] {\n        background-color: whitesmoke;\n        border-color: transparent;\n        box-shadow: none; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv {\n        background-color: #363636;\n        color: whitesmoke; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv:hover {\n          background-color: #292929; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv[disabled] {\n          background-color: #363636;\n          border-color: transparent;\n          box-shadow: none;\n          color: whitesmoke; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #363636 #363636 !important; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: whitesmoke;\n        color: whitesmoke; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-outlined___1fL_P:focus {\n          background-color: whitesmoke;\n          border-color: whitesmoke;\n          color: #363636; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n          border-color: transparent transparent whitesmoke whitesmoke !important; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: whitesmoke;\n          box-shadow: none;\n          color: whitesmoke; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #363636;\n        color: #363636; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n          background-color: #363636;\n          color: whitesmoke; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-light___3_Rp5.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #363636;\n          box-shadow: none;\n          color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM {\n      background-color: #363636;\n      border-color: transparent;\n      color: whitesmoke; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-hovered___21JS5 {\n        background-color: #2f2f2f;\n        border-color: transparent;\n        color: whitesmoke; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-focused___IqO12 {\n        border-color: transparent;\n        box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n        color: whitesmoke; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-active___10U5U {\n        background-color: #292929;\n        border-color: transparent;\n        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n        color: whitesmoke; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM[disabled] {\n        background-color: #363636;\n        border-color: transparent;\n        box-shadow: none; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv {\n        background-color: whitesmoke;\n        color: #363636; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv:hover {\n          background-color: #e8e8e8; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv[disabled] {\n          background-color: whitesmoke;\n          border-color: transparent;\n          box-shadow: none;\n          color: #363636; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent whitesmoke whitesmoke !important; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #363636;\n        color: #363636; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-outlined___1fL_P:focus {\n          background-color: #363636;\n          border-color: #363636;\n          color: whitesmoke; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n          border-color: transparent transparent #363636 #363636 !important; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #363636;\n          box-shadow: none;\n          color: #363636; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: whitesmoke;\n        color: whitesmoke; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n          background-color: whitesmoke;\n          color: #363636; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-dark___2SGrM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: whitesmoke;\n          box-shadow: none;\n          color: whitesmoke; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM {\n      background-color: #e54747;\n      border-color: transparent;\n      color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-hovered___21JS5 {\n        background-color: #e33c3c;\n        border-color: transparent;\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-focused___IqO12 {\n        border-color: transparent;\n        box-shadow: 0 0 0.5em rgba(229, 71, 71, 0.25);\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-active___10U5U {\n        background-color: #e23131;\n        border-color: transparent;\n        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM[disabled] {\n        background-color: #e54747;\n        border-color: transparent;\n        box-shadow: none; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv {\n        background-color: #fff;\n        color: #e54747; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv:hover {\n          background-color: #f2f2f2; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv[disabled] {\n          background-color: #fff;\n          border-color: transparent;\n          box-shadow: none;\n          color: #e54747; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #fff #fff !important; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #e54747;\n        color: #e54747; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-outlined___1fL_P:focus {\n          background-color: #e54747;\n          border-color: #e54747;\n          color: #fff; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n          border-color: transparent transparent #e54747 #e54747 !important; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #e54747;\n          box-shadow: none;\n          color: #e54747; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #fff;\n        color: #fff; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n          background-color: #fff;\n          color: #e54747; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-primary___pfmjM.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #fff;\n          box-shadow: none;\n          color: #fff; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r {\n      background-color: #3273dc;\n      border-color: transparent;\n      color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-hovered___21JS5 {\n        background-color: #276cda;\n        border-color: transparent;\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-focused___IqO12 {\n        border-color: transparent;\n        box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-active___10U5U {\n        background-color: #2366d1;\n        border-color: transparent;\n        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r[disabled] {\n        background-color: #3273dc;\n        border-color: transparent;\n        box-shadow: none; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv {\n        background-color: #fff;\n        color: #3273dc; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv:hover {\n          background-color: #f2f2f2; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv[disabled] {\n          background-color: #fff;\n          border-color: transparent;\n          box-shadow: none;\n          color: #3273dc; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #fff #fff !important; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #3273dc;\n        color: #3273dc; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-outlined___1fL_P:focus {\n          background-color: #3273dc;\n          border-color: #3273dc;\n          color: #fff; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n          border-color: transparent transparent #3273dc #3273dc !important; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #3273dc;\n          box-shadow: none;\n          color: #3273dc; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #fff;\n        color: #fff; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n          background-color: #fff;\n          color: #3273dc; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-info___ps_7r.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #fff;\n          box-shadow: none;\n          color: #fff; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l {\n      background-color: #23d160;\n      border-color: transparent;\n      color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-hovered___21JS5 {\n        background-color: #22c65b;\n        border-color: transparent;\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-focused___IqO12 {\n        border-color: transparent;\n        box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-active___10U5U {\n        background-color: #20bc56;\n        border-color: transparent;\n        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l[disabled] {\n        background-color: #23d160;\n        border-color: transparent;\n        box-shadow: none; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv {\n        background-color: #fff;\n        color: #23d160; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv:hover {\n          background-color: #f2f2f2; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv[disabled] {\n          background-color: #fff;\n          border-color: transparent;\n          box-shadow: none;\n          color: #23d160; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #fff #fff !important; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #23d160;\n        color: #23d160; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-outlined___1fL_P:focus {\n          background-color: #23d160;\n          border-color: #23d160;\n          color: #fff; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n          border-color: transparent transparent #23d160 #23d160 !important; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #23d160;\n          box-shadow: none;\n          color: #23d160; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #fff;\n        color: #fff; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n          background-color: #fff;\n          color: #23d160; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-success___Ige_l.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #fff;\n          box-shadow: none;\n          color: #fff; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38 {\n      background-color: #ffdd57;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-hovered___21JS5 {\n        background-color: #ffdb4a;\n        border-color: transparent;\n        color: rgba(0, 0, 0, 0.7); }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-focused___IqO12 {\n        border-color: transparent;\n        box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n        color: rgba(0, 0, 0, 0.7); }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-active___10U5U {\n        background-color: #ffd83d;\n        border-color: transparent;\n        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n        color: rgba(0, 0, 0, 0.7); }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38[disabled] {\n        background-color: #ffdd57;\n        border-color: transparent;\n        box-shadow: none; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv {\n        background-color: rgba(0, 0, 0, 0.7);\n        color: #ffdd57; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv:hover {\n          background-color: rgba(0, 0, 0, 0.7); }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv[disabled] {\n          background-color: rgba(0, 0, 0, 0.7);\n          border-color: transparent;\n          box-shadow: none;\n          color: #ffdd57; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #ffdd57;\n        color: #ffdd57; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-outlined___1fL_P:focus {\n          background-color: #ffdd57;\n          border-color: #ffdd57;\n          color: rgba(0, 0, 0, 0.7); }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n          border-color: transparent transparent #ffdd57 #ffdd57 !important; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #ffdd57;\n          box-shadow: none;\n          color: #ffdd57; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: rgba(0, 0, 0, 0.7);\n        color: rgba(0, 0, 0, 0.7); }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n          background-color: rgba(0, 0, 0, 0.7);\n          color: #ffdd57; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-warning___mpL38.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: rgba(0, 0, 0, 0.7);\n          box-shadow: none;\n          color: rgba(0, 0, 0, 0.7); }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9 {\n      background-color: #ff3860;\n      border-color: transparent;\n      color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-hovered___21JS5 {\n        background-color: #ff2b56;\n        border-color: transparent;\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9:focus, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-focused___IqO12 {\n        border-color: transparent;\n        box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9:active, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-active___10U5U {\n        background-color: #ff1f4b;\n        border-color: transparent;\n        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n        color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9[disabled] {\n        background-color: #ff3860;\n        border-color: transparent;\n        box-shadow: none; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv {\n        background-color: #fff;\n        color: #ff3860; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv:hover {\n          background-color: #f2f2f2; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv[disabled] {\n          background-color: #fff;\n          border-color: transparent;\n          box-shadow: none;\n          color: #ff3860; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-loading___3mj4a:after {\n        border-color: transparent transparent #fff #fff !important; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #ff3860;\n        color: #ff3860; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-outlined___1fL_P:focus {\n          background-color: #ff3860;\n          border-color: #ff3860;\n          color: #fff; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-outlined___1fL_P.styles__is-loading___3mj4a:after {\n          border-color: transparent transparent #ff3860 #ff3860 !important; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #ff3860;\n          box-shadow: none;\n          color: #ff3860; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P {\n        background-color: transparent;\n        border-color: #fff;\n        color: #fff; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:hover, .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P:focus {\n          background-color: #fff;\n          color: #ff3860; }\n        .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-danger___4A8c9.styles__is-inverted___23Ydv.styles__is-outlined___1fL_P[disabled] {\n          background-color: transparent;\n          border-color: #fff;\n          box-shadow: none;\n          color: #fff; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-small___2N8KK {\n      border-radius: 2px;\n      font-size: 0.75rem; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-medium___1bExO {\n      font-size: 1.25rem; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-large___2IqpI {\n      font-size: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ[disabled] {\n      background-color: white;\n      border-color: #dbdbdb;\n      box-shadow: none;\n      opacity: 0.5; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-fullwidth___22abZ {\n      display: flex;\n      width: 100%; }\n    .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-loading___3mj4a {\n      color: transparent !important;\n      pointer-events: none; }\n      .styles__annotation-panel___37iiJ .styles__button___15veZ.styles__is-loading___3mj4a:after {\n        animation: styles__spinAround___3VumK 500ms infinite linear;\n        border: 2px solid #dbdbdb;\n        border-radius: 290486px;\n        border-right-color: transparent;\n        border-top-color: transparent;\n        content: \"\";\n        display: block;\n        height: 1em;\n        position: relative;\n        width: 1em;\n        position: absolute;\n        left: calc(50% - (1em / 2));\n        top: calc(50% - (1em / 2));\n        position: absolute !important; }\n  .styles__annotation-panel___37iiJ button.styles__button___15veZ,\n  .styles__annotation-panel___37iiJ input[type=\"submit\"].styles__button___15veZ {\n    line-height: 1;\n    padding-bottom: 0.4em;\n    padding-top: 0.35em; }\n  .styles__annotation-panel___37iiJ .styles__content___39lD8 {\n    color: #4a4a4a; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8:not(:last-child) {\n      margin-bottom: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 li + li {\n      margin-top: 0.25em; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 p:not(:last-child),\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 dl:not(:last-child),\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 ol:not(:last-child),\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 ul:not(:last-child),\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 blockquote:not(:last-child),\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 pre:not(:last-child),\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 table:not(:last-child) {\n      margin-bottom: 1em; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h1,\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h2,\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h3,\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h4,\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h5,\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h6 {\n      color: #363636;\n      font-weight: 400;\n      line-height: 1.125; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h1 {\n      font-size: 2em;\n      margin-bottom: 0.5em; }\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 h1:not(:first-child) {\n        margin-top: 1em; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h2 {\n      font-size: 1.75em;\n      margin-bottom: 0.5714em; }\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 h2:not(:first-child) {\n        margin-top: 1.1428em; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h3 {\n      font-size: 1.5em;\n      margin-bottom: 0.6666em; }\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 h3:not(:first-child) {\n        margin-top: 1.3333em; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h4 {\n      font-size: 1.25em;\n      margin-bottom: 0.8em; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h5 {\n      font-size: 1.125em;\n      margin-bottom: 0.8888em; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 h6 {\n      font-size: 1em;\n      margin-bottom: 1em; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 blockquote {\n      background-color: whitesmoke;\n      border-left: 5px solid #dbdbdb;\n      padding: 1.25em 1.5em; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 ol {\n      list-style: decimal outside;\n      margin-left: 2em;\n      margin-right: 2em;\n      margin-top: 1em; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 ul {\n      list-style: disc outside;\n      margin-left: 2em;\n      margin-right: 2em;\n      margin-top: 1em; }\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 ul ul {\n        list-style-type: circle;\n        margin-top: 0.5em; }\n        .styles__annotation-panel___37iiJ .styles__content___39lD8 ul ul ul {\n          list-style-type: square; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 dd {\n      margin-left: 2em; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 pre {\n      -webkit-overflow-scrolling: touch;\n      overflow-x: auto;\n      padding: 1.25em 1.5em;\n      white-space: pre;\n      word-wrap: normal; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8 table {\n      width: 100%; }\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 table td,\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 table th {\n        border: 1px solid #dbdbdb;\n        border-width: 0 0 1px;\n        padding: 0.5em 0.75em;\n        vertical-align: top; }\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 table th {\n        color: #363636;\n        text-align: left; }\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 table tr:hover {\n        background-color: whitesmoke; }\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 table thead td,\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 table thead th {\n        border-width: 0 0 2px;\n        color: #363636; }\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 table tfoot td,\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 table tfoot th {\n        border-width: 2px 0 0;\n        color: #363636; }\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 table tbody tr:last-child td,\n      .styles__annotation-panel___37iiJ .styles__content___39lD8 table tbody tr:last-child th {\n        border-bottom-width: 0; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8.styles__is-small___2N8KK {\n      font-size: 0.75rem; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8.styles__is-medium___1bExO {\n      font-size: 1.25rem; }\n    .styles__annotation-panel___37iiJ .styles__content___39lD8.styles__is-large___2IqpI {\n      font-size: 1.5rem; }\n  .styles__annotation-panel___37iiJ .styles__input___23AZL,\n  .styles__annotation-panel___37iiJ .styles__textarea___i1MY2 {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    align-items: center;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    box-shadow: none;\n    display: inline-flex;\n    font-size: 1rem;\n    height: 2.25em;\n    justify-content: flex-start;\n    line-height: 1.5;\n    padding-bottom: calc(0.375em - 1px);\n    padding-left: calc(0.625em - 1px);\n    padding-right: calc(0.625em - 1px);\n    padding-top: calc(0.375em - 1px);\n    position: relative;\n    vertical-align: top;\n    background-color: white;\n    border-color: #dbdbdb;\n    color: #363636;\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n    max-width: 100%;\n    width: 100%; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL:focus, .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-focused___IqO12, .styles__annotation-panel___37iiJ .styles__input___23AZL:active, .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-active___10U5U,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2:focus,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-focused___IqO12,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2:active,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-active___10U5U {\n      outline: none; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL[disabled],\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2[disabled] {\n      cursor: not-allowed; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL:hover, .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-hovered___21JS5,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2:hover,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-hovered___21JS5 {\n      border-color: #b5b5b5; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL:focus, .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-focused___IqO12, .styles__annotation-panel___37iiJ .styles__input___23AZL:active, .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-active___10U5U,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2:focus,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-focused___IqO12,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2:active,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-active___10U5U {\n      border-color: #e54747; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL[disabled],\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2[disabled] {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      box-shadow: none;\n      color: #7a7a7a; }\n      .styles__annotation-panel___37iiJ .styles__input___23AZL[disabled]::-moz-placeholder,\n      .styles__annotation-panel___37iiJ .styles__textarea___i1MY2[disabled]::-moz-placeholder {\n        color: rgba(54, 54, 54, 0.3); }\n      .styles__annotation-panel___37iiJ .styles__input___23AZL[disabled]::-webkit-input-placeholder,\n      .styles__annotation-panel___37iiJ .styles__textarea___i1MY2[disabled]::-webkit-input-placeholder {\n        color: rgba(54, 54, 54, 0.3); }\n      .styles__annotation-panel___37iiJ .styles__input___23AZL[disabled]:-moz-placeholder,\n      .styles__annotation-panel___37iiJ .styles__textarea___i1MY2[disabled]:-moz-placeholder {\n        color: rgba(54, 54, 54, 0.3); }\n      .styles__annotation-panel___37iiJ .styles__input___23AZL[disabled]:-ms-input-placeholder,\n      .styles__annotation-panel___37iiJ .styles__textarea___i1MY2[disabled]:-ms-input-placeholder {\n        color: rgba(54, 54, 54, 0.3); }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL[type=\"search\"],\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2[type=\"search\"] {\n      border-radius: 290486px; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-white___1SLAl,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-white___1SLAl {\n      border-color: white; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-black___qATrq,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-black___qATrq {\n      border-color: #0a0a0a; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-light___3_Rp5,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-light___3_Rp5 {\n      border-color: whitesmoke; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-dark___2SGrM,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-dark___2SGrM {\n      border-color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-primary___pfmjM,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-primary___pfmjM {\n      border-color: #e54747; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-info___ps_7r,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-info___ps_7r {\n      border-color: #3273dc; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-success___Ige_l,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-success___Ige_l {\n      border-color: #23d160; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-warning___mpL38,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-warning___mpL38 {\n      border-color: #ffdd57; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-danger___4A8c9,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-danger___4A8c9 {\n      border-color: #ff3860; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-small___2N8KK,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-small___2N8KK {\n      border-radius: 2px;\n      font-size: 0.75rem; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-medium___1bExO,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-medium___1bExO {\n      font-size: 1.25rem; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-large___2IqpI,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-large___2IqpI {\n      font-size: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-fullwidth___22abZ,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-fullwidth___22abZ {\n      display: block;\n      width: 100%; }\n    .styles__annotation-panel___37iiJ .styles__input___23AZL.styles__is-inline___1KWzu,\n    .styles__annotation-panel___37iiJ .styles__textarea___i1MY2.styles__is-inline___1KWzu {\n      display: inline;\n      width: auto; }\n  .styles__annotation-panel___37iiJ .styles__textarea___i1MY2 {\n    display: block;\n    max-height: 600px;\n    max-width: 100%;\n    min-height: 120px;\n    min-width: 100%;\n    padding: 0.625em;\n    resize: vertical; }\n  .styles__annotation-panel___37iiJ .styles__checkbox___xbJVD,\n  .styles__annotation-panel___37iiJ .styles__radio___GyVU_ {\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1.25;\n    position: relative; }\n    .styles__annotation-panel___37iiJ .styles__checkbox___xbJVD input,\n    .styles__annotation-panel___37iiJ .styles__radio___GyVU_ input {\n      cursor: pointer; }\n    .styles__annotation-panel___37iiJ .styles__checkbox___xbJVD:hover,\n    .styles__annotation-panel___37iiJ .styles__radio___GyVU_:hover {\n      color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__checkbox___xbJVD[disabled],\n    .styles__annotation-panel___37iiJ .styles__radio___GyVU_[disabled] {\n      color: #7a7a7a;\n      cursor: not-allowed; }\n  .styles__annotation-panel___37iiJ .styles__radio___GyVU_ + .styles__radio___GyVU_ {\n    margin-left: 0.5em; }\n  .styles__annotation-panel___37iiJ .styles__select___2KQGE {\n    display: inline-block;\n    height: 2.25em;\n    position: relative;\n    vertical-align: top; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE:after {\n      border: 1px solid #e54747;\n      border-right: 0;\n      border-top: 0;\n      content: \" \";\n      display: block;\n      height: 0.5em;\n      pointer-events: none;\n      position: absolute;\n      transform: rotate(-45deg);\n      width: 0.5em;\n      margin-top: -0.375em;\n      right: 1.125em;\n      top: 50%;\n      z-index: 4; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE select {\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      align-items: center;\n      border: 1px solid transparent;\n      border-radius: 3px;\n      box-shadow: none;\n      display: inline-flex;\n      font-size: 1rem;\n      height: 2.25em;\n      justify-content: flex-start;\n      line-height: 1.5;\n      padding-bottom: calc(0.375em - 1px);\n      padding-left: calc(0.625em - 1px);\n      padding-right: calc(0.625em - 1px);\n      padding-top: calc(0.375em - 1px);\n      position: relative;\n      vertical-align: top;\n      background-color: white;\n      border-color: #dbdbdb;\n      color: #363636;\n      cursor: pointer;\n      display: block;\n      font-size: 1em;\n      outline: none;\n      padding-right: 2.5em; }\n      .styles__annotation-panel___37iiJ .styles__select___2KQGE select:focus, .styles__annotation-panel___37iiJ .styles__select___2KQGE select.styles__is-focused___IqO12, .styles__annotation-panel___37iiJ .styles__select___2KQGE select:active, .styles__annotation-panel___37iiJ .styles__select___2KQGE select.styles__is-active___10U5U {\n        outline: none; }\n      .styles__annotation-panel___37iiJ .styles__select___2KQGE select[disabled] {\n        cursor: not-allowed; }\n      .styles__annotation-panel___37iiJ .styles__select___2KQGE select:hover, .styles__annotation-panel___37iiJ .styles__select___2KQGE select.styles__is-hovered___21JS5 {\n        border-color: #b5b5b5; }\n      .styles__annotation-panel___37iiJ .styles__select___2KQGE select:focus, .styles__annotation-panel___37iiJ .styles__select___2KQGE select.styles__is-focused___IqO12, .styles__annotation-panel___37iiJ .styles__select___2KQGE select:active, .styles__annotation-panel___37iiJ .styles__select___2KQGE select.styles__is-active___10U5U {\n        border-color: #e54747; }\n      .styles__annotation-panel___37iiJ .styles__select___2KQGE select[disabled] {\n        background-color: whitesmoke;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: #7a7a7a; }\n        .styles__annotation-panel___37iiJ .styles__select___2KQGE select[disabled]::-moz-placeholder {\n          color: rgba(54, 54, 54, 0.3); }\n        .styles__annotation-panel___37iiJ .styles__select___2KQGE select[disabled]::-webkit-input-placeholder {\n          color: rgba(54, 54, 54, 0.3); }\n        .styles__annotation-panel___37iiJ .styles__select___2KQGE select[disabled]:-moz-placeholder {\n          color: rgba(54, 54, 54, 0.3); }\n        .styles__annotation-panel___37iiJ .styles__select___2KQGE select[disabled]:-ms-input-placeholder {\n          color: rgba(54, 54, 54, 0.3); }\n      .styles__annotation-panel___37iiJ .styles__select___2KQGE select:hover {\n        border-color: #b5b5b5; }\n      .styles__annotation-panel___37iiJ .styles__select___2KQGE select::-ms-expand {\n        display: none; }\n      .styles__annotation-panel___37iiJ .styles__select___2KQGE select[disabled]:hover {\n        border-color: whitesmoke; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE:hover:after {\n      border-color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-white___1SLAl select {\n      border-color: white; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-black___qATrq select {\n      border-color: #0a0a0a; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-light___3_Rp5 select {\n      border-color: whitesmoke; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-dark___2SGrM select {\n      border-color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-primary___pfmjM select {\n      border-color: #e54747; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-info___ps_7r select {\n      border-color: #3273dc; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-success___Ige_l select {\n      border-color: #23d160; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-warning___mpL38 select {\n      border-color: #ffdd57; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-danger___4A8c9 select {\n      border-color: #ff3860; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-small___2N8KK {\n      border-radius: 2px;\n      font-size: 0.75rem; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-medium___1bExO {\n      font-size: 1.25rem; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-large___2IqpI {\n      font-size: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-disabled___1aX81:after {\n      border-color: #7a7a7a; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-fullwidth___22abZ {\n      width: 100%; }\n      .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-fullwidth___22abZ select {\n        width: 100%; }\n    .styles__annotation-panel___37iiJ .styles__select___2KQGE.styles__is-loading___3mj4a:after {\n      animation: styles__spinAround___3VumK 500ms infinite linear;\n      border: 2px solid #dbdbdb;\n      border-radius: 290486px;\n      border-right-color: transparent;\n      border-top-color: transparent;\n      content: \"\";\n      display: block;\n      height: 1em;\n      position: relative;\n      width: 1em;\n      margin-top: 0;\n      position: absolute;\n      right: 0.625em;\n      top: 0.625em;\n      transform: none; }\n  .styles__annotation-panel___37iiJ .styles__label___24SLN {\n    color: #363636;\n    display: block;\n    font-size: 1rem;\n    font-weight: 700; }\n    .styles__annotation-panel___37iiJ .styles__label___24SLN:not(:last-child) {\n      margin-bottom: 0.5em; }\n    .styles__annotation-panel___37iiJ .styles__label___24SLN.styles__is-small___2N8KK {\n      font-size: 0.75rem; }\n    .styles__annotation-panel___37iiJ .styles__label___24SLN.styles__is-medium___1bExO {\n      font-size: 1.25rem; }\n    .styles__annotation-panel___37iiJ .styles__label___24SLN.styles__is-large___2IqpI {\n      font-size: 1.5rem; }\n  .styles__annotation-panel___37iiJ .styles__help___o34Ni {\n    display: block;\n    font-size: 0.75rem;\n    margin-top: 0.25rem; }\n    .styles__annotation-panel___37iiJ .styles__help___o34Ni.styles__is-white___1SLAl {\n      color: white; }\n    .styles__annotation-panel___37iiJ .styles__help___o34Ni.styles__is-black___qATrq {\n      color: #0a0a0a; }\n    .styles__annotation-panel___37iiJ .styles__help___o34Ni.styles__is-light___3_Rp5 {\n      color: whitesmoke; }\n    .styles__annotation-panel___37iiJ .styles__help___o34Ni.styles__is-dark___2SGrM {\n      color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__help___o34Ni.styles__is-primary___pfmjM {\n      color: #e54747; }\n    .styles__annotation-panel___37iiJ .styles__help___o34Ni.styles__is-info___ps_7r {\n      color: #3273dc; }\n    .styles__annotation-panel___37iiJ .styles__help___o34Ni.styles__is-success___Ige_l {\n      color: #23d160; }\n    .styles__annotation-panel___37iiJ .styles__help___o34Ni.styles__is-warning___mpL38 {\n      color: #ffdd57; }\n    .styles__annotation-panel___37iiJ .styles__help___o34Ni.styles__is-danger___4A8c9 {\n      color: #ff3860; }\n  .styles__annotation-panel___37iiJ .styles__field___2_6u-:not(:last-child) {\n    margin-bottom: 0.75rem; }\n  .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj {\n    display: flex;\n    justify-content: flex-start; }\n    .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax {\n      margin-right: -1px; }\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:first-child .styles__button___15veZ,\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:first-child .styles__input___23AZL,\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:first-child .styles__select___2KQGE select {\n        border-bottom-left-radius: 3px;\n        border-top-left-radius: 3px; }\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:last-child .styles__button___15veZ,\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:last-child .styles__input___23AZL,\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax:last-child .styles__select___2KQGE select {\n        border-bottom-right-radius: 3px;\n        border-top-right-radius: 3px; }\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ,\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL,\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select {\n        border-radius: 0; }\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ:hover, .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ.styles__is-hovered___21JS5,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL:hover,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL.styles__is-hovered___21JS5,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select:hover,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select.styles__is-hovered___21JS5 {\n          z-index: 2; }\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ:focus, .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ.styles__is-focused___IqO12, .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ:active, .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ.styles__is-active___10U5U,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL:focus,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL.styles__is-focused___IqO12,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL:active,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL.styles__is-active___10U5U,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select:focus,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select.styles__is-focused___IqO12,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select:active,\n        .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select.styles__is-active___10U5U {\n          z-index: 3; }\n          .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ:focus:hover, .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ.styles__is-focused___IqO12:hover, .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ:active:hover, .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__button___15veZ.styles__is-active___10U5U:hover,\n          .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL:focus:hover,\n          .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL.styles__is-focused___IqO12:hover,\n          .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL:active:hover,\n          .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__input___23AZL.styles__is-active___10U5U:hover,\n          .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select:focus:hover,\n          .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select.styles__is-focused___IqO12:hover,\n          .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select:active:hover,\n          .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax .styles__select___2KQGE select.styles__is-active___10U5U:hover {\n            z-index: 4; }\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj .styles__control___3Tgax.styles__is-expanded___Jy9Pz {\n        flex-grow: 1;\n        flex-shrink: 0; }\n    .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj.styles__has-addons-centered___24wLw {\n      justify-content: center; }\n    .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj.styles__has-addons-right___2MEx4 {\n      justify-content: flex-end; }\n    .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__has-addons___1uWuj.styles__has-addons-fullwidth___u5fCV .styles__control___3Tgax {\n      flex-grow: 1;\n      flex-shrink: 0; }\n  .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__is-grouped___1mbks {\n    display: flex;\n    justify-content: flex-start; }\n    .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__is-grouped___1mbks > .styles__control___3Tgax {\n      flex-shrink: 0; }\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__is-grouped___1mbks > .styles__control___3Tgax:not(:last-child) {\n        margin-bottom: 0;\n        margin-right: 0.75rem; }\n      .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__is-grouped___1mbks > .styles__control___3Tgax.styles__is-expanded___Jy9Pz {\n        flex-grow: 1;\n        flex-shrink: 1; }\n    .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__is-grouped___1mbks.styles__is-grouped-centered___2Ctdt {\n      justify-content: center; }\n    .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__is-grouped___1mbks.styles__is-grouped-right___380In {\n      justify-content: flex-end; }\n  @media screen and (min-width: 769px), print {\n    .styles__annotation-panel___37iiJ .styles__field___2_6u-.styles__is-horizontal___hRSJp {\n      display: flex; } }\n  .styles__annotation-panel___37iiJ .styles__field-label___1hNhC .styles__label___24SLN {\n    font-size: inherit; }\n  @media screen and (max-width: 768px) {\n    .styles__annotation-panel___37iiJ .styles__field-label___1hNhC {\n      margin-bottom: 0.5rem; } }\n  @media screen and (min-width: 769px), print {\n    .styles__annotation-panel___37iiJ .styles__field-label___1hNhC {\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n      margin-right: 1.5rem;\n      text-align: right; }\n      .styles__annotation-panel___37iiJ .styles__field-label___1hNhC.styles__is-small___2N8KK {\n        font-size: 0.75rem;\n        padding-top: 0.375em; }\n      .styles__annotation-panel___37iiJ .styles__field-label___1hNhC.styles__is-normal___R81gI {\n        padding-top: 0.375em; }\n      .styles__annotation-panel___37iiJ .styles__field-label___1hNhC.styles__is-medium___1bExO {\n        font-size: 1.25rem;\n        padding-top: 0.375em; }\n      .styles__annotation-panel___37iiJ .styles__field-label___1hNhC.styles__is-large___2IqpI {\n        font-size: 1.5rem;\n        padding-top: 0.375em; } }\n  @media screen and (min-width: 769px), print {\n    .styles__annotation-panel___37iiJ .styles__field-body___1zr7H {\n      display: flex;\n      flex-basis: 0;\n      flex-grow: 5;\n      flex-shrink: 1; }\n      .styles__annotation-panel___37iiJ .styles__field-body___1zr7H .styles__field___2_6u- {\n        flex-shrink: 1; }\n        .styles__annotation-panel___37iiJ .styles__field-body___1zr7H .styles__field___2_6u-:not(.styles__is-narrow___2e2dy) {\n          flex-grow: 1; }\n        .styles__annotation-panel___37iiJ .styles__field-body___1zr7H .styles__field___2_6u-:not(:last-child) {\n          margin-bottom: 0;\n          margin-right: 0.75rem; } }\n  .styles__annotation-panel___37iiJ .styles__control___3Tgax {\n    font-size: 1rem;\n    position: relative;\n    text-align: left; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icon___2VHjN .styles__icon___2P2zJ {\n      color: #dbdbdb;\n      height: 2.25em;\n      pointer-events: none;\n      position: absolute;\n      top: 0;\n      width: 2.25em;\n      z-index: 4; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icon___2VHjN .styles__input___23AZL:focus + .styles__icon___2P2zJ {\n      color: #7a7a7a; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icon___2VHjN .styles__input___23AZL.styles__is-small___2N8KK + .styles__icon___2P2zJ {\n      font-size: 0.75rem; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icon___2VHjN .styles__input___23AZL.styles__is-medium___1bExO + .styles__icon___2P2zJ {\n      font-size: 1.25rem; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icon___2VHjN .styles__input___23AZL.styles__is-large___2IqpI + .styles__icon___2P2zJ {\n      font-size: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icon___2VHjN:not(.styles__has-icon-right___aTW4b) .styles__icon___2P2zJ {\n      left: 0; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icon___2VHjN:not(.styles__has-icon-right___aTW4b) .styles__input___23AZL {\n      padding-left: 2.25em; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icon___2VHjN.styles__has-icon-right___aTW4b .styles__icon___2P2zJ {\n      right: 0; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icon___2VHjN.styles__has-icon-right___aTW4b .styles__input___23AZL {\n      padding-right: 2.25em; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__input___23AZL:focus ~ .styles__icon___2P2zJ, .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__input___23AZL:focus ~ .styles__icon___2P2zJ {\n      color: #7a7a7a; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__input___23AZL.styles__is-small___2N8KK ~ .styles__icon___2P2zJ, .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__input___23AZL.styles__is-small___2N8KK ~ .styles__icon___2P2zJ {\n      font-size: 0.75rem; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__input___23AZL.styles__is-medium___1bExO ~ .styles__icon___2P2zJ, .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__input___23AZL.styles__is-medium___1bExO ~ .styles__icon___2P2zJ {\n      font-size: 1.25rem; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__input___23AZL.styles__is-large___2IqpI ~ .styles__icon___2P2zJ, .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__input___23AZL.styles__is-large___2IqpI ~ .styles__icon___2P2zJ {\n      font-size: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__icon___2P2zJ, .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__icon___2P2zJ {\n      color: #dbdbdb;\n      height: 2.25em;\n      pointer-events: none;\n      position: absolute;\n      top: 0;\n      width: 2.25em;\n      z-index: 4; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__input___23AZL {\n      padding-left: 2.25em; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-left___2ZSEr .styles__icon___2P2zJ.styles__is-left___24Vun {\n      left: 0; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__input___23AZL {\n      padding-right: 2.25em; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__has-icons-right___2sR92 .styles__icon___2P2zJ.styles__is-right___3Q5w8 {\n      right: 0; }\n    .styles__annotation-panel___37iiJ .styles__control___3Tgax.styles__is-loading___3mj4a:after {\n      animation: styles__spinAround___3VumK 500ms infinite linear;\n      border: 2px solid #dbdbdb;\n      border-radius: 290486px;\n      border-right-color: transparent;\n      border-top-color: transparent;\n      content: \"\";\n      display: block;\n      height: 1em;\n      position: relative;\n      width: 1em;\n      position: absolute !important;\n      right: 0.625em;\n      top: 0.625em; }\n  .styles__annotation-panel___37iiJ .styles__icon___2P2zJ {\n    align-items: center;\n    display: inline-flex;\n    justify-content: center;\n    height: 1.5rem;\n    width: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__icon___2P2zJ .styles__fa___2Gsew {\n      font-size: 21px; }\n    .styles__annotation-panel___37iiJ .styles__icon___2P2zJ.styles__is-small___2N8KK {\n      height: 1rem;\n      width: 1rem; }\n      .styles__annotation-panel___37iiJ .styles__icon___2P2zJ.styles__is-small___2N8KK .styles__fa___2Gsew {\n        font-size: 14px; }\n    .styles__annotation-panel___37iiJ .styles__icon___2P2zJ.styles__is-medium___1bExO {\n      height: 2rem;\n      width: 2rem; }\n      .styles__annotation-panel___37iiJ .styles__icon___2P2zJ.styles__is-medium___1bExO .styles__fa___2Gsew {\n        font-size: 28px; }\n    .styles__annotation-panel___37iiJ .styles__icon___2P2zJ.styles__is-large___2IqpI {\n      height: 3rem;\n      width: 3rem; }\n      .styles__annotation-panel___37iiJ .styles__icon___2P2zJ.styles__is-large___2IqpI .styles__fa___2Gsew {\n        font-size: 42px; }\n  .styles__annotation-panel___37iiJ .styles__image___2kKMr {\n    display: block;\n    position: relative; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr img {\n      display: block;\n      height: auto;\n      width: 100%; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-square___17a6W img, .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-1by1___1SVIL img, .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-4by3___-36YL img, .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-3by2___3JA0v img, .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-16by9___xu_zY img, .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-2by1___IjLZr img {\n      bottom: 0;\n      left: 0;\n      position: absolute;\n      right: 0;\n      top: 0;\n      height: 100%;\n      width: 100%; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-square___17a6W, .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-1by1___1SVIL {\n      padding-top: 100%; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-4by3___-36YL {\n      padding-top: 75%; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-3by2___3JA0v {\n      padding-top: 66.6666%; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-16by9___xu_zY {\n      padding-top: 56.25%; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-2by1___IjLZr {\n      padding-top: 50%; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-16x16___2eQHI {\n      height: 16px;\n      width: 16px; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-24x24___QLAup {\n      height: 24px;\n      width: 24px; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-32x32___3BJpt {\n      height: 32px;\n      width: 32px; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-48x48___iyi2A {\n      height: 48px;\n      width: 48px; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-64x64___21u4Z {\n      height: 64px;\n      width: 64px; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-96x96___1CdZP {\n      height: 96px;\n      width: 96px; }\n    .styles__annotation-panel___37iiJ .styles__image___2kKMr.styles__is-128x128___jSNZT {\n      height: 128px;\n      width: 128px; }\n  .styles__annotation-panel___37iiJ .styles__notification___3i7Bk {\n    background-color: whitesmoke;\n    border-radius: 3px;\n    padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n    position: relative; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk:not(:last-child) {\n      margin-bottom: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk a:not(.styles__button___15veZ) {\n      color: currentColor;\n      text-decoration: underline; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk code,\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk pre {\n      background: white; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk pre code {\n      background: transparent; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk > .styles__delete___Eofxp {\n      position: absolute;\n      right: 0.5em;\n      top: 0.5em; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk .styles__title___2te3V,\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk .styles__subtitle___2opLu,\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk .styles__content___39lD8 {\n      color: inherit; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk.styles__is-white___1SLAl {\n      background-color: white;\n      color: #0a0a0a; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk.styles__is-black___qATrq {\n      background-color: #0a0a0a;\n      color: white; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk.styles__is-light___3_Rp5 {\n      background-color: whitesmoke;\n      color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk.styles__is-dark___2SGrM {\n      background-color: #363636;\n      color: whitesmoke; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk.styles__is-primary___pfmjM {\n      background-color: #e54747;\n      color: #fff; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk.styles__is-info___ps_7r {\n      background-color: #3273dc;\n      color: #fff; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk.styles__is-success___Ige_l {\n      background-color: #23d160;\n      color: #fff; }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk.styles__is-warning___mpL38 {\n      background-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7); }\n    .styles__annotation-panel___37iiJ .styles__notification___3i7Bk.styles__is-danger___4A8c9 {\n      background-color: #ff3860;\n      color: #fff; }\n  .styles__annotation-panel___37iiJ .styles__progress___3Vp97 {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    border: none;\n    border-radius: 290486px;\n    display: block;\n    height: 1rem;\n    overflow: hidden;\n    padding: 0;\n    width: 100%; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97:not(:last-child) {\n      margin-bottom: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97::-webkit-progress-bar {\n      background-color: #dbdbdb; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97::-webkit-progress-value {\n      background-color: #4a4a4a; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97::-moz-progress-bar {\n      background-color: #4a4a4a; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-white___1SLAl::-webkit-progress-value {\n      background-color: white; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-white___1SLAl::-moz-progress-bar {\n      background-color: white; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-black___qATrq::-webkit-progress-value {\n      background-color: #0a0a0a; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-black___qATrq::-moz-progress-bar {\n      background-color: #0a0a0a; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-light___3_Rp5::-webkit-progress-value {\n      background-color: whitesmoke; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-light___3_Rp5::-moz-progress-bar {\n      background-color: whitesmoke; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-dark___2SGrM::-webkit-progress-value {\n      background-color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-dark___2SGrM::-moz-progress-bar {\n      background-color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-primary___pfmjM::-webkit-progress-value {\n      background-color: #e54747; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-primary___pfmjM::-moz-progress-bar {\n      background-color: #e54747; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-info___ps_7r::-webkit-progress-value {\n      background-color: #3273dc; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-info___ps_7r::-moz-progress-bar {\n      background-color: #3273dc; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-success___Ige_l::-webkit-progress-value {\n      background-color: #23d160; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-success___Ige_l::-moz-progress-bar {\n      background-color: #23d160; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-warning___mpL38::-webkit-progress-value {\n      background-color: #ffdd57; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-warning___mpL38::-moz-progress-bar {\n      background-color: #ffdd57; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-danger___4A8c9::-webkit-progress-value {\n      background-color: #ff3860; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-danger___4A8c9::-moz-progress-bar {\n      background-color: #ff3860; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-small___2N8KK {\n      height: 0.75rem; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-medium___1bExO {\n      height: 1.25rem; }\n    .styles__annotation-panel___37iiJ .styles__progress___3Vp97.styles__is-large___2IqpI {\n      height: 1.5rem; }\n  .styles__annotation-panel___37iiJ .styles__table___c_NVW {\n    background-color: white;\n    color: #363636;\n    margin-bottom: 1.5rem;\n    width: 100%; }\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW td,\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW th {\n      border: 1px solid #dbdbdb;\n      border-width: 0 0 1px;\n      padding: 0.5em 0.75em;\n      vertical-align: top; }\n      .styles__annotation-panel___37iiJ .styles__table___c_NVW td.styles__is-narrow___2e2dy,\n      .styles__annotation-panel___37iiJ .styles__table___c_NVW th.styles__is-narrow___2e2dy {\n        white-space: nowrap;\n        width: 1%; }\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW th {\n      color: #363636;\n      text-align: left; }\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW tr:hover {\n      background-color: #fafafa; }\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW tr.styles__is-selected___lVwuB {\n      background-color: #e54747;\n      color: #fff; }\n      .styles__annotation-panel___37iiJ .styles__table___c_NVW tr.styles__is-selected___lVwuB a,\n      .styles__annotation-panel___37iiJ .styles__table___c_NVW tr.styles__is-selected___lVwuB strong {\n        color: currentColor; }\n      .styles__annotation-panel___37iiJ .styles__table___c_NVW tr.styles__is-selected___lVwuB td,\n      .styles__annotation-panel___37iiJ .styles__table___c_NVW tr.styles__is-selected___lVwuB th {\n        border-color: #fff;\n        color: currentColor; }\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW thead td,\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW thead th {\n      border-width: 0 0 2px;\n      color: #7a7a7a; }\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW tfoot td,\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW tfoot th {\n      border-width: 2px 0 0;\n      color: #7a7a7a; }\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW tbody tr:last-child td,\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW tbody tr:last-child th {\n      border-bottom-width: 0; }\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW.styles__is-bordered___2mYQI td,\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW.styles__is-bordered___2mYQI th {\n      border-width: 1px; }\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW.styles__is-bordered___2mYQI tr:last-child td,\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW.styles__is-bordered___2mYQI tr:last-child th {\n      border-bottom-width: 1px; }\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW.styles__is-narrow___2e2dy td,\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW.styles__is-narrow___2e2dy th {\n      padding: 0.25em 0.5em; }\n    .styles__annotation-panel___37iiJ .styles__table___c_NVW.styles__is-striped___ktD3B tbody tr:nth-child(even) {\n      background-color: #fafafa; }\n      .styles__annotation-panel___37iiJ .styles__table___c_NVW.styles__is-striped___ktD3B tbody tr:nth-child(even):hover {\n        background-color: whitesmoke; }\n  .styles__annotation-panel___37iiJ .styles__tag___3DiWy {\n    align-items: center;\n    background-color: whitesmoke;\n    border-radius: 290486px;\n    color: #4a4a4a;\n    display: inline-flex;\n    font-size: 0.75rem;\n    height: 2em;\n    justify-content: center;\n    line-height: 1.5;\n    padding-left: 0.875em;\n    padding-right: 0.875em;\n    white-space: nowrap; }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy .styles__delete___Eofxp {\n      margin-left: 0.25em;\n      margin-right: -0.375em; }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy.styles__is-white___1SLAl {\n      background-color: white;\n      color: #0a0a0a; }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy.styles__is-black___qATrq {\n      background-color: #0a0a0a;\n      color: white; }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy.styles__is-light___3_Rp5 {\n      background-color: whitesmoke;\n      color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy.styles__is-dark___2SGrM {\n      background-color: #363636;\n      color: whitesmoke; }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy.styles__is-primary___pfmjM {\n      background-color: #e54747;\n      color: #fff; }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy.styles__is-info___ps_7r {\n      background-color: #3273dc;\n      color: #fff; }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy.styles__is-success___Ige_l {\n      background-color: #23d160;\n      color: #fff; }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy.styles__is-warning___mpL38 {\n      background-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7); }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy.styles__is-danger___4A8c9 {\n      background-color: #ff3860;\n      color: #fff; }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy.styles__is-medium___1bExO {\n      font-size: 1rem; }\n    .styles__annotation-panel___37iiJ .styles__tag___3DiWy.styles__is-large___2IqpI {\n      font-size: 1.25rem; }\n  .styles__annotation-panel___37iiJ .styles__title___2te3V,\n  .styles__annotation-panel___37iiJ .styles__subtitle___2opLu {\n    word-break: break-word; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V:not(:last-child),\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu:not(:last-child) {\n      margin-bottom: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V em,\n    .styles__annotation-panel___37iiJ .styles__title___2te3V span,\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu em,\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu span {\n      font-weight: 300; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V strong,\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu strong {\n      font-weight: 500; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V .styles__tag___3DiWy,\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu .styles__tag___3DiWy {\n      vertical-align: middle; }\n  .styles__annotation-panel___37iiJ .styles__title___2te3V {\n    color: #363636;\n    font-size: 2rem;\n    font-weight: 300;\n    line-height: 1.125; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V strong {\n      color: inherit; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V + .styles__highlight___3sX1- {\n      margin-top: -0.75rem; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V:not(.styles__is-spaced___fZIzW) + .styles__subtitle___2opLu {\n      margin-top: -1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V.styles__is-1___3_KU8 {\n      font-size: 3rem; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V.styles__is-2___1djuO {\n      font-size: 2.5rem; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V.styles__is-3___1FyMX {\n      font-size: 2rem; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V.styles__is-4___uvTg4 {\n      font-size: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V.styles__is-5___3yjko {\n      font-size: 1.25rem; }\n    .styles__annotation-panel___37iiJ .styles__title___2te3V.styles__is-6___2OJd4 {\n      font-size: 1rem; }\n  .styles__annotation-panel___37iiJ .styles__subtitle___2opLu {\n    color: #4a4a4a;\n    font-size: 1.25rem;\n    font-weight: 300;\n    line-height: 1.25; }\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu strong {\n      color: #363636; }\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu:not(.styles__is-spaced___fZIzW) + .styles__title___2te3V {\n      margin-top: -1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu.styles__is-1___3_KU8 {\n      font-size: 3rem; }\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu.styles__is-2___1djuO {\n      font-size: 2.5rem; }\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu.styles__is-3___1FyMX {\n      font-size: 2rem; }\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu.styles__is-4___uvTg4 {\n      font-size: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu.styles__is-5___3yjko {\n      font-size: 1.25rem; }\n    .styles__annotation-panel___37iiJ .styles__subtitle___2opLu.styles__is-6___2OJd4 {\n      font-size: 1rem; }\n  .styles__annotation-panel___37iiJ .styles__block___3U14C:not(:last-child) {\n    margin-bottom: 1.5rem; }\n  .styles__annotation-panel___37iiJ .styles__container___29g2u {\n    position: relative; }\n    @media screen and (min-width: 1000px) {\n      .styles__annotation-panel___37iiJ .styles__container___29g2u {\n        margin: 0 auto;\n        max-width: 960px;\n        width: 960px; }\n        .styles__annotation-panel___37iiJ .styles__container___29g2u.styles__is-fluid___4iUIR {\n          margin: 0 20px;\n          max-width: none;\n          width: auto; } }\n    @media screen and (min-width: 1192px) {\n      .styles__annotation-panel___37iiJ .styles__container___29g2u {\n        max-width: 1152px;\n        width: 1152px; } }\n    @media screen and (min-width: 1384px) {\n      .styles__annotation-panel___37iiJ .styles__container___29g2u {\n        max-width: 1344px;\n        width: 1344px; } }\n  .styles__annotation-panel___37iiJ .styles__delete___Eofxp {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    background-color: rgba(10, 10, 10, 0.2);\n    border: none;\n    border-radius: 290486px;\n    cursor: pointer;\n    display: inline-block;\n    font-size: 1rem;\n    height: 20px;\n    outline: none;\n    position: relative;\n    vertical-align: top;\n    width: 20px; }\n    .styles__annotation-panel___37iiJ .styles__delete___Eofxp:before, .styles__annotation-panel___37iiJ .styles__delete___Eofxp:after {\n      background-color: white;\n      content: \"\";\n      display: block;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      transform: translateX(-50%) translateY(-50%) rotate(45deg);\n      transform-origin: center center; }\n    .styles__annotation-panel___37iiJ .styles__delete___Eofxp:before {\n      height: 2px;\n      width: 50%; }\n    .styles__annotation-panel___37iiJ .styles__delete___Eofxp:after {\n      height: 50%;\n      width: 2px; }\n    .styles__annotation-panel___37iiJ .styles__delete___Eofxp:hover, .styles__annotation-panel___37iiJ .styles__delete___Eofxp:focus {\n      background-color: rgba(10, 10, 10, 0.3); }\n    .styles__annotation-panel___37iiJ .styles__delete___Eofxp:active {\n      background-color: rgba(10, 10, 10, 0.4); }\n    .styles__annotation-panel___37iiJ .styles__delete___Eofxp.styles__is-small___2N8KK {\n      height: 16px;\n      width: 16px; }\n    .styles__annotation-panel___37iiJ .styles__delete___Eofxp.styles__is-medium___1bExO {\n      height: 24px;\n      width: 24px; }\n    .styles__annotation-panel___37iiJ .styles__delete___Eofxp.styles__is-large___2IqpI {\n      height: 32px;\n      width: 32px; }\n  .styles__annotation-panel___37iiJ .styles__fa___2Gsew {\n    font-size: 21px;\n    text-align: center;\n    vertical-align: top; }\n  .styles__annotation-panel___37iiJ .styles__heading___2RWxa {\n    display: block;\n    font-size: 11px;\n    letter-spacing: 1px;\n    margin-bottom: 5px;\n    text-transform: uppercase; }\n  .styles__annotation-panel___37iiJ .styles__highlight___3sX1- {\n    font-weight: 400;\n    max-width: 100%;\n    overflow: hidden;\n    padding: 0; }\n    .styles__annotation-panel___37iiJ .styles__highlight___3sX1-:not(:last-child) {\n      margin-bottom: 1.5rem; }\n    .styles__annotation-panel___37iiJ .styles__highlight___3sX1- pre {\n      overflow: auto;\n      max-width: 100%; }\n  .styles__annotation-panel___37iiJ .styles__loader___2e_pf {\n    animation: styles__spinAround___3VumK 500ms infinite linear;\n    border: 2px solid #dbdbdb;\n    border-radius: 290486px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: \"\";\n    display: block;\n    height: 1em;\n    position: relative;\n    width: 1em; }\n  .styles__annotation-panel___37iiJ .styles__number___3eAL- {\n    align-items: center;\n    background-color: whitesmoke;\n    border-radius: 290486px;\n    display: inline-flex;\n    font-size: 1.25rem;\n    height: 2em;\n    justify-content: center;\n    margin-right: 1.5rem;\n    min-width: 2.5em;\n    padding: 0.25rem 0.5rem;\n    text-align: center;\n    vertical-align: top; }\n  .styles__annotation-panel___37iiJ.styles__hidden___1qRS2 {\n    right: -300px;\n    opacity: 0; }\n  .styles__annotation-panel___37iiJ .styles__panel-contents___2NsRF {\n    padding: 20px; }\n    .styles__annotation-panel___37iiJ .styles__panel-contents___2NsRF .styles__snippet___35mpP {\n      max-height: 200px;\n      overflow: auto; }\n    .styles__annotation-panel___37iiJ .styles__panel-contents___2NsRF .styles__comments___2Mngh {\n      margin-bottom: 20px; }\n      .styles__annotation-panel___37iiJ .styles__panel-contents___2NsRF .styles__comments___2Mngh .styles__comment___iXbO3 {\n        text-align: left; }\n    .styles__annotation-panel___37iiJ .styles__panel-contents___2NsRF .styles__add-form___12i9F .styles__new-annotation-text___3lCte,\n    .styles__annotation-panel___37iiJ .styles__panel-contents___2NsRF .styles__add-form___12i9F .styles__new-annotation-name___1nBI0 {\n      padding: 0; }\n    .styles__annotation-panel___37iiJ .styles__panel-contents___2NsRF .styles__add-form___12i9F .styles__new-annotation-submit___ahjEA,\n    .styles__annotation-panel___37iiJ .styles__panel-contents___2NsRF .styles__add-form___12i9F .styles__new-annotation-cancel___32qYJ {\n      text-align: left; }\n\n.styles__add-annotation-button___35iwi {\n  position: fixed;\n  right: 15px;\n  bottom: 15px; }\n  .styles__add-annotation-button___35iwi.styles__hidden___1qRS2 {\n    display: none; }\n", ""]);

// exports
exports.locals = {
	"box": "styles__box___1CKrE",
	"button": "styles__button___15veZ",
	"is-focused": "styles__is-focused___IqO12",
	"is-active": "styles__is-active___10U5U",
	"icon": "styles__icon___2P2zJ",
	"is-small": "styles__is-small___2N8KK",
	"is-medium": "styles__is-medium___1bExO",
	"is-large": "styles__is-large___2IqpI",
	"is-hovered": "styles__is-hovered___21JS5",
	"is-link": "styles__is-link___3VoKk",
	"is-white": "styles__is-white___1SLAl",
	"is-inverted": "styles__is-inverted___23Ydv",
	"is-loading": "styles__is-loading___3mj4a",
	"is-outlined": "styles__is-outlined___1fL_P",
	"is-black": "styles__is-black___qATrq",
	"is-light": "styles__is-light___3_Rp5",
	"is-dark": "styles__is-dark___2SGrM",
	"is-primary": "styles__is-primary___pfmjM",
	"is-info": "styles__is-info___ps_7r",
	"is-success": "styles__is-success___Ige_l",
	"is-warning": "styles__is-warning___mpL38",
	"is-danger": "styles__is-danger___4A8c9",
	"is-fullwidth": "styles__is-fullwidth___22abZ",
	"spinAround": "styles__spinAround___3VumK",
	"content": "styles__content___39lD8",
	"input": "styles__input___23AZL",
	"textarea": "styles__textarea___i1MY2",
	"is-inline": "styles__is-inline___1KWzu",
	"checkbox": "styles__checkbox___xbJVD",
	"radio": "styles__radio___GyVU_",
	"select": "styles__select___2KQGE",
	"is-disabled": "styles__is-disabled___1aX81",
	"label": "styles__label___24SLN",
	"help": "styles__help___o34Ni",
	"field": "styles__field___2_6u-",
	"has-addons": "styles__has-addons___1uWuj",
	"control": "styles__control___3Tgax",
	"is-expanded": "styles__is-expanded___Jy9Pz",
	"has-addons-centered": "styles__has-addons-centered___24wLw",
	"has-addons-right": "styles__has-addons-right___2MEx4",
	"has-addons-fullwidth": "styles__has-addons-fullwidth___u5fCV",
	"is-grouped": "styles__is-grouped___1mbks",
	"is-grouped-centered": "styles__is-grouped-centered___2Ctdt",
	"is-grouped-right": "styles__is-grouped-right___380In",
	"is-horizontal": "styles__is-horizontal___hRSJp",
	"field-label": "styles__field-label___1hNhC",
	"is-normal": "styles__is-normal___R81gI",
	"field-body": "styles__field-body___1zr7H",
	"is-narrow": "styles__is-narrow___2e2dy",
	"has-icon": "styles__has-icon___2VHjN",
	"has-icon-right": "styles__has-icon-right___aTW4b",
	"has-icons-left": "styles__has-icons-left___2ZSEr",
	"has-icons-right": "styles__has-icons-right___2sR92",
	"is-left": "styles__is-left___24Vun",
	"is-right": "styles__is-right___3Q5w8",
	"fa": "styles__fa___2Gsew",
	"image": "styles__image___2kKMr",
	"is-square": "styles__is-square___17a6W",
	"is-1by1": "styles__is-1by1___1SVIL",
	"is-4by3": "styles__is-4by3___-36YL",
	"is-3by2": "styles__is-3by2___3JA0v",
	"is-16by9": "styles__is-16by9___xu_zY",
	"is-2by1": "styles__is-2by1___IjLZr",
	"is-16x16": "styles__is-16x16___2eQHI",
	"is-24x24": "styles__is-24x24___QLAup",
	"is-32x32": "styles__is-32x32___3BJpt",
	"is-48x48": "styles__is-48x48___iyi2A",
	"is-64x64": "styles__is-64x64___21u4Z",
	"is-96x96": "styles__is-96x96___1CdZP",
	"is-128x128": "styles__is-128x128___jSNZT",
	"notification": "styles__notification___3i7Bk",
	"delete": "styles__delete___Eofxp",
	"title": "styles__title___2te3V",
	"subtitle": "styles__subtitle___2opLu",
	"progress": "styles__progress___3Vp97",
	"table": "styles__table___c_NVW",
	"is-selected": "styles__is-selected___lVwuB",
	"is-bordered": "styles__is-bordered___2mYQI",
	"is-striped": "styles__is-striped___ktD3B",
	"tag": "styles__tag___3DiWy",
	"highlight": "styles__highlight___3sX1-",
	"is-spaced": "styles__is-spaced___fZIzW",
	"is-1": "styles__is-1___3_KU8",
	"is-2": "styles__is-2___1djuO",
	"is-3": "styles__is-3___1FyMX",
	"is-4": "styles__is-4___uvTg4",
	"is-5": "styles__is-5___3yjko",
	"is-6": "styles__is-6___2OJd4",
	"block": "styles__block___3U14C",
	"container": "styles__container___29g2u",
	"is-fluid": "styles__is-fluid___4iUIR",
	"heading": "styles__heading___2RWxa",
	"loader": "styles__loader___2e_pf",
	"number": "styles__number___3eAL-",
	"hero-video": "styles__hero-video___yqhy1",
	"is-transparent": "styles__is-transparent___DFJLf",
	"hero-buttons": "styles__hero-buttons___3MayJ",
	"hero-head": "styles__hero-head___2_tzA",
	"hero-foot": "styles__hero-foot___3ltNT",
	"hero-body": "styles__hero-body___1xipy",
	"hero": "styles__hero___1T609",
	"nav": "styles__nav___1uOB6",
	"tabs": "styles__tabs___30uZb",
	"nav-menu": "styles__nav-menu___2vU1z",
	"nav-item": "styles__nav-item___2dPKD",
	"is-boxed": "styles__is-boxed___ZEF4l",
	"is-toggle": "styles__is-toggle___3p0sy",
	"is-bold": "styles__is-bold___3LmNs",
	"nav-toggle": "styles__nav-toggle___35uc6",
	"is-fullheight": "styles__is-fullheight___3tA1A",
	"section": "styles__section___27Uhx",
	"footer": "styles__footer___1HLJ-",
	"annotation-mark": "styles__annotation-mark___1SUZq",
	"annotation-panel": "styles__annotation-panel___37iiJ",
	"is-block": "styles__is-block___3UkmX",
	"is-block-mobile": "styles__is-block-mobile___2GhrD",
	"is-block-tablet": "styles__is-block-tablet___29BSb",
	"is-block-tablet-only": "styles__is-block-tablet-only___2mzA0",
	"is-block-touch": "styles__is-block-touch___2EAhY",
	"is-block-desktop": "styles__is-block-desktop___39GtE",
	"is-block-desktop-only": "styles__is-block-desktop-only___2xOBg",
	"is-block-widescreen": "styles__is-block-widescreen___10tA8",
	"is-flex": "styles__is-flex___2AIJm",
	"is-flex-mobile": "styles__is-flex-mobile___uTNgk",
	"is-flex-tablet": "styles__is-flex-tablet___1Twes",
	"is-flex-tablet-only": "styles__is-flex-tablet-only___2lLen",
	"is-flex-touch": "styles__is-flex-touch___1Z5rA",
	"is-flex-desktop": "styles__is-flex-desktop___1u6r5",
	"is-flex-desktop-only": "styles__is-flex-desktop-only___38aPa",
	"is-flex-widescreen": "styles__is-flex-widescreen___LRw6h",
	"is-inline-mobile": "styles__is-inline-mobile___22RQI",
	"is-inline-tablet": "styles__is-inline-tablet___1K6wL",
	"is-inline-tablet-only": "styles__is-inline-tablet-only___1ylyr",
	"is-inline-touch": "styles__is-inline-touch___3lbov",
	"is-inline-desktop": "styles__is-inline-desktop___3zQY-",
	"is-inline-desktop-only": "styles__is-inline-desktop-only___1Phih",
	"is-inline-widescreen": "styles__is-inline-widescreen___36eOH",
	"is-inline-block": "styles__is-inline-block___-vlwj",
	"is-inline-block-mobile": "styles__is-inline-block-mobile___36CjM",
	"is-inline-block-tablet": "styles__is-inline-block-tablet___uzbt5",
	"is-inline-block-tablet-only": "styles__is-inline-block-tablet-only___2Fjtf",
	"is-inline-block-touch": "styles__is-inline-block-touch___3_I_c",
	"is-inline-block-desktop": "styles__is-inline-block-desktop___2OFM6",
	"is-inline-block-desktop-only": "styles__is-inline-block-desktop-only___2d_dg",
	"is-inline-block-widescreen": "styles__is-inline-block-widescreen___2bC7I",
	"is-inline-flex": "styles__is-inline-flex___wf7ac",
	"is-inline-flex-mobile": "styles__is-inline-flex-mobile___3HUHL",
	"is-inline-flex-tablet": "styles__is-inline-flex-tablet___XJT3j",
	"is-inline-flex-tablet-only": "styles__is-inline-flex-tablet-only___7quEU",
	"is-inline-flex-touch": "styles__is-inline-flex-touch___3KnWt",
	"is-inline-flex-desktop": "styles__is-inline-flex-desktop___1Erp8",
	"is-inline-flex-desktop-only": "styles__is-inline-flex-desktop-only___3bJKF",
	"is-inline-flex-widescreen": "styles__is-inline-flex-widescreen___3FFTF",
	"is-clearfix": "styles__is-clearfix___3D1L7",
	"is-pulled-left": "styles__is-pulled-left___1VKAe",
	"is-pulled-right": "styles__is-pulled-right___2cgv_",
	"is-clipped": "styles__is-clipped___1nE9T",
	"is-overlay": "styles__is-overlay___12rR0",
	"has-text-centered": "styles__has-text-centered___21-HS",
	"has-text-left": "styles__has-text-left___2S2zX",
	"has-text-right": "styles__has-text-right___B6Mxd",
	"has-text-white": "styles__has-text-white___2Xssf",
	"has-text-black": "styles__has-text-black___1g36S",
	"has-text-light": "styles__has-text-light___3egow",
	"has-text-dark": "styles__has-text-dark___3oN4g",
	"has-text-primary": "styles__has-text-primary___27duh",
	"has-text-info": "styles__has-text-info___1fFwj",
	"has-text-success": "styles__has-text-success___3TEOl",
	"has-text-warning": "styles__has-text-warning___32DRr",
	"has-text-danger": "styles__has-text-danger___1FWf7",
	"is-hidden": "styles__is-hidden___26YPu",
	"is-hidden-mobile": "styles__is-hidden-mobile___1oKqN",
	"is-hidden-tablet": "styles__is-hidden-tablet___1yTWH",
	"is-hidden-tablet-only": "styles__is-hidden-tablet-only____KjEn",
	"is-hidden-touch": "styles__is-hidden-touch___3QpVk",
	"is-hidden-desktop": "styles__is-hidden-desktop___jRfph",
	"is-hidden-desktop-only": "styles__is-hidden-desktop-only___2c1M1",
	"is-hidden-widescreen": "styles__is-hidden-widescreen___3YCbw",
	"is-marginless": "styles__is-marginless___3pvTK",
	"is-paddingless": "styles__is-paddingless___1lb_u",
	"is-unselectable": "styles__is-unselectable___2EAGv",
	"hidden": "styles__hidden___1qRS2",
	"panel-contents": "styles__panel-contents___2NsRF",
	"snippet": "styles__snippet___35mpP",
	"comments": "styles__comments___2Mngh",
	"comment": "styles__comment___iXbO3",
	"add-form": "styles__add-form___12i9F",
	"new-annotation-text": "styles__new-annotation-text___3lCte",
	"new-annotation-name": "styles__new-annotation-name___1nBI0",
	"new-annotation-submit": "styles__new-annotation-submit___ahjEA",
	"new-annotation-cancel": "styles__new-annotation-cancel___32qYJ",
	"add-annotation-button": "styles__add-annotation-button___35iwi"
};

/***/ }),
/* 38 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../buffer/index.js */ 12).Buffer))

/***/ }),
/* 39 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/dom-seek/index.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ 40)['default'];


/***/ }),
/* 40 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/dom-seek/lib/index.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = seek;

var _ancestors = __webpack_require__(/*! ancestors */ 17);

var _ancestors2 = _interopRequireDefault(_ancestors);

var _indexOf = __webpack_require__(/*! index-of */ 42);

var _indexOf2 = _interopRequireDefault(_indexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var E_SHOW = 'Argument 1 of seek must use filter NodeFilter.SHOW_TEXT.';
var E_WHERE = 'Argument 2 of seek must be a number or a Text Node.';

var SHOW_TEXT = 4;
var TEXT_NODE = 3;

function seek(iter, where) {
  if (iter.whatToShow !== SHOW_TEXT) {
    throw new Error(E_SHOW);
  }

  var count = 0;
  var node = iter.referenceNode;
  var predicates = null;

  if (isNumber(where)) {
    predicates = {
      forward: function forward() {
        return count < where;
      },
      backward: function backward() {
        return count > where;
      }
    };
  } else if (isText(where)) {
    var forward = before(node, where) ? function () {
      return false;
    } : function () {
      return node !== where;
    };
    var backward = function backward() {
      return node != where || !iter.pointerBeforeReferenceNode;
    };
    predicates = { forward: forward, backward: backward };
  } else {
    throw new Error(E_WHERE);
  }

  while (predicates.forward() && (node = iter.nextNode()) !== null) {
    count += node.nodeValue.length;
  }

  while (predicates.backward() && (node = iter.previousNode()) !== null) {
    count -= node.nodeValue.length;
  }

  return count;
}

function isNumber(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

function isText(node) {
  return node.nodeType === TEXT_NODE;
}

function before(ref, node) {
  if (ref === node) return false;

  var common = null;
  var left = [ref].concat((0, _ancestors2['default'])(ref)).reverse();
  var right = [node].concat((0, _ancestors2['default'])(node)).reverse();

  while (left[0] === right[0]) {
    common = left.shift();
    right.shift();
  }

  left = left[0];
  right = right[0];

  var l = (0, _indexOf2['default'])(common.childNodes, left);
  var r = (0, _indexOf2['default'])(common.childNodes, right);

  return l > r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZWVrIiwiRV9TSE9XIiwiRV9XSEVSRSIsIlNIT1dfVEVYVCIsIlRFWFRfTk9ERSIsIml0ZXIiLCJ3aGVyZSIsIndoYXRUb1Nob3ciLCJFcnJvciIsImNvdW50Iiwibm9kZSIsInJlZmVyZW5jZU5vZGUiLCJwcmVkaWNhdGVzIiwiaXNOdW1iZXIiLCJmb3J3YXJkIiwiYmFja3dhcmQiLCJpc1RleHQiLCJiZWZvcmUiLCJwb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSIsIm5leHROb2RlIiwibm9kZVZhbHVlIiwibGVuZ3RoIiwicHJldmlvdXNOb2RlIiwibiIsImlzTmFOIiwicGFyc2VJbnQiLCJpc0Zpbml0ZSIsIm5vZGVUeXBlIiwicmVmIiwiY29tbW9uIiwibGVmdCIsImNvbmNhdCIsInJldmVyc2UiLCJyaWdodCIsInNoaWZ0IiwibCIsImNoaWxkTm9kZXMiLCJyIl0sIm1hcHBpbmdzIjoiOzs7cUJBVXdCQSxJOztBQVZ4Qjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxTQUFTLDBEQUFmO0FBQ0EsSUFBTUMsVUFBVSxxREFBaEI7O0FBRUEsSUFBTUMsWUFBWSxDQUFsQjtBQUNBLElBQU1DLFlBQVksQ0FBbEI7O0FBR2UsU0FBU0osSUFBVCxDQUFjSyxJQUFkLEVBQW9CQyxLQUFwQixFQUEyQjtBQUN4QyxNQUFJRCxLQUFLRSxVQUFMLEtBQW9CSixTQUF4QixFQUFtQztBQUNqQyxVQUFNLElBQUlLLEtBQUosQ0FBVVAsTUFBVixDQUFOO0FBQ0Q7O0FBRUQsTUFBSVEsUUFBUSxDQUFaO0FBQ0EsTUFBSUMsT0FBT0wsS0FBS00sYUFBaEI7QUFDQSxNQUFJQyxhQUFhLElBQWpCOztBQUVBLE1BQUlDLFNBQVNQLEtBQVQsQ0FBSixFQUFxQjtBQUNuQk0saUJBQWE7QUFDWEUsZUFBUztBQUFBLGVBQU1MLFFBQVFILEtBQWQ7QUFBQSxPQURFO0FBRVhTLGdCQUFVO0FBQUEsZUFBTU4sUUFBUUgsS0FBZDtBQUFBO0FBRkMsS0FBYjtBQUlELEdBTEQsTUFLTyxJQUFJVSxPQUFPVixLQUFQLENBQUosRUFBbUI7QUFDeEIsUUFBSVEsVUFBVUcsT0FBT1AsSUFBUCxFQUFhSixLQUFiLElBQXNCO0FBQUEsYUFBTSxLQUFOO0FBQUEsS0FBdEIsR0FBb0M7QUFBQSxhQUFNSSxTQUFTSixLQUFmO0FBQUEsS0FBbEQ7QUFDQSxRQUFJUyxXQUFXLFNBQVhBLFFBQVc7QUFBQSxhQUFNTCxRQUFRSixLQUFSLElBQWlCLENBQUNELEtBQUthLDBCQUE3QjtBQUFBLEtBQWY7QUFDQU4saUJBQWEsRUFBQ0UsZ0JBQUQsRUFBVUMsa0JBQVYsRUFBYjtBQUNELEdBSk0sTUFJQTtBQUNMLFVBQU0sSUFBSVAsS0FBSixDQUFVTixPQUFWLENBQU47QUFDRDs7QUFFRCxTQUFPVSxXQUFXRSxPQUFYLE1BQXdCLENBQUNKLE9BQU9MLEtBQUtjLFFBQUwsRUFBUixNQUE2QixJQUE1RCxFQUFrRTtBQUNoRVYsYUFBU0MsS0FBS1UsU0FBTCxDQUFlQyxNQUF4QjtBQUNEOztBQUVELFNBQU9ULFdBQVdHLFFBQVgsTUFBeUIsQ0FBQ0wsT0FBT0wsS0FBS2lCLFlBQUwsRUFBUixNQUFpQyxJQUFqRSxFQUF1RTtBQUNyRWIsYUFBU0MsS0FBS1UsU0FBTCxDQUFlQyxNQUF4QjtBQUNEOztBQUVELFNBQU9aLEtBQVA7QUFDRDs7QUFHRCxTQUFTSSxRQUFULENBQWtCVSxDQUFsQixFQUFxQjtBQUNuQixTQUFPLENBQUNDLE1BQU1DLFNBQVNGLENBQVQsQ0FBTixDQUFELElBQXVCRyxTQUFTSCxDQUFULENBQTlCO0FBQ0Q7O0FBR0QsU0FBU1AsTUFBVCxDQUFnQk4sSUFBaEIsRUFBc0I7QUFDcEIsU0FBT0EsS0FBS2lCLFFBQUwsS0FBa0J2QixTQUF6QjtBQUNEOztBQUdELFNBQVNhLE1BQVQsQ0FBZ0JXLEdBQWhCLEVBQXFCbEIsSUFBckIsRUFBMkI7QUFDekIsTUFBSWtCLFFBQVFsQixJQUFaLEVBQWtCLE9BQU8sS0FBUDs7QUFFbEIsTUFBSW1CLFNBQVMsSUFBYjtBQUNBLE1BQUlDLE9BQU8sQ0FBQ0YsR0FBRCxFQUFNRyxNQUFOLENBQWEsNEJBQVVILEdBQVYsQ0FBYixFQUE2QkksT0FBN0IsRUFBWDtBQUNBLE1BQUlDLFFBQVEsQ0FBQ3ZCLElBQUQsRUFBT3FCLE1BQVAsQ0FBYyw0QkFBVXJCLElBQVYsQ0FBZCxFQUErQnNCLE9BQS9CLEVBQVo7O0FBRUEsU0FBT0YsS0FBSyxDQUFMLE1BQVlHLE1BQU0sQ0FBTixDQUFuQixFQUE2QjtBQUMzQkosYUFBU0MsS0FBS0ksS0FBTCxFQUFUO0FBQ0FELFVBQU1DLEtBQU47QUFDRDs7QUFFREosU0FBT0EsS0FBSyxDQUFMLENBQVA7QUFDQUcsVUFBUUEsTUFBTSxDQUFOLENBQVI7O0FBRUEsTUFBSUUsSUFBSSwwQkFBUU4sT0FBT08sVUFBZixFQUEyQk4sSUFBM0IsQ0FBUjtBQUNBLE1BQUlPLElBQUksMEJBQVFSLE9BQU9PLFVBQWYsRUFBMkJILEtBQTNCLENBQVI7O0FBRUEsU0FBT0UsSUFBSUUsQ0FBWDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuY2VzdG9ycyBmcm9tICdhbmNlc3RvcnMnXG5pbXBvcnQgaW5kZXhPZiBmcm9tICdpbmRleC1vZidcblxuY29uc3QgRV9TSE9XID0gJ0FyZ3VtZW50IDEgb2Ygc2VlayBtdXN0IHVzZSBmaWx0ZXIgTm9kZUZpbHRlci5TSE9XX1RFWFQuJ1xuY29uc3QgRV9XSEVSRSA9ICdBcmd1bWVudCAyIG9mIHNlZWsgbXVzdCBiZSBhIG51bWJlciBvciBhIFRleHQgTm9kZS4nXG5cbmNvbnN0IFNIT1dfVEVYVCA9IDRcbmNvbnN0IFRFWFRfTk9ERSA9IDNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWVrKGl0ZXIsIHdoZXJlKSB7XG4gIGlmIChpdGVyLndoYXRUb1Nob3cgIT09IFNIT1dfVEVYVCkge1xuICAgIHRocm93IG5ldyBFcnJvcihFX1NIT1cpXG4gIH1cblxuICBsZXQgY291bnQgPSAwXG4gIGxldCBub2RlID0gaXRlci5yZWZlcmVuY2VOb2RlXG4gIGxldCBwcmVkaWNhdGVzID0gbnVsbFxuXG4gIGlmIChpc051bWJlcih3aGVyZSkpIHtcbiAgICBwcmVkaWNhdGVzID0ge1xuICAgICAgZm9yd2FyZDogKCkgPT4gY291bnQgPCB3aGVyZSxcbiAgICAgIGJhY2t3YXJkOiAoKSA9PiBjb3VudCA+IHdoZXJlLFxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1RleHQod2hlcmUpKSB7XG4gICAgbGV0IGZvcndhcmQgPSBiZWZvcmUobm9kZSwgd2hlcmUpID8gKCkgPT4gZmFsc2UgOiAoKSA9PiBub2RlICE9PSB3aGVyZVxuICAgIGxldCBiYWNrd2FyZCA9ICgpID0+IG5vZGUgIT0gd2hlcmUgfHwgIWl0ZXIucG9pbnRlckJlZm9yZVJlZmVyZW5jZU5vZGVcbiAgICBwcmVkaWNhdGVzID0ge2ZvcndhcmQsIGJhY2t3YXJkfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihFX1dIRVJFKVxuICB9XG5cbiAgd2hpbGUgKHByZWRpY2F0ZXMuZm9yd2FyZCgpICYmIChub2RlID0gaXRlci5uZXh0Tm9kZSgpKSAhPT0gbnVsbCkge1xuICAgIGNvdW50ICs9IG5vZGUubm9kZVZhbHVlLmxlbmd0aFxuICB9XG5cbiAgd2hpbGUgKHByZWRpY2F0ZXMuYmFja3dhcmQoKSAmJiAobm9kZSA9IGl0ZXIucHJldmlvdXNOb2RlKCkpICE9PSBudWxsKSB7XG4gICAgY291bnQgLT0gbm9kZS5ub2RlVmFsdWUubGVuZ3RoXG4gIH1cblxuICByZXR1cm4gY291bnRcbn1cblxuXG5mdW5jdGlvbiBpc051bWJlcihuKSB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VJbnQobikpICYmIGlzRmluaXRlKG4pXG59XG5cblxuZnVuY3Rpb24gaXNUZXh0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IFRFWFRfTk9ERVxufVxuXG5cbmZ1bmN0aW9uIGJlZm9yZShyZWYsIG5vZGUpIHtcbiAgaWYgKHJlZiA9PT0gbm9kZSkgcmV0dXJuIGZhbHNlXG5cbiAgbGV0IGNvbW1vbiA9IG51bGxcbiAgbGV0IGxlZnQgPSBbcmVmXS5jb25jYXQoYW5jZXN0b3JzKHJlZikpLnJldmVyc2UoKVxuICBsZXQgcmlnaHQgPSBbbm9kZV0uY29uY2F0KGFuY2VzdG9ycyhub2RlKSkucmV2ZXJzZSgpXG5cbiAgd2hpbGUgKGxlZnRbMF0gPT09IHJpZ2h0WzBdKSB7XG4gICAgY29tbW9uID0gbGVmdC5zaGlmdCgpXG4gICAgcmlnaHQuc2hpZnQoKVxuICB9XG5cbiAgbGVmdCA9IGxlZnRbMF1cbiAgcmlnaHQgPSByaWdodFswXVxuXG4gIGxldCBsID0gaW5kZXhPZihjb21tb24uY2hpbGROb2RlcywgbGVmdClcbiAgbGV0IHIgPSBpbmRleE9mKGNvbW1vbi5jaGlsZE5vZGVzLCByaWdodClcblxuICByZXR1cm4gbCA+IHJcbn1cbiJdfQ==

/***/ }),
/* 41 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/ieee754/index.js ***!
  \****************************/
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 42 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/index-of/index.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * index-of <https://github.com/jonschlinkert/index-of>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */



module.exports = function indexOf(arr, ele, start) {
  start = start || 0;
  var idx = -1;

  if (arr == null) return idx;
  var len = arr.length;
  var i = start < 0
    ? (len + start)
    : start;

  if (i >= arr.length) {
    return -1;
  }

  while (i < len) {
    if (arr[i] === ele) {
      return i;
    }
    i++;
  }

  return -1;
};


/***/ }),
/* 43 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/isarray/index.js ***!
  \****************************/
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 44 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./~/simple-xpath-position/index.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/xpath */ 46)


/***/ }),
/* 45 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./~/simple-xpath-position/lib/dom-exception.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOMException = function DOMException(message, name) {
  _classCallCheck(this, DOMException);

  this.message = message;
  this.name = name;
  this.stack = new Error().stack;
};

exports["default"] = DOMException;


DOMException.prototype = new Error();

DOMException.prototype.toString = function () {
  return this.name + ": " + this.message;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb20tZXhjZXB0aW9uLmpzIl0sIm5hbWVzIjpbIkRPTUV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJuYW1lIiwic3RhY2siLCJFcnJvciIsInByb3RvdHlwZSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBcUJBLFksR0FDbkIsc0JBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCO0FBQUE7O0FBQ3pCLE9BQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEtBQUwsR0FBYyxJQUFJQyxLQUFKLEVBQUQsQ0FBY0QsS0FBM0I7QUFDRCxDOztxQkFMa0JILFk7OztBQVFyQkEsYUFBYUssU0FBYixHQUF5QixJQUFJRCxLQUFKLEVBQXpCOztBQUVBSixhQUFhSyxTQUFiLENBQXVCQyxRQUF2QixHQUFrQyxZQUFZO0FBQzVDLFNBQVUsS0FBS0osSUFBZixVQUF3QixLQUFLRCxPQUE3QjtBQUNELENBRkQiLCJmaWxlIjoiZG9tLWV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG5hbWUpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrXG4gIH1cbn1cblxuRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpXG5cbkRPTUV4Y2VwdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBgJHt0aGlzLm5hbWV9OiAke3RoaXMubWVzc2FnZX1gXG59XG4iXX0=

/***/ }),
/* 46 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/simple-xpath-position/lib/xpath.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.fromNode = fromNode;
exports.toNode = toNode;

var _getDocument = __webpack_require__(/*! get-document */ 13);

var _getDocument2 = _interopRequireDefault(_getDocument);

var _domException = __webpack_require__(/*! ./dom-exception */ 45);

var _domException2 = _interopRequireDefault(_domException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// https://developer.mozilla.org/en-US/docs/XPathResult
var FIRST_ORDERED_NODE_TYPE = 9;

// Default namespace for XHTML documents
var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';

/**
 * Compute an XPath expression for the given node.
 *
 * If the optional parameter `root` is supplied, the computed XPath expression
 * will be relative to it. Otherwise, the root element is the root of the
 * document to which `node` belongs.
 *
 * @param {Node} node The node for which to compute an XPath expression.
 * @param {Node} [root] The root context for the XPath expression.
 * @returns {string}
 */
function fromNode(node) {
  var root = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  if (node === undefined) {
    throw new Error('missing required parameter "node"');
  }

  root = root || (0, _getDocument2['default'])(node);

  var path = '/';
  while (node !== root) {
    if (!node) {
      var message = 'The supplied node is not contained by the root node.';
      var name = 'InvalidNodeTypeError';
      throw new _domException2['default'](message, name);
    }
    path = '/' + nodeName(node) + '[' + nodePosition(node) + ']' + path;
    node = node.parentNode;
  }
  return path.replace(/\/$/, '');
}

/**
 * Find a node using an XPath relative to the given root node.
 *
 * The XPath expressions are evaluated relative to the Node argument `root`.
 *
 * If the optional parameter `resolver` is supplied, it will be used to resolve
 * any namespaces within the XPath.
 *
 * @param {string} path An XPath String to evaluate.
 * @param {Node} root The root context for the XPath expression.
 * @returns {Node|null} The first matching Node or null if none is found.
 */
function toNode(path, root) {
  var resolver = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  if (path === undefined) {
    throw new Error('missing required parameter "path"');
  }
  if (root === undefined) {
    throw new Error('missing required parameter "root"');
  }

  // Make the path relative to the root, if not the document.
  var document = (0, _getDocument2['default'])(root);
  if (root !== document) path = path.replace(/^\//, './');

  // Make a default resolver.
  var documentElement = document.documentElement;
  if (resolver === null && documentElement.lookupNamespaceURI) {
    (function () {
      var defaultNS = documentElement.lookupNamespaceURI(null) || HTML_NAMESPACE;
      resolver = function resolver(prefix) {
        var ns = { '_default_': defaultNS };
        return ns[prefix] || documentElement.lookupNamespaceURI(prefix);
      };
    })();
  }

  return resolve(path, root, resolver);
}

// Get the XPath node name.
function nodeName(node) {
  switch (node.nodeName) {
    case '#text':
      return 'text()';
    case '#comment':
      return 'comment()';
    case '#cdata-section':
      return 'cdata-section()';
    default:
      return node.nodeName.toLowerCase();
  }
}

// Get the ordinal position of this node among its siblings of the same name.
function nodePosition(node) {
  var name = node.nodeName;
  var position = 1;
  while (node = node.previousSibling) {
    if (node.nodeName === name) position += 1;
  }
  return position;
}

// Find a single node with XPath `path`
function resolve(path, root, resolver) {
  try {
    // Add a default value to each path part lacking a prefix.
    var nspath = path.replace(/\/(?!\.)([^\/:\(]+)(?=\/|$)/g, '/_default_:$1');
    return platformResolve(nspath, root, resolver);
  } catch (err) {
    return fallbackResolve(path, root);
  }
}

// Find a single node with XPath `path` using the simple, built-in evaluator.
function fallbackResolve(path, root) {
  var steps = path.split("/");
  var node = root;
  while (node) {
    var step = steps.shift();
    if (step === undefined) break;
    if (step === '.') continue;

    var _step$split = step.split(/[\[\]]/);

    var name = _step$split[0];
    var position = _step$split[1];

    name = name.replace('_default_:', '');
    position = position ? parseInt(position) : 1;
    node = findChild(node, name, position);
  }
  return node;
}

// Find a single node with XPath `path` using `document.evaluate`.
function platformResolve(path, root, resolver) {
  var document = (0, _getDocument2['default'])(root);
  var r = document.evaluate(path, root, resolver, FIRST_ORDERED_NODE_TYPE, null);
  return r.singleNodeValue;
}

// Find the child of the given node by name and ordinal position.
function findChild(node, name, position) {
  for (node = node.firstChild; node; node = node.nextSibling) {
    if (nodeName(node) === name && --position === 0) break;
  }
  return node;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy94cGF0aC5qcyJdLCJuYW1lcyI6WyJmcm9tTm9kZSIsInRvTm9kZSIsIkZJUlNUX09SREVSRURfTk9ERV9UWVBFIiwiSFRNTF9OQU1FU1BBQ0UiLCJub2RlIiwicm9vdCIsInVuZGVmaW5lZCIsIkVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJuYW1lIiwibm9kZU5hbWUiLCJub2RlUG9zaXRpb24iLCJwYXJlbnROb2RlIiwicmVwbGFjZSIsInJlc29sdmVyIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJsb29rdXBOYW1lc3BhY2VVUkkiLCJkZWZhdWx0TlMiLCJwcmVmaXgiLCJucyIsInJlc29sdmUiLCJ0b0xvd2VyQ2FzZSIsInBvc2l0aW9uIiwicHJldmlvdXNTaWJsaW5nIiwibnNwYXRoIiwicGxhdGZvcm1SZXNvbHZlIiwiZXJyIiwiZmFsbGJhY2tSZXNvbHZlIiwic3RlcHMiLCJzcGxpdCIsInN0ZXAiLCJzaGlmdCIsInBhcnNlSW50IiwiZmluZENoaWxkIiwiciIsImV2YWx1YXRlIiwic2luZ2xlTm9kZVZhbHVlIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIl0sIm1hcHBpbmdzIjoiOzs7UUFzQmdCQSxRLEdBQUFBLFE7UUFpQ0FDLE0sR0FBQUEsTTs7QUF2RGhCOzs7O0FBRUE7Ozs7OztBQUVBO0FBQ0EsSUFBTUMsMEJBQTBCLENBQWhDOztBQUVBO0FBQ0EsSUFBTUMsaUJBQWlCLDhCQUF2Qjs7QUFHQTs7Ozs7Ozs7Ozs7QUFXTyxTQUFTSCxRQUFULENBQWtCSSxJQUFsQixFQUFxQztBQUFBLE1BQWJDLElBQWEseURBQU4sSUFBTTs7QUFDMUMsTUFBSUQsU0FBU0UsU0FBYixFQUF3QjtBQUN0QixVQUFNLElBQUlDLEtBQUosQ0FBVSxtQ0FBVixDQUFOO0FBQ0Q7O0FBRURGLFNBQU9BLFFBQVEsOEJBQVlELElBQVosQ0FBZjs7QUFFQSxNQUFJSSxPQUFPLEdBQVg7QUFDQSxTQUFPSixTQUFTQyxJQUFoQixFQUFzQjtBQUNwQixRQUFJLENBQUNELElBQUwsRUFBVztBQUNULFVBQUlLLFVBQVUsc0RBQWQ7QUFDQSxVQUFJQyxPQUFPLHNCQUFYO0FBQ0EsWUFBTSw4QkFBaUJELE9BQWpCLEVBQTBCQyxJQUExQixDQUFOO0FBQ0Q7QUFDREYsaUJBQVdHLFNBQVNQLElBQVQsQ0FBWCxTQUE2QlEsYUFBYVIsSUFBYixDQUE3QixTQUFtREksSUFBbkQ7QUFDQUosV0FBT0EsS0FBS1MsVUFBWjtBQUNEO0FBQ0QsU0FBT0wsS0FBS00sT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FBUDtBQUNEOztBQUdEOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTYixNQUFULENBQWdCTyxJQUFoQixFQUFzQkgsSUFBdEIsRUFBNkM7QUFBQSxNQUFqQlUsUUFBaUIseURBQU4sSUFBTTs7QUFDbEQsTUFBSVAsU0FBU0YsU0FBYixFQUF3QjtBQUN0QixVQUFNLElBQUlDLEtBQUosQ0FBVSxtQ0FBVixDQUFOO0FBQ0Q7QUFDRCxNQUFJRixTQUFTQyxTQUFiLEVBQXdCO0FBQ3RCLFVBQU0sSUFBSUMsS0FBSixDQUFVLG1DQUFWLENBQU47QUFDRDs7QUFFRDtBQUNBLE1BQUlTLFdBQVcsOEJBQVlYLElBQVosQ0FBZjtBQUNBLE1BQUlBLFNBQVNXLFFBQWIsRUFBdUJSLE9BQU9BLEtBQUtNLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLElBQXBCLENBQVA7O0FBRXZCO0FBQ0EsTUFBSUcsa0JBQWtCRCxTQUFTQyxlQUEvQjtBQUNBLE1BQUlGLGFBQWEsSUFBYixJQUFxQkUsZ0JBQWdCQyxrQkFBekMsRUFBNkQ7QUFBQTtBQUMzRCxVQUFJQyxZQUFZRixnQkFBZ0JDLGtCQUFoQixDQUFtQyxJQUFuQyxLQUE0Q2YsY0FBNUQ7QUFDQVksaUJBQVcsa0JBQUNLLE1BQUQsRUFBWTtBQUNyQixZQUFJQyxLQUFLLEVBQUMsYUFBYUYsU0FBZCxFQUFUO0FBQ0EsZUFBT0UsR0FBR0QsTUFBSCxLQUFjSCxnQkFBZ0JDLGtCQUFoQixDQUFtQ0UsTUFBbkMsQ0FBckI7QUFDRCxPQUhEO0FBRjJEO0FBTTVEOztBQUVELFNBQU9FLFFBQVFkLElBQVIsRUFBY0gsSUFBZCxFQUFvQlUsUUFBcEIsQ0FBUDtBQUNEOztBQUdEO0FBQ0EsU0FBU0osUUFBVCxDQUFrQlAsSUFBbEIsRUFBd0I7QUFDdEIsVUFBUUEsS0FBS08sUUFBYjtBQUNBLFNBQUssT0FBTDtBQUFjLGFBQU8sUUFBUDtBQUNkLFNBQUssVUFBTDtBQUFpQixhQUFPLFdBQVA7QUFDakIsU0FBSyxnQkFBTDtBQUF1QixhQUFPLGlCQUFQO0FBQ3ZCO0FBQVMsYUFBT1AsS0FBS08sUUFBTCxDQUFjWSxXQUFkLEVBQVA7QUFKVDtBQU1EOztBQUdEO0FBQ0EsU0FBU1gsWUFBVCxDQUFzQlIsSUFBdEIsRUFBNEI7QUFDMUIsTUFBSU0sT0FBT04sS0FBS08sUUFBaEI7QUFDQSxNQUFJYSxXQUFXLENBQWY7QUFDQSxTQUFRcEIsT0FBT0EsS0FBS3FCLGVBQXBCLEVBQXNDO0FBQ3BDLFFBQUlyQixLQUFLTyxRQUFMLEtBQWtCRCxJQUF0QixFQUE0QmMsWUFBWSxDQUFaO0FBQzdCO0FBQ0QsU0FBT0EsUUFBUDtBQUNEOztBQUdEO0FBQ0EsU0FBU0YsT0FBVCxDQUFpQmQsSUFBakIsRUFBdUJILElBQXZCLEVBQTZCVSxRQUE3QixFQUF1QztBQUNyQyxNQUFJO0FBQ0Y7QUFDQSxRQUFJVyxTQUFTbEIsS0FBS00sT0FBTCxDQUFhLDhCQUFiLEVBQTZDLGVBQTdDLENBQWI7QUFDQSxXQUFPYSxnQkFBZ0JELE1BQWhCLEVBQXdCckIsSUFBeEIsRUFBOEJVLFFBQTlCLENBQVA7QUFDRCxHQUpELENBSUUsT0FBT2EsR0FBUCxFQUFZO0FBQ1osV0FBT0MsZ0JBQWdCckIsSUFBaEIsRUFBc0JILElBQXRCLENBQVA7QUFDRDtBQUNGOztBQUdEO0FBQ0EsU0FBU3dCLGVBQVQsQ0FBeUJyQixJQUF6QixFQUErQkgsSUFBL0IsRUFBcUM7QUFDbkMsTUFBSXlCLFFBQVF0QixLQUFLdUIsS0FBTCxDQUFXLEdBQVgsQ0FBWjtBQUNBLE1BQUkzQixPQUFPQyxJQUFYO0FBQ0EsU0FBT0QsSUFBUCxFQUFhO0FBQ1gsUUFBSTRCLE9BQU9GLE1BQU1HLEtBQU4sRUFBWDtBQUNBLFFBQUlELFNBQVMxQixTQUFiLEVBQXdCO0FBQ3hCLFFBQUkwQixTQUFTLEdBQWIsRUFBa0I7O0FBSFAsc0JBSVlBLEtBQUtELEtBQUwsQ0FBVyxRQUFYLENBSlo7O0FBQUEsUUFJTnJCLElBSk07QUFBQSxRQUlBYyxRQUpBOztBQUtYZCxXQUFPQSxLQUFLSSxPQUFMLENBQWEsWUFBYixFQUEyQixFQUEzQixDQUFQO0FBQ0FVLGVBQVdBLFdBQVdVLFNBQVNWLFFBQVQsQ0FBWCxHQUFnQyxDQUEzQztBQUNBcEIsV0FBTytCLFVBQVUvQixJQUFWLEVBQWdCTSxJQUFoQixFQUFzQmMsUUFBdEIsQ0FBUDtBQUNEO0FBQ0QsU0FBT3BCLElBQVA7QUFDRDs7QUFHRDtBQUNBLFNBQVN1QixlQUFULENBQXlCbkIsSUFBekIsRUFBK0JILElBQS9CLEVBQXFDVSxRQUFyQyxFQUErQztBQUM3QyxNQUFJQyxXQUFXLDhCQUFZWCxJQUFaLENBQWY7QUFDQSxNQUFJK0IsSUFBSXBCLFNBQVNxQixRQUFULENBQWtCN0IsSUFBbEIsRUFBd0JILElBQXhCLEVBQThCVSxRQUE5QixFQUF3Q2IsdUJBQXhDLEVBQWlFLElBQWpFLENBQVI7QUFDQSxTQUFPa0MsRUFBRUUsZUFBVDtBQUNEOztBQUdEO0FBQ0EsU0FBU0gsU0FBVCxDQUFtQi9CLElBQW5CLEVBQXlCTSxJQUF6QixFQUErQmMsUUFBL0IsRUFBeUM7QUFDdkMsT0FBS3BCLE9BQU9BLEtBQUttQyxVQUFqQixFQUE4Qm5DLElBQTlCLEVBQXFDQSxPQUFPQSxLQUFLb0MsV0FBakQsRUFBOEQ7QUFDNUQsUUFBSTdCLFNBQVNQLElBQVQsTUFBbUJNLElBQW5CLElBQTJCLEVBQUVjLFFBQUYsS0FBZSxDQUE5QyxFQUFpRDtBQUNsRDtBQUNELFNBQU9wQixJQUFQO0FBQ0QiLCJmaWxlIjoieHBhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSAnZ2V0LWRvY3VtZW50J1xuXG5pbXBvcnQgRE9NRXhjZXB0aW9uIGZyb20gJy4vZG9tLWV4Y2VwdGlvbidcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9YUGF0aFJlc3VsdFxuY29uc3QgRklSU1RfT1JERVJFRF9OT0RFX1RZUEUgPSA5XG5cbi8vIERlZmF1bHQgbmFtZXNwYWNlIGZvciBYSFRNTCBkb2N1bWVudHNcbmNvbnN0IEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnXG5cblxuLyoqXG4gKiBDb21wdXRlIGFuIFhQYXRoIGV4cHJlc3Npb24gZm9yIHRoZSBnaXZlbiBub2RlLlxuICpcbiAqIElmIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXIgYHJvb3RgIGlzIHN1cHBsaWVkLCB0aGUgY29tcHV0ZWQgWFBhdGggZXhwcmVzc2lvblxuICogd2lsbCBiZSByZWxhdGl2ZSB0byBpdC4gT3RoZXJ3aXNlLCB0aGUgcm9vdCBlbGVtZW50IGlzIHRoZSByb290IG9mIHRoZVxuICogZG9jdW1lbnQgdG8gd2hpY2ggYG5vZGVgIGJlbG9uZ3MuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIGZvciB3aGljaCB0byBjb21wdXRlIGFuIFhQYXRoIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0ge05vZGV9IFtyb290XSBUaGUgcm9vdCBjb250ZXh0IGZvciB0aGUgWFBhdGggZXhwcmVzc2lvbi5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTm9kZShub2RlLCByb290ID0gbnVsbCkge1xuICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBcIm5vZGVcIicpXG4gIH1cblxuICByb290ID0gcm9vdCB8fCBnZXREb2N1bWVudChub2RlKVxuXG4gIGxldCBwYXRoID0gJy8nXG4gIHdoaWxlIChub2RlICE9PSByb290KSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICBsZXQgbWVzc2FnZSA9ICdUaGUgc3VwcGxpZWQgbm9kZSBpcyBub3QgY29udGFpbmVkIGJ5IHRoZSByb290IG5vZGUuJ1xuICAgICAgbGV0IG5hbWUgPSAnSW52YWxpZE5vZGVUeXBlRXJyb3InXG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKG1lc3NhZ2UsIG5hbWUpXG4gICAgfVxuICAgIHBhdGggPSBgLyR7bm9kZU5hbWUobm9kZSl9WyR7bm9kZVBvc2l0aW9uKG5vZGUpfV0ke3BhdGh9YFxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpXG59XG5cblxuLyoqXG4gKiBGaW5kIGEgbm9kZSB1c2luZyBhbiBYUGF0aCByZWxhdGl2ZSB0byB0aGUgZ2l2ZW4gcm9vdCBub2RlLlxuICpcbiAqIFRoZSBYUGF0aCBleHByZXNzaW9ucyBhcmUgZXZhbHVhdGVkIHJlbGF0aXZlIHRvIHRoZSBOb2RlIGFyZ3VtZW50IGByb290YC5cbiAqXG4gKiBJZiB0aGUgb3B0aW9uYWwgcGFyYW1ldGVyIGByZXNvbHZlcmAgaXMgc3VwcGxpZWQsIGl0IHdpbGwgYmUgdXNlZCB0byByZXNvbHZlXG4gKiBhbnkgbmFtZXNwYWNlcyB3aXRoaW4gdGhlIFhQYXRoLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEFuIFhQYXRoIFN0cmluZyB0byBldmFsdWF0ZS5cbiAqIEBwYXJhbSB7Tm9kZX0gcm9vdCBUaGUgcm9vdCBjb250ZXh0IGZvciB0aGUgWFBhdGggZXhwcmVzc2lvbi5cbiAqIEByZXR1cm5zIHtOb2RlfG51bGx9IFRoZSBmaXJzdCBtYXRjaGluZyBOb2RlIG9yIG51bGwgaWYgbm9uZSBpcyBmb3VuZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvTm9kZShwYXRoLCByb290LCByZXNvbHZlciA9IG51bGwpIHtcbiAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgXCJwYXRoXCInKVxuICB9XG4gIGlmIChyb290ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIFwicm9vdFwiJylcbiAgfVxuXG4gIC8vIE1ha2UgdGhlIHBhdGggcmVsYXRpdmUgdG8gdGhlIHJvb3QsIGlmIG5vdCB0aGUgZG9jdW1lbnQuXG4gIGxldCBkb2N1bWVudCA9IGdldERvY3VtZW50KHJvb3QpXG4gIGlmIChyb290ICE9PSBkb2N1bWVudCkgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sICcuLycpXG5cbiAgLy8gTWFrZSBhIGRlZmF1bHQgcmVzb2x2ZXIuXG4gIGxldCBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgaWYgKHJlc29sdmVyID09PSBudWxsICYmIGRvY3VtZW50RWxlbWVudC5sb29rdXBOYW1lc3BhY2VVUkkpIHtcbiAgICBsZXQgZGVmYXVsdE5TID0gZG9jdW1lbnRFbGVtZW50Lmxvb2t1cE5hbWVzcGFjZVVSSShudWxsKSB8fCBIVE1MX05BTUVTUEFDRVxuICAgIHJlc29sdmVyID0gKHByZWZpeCkgPT4ge1xuICAgICAgbGV0IG5zID0geydfZGVmYXVsdF8nOiBkZWZhdWx0TlN9XG4gICAgICByZXR1cm4gbnNbcHJlZml4XSB8fCBkb2N1bWVudEVsZW1lbnQubG9va3VwTmFtZXNwYWNlVVJJKHByZWZpeClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZShwYXRoLCByb290LCByZXNvbHZlcilcbn1cblxuXG4vLyBHZXQgdGhlIFhQYXRoIG5vZGUgbmFtZS5cbmZ1bmN0aW9uIG5vZGVOYW1lKG5vZGUpIHtcbiAgc3dpdGNoIChub2RlLm5vZGVOYW1lKSB7XG4gIGNhc2UgJyN0ZXh0JzogcmV0dXJuICd0ZXh0KCknXG4gIGNhc2UgJyNjb21tZW50JzogcmV0dXJuICdjb21tZW50KCknXG4gIGNhc2UgJyNjZGF0YS1zZWN0aW9uJzogcmV0dXJuICdjZGF0YS1zZWN0aW9uKCknXG4gIGRlZmF1bHQ6IHJldHVybiBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxufVxuXG5cbi8vIEdldCB0aGUgb3JkaW5hbCBwb3NpdGlvbiBvZiB0aGlzIG5vZGUgYW1vbmcgaXRzIHNpYmxpbmdzIG9mIHRoZSBzYW1lIG5hbWUuXG5mdW5jdGlvbiBub2RlUG9zaXRpb24obm9kZSkge1xuICBsZXQgbmFtZSA9IG5vZGUubm9kZU5hbWVcbiAgbGV0IHBvc2l0aW9uID0gMVxuICB3aGlsZSAoKG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZykpIHtcbiAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbmFtZSkgcG9zaXRpb24gKz0gMVxuICB9XG4gIHJldHVybiBwb3NpdGlvblxufVxuXG5cbi8vIEZpbmQgYSBzaW5nbGUgbm9kZSB3aXRoIFhQYXRoIGBwYXRoYFxuZnVuY3Rpb24gcmVzb2x2ZShwYXRoLCByb290LCByZXNvbHZlcikge1xuICB0cnkge1xuICAgIC8vIEFkZCBhIGRlZmF1bHQgdmFsdWUgdG8gZWFjaCBwYXRoIHBhcnQgbGFja2luZyBhIHByZWZpeC5cbiAgICBsZXQgbnNwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8oPyFcXC4pKFteXFwvOlxcKF0rKSg/PVxcL3wkKS9nLCAnL19kZWZhdWx0XzokMScpXG4gICAgcmV0dXJuIHBsYXRmb3JtUmVzb2x2ZShuc3BhdGgsIHJvb3QsIHJlc29sdmVyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsbGJhY2tSZXNvbHZlKHBhdGgsIHJvb3QpXG4gIH1cbn1cblxuXG4vLyBGaW5kIGEgc2luZ2xlIG5vZGUgd2l0aCBYUGF0aCBgcGF0aGAgdXNpbmcgdGhlIHNpbXBsZSwgYnVpbHQtaW4gZXZhbHVhdG9yLlxuZnVuY3Rpb24gZmFsbGJhY2tSZXNvbHZlKHBhdGgsIHJvb3QpIHtcbiAgbGV0IHN0ZXBzID0gcGF0aC5zcGxpdChcIi9cIilcbiAgbGV0IG5vZGUgPSByb290XG4gIHdoaWxlIChub2RlKSB7XG4gICAgbGV0IHN0ZXAgPSBzdGVwcy5zaGlmdCgpXG4gICAgaWYgKHN0ZXAgPT09IHVuZGVmaW5lZCkgYnJlYWtcbiAgICBpZiAoc3RlcCA9PT0gJy4nKSBjb250aW51ZVxuICAgIGxldCBbbmFtZSwgcG9zaXRpb25dID0gc3RlcC5zcGxpdCgvW1xcW1xcXV0vKVxuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoJ19kZWZhdWx0XzonLCAnJylcbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID8gcGFyc2VJbnQocG9zaXRpb24pIDogMVxuICAgIG5vZGUgPSBmaW5kQ2hpbGQobm9kZSwgbmFtZSwgcG9zaXRpb24pXG4gIH1cbiAgcmV0dXJuIG5vZGVcbn1cblxuXG4vLyBGaW5kIGEgc2luZ2xlIG5vZGUgd2l0aCBYUGF0aCBgcGF0aGAgdXNpbmcgYGRvY3VtZW50LmV2YWx1YXRlYC5cbmZ1bmN0aW9uIHBsYXRmb3JtUmVzb2x2ZShwYXRoLCByb290LCByZXNvbHZlcikge1xuICBsZXQgZG9jdW1lbnQgPSBnZXREb2N1bWVudChyb290KVxuICBsZXQgciA9IGRvY3VtZW50LmV2YWx1YXRlKHBhdGgsIHJvb3QsIHJlc29sdmVyLCBGSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbClcbiAgcmV0dXJuIHIuc2luZ2xlTm9kZVZhbHVlXG59XG5cblxuLy8gRmluZCB0aGUgY2hpbGQgb2YgdGhlIGdpdmVuIG5vZGUgYnkgbmFtZSBhbmQgb3JkaW5hbCBwb3NpdGlvbi5cbmZ1bmN0aW9uIGZpbmRDaGlsZChub2RlLCBuYW1lLCBwb3NpdGlvbikge1xuICBmb3IgKG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQgOyBub2RlIDsgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICBpZiAobm9kZU5hbWUobm9kZSkgPT09IG5hbWUgJiYgLS1wb3NpdGlvbiA9PT0gMCkgYnJlYWtcbiAgfVxuICByZXR1cm4gbm9kZVxufVxuIl19

/***/ }),
/* 47 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(/*! ./fixUrls */ 48);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 48 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/style-loader/fixUrls.js ***!
  \***********************************/
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 49 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 50 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/xpath-range/lib/range.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.fromRange = fromRange;
exports.toRange = toRange;

var _getDocument = __webpack_require__(/*! get-document */ 13);

var _getDocument2 = _interopRequireDefault(_getDocument);

var _domSeek = __webpack_require__(/*! dom-seek */ 39);

var _domSeek2 = _interopRequireDefault(_domSeek);

var _simpleXpathPosition = __webpack_require__(/*! simple-xpath-position */ 44);

var xpath = _interopRequireWildcard(_simpleXpathPosition);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SHOW_TEXT = 4;

/**
 * Convert a `Range` to a pair of XPath expressions and offsets.
 *
 * If the optional parameter `root` is supplied, the computed XPath expressions
 * will be relative to it.
 *
 * @param {Range} range The Range to convert.
 * @param {Node} [root] The root context for the XPath expressions.
 * @returns {{start, startOffset, end, endOffset}}
 */
function fromRange(range, root) {
  var sc = range.startContainer;
  var so = range.startOffset;
  var ec = range.endContainer;
  var eo = range.endOffset;

  var start = xpath.fromNode(sc, root);
  var end = xpath.fromNode(ec, root);

  return {
    start: start,
    end: end,
    startOffset: so,
    endOffset: eo
  };
}

/**
 * Construct a `Range` from the given XPath expressions and offsets.
 *
 * If the optional parameter `root` is supplied, the XPath expressions are
 * evaluated as relative to it.
 *
 * @param {string} startPath An XPath expression for the start container.
 * @param {Number} startOffset The textual offset within the start container.
 * @param {string} endPath An XPath expression for the end container.
 * @param {Number} endOffset The textual offset within the end container.
 * @param {Node} [root] The root context for the XPath expressions.
 * @returns Range
 */
function toRange(startPath, startOffset, endPath, endOffset, root) {
  var document = (0, _getDocument2['default'])(root);

  var sc = xpath.toNode(startPath, root);
  if (sc === null) throw notFound('start');

  var si = document.createNodeIterator(sc, SHOW_TEXT);
  var so = startOffset - (0, _domSeek2['default'])(si, startOffset);

  sc = si.referenceNode;
  if (!si.pointerBeforeReferenceNode) {
    if (so > 0) throw indexSize('start');
    so += sc.length;
  }

  var ec = xpath.toNode(endPath, root);
  if (ec === null) throw notFound('end');

  var ei = document.createNodeIterator(ec, SHOW_TEXT);
  var eo = endOffset - (0, _domSeek2['default'])(ei, endOffset);

  ec = ei.referenceNode;
  if (!ei.pointerBeforeReferenceNode) {
    if (eo > 0) throw indexSize('end');
    eo += ec.length;
  }

  var range = document.createRange();
  range.setStart(sc, so);
  range.setEnd(ec, eo);

  return range;

  function notFound(which) {
    var error = new Error('The ' + which + ' node was not found.');
    error.name = 'NotFoundError';
    return error;
  }

  function indexSize(which) {
    var error = new Error('There is no text at the requested ' + which + ' offset.');
    error.name = 'IndexSizeError';
    return error;
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yYW5nZS5qcyJdLCJuYW1lcyI6WyJmcm9tUmFuZ2UiLCJ0b1JhbmdlIiwieHBhdGgiLCJTSE9XX1RFWFQiLCJyYW5nZSIsInJvb3QiLCJzYyIsInN0YXJ0Q29udGFpbmVyIiwic28iLCJzdGFydE9mZnNldCIsImVjIiwiZW5kQ29udGFpbmVyIiwiZW8iLCJlbmRPZmZzZXQiLCJzdGFydCIsImZyb21Ob2RlIiwiZW5kIiwic3RhcnRQYXRoIiwiZW5kUGF0aCIsImRvY3VtZW50IiwidG9Ob2RlIiwibm90Rm91bmQiLCJzaSIsImNyZWF0ZU5vZGVJdGVyYXRvciIsInJlZmVyZW5jZU5vZGUiLCJwb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSIsImluZGV4U2l6ZSIsImxlbmd0aCIsImVpIiwiY3JlYXRlUmFuZ2UiLCJzZXRTdGFydCIsInNldEVuZCIsIndoaWNoIiwiZXJyb3IiLCJFcnJvciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7OztRQWlCZ0JBLFMsR0FBQUEsUztRQStCQUMsTyxHQUFBQSxPOztBQWhEaEI7Ozs7QUFDQTs7OztBQUNBOztJQUFZQyxLOzs7Ozs7QUFFWixJQUFNQyxZQUFZLENBQWxCOztBQUdBOzs7Ozs7Ozs7O0FBVU8sU0FBU0gsU0FBVCxDQUFtQkksS0FBbkIsRUFBMEJDLElBQTFCLEVBQWdDO0FBQ3JDLE1BQUlDLEtBQUtGLE1BQU1HLGNBQWY7QUFDQSxNQUFJQyxLQUFLSixNQUFNSyxXQUFmO0FBQ0EsTUFBSUMsS0FBS04sTUFBTU8sWUFBZjtBQUNBLE1BQUlDLEtBQUtSLE1BQU1TLFNBQWY7O0FBRUEsTUFBSUMsUUFBUVosTUFBTWEsUUFBTixDQUFlVCxFQUFmLEVBQW1CRCxJQUFuQixDQUFaO0FBQ0EsTUFBSVcsTUFBTWQsTUFBTWEsUUFBTixDQUFlTCxFQUFmLEVBQW1CTCxJQUFuQixDQUFWOztBQUVBLFNBQU87QUFDTFMsV0FBT0EsS0FERjtBQUVMRSxTQUFLQSxHQUZBO0FBR0xQLGlCQUFhRCxFQUhSO0FBSUxLLGVBQVdEO0FBSk4sR0FBUDtBQU1EOztBQUdEOzs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU1gsT0FBVCxDQUFpQmdCLFNBQWpCLEVBQTRCUixXQUE1QixFQUF5Q1MsT0FBekMsRUFBa0RMLFNBQWxELEVBQTZEUixJQUE3RCxFQUFtRTtBQUN4RSxNQUFJYyxXQUFXLDhCQUFZZCxJQUFaLENBQWY7O0FBRUEsTUFBSUMsS0FBS0osTUFBTWtCLE1BQU4sQ0FBYUgsU0FBYixFQUF3QlosSUFBeEIsQ0FBVDtBQUNBLE1BQUlDLE9BQU8sSUFBWCxFQUFpQixNQUFNZSxTQUFTLE9BQVQsQ0FBTjs7QUFFakIsTUFBSUMsS0FBS0gsU0FBU0ksa0JBQVQsQ0FBNEJqQixFQUE1QixFQUFnQ0gsU0FBaEMsQ0FBVDtBQUNBLE1BQUlLLEtBQUtDLGNBQWMsMEJBQUthLEVBQUwsRUFBU2IsV0FBVCxDQUF2Qjs7QUFFQUgsT0FBS2dCLEdBQUdFLGFBQVI7QUFDQSxNQUFJLENBQUNGLEdBQUdHLDBCQUFSLEVBQW9DO0FBQ2xDLFFBQUlqQixLQUFLLENBQVQsRUFBWSxNQUFNa0IsVUFBVSxPQUFWLENBQU47QUFDWmxCLFVBQU1GLEdBQUdxQixNQUFUO0FBQ0Q7O0FBRUQsTUFBSWpCLEtBQUtSLE1BQU1rQixNQUFOLENBQWFGLE9BQWIsRUFBc0JiLElBQXRCLENBQVQ7QUFDQSxNQUFJSyxPQUFPLElBQVgsRUFBaUIsTUFBTVcsU0FBUyxLQUFULENBQU47O0FBRWpCLE1BQUlPLEtBQUtULFNBQVNJLGtCQUFULENBQTRCYixFQUE1QixFQUFnQ1AsU0FBaEMsQ0FBVDtBQUNBLE1BQUlTLEtBQUtDLFlBQVksMEJBQUtlLEVBQUwsRUFBU2YsU0FBVCxDQUFyQjs7QUFFQUgsT0FBS2tCLEdBQUdKLGFBQVI7QUFDQSxNQUFJLENBQUNJLEdBQUdILDBCQUFSLEVBQW9DO0FBQ2xDLFFBQUliLEtBQUssQ0FBVCxFQUFZLE1BQU1jLFVBQVUsS0FBVixDQUFOO0FBQ1pkLFVBQU1GLEdBQUdpQixNQUFUO0FBQ0Q7O0FBRUQsTUFBSXZCLFFBQVFlLFNBQVNVLFdBQVQsRUFBWjtBQUNBekIsUUFBTTBCLFFBQU4sQ0FBZXhCLEVBQWYsRUFBbUJFLEVBQW5CO0FBQ0FKLFFBQU0yQixNQUFOLENBQWFyQixFQUFiLEVBQWlCRSxFQUFqQjs7QUFFQSxTQUFPUixLQUFQOztBQUVBLFdBQVNpQixRQUFULENBQWtCVyxLQUFsQixFQUF5QjtBQUN2QixRQUFJQyxRQUFRLElBQUlDLEtBQUosVUFBaUJGLEtBQWpCLDBCQUFaO0FBQ0FDLFVBQU1FLElBQU4sR0FBYSxlQUFiO0FBQ0EsV0FBT0YsS0FBUDtBQUNEOztBQUVELFdBQVNQLFNBQVQsQ0FBbUJNLEtBQW5CLEVBQTBCO0FBQ3hCLFFBQUlDLFFBQVEsSUFBSUMsS0FBSix3Q0FBK0NGLEtBQS9DLGNBQVo7QUFDQUMsVUFBTUUsSUFBTixHQUFhLGdCQUFiO0FBQ0EsV0FBT0YsS0FBUDtBQUNEO0FBQ0YiLCJmaWxlIjoicmFuZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSAnZ2V0LWRvY3VtZW50J1xuaW1wb3J0IHNlZWsgZnJvbSAnZG9tLXNlZWsnXG5pbXBvcnQgKiBhcyB4cGF0aCBmcm9tICdzaW1wbGUteHBhdGgtcG9zaXRpb24nXG5cbmNvbnN0IFNIT1dfVEVYVCA9IDRcblxuXG4vKipcbiAqIENvbnZlcnQgYSBgUmFuZ2VgIHRvIGEgcGFpciBvZiBYUGF0aCBleHByZXNzaW9ucyBhbmQgb2Zmc2V0cy5cbiAqXG4gKiBJZiB0aGUgb3B0aW9uYWwgcGFyYW1ldGVyIGByb290YCBpcyBzdXBwbGllZCwgdGhlIGNvbXB1dGVkIFhQYXRoIGV4cHJlc3Npb25zXG4gKiB3aWxsIGJlIHJlbGF0aXZlIHRvIGl0LlxuICpcbiAqIEBwYXJhbSB7UmFuZ2V9IHJhbmdlIFRoZSBSYW5nZSB0byBjb252ZXJ0LlxuICogQHBhcmFtIHtOb2RlfSBbcm9vdF0gVGhlIHJvb3QgY29udGV4dCBmb3IgdGhlIFhQYXRoIGV4cHJlc3Npb25zLlxuICogQHJldHVybnMge3tzdGFydCwgc3RhcnRPZmZzZXQsIGVuZCwgZW5kT2Zmc2V0fX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21SYW5nZShyYW5nZSwgcm9vdCkge1xuICBsZXQgc2MgPSByYW5nZS5zdGFydENvbnRhaW5lclxuICBsZXQgc28gPSByYW5nZS5zdGFydE9mZnNldFxuICBsZXQgZWMgPSByYW5nZS5lbmRDb250YWluZXJcbiAgbGV0IGVvID0gcmFuZ2UuZW5kT2Zmc2V0XG5cbiAgbGV0IHN0YXJ0ID0geHBhdGguZnJvbU5vZGUoc2MsIHJvb3QpXG4gIGxldCBlbmQgPSB4cGF0aC5mcm9tTm9kZShlYywgcm9vdClcblxuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBlbmQ6IGVuZCxcbiAgICBzdGFydE9mZnNldDogc28sXG4gICAgZW5kT2Zmc2V0OiBlbyxcbiAgfVxufVxuXG5cbi8qKlxuICogQ29uc3RydWN0IGEgYFJhbmdlYCBmcm9tIHRoZSBnaXZlbiBYUGF0aCBleHByZXNzaW9ucyBhbmQgb2Zmc2V0cy5cbiAqXG4gKiBJZiB0aGUgb3B0aW9uYWwgcGFyYW1ldGVyIGByb290YCBpcyBzdXBwbGllZCwgdGhlIFhQYXRoIGV4cHJlc3Npb25zIGFyZVxuICogZXZhbHVhdGVkIGFzIHJlbGF0aXZlIHRvIGl0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydFBhdGggQW4gWFBhdGggZXhwcmVzc2lvbiBmb3IgdGhlIHN0YXJ0IGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydE9mZnNldCBUaGUgdGV4dHVhbCBvZmZzZXQgd2l0aGluIHRoZSBzdGFydCBjb250YWluZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZW5kUGF0aCBBbiBYUGF0aCBleHByZXNzaW9uIGZvciB0aGUgZW5kIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBlbmRPZmZzZXQgVGhlIHRleHR1YWwgb2Zmc2V0IHdpdGhpbiB0aGUgZW5kIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7Tm9kZX0gW3Jvb3RdIFRoZSByb290IGNvbnRleHQgZm9yIHRoZSBYUGF0aCBleHByZXNzaW9ucy5cbiAqIEByZXR1cm5zIFJhbmdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1JhbmdlKHN0YXJ0UGF0aCwgc3RhcnRPZmZzZXQsIGVuZFBhdGgsIGVuZE9mZnNldCwgcm9vdCkge1xuICBsZXQgZG9jdW1lbnQgPSBnZXREb2N1bWVudChyb290KVxuXG4gIGxldCBzYyA9IHhwYXRoLnRvTm9kZShzdGFydFBhdGgsIHJvb3QpXG4gIGlmIChzYyA9PT0gbnVsbCkgdGhyb3cgbm90Rm91bmQoJ3N0YXJ0JylcblxuICBsZXQgc2kgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3Ioc2MsIFNIT1dfVEVYVClcbiAgbGV0IHNvID0gc3RhcnRPZmZzZXQgLSBzZWVrKHNpLCBzdGFydE9mZnNldClcblxuICBzYyA9IHNpLnJlZmVyZW5jZU5vZGVcbiAgaWYgKCFzaS5wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSkge1xuICAgIGlmIChzbyA+IDApIHRocm93IGluZGV4U2l6ZSgnc3RhcnQnKVxuICAgIHNvICs9IHNjLmxlbmd0aFxuICB9XG5cbiAgbGV0IGVjID0geHBhdGgudG9Ob2RlKGVuZFBhdGgsIHJvb3QpXG4gIGlmIChlYyA9PT0gbnVsbCkgdGhyb3cgbm90Rm91bmQoJ2VuZCcpXG5cbiAgbGV0IGVpID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKGVjLCBTSE9XX1RFWFQpXG4gIGxldCBlbyA9IGVuZE9mZnNldCAtIHNlZWsoZWksIGVuZE9mZnNldClcblxuICBlYyA9IGVpLnJlZmVyZW5jZU5vZGVcbiAgaWYgKCFlaS5wb2ludGVyQmVmb3JlUmVmZXJlbmNlTm9kZSkge1xuICAgIGlmIChlbyA+IDApIHRocm93IGluZGV4U2l6ZSgnZW5kJylcbiAgICBlbyArPSBlYy5sZW5ndGhcbiAgfVxuXG4gIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgcmFuZ2Uuc2V0U3RhcnQoc2MsIHNvKVxuICByYW5nZS5zZXRFbmQoZWMsIGVvKVxuXG4gIHJldHVybiByYW5nZVxuXG4gIGZ1bmN0aW9uIG5vdEZvdW5kKHdoaWNoKSB7XG4gICAgbGV0IGVycm9yID0gbmV3IEVycm9yKGBUaGUgJHt3aGljaH0gbm9kZSB3YXMgbm90IGZvdW5kLmApXG4gICAgZXJyb3IubmFtZSA9ICdOb3RGb3VuZEVycm9yJ1xuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZnVuY3Rpb24gaW5kZXhTaXplKHdoaWNoKSB7XG4gICAgbGV0IGVycm9yID0gbmV3IEVycm9yKGBUaGVyZSBpcyBubyB0ZXh0IGF0IHRoZSByZXF1ZXN0ZWQgJHt3aGljaH0gb2Zmc2V0LmApXG4gICAgZXJyb3IubmFtZSA9ICdJbmRleFNpemVFcnJvcidcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuIl19


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map