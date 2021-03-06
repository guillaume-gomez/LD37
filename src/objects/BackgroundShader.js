import { ScreenWidth, ScreenHeight } from "../Constants";

class BackgroundShader extends Phaser.Sprite {

  constructor(game) {
    const fragmentSrc = [

        "precision mediump float;",

        "uniform float     time;",
        "uniform vec2     resolution;",

        "void main() {",
            "vec3 h_color_top = vec3(1.5, 0.5, 10.0) * clamp(sin(time), 0.5, 1.0);",
            "vec3 h_color_bottom = vec3(0, 0, 1) * clamp(sin(time), 0.5, 1.0);",
            "gl_FragColor = vec4(h_color_top * (gl_FragCoord.y / resolution.y), 1) + vec4(h_color_bottom * (1.4 - (gl_FragCoord.y / resolution.y)), 1);",
        "}"

    ];

    super(game, 0, 0);
    this.filter = new Phaser.Filter(game, null, fragmentSrc);
    this.filter.setResolution(ScreenWidth, ScreenHeight);

    this.width = ScreenWidth;
    this.height = ScreenHeight;
    this.filters = [ this.filter ];
  }

  update() {
     this.filter.update();
  }

}

export default BackgroundShader;