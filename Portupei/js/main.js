$('.photo-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToScroll: 7,
  speed: 500,
  variableWidth: true
});

$(function () {
	$('.catalog-card__price-btn').click(function(){
	$('#modal').addClass('show');
	});
	$('.modal-close').click(function() {
		$('#modal').removeClass('show')
	});
});

