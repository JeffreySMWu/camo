DeviceOrientation = function (_target) {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function (event) {
            alert("SUCCESS!!");
        }, false);
    } else {
        // document.querySelector('body').innerHTML = '雿删��讛汗�膥銝齿𣈲�螱���';
    }
}

var new_device = new DeviceOrientation($("body"));


var x, y;
var $dot = $("#brush");

$(document).mousemove( function(e) {
  //Get the 'container' offset relative to the document:
  offset = $('body').offset();
  //Track the mouse position:
  x = e.pageX - offset.left;
  y = e.pageY - offset.top;
  //Move the 'dot':
  $dot.css({"left": x});
  $dot.css({"top": y});
});

