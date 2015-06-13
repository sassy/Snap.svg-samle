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

function clickCircle(s) {
    var circle = s.circle(150, 150, 100);
    circle.attr({
      fill: "#ff0000",
      stroke : "#00ff00",
      strongWidth: 5
    });
    circle.click(function(e) {
      if (Snap.getRGB(circle.attr("fill")).hex === "#ff0000") {
        circle.attr({
          fill : "#00ff00"
        });
      } else {
        circle.attr({
          fill : "#ff0000"
        });
      }
    });
}

function dragScalingRect(s) {
    var rect = s.rect(100, 100, 100, 100).attr({
      fill: "#ff00ff"
    });
    rect.drag(function(dx, dy) {
      //move
      var scale = 1 + dx / 50;
      this.attr({
        transform: this.data('origTransform') + (this.data('origTransform') ? "S" : "s") + + scale
      });
      console.log(this.transform());
    }, function() {
      //start
      this.data('origTransform', this.transform());
    }, function() {
      //stop
      //do nothing
    });
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
    case "click":
      clickCircle(paper);
      break;
    case "scaling":
      dragScalingRect(paper);
      break;
    default:
      break;
    }
}
