
var $h1 = document.querySelectorAll("h1");

TweenMax.from($h1, 4, {"color": "black"});
TweenMax.to($h1, 2, {"background": "rgba(0, 0, 0, .5)"})

//var allofem = [
//".a",
//".b",
//".c",
//".d",
//".e",
//".f",
//".g",
//".h",
//".i",
//".j",
//".k",
//".l",
//".m",
//".n",
//".o",
//]


TweenMax.from(".a", 2.1, {x: "-=600vw"}); 	//from left
TweenMax.from(".b", 1.8, {x: "-=600vw"}); 	//from left
TweenMax.from(".g", 2.0, {x: "-=600vw"});	//from left
TweenMax.from(".h", 1.3, {x: "-=600vw"});	//from left



TweenMax.from(".f", 1.9, {x: "+=600vw"});	//from right
TweenMax.from(".l", 1.6, {x: "+=600vw"});	//from right
TweenMax.from(".m", 1.4, {x: "+=600vw"});	//from right
TweenMax.from(".k", 1.3, {x: "+=600vw"});	//from right



TweenMax.from(".c", 1.1, {y: "-=600vh"});	//from top
TweenMax.from(".d", 1.5, {y: "-=600vh"});	//from top
TweenMax.from(".e", 1.0, {y: "-=600vh"});	//from top


TweenMax.from(".i", 1.2, {y: "+=600vh"});	//from bottom
TweenMax.from(".j", 1.7, {y: "+=600vh"});	//from bottom




























