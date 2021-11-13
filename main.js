noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()  {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(450, 450);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#34e5eb');

    textSize(difference);
    fill('#4269f5');
    text('anime', 50, 400);
    
}

function modelLoaded() {
    console.log('poseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX= " + noseX +"noseY= " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = leftWristX - rightWristX;
    difference = floor(leftWristX - rightWristX);
    }
}