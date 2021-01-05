// eslint-disable-next-line import/extensions
import Ball from './src/ball.js';

const balls = [];
const nBalls = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < nBalls; i += 1) {
    balls.push(new Ball(random(50, 200)));
  }
}

const drawLines = (xGap, yGap, ballsArr) => {
  for (let y = -height * 0.5; y <= height + height * 0.5; y += yGap) {
    beginShape();
    noFill();
    for (let x = -width * 0.5; x <= width + width * 0.5; x += xGap) {
      let drawY = y;

      // eslint-disable-next-line no-loop-func
      ballsArr.forEach((b) => {
        const dy = yGap * 1.5;

        const d = dist(x, y, b.x, b.y);
        if (d < b.radius) {
          const noiseScl = 1 - d / b.radius;
          const offset = noise(frameCount * 0.05, x, y * 0.5);
          drawY += map(offset, 0, 1, -dy * noiseScl, dy * noiseScl);
        }
      });

      curveVertex(x, drawY);
    }
    endShape();
  }
};

function draw() {
  background(100, 100, 255);

  stroke(255, 178, 100);
  strokeWeight(3);

  balls.forEach((ball) => {
    ball.update();
  });
  drawLines(20, 20, balls);
}

window.setup = setup;
window.draw = draw;
