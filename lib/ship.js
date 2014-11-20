;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = window.Asteroids.Ship = function () {
    Asteroids.MovingObject.apply(this, arguments);
    this.img = new Image();
    this.img.src = "lib/ship.png";
    this.angle = 270;
    this.radius = 45;
    this.vel    = this.vel    || 0;
    this.pos    = this.pos    || Asteroids.Game.randomPosition();
  }

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.isShip = true;

  Ship.prototype.drawShip = function(ctx) {
    var radians = (this.angle - 220) * (Math.PI/180)
    ctx.save();
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.rotate(radians);
    ctx.drawImage(this.img, -(100/2), -(100/2));

    ctx.restore();

  };

  Ship.prototype.move = function () {
    this.pos[0] += (this.vel * Math.cos(this.angle * Math.PI/180));
    this.pos[1] += (this.vel * Math.sin(this.angle * Math.PI/180));
    if (this.isWrappable) {
      this.pos = Asteroids.Game.wrap(this.pos);
    }
    else if (this.game.isOutOfBounds(this.pos)) {
      this.game.remove(this);
    }
  };

  Ship.prototype.relocate = function () {
    this.pos = Asteroids.Game.randomPosition();
    this.vel = 0;
  };

  Ship.prototype.rotate = function(change) {
    this.angle += (change * 15)
  };

  Ship.prototype.power = function (impulse) {
    this.vel += impulse
  };

  Ship.prototype.fireBullet = function () {
    bullet = new Asteroids.Bullet({
      pos: [this.pos[0] + (45 * Math.cos(this.angle * Math.PI/180)), this.pos[1] + (45 * Math.sin(this.angle * Math.PI/180))],
      vel: [(45 * Math.cos(this.angle * Math.PI/180)), (45 * Math.sin(this.angle * Math.PI/180))]
    });

    this.game.add(bullet);
  };
})();
