var frame01 = document.querySelector('.frame01'),
    frame02 = document.querySelector('.frame02'),
    frame03 = document.querySelector('.frame03'),
    frame04 = document.querySelector('.frame04'),
    bg = document.querySelector('.bg'),
    lastFrame = document.querySelector('.lastFrame');

setTimeout(frame01In, 500);
setTimeout(frame01Out, 3000);

setTimeout(frame02In, 4000);
setTimeout(frame02Out, 6500);

setTimeout(frame03In, 7500);
setTimeout(frame03Out, 10000);

setTimeout(lastFrameIn, 11000);




// Animation frame 01
function frame01In() {
    fadeInOut({ ele: frame01, aniName: 'fadeIn', time: 1, ease: 'ease-in' });
}

function frame01Out() {
    fadeInOut({ ele: frame01, aniName: 'fadeOut', time: 1, ease: 'ease-in' });
}

// Animation frame 02
function frame02In() {
    fadeInOut({ ele: frame02, aniName: 'fadeIn', time: 1, ease: 'ease-in' });
}

function frame02Out() {
    fadeInOut({ ele: frame02, aniName: 'fadeOut', time: 1, ease: 'ease-in' });
}

// Animation frame 03
function frame03In() {
    fadeInOut({ ele: frame03, aniName: 'fadeIn', time: 1, ease: 'ease-in' });
}

function frame03Out() {
    fadeInOut({ ele: frame03, aniName: 'fadeOut', time: 1, ease: 'ease-in' });
    fadeInOut({ ele: bg, aniName: 'fadeOut', time: 1, ease: 'ease-in' });
}

// Animation frame 04
// function frame04In() {
//     fadeInOut({ ele: frame04, aniName: 'fadeIn', time: 1, ease: 'ease-in' });
// }

// function frame04Out() {
//     fadeInOut({ ele: frame04, aniName: 'fadeOut', time: 1, ease: 'ease-in' });

// }

function lastFrameIn() {
    fadeInOut({ ele: lastFrame, aniName: 'fadeIn', time: 1, ease: 'ease-in' });
}

// Common fade-in fade-out function
function fadeInOut(obj) {
    var ele = obj.ele,
        aniName = obj.aniName,
        time = obj.time,
        delay = obj.delay,
        ease = obj.ease;
    ele.style.animationName = aniName;
    ele.style.animationDuration = time + 's';
    ele.style.animationDelay = delay + 's';
    ele.style.animationTimingFunction = ease;
    ele.style.animationFillMode = 'both';
}