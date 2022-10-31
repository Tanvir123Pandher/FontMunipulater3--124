Difference=0
RightWristX=0
LeftWristX=0
function setup(){
    video = createCapture(VIDEO)
    video.size(540,540);

    canvas = createCanvas(540,450)
    canvas.position(560,119)

    posenet = ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotposes)
}

function draw(){
    background("pink")
    fill("black")
    stroke("white")
    textSize(Difference)
    text("DvD" ,100,100)
    document.getElementById("Size").innerHTML="textSize= " + Difference + "px"
}

function modelLoaded(){
    console.log("modle is loaded")
}

function gotposes(result){ 
    if (result.length > 0) {
        console.log(result)
        RightWristX=result[0].pose.rightWrist.x;
        LeftWristX=result[0].pose.leftWrist.x;
        Difference=floor(LeftWristX - RightWristX);
    }
}