$(document).ready(function(){
  $('.home-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    // prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/img/right_arrow.png'>",
    // nextArrow:"<img class='a-right control-c next slick-next' src='assets/img/left_arrow.png'>"
  });

  $(".slider_testimonial_sec").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $(".slide_controls_1 .slide-prev"),
    nextArrow: $(".slide_controls_1 .slide-next"),

      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });


  // $('body').on('click', 'form[action="/cart/add"] button[name="add"]', function(e){
  //   e.preventDefault();
  //   var id = $(this).parents('form').find('input[name="id"]').val();
  //   var quan = $(this).parents('product-info').find('input[name="quantity"]').val();
  //   $.ajax({
  //     type: 'POST',
  //     url: '/cart/add.js',
  //     data: {
  //       quantity: quan,
  //       id: id
  //     },
  //     dataType: 'json', 
  //     success: function (data) { 
  //       window.location.replace('/cart');
  //     } 
  //   }); 
  // });
  
});

$('.multiple-items').slick({
  infinite: true,

});
