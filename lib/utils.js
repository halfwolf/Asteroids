;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  window.Asteroids.Util = {};

  var inherits = window.Asteroids.Util.inherits = function (subclass, superclass) {
    var Surrogate = function () {};
    Surrogate.prototype = superclass.prototype;
    subclass.prototype = new Surrogate();
  };

  var randomVec = window.Asteroids.Util.randomVec = function (length) {
    return [Math.random() * length, Math.random() * length];
  }
})();