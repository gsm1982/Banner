'use strict';

/**
 * Run the animation functions.
 */
Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/300x50_copy1_2x.png',
    'images/300x50_copy2_2x.png',
    'images/300x50_copy3_2x.png',
    'images/300x50_cta_2x.png',
    'images/300x50_img1.jpg',
    'images/300x50_img2.jpg',
    'images/300x50_img3.jpg',
    'images/300x50_img4.jpg',
    'images/300x50_small_nbn_logo_2x.png'
  ];

  var _this = this;
  this.preloadImages(this.images, function () {
    console.log('pre load images');
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  this.copy1 = this.smartObject({
    backgroundImage: 'images/300x50_copy1_2x.png',
    retina: true,
    parent: this.banner
  });

  this.copy2 = this.smartObject({
    backgroundImage: 'images/300x50_copy2_2x.png',
    retina: true,
    parent: this.banner
  });

  this.copy3 = this.smartObject({
    backgroundImage: 'images/300x50_copy3_2x.png',
    retina: true,
    parent: this.banner
  });

  this.cta = this.smartObject({
    backgroundImage: 'images/300x50_cta_2x.png',
    retina: true,
    parent: this.banner
  });

  this.img1 = this.smartObject({
    backgroundImage: 'images/300x50_img1.jpg',
    retina: true,
    parent: this.banner
  });

  this.img2 = this.smartObject({
    backgroundImage: 'images/300x50_img2.jpg',
    retina: true,
    parent: this.banner
  });

  this.img3 = this.smartObject({
    backgroundImage: 'images/300x50_img3.jpg',
    retina: true,
    parent: this.banner
  });

  this.img4 = this.smartObject({
    backgroundImage: 'images/300x50_img4.jpg',
    retina: true,
    parent: this.banner
  });

  this.smallLogo = this.smartObject({
    backgroundImage: 'images/300x50_small_nbn_logo_2x.png',
    retina: true,
    parent:this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  
  this.copy1.set({ zIndex:'1000', autoAlpha: 0, width:'100%', height:'100%' });
  
  this.copy2.set({ zIndex:'1001', autoAlpha: 0, width:'100%', height:'100%' });
  
  this.copy3.set({ zIndex:'1002', autoAlpha: 0, width:'100%', height:'100%' });
  
  this.cta.set({ zIndex:'1003', autoAlpha: 0, width:'100%', height:'100%' });
  
  this.img1.set({ zIndex:'994', autoAlpha: 0, width:'100%', height:'100%'});
  
  this.img2.set({ zIndex:'995', autoAlpha: 0, width:'100%', height:'100%' });
  
  this.img3.set({ zIndex:'996', autoAlpha: 0, width:'100%', height:'100%' });
  
  this.img4.set({ zIndex:'997', autoAlpha: 0, width:'100%', height:'100%' });
  
  this.smallLogo.set({ zIndex:'998',autoAlpha: 0, width:'100%', height:'100%' });

};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  var _this = this;
  
    this.timeline = new TimelineLite()
    .stop()
    .to(_this.img1, 0.5, { autoAlpha: 1, ease: Quad.easeIn})
    .to(_this.smallLogo, 0.5, { autoAlpha: 1, ease: Quad.easeIn}, 0)
    .to(_this.img1, 0.5, { autoAlpha: 0, ease: Quad.easeOut}, '+=3')
    .to(_this.smallLogo, 0.5, { autoAlpha: 0, ease: Quad.easeOut}, '3.5')
    .to(_this.img2, 0.5, { autoAlpha: 1, ease: Quad.easeIn}, '-=0.25')
    .to(_this.copy1, 0.5, { autoAlpha: 1, ease: Quad.easeIn}, '-=0.25')
    .to(_this.copy1, 0.5, { autoAlpha: 0, ease: Quad.easeOut}, '6')
    .to(_this.img2, 0.5, { autoAlpha: 0, ease: Quad.easeOut}, '6')
    .to(_this.copy2, 0.5, { autoAlpha: 1, ease: Quad.easeIn}, '-=0.25')
    .to(_this.img3, 0.5, { autoAlpha: 1, ease: Quad.easeIn}, '-=0.25')
    .to(_this.copy2, 0.5, { autoAlpha: 0, ease: Quad.easeOut}, '9')
    .to(_this.img3, 0.5, { autoAlpha: 0, ease: Quad.easeOut}, '9')
    .to(_this.copy3, 0.5, { autoAlpha: 1, ease: Quad.easeIn}, '-=0.25')
    .to(_this.img4, 0.5, { autoAlpha: 1, ease: Quad.easeIn}, '-=0.25')
    .to(_this.copy3, 0.5, { autoAlpha: 0, ease: Quad.easeOut}, '12')
    .to(_this.img4, 0.5, { autoAlpha: 0, ease: Quad.easeOut}, '12')
    .to(_this.cta, 0.5, { autoAlpha: 1, ease: Quad.easeIn}, '-=0.25');           
};