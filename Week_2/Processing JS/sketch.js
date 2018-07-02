//define an object that describes a circle
var circle = {
    diameter: 80,
    xCoor: 0,
    yCoor: 0,
    color:[255,0,0],
    xSpeed: 10,
    ySpeed: 10
}

//setup is run once at the beginning before we draw
function setup() {
    createCanvas(640, 480);
    background(210,255,46);
    frameRate(20);
}

//the circle changes to a random color when it bounces back
function randomColor() {
    return [random(0,255), random(0,255), random(0,255)];
}

function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    // if the xCoor of circle is greater than the length of the canvas, bounce back
    //when circle bounces back, size changes
    if(circle.xCoor > 640 || circle.xCoor <0){
        circle.diameter = random (10,80);
        circle.color = randomColor();
        circle.xSpeed = -circle.xSpeed;
    }
        circle.xCoor += circle.xSpeed;
    
    //if the yCoor of circle is greater than the width of the canvas, bounce back 
    //when circle bounces back, size changes
    if(circle.yCoor > 480 || circle.yCoor <0){
        circle.diameter = random (10,80);
        circle.color = randomColor();
        circle.ySpeed = -circle.ySpeed;
    }
        circle.yCoor += circle.ySpeed;
    
}


    