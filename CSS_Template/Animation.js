function Animation(TweenType){   // Animation class begins
    
    /*console.log("Aniamtion class");*/
   
    this.$tE = TweenType;
    
    
     /*Fade functions*/
    this.FadeIn = function(id, speed, delay, easing, alpha){
        /*console.log("Id : "+id);*/
        this.id = id; 
        this.speed = (typeof speed !== 'undefined' ? speed : 1);
        this.delay = (typeof delay !== 'undefined' ? delay : 0);
        this.ease = (typeof easing !== 'undefined' ? easing : Cubic.easeInOut);
        this.alpha = (typeof alpha !== 'undefined' ? alpha : 1);
        
       $tE.to(this.id, this.speed,{delay:this.delay, alpha:this.alpha, /*opacity:this.alpha,*/ ease:this.ease, overwrite:false});
        

    };
    
    this.FadeOut = function(id, speed, delay, easing, alpha){
        /*console.log("Id : "+id);*/
        this.id = id; 
        this.speed = (typeof speed !== 'undefined' ? speed : 1);
        this.delay = (typeof delay !== 'undefined' ? delay : 0);
        this.ease = (typeof easing !== 'undefined' ? easing : Cubic.easeInOut);
        this.alpha = (typeof alpha !== 'undefined' ? alpha : 0);
        
       $tE.to(this.id, this.speed,{delay:this.delay, alpha:this.alpha, /*opacity:this.alpha,*/ ease:this.ease, overwrite:false});
        
    };
    
    
    /*Scle functions */
    this.ScaleIn = function(id, speed, delay, easing, scaling){
        
        this.id = id; 
        this.speed = (typeof speed !== 'undefined' ? speed : 1);
        this.delay = (typeof delay !== 'undefined' ? delay : 0);
        this.ease = (typeof easing !== 'undefined' ? easing : Cubic.easeInOut);
        this.scaling = (typeof scaling !== 'undefined' ? scaling : 1);
        
        $tE.to(this.id, this.speed,{delay:this.delay, x:id.x, y:id.y, scaleX:this.scaling, scaleY:this.scaling, /*regX:0, regY:0,*/ alpha:1, /*opacity:0,*/ ease:this.ease, overwrite:false});
    };
    
     this.ScaleOut = function(id, speed, delay, easing, scaling){
         /*s*/
        this.id = id; 
        this.speed = (typeof speed !== 'undefined' ? speed : 1);
        this.delay = (typeof delay !== 'undefined' ? delay : 0);
        this.ease = (typeof easing !== 'undefined' ? easing : Cubic.easeInOut);
        this.scaling = (typeof scaling !== 'undefined' ? scaling : 0);
         
       $tE.to(this.id, this.speed,{delay:this.delay, x:id.image.width/2, y:id.image.height/2, scaleX:this.scaling, scaleY:this.scaling, /*regX:0, regY:0,*/ alpha:0, /*opacity:0,*/ ease:this.ease, overwrite:false});

    };
     
     
    /*Slide functions*/
    this.SlideX = function(id, speed, delay, easing, xPos){
        
        this.id = id; 
        this.speed = (typeof speed !== 'undefined' ? speed : 1);
        this.delay = (typeof delay !== 'undefined' ? delay : 0);
        this.ease = (typeof easing !== 'undefined' ? easing : Cubic.easeInOut);
        this.xPos = (typeof xPos !== 'undefined' ? xPos : 0);
        
      $tE.to(this.id, this.speed,{delay:this.delay, x:this.xPos, alpha:1, /*opacity:0,*/ ease:this.ease, overwrite:false});
        

    };
    
    this.SlideY = function(id, speed, delay, easing, yPos){
        
        this.id = id; 
        this.speed = (typeof speed !== 'undefined' ? speed : 1);
        this.delay = (typeof delay !== 'undefined' ? delay : 0);
        this.ease = (typeof easing !== 'undefined' ? easing : Cubic.easeInOut);
        this.yPos = (typeof yPos !== 'undefined' ? yPos : 0);
        
        $tE.to(this.id, this.speed,{delay:this.delay, y:this.yPos, alpha:1, /*opacity:0,*/ ease:this.ease, overwrite:false});

    };
    
    /*Rotation functions*/
    this.RotationCenter = function(id, speed, delay, easing, angle){
        
        this.id = id; 
        this.speed = (typeof speed !== 'undefined' ? speed : 1);
        this.delay = (typeof delay !== 'undefined' ? delay : 0);
        this.ease = (typeof easing !== 'undefined' ? easing : Cubic.easeInOut);
        this.angle = (typeof angle !== 'undefined' ? angle : 0);
        
        $tE.to(this.id, this.speed,{delay:this.delay, rotation:this.angle, /*transformOrigin:"center center",*/ alpha:1, /*opacity:0,*/ ease:this.ease, overwrite:false});
        
    };
    
    this.RotationX = function(id, speed, delay, easing, angle){
        
        this.id = id; 
        this.speed = (typeof speed !== 'undefined' ? speed : 1);
        this.delay = (typeof delay !== 'undefined' ? delay : 0);
        this.ease = (typeof easing !== 'undefined' ? easing : Cubic.easeInOut);
        this.angle = (typeof angle !== 'undefined' ? angle : 0);
        
       $tE.to(this.id, this.speed,{delay:this.delay, rotationX:this.angle, alpha:1, /*opacity:0,*/ ease:this.ease, overwrite:false});
        
    };
    
    this.RotationY = function(id, speed, delay, easing, angle){
        
        this.id = id; 
        this.speed = (typeof speed !== 'undefined' ? speed : 1);
        this.delay = (typeof delay !== 'undefined' ? delay : 0);
        this.ease = (typeof easing !== 'undefined' ? easing : Cubic.easeInOut);
        this.angle = (typeof angle !== 'undefined' ? angle : 0);
        
        $tE.to(this.id, this.speed,{delay:this.delay, rotationY:this.angle, alpha:1, /*opacity:0,*/ ease:this.ease, overwrite:false});
        
    };
    
    

}//Animation Class ends 
