
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
  }
  
  function draw() {
	background(25,255,255);
	rotateY(frameCount * 0.01);
  
	for (let j = 0; j < 5; j++) {
	  push();
	  for (let i = 0; i < 90; i++) {
		translate(
		  sin(frameCount * 0.001 + j) * 100,
		  sin(frameCount * 0.001 + j) * 100,
		  i * 0.1
		);
		rotateZ(frameCount * 0.002);
		push();
		sphere(8, 6, 4);
		pop();
	  }
	  pop();
	}
  }

