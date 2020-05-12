var canvasWidth = 1920;
var canvasHeight= 130;
var spriteWidth = 657;
var spriteHeigth = 130;



function updateFrame(){
	//Updating the frame index
	curFrame = ++curFrame % frameCount;

	//Calculating the x coordinate for spritesheet
	srcX = curFrame * width;
}

function draw(){
	//Updating the frame
	updateFrame();
	//Drawing the image
	ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
}

setInterval(draw,100);