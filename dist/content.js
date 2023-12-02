console.log("from content")
console.warn("hi")
if( document.location.host == "codeforces.com" ||
    document.location.host == "vjudge.net" ||
    document.location.host == "a2oj.com"
    
    ) {
    document.body.style.background = "black"
    console.log("this is code")
}