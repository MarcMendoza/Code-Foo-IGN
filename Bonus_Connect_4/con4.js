//Marc Mendoza
//Code Foo IGN
//Bonus: Connect 4

//retrieve Canvas from html
var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

var gloop,
	width = canvas.width,
	height = canvas.height,
	mouseLocX, mouseLocY,
	mouseClickX, mouseClickY,
	optionSelected = 0;
//int to keep track of current game state
// 1: Title Menu
// 2: In-Game
// 3: Pause Menu
// 4: Finished Screen
enum GameState {TitleMenu, InGame, PauseMenu, FinishedScreen};
var curGameState = GameState.TitleScreen;

var titleText = ["Easy",
				"Medium",
				"Hard"];	
//clears the screen with white
var clear = function(){
	ctx.clearRect(0, 0, width, height);
};

var Debug = function(){
	ctx.font="20px Comic Sans MS";
	ctx.fillStyle="#999";
	
	ctx.fillText("mouseLocX: " + mouseLocX, 20, 20);
	ctx.fillText("mouseLocY: " + mouseLocY, 20, 50);
	
	ctx.fillText("mouseClickX: " + mouseClickX, 180, 20);
	ctx.fillText("mouseClickY: " + mouseClickY, 180, 50);
};

var OnMouseMove = function onMouseover(e){
	var obj = canvas;
    var top = 0;
    var left = 0;
    while (obj && obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
	
	mouseLocX = e.clientX - left + window.pageXOffset;
	mouseLocY = e.clientY - top + window.pageYOffset;
};

var OnClick = function OnClick(e){
	var obj = canvas;
    var top = 0;
    var left = 0;
    while (obj && obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
	
	mouseClickX = e.clientX - left + window.pageXOffset;
	mouseClickY = e.clientY - top + window.pageYOffset;
}

//
var UpdateTitleScreen = function(){
	var diffSelec = [ctx.measureText("Easy"),
					ctx.measureText("Medium"),
					ctx.measureText("Hard")];
	var leftMargin = width - width/4 - 35;
	
	if((mouseLocX < (leftMargin + diffSelec[0].width)) && (mouseLocX >  leftMargin) &&
		(mouseLocY > height - height/4 - 45 -20) && (mouseLocY < height - height/4 - 15 -20))
	{
		optionSelected = 1;
	}
	else if((mouseLocX < (leftMargin + diffSelec[1].width)) && (mouseLocX >  leftMargin) &&
		(mouseLocY > height - height/4 - 15 -20) && (mouseLocY < height - height/4 + 15 -20))
	{
		optionSelected = 2;
	}
	else if((mouseLocX < (leftMargin + diffSelec[2].width)) && (mouseLocX >  leftMargin) &&
		(mouseLocY > height - height/4 + 15 -20) && (mouseLocY < height - height/4 + 45 -20))
	{
		optionSelected = 3;
	}
	else
		optionSelected = 0;
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
	
	var i = 0;
	var tempY = height - height/4 - 45;
	for(i=0; i < 3; i++)
	{
		if(optionSelected == (i+1))
			ctx.fillStyle = "#000";
		ctx.fillText("" + titleText[i], width - width/4 - 35, tempY);
		
		tempY = tempY + 30;
		ctx.fillStyle = "#999";
	}
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
	
	Debug();
	
	gLoop = setTimeout(GameLoop, 1000/30);
};

//sets up event listeners for mouseover and click
//then starts the GameLoop function
var init = function(){
	addEventListener("mousemove", OnMouseMove, false);
	addEventListener("click", OnClick, false);
	//need event listener for mouse click
	GameLoop();
};

init();