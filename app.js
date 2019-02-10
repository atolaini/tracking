var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

//mouse tracking / movement
var xmouse, ymouse;
$on('mousemove', function(e){
    xmouse = e.clientX || e.pageX;
    ymouse = e.clientY || e.pageY;
});

var svg = $('svg');
var x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    ty = 0,
    key = -1;

    console.log(svg)
var followMouse = function followMouse() {
    key = requestAnimationFrame(followMouse);

    if(!x || !y) {
        x = xmouse;
        y = ymouse;
    } else {
        dx = (xmouse - x) * 0.125;
        dy = (ymouse - y) * 0.125;
        if(Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = xmouse;
            y = ymouse;
        } else {
            x += dx;
            y += dy;
        }
    }

    svg.style.left = x + 'px';
    svg.style.top = y + 'px';
};



//greensock
// TweenLite.to("svg", 1, {rotation:360, transformOrigin:"50% 50%"}, {repeat: -1});

var svg = document.querySelector('svg');
var path = document.querySelectorAll('path');
var path2 = document.querySelectorAll('path:nth-child(odd)');
var tl = new TimelineMax({repeat: -1});


TweenMax.to(path, 10, {rotation:"+=360", ease:Linear.easeNone, repeat:-1, transformOrigin: "50% 55%", });

TweenMax.to(path2, 5, {rotation:"-=360", ease:Linear.easeNone, repeat:-1, transformOrigin: "55% 50%"});

// TweenMax.fromTo(path, 5, {scale: '1', ease:Linear.easeNone, transition: 'all 2 ease'}, {scale: '1.2', ease:Linear.easeNone, repeat: -1});


// TweenMax.fromTo(path2, 5, {opacity: '0', ease:Linear.easeNone, transition: 'all 2 ease'}, {opacity: '1', ease:Linear.easeNone, repeat: -1});

tl
    .to(path2, 3, {opacity: 0})
    .to(path2, 7, {opacity: 1})
