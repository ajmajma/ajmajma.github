window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        $('.mobile-nav-header').addClass("removeBg");
       $('.mobile-nav-top').find(".navbar-brand").slideUp();
    }
    else {
        $('.mobile-nav-header').removeClass("removeBg");
         $('.mobile-nav-top').find(".navbar-brand").slideDown();
    }
},false); 

$('.hamburg').on('click touchend', function(e) {
  e.stopImmediatePropagation();
            e.preventDefault();
  
  if($(this).hasClass("cross")){
 $(this).removeClass ("cross");
    $(".mobile-nav-ul").slideUp();

  }else{
    $(this).addClass("cross");
    $(".mobile-nav-ul").slideDown();
  }
  

});
