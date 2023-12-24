/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/js/options.ts ***!
  \***************************/
var demoElement = document.getElementById("demo");
localStorage.setItem("lastnam", "Smith");
if (demoElement != null) {
  // demoElement.onclick = function() {myFunction()};
  demoElement.addEventListener("click", myFunction);
}
function myFunction() {
  chrome.tabs.create({
    url: "html/newTab.html"
  });
  if (demoElement != null) {
    demoElement.innerHTML = localStorage.getItem("lastname") || "not set";
  }
}
/******/ })()
;