import Ball from './src/ball.js';

let ball;
function setup() {
  createCanvas(windowWidth, windowHeight);

  ball = new Ball(100);
}

const drawLines = (xGap, yGap, b) => {
  let x1 = 0;
  let y1 = 0;
  for (let y2 = yGap; y2 <= height + yGap; y2 += yGap) {
    y1 = y2;
    x1 = 0;
    for (let x2 = xGap; x2 < width + xGap; x2 += xGap) {
      let drawY1 = y1;
      let drawY2 = y2;

      if (dist(x2, y2, b.x, b.y) < b.radius) {
        drawY2 += yGap * 0.7;
      }

      if (dist(x1, y1, b.x, b.y) < b.radius) {
        drawY1 += yGap * 0.7;
      }

      line(x1, drawY1, x2, drawY2);
      x1 = x2;
    }
  }
};

function draw() {
  stroke(255);
  background(13, 6, 56);
  ball.update();
  drawLines(5, 30, ball);
}

window.setup = setup;
window.draw = draw;
