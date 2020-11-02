let array = [];
let strokeWidth = 5; 
let color 

function setup() {
  createCanvas(windowWidth, windowHeight);
 
 drawGrid();
  noFill();

colorPicker = createColorPicker('#ed225d');
colorPicker.position(windowWidth / 2, height + 30);

}

function draw() {

background(220, 0, 0, 5)
strokeWeight(strokeWidth);
stroke(colorPicker.color());

//stroke(map(mouseX, 0, 600, 0, 255, true)) makes trail
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);
line(mouseY, mouseX, pmouseY, pmouseX)
line(width + mouseX, height + mouseY, width + pmouseX, height + pmouseY);
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
			fillColor = 255;
		}
		fill(fillColor);
		rect(i, j, width /numCells, height / numCells); // makes the grid
		}
	}
	strokeWeight(5);
}