 // Page loader
    //---------------------------------------------
    
    $(window).load(function(){
        $(".page-loader b").stop(true).delay(100).fadeOut();
        $(".page-loader").stop(true).delay(400).fadeOut("slow");
    });
    
    

window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        $('.mobile-nav-header').addClass("removeBg");
        $('.mobile-nav-top').find(".navbar-brand").removeClass("fadeInDown")
         $('.mobile-nav-top').find(".navbar-brand").addClass("fadeOutUp")


    }
    else {
        $('.mobile-nav-header').removeClass("removeBg");
         $('.mobile-nav-top').find(".navbar-brand").addClass("fadeInDown")
         $('.mobile-nav-top').find(".navbar-brand").removeClass("fadeOutUp")

    }

},false); 

$('.hamburg').on('click touchend', function(e) {
  e.stopImmediatePropagation();
            e.preventDefault();
  
  if($(this).hasClass("cross")){
    $(this).removeClass ("cross");
    $(".mobile-nav-ul").slideUp();
    $(".shader-bg").removeClass("showFade");


  }else{
    $(this).addClass("cross");
    $(".mobile-nav-ul").slideDown();
    $(".shader-bg").addClass("showFade");
  }
  

});
