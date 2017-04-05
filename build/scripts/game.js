(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SpriteWidth = exports.SpriteWidth = 32;
var SpriteHeight = exports.SpriteHeight = 32;
var SpriteRatioX = exports.SpriteRatioX = SpriteWidth / 64;
var SpriteRatioY = exports.SpriteRatioY = SpriteHeight / 64;

var ScreenWidth = exports.ScreenWidth = 800;
var ScreenHeight = exports.ScreenHeight = 600;

var CameraVelocity = exports.CameraVelocity = 20;

var FlashColor = exports.FlashColor = 0x555555;
var FlashDuration = exports.FlashDuration = 1000;
var ShakeIntensity = exports.ShakeIntensity = 0.002;
var ShakeDuration = exports.ShakeDuration = 200;

var Border = exports.Border = 256;

var CharacterWitdh = exports.CharacterWitdh = 66;
var CharacterHeight = exports.CharacterHeight = 54;

var EnemyWidth = exports.EnemyWidth = 55;
var EnemyHeight = exports.EnemyHeight = 60;

var BoomerangWidth = exports.BoomerangWidth = 30;
var BoomerangHeight = exports.BoomerangHeight = 30;
var RatioSize = exports.RatioSize = 1 / 3;

var MinEnemies = exports.MinEnemies = 25;
var MaxEnemies = exports.MaxEnemies = 50;

var OriginalTimer = exports.OriginalTimer = 15;
var MinTimer = exports.MinTimer = 5;

var MaxWave = exports.MaxWave = 10;

var DirectionBoomerang = exports.DirectionBoomerang = {
  left: "LEFT",
  up: "UP",
  down: "DOWN",
  right: "RIGHT"
};

var KillText = exports.KillText = "Kills: ";
var KillTextX = exports.KillTextX = 30;
var KillTextY = exports.KillTextY = 550;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HeathBarX = exports.HeathBarX = 650;
var HeathBarY = exports.HeathBarY = 565;

var HeathBarConfig = exports.HeathBarConfig = {
  x: HeathBarX,
  y: HeathBarY,
  bar: { color: "#43d637" },
  bg: { color: "#8A0707" },
  animationDuration: 50
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LD = exports.LD = "ld";
var Wall = exports.Wall = "wall"; //http://bevouliin.com/
var SpritePlayer = exports.SpritePlayer = "player";
var SpriteEnemy = exports.SpriteEnemy = "enemy";
var SpriteEnemy2 = exports.SpriteEnemy2 = "enemy2";
var SpriteEnemy3 = exports.SpriteEnemy3 = "enemy3";
var SpriteBullet = exports.SpriteBullet = "bullet";
var BoomerangSprite = exports.BoomerangSprite = "boomerang";
var DeathSound = exports.DeathSound = "deathSound";
var Background = exports.Background = "background";
var LightSprite = exports.LightSprite = "lightSprite";
var Medikit = exports.Medikit = "medikit";
var ShootSound = exports.ShootSound = "shootSound";
var TadaSound = exports.TadaSound = "TadaSound";
var HurtSound = exports.HurtSound = "hurSound";

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require('./Constants.js');

var _Game = require('states/Game');

var _Game2 = _interopRequireDefault(_Game);

var _Commands = require('states/Commands');

var _Commands2 = _interopRequireDefault(_Commands);

var _Menu = require('states/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _WinState = require('states/WinState');

var _WinState2 = _interopRequireDefault(_WinState);

var _LoseState = require('states/LoseState');

var _LoseState2 = _interopRequireDefault(_LoseState);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LD37 = function (_Phaser$Game) {
  _inherits(LD37, _Phaser$Game);

  function LD37() {
    _classCallCheck(this, LD37);

    var _this = _possibleConstructorReturn(this, (LD37.__proto__ || Object.getPrototypeOf(LD37)).call(this, _Constants.ScreenWidth, _Constants.ScreenHeight, Phaser.AUTO, 'content', null));

    _this.state.add('Game', _Game2.default, false);
    _this.state.add('Menu', _Menu2.default, false);
    _this.state.add('Win', _WinState2.default, false);
    _this.state.add('Lose', _LoseState2.default, false);
    _this.state.add('Commands', _Commands2.default, false);
    _this.state.start('Menu');
    return _this;
  }

  _createClass(LD37, [{
    key: 'goToCommands',
    value: function goToCommands() {
      this.state.start('Commands');
    }
  }, {
    key: 'goToGame',
    value: function goToGame() {
      this.state.start('Game', Phaser.Plugin.StateTransition.Out.SlideBottom, null, true, true);
    }
  }, {
    key: 'goToLose',
    value: function goToLose() {
      this.state.start('Lose', null, Phaser.Plugin.StateTransition.Out.SlideLeft, null, true);
    }
  }, {
    key: 'goToWin',
    value: function goToWin() {
      this.state.start('Win', Phaser.Plugin.StateTransition.Out.SlideRight, null, true, true);
    }
  }]);

  return LD37;
}(Phaser.Game);

new LD37();

},{"./Constants.js":1,"states/Commands":15,"states/Game":16,"states/LoseState":17,"states/Menu":18,"states/WinState":19}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require("../Constants.js");

var _SpriteConstants = require("../SpriteConstants");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var BackgroundLayer = function (_Phaser$Group) {
  _inherits(BackgroundLayer, _Phaser$Group);

  function BackgroundLayer(game, x, y, borders, parent, name) {
    _classCallCheck(this, BackgroundLayer);

    // console.log(x)
    // console.log(y)
    // console.log(borders)
    var _this = _possibleConstructorReturn(this, (BackgroundLayer.__proto__ || Object.getPrototypeOf(BackgroundLayer)).call(this, game, parent, name, false, true, Phaser.Physics.ARCADE));

    var xOnGrid = x - x % _Constants.SpriteWidth;
    var yOnGrid = y - y % _Constants.SpriteHeight;
    _this.fillBackground(borders, xOnGrid, yOnGrid);
    return _this;
  }

  _createClass(BackgroundLayer, [{
    key: "createBackground",
    value: function createBackground(x, y) {
      var sprite = this.create(x, y, _SpriteConstants.Background);
      sprite.body.immovable = true;
    }
  }, {
    key: "fillBackground",
    value: function fillBackground(borders, xOrigin, yOrigin) {
      var stack = [];
      var hasBorder = function hasBorder(x, y) {
        var element = borders.find(function (tile) {
          return tile.position.x === x && tile.position.y === y;
        });
        return element;
      };

      if (hasBorder(xOrigin, yOrigin)) {
        return null;
      }
      stack.push({ x: xOrigin, y: yOrigin });
      while (stack.length != 0) {
        var coord = stack.pop();
        this.createBackground(coord.x, coord.y);
        if (!hasBorder(coord.x, coord.y - _Constants.SpriteHeight)) {
          stack.push({ x: coord.x, y: coord.y - _Constants.SpriteHeight });
        }
        if (!hasBorder(coord.x, coord.y + _Constants.SpriteHeight)) {
          stack.push({ x: coord.x, y: coord.y + _Constants.SpriteHeight });
        }
        if (!hasBorder(coord.x - _Constants.SpriteWidth, coord.y)) {
          stack.push({ x: coord.x - _Constants.SpriteWidth, y: coord.y });
        }
        if (!hasBorder(coord.x + _Constants.SpriteWidth, coord.y)) {
          stack.push({ x: coord.x + _Constants.SpriteWidth, y: coord.y });
        }
      }
    }

    // fillBackground(x,y, borders) {
    //   const hasBorder = (x,y) => {
    //     const element = borders.find(tile => {return tile.position.x === x && tile.position.y === y; });
    //     return element;
    //   };

    //   if(x < 512 || x > 650 || y < 512 || y > 650) {
    //     return null;
    //   }
    //   if(!hasBorder()) {
    //     this.createBackground(x,y);
    //     //this.fillBackground(x, y - SpriteHeight, borders);
    //     this.fillBackground(x, y + SpriteHeight, borders);
    //     this.fillBackground(x + SpriteWidth, y, borders);
    //     //this.fillBackground(x - SpriteWidth, y, borders);
    //   }
    // }

  }]);

  return BackgroundLayer;
}(Phaser.Group);

exports.default = BackgroundLayer;

},{"../Constants.js":1,"../SpriteConstants":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _SpriteConstants = require("../SpriteConstants");

var _Constants = require("../Constants");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Duration = 1500;
var DurationRotation = 250;
var Strengh = 600;

var Boomerang = function (_Phaser$Sprite) {
  _inherits(Boomerang, _Phaser$Sprite);

  function Boomerang(game, x, y) {
    _classCallCheck(this, Boomerang);

    var _this = _possibleConstructorReturn(this, (Boomerang.__proto__ || Object.getPrototypeOf(Boomerang)).call(this, game, x, y, _SpriteConstants.BoomerangSprite, 0));

    game.physics.arcade.enable(_this);
    _this.body.immovable = true;
    _this.anchor.setTo(0.5, 0.5);
    _this.scale.setTo(_Constants.RatioSize, _Constants.RatioSize);
    return _this;
  }

  _createClass(Boomerang, [{
    key: "startMove",
    value: function startMove() {
      this.body.immovable = false;
    }
  }, {
    key: "isMoving",
    value: function isMoving() {
      return !this.body.immovable;
    }
  }, {
    key: "launch",
    value: function launch(direction, onCompleteFunction) {
      this.startMove();
      var movement = {};
      switch (direction) {
        case _Constants.DirectionBoomerang.left:
          movement = { x: this.position.x - Strengh };
          break;
        case _Constants.DirectionBoomerang.right:
          movement = { x: this.position.x + Strengh };
          break;
        case _Constants.DirectionBoomerang.down:
          movement = { y: this.position.y + Strengh };
          break;
        case _Constants.DirectionBoomerang.up:
          movement = { y: this.position.y - Strengh };
          break;
      }
      var launchTween = this.game.add.tween(this).to(movement, Duration, Phaser.Easing.Linear.None, true, 0, 0, true);
      var tweenRotation = this.game.add.tween(this).to({ angle: 360 }, DurationRotation, Phaser.Easing.Linear.None, true);
      tweenRotation.repeat(100, 1);
      launchTween.onComplete.add(onCompleteFunction);
    }
  }]);

  return Boomerang;
}(Phaser.Sprite);

exports.default = Boomerang;

},{"../Constants":1,"../SpriteConstants":3}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _SpriteConstants = require("../SpriteConstants");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Chandelier = function (_Phaser$Group) {
  _inherits(Chandelier, _Phaser$Group);

  function Chandelier(game, x, y, parent, name) {
    _classCallCheck(this, Chandelier);

    var _this = _possibleConstructorReturn(this, (Chandelier.__proto__ || Object.getPrototypeOf(Chandelier)).call(this, game, parent, name));

    for (var i = 0; i < 9; i++) {
      _this.createLight();
    }
    _this.align(3, -1, 48, 48);

    _this.x = x;
    _this.y = y;
    return _this;
  }

  _createClass(Chandelier, [{
    key: "createLight",
    value: function createLight() {
      var sprite = this.create(0, 0, _SpriteConstants.LightSprite);
      sprite.alpha = 0.4;
    }
  }]);

  return Chandelier;
}(Phaser.Group);

exports.default = Chandelier;

},{"../SpriteConstants":3}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _utils = require("utils");

var _Constants = require("Constants");

var _Chandelier = require("objects/Chandelier");

var _Chandelier2 = _interopRequireDefault(_Chandelier);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MaxChandelier = 5;

var ChandelierLayer = function (_Phaser$Group) {
  _inherits(ChandelierLayer, _Phaser$Group);

  function ChandelierLayer(game, parent, name) {
    _classCallCheck(this, ChandelierLayer);

    var _this = _possibleConstructorReturn(this, (ChandelierLayer.__proto__ || Object.getPrototypeOf(ChandelierLayer)).call(this, game, parent, name));

    var nbChandelier = (0, _utils.getRandomArbitrary)(0, MaxChandelier);
    for (var i = 0; i < nbChandelier; i++) {
      var x = (0, _utils.getRandomArbitrary)(2 * _Constants.Border, game.world.bounds.width - _Constants.SpriteWidth - 2 * _Constants.Border);
      var y = (0, _utils.getRandomArbitrary)(2 * _Constants.Border, game.world.bounds.height - _Constants.SpriteHeight - 2 * _Constants.Border);
      _this.addChandelier(x, y);
    }
    return _this;
  }

  _createClass(ChandelierLayer, [{
    key: "addChandelier",
    value: function addChandelier(x, y) {
      var chandelier = new _Chandelier2.default(this.game, x, y);
      this.add(chandelier);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;

      this.children.forEach(function (chandelier) {
        _this2.remove(chandelier);
      });
    }
  }]);

  return ChandelierLayer;
}(Phaser.Group);

exports.default = ChandelierLayer;

},{"Constants":1,"objects/Chandelier":7,"utils":20}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _SpriteConstants = require("../SpriteConstants");

var _Constants = require("../Constants");

var _utils = require("../utils");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Damage = 10;
var Cure = 250;
var Velocity = 200;
var MaxBullet = 10;
var TimeLapse = 10;
var MaxLife = 1000;

var Character = function (_Phaser$Sprite) {
  _inherits(Character, _Phaser$Sprite);

  function Character(game, x, y, key, frame) {
    _classCallCheck(this, Character);

    var _this = _possibleConstructorReturn(this, (Character.__proto__ || Object.getPrototypeOf(Character)).call(this, game, x, y, _SpriteConstants.SpritePlayer, frame));

    game.physics.arcade.enable(_this);
    //this.body.gravity.y = 500;
    _this.body.bounce.x = _this.body.bounce.y = 0;
    _this.body.mass = 1;
    _this.direction = 1;
    _this.anchor.setTo(0.5, 0.5);
    _this.life = MaxLife;

    var fire = [8, 9, 10, 11];
    var walk = [0, 1, 2, 3, 4, 5, 6, 7];
    var slide = [12, 13, 14, 15, 14, 13, 12];

    _this.animations.add('walk', walk, TimeLapse, false);
    _this.animations.add('slide', slide, TimeLapse, false);
    _this.animations.add('fire', fire, TimeLapse * 6, false);

    _this.weapon = game.add.weapon(MaxBullet, _SpriteConstants.SpriteBullet);
    _this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    _this.weapon.bulletAngleOffset = 90;
    //this.weapon.addBulletAnimation("fire", fire, TimeLapse, true);
    _this.weapon.bulletAngleVariance = 5;
    _this.weapon.bulletSpeed = 500;
    _this.weapon.fireRate = 300;

    _this.weapon.trackSprite(_this, 30, 20, true);
    _this.shootFx = game.add.audio(_SpriteConstants.ShootSound);
    _this.shootFx.allowMultiple = true;
    _this.shootFx.addMarker('shootMarker', 0, 0.3);

    game.input.gamepad.start();
    _this.pad = game.input.gamepad.pad1;
    _this.cursor = game.input.keyboard.createCursorKeys();

    _this.fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    _this.fireClick = game.input.activePointer.leftButton;

    _this.up = game.input.keyboard.addKey(Phaser.Keyboard.W);
    _this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    _this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    _this.down = game.input.keyboard.addKey(Phaser.Keyboard.S);

    _this.lastDirection = null;
    _this.useGamePad = false;
    return _this;
  }

  _createClass(Character, [{
    key: "update",
    value: function update() {
      if (!this.isDeath()) {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        if ((0, _utils.hasGamepad)(this.game)) {
          this.gamepadControls();
        }
        this.keywordAndMouseControls();
      }
    }
  }, {
    key: "keywordAndMouseControls",
    value: function keywordAndMouseControls() {
      console.log(this.useGamePad);
      if (!this.useGamePad) {
        this.rotation = this.game.physics.arcade.angleToPointer(this);
      }
      var move = null;
      if (this.cursor.left.isDown || this.leftKey.isDown) {
        this.leftActions();
        this.useGamePad = false;
        move = "left";
      } else if (this.cursor.right.isDown || this.rightKey.isDown) {
        this.rightActions();
        this.useGamePad = false;
        move = "right";
      }

      if (this.cursor.up.isDown || this.up.isDown) {
        this.upActions();
        this.useGamePad = false;
        move = "up";
      } else if (this.cursor.down.isDown || this.down.isDown) {
        this.downActions();
        this.useGamePad = false;
        move = "down";
      }

      if (this.fireButton.isDown || this.fireClick.isDown) {
        this.shootActions();
        this.useGamePad = false;
      }
      this.anim(move);
    }
  }, {
    key: "gamepadControls",
    value: function gamepadControls() {
      if (this.useGamePad) {
        var Y = this.pad.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y);
        var X = this.pad.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X);
        if (X || Y) {
          this.rotation = Math.atan2(Y, X);
        }
      }
      var move = null;
      if (this.pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1) {
        this.leftActions();
        this.useGamePad = true;
        move = "left";
      } else if (this.pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1) {
        this.rightActions();
        this.useGamePad = true;
        move = "right";
      }

      if (this.pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1) {
        this.upActions();
        this.useGamePad = true;
        move = "up";
      } else if (this.pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1) {
        this.downActions();
        this.useGamePad = true;
        move = "down";
      }

      if (this.pad.justPressed(Phaser.Gamepad.XBOX360_A)) {
        this.shootActions();
        this.useGamePad = true;
      }
      this.anim(move);
    }
  }, {
    key: "hasPressedA",
    value: function hasPressedA() {
      return this.pad.justPressed(Phaser.Gamepad.XBOX360_A);
    }
  }, {
    key: "downActions",
    value: function downActions() {
      this.body.velocity.y = Velocity;
      this.lastDirection = _Constants.DirectionBoomerang.down;
    }
  }, {
    key: "leftActions",
    value: function leftActions() {
      this.body.velocity.x = -Velocity;
      this.direction = -1;
      this.lastDirection = _Constants.DirectionBoomerang.left;
    }
  }, {
    key: "rightActions",
    value: function rightActions() {
      this.body.velocity.x = Velocity;
      this.direction = 1;
      this.lastDirection = _Constants.DirectionBoomerang.right;
    }
  }, {
    key: "upActions",
    value: function upActions() {
      this.body.velocity.y = -Velocity;
      this.lastDirection = _Constants.DirectionBoomerang.up;
    }
  }, {
    key: "shootActions",
    value: function shootActions() {
      this.weapon.fire();
      if (!this.shootFx.isPlaying) {
        this.shootFx.play("shootMarker");
      }
      this.animations.play("fire");
    }
  }, {
    key: "anim",
    value: function anim(move) {
      var angle = this.angle;
      if (move === "left") {
        if (angle < -90 + 10 && angle > -90 - 10 || angle > 90 - 10 && angle < 90 + 10) {
          this.animations.play("slide");
        } else {
          this.animations.play("walk");
        }
      }

      if (move === "right") {
        if (angle < -90 + 10 && angle > -90 - 10 || angle > 90 - 10 && angle < 90 + 10) {
          this.animations.play("slide");
        } else {
          this.animations.play("walk");
        }
      }

      if (move === "up") {
        if (angle > -10 && angle < 10 || angle > -180 + 10 && angle > 180 - 10) {
          this.animations.play("slide");
        } else {
          this.animations.play("walk");
        }
      }

      if (move === "down") {
        if (angle > -10 && angle < 10 || angle > -180 + 10 && angle > 180 - 10) {
          this.animations.play("slide");
        } else {
          this.animations.play("walk");
        }
      }

      if (!move) {
        this.animations.stop("walk");
        this.animations.stop("slide");
      }
    }
  }, {
    key: "directionChoosed",
    value: function directionChoosed() {
      return this.lastDirection;
    }
  }, {
    key: "damage",
    value: function damage() {
      this.life = this.life - Damage;
    }
  }, {
    key: "cure",
    value: function cure() {
      this.life = Math.min(this.life + Cure, MaxLife);
    }
  }, {
    key: "lifeInPercent",
    value: function lifeInPercent() {
      return this.life / MaxLife;
    }
  }, {
    key: "isDeath",
    value: function isDeath() {
      return this.life < 0;
    }
  }, {
    key: "isOutSideTheLevel",
    value: function isOutSideTheLevel(game) {
      return this.body.position.x + _Constants.CharacterWitdh < 0 || this.body.position.x > game.world.bounds.width || this.body.position.y < 0 || this.body.position.y + _Constants.CharacterHeight > game.world.bounds.height;
    }
  }, {
    key: "bullets",
    value: function bullets() {
      return this.weapon.bullets;
    }
  }]);

  return Character;
}(Phaser.Sprite);

exports.default = Character;

},{"../Constants":1,"../SpriteConstants":3,"../utils":20}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require("../Constants");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var VisionEnemy = 399;
var TimeLapse = 10;

var Enemy = function (_Phaser$Sprite) {
  _inherits(Enemy, _Phaser$Sprite);

  function Enemy(game, x, y, vel, sprite) {
    _classCallCheck(this, Enemy);

    //Enable physics on the player
    var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, game, x, y, sprite, 0));

    game.physics.arcade.enable(_this);
    _this.body.bounce.x = _this.body.bounce.y = 0;
    _this.body.collideWorldBounds = true;
    _this.body.mass = 10;
    _this.direction = 1;
    _this.vel = vel;
    _this.anchor.setTo(0.5, 0.5);
    var walk = [0, 1, 2, 3, 4, 5, 6, 7];
    _this.animations.add('walk', walk, TimeLapse, true);
    return _this;
  }

  _createClass(Enemy, [{
    key: "follow",
    value: function follow(playerPosition) {
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;

      var centerPlayerX = _Constants.CharacterWitdh / 2;
      var centerPLayerY = _Constants.CharacterHeight / 2;
      var centerEnemyX = _Constants.EnemyWidth / 2;
      var centerEnemyY = _Constants.EnemyHeight / 2;

      var targetAngle = this.game.math.angleBetween(this.x, this.y, playerPosition.x, playerPosition.y);
      this.rotation = targetAngle - Math.PI / 2;

      if (playerPosition.x + centerPlayerX > this.body.position.x + centerEnemyX) {
        this.body.velocity.x = this.vel;
      } else if (playerPosition.x + centerPlayerX < this.body.position.x + centerEnemyX) {
        this.body.velocity.x = -this.vel;
      }

      if (playerPosition.y + centerPLayerY > this.body.position.y + centerEnemyY) {
        this.body.velocity.y = this.vel;
      } else if (playerPosition.y + centerPLayerY < this.body.position.y + centerEnemyY) {
        this.body.velocity.y = -this.vel;
      }
      this.animations.play("walk", TimeLapse);
    }
  }]);

  return Enemy;
}(Phaser.Sprite);

exports.default = Enemy;

},{"../Constants":1}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require("../Constants.js");

var _utils = require("../utils");

var _SpriteConstants = require("../SpriteConstants");

var _Enemy = require("objects/Enemy");

var _Enemy2 = _interopRequireDefault(_Enemy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var offsetEnemies = 2;

var VelocityBorders = [{ velocityMin: 30, velocityMax: 60 }, { velocityMin: 60, velocityMax: 100 }, { velocityMin: 100, velocityMax: 130 }];

var EnemyGroup = function (_Phaser$Group) {
  _inherits(EnemyGroup, _Phaser$Group);

  function EnemyGroup(game, parent, name) {
    _classCallCheck(this, EnemyGroup);

    var _this = _possibleConstructorReturn(this, (EnemyGroup.__proto__ || Object.getPrototypeOf(EnemyGroup)).call(this, game, parent, name, false, true, Phaser.Physics.ARCADE));

    _this.game = game;
    _this.nbWave = 0;
    _this.loopWave(_Constants.OriginalTimer);
    return _this;
  }

  _createClass(EnemyGroup, [{
    key: "loopWave",
    value: function loopWave(timer) {
      var _this2 = this;

      this.createWave(this.nbWave);
      this.nbWave++;
      if (this.nbWave > _Constants.MaxWave) {
        return;
      }

      setTimeout(function () {
        var newTimer = Math.max(_Constants.MinTimer, timer - _this2.nbWave);
        _this2.loopWave(newTimer);
        console.log(newTimer);
      }, timer * 1000);
    }
  }, {
    key: "createWave",
    value: function createWave(waveNumber) {
      var nbEnemies = (0, _utils.getRandomArbitrary)(_Constants.MinEnemies + waveNumber * offsetEnemies, _Constants.MaxEnemies + waveNumber * offsetEnemies);

      var nbEnemiesOnSide = (0, _utils.getRandomArbitrary)(10, nbEnemies - 30);
      this.enemyTop(nbEnemiesOnSide);

      nbEnemies -= nbEnemiesOnSide;
      nbEnemiesOnSide = (0, _utils.getRandomArbitrary)(10, nbEnemies - 20);
      this.enemyLeft(nbEnemiesOnSide);

      nbEnemies -= nbEnemiesOnSide;
      nbEnemiesOnSide = (0, _utils.getRandomArbitrary)(10, nbEnemies - 10);
      this.enemyBottom(nbEnemiesOnSide);

      nbEnemies -= nbEnemiesOnSide;
      this.enemyRight(nbEnemiesOnSide);
    }
  }, {
    key: "getElapsedX",
    value: function getElapsedX(nbEnemies) {
      return (this.game.world.bounds.width - 2 * _Constants.Border) / nbEnemies;
    }
  }, {
    key: "getElapsedY",
    value: function getElapsedY(nbEnemies) {
      return (this.game.world.bounds.height - 2 * _Constants.Border) / nbEnemies;
    }
  }, {
    key: "enemyBottom",
    value: function enemyBottom(nbEnemies) {
      var elapsedX = this.getElapsedX(nbEnemies);
      for (var i = 0; i < nbEnemies; i++) {
        var randomY = (0, _utils.getRandomArbitrary)(this.game.world.bounds.height, this.game.world.bounds.height + _Constants.Border);
        this.addEnemy(_Constants.Border + elapsedX * i, randomY);
      }
    }
  }, {
    key: "enemyTop",
    value: function enemyTop(nbEnemies) {
      var elapsedX = this.getElapsedX(nbEnemies);
      for (var i = 0; i < nbEnemies; i++) {
        var randomY = (0, _utils.getRandomArbitrary)(-_Constants.Border, 0);
        this.addEnemy(_Constants.Border + elapsedX * i, randomY);
      }
    }
  }, {
    key: "enemyLeft",
    value: function enemyLeft(nbEnemies) {
      var elapsedY = this.getElapsedY(nbEnemies);
      for (var i = 0; i < nbEnemies; i++) {
        var randomX = (0, _utils.getRandomArbitrary)(-_Constants.Border, 0);
        this.addEnemy(randomX, _Constants.Border + elapsedY * i);
      }
    }
  }, {
    key: "enemyRight",
    value: function enemyRight(nbEnemies) {
      var elapsedY = this.getElapsedY(nbEnemies);
      for (var i = 0; i < nbEnemies; i++) {
        var randomX = (0, _utils.getRandomArbitrary)(this.game.world.bounds.width, this.game.world.bounds.width + _Constants.Border);
        this.addEnemy(randomX, _Constants.Border + elapsedY * i);
      }
    }
  }, {
    key: "addEnemy",
    value: function addEnemy(x, y) {
      var spriteArray = [_SpriteConstants.SpriteEnemy, _SpriteConstants.SpriteEnemy2, _SpriteConstants.SpriteEnemy3];
      var spriteIndex = (0, _utils.getRandomArbitrary)(0, spriteArray.length);
      var vel = (0, _utils.getRandomArbitrary)(VelocityBorders[spriteIndex].velocityMin, VelocityBorders[spriteIndex].velocityMax);
      var enemy = new _Enemy2.default(this.game, x, y, vel, spriteArray[spriteIndex]);
      this.add(enemy);
    }
  }, {
    key: "follow",
    value: function follow(playerPosition) {
      this.children.forEach(function (enemy) {
        enemy.follow(playerPosition);
      });
    }
  }, {
    key: "hasEnemies",
    value: function hasEnemies() {
      return this.total > 0;
    }
  }, {
    key: "render",
    value: function render(game) {
      this.children.forEach(function (enemy) {
        game.debug.body(enemy);
      });
    }
  }]);

  return EnemyGroup;
}(Phaser.Group);

exports.default = EnemyGroup;

},{"../Constants.js":1,"../SpriteConstants":3,"../utils":20,"objects/Enemy":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var HealthBar = function () {
  function HealthBar(game, providedConfig) {
    _classCallCheck(this, HealthBar);

    this.game = game;
    this.config = this.mergeWithDefaultConfiguration(providedConfig);
    this.setPosition(this.config.x, this.config.y);
    this.drawBackground();
    this.drawHealthBar();
  }

  _createClass(HealthBar, [{
    key: 'mergeWithDefaultConfiguration',
    value: function mergeWithDefaultConfiguration(newConfig) {
      var defaultConfig = {
        width: 250,
        height: 40,
        x: 0,
        y: 0,
        bg: {
          color: '#651828'
        },
        bar: {
          color: '#FEFF03'
        }
      };
      return Object.assign({}, defaultConfig, newConfig);
    }
  }, {
    key: 'drawBackground',
    value: function drawBackground() {
      var bmd = this.game.add.bitmapData(this.config.width, this.config.height);
      bmd.ctx.fillStyle = this.config.bg.color;
      bmd.ctx.beginPath();
      bmd.ctx.rect(0, 0, this.config.width, this.config.height);
      bmd.ctx.fill();

      this.bgSprite = this.game.add.sprite(this.x, this.y, bmd);
      this.bgSprite.anchor.set(0.5);
    }
  }, {
    key: 'drawHealthBar',
    value: function drawHealthBar() {
      var bmd = this.game.add.bitmapData(this.config.width, this.config.height);
      bmd.ctx.fillStyle = this.config.bar.color;
      bmd.ctx.beginPath();
      bmd.ctx.rect(0, 0, this.config.width, this.config.height);
      bmd.ctx.fill();

      this.barSprite = this.game.add.sprite(this.x - this.bgSprite.width / 2, this.y, bmd);
      this.barSprite.anchor.y = 0.5;
    }
  }, {
    key: 'setPosition',
    value: function setPosition(x, y) {
      this.x = x;
      this.y = y;

      if (this.bgSprite !== undefined && this.barSprite !== undefined) {
        this.bgSprite.position.x = x;
        this.bgSprite.position.y = y;

        this.barSprite.position.x = x - this.config.width / 2;
        this.barSprite.position.y = y;
      }
    }
  }, {
    key: 'setPercent',
    value: function setPercent(newValue) {
      if (newValue < 0) {
        newValue = 0;
      }
      if (newValue > 100) {
        newValue = 100;
      }
      var newWidth = newValue * this.config.width / 100;
      this.setWidth(newWidth);
    }
  }, {
    key: 'setWidth',
    value: function setWidth(newWidth) {
      this.barSprite.width = newWidth;
    }
  }, {
    key: 'setWidth',
    value: function setWidth(newWidth) {
      this.game.add.tween(this.barSprite).to({ width: newWidth }, this.config.animationDuration, Phaser.Easing.Linear.None, true);
    }
  }]);

  return HealthBar;
}();

exports.default = HealthBar;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require("../Constants.js");

var _utils = require("../utils");

var _SpriteConstants = require("../SpriteConstants");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MaxMedikit = 2;

var medikitGroup = function (_Phaser$Group) {
  _inherits(medikitGroup, _Phaser$Group);

  function medikitGroup(game, parent, name) {
    _classCallCheck(this, medikitGroup);

    var _this = _possibleConstructorReturn(this, (medikitGroup.__proto__ || Object.getPrototypeOf(medikitGroup)).call(this, game, parent, name, false, true, Phaser.Physics.ARCADE));

    var nbMedikit = (0, _utils.getRandomArbitrary)(0, MaxMedikit);
    for (var i = 0; i < nbMedikit; i++) {
      var x = (0, _utils.getRandomArbitrary)(2 * _Constants.Border, game.world.bounds.width - _Constants.SpriteWidth - 2 * _Constants.Border);
      var y = (0, _utils.getRandomArbitrary)(2 * _Constants.Border, game.world.bounds.height - _Constants.SpriteHeight - 2 * _Constants.Border);
      _this.addMedikit(x, y);
    }
    return _this;
  }

  _createClass(medikitGroup, [{
    key: "addMedikit",
    value: function addMedikit(x, y) {
      var medikit = this.create(x, y, _SpriteConstants.Medikit);
      medikit.scale.setTo(0.4, 0.4);
    }
  }]);

  return medikitGroup;
}(Phaser.Group);

exports.default = medikitGroup;

},{"../Constants.js":1,"../SpriteConstants":3,"../utils":20}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require("../Constants.js");

var _SpriteConstants = require("../SpriteConstants");

var _utils = require("../utils");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Divisor = 15;

var Room = function (_Phaser$Group) {
  _inherits(Room, _Phaser$Group);

  function Room(game, parent, name) {
    _classCallCheck(this, Room);

    var _this = _possibleConstructorReturn(this, (Room.__proto__ || Object.getPrototypeOf(Room)).call(this, game, parent, name, false, true, Phaser.Physics.ARCADE));

    _this.Bounds = game.world.bounds;
    return _this;
  }

  _createClass(Room, [{
    key: "createRandomLine",
    value: function createRandomLine(x1, y1, x2, y2) {
      var division = arguments.length <= 4 || arguments[4] === undefined ? 1 : arguments[4];
      var varX = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
      var varY = arguments.length <= 6 || arguments[6] === undefined ? 0 : arguments[6];

      var middleX = (x1 + x2) / 2 + varX * _Constants.SpriteWidth;
      var middleY = (y1 + y2) / 2 + varY * _Constants.SpriteHeight;

      var middleXBefore = middleX - middleX % _Constants.SpriteWidth;
      var middleXAfter = middleX + middleX % _Constants.SpriteWidth;
      var middleYBefore = middleY - middleY % _Constants.SpriteHeight;
      var middleYAfter = middleY + middleY % _Constants.SpriteHeight;
      if (division > 1) {
        this.createRandomLine(x1, y1, middleXBefore, middleYBefore, division - 1, varX, varY);
        this.createRandomLine(middleXAfter, middleYAfter, x2, y2, division - 1, varX, varY);
      } else {
        this.createLine(x1, y1, middleXBefore, middleYBefore);
        this.createLine(middleXAfter, middleYAfter, x2, y2);
      }
    }
  }, {
    key: "createLineByTile",
    value: function createLineByTile(x1, y1, nbTilesX, nbTilesY, division, varX, varY) {
      if (nbTilesX < 0) {
        throw "createLineByTile " + nbTilesX + " is negative";
      }
      if (nbTilesY < 0) {
        throw "createLineByTile " + nbTilesY + " is negative";
      }
      this.createRandomLine(x1, y1, (nbTilesX - 1) * _Constants.SpriteWidth + x1, (nbTilesY - 1) * _Constants.SpriteHeight + y1, division, varX, varY);
    }

    // //Brasenhem algorithm

  }, {
    key: "createLine",
    value: function createLine(x1, y1, x2, y2) {
      var dx = Math.abs(x2 - x1);
      var sx = x1 < x2 ? _Constants.SpriteWidth : -_Constants.SpriteWidth;
      var dy = Math.abs(y2 - y1);
      var sy = y1 < y2 ? _Constants.SpriteHeight : -_Constants.SpriteHeight;
      var err = (dx > dy ? dx : -dy) / 2;

      var x = x1;
      var y = y1;
      while (true) {
        this.createSprite(x, y);
        if (x >= x2 && y >= y2) break;
        if (x < 0 || y < 0 || x > this.Bounds.width || y > this.Bounds.height) break;
        var e2 = err;
        if (e2 > -dx) {
          err -= dy;
          x += sx;
        }
        if (e2 < dy) {
          err += dx;
          y += sy;
        }
      }
    }
  }, {
    key: "createSprite",
    value: function createSprite(x, y) {
      var sprite = this.create(x, y, _SpriteConstants.Wall);
      sprite.scale.setTo(_Constants.SpriteRatioX, _Constants.SpriteRatioY);
      sprite.body.immovable = true;
    }
  }, {
    key: "createBackground",
    value: function createBackground(x, y) {
      //put in another group i think
      var sprite = this.create(x, y, _SpriteConstants.BoomerangSprite);
      sprite.body.immovable = true;
    }

    ////
    // (x,y) ####
    //       #  #
    //       #  #
    //       #  #
    //       ####
    //
    ///

  }, {
    key: "createSquare",
    value: function createSquare(x, y, nbTilesBySide) {
      this.createRandomSquare(x, y, nbTilesBySide, 1, false);
    }
  }, {
    key: "createRandomSquare",
    value: function createRandomSquare(x, y, nbTilesBySide) {
      var division = arguments.length <= 3 || arguments[3] === undefined ? 3 : arguments[3];
      var random = arguments.length <= 4 || arguments[4] === undefined ? true : arguments[4];

      var updateVariation = function updateVariation() {
        var maxOffset = nbTilesBySide / Divisor;
        if (random) {
          return [(0, _utils.getRandomArbitrary)(-maxOffset, maxOffset), (0, _utils.getRandomArbitrary)(-maxOffset, maxOffset), (0, _utils.getRandomArbitrary)(-maxOffset, maxOffset), (0, _utils.getRandomArbitrary)(-maxOffset, maxOffset)];
        }
        return [0, 0, 0, 0];
      };

      var varX = 0;
      var varY = 0;
      var varX2 = 0;
      var varY2 = 0;

      var _updateVariation = updateVariation();

      var _updateVariation2 = _slicedToArray(_updateVariation, 4);

      varX = _updateVariation2[0];
      varY = _updateVariation2[1];
      varX2 = _updateVariation2[2];
      varY2 = _updateVariation2[3];

      this.createLineByTile(x, y, nbTilesBySide, 1, division, varX, varY);
      this.createLineByTile(x, y + (nbTilesBySide - 1) * _Constants.SpriteHeight, nbTilesBySide, 1, division, varX2, varY2);

      //nbtiles - 2 because corner  was drawn  by vertical line
      var _updateVariation3 = updateVariation();

      var _updateVariation4 = _slicedToArray(_updateVariation3, 4);

      varX = _updateVariation4[0];
      varY = _updateVariation4[1];
      varX2 = _updateVariation4[2];
      varY2 = _updateVariation4[3];
      this.createLineByTile(x, y + _Constants.SpriteHeight, 1, nbTilesBySide - 2, division, varX, varY);
      this.createLineByTile(x + (nbTilesBySide - 1) * _Constants.SpriteWidth, y + _Constants.SpriteHeight, 1, nbTilesBySide - 2, division, varX2, varY2);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;

      this.children.forEach(function (tile) {
        _this2.remove(tile);
      });
    }
  }, {
    key: "getRoomBordered",
    value: function getRoomBordered() {
      return this.children;
    }
  }]);

  return Room;
}(Phaser.Group);

exports.default = Room;

},{"../Constants.js":1,"../SpriteConstants":3,"../utils":20}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _utils = require("../utils");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Commands = function (_Phaser$State) {
  _inherits(Commands, _Phaser$State);

  function Commands() {
    _classCallCheck(this, Commands);

    return _possibleConstructorReturn(this, (Commands.__proto__ || Object.getPrototypeOf(Commands)).apply(this, arguments));
  }

  _createClass(Commands, [{
    key: "hasGamepad",
    value: function hasGamepad() {
      return this.game.input.gamepad.supported && this.game.input.gamepad.active && this.game.input.gamepad.pad1.connected;
    }
  }, {
    key: "create",
    value: function create() {
      this.pad = (0, _utils.initAndInstallGamepad1)(this.game);
      var moveText = this.hasGamepad(this.game) ? "Arrows keys" : "Arrows keys/ Left Pad";
      var shootText = this.hasGamepad(this.game) ? "Left mouse button / Space / A" : "Left mouse button / Space";
      var boomerangText = this.hasGamepad(this.game) ? "Space / A + Arrows keys / Left Pad" : "Space + Arrows keys";
      var aimText = this.hasGamepad(this.game) ? "Mouse / Right Pad " : "Mouse";

      this.game.add.text(300, 75, "Instructions", { font: "bold 33px Arial", fill: '#43d637', stroke: '#4D4D4D', strokeThickness: 6 });
      this.game.add.text(150, 150, "Kill all the zombies or leave the room", { font: "bold 28px Arial", fill: "#fff", stroke: '#4D4D4D', strokeThickness: 3 });

      this.game.add.text(300, 250, "Commands", { font: "bold 28px Arial", fill: "#FF3333", stroke: '#4D4D4D', strokeThickness: 3 });

      this.game.add.text(30, 300, "Move", { font: "bold 28px Arial", fill: "#fff" });
      this.game.add.text(330, 300, moveText, { font: "bold 28px Arial", fill: "#fff" });

      this.game.add.text(30, 350, "Shoot", { font: "bold 28px Arial", fill: "#fff" });
      this.game.add.text(330, 350, shootText, { font: "bold 28px Arial", fill: "#fff" });

      this.game.add.text(30, 400, "Aim", { font: "bold 28px Arial", fill: "#fff" });
      this.game.add.text(330, 400, aimText, { font: "bold 28px Arial", fill: "#fff" });

      this.game.add.text(30, 450, "Throw boomerang", { font: "bold 28px Arial", fill: "#fff" });
      this.game.add.text(330, 450, boomerangText, { font: "bold 28px Arial", fill: "#fff" });

      if (this.hasGamepad(this.game)) {
        this.game.add.text(30, 540, "If you use gamepad, play on chrome(firefox has a different key binding)", { font: "bold 22px Arial", fill: "#fff" });
      }
      this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      this.game.input.gamepad.start();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.enterButton.isDown || this.pad.justPressed(Phaser.Gamepad.XBOX360_A)) {
        this.game.goToGame();
      }
      this.hasGamepad(this.game);
    }
  }]);

  return Commands;
}(Phaser.State);

exports.default = Commands;

},{"../utils":20}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _utils = require("utils");

var _SpriteConstants = require("SpriteConstants");

var _Constants = require("Constants");

var _HealthBarConstants = require("HealthBarConstants");

var _Character = require("objects/Character");

var _Character2 = _interopRequireDefault(_Character);

var _Boomerang = require("objects/Boomerang");

var _Boomerang2 = _interopRequireDefault(_Boomerang);

var _Room = require("objects/Room");

var _Room2 = _interopRequireDefault(_Room);

var _BackgroundLayer = require("objects/BackgroundLayer");

var _BackgroundLayer2 = _interopRequireDefault(_BackgroundLayer);

var _EnemyGroup = require("objects/EnemyGroup");

var _EnemyGroup2 = _interopRequireDefault(_EnemyGroup);

var _ChandelierLayer = require("objects/ChandelierLayer");

var _ChandelierLayer2 = _interopRequireDefault(_ChandelierLayer);

var _HealthBar = require("objects/HealthBar");

var _HealthBar2 = _interopRequireDefault(_HealthBar);

var _MedikitGroup = require("objects/MedikitGroup");

var _MedikitGroup2 = _interopRequireDefault(_MedikitGroup);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var needCamera = false;

var MinDivision = 1;
var MaxDivision = 5;

var Division = (0, _utils.getRandomArbitrary)(MinDivision, MaxDivision);

var MaxBorder = 120;
var MinBorder = 30;

var SizeMaze = (0, _utils.getRandomArbitrary)(MinBorder, MaxBorder);
// assuming SpriteWidth = SpriteHeight
var Bounds = 2 * _Constants.Border + SizeMaze * _Constants.SpriteWidth;

var Game = function (_Phaser$State) {
  _inherits(Game, _Phaser$State);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
  }

  _createClass(Game, [{
    key: "create",
    value: function create() {
      this.game.stage.backgroundColor = 0x000000;
      this.game.world.setBounds(0, 0, Bounds, Bounds);
      this.room = new _Room2.default(this.game);
      this.room.createRandomSquare(_Constants.Border, _Constants.Border, SizeMaze, Division);

      this.medikitGroup = new _MedikitGroup2.default(this.game);

      this.boomerang = new _Boomerang2.default(this.game, 0, 0);
      this.getInitialPosition(this.boomerang, _Constants.BoomerangWidth, _Constants.BoomerangHeight);
      this.game.add.existing(this.boomerang);

      this.hero = new _Character2.default(this.game, 100, 100);
      this.game.add.existing(this.hero);
      this.getInitialPosition(this.hero, _Constants.CharacterWitdh, _Constants.CharacterHeight);

      //this.bgLayer = new BackgroundLayer(this.game, this.hero.x, this.hero.y, this.room.getRoomBordered());

      this.enemies = new _EnemyGroup2.default(this.game);
      this.chandelierLayer = new _ChandelierLayer2.default(this.game);

      if (needCamera) {
        this.cursors = this.game.input.keyboard.createCursorKeys();
      } else {
        this.camera.follow(this.hero);
      }
      this.launchBoomerangKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

      //sounds
      this.deathFx = this.game.add.audio(_SpriteConstants.DeathSound);
      this.hurtFx = this.game.add.audio(_SpriteConstants.HurtSound);
      this.hurtFx.allowMultiple = true;
      this.hurtFx.addMarker('hurtMarker', 0, 0.5);

      this.frag = 0;
      this.killText = this.game.add.text(400, 400, _Constants.KillText, { font: "bold 33px Arial", fill: '#43d637', stroke: '#4D4D4D', strokeThickness: 6 });
      this.healthBar = new _HealthBar2.default(this.game, _HealthBarConstants.HeathBarConfig);
    }
  }, {
    key: "getInitialPosition",
    value: function getInitialPosition(sprite, spriteWidth, spriteHeight) {
      var maxAttempt = 0;
      var hasBlock = false;
      do {
        var x = (0, _utils.getRandomArbitrary)(2 * _Constants.Border, this.game.world.bounds.width - spriteWidth - 2 * _Constants.Border);
        var y = (0, _utils.getRandomArbitrary)(2 * _Constants.Border, this.game.world.bounds.height - spriteHeight - 2 * _Constants.Border);
        sprite.position.setTo(x, y);
        maxAttempt = maxAttempt + 1;
        hasBlock = this.game.physics.arcade.collide(sprite, this.room);
      } while (maxAttempt < 10 && hasBlock);
    }
  }, {
    key: "update",
    value: function update() {
      this.game.physics.arcade.overlap(this.hero, this.enemies, this.damage, null, this);
      this.game.physics.arcade.overlap(this.hero.bullets(), this.enemies, this.kill, null, this);
      this.game.physics.arcade.overlap(this.enemies, this.room, this.pushBlock, null, this);

      this.game.physics.arcade.collide(this.enemies);
      this.game.physics.arcade.collide(this.hero.bullets(), this.room, this.killBullet);
      this.game.physics.arcade.collide(this.enemies, this.boomerang, this.killByBoomerang, null, this);
      this.game.physics.arcade.collide(this.hero, this.room);
      this.game.physics.arcade.collide(this.boomerang, this.room, this.killBoomerang, null, this);
      this.game.physics.arcade.overlap(this.hero, this.boomerang, this.launchBoomerang, null, this);
      this.game.physics.arcade.overlap(this.hero, this.medikitGroup, this.cureHero, null, this);
      this.enemies.follow(this.hero.body.position);

      if (this.hero.isDeath()) {
        this.lost();
      }

      if (this.hero.isOutSideTheLevel(this.game) || !this.enemies.hasEnemies()) {
        this.won();
      }

      this.updateGui();

      if (needCamera) {
        this.moveCamera();
      }
    }
  }, {
    key: "updateGui",
    value: function updateGui() {
      this.killText.setText(_Constants.KillText + this.frag);
      this.killText.x = this.game.camera.x + _Constants.KillTextX;
      this.killText.y = this.game.camera.y + _Constants.KillTextY;

      this.healthBar.setPosition(this.game.camera.x + _HealthBarConstants.HeathBarX, this.game.camera.y + _HealthBarConstants.HeathBarY);
    }
  }, {
    key: "kill",
    value: function kill(bullet, enemy) {
      this.enemies.remove(enemy);
      this.frag = this.frag + 1;
      bullet.kill();
    }
  }, {
    key: "killBullet",
    value: function killBullet(bullet) {
      bullet.kill();
    }
  }, {
    key: "killByBoomerang",
    value: function killByBoomerang(boomerang, enemy) {
      if (boomerang.isMoving()) {
        this.frag = this.frag + 1;
        this.enemies.remove(enemy);
      }
    }
  }, {
    key: "killBoomerang",
    value: function killBoomerang(boomerang) {
      boomerang.kill();
    }
  }, {
    key: "damage",
    value: function damage() {
      this.hero.damage();
      if (!this.hurtFx.isPlaying) {
        this.hurtFx.play('hurtMarker');
      }
      this.healthBar.setPercent(this.hero.lifeInPercent() * 100);
      this.camera.flash(_Constants.FlashColor, _Constants.FlashDuration);
    }
  }, {
    key: "cureHero",
    value: function cureHero(hero, medikit) {
      if (this.hero.lifeInPercent() !== 1) {
        medikit.kill();
        this.hero.cure();
        this.healthBar.setPercent(this.hero.lifeInPercent() * 100);
      }
    }
  }, {
    key: "pushBlock",
    value: function pushBlock(enemy, block) {
      this.game.camera.shake(_Constants.ShakeIntensity, _Constants.ShakeDuration);
      var enemyLeft = enemy.body.position.x;
      var enemyRight = enemy.body.position.x + _Constants.EnemyWidth;
      var enemyTop = enemy.body.position.y - _Constants.EnemyHeight;
      var enemyBottom = enemy.body.position.y;

      var blockLeft = block.body.position.x;
      var blockRight = block.body.position.x + _Constants.SpriteWidth;
      var blockTop = block.body.position.y - _Constants.SpriteHeight;
      var blockBottom = block.body.position.y;

      var bigValue = 1000;
      var left = bigValue;
      var right = bigValue;
      var up = bigValue;
      var down = bigValue;

      if (enemyLeft < blockLeft && blockLeft < enemyRight && enemyRight < blockRight) {
        left = enemyRight - blockLeft;
      }

      if (blockLeft < enemyLeft && enemyLeft < blockRight && blockRight < enemyRight) {
        right = blockRight - enemyLeft;
      }

      if (enemyTop < blockTop && blockTop < enemyBottom && enemyBottom < blockBottom) {
        up = enemyBottom - blockTop;
      }

      if (blockTop < enemyTop && enemyTop < blockBottom && blockBottom < enemyBottom) {
        down = blockBottom - enemyTop;
      }

      if (left < right && left < up && left < down) {
        block.body.position.x += 1;
      } else if (right < left && right < up && right < down) {
        block.body.position.x -= 1;
      } else if (up < down && up < left && up < right) {
        block.body.position.y += 1;
      } else if (down < up && down < left && down < right) {
        block.body.position.y -= 1;
      }
    }
  }, {
    key: "launchBoomerang",
    value: function launchBoomerang() {
      if (this.launchBoomerangKey.isDown || this.hero.hasPressedA()) {
        // after the tween get back to the player
        var onCompleteCallback = function onCompleteCallback(boomerang, tween) {
          boomerang.kill();
          tween.stop();
        };
        // the first param is the direction
        this.boomerang.launch(this.hero.directionChoosed(), onCompleteCallback);
      }
    }
  }, {
    key: "lost",
    value: function lost() {
      var _this2 = this;

      this.hero.kill();
      if (!this.deathFx.isPlaying) {
        this.deathFx.play();
      }
      setTimeout(function () {
        _this2.room.clear();
        _this2.chandelierLayer.clear();
        _this2.boomerang.kill();
        _this2.game.goToLose();
      }, 500);
    }
  }, {
    key: "won",
    value: function won() {
      this.game.goToWin();
    }
  }, {
    key: "preload",
    value: function preload() {
      this.game.load.image(_SpriteConstants.Wall, "res/block.png");
      this.game.load.spritesheet(_SpriteConstants.SpritePlayer, "res/hero-sprite.png", _Constants.CharacterWitdh, _Constants.CharacterHeight);
      this.game.load.spritesheet(_SpriteConstants.SpriteEnemy, "res/zombie.png", _Constants.EnemyWidth, _Constants.EnemyHeight);
      this.game.load.spritesheet(_SpriteConstants.SpriteEnemy2, "res/zombie2.png", _Constants.EnemyWidth, _Constants.EnemyHeight);
      this.game.load.spritesheet(_SpriteConstants.SpriteEnemy3, "res/zombie1.png", _Constants.EnemyWidth, _Constants.EnemyHeight);
      this.game.load.image(_SpriteConstants.SpriteBullet, "res/bullet.png");
      this.game.load.image(_SpriteConstants.BoomerangSprite, "res/ufoRed.png");
      this.game.load.image(_SpriteConstants.Background, "res/boomerang.png");
      this.game.load.image(_SpriteConstants.LightSprite, "res/light.png");
      this.game.load.image(_SpriteConstants.Medikit, "res/medikit.png");
      this.game.load.audio(_SpriteConstants.DeathSound, 'res/death.mp3');
      this.game.load.audio(_SpriteConstants.ShootSound, 'res/shoot.mp3');
      this.game.load.audio(_SpriteConstants.HurtSound, 'res/pain.mp3');
    }
  }, {
    key: "render",
    value: function render() {
      //this.enemies.render(this.game);
      //this.game.debug.spriteInfo(this.hero, 32, 32);
      //this.game.debug.text(Bounds, 2, 14, "#ff0000");
      //this.game.debug.spriteInfo(this.hero, 32, 32);
    }
  }, {
    key: "moveCamera",
    value: function moveCamera() {
      if (needCamera) {
        if (this.cursors.up.isDown) {
          this.game.camera.y -= _Constants.CameraVelocity;
        } else if (this.cursors.down.isDown) {
          this.game.camera.y += _Constants.CameraVelocity;
        }

        if (this.cursors.left.isDown) {
          this.game.camera.x -= _Constants.CameraVelocity;
        } else if (this.cursors.right.isDown) {
          this.game.camera.x += _Constants.CameraVelocity;
        }
      }
    }
  }]);

  return Game;
}(Phaser.State);

exports.default = Game;

},{"Constants":1,"HealthBarConstants":2,"SpriteConstants":3,"objects/BackgroundLayer":5,"objects/Boomerang":6,"objects/ChandelierLayer":8,"objects/Character":9,"objects/EnemyGroup":11,"objects/HealthBar":12,"objects/MedikitGroup":13,"objects/Room":14,"utils":20}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _utils = require("../utils");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LoseState = function (_Phaser$State) {
  _inherits(LoseState, _Phaser$State);

  function LoseState() {
    _classCallCheck(this, LoseState);

    return _possibleConstructorReturn(this, (LoseState.__proto__ || Object.getPrototypeOf(LoseState)).apply(this, arguments));
  }

  _createClass(LoseState, [{
    key: "create",
    value: function create() {
      this.pad = (0, _utils.initAndInstallGamepad1)(this.game);
      this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      this.game.add.text(325, 150, "You lose ", { font: "bold 40px Arial", fill: "#fff" });
      this.game.add.text(160, 350, "Press enter to play again ", { font: "bold 40px Arial", fill: "#fff" });
      this.game.stage.backgroundColor = "#e54424";
    }
  }, {
    key: "update",
    value: function update() {
      if (this.enterButton.isDown || this.pad.justPressed(Phaser.Gamepad.XBOX360_A)) {
        this.game.goToGame();
      }
    }
  }]);

  return LoseState;
}(Phaser.State);

exports.default = LoseState;

},{"../utils":20}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _utils = require("../utils");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Menu = function (_Phaser$State) {
  _inherits(Menu, _Phaser$State);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "create",
    value: function create() {
      this.pad = (0, _utils.initAndInstallGamepad1)(this.game);
      this.game.add.sprite(175, 100, "LD");
      this.game.add.text(230, 230, "Press enter to start", { font: "bold 34px Arial", fill: "#fff" });
      this.game.add.text(280, 350, "Thanks for playing ! :)", { font: "bold 19px Arial", fill: "#fff" });
      this.game.add.text(200, 400, "Compo during LD37 in December 2016", { font: "bold 19px Arial", fill: "#fff" });
      this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    }
  }, {
    key: "preload",
    value: function preload() {
      this.game.load.image("LD", "res/LD.png");
    }
  }, {
    key: "update",
    value: function update() {
      if (this.enterButton.isDown || this.pad.justPressed(Phaser.Gamepad.XBOX360_A)) {
        this.game.goToCommands();
      }
    }
  }]);

  return Menu;
}(Phaser.State);

exports.default = Menu;

},{"../utils":20}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _SpriteConstants = require("SpriteConstants");

var _utils = require("../utils");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var WinState = function (_Phaser$State) {
  _inherits(WinState, _Phaser$State);

  function WinState() {
    _classCallCheck(this, WinState);

    return _possibleConstructorReturn(this, (WinState.__proto__ || Object.getPrototypeOf(WinState)).apply(this, arguments));
  }

  _createClass(WinState, [{
    key: "create",
    value: function create() {
      this.pad = (0, _utils.initAndInstallGamepad1)(this.game);
      this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      this.game.add.text(315, 150, "You win ", { font: "bold 40px Arial", fill: "#fff" });
      this.game.add.text(160, 350, "Press enter to play again ", { font: "bold 40px Arial", fill: "#fff" });
      this.game.stage.backgroundColor = "#2aaa11";

      this.goodByeFx = this.game.add.audio(_SpriteConstants.TadaSound);
      this.goodByeFx.play();
    }
  }, {
    key: "preload",
    value: function preload() {
      this.game.load.audio(_SpriteConstants.TadaSound, 'res/tada.mp3');
    }
  }, {
    key: "update",
    value: function update() {
      if (this.enterButton.isDown || this.pad.justPressed(Phaser.Gamepad.XBOX360_A)) {
        this.game.goToGame();
      }
    }
  }]);

  return WinState;
}(Phaser.State);

exports.default = WinState;

},{"../utils":20,"SpriteConstants":3}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomArbitrary = getRandomArbitrary;
exports.hasGamepad = hasGamepad;
exports.initAndInstallGamepad1 = initAndInstallGamepad1;
function getRandomArbitrary(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

function hasGamepad(game) {
  return game.input.gamepad.supported && game.input.gamepad.active && game.input.gamepad.pad1.connected;
}

function initAndInstallGamepad1(game) {
  game.input.gamepad.start();
  return game.input.gamepad.pad1;
}

},{}]},{},[4])
//# sourceMappingURL=game.js.map
