//Marc Mendoza
//Code Foo IGN
//Bonus: Connect 4

//retrieve Canvas from html
var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

var gloop,
	width = canvas.width,
	height = canvas.height,
//int to keep track of current game state
// 1: Title Menu
// 2: In-Game
// 3: Pause Menu
// 4: Finished Screen
	curGameState = 1;

//clears the screen with white
var clear = function(){
	ctx.clearRect(0, 0, width, height);
};

//
var TitleScreen = function(){
	var diffSelec = [ctx.measureText("Easy"),
					ctx.measureText("Medium"),
					ctx.measureText("Hard")];

	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	
	ctx.font="40px Comic Sans MS";
	ctx.fillText("Connect 4", width/2, height/3-30);
	ctx.fillText("Pixelated Edition", width/2, height/3 +10);
	
	ctx.font="20px Comic Sans MS";
	ctx.fillText("Select Difficulty:", width/4+30, height - height/4 - 15);
	
	ctx.textAlign = "left";
	ctx.fillStyle = "#999";
	ctx.fillText("Easy", width - width/4 - 35, height - height/4 - 45);
	ctx.fillText("Medium", width - width/4 - 35, height - height/4 - 15);
	ctx.fillText("Hard", width - width/4 - 35, height - height/4 + 15);
};

var GameLoop = function(){
	clear();
	//handles which set of logic is called
	switch(curGameState)
	{
		case 1: //Title Menu
			TitleScreen();
			break;
		case 2: //In-Game
			break;
		case 3: //Pause Menu
			break;
		case 4: //Finished Screen
			break;
	}
	
	gLoop = setTimeout(GameLoop, 1000/30);
};

GameLoop();