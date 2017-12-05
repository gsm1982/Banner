function init() {
    prepareAssets();
}

function prepareAssets() {
    TweenMax.set("#frame1",{autoAlpha:1});
    TweenMax.set("#frame2",{autoAlpha:1});
    TweenMax.set("#frame3",{autoAlpha:1});
    
    adVisibilityHandler();
}

//Set All Elements
function adVisibilityHandler() {

    TweenMax.delayedCall(2, frame1);
    TweenMax.delayedCall(5, frame2);
    TweenMax.delayedCall(8, frame3)
}

// **************************************
// **** FRAME 1 ANIMATION
// **************************************

function frame1(){
    TweenLite.to("#logo", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeIn});
    TweenLite.to("#copy1", 0.6, { alpha: 1, delay: 0.6, ease: Quad.easeIn});
}

// *************************************
// **** FRAME 2 ANIMATION
// **************************************

function frame2() {
    TweenMax.to("#copy1", 0.6 ,{alpha:0, ease:Quad.easeOut});
    TweenMax.to("#ctaCopy1", 0.6 ,{opacity:1, delay:0.6, ease:Quad.easeIn});
    TweenMax.to("#ctaBg", 0.6 ,{opacity:1, delay:0.6, ease:Quad.easeIn});
    
}
// **************************************
// **** FRAME 3 ANIMATION
// **************************************

function frame3() {
	TweenMax.to("#ctaCopy1", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenMax.to("#ctaCopy2", 0.6, { alpha: 1, delay: 0.6, ease: Quad.easeIn});
}



