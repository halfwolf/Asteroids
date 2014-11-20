;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = window.Asteroids.MovingObject = function (argsObject) {
    this.pos = argsObject.pos;
    this.vel = argsObject.vel;
    this.radius = argsObject.radius;
    this.color = argsObject.color;
    this.game = argsObject.game;
    this.isWrappable = true;
  }

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.isWrappable) {
      this.pos = Asteroids.Game.wrap(this.pos);
    }
    else if (this.game.isOutOfBounds(this.pos)) {
      this.game.remove(this);
    }
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var dx = this.pos[0] - otherObject.pos[0],
        dy = this.pos[1] - otherObject.pos[1];

    var distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= this.radius + otherObject.radius ? true : false;
  };

  MovingObject.prototype.collideWith = function (otherObject) {
  };
})();
