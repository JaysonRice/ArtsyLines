// eslint-disable-next-line import/extensions
import Ball from './src/ball.js';

const balls = [];
const nBalls = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < nBalls; i += 1) {
    balls.push(new Ball(random(width * 0.05, width * 0.15)));
  }
}

// const drawLines = (xGap, yGap, ballsArr) => {
//   for (let y = -height * 0.5; y <= height + height * 0.5; y += yGap) {
//     beginShape();
//     noFill();
//     for (let x = -width * 0.5; x <= width + width * 0.5; x += xGap) {
//       let drawY = y;

// // eslint-disable-next-line no-loop-func
// ballsArr.forEach((b) => {
//   const dy = yGap * 1.5;

//   const d = dist(x, y, b.x, b.y);
//   if (d < b.radius) {
//     const noiseScl = 1 - d / b.radius;
//     const offset = noise(frameCount * 0.05, x, y * 0.5);
//     drawY += map(offset, 0, 1, -dy * noiseScl, dy * noiseScl);
//   }
// });

//       curveVertex(x, drawY);
//     }
//     endShape();
//   }
// };

const drawLines = (xGap, yGap, ballsArr) => {
  let x1 = 0;
  let y1 = 0;
  for (let y2 = yGap; y2 <= height + yGap; y2 += yGap) {
    y1 = y2;
    x1 = 0;
    for (let x2 = xGap; x2 < width + xGap; x2 += xGap) {
      push();
      let drawY1 = y1;
      let drawY2 = y2;

      // eslint-disable-next-line no-loop-func
      ballsArr.forEach((b) => {
        const dy = yGap * 1.5;

        const d1 = dist(x1, y1, b.x, b.y);
        const d2 = dist(x2, y2, b.x, b.y);

        if (d1 < b.radius) {
          drawY1 += random(-dy, dy);
        }

        if (d2 < b.radius) {
          drawY2 += random(-dy, dy);
        }
      });

      line(x1, drawY1, x2, drawY2);
      pop();
      x1 = x2;
    }
  }
};

function draw() {
  background(100, 100, 255);

  stroke(255, 178, 100);
  strokeWeight(3);

  drawLines(20, 20, balls);

  balls.forEach((ball) => {
    ball.update();
  });
}

window.setup = setup;
window.draw = draw;
