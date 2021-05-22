$(document).ready(function(){

    // Dropdown Hover Effect

    $('.dropdown-one').hover(function(){
          $('.drop-ul-one').css("display", "block");
        }, function(){
          $('.drop-ul-one').css("display", "none");
    });

    $('.dropdown-two').hover(function(){
          $('.drop-ul-two').css("display", "block");
        }, function(){
          $('.drop-ul-two').css("display", "none");
    });

      // Product Slider

      $('.slider').slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
          autoplay: false,

          //If width is less than 768px, then only one slide will be showed at a time

          responsive: [
            {
                breakpoint: 768,
                settings: 
                {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: 
                {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
            },
            {
              breakpoint: 1200,
              settings: 
              {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
              
          ]

      });

      //Product Card Hover Effect

      $('.card').hover(function(){

             $(this).find("h3").css("color", "rgb(255, 166, 0)");
             $(this).find("h5").css("color", "rgb(255, 166, 0)");
             $(this).find("button").css("background-color", "rgb(255, 166, 0)");

         }, function(){

            $(this).find("h3").css("color", "rgb(43, 157, 165)");
            $(this).find("h5").css("color", "rgb(43, 157, 165)");
            $(this).find("button").css("background-color", "rgb(43, 157, 165)");
            
         });
  
});
