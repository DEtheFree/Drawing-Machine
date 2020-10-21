let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

  strokeWeight(5);
  noFill();
}

function draw() {

if (mouseIsPressed){
	backgroundColor-=4;//decrease backgound by 4's, so faster,
	background(backgroundColor);
	// line(mouseX, mouseY, pmouseX, pmouseY);
	array.push([mouseX, mouseY]);

		beginShape();
		for(let i = 0; i < array.length - 1; i++){
			//line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
		curveVertex(array[i][0], array[i][1]); 
		} 

	endShape();
	}
}

function keyTyped(){

	if(key === 's'){
		//saves images
		saveCanvas('fileName', 'png');
	} else if (key === 'd'){
		//display image
		background(255);

	beginShape();
		for(let i = 0; i < array.length - 1; i++){
			//line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
		curveVertex(array[i][0], array[i][1]); 
		} 

	endShape();
	}


	return false;
}

function mousePressed(){
	array = [];
	backgroundColor = 255;

}