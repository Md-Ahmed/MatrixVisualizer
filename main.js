var canvas = document.getElementById('canvas');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

var matrix = {      // i j 
    x1: 1, x2: 0,  //|1 0|
    y1: 0, y2: 1    //|0 1|
};

var line = {
    x:50,
    y:50
};

context.translate(width/2, height/2);
context.scale(1, -1);


function draw(){

    context.fillStyle = "#aaa";
    context.fillRect(-5, -5, 10, 10);

    context.strokeStyle = "#000";
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo((matrix.x1 * line.x) + (matrix.x2 * line.y), (matrix.y1 * line.x) + (matrix.y2 * line.y));
    context.stroke();

    context.strokeStyle = "#888";
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(line.x, line.y);
    context.stroke();

    context.fillStyle = "#ccc";
    for (var i = 0; i < width/2; i+=50) {
        for (var j = -height/2; j < height/2; ++j) {
            context.fillRect(i, j, 1, 1);
        }
    }
    for (var i = 0; i > -width/2; i-=50) {
        for (var j = -height/2; j < height/2; ++j) {
            context.fillRect(i, j, 1, 1);
        }
    }
    for (var j = 0; j < height/2; j+=50) {
        for (var i = -width/2; i < width/2; ++i) {
            context.fillRect(i, j, 1, 1);
        }
    }
    for (var j = 0; j > -height/2; j-=50) {
        for (var i = -width/2; i < width/2; ++i) {
            context.fillRect(i, j, 1, 1);
        }
    }
    
    context.fillStyle = "#0a0";
    for (var i = 0; i < width/2; i+=50) {
        for (var j = -height/2; j < height/2; ++j) {
            context.fillRect((matrix.x1 * i) + (matrix.x2 * j), (matrix.y1 * i) + (matrix.y2 * j), 1, 1);
        }
    }
    for (var i = 0; i > -width/2; i-=50) {
        for (var j = -height/2; j < height/2; ++j) {
            context.fillRect((matrix.x1 * i) + (matrix.x2 * j), (matrix.y1 * i) + (matrix.y2 * j), 1, 1);
        }
    }
    context.fillStyle = "#c00";
    for (var j = 0; j < height/2; j+=50) {
        for (var i = -width/2; i < width/2; ++i) {
            context.fillRect((matrix.x1 * i) + (matrix.x2 * j), (matrix.y1 * i) + (matrix.y2 * j), 1, 1);
        }
    }
    for (var j = 0; j > -height/2; j-=50) {
        for (var i = -width/2; i < width/2; ++i) {
            context.fillRect((matrix.x1 * i) + (matrix.x2 * j), (matrix.y1 * i) + (matrix.y2 * j), 1, 1);
        }
    }
}

draw();

document.getElementById("x").oninput = function () {
    context.clearRect(-width/2, -height/2, width, height);
    document.getElementById("x-input").value = matrix.x2 = this.value;
    draw();
}

document.getElementById("y").oninput = function () {
    context.clearRect(-width/2, -height/2, width, height);
    document.getElementById("y-input").value = matrix.y1 = this.value;
    draw();
}

document.getElementById("line-x").onchange = function () {
    context.clearRect(-width/2, -height/2, width, height);    
    line.x = isNaN(this.vlaue) ? 50*this.value : 0;
    draw();
}

document.getElementById("line-y").onchange = function () {
    context.clearRect(-width/2, -height/2, width, height);
    line.y = isNaN(this.vlaue) ? 50*this.value : 0;
    draw();
}