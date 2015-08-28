/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('#old a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.intro-text').mouseenter(function () {
    $(this).css('background-color', 'rgba(0, 0, 0, 0.3)');
}).mouseleave(function () {
    $(this).css('background-color', 'rgba(0, 0, 0, 0.6)');
});

$('#academy-summary').click(function () {
    $(this).removeClass('col-lg-6');
    $(this).find('.intro-text p').removeClass('hidden');
    $('.cd-close').removeClass('hidden');
    $('#coach-summary').addClass('hidden');
});

$('#coach-summary').click(function () {
    $(this).removeClass('col-lg-6');
    $(this).find('.intro-text p').removeClass('hidden');
    $('.cd-close').removeClass('hidden');
    $('#academy-summary').addClass('hidden');
});

$('.cd-close').click(function(){
    $('#coach-summary').removeClass('hidden').removeClass('col-lg-12').addClass('col-lg-6');
    $('#academy-summary').removeClass('hidden').removeClass('col-lg-12').addClass('col-lg-6');
    $('.intro-text p').addClass('hidden');
    $(this).addClass('hidden');
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});


$('.navbar-nav li').click(function(){
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
});