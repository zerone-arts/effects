import { GlowParticle } from "./glowparticle.js";
const COLORS = [
  { r: 45, g: 74, b: 227 }, //blue
  { r: 250, g: 255, b: 89 }, //yellow
  { r: 255, g: 104, b: 248 }, //pupple
  { r: 44, g: 209, b: 252 }, //skyblue
  { r: 54, g: 233, b: 84 }, //green
];

export default class App {
  constructor(canvasRef, totalParticles) {
    this.canvas = canvasRef.current;
    this.ctx = this.canvas.getContext("2d");

    this.pixelRadio = window.devicePixelRatio > 1 ? 2 : 1;

    this.totalParticles = totalParticles;
    this.particles = [];
    this.maxRadius = 900;
    this.minRadius = 400;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this), false);
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRadio;
    this.canvas.height = this.stageHeight * this.pixelRadio;
    this.ctx.scale(this.pixelRadio, this.pixelRadio);

    this.ctx.globalCompositeOperation = "saturation";

    this.createPartices();
  }

  createPartices() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; i < this.totalParticles; i++) {
      const item = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        COLORS[curColor]
      );

      if (++curColor >= COLORS.length) {
        curColor = 0;
      }
      this.particles[i] = item;
    }
  }
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
  }
}
