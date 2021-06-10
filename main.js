noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    canvas = createCanvas(750,600);
    video = createCapture(VIDEO);
    video.size(450,350);
    canvas.position(500,100);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose' , gotPoses);
}
function draw(){
    
    background("grey");
    document.getElementById("square_side").innerHTML = "Radius of Circle will be " + difference + "px";
    fill("#3e18c7");
    stroke("#ff6363");
    circle(noseX,noseY,difference);
}
function modelLoaded(){
    console.log("Model Working");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX  + " noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference " + difference );

    }
}
