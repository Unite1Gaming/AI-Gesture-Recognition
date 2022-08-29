var noseX = 0;
var noseY = 0;
var difference = 0;
var rightWristX = 0;
var leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNET = ml5.poseNet(video, modeloaded);
    poseNET.on('pose', gotPoses)
}

function modeloaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}

function gotPoses(results) {
    if(results. length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + "difference = " + difference);
    }
}