//Player Boundaries

//Setup canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let rectX = 300;
let rectY = 150;
let rect2X = 0;
let rect2Y = 0;
let rectSize = 80;

let animate = true;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  //Update Variables
  if (rectX > 520) {
    rectX = 520;
  } else if (rectX < 0) {
    rectX = 0;
  } else if (rectY < 0) {
    rectY = 0;
  } else if (rectY > 320) {
    rectY = 320;
  }

  if (rect2X > 520) {
    rect2X = 520;
  } else if (rect2X < 0) {
    rect2X = 0;
  }

  //Draw a Background
  else ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw a blue and a green square
  ctx.fillStyle = "blue";
  ctx.fillRect(rectX, rectY, rectSize, rectSize);

  ctx.fillStyle = "green";
  ctx.fillRect(rect2X, rect2Y, rectSize, rectSize);

  requestAnimationFrame(loop);
}

// Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  if (event.code == "ArrowUp") {
    // arrowUpIsPressed = true;
    rectY--;
  } else if (event.code == "ArrowDown") {
    rectY++;
  } else if (event.code == "ArrowRight") {
    rectX++;
  } else if (event.code == "ArrowLeft") {
    rectX--;
  } else if (event.code == "KeyW") {
    rect2Y--;
  } else if (event.code == "KeyS") {
    rect2Y++;
  } else if (event.code == "KeyD") {
    rect2X++;
  } else if (event.code == "KeyA") {
    rect2X--;
  }
}
