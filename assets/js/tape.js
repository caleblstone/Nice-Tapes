var circles = document.querySelectorAll("path.tapeCircle")
var rollers = document.querySelectorAll("path.tapeRoller")
var ani1 = document.getElementById("animation1")
var ani2 = document.getElementById("animation2")
var ani3 = document.getElementById("animation3")
var ani4 = document.getElementById("animation4")
var bigSVG = document.querySelector("svg.test")
var c1xVal
var c1yVal
var c2xVal
var c2yVal




paper.install(window);
window.onload = function() {
	// Setup directly from canvas id:
	paper.setup('myCanvas');
	var path = new Path();
	path.strokeColor = 'black';
	var start = new Point(100, 100);
	path.moveTo(start);
	path.lineTo(start.add([ 200, -50 ]));
	view.draw();

}



var box1 = circles[0].getBoundingClientRect()
var box2 = circles[1].getBoundingClientRect()

var box3 = rollers[0].getBoundingClientRect()
var box4 = rollers[1].getBoundingClientRect()

var box5 = bigSVG.getBoundingClientRect()

var percentage
var adjustedPer

if (window.innerWidth > 600) {
	var radius1or = 55
	var radius2or = 125
}
if (window.innerWidth < 600) {
	var radius1or = 25
	var radius2or = 58
}


c1xVal = box1.left + (box1.width / 2)
c1yVal = box1.top + (box1.height / 2)

c2xVal = box2.left + (box2.width / 2)
c2yVal = box2.top + (box2.height / 2)


r1xVal = box3.left + (box3.width / 2)
r1yVal = box3.top + (box3.height / 2)

r2xVal = box4.left + (box4.width / 2)
r2yVal = box4.top + (box4.height / 2)




audio.addEventListener("timeupdate", function(){

  project.activeLayer.removeChildren();
  paper.view.draw();

  percentage = audio.currentTime / audio.duration
  adjustedPer = (percentage * 70)
  radius2 = adjustedPer + radius1or
  radius1 = radius2or - adjustedPer

  circle1 = new Path.Circle(
    new Point(c1xVal, c1yVal), radius1
  );
  circle1.strokeColor = '#FF4C00';
  circle1.fillColor = '#FF4C00';
	circle1.strokeWidth = 4;



  circle2 = new Path.Circle(
    new Point(c2xVal, c2yVal), radius2
  );
  circle2.strokeColor = '#FF4C00';
  circle2.fillColor = '#FF4C00';
	circle2.strokeWidth = 4;

	radius3 = (box3.width / 2) + 5
	radius4 = (box4.width / 2) + 5

	circle3 = new Path.Circle(
    new Point(r1xVal, r1yVal), radius3
  );
  circle3.strokeColor = 'none';
	circle3.strokeWidth = 4;


  circle4 = new Path.Circle(
    new Point(r2xVal, r2yVal), radius4
  );
  circle4.strokeColor = 'none';
	circle4.strokeWidth = 4;


	var distance1 = Math.sqrt((r1xVal - c1xVal) * (r1xVal - c1xVal) + (r1yVal - c1yVal) * (r1yVal - c1yVal));
	var distance2 = Math.sqrt((r2xVal - c2xVal) * (r2xVal - c2xVal) + (r2yVal - c2yVal) * (r2yVal - c2yVal));



	// circle2Point = new Point(c2xVal, c2yVal)
	//
	// circleOffsets = circle5.getOffsetsWithTangent(circle2Point)
	// console.log(circleOffsets);
	//
	// var point = circle5.getPointAt(circleOffsets[1] - 45);
	//
	// var line = new Path({
	//   segments: [point, circle2Point],
	//   strokeColor: 'blue',
	// 	strokeWidth: 4,
	// })
	//
	var variable1 = (0 - Math.atan((c1yVal-r1yVal)/(c1xVal-r1xVal))) - Math.asin((radius3 - radius1)/(Math.sqrt((Math.pow((c1xVal-r1xVal),2)) + Math.pow((c1yVal-r1yVal),2))))
	var variable2 = (0 - Math.atan((c2yVal-r2yVal)/(c2xVal-r2xVal))) + Math.asin((radius4 - radius2)/(Math.sqrt((Math.pow((c2xVal-r2xVal),2)) + Math.pow((c2yVal-r2yVal),2))))

	var x3 = c1xVal - (radius1 * Math.sin(variable1))
	var y3 = c1yVal - (radius1 * Math.cos(variable1))
	var x4 = r1xVal - (radius3 * Math.sin(variable1))
	var y4 = r1yVal - (radius3 * Math.cos(variable1))

	var line = new Path({
		segments: [[x3,y3],[x4,y4]],
		strokeColor: '#FF4C00',
		strokeWidth: 4,
	})

	var x5 = c2xVal - (radius2 * Math.sin(variable2))
	var y5 = c2yVal - (radius2 * Math.cos(variable2))
	var x6 = r2xVal - (radius4 * Math.sin(variable2))
	var y6 = r2yVal - (radius4 * Math.cos(variable2))

	var line2 = new Path({
		segments: [[x5,y5],[x6,y6]],
		strokeColor: '#FF4C00',
		strokeWidth: 4,
	})

	var path1 = new Path.Arc({
    from: [r2xVal, box4.bottom + 5],
    through: [(r2xVal + Math.cos(3.1/2) * radius4), (r2yVal + Math.sin(3.1/2) * radius4)],
    to: [x6,y6],
    strokeColor: '#FF4C00',
		strokeWidth: 4,
});

var path2 = new Path.Arc({
	from: [r1xVal, box3.bottom + 5],
	through: [(r1xVal + Math.cos(3.2/2) * radius3), (r1yVal + Math.sin(3.2/2) * radius3)],
	to: [x4,y4],
	strokeColor: '#FF4C00',
	strokeWidth: 4,
});



	var bottomLine = new Path({
		segments: [[r1xVal, (box3.bottom + 5)], [r2xVal, box4.bottom + 5]],
		strokeColor: '#FF4C00',
    strokeWidth: 4,
    strokeCap: 'round',
	})





})


playButton.addEventListener("click", function(){

	playAnimations()
})
phonePlayButton.addEventListener("click", function(){

	playAnimations()
})

var playAnimations = function(){
	bigSVG.unpauseAnimations()


	ani1.setAttribute("from","360 189 185")
	ani1.setAttribute("to","0 189 185")

	ani2.setAttribute("from","360 450 185")
	ani2.setAttribute("to","0 450 185")

	ani3.setAttribute("from","360 151 362")
	ani3.setAttribute("to","0 151 362")

	ani4.setAttribute("from","360 489 362")
	ani4.setAttribute("to","0 489 362")


}

pauseButton.addEventListener("click", function(){

	bigSVG.pauseAnimations()

})
phonePauseButton.addEventListener("click", function(){
	bigSVG.pauseAnimations()
})
downButton.addEventListener("click", function(){
	bigSVG.pauseAnimations()
})
upButton.addEventListener("click", function(){
	bigSVG.pauseAnimations()
})

















// function onResize(event) {
// 	// Whenever the window is resized, recenter the path:
// 	path.position = view.center;
// }
