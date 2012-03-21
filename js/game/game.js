function basicGame(canvasID){

    pane = new Pane(canvasID);
    pane.setSize(500,500);

    var p = new GameMath.Vector2f(5,5);
    var p_radius = 10;
    var v = new GameMath.Vector2f(5,10);
    var a = new GameMath.Vector2f(0,1);

	this.startup = function(){
        console.log("starting up");
	}

	this.update = function(){
        console.log(pane.getWidth());

        p.plusEquals(v);
        v.plusEquals(a);
        if(p.x<=0||p.x+2*p_radius>=pane.getWidth()){
            v.x=-v.x;
        }
        if(p.y<=0||p.y+2*p_radius>=pane.getHeight()){
            v.y=-v.y;
            v.y = v.y/2;
        }
	}



	this.render = function(){
        pane.drawRectFill(0,0,pane.getWidth(),pane.getHeight(),"white");

        pane.drawCircleFill(p.x,p.y,p_radius,"red");
	}

	this.isRunning = function(){
		return true;
	}
}

function start(){
	myGame = new basicGame("canvas");
	game = new Engine(myGame,60);  // Start the game with an FPS of 10
	game.run();
}
function stop(){
	game.stop();
}

