import { ScreenWidth, ScreenHeight } from "../Constants";

class CrtFilter extends Phaser.Filter {

  constructor(game) {
     const fragmentSrc = [

     "precision mediump float;",

        "varying vec2 vTextureCoord;",
        "uniform sampler2D uSampler;",
        "uniform float time;",

        "void main(void) {",
            "vec4 color = texture2D(uSampler, vTextureCoord).rgba;",
            "color -= abs(sin(vTextureCoord.y * 100.0 + time * 5.0)) * 0.08; // (1)",
            "color -= abs(sin(vTextureCoord.y * 300.0 - time * 10.0)) * 0.05; // (2)",
            "gl_FragColor = color;",
        "}"
    ];
    super(game, null, fragmentSrc);
    this.setResolution(ScreenWidth, ScreenHeight);
  }

}

export default CrtFilter;