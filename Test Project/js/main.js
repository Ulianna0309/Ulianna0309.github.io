

 $(document).ready(function(){
    $('.about-slider').slick({
        arrows:true, 
        dots:true, 
        dotsClass: "my-dots",
        slidesToShow:3, 
        autoplay:true, 
    });
});
$('.slider-prev').on('click', function() {
  $('.slider-win').slick('slickPrev');
});
$('.slider-next').on('click', function() {
  $('.slider-win').slick('slickNext');
});


 $(document).ready(function(){
    $('.news-right').slick({
        arrows:true, 
        dots:true, 
        dotsClass: "my-dotss",
        slidesToShow:1, 
        autoplay:true, 
    });
});
$('.slider-prev').on('click', function() {
  $('.slider-win').slick('slickPrev');
});
$('.slider-next').on('click', function() {
  $('.slider-win').slick('slickNext');
});


$(document).ready(function() {

    var $menu = $("#my-menu").mmenu();

    var $icon = $("#mmenu-icon");

    var API = $menu.data( "mmenu" );


    $icon.on( "click", function() {

        API.open();

    });


    API.bind( "opened", function() {

       setTimeout(function() {

          $icon.addClass( "is-active" );

       }, 100);

       $icon.on( "click", function() {

          API.close();

       });

   });

   API.bind( "closed", function() {

      setTimeout(function() {

         $icon.removeClass( "is-active" );

      }, 100);

      $icon.on( "click", function() {

         API.open();

      });

   });

});



