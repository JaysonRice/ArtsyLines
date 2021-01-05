function setup() {
  createCanvas(windowWidth, windowHeight);
}

const drawLines = (xGap, yGap) => {
  let x1 = 0;
  let y1 = 0;
  for (let y2 = yGap; y2 <= height + yGap; y2 += yGap) {
    y1 = y2;
    x1 = 0;
    for (let x2 = xGap; x2 < width + xGap; x2 += xGap) {
      line(x1, y1, x2, y2);
      push();
      strokeWeight(3);
      point(x1, y1);
      point(x2, y2);
      pop();
      x1 = x2;
    }
  }
};

function draw() {
  stroke(255);
  background(13, 6, 56);
  drawLines(20, 50);
}

window.setup = setup;
window.draw = draw;
