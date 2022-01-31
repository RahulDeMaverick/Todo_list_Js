/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n\nconst personsURI = 'todo.json';\nconst personsXHR = new XMLHttpRequest();\npersonsXHR.open('GET', personsURI);\n\npersonsXHR.onload = function() {\n    if (this.status === 200) {\n        const responseText = this.responseText;\n        const persons = JSON.parse(responseText);\n         for(let i=0;i<persons.length;i++)\n        { display(persons[i].title,persons[i].details,persons[i].time);\n\n         }\n    }\n};\n\ndocument.body.style.backgroundImage = \"url('/Users/rahuludhayakumar/Documents/GitHub/assignment-6-RahulDeMaverick/app/todo.jpg')\";\nconst input =  document.createElement(\"input\");\ninput.type = 'Text';\ndocument.body.appendChild(input);\ninput.setAttribute(\"placeholder\",\"Task\")\n\n\nconst input1 =  document.createElement(\"input\");\ninput1.type = 'Text';\ndocument.body.appendChild(input1);\ninput1.setAttribute(\"placeholder\",\"Description\")\ninput1.style.display=\"Inline\";\ninput1.style.margin=\"50px\";\n\nconst input2 = document.createElement(\"input\");\ninput2.type=\"datetime-local\";\ninput2.setAttribute(\"id\",\"testing\")\ndocument.body.appendChild(input2);\n\n\nconst input3 =  document.createElement(\"button\");\ndocument.body.appendChild(input3);\ninput3.textContent = \"Submit\";\ninput.setAttribute(\"id\",\"subbtn\")\ninput1.setAttribute(\"id\",\"desc2\")\ninput3.style.display=\"Inline\";\ninput3.style.margin=\"50px\";\n\nconst inputValue = document.getElementById(\"subbtn\").value;\nconst inputValue2 = document.getElementById(\"desc2\").value;\nconst inputValue3 = document.getElementById(\"testing\").value;\n\n\ninput3.onclick = function(){\n  const inputValue2 = document.getElementById(\"desc2\").value;\n  const inputValue = document.getElementById(\"subbtn\").value;\n  const inputValue3 = document.getElementById(\"testing\").value;\n  \n  const doc = document.createElement(\"div\");\n  const but = document.createElement(\"button\");\n  doc.appendChild(but);\n  //but.textContent= t;\n  but.innerHTML=inputValue;\n  but.style.display=\"Inline\";\n  but.style.margin=\"50px\";\n  document.body.appendChild(doc);\n\n  but.onclick =function(){\n    const d = document.createElement(\"p\");\n    document.body.appendChild(d);\n    d.textContent = inputValue2;\n    const d2 = document.createElement(\"p\");\n    d.appendChild(d2);\n    d2.textContent = inputValue3;\n    but.disabled=true;\n  }\n  \n\n}\n\n\npersonsXHR.send();\n\n\nfunction display(name,details,time)\n{\nconst app = document.createElement(\"div\");\napp.setAttribute(\"id\",name);\n\nconst btn = document.createElement(\"button\");\n\napp.appendChild(btn);\ndocument.body.appendChild(app);\n btn.textContent = name;\n btn.style.display=\"block\";\n btn.style.margin=\"50px\";\n btn.onclick = function()\n  {\n      const value = document.createElement(\"p\");\n      value.setAttribute(\"id\",\"p\"+name);\n      app.appendChild(value);\n      value.style.display=\"inline\";\n      value.textContent= details;\n      const value1 = document.createElement(\"p\");\n      //value1.setAttribute(\"id\",\"p\"+name);\n      value.appendChild(value1);\n      //value1.style.display=\"inline\";\n      value1.textContent= time;\n      btn.disabled=true;\n  }\n\n\n}\n\n//# sourceURL=webpack://assignment-6-rahuldemaverick/./app/main.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://assignment-6-rahuldemaverick/./scss/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/main.js");
/******/ 	
/******/ })()
;