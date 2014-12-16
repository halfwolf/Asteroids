;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = window.Asteroids.Asteroid = function () {
    Asteroids.MovingObject.apply(this, arguments);
    this.img = new Image();
    this.img.src = Asteroid.IMAGES[Math.floor(Math.random()*Asteroid.IMAGES.length)];
    this.color  = this.color  || Asteroid.COLOR;
    this.radius = this.radius || Asteroid.RADIUS;
    this.vel    = this.vel    || Asteroids.Util.randomVec(5);
  }
  Asteroid.IMAGES = ["lib/ast1.png", "lib/ast2.png", "lib/ast3.png"]
  Asteroid.RADIUS = 30;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship ) {
      otherObject.relocate();
      this.game.lives -= 1;
    }
  };

  Asteroid.prototype.draw = function(ctx) {
    ctx.drawImage(this.img, this.pos[0] - 30, this.pos[1] - 30)
  }
})();
