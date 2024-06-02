"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/glob-parent";
exports.ids = ["vendor-chunks/glob-parent"];
exports.modules = {

/***/ "(rsc)/./node_modules/glob-parent/index.js":
/*!*******************************************!*\
  !*** ./node_modules/glob-parent/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isGlob = __webpack_require__(/*! is-glob */ \"(rsc)/./node_modules/is-glob/index.js\");\nvar pathPosixDirname = (__webpack_require__(/*! path */ \"path\").posix).dirname;\nvar isWin32 = (__webpack_require__(/*! os */ \"os\").platform)() === 'win32';\n\nvar slash = '/';\nvar backslash = /\\\\/g;\nvar enclosure = /[\\{\\[].*[\\}\\]]$/;\nvar globby = /(^|[^\\\\])([\\{\\[]|\\([^\\)]+$)/;\nvar escaped = /\\\\([\\!\\*\\?\\|\\[\\]\\(\\)\\{\\}])/g;\n\n/**\n * @param {string} str\n * @param {Object} opts\n * @param {boolean} [opts.flipBackslashes=true]\n * @returns {string}\n */\nmodule.exports = function globParent(str, opts) {\n  var options = Object.assign({ flipBackslashes: true }, opts);\n\n  // flip windows path separators\n  if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {\n    str = str.replace(backslash, slash);\n  }\n\n  // special case for strings ending in enclosure containing path separator\n  if (enclosure.test(str)) {\n    str += slash;\n  }\n\n  // preserves full path in case of trailing path separator\n  str += 'a';\n\n  // remove path parts that are globby\n  do {\n    str = pathPosixDirname(str);\n  } while (isGlob(str) || globby.test(str));\n\n  // remove escape chars and return result\n  return str.replace(escaped, '$1');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ2xvYi1wYXJlbnQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLHNEQUFTO0FBQzlCLHVCQUF1QiwrQ0FBcUI7QUFDNUMsY0FBYyw4Q0FBc0I7O0FBRXBDO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QiwyQkFBMkI7QUFDM0IscUNBQXFDLEVBQUU7O0FBRXZDO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBZ0MsdUJBQXVCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFpbHdpbmR1aS1zdHVkaW8vLi9ub2RlX21vZHVsZXMvZ2xvYi1wYXJlbnQvaW5kZXguanM/NGQzZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpc0dsb2IgPSByZXF1aXJlKCdpcy1nbG9iJyk7XG52YXIgcGF0aFBvc2l4RGlybmFtZSA9IHJlcXVpcmUoJ3BhdGgnKS5wb3NpeC5kaXJuYW1lO1xudmFyIGlzV2luMzIgPSByZXF1aXJlKCdvcycpLnBsYXRmb3JtKCkgPT09ICd3aW4zMic7XG5cbnZhciBzbGFzaCA9ICcvJztcbnZhciBiYWNrc2xhc2ggPSAvXFxcXC9nO1xudmFyIGVuY2xvc3VyZSA9IC9bXFx7XFxbXS4qW1xcfVxcXV0kLztcbnZhciBnbG9iYnkgPSAvKF58W15cXFxcXSkoW1xce1xcW118XFwoW15cXCldKyQpLztcbnZhciBlc2NhcGVkID0gL1xcXFwoW1xcIVxcKlxcP1xcfFxcW1xcXVxcKFxcKVxce1xcfV0pL2c7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZmxpcEJhY2tzbGFzaGVzPXRydWVdXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdsb2JQYXJlbnQoc3RyLCBvcHRzKSB7XG4gIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IGZsaXBCYWNrc2xhc2hlczogdHJ1ZSB9LCBvcHRzKTtcblxuICAvLyBmbGlwIHdpbmRvd3MgcGF0aCBzZXBhcmF0b3JzXG4gIGlmIChvcHRpb25zLmZsaXBCYWNrc2xhc2hlcyAmJiBpc1dpbjMyICYmIHN0ci5pbmRleE9mKHNsYXNoKSA8IDApIHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZShiYWNrc2xhc2gsIHNsYXNoKTtcbiAgfVxuXG4gIC8vIHNwZWNpYWwgY2FzZSBmb3Igc3RyaW5ncyBlbmRpbmcgaW4gZW5jbG9zdXJlIGNvbnRhaW5pbmcgcGF0aCBzZXBhcmF0b3JcbiAgaWYgKGVuY2xvc3VyZS50ZXN0KHN0cikpIHtcbiAgICBzdHIgKz0gc2xhc2g7XG4gIH1cblxuICAvLyBwcmVzZXJ2ZXMgZnVsbCBwYXRoIGluIGNhc2Ugb2YgdHJhaWxpbmcgcGF0aCBzZXBhcmF0b3JcbiAgc3RyICs9ICdhJztcblxuICAvLyByZW1vdmUgcGF0aCBwYXJ0cyB0aGF0IGFyZSBnbG9iYnlcbiAgZG8ge1xuICAgIHN0ciA9IHBhdGhQb3NpeERpcm5hbWUoc3RyKTtcbiAgfSB3aGlsZSAoaXNHbG9iKHN0cikgfHwgZ2xvYmJ5LnRlc3Qoc3RyKSk7XG5cbiAgLy8gcmVtb3ZlIGVzY2FwZSBjaGFycyBhbmQgcmV0dXJuIHJlc3VsdFxuICByZXR1cm4gc3RyLnJlcGxhY2UoZXNjYXBlZCwgJyQxJyk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/glob-parent/index.js\n");

/***/ })

};
;