// var easeInQuad  = 'cubic-bezier(0.550, 0.085, 0.680, 0.530)';
var easeInQuad  = '';
var $duration = 0.5;  
var $delay = 1;
var $cssFadeIn = 'fadeIn';
var $cssFadeOut = 'fadeOut';

function frame01In() {
    fadeInOut({ id: "copy1", aniName: $cssFadeIn, duration: $duration, ease: easeInQuad });
}

function frame01Out() {
    fadeInOut({ id: "img1", aniName: $cssFadeOut, duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "copy1", aniName: $cssFadeOut, duration: $duration, ease: easeInQuad });
}

function frame02In() {
    fadeInOut({ id: "img2", aniName: $cssFadeIn, duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "copy2", aniName: $cssFadeIn, duration: $duration, delay: $delay, ease: easeInQuad });
}

function frame02Out() {
    fadeInOut({ id: "img2", aniName: $cssFadeOut, duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "copy2", aniName: $cssFadeOut, duration: $duration, ease: easeInQuad });
}

function frame03In() {
    fadeInOut({ id: "img3", aniName: $cssFadeIn, duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "copy3", aniName: $cssFadeIn, duration: $duration, delay: $delay, ease: easeInQuad });
}

function frame03Out() {
    fadeInOut({ id: "img3", aniName: $cssFadeOut, duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "copy3", aniName: $cssFadeOut, duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "logo", aniName: $cssFadeOut, duration: $duration, ease: easeInQuad });
}

function lastFrameIn() {
    fadeInOut({ id: "img4", aniName: $cssFadeIn, duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "CTA", aniName: $cssFadeIn, duration: $duration, ease: easeInQuad });
}
function lastFrameOut() {
    fadeInOut({ id: "img4", aniName: $cssFadeOut, duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "CTA", aniName: $cssFadeOut, duration: $duration, ease: easeInQuad });
    delayedCall(0.5, reset);

}
function reset(){
    fadeInOut({ id: "img1", aniName: $cssFadeIn, duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "logo", aniName: $cssFadeIn, duration: $duration, ease: easeInQuad });
}

// Loop(); 
Loop(2);// Animation loops twice

function StartAnimation(){
    delayedCall(0.5,frame01In);
    delayedCall(3, frame01Out);

    delayedCall(3.5, frame02In);
    delayedCall(7.5, frame02Out);

    delayedCall(8, frame03In);
    delayedCall(11, frame03Out);

    delayedCall(11.5, lastFrameIn);
}

function fadeInOut(obj) {
    console.log("OBJ");
    var ele = document.getElementById(obj.id) ,
        aniName = (typeof obj.aniName !== 'undefined' ? obj.aniName : 'fadeIn'),
        duration = (typeof obj.duration !== 'undefined' ? obj.duration : 1),
        delay = (typeof obj.delay !== 'undefined' ? obj.delay : 0),
        ease = (typeof obj.ease !== 'undefined' ? obj.ease : 'ease-in');
    ele.style.animationName = aniName;
    ele.style.animationDuration = duration + 's';
    ele.style.animationDelay = delay + 's';
    ele.style.animationTimingFunction = ease;
    ele.style.animationFillMode = 'forwards';
}

function delayedCall(duration, func){
    var $duration = duration * 1000;
    var $func = func;
    var t;
    clearTimeout(t);
    t = setTimeout($func, $duration);
}

function Loop(times){
    var times = (typeof times !== 'undefined' ? times : 1);
    switch(times){
        case 1 : delayedCall(0, StartAnimation);
        break;
        case 2 : delayedCall(0, StartAnimation);
                 delayedCall(14, lastFrameOut);
                 delayedCall(15, StartAnimation);
        break;
        default:
                 delayedCall(0, StartAnimation);
        break;
    }
}