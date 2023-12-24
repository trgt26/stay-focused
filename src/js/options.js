// function getElement(id:string) : (HTMLElement | null) {
// }
var demoElement = document.getElementById("demo");
if (demoElement != null) {
    demoElement.innerHTML = localStorage.getItem("lastname");
}
localStorage.setItem("lastname", "Smith");
function myFunction() {
    console.log("hello");
}
// if(demoElement != null) {
//     demoElement.onclick = function() {myFunction()};
// }
// Set Item
// Retrieve
