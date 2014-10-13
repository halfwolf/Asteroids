;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = window.Asteroids.Asteroid = function () {
    Asteroids.MovingObject.apply(this, arguments);

    this.color  = this.color  || Asteroid.COLOR;
    this.radius = this.radius || Asteroid.RADIUS;
    this.vel    = this.vel    || Asteroids.Util.randomVec(5);
  }

  Asteroid.COLOR = 'blue';
  Asteroid.RADIUS = 8;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship ) {
      otherObject.relocate();
    }
  };
})();