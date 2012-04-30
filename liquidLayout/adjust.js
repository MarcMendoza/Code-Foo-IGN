/*Author: Marc Mendoza
*	IGN Code Foo Submission
*	Question 2: Liquid Layout Code
*	Summary: Javascript that sets up an event listener and has
*				a single function to change the css in
*				liquid.html based on the width of the window.
*/

//changes the css based on the width of the document
var adjustCss = function(width){
	//Window width is parsed into an int to ensure that it is a whole number
	width = parseInt(width);
	if(width < 1050) {
		document.getElementById("styleSheet").href = "style/lowerRes.css";}
	else {
		document.getElementById("styleSheet").href = "style/higherRes.css";}
};

//this function is called when a resize occurs
var OnResize = function OnResize(e){
	adjustCss(window.innerWidth);
}

//This is the entry point for the script,
//adjustCss is called once to check the clients window size,
//The resize event listener is setup to call OnResize
var main = function(){	
	adjustCss(window.innerWidth);
	addEventListener("resize", OnResize, false);
};

main();

