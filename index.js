let canvas = document.getElementById("myCanvas");
/**
 * @param {any} canvas
 * @return {CanvasRenderingContext2D}}
 */

function createPaper(canvas) {
  return canvas.getContext("2d");
}

let paper = createPaper(canvas);

paper.strockeStyle = "red";
paper.beginPath();
paper.moveTo(10, 20);
paper.lineTo(100, 120);
paper.stroke();

let currentTime = Date.now();
let velocityX = 100;
let circleX = canvas.width/2;
let circleY = canvas.height/2;
let omega = 1;

setInterval(() => {
  let delta = Date.now() - currentTime;
  let fps = 1 / (delta / 1000);
  currentTime = Date.now();
  paper.clearRect(0, 0, canvas.width, canvas.height);
  console.log("FPS: " + fps);

  paper.beginPath();
  paper.strokeStyle = "green";
  paper.fillStyle = "green";
  paper.arc(circleX, circleY, 60, 0, 2 * Math.PI);
  paper.stroke();
  paper.fill();
  circleX = canvas.width / 2 + Math.cos((omega * currentTime) / 1000) * 420;
}, 1000 / 60);
