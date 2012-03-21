//Marc Mendoza
//Code Foo IGN
//Bonus: Connect 4

var gloop;
//int to keep track of current game state
// 1: Title Menu
// 2: In-Game
// 3: Pause Menu
// 4: Finished Screen
var curGameState;

//retrieve Canvas from html
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

//clear function
var clear = function(){
	ctx.fillStyle="#FFFFFF";
	
	ctx.beginPath();
	ctx.rect(0, 0, c.width, c.height);
	ctx.closePath();
	
	ctx.fill();
}

var TitleScreen = function(){
	ctx.font="10pt Arial";
	ctx.fillText("Connect 4: Pixelated Edition", c.width/2
}

var GameLoop = function(){
	clear();
	
	//handles which set of logic is called
	switch(curGameState)
	{
		case 1: //Title Menu
			break;
		case 2: //In-Game
			break;
		case 3: //Pause Menu
			break;
		case 4: //Finished Screen
			break;
	}
	
	gLoop = setTimeout(GameLoop, 1000/30);
}