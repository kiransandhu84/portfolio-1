var designObj = null;

$('document').ready(function(){
    designObj = new myDesign(); 
});

function myDesign()
{
    this.init();
}

myDesign.prototype.init = function()
{
    this.startAnimate();
    this.registerAnimation();
};

myDesign.prototype.startAnimate = function()
{
    $('.name').textillate({ 
        "in": { 
                effect: 'bounce'
              } 
    });
    
    $('.skills').textillate({ 
        "in": { 
                effect: 'bounceInLeft' 
              }
    });
};

myDesign.prototype.registerAnimation = function()
{
    var isAnimEventTrigged = false;
    var _selfObj = this; 
    
    $('.page-scroll a').unbind('mouseenter').bind('mouseenter', function(){
       _selfObj.setAnimationType({el: this, animType: 'tada'});
    });
    
    $('.list-inline li').unbind('mouseenter').bind('mouseenter', function(){
        _selfObj.setAnimationType({el: this, animType: 'rubberBand'});
     });
};

myDesign.prototype.setAnimationType = function(options)
{
    var animationProps = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    if(options)
    {
        $(options.el).addClass(options.animType + ' animated').one(animationProps, function(){
            $(options.el).removeClass(options.animType + " animated");
        }); 
    }
};