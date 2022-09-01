/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var header = $('.header');
  var header__container = $('.header__container');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('header__fixed');
      header__container.addClass('header__container-fixed');
    } else {
      header.removeClass('header__fixed');
      header__container.removeClass('header__container-fixed');
    }
  });
});
$(function () {
  var element = document.getElementById('d');
  var hp = document.body.scrollHeight,
      hw = window.innerHeight,
      smax = hp - hw,
      smin = 0,
      hmin = 0,
      hmax = 950,
      ds = smax - smin,
      dh = hmax - hmin;
  window.addEventListener('scroll', function () {
    var s = window.pageYOffset; // current scrollTop

    var h = hmax - dh * s * 2 / ds;
    element.style.height = h + 'px';
  });
});
$(function () {
  $(".close").click(function () {
    $(this).toggleClass("active");
    $(".nav__header").toggleClass("active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/modalDoor/modalDoor.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/modalDoor/modalDoor.js ***!
  \***************************************************/
/***/ (() => {

var Shuffle = window.Shuffle; // Assumes you're using the UMD version of Shuffle (for example, from unpkg.com).

var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');
var shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer // could also be a selector: '.js-shuffle-sizer'

}); //фильтр

shuffleInstance.filter('onestr');
$('input').click(function () {
  var checked = [];
  $('input:checkbox:checked').each(function () {
    checked.push($(this).val());
    console.log(checked.join());

    if (checked) {
      shuffleInstance.filter(checked.join());
    } else {
      shuffleInstance.filter('onestr');
    }
  });
}); //end

$('.product__card').on('click', function () {
  $('.modalDoor').addClass("active");
  $('.modalDoor__container').addClass("active");
  $('body').addClass('active');
});
$('#modal__close-two').on('click', function () {
  $('.modalDoor').removeClass("active");
  $('.modalDoor__container').removeClass("active");
  $('body').removeClass('active');
});

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/***/ (() => {

var fields = document.querySelectorAll('.field__file');
Array.prototype.forEach.call(fields, function (input) {
  var label = input.nextElementSibling,
      labelVal = label.querySelector('.field__file-fake').innerText;
  input.addEventListener('change', function (e) {
    var countFiles = '';
    if (this.files && this.files.length >= 1) countFiles = this.files.length;

    if (countFiles) {
      label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
    } else {
      label.querySelector('.field__file-fake').innerText = labelVal;
    }
  });
});
/*document.getElementById('close__file').onclick = function() {
        label.querySelector('.field__file-fake').innerText = labelVal;
};*/

$('.btn').on('click', function () {
  $('.modal').addClass("active");
  $('.modal__container').addClass("active");
  $('body').addClass('active');
});
$('.modal__close').on('click', function () {
  $('.modal').removeClass("active");
  $('.modal__container').removeClass("active");
  $('body').removeClass('active');
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_modalDoor_modalDoor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/modalDoor/modalDoor */ "./src/blocks/modules/modalDoor/modalDoor.js");
/* harmony import */ var _modules_modalDoor_modalDoor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_modalDoor_modalDoor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__);





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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


$(document).ready(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    slickPlay: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        draggable: true,
        slidesToShow: 2,
        // slidesToScroll: 0.125,
        speed: 2000,
        centerMode: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 0.125,
        speed: 2000,
        centerMode: true
      }
    }]
  });
  $('.slider-rtl').slick({
    autoplay: true,
    rtl: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    slickPlay: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        draggable: true,
        slidesToShow: 2,
        // slidesToScroll: 0.125,
        speed: 2000,
        centerMode: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 0.125,
        speed: 2000,
        centerMode: true
      }
    }]
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map