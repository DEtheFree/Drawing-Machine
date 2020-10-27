let array = [];
let backgroundColor = (200, 0, 0, 20);
let noiseOffset = 0.0;
let strokeWidth = 5; 

function setup() {
  createCanvas(windowWidth, windowHeight);
 
 drawGrid();
  noFill();
}

function draw() {

background(220, 0, 0, 5)
strokeWeight(strokeWidth);

noiseOffset = noiseOffset + .05 ;
strokeWidth = noise(noiseOffset) * 100;

stroke(map(mouseX, 0, 600, 0, 255, true))
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);

}


function keyTyped(){

	if(key === 's'){
		//saves images
		saveCanvas('fileName', 'png');
	} else if (key === 'c'){
	clear();
		
	}


	return false;
}



function drawGrid(){
	numCells = 20;
	fillColor = 255
	//noStroke();
	strokeWeight(0);

	for (let i = 0; i <= width; i += width / numCells){
		for (let j = 0; j <= height; j += height / numCells){
		if (fillColor === 255){
			fillColor = 200;
		} else {
			fillColor 255;
		}
		fill(fillColor);
		rect(i, j, width /numCells, height / numCells); // makes the grid
		}
	}
	strokeWeight(5);
}