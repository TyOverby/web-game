function BasicGame(){
    var p = new GameMath.Vector2f(5,5);
    var p_radius = 10;
    var v = new GameMath.Vector2f(5,10);
    var a = new GameMath.Vector2f(0,1);

	this.startup = function(){
        console.log("starting up");
	}

	this.update = function(deltaT){

        p.plusEquals(v);
        v.plusEquals(a);
        if(p.x<=0||p.x+2*p_radius>=pane.canvas.width){
            v.x=-v.x;
        }
        console.log(pane.canvas.height);
        if(p.y<=0||p.y+2*p_radius>=pane.canvas.height){
            v.y=-v.y;
            v.y = v.y/2;

            v.x = v.x * 0.9;
        }
	}



	this.render = function(pane){
        pane.fillStyle="red";
        pane.fillCircle(p,p_radius);
	}
}


function initializeEngine(){
    game = new Engine(new BasicGame(),"canvas");
    console.log("initialized!");
}

