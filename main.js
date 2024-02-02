function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide()
    canvas.center()
    tint_color="";
    background(300);
    noFill();
beginShape();
vertex(50, 20);
vertex(600, 20);
vertex(600, 450);
vertex(50, 450);
endShape(CLOSE);
  fill(100, 0, 192, 127);
  stroke(127, 63, 120);
circle(50, 30, 50);
 circle(50, 450, 50);
  circle(600, 30, 50);
   circle(600, 450, 50);
}
function draw(){
    image(video,200,100,300,300)
    tint(tint_color)
}
function take_snapshot(){
    save("picture1.jpeg")
}