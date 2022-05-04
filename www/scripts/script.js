$(document).ready(function() {

  let link = $('.j-btn');

//   link.mouseover(function(){
//       $('.promo-navi').show();
//   })
//   link.mouseout(function(){
//       $('.promo-navi').hide();
//   })

  link.click(function(){
      $('.promo-navi').slideToggle()
  })


  $('.promo-menu').click( function(){
        $('.j-promo-cont').slideToggle()
  })

    $('.slider-pic').slick({
        arrows:true,
        adaptiveHeight:true,
        pauseOnFocus:false,
        pauseOnHover:false,
        autoplay:true,
        responsive:[
          {
            breakpoint:768,
            setting:{
              arrows:false,
              pauseOnFocus:true,
              pauseOnHover:true,
            }

          }
        ]
    });

   
});