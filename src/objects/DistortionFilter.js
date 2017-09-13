import { ScreenWidth, ScreenHeight } from "../Constants";

class DistortionFilter extends Phaser.Filter {

  constructor(game) {
     const fragmentSrc = [
      "precision mediump float;",
        "uniform sampler2D Texture0;",
        "uniform sampler2D Texture1;",
        "varying vec2 vTextureCoord;",

        "void main()",
        "{",
        "  vec2 pos = vTextureCoord;",
        "  float distortion = 0.08;",
        "  pos -= vec2(0.5, 0.5);",
        "  pos *= vec2(pow(length(pos), distortion));",
        "  pos += vec2(0.5, 0.5);",
        "  gl_FragColor = texture2D(Texture0, pos);",
        "}"
    ];
    super(game, null, fragmentSrc);
    this.setResolution(ScreenWidth, ScreenHeight);
  }

}

export default DistortionFilter;