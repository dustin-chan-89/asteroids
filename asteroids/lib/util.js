(function () {
  if (typeof window.Asteroids === "undefined" ) {
    window.Asteroids = {};
  }

  var Asteroids = window.Asteroids;
  var Util = Asteroids.Util = {};

  Asteroids.Util.inherits = function (childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  };

  Asteroids.Util.randomVec = function (length) {
    var x = Math.random() * length - (length / 2);
    var y = Math.random() * length - (length / 2);
    return [x, y];
  };
})();
