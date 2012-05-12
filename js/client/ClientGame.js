/*jslint browser: true*/
/*global Engine, Game, console, Vector2f*/

function Person(gender) {
    "use strict";
    this.gender = gender;
}

Person.prototype.sayGender = function () {
    "use strict";
    console.log(this);
};

function ClientGame() {
    "use strict";
    
    console.log("CLIENT GAME");
    this.pane = -1;
    
    Game.call(this);
}

ClientGame.prototype = new Game();
ClientGame.prototype.constructor = ClientGame;

ClientGame.prototype.load = function () {
    "use strict";
    console.log("client loaded");
    
    Game.prototype.load.call(this);
    
    this.pane = document.getElementById("canvas").getContext("2d");
};

ClientGame.prototype.update = function (deltaT) {
    "use strict";
    
    console.log("update from ClientGame");
    
    Game.prototype.update.call(this);
    ClientGame.prototype.render.call(this);
};



ClientGame.prototype.render = function () {
    "use strict";
    
    console.log(this.pane);
    // this.pane.fillStyle = "red";
    // this.pane.fillCircle(new Vector2f(10, 10), 5);
};

function play_game() {
    "use strict";
    
    var game = new ClientGame();
    game.start();
}

