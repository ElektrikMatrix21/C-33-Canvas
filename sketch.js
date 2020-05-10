var points = [];
var draw = [];
var path;
var start = false;

function setup() {
  createCanvas(600, 200);
  canvas.mousePressed(start);
  canvas.mouseReleased(end);
}

function draw() {
  background(255);

  if(mouseIsPressed){
    var drawing = {
    x : mouseX, 
    y : mouseY,
    }
    points.push(drawing);
  }

  strokeWeight(4);
  stroke("green");
  noFill();

  for(var i = 0; i<draw.length; i++){
    path = draw[i];
    beginShape();
    for(var j = 0; j<path.length; j++ ){
      vertex(path[j].x, path[j].y);
    }
    endShape();
  }
}

function start() {
  draw.push(points);
}

function end() {
  isDrawing = false;
}

