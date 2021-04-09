function setup() {
  createCanvas(3820, 2160);
  noLoop();
}

function draw() {
  background('PEACHPUFF');
  var xmax = 3820;
  var ymax = 2160;
  var xstep = 30;
  var ystep = 30;
  for (var x = 0; x < xmax; x = x + xstep) {
    for (var y = 0; y < ymax; y = y + ystep) {
      strokeWeight(1+5*(x/xmax) + 5*(y/ymax));
      if (random() > 0.5) {
        line(x, y, x+xstep, y+ystep);
      } else {
        line(x, y+ystep, x+xstep, y);
      }
    }
  }
}