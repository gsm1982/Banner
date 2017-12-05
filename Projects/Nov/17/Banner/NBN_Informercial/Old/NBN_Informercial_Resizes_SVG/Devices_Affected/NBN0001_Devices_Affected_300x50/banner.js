var canvas;

function init() {
    //document.getElementById("preloader").style.display = "block";
    prepareAssets();
    
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#133c7d";
    ctx.fillRect(0, 0, 300, 50);
    c.style.opacity=0;
}

function prepareAssets() {

    ctaHotSopt = document.getElementById("ctaHotSopt");

    TweenLite.set("#frame1", { autoAlpha: 1 });
    TweenLite.set("#frame2", { autoAlpha: 1 });
    TweenLite.set("#frame3", { autoAlpha: 1 });
    TweenLite.set("#logo", { autoAlpha: 1 });
    adVisibilityHandler();
}

//Set All Elements
function adVisibilityHandler() {

    TweenLite.delayedCall(2, frame1);
    TweenLite.delayedCall(5, frame2);
    TweenLite.delayedCall(8, frame3);
}

// **************************************
// **** FRAME 1 ANIMATION
// **************************************

function frame1() {
    TweenLite.to("#logo", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeIn});
    TweenLite.to("#copy1", 0.6, { alpha: 1, delay: 0.6, ease: Quad.easeIn});
}

// **************************************
// **** FRAME 2 ANIMATION
// **************************************

function frame2() {
    TweenLite.to("#copy1, #img1", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeIn});
    TweenLite.to("#copy2", 0.6, { alpha: 1, delay: 0.6, ease: Quad.easeIn});
    TweenLite.to("canvas" , 0.6 , {delay:0.4, opacity:1, ease:Quad.easeIn})
}

// **************************************
// **** FRAME 3 ANIMATION
// **************************************

function frame3() {
    TweenLite.to("#copy2", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeIn});
    TweenLite.to("#copy3", 0.6, { alpha: 1, delay: 0.6, ease: Quad.easeIn});
}