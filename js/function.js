DeviceOrientation = function (_target) {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function (event) {
            var alpha = event.alpha,
                beta = event.beta,
                gamma = event.gamma,
                a = Math.round(alpha),
                b = Math.round(beta),
                g = Math.round(gamma),
                origin = 0;

            console.log("X:" + g);
            console.log("Y:" + b);
            if(b > origin ) {
                origin = b;
            }
        }, false);
    } else {
        // document.querySelector('body').innerHTML = '雿删��讛汗�膥銝齿𣈲�螱���';
    }
}

var new_device = new DeviceOrientation($("#brush"));

