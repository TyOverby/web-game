/*global Engine, console, Vector2f*/
function Game() {
    "use strict"; 
}
Game.prototype = new Engine();
Game.prototype.constructor = Game;

Game.prototype.load = function () {
    "use strict";
    
    this.gamestate.position = new Vector2f(0, 0);
};

Game.prototype.update = function (deltaT) {
    "use strict";
    
    throw "update(deltaT) not implemented";
};