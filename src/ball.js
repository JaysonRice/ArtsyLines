export default class Ball {
  constructor(radius) {
    this.radius = radius;
    this.x = 0;
    this.y = 0;

    this.noiseSeed = random(100);
    this.noiseStep = 0.001;
  }

  update() {
    this.x = noise(this.noiseSeed);
    this.y = noise(this.noiseSeed, 10);

    this.x = map(this.x, 0, 1, -width / 3, width + width / 3);
    this.y = map(this.y, 0, 1, -height / 3, height + height / 3);

    this.noiseSeed += this.noiseStep;
  }
}
