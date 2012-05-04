/*jslint browser: true*/
/*global Engine, Game, console, Vector2f*/

function ClientGame() {
    "use strict";
    
    this.pane = -1;


}

ClientGame.prototype = new Game();
ClientGame.prototype.constructor = ClientGame;

ClientGame.prototype.load = function () {
    this.pane = document.getElementById("canvas").getContext("2d");
};

ClientGame.prototype.update = function (deltaT) {
    Game.prototype.update.call(this);
    this.render();
};



ClientGame.prototype.render = function () {
    this.pane.fillStyle = "red";
    this.pane.fillCircle(new Vector2f(10, 10), 5);
};

function play_game() {
    "use strict";
    
    var game = new ClientGame();
    game.start();
}

