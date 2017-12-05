var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function init() {
    canvas = document.getElementById("canvas");
    //document.getElementById("preloader").style.display = "block";
    prepareAssets();
}

function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.LogoAnimation();
	stage = new lib.Stage(canvas);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(false,'both',false,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

function prepareAssets() {

    ctaHotSopt = document.getElementById("ctaHotSopt");

    TweenLite.set("#frame1", { autoAlpha: 1 });
    TweenLite.set("#frame2", { autoAlpha: 1 });
    TweenLite.set("#frame3", { autoAlpha: 1 });
	TweenLite.set("#frame4", { autoAlpha: 1 });
	TweenLite.set("#logo", { autoAlpha: 1 });
    adVisibilityHandler();
}

//Set All Elements
function adVisibilityHandler() {

    TweenLite.delayedCall(0.5, frame1);
    TweenLite.delayedCall(3.8, frame2);
    TweenLite.delayedCall(7.8, frame3);
    TweenLite.delayedCall(11.7, frame4);
    TweenLite.delayedCall(12, animateLogo)
}

// **************************************
// **** FRAME 1 ANIMATION
// **************************************

function frame1() {
    // TweenLite.to("#img1", 0.0, { alpha: 1, delay: 0.0, ease: Quad.easeIn});
    TweenLite.to("#copy1", 0.6, { alpha: 1, delay: 0.0, ease: Quad.easeIn});
}

// **************************************
// **** FRAME 2 ANIMATION
// **************************************

function frame2() {
    TweenLite.to("#img1", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#copy1", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#img2", 0.6, { alpha: 1, delay: 0.3, ease: Quad.easeIn});
    TweenLite.to("#copy2", 0.6, { alpha: 1, delay: 0.9, ease: Quad.easeIn});
}

// **************************************
// **** FRAME 3 ANIMATION
// **************************************

function frame3() {
    TweenLite.to("#img2", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#copy2", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
    TweenLite.to("#img3", 0.6, { alpha: 1, delay: 0.3, ease: Quad.easeIn});
    TweenLite.to("#copy3", 0.6, { alpha: 1, delay: 0.9, ease: Quad.easeIn});
}

// **************************************
// **** FRAME 4 ANIMATION
// **************************************
function frame4() {
    TweenLite.to("#img3", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
	TweenLite.to("#copy3", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeOut});
	TweenLite.to("#logo", 0.6, { alpha: 0, delay: 0.0, ease: Quad.easeIn});
    TweenLite.to("#img4", 0.6, { alpha: 1, delay: 0.3, ease: Quad.easeIn});
}

function animateLogo() {
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("19067B42499B4B3B88FC0E0EBF6A49BB");
	var lib=comp.getLibrary();
	handleComplete({},comp);
}