function setup() {
  createCanvas(2000, 2000);
  noLoop();
}

function draw() {
  var width = 1000;
  var height = 1000;
  var left_x = int(width * 0.5);
  var right_x = int(width * 1.5);
  var bottom_y = int(height * 0.5);
  var top_y = int(height * 1.5);
  background(255);
  strokeWeight(0.01*width);
  line(left_x, bottom_y, left_x, top_y);
  line(left_x, top_y, right_x, top_y);
  line(right_x, top_y, right_x, bottom_y);
  line(right_x, bottom_y, left_x, bottom_y);

  // grid
  var resolution_x = int(width * 0.02);
  var resolution_y = int(height * 0.02);
  var num_columns = (right_x - left_x) / resolution_x;
  var num_rows = (top_y - bottom_y) / resolution_y;
  
  // arrows
  var arrow_size = 0.25 * resolution_x;
  var default_angle = PI * 0.25;
  strokeWeight(0.002*width);
  
  for (var x=0; x<2*width; x=x+resolution_x) {
    for (var y=0; y<2*height; y=y+resolution_y ) {
      // generate angle
      var angle = (x / width) * PI + (y / height) * PI + 0.1*random()*PI;
      var dx = 0.5 * arrow_size * cos(angle);
      var dy = 0.5 * arrow_size * sin(angle);
      line(x-dx, y-dy, x+dx, y+dy);
    }
  }
}