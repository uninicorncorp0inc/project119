function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    } 

function clearCanvas(){
    background("white");
}
function preload(){
classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
    strokeWeight(8);
    stroke("purple");

    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function gotResult(error,results){
if(error){
    console.log(error);
}else{
    console.log(results);
    document.getElementById("label").innerHTML = "Your sketch is :" + results [0].label;
}
}