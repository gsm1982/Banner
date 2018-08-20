// var canvas;

function init() {
    prepareAssets();
}

function prepareAssets() {
    TweenLite.set("#frame1", { autoAlpha: 1 });
    TweenLite.set("#frame2", { autoAlpha: 1 });
    TweenLite.set("#frame3", { autoAlpha: 1 });
    TweenLite.set("#frame4", { autoAlpha: 1 });
    TweenLite.set("#cta", { autoAlpha: 1 });
    TweenLite.set("#logo", { autoAlpha: 1 });
    adVisibilityHandler();
}

//Set All Elements
function adVisibilityHandler() {

    TweenLite.delayedCall(0.4, frame1);
    TweenLite.delayedCall(1, frame2);
    TweenLite.delayedCall(3.5, frame3);
    TweenLite.delayedCall(6.0, frame4);
    TweenLite.delayedCall(9.0, frame5);
}

// **************************************
// **** FRAME 1 ANIMATION
// **************************************

function frame1() {
    TweenLite.to("#logo", 0.5, { alpha: 1, delay: 0.0, ease: Quad.easeIn});
    TweenLite.to("#img1", 0.5, { alpha: 1, delay: 0.0, ease: Quad.easeIn});
}

// **************************************
// **** FRAME 2 ANIMATION
// **************************************

function frame2() {
    TweenLite.to("#logo", 0.5, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#img1", 0.5, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#copy1", 0.5, { alpha: 1, delay: 0.25, ease: Quad.easeIn});
    TweenLite.to("#img2", 0.5, { alpha: 1, delay: 0.25, ease: Quad.easeIn});
}

// **************************************
// **** FRAME 3 ANIMATION
// **************************************

function frame3() {
    TweenLite.to("#copy1", 0.5, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#img2", 0.5, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#copy2", 0.5, { alpha: 1, delay: 0.25, ease: Quad.easeIn});
    TweenLite.to("#img3", 0.5, { alpha: 1, delay: 0.25, ease: Quad.easeIn});
}

// **************************************
// **** FRAME 4 ANIMATION
// **************************************

function frame4() {
    TweenLite.to("#copy2", 0.5, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#img3", 0.5, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#copy3", 0.5, { alpha: 1, delay: 0.25, ease: Quad.easeIn});
    TweenLite.to("#img4", 0.5, { alpha: 1, delay: 0.25, ease: Quad.easeIn});
}
// **************************************
// **** FRAME 5 ANIMATION
// **************************************
function frame5() {
    TweenLite.to("#copy3", 0.5, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#img4", 0.5, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#ldCTA", 0.5, { alpha: 1, delay: 0.25, ease: Quad.easeIn});
}