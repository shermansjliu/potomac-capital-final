
$(function(){
    var scroll = new SmoothScroll('a[href*="#"]', {


	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)
	topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"

	// Speed & Easing
	speed: 1500, // Integer. How fast to complete the scroll in milliseconds
	clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page

	easing: 'easeInOutQuint', // Easing pattern to use


	// History
	updateURL: true, // Update the URL on scroll
	popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)

	// Custom Events
	emitEvents: true // Emit custom events

});
})


$( '.new-button').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1500);
});

 document.onload = $(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $('#nav-override').addClass('nav-active')
            $('#navbarNav a').css('color','black')
            $('.nav-item').addClass('special');
            $('#logo').css('color','gray')

        }else if($(this).scrollTop() < 50){
            $('#nav-override').removeClass('nav-active')
            $('#navbarNav a').css('color','white')
            $('.nav-item').removeClass('special');
            $('#logo').css('color','white')
        }
    })
})
$('.container img').hover(function(){
    switchImg($(this))

},
                          function(){
    switchImg($(this))
})
function switchImg(image){
    var originalSource = image.attr('src');
    var newSource = image.data('alt-src');
    image.data('alt-src',originalSource);
    image.attr('src', newSource);

}
