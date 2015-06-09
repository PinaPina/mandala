window.onload =function() {


doResize();

  $( window ).resize(function() {
      doResize();
  });

function doResize(){
	x = $(window).height();
	      $('section').css("min-height", x);
	      $('.srod').css("min-height", x);
	      	      $('.diabel').css("min-height", x);
	      	      	      	      $('.chlopek').css("min-height", x);

	    $('.babka').css("min-height", x);
	    $('.dziadek').css("min-height", x);
	    $('.domek').css("min-height", x);
}


}