let circles = document.querySelectorAll("path.tapeCircle")
let width = window.innerWidth
let height = window.innerHeight
let y = 100;

function setup() {
  createCanvas(width, height);
  pixelDensity(10);
  scale(1/10);

  frameRate(1);
  smooth();

}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {

  circles.forEach((item, i) => {
    box = item.getBoundingClientRect()
    xVal = box.x + (box.width / 2)
    yVal = box.y + (box.height / 2)
    noStroke()
    fill(255,76,0)
    circle(xVal,yVal, 225)
  });

}

// circle.forEach((item, i) => {
//   box = item.getBBox()
//   xVal = box.x - (box.width / 2)
//   yVal = box.y - (box.height / 2)
//
//   circle(xVal,yVal, 300)
//   console.log(xVal);
// });





// console.log(circle);
