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

var new_device = new DeviceOrientation($("#brush"));

