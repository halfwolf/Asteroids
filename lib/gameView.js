;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = window.Asteroids.GameView = function (game, ctx, background, pointsEl, livesEl) {
    this.game = game;
    this.ctx = ctx;
    this.pointsEl = pointsEl;
    this.livesEl = livesEl;
    this.background = background;

  };

  GameView.prototype.start = function () {
    var that = this;
    var img = new Image();
    img.src = "lib/background.jpg";
    that.setKeyBindings();
    setInterval(function () {
      that.game.draw(that.ctx, img);
      that.game.step();
      that.pointsEl.textContent = "Rocks Blasted: " + that.game.points;
      that.livesEl.textContent = "Civilian Contractors Left: " + that.game.lives
    }, 20)
  };

  GameView.prototype.setKeyBindings = function () {
    var that = this;
    key('a', function () {
      that.game.ship.rotate(-1);
    });
    key('w', function () {
      that.game.ship.power(1);
    });
    key('s', function () {
      that.game.ship.power(-1);
    });
    key('d', function () {
      that.game.ship.rotate(1);
    });
    key('space', function () {
      that.game.ship.fireBullet();
    });
  };
})();
