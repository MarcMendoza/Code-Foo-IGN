//Marc Mendoza
//Code Foo IGN
//Bonus: Connect 4

//retrieve Canvas from html
var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

var gloop,
	width = canvas.width,
	height = canvas.height,
	mouseX, mouseY,
	optionSelected = 0,
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

var OnMouseOver = function onMouseover(e){
	mouseX = e.clientX - canvas.clientLeft;
	mouseY = e.clientY - canvas.clientTop;
};

//
var UpdateTitleScreen = function(){
	var diffSelec = [ctx.measureText("Easy"),
					ctx.measureText("Medium"),
					ctx.measureText("Hard")];

	if(mouseX < (width - width/4 - 35 + diffSelec[2]))
	{
	}
};

var DrawTitleScreen = function(){
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

var UpdateInGame = function(){
};

var DrawInGame = function(){
};

var UpdatePauseMenu = function(){
};

var DrawPauseMenu = function(){
};

var UpdateFinishScreen = function(){
};

var DrawFinishScreen = function(){
};

var GameLoop = function(){
	clear(); //clear screen of previous draws
	
	//handles which set of logic is called
	//Logic and Draw is seperated in order to make functions
	//smaller to be better defined
	switch(curGameState)
	{
		case 1: //Title Menu
			UpdateTitleScreen();
			DrawTitleScreen();
			break;
		case 2: //In-Game
			UpdateInGame();
			DrawInGame();
			break;
		case 3: //Pause Menu
			UpdatePauseMenu();
			DrawPauseMenu();
			break;
		case 4: //Finished Screen
			UpdateFinishScreen();
			DrawFinishScreen();
			break;
	}
	
	gLoop = setTimeout(GameLoop, 1000/30);
};

//sets up event listeners for mouseover and click
//then starts the GameLoop function
var init = function(){
	addEventListener("mouseover", OnMouseOver, false);
	//need event listener for mouse click
	GameLoop();
};

init();