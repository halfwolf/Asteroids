;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = window.Asteroids.Ship = function () {
    Asteroids.MovingObject.apply(this, arguments);

    this.color  = this.color  || Ship.COLOR;
    this.radius = this.radius || Ship.RADIUS;
    this.vel    = this.vel    || [0,0];
    this.pos    = this.pos    || Asteroids.Game.randomPosition();
  }

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.COLOR = 'green';
  Ship.RADIUS = 20;

  Ship.prototype.relocate = function () {
    this.pos = Asteroids.Game.randomPosition();
    this.vel = [0,0];
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    bullet = new Asteroids.Bullet({
      pos: this.pos,
      vel: [this.vel[0] * 2, this.vel[1] * 2]
    });

    this.game.add(bullet);
  };
})();