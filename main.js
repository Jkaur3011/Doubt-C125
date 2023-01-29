difference = 0;
leftwristx = 0;
rightwristx = 0;
user_color = document.getElementById("user_color");
user_text = document.getElementById("user_text");


function setup() {
    captured = createCapture(VIDEO); //video captured
    captured.position(50, 165); //video positioned

    canvas = createCanvas(600, 480); //canvas created
    canvas.position(800, 165); //canvas positioned

    posenetj = ml5.poseNet(captured, modelloaded); //posenet model loaded
    posenetj.on("pose", gotResults); //on func keeps an eye on pose in the console and if any change occurs, 
    //it passes it in func GotResults
}

function modelloaded(){
    console.log("Posenet has been loaded!"); 
}

function gotResults(results){ 
    if(results.length > 0){ //if length of results is more than 0 
        console.log(results);//pass the results in console

        leftwristx = results[0].pose.leftWrist.x; //position of leftwrist x
        rightwristx = results[0].pose.rightWrist.x; //position of rightwrist x
        difference = floor(leftwristx - rightwristx);

    }
}

function draw(){
    background("white"); //background of canvas
    document.getElementById("font_size").innerHTML = "Size of the text is = "+difference+"px";
    textSize(difference); 
    fill(document.getElementById("user_color"));
    text(document.getElementById("user_text"), 2, 250);
}