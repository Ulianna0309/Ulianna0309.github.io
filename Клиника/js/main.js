
jQuery(document).ready(function(){
    $(".header_item").hover(
        function() { $('.drop-menu', this).fadeIn("fast");
        },
        function() { $('.drop-menu', this).fadeOut("fast");
    });
});
jQuery(document).ready(function(){
    $(".drop-menu__item").hover(
        function() { $('.dropright-menu', this).fadeIn("fast");
        },
        function() { $('.dropright-menu', this).fadeOut("fast");
    });
});



$('.banner__slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  variableWidth: true
});