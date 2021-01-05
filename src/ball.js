export default class Ball {
  constructor(radius) {
    this.radius = radius;
    this.x = 0;
    this.y = 0;

    this.noiseSeed = random(100);
    this.noiseStep = 0.005;
  }

  update() {
    this.x = noise(this.noiseSeed) * width;
    this.y = noise(this.noiseSeed, 10) * height;
    this.noiseSeed += this.noiseStep;
  }
}
