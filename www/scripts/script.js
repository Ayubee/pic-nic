$(document).ready(function() {

  let link = $('.j-btn');

  link.mouseover(function(){
      $('.promo-navi').show();
  })
  link.mouseout(function(){
      $('.promo-navi').hide();
  })

    $('.slider-pic').slick({
        arrows:true,
        adaptiveHeight:true,
        pauseOnFocus:false,
        pauseOnHover:false,
        autoplay:true,
    });

   
});