// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  global.Client = (function(_super) {

    __extends(Client, _super);

    function Client() {
      return Client.__super__.constructor.apply(this, arguments);
    }

    Client.prototype.load = function() {
      return Client.__super__.load.call(this);
    };

    Client.prototype.update = function() {
      Client.__super__.update.call(this);
      return this.render();
    };

    Client.prototype.render = function() {
      return console.log("render");
    };

    return Client;

  })(Game);

}).call(this);
