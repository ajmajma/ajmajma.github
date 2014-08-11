    // Loader
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
//CANVAS
$(function(){
  var canvas = document.querySelector('.techNew'),
      ctx = canvas.getContext('2d'),
      color = '#66BEA2';
  canvas.width = $('.tester').width();
  canvas.height = $('.tester').height();
  canvas.style.display = 'block';
  ctx.fillStyle = color;
  ctx.lineWidth = .1;
  ctx.strokeStyle = color;

  var mousePosition = {
    x: 30 * canvas.width / 100,
    y: 30 * canvas.height / 100
  };

  var dots = {
    nb: 50,
    distance: 250,
    d_radius: 200,
    array: []
  };

  function Dot(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = -.5 + Math.random();
    this.vy = -.5 + Math.random();

    this.radius = Math.random();
  }

  Dot.prototype = {
    create: function(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    },

    animate: function(){
      for(i = 0; i < dots.nb; i++){

        var dot = dots.array[i];

        if(dot.y < 0 || dot.y > canvas.height){
          dot.vx = dot.vx;
          dot.vy = - dot.vy;
        }
        else if(dot.x < 0 || dot.x > canvas.width){
          dot.vx = - dot.vx;
          dot.vy = dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    },

    line: function(){
      for(i = 0; i < dots.nb; i++){
        for(j = 0; j < dots.nb; j++){
          i_dot = dots.array[i];
          j_dot = dots.array[j];

          if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
            if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
              ctx.beginPath();
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    }
  };

  function createDots(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(i = 0; i < dots.nb; i++){
      dots.array.push(new Dot());
      dot = dots.array[i];

      dot.create();
    }

    dot.line();
    dot.animate();
  }

  setInterval(createDots, 1000/30); 
});