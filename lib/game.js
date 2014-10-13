;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = window.Asteroids.Game = function () {
    this.addAsteroids();
    this.bullets = [];
    this.ship = new Asteroids.Ship({ game: this });
  };

  Game.DIM_X = 640;
  Game.DIM_Y = 360;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship]).concat(this.bullets);
  };

  Game.prototype.addAsteroids = function () {
    this.asteroids = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.add(new Asteroids.Asteroid( {pos: Game.randomPosition(), game: this} ));
    }
  }

  Game.prototype.add = function (obj) {
    obj.game = this
    if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    }
    else if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    }
  };

  Game.randomPosition = function () {
    return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
  }

  Game.prototype.draw = function (ctx, img) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.drawImage(img, 0,0)
    this.allObjects().forEach(function (obj) {
      obj.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function (obj) {
      obj.move();
    });
  };

  Game.wrap = function (pos) {
    return [(pos[0] + Game.DIM_X) % Game.DIM_X, (pos[1] + Game.DIM_Y) % Game.DIM_Y];
  };

  Game.prototype.checkCollisions = function () {
    var that = this
    that.allObjects().forEach(function (obj) {
      that.allObjects().forEach( function (otherObj) {
        if (obj !== otherObj && obj.isCollidedWith(otherObj)) {
          obj.collideWith(otherObj);
        }
      });
    });
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (obj) {
    if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(obj), 1);
    }
    else if (obj instanceof Asteroids.Bullet) {
      this.bullets.splice(this.bullets.indexOf(obj), 1);
    }
  };

  Game.prototype.isOutOfBounds = function (pos) {
    return pos[0] < 0 || Game.DIM_X <= pos[0] || pos[1] < 0 || Game.DIM_Y <= pos[1];
  };
})();