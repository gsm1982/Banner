/* https://tympanus.net/codrops/css_reference/timing-function_value/ 
    Default values for 
    <timing-function> = ease | 
                        linear | 
                        ease-in | 
                        ease-out | 
                        ease-in-out | 
                        step-start | 
                        step-end | 
                        steps(<integer>[, [ start | end ] ]?) | 
                        cubic-bezier(<number>, <number>, <number>, <number>) */

   /* cubic-bezier => https://matthewlein.com/tools/ceaser 
   Sample values */

    // var linear = 'cubic-bezier(0.250, 0.250, 0.750, 0.750)';
    // var easeIn = 'cubic-bezier(0.420, 0.000, 1.000, 1.000)';
    // var easeOut = 'cubic-bezier(0.000, 0.000, 0.580, 1.000)';
    // var easeInOut = 'cubic-bezier(0.420, 0.000, 0.580, 1.000)';

    /* In */

    // var easeInQuad  = 'cubic-bezier(0.550, 0.085, 0.680, 0.530)';
    // var easeInCubic = 'cubic-bezier(0.550, 0.055, 0.675, 0.190)';
    // var easeInQuart = 'cubic-bezier(0.895, 0.030, 0.685, 0.220)';
    // var easeInQuint = 'cubic-bezier(0.755, 0.050, 0.855, 0.060)';
    // var easeInSine = 'cubic-bezier(0.470, 0.000, 0.745, 0.715)';
    // var easeInExpo = 'cubic-bezier(0.950, 0.050, 0.795, 0.035)';
    // var easeInCirc = 'cubic-bezier(0.600, 0.040, 0.980, 0.335)';
    // var easeInBack = 'cubic-bezier(0.600, -0.280, 0.735, 0.045)';
    
    /* OUT */ 

    // var easeOutQuad = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
    // var easeOutCubic = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';
    // var easeOutQuart = 'cubic-bezier(0.165, 0.840, 0.440, 1.000)';
    // var easeOutQuint = 'cubic-bezier(0.230, 1.000, 0.320, 1.000)';
    // var easeOutSine = 'cubic-bezier(0.390, 0.575, 0.565, 1.000)';
    // var easeOutExpo = 'cubic-bezier(0.190, 1.000, 0.220, 1.000)';
    // var easeOutCirc = 'cubic-bezier(0.075, 0.820, 0.165, 1.000)';
    // var easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

/* Animation Sequencing */
delayedCall(0.5,frame01In );
delayedCall(3, frame01Out);

delayedCall(3.5, frame02In);
delayedCall(7.5, frame02Out);

delayedCall(8, frame03In);
delayedCall(11, frame03Out);

delayedCall(11.5, lastFrameIn);


// var easeIn = 'cubic-bezier(0.420, 0.000, 1.000, 1.000)'; //Copied from above
var easeInQuad  = 'cubic-bezier(0.550, 0.085, 0.680, 0.530)'
var $duration = 0.5;  //Seconds
var $delay = 1;

// "aniName" take in CSS class name which be can be picked up from here => https://daneden.github.io/animate.css/

// Animation frame 01
function frame01In() {
    fadeInOut({ id: "copy1", aniName: 'fadeIn', duration: $duration, ease: easeInQuad });
}

function frame01Out() {
    fadeInOut({ id: "img1", aniName: 'fadeOut', duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "copy1", aniName: 'fadeOut', duration: $duration, ease: easeInQuad });
}

// Animation frame 02
function frame02In() {
    fadeInOut({ id: "img2", aniName: 'fadeIn', duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "copy2", aniName: 'fadeIn', duration: $duration, delay: $delay,  ease: easeInQuad });
}

function frame02Out() {
    fadeInOut({ id: "img2", aniName: 'fadeOut', duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "copy2", aniName: 'fadeOut', duration: $duration, ease: easeInQuad });
}

// Animation frame 03
function frame03In() {
    fadeInOut({ id: "img3", aniName: 'fadeIn', duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "copy3", aniName: 'fadeIn', duration: $duration, delay: $delay, ease: easeInQuad });
}

function frame03Out() {
    fadeInOut({ id: "img3", aniName: 'fadeOut', duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "copy3", aniName: 'fadeOut', duration: $duration, ease: easeInQuad });
}

function lastFrameIn() {
    fadeInOut({ id: "img4", aniName: 'fadeIn', duration: $duration, ease: easeInQuad });
    fadeInOut({ id: "CTA", aniName: 'fadeIn', duration: $duration, ease: easeInQuad });
}


// Common fade-in fade-out function
function fadeInOut(obj) {
    var ele = document.getElementById(obj.id) ,
        aniName = (typeof obj.aniName !== 'undefined' ? obj.aniName : 'fadeIn'),
        duration = (typeof obj.duration !== 'undefined' ? obj.duration : 1),
        delay = (typeof obj.delay !== 'undefined' ? obj.delay : 0),
        ease = (typeof obj.ease !== 'undefined' ? obj.ease : 'ease-in');
    ele.style.animationName = aniName;
    ele.style.animationDuration = duration + 's';
    ele.style.animationDelay = delay + 's';
    ele.style.animationTimingFunction = ease;
    ele.style.animationFillMode = 'both';
}

function delayedCall(duration, func){
    var $duration = duration * 1000;//Converting to milliseconds
    var $func = func;
    setTimeout($func, $duration);
}