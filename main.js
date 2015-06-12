function drawCircle(s) {
   var circle = s.circle(150, 150, 100);
   circle.attr({
     fill: "#ff0000",
     stroke : "#00ff00",
     strongWidth: 5
   });
}

function animationCircle(s) {
   var circle = s.circle(150, 150, 50);
   circle.attr({
     fill: "#ff00ff",
     stroke : "#00ff00",
     strongWidth: 5
   });
   circle.animate({r: 150} , 3000);
}


function drawObject(id, val) {
    var paper = Snap(id);
    paper.clear();
    switch (val) {
    case "circle":
      drawCircle(paper);
      break;
    case "animation_circle":
      animationCircle(paper);
      break;
    default:
      break;
    }
}
