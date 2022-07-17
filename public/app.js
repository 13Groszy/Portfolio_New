/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


//Navigation menu & burger
const navBurger = document.querySelector('.nav__menu');
const navWrapper = document.querySelector('.nav__wrapper');
const wrappedMenu = document.querySelectorAll('.wrapped_menu > a');

navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('button');
    navWrapper.classList.toggle('active');
})
wrappedMenu.forEach(a =>{
    a.addEventListener('click', () =>{
        navBurger.classList.remove('button');
        navWrapper.classList.remove('active');
    })
})

// Portfolio projects
const portfolio = document.querySelector('.portfolio');

let getprojects = () =>{
    _projects__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(el =>{
        portfolio.innerHTML += `
        <div class="project fade-in js-scroll ${el.key}">
                <div class="project__item">
                    <h3>${el.title}</h3>
                    <p>${el.description}</p>
                    <a href="${el.design}" target="_blank">View Live</a>
                    <a href="${el.code}" target="_blank">See Code</a>
                </div>
            </div>`;
    })
}
getprojects();


//Animate on screen
const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
    el.style.opacity = 0
  })

  const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
   
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };
  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      }else {
        hideScrollElement(el);
      }
    })
  }
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })


  //Sending email:1
  //selectors:

  const contact_btn = document.querySelector('.contact__button');
  const contact_form = document.querySelector('form');
  let form_values = {
    name:'',
    email:'',
    phone:'',
    message:''
  };

  const sendEmail = () => {
      form_values.name = contact_form[0].value;
      form_values.email = contact_form[1].value;
      form_values.phone = contact_form[2].value;
      form_values.message = contact_form[3].value;

      emailjs.send('service_qmp3n2l', 'template_ky9magz', form_values)
    .then(function(response) {
       console.log(response.status, response.text);
       contact_form.reset();
       showPopup();
    }, function(error) {
       console.log(error);
    });
}
window.sendEmail = sendEmail;


//Popup
const popup = document.querySelector('.popup');
const clearPopup = () =>{
  popup.classList.remove('active')
}

let showPopup = () =>{
popup.classList.add('active');
const removePopup = setTimeout(clearPopup, 3000);
}

//Canvas as BG animation:

let c = init("canvas"),
  w = (canvas.width = window.innerWidth),
  h = (canvas.height = window.innerHeight);
//initiation

class firefly{
  constructor(){
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.s = Math.random()*2;
    this.ang = Math.random()*2*Math.PI;
    this.v = this.s*this.s/4;
  }
  move(){
    this.x += this.v*Math.cos(this.ang);
    this.y += this.v*Math.sin(this.ang);
    this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
  }
  show(){
    c.beginPath();
    c.arc(this.x,this.y,this.s,0,2*Math.PI);
    c.fillStyle="#fddba3";
    c.fill();
  }
}

let f = [];

function draw() {
  if(f.length < 200){
    for(let i = 0; i < 10; i++){
     f.push(new firefly());
  }
     }
  //animation
  for(let i = 0; i < f.length; i++){
    f[i].move();
    f[i].show();
    if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
       f.splice(i,1);
       }
  }
}
function init(id) {
  let canvas = document.getElementById(id),
    c = canvas.getContext("2d")
  return c;
}

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback);
    }
  );
});

function loop() {
  window.requestAnimFrame(loop);
  c.clearRect(0, 0, w, h);
  draw();
}

window.addEventListener("resize", function() {
  (w = canvas.width = window.innerWidth),
  (h = canvas.height = window.innerHeight);
  loop();
});

loop();
setInterval(loop, 1000 / 60);

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projects)
/* harmony export */ });


const beaver = {
    title: 'Hit The Beaver',
    key: 'beaver',
    design: 'https://hit-the-beaver.netlify.app',
    code: 'https://github.com/13Groszy/Hit_The_Beaver',
    description: `Oldschool game 'Whack A Mole' extended by many more fields to hit. User have option of easy 2x2 to legendary 10x10 board.`
}
const rockpaper = {
    title: 'Rock Paper Scissor',
    key: 'rockpaper',
    design: 'https://rockpaperscissorby13.netlify.app',
    code: 'https://github.com/13Groszy/Rock_Paper_Scissor',
    description: 'Simple game `Rock Paper Scissor` which get extended to 5 elements and local highscore!'
}
const hotelApp = {
    title:'Hotel App',
    key:"hotelapp",
    design:"https://hotelreservationby13.netlify.app",
    code:"https://github.com/13Groszy/Hotel_App",
    description:"Main purpose of this application is to get information from live database about the hotels, update avaibility and reset it to original value if need."
}
const palindromeChecker = {
    title:"Palindrome Checker",
    key:"palindrome",
    design:"https://palindromecheckerby13.netlify.app",
    code:"https://github.com/13Groszy/Palindrome_Checker",
    description:"Simple palindrome checker. Return errors when input is empty or value type in contains just one letter or number."
}
const fyloLanding = {
    title:"Fylo Landing Page",
    key:"fylolanding",
    design:"https://fylopage13.netlify.app",
    code:"https://github.com/13Groszy/Fylo_landing_page",
    description:"Landing page created as a part of challenge from frontendmentor.io",
}
const weatherApp = {
    title:"Weather App",
    key:"weatherapp",
    design:"https://quote-the-weather.netlify.app",
    code:"https://github.com/13Groszy/Weather-Quotes-App",
    description:"Simple project with API usage. Draw random quote on a click or check the actual weather in any city.",
}
const photoLanding = {
    title:"Photographer Page",
    key:"photolanding",
    design:"https://graff.mdaszkiewicz.co.uk",
    code:"#",
    description:"Template project for a photographer. Website is fully responsive and have contact form.",
}
const chromeExtension = {
    title:"Chrome Extension",
    key:"chromeextension",
    design:'#',
    code:"#",
    description:"Simple chrome extension which reminds user to stretch their body if they do office work.",
}

const projects = [beaver, rockpaper, hotelApp, palindromeChecker, fyloLanding, weatherApp, photoLanding, chromeExtension];

// const template = {
//     title:"",
//     key:"",
//     design:"",
//     code:"",
//     description:"",
// }

/***/ })
/******/ 	]);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(0);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(1);
/******/ 	
/******/ })()
;