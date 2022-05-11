noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Has Been Successfully Initialized.');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + "nose y = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + "Right Wrist X = " + rightWristX + "Difference = " + difference);
    }
}

function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Width And Height of the Square Will Be = " + difference + "px";
    fill('#14E6FA');
    stroke('#142CFA');
    square(noseX, noseY, difference);
}
