function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(1000,150);

    video = createCapture(VIDEO);
    video.size(600, 500);
    video.position(300, 150);

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#F3FF00');
}
function modelloaded(){
    console.log('posNet is initialize');
}
function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(noseX, noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log(leftwristX, rightwristX, difference);
    }
}
function draw(){
    background('#FF0000');
    textSize(10);
    fill('#FF0000');
    text(Shreyansh,100, 400);
    document.getElementById("text").innerHTML = "The width and height of the text is"+difference+"px";
}