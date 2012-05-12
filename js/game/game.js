/*global Engine, console, Vector2f*/
function Game() {
    "use strict";
    
    Engine.call(this);
}
Game.prototype = new Engine();
Game.prototype.constructor = Game;

Game.prototype.load = function () {
    "use strict";
    
    console.log("Game loaded");
    
    this.gamestate.position = new Vector2f(0, 0);
};

Game.prototype.update = function (deltaT) {
    "use strict";
    
    console.log("update from Game");
};