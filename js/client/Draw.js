/*jslint browser: true*/
/*global Vector2*/

window.CanvasRenderingContext2D.prototype.drawLine = function (p1, p2) {
    "use strict";
    
    this.beginPath();
    this.moveTo(p1.x, p1.y);
    this.lineTo(p2.x, p2.y);
    this.closePath();
    this.stroke();
};


window.CanvasRenderingContext2D.prototype.drawVector = function (position, velocity) {
    "use strict";
    
    if (velocity === null || velocity === undefined) {
        velocity = position;
        position = new Vector2f(0, 0);
    }

    this.drawLine(position, velocity.plus(position));
};

window.CanvasRenderingContext2D.prototype.fillCircle = function (position, radius) {
    "use strict";
    
    this.beginPath();
    this.arc(position.x, position.y, radius, 0, Math.PI * 2, true);
    this.fill();
    this.closePath();
};

/*

function Pane(canvasId){
	var canvas = document.getElementById(canvasId);
		if(canvas === undefined){
				throw "No canvas matching" + canvasId;
		}
	var ctx = canvas.getContext("2d");

	this.getWidth = function(){
		return ctx.width;
	}

	this.getHeight = function(){
		return ctx.height;
	}

	this.setSize = function(width,height){
		ctx.width = width;
		ctx.height = height;

		canvas.width = width;
		canvas.height = height;

		console.log(width+" "+height)
	}

	this.getContext = function(type){
		if(arguments[0]){
			return canvas.getContext(type);
		}
		else{
			return ctx;
		}
	}

	this.clearRect = function(x,y,width,height){
		ctx.clearRect(x,y,width,height);
	}

	this.resetColor = function(){
		ctx.fillStyle = "cyan";
		ctx.strokeStyle = "cyan";
		ctx.globalAlpha = 1;
		ctx.fillstyle = 5;
	}

	this.setFillColor = function(color){
		if(color!=undefined){
			ctx.fillStyle = color;
		}
		else{
			ctx.fillStyle="black"
		}
	}
	this.setStrokeColor = function(color){
		if(color!=undefined){
			ctx.strokeStyle = color;
		}
		else{
			ctx.strokeStyle="black"
		}
	}

	this.drawRectFill = function(x,y,width,height,color){
		this.setFillColor(color);

		ctx.fillRect(x,y,width,height);

		this.resetColor();
	}
	this.drawRectStroke = function(x, y, width, height, color, lineWidth){
		this.setStrokeColor(color);

		ctx.lineWidth = lineWidth;
		ctx.strokeRect(x,y,width,height);

		this.resetColor();
	}

	this.drawCircleFill = function(x,y,radius,color){
		this.setFillColor(color);

		ctx.beginPath();
		ctx.arc(x,y,radius,0,Math.PI*2,true);
		ctx.fill();
		ctx.closePath();

		this.resetColor();
	}
	this.drawCircleStroke = function(x,y,radius,color){
		this.setStrokeColor(color);

		ctx.beginPath();
		ctx.arc(x,y,radius,0,Math.PI*2,true);
		ctx.stroke();
		ctx.closePath();

		this.resetColor();
	}

	this.drawLine = function(x1,y1,x2,y2,color){
		this.setStrokeColor(color);

		ctx.beginPath();
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.closePath();
		ctx.stroke();

		this.resetColor();
	}
}
*/