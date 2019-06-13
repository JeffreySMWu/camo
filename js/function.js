DeviceOrientation = function (_target) {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function (event) {
            var alpha = event.alpha,
                beta = event.beta,
                gamma = event.gamma,
                a = Math.round(alpha),
                b = Math.round(beta),
                g = Math.round(gamma);

            //   var a = document.getElementById('alpha'),
            //   		b = document.getElementById('beta'),
            //   		g = document.getElementById('gamma'),

            // a = Math.round(alpha);
            // b = Math.round(beta);
            // g = Math.round(gamma);
            console.log("X:" + g);
            console.log("Y:" + b);
            // TweenMax.set(_target, {
            //     y: -b / 1.2
            // });
            // TweenMax.set(_target, {
            //     x: -g * 1.5
            // });
            if (b < 90 && b > -90) {
                TweenMax.set(_target, {
                    y: -b / 2
                });
            }
            if (g < 90 && g > -90) {
                TweenMax.set(_target, {
                    x: -g * 2
                });
            }
        }, false);
    } else {
        // document.querySelector('body').innerHTML = '雿删��讛汗�膥銝齿𣈲�螱���';
    }
}

var new_device = new DeviceOrientation($("#layer"));


var x, y;
var $dot = $("#brush");

$(document).mousemove(function (e) {
    //Get the 'container' offset relative to the document:
    offset = $('body').offset();
    //Track the mouse position:
    x = e.pageX - offset.left;
    y = e.pageY - offset.top;
    //Move the 'dot':
    $dot.css({ "left": x });
    $dot.css({ "top": y });
});

var ALL_SPEED = 50;

toothClear = function (_target, _speed) {
    var clear = true;
    var count = 50;
    if(clear) {
        _target.mouseenter(function () {
            $(this).css({
                "opacity": count / _speed
            });
            count --;
        });
        clear = false;
    } else {
        clear = true;
    }
}
for (i = 0; i < 11; i++) {
    var clear_tooth = new toothClear($("#clear_" + i), ALL_SPEED);
}


$("body").mousemove(function(e) {
    parallaxIt(e, ".bg", -30);
  }).mouseleave(function(e) {
    TweenMax.to(".bg", 1, {
      x: "0",
      y: "0"
    });
  });
  
  function parallaxIt(e, target, movement) {
    var $this = $("body");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
  
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
  
  $(".menu").click(function() {
      $(".main").addClass("active");
  });
  $(".main").click(function() {
    $(".main").fadeOut();
    $("#brush").attr("src","images/brush_1.png");
});