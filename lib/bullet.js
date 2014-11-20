;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = window.Asteroids.Bullet = function () {
    Asteroids.MovingObject.apply(this, arguments);
    this.color = this.color || Bullet.COLOR;
    this.radius = this.radius || Bullet.RADIUS;
    this.isWrappable = false;
  }

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.COLOR = "red";
  Bullet.RADIUS = 5;

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.points += 1
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

})();
