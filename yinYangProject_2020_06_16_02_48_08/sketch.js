/* 
Taoist symbol of yin yang spirals counter clockwise at a variable speed dependent on mouseX position when mouseX is left of center. Symbol spirals clockwise when mouseX position is greater than center X.

Written by Lea Thomas June 2020. 
*/


// global variables 
let canvBGR = 255;
let canvBGG = 245;
let canvBGB = 245;
let alphC = 135;
let padding = 100;
let angle = 0;


function setup() {
  createCanvas(800, 800);


  arcObj = {
    midX: 0,
    midY: 0,
    width: width - padding * 2,
    height: height - padding * 2,
    start: PI * 0.5,
    stop: PI * 1.5,
  }

}



function draw() {
  background(canvBGR, canvBGG, canvBGB);
  createYinYang();


}

function createYinYang() {

  let motion = map(mouseX, width/2, 0, 0.05, 0.5);
  translate(400, 400);
  rotate(angle);
  angle = angle + motion;

  if (mouseIsPressed) {
    angle = 0;
  }


  stroke(255, 215, 0);
  strokeWeight(7);
  // outermost L ring, black
  fill(0);
  let arc1L = arc(arcObj.midX, arcObj.midY, arcObj.width, arcObj.height, arcObj.start, arcObj.stop);


  // outermost R ring, white
  fill(255);
  let arc1R = arc(arcObj.midX, arcObj.midY, arcObj.width, arcObj.height, arcObj.start + PI, arcObj.stop + PI);


  noStroke();
  //middle L ring, white
  fill(255);
  let arc2L = arc(arcObj.midX, arcObj.midY, arcObj.width * 0.6, arcObj.height * 0.6, arcObj.start, arcObj.stop);

  // middle R ring, black 
  fill(0);
  let arc2R = arc(arcObj.midX, arcObj.midY, arcObj.width * 0.6, arcObj.height * 0.6, arcObj.start + PI, arcObj.stop + PI);

  // innermost L ring, black
  fill(0);
  let arc3L = arc(arcObj.midX, arcObj.midY, arcObj.width * 0.3, arcObj.height * 0.3, arcObj.start, arcObj.stop);

  // innermost R ring, white 
  fill(255);
  let arc3R = arc(arcObj.midX, arcObj.midY, arcObj.width * 0.3, arcObj.height * 0.3, arcObj.start + PI, arcObj.stop + PI);




}