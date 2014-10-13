;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = window.Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var that = this;
    that.setKeyBindings();
    setInterval(function () {
      that.game.draw(that.ctx);
      that.game.step();
    }, 20)
  };

  GameView.prototype.setKeyBindings = function () {
    var that = this;
    key('a', function () {
      that.game.ship.power([-1,0]);
    });
    key('w', function () {
      that.game.ship.power([0,-1]);
    });
    key('s', function () {
      that.game.ship.power([0,1]);
    });
    key('d', function () {
      that.game.ship.power([1,0]);
    });
    key('space', function () {
      that.game.ship.fireBullet();
    });
  };
})();