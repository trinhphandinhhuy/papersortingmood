$(document).ready(function() {
  $('.brand-heading').addClass('animated fadeInDown');
  $('.intro-text').addClass('animated fadeInDown');
  $('.btn-circle-play').addClass('animated fadeInUp');
  $('.settings').addClass('animated fadeInUp');
});

$(document).ready(function() {
  if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Close navbar button when item clicked
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Prevent scrolling to the top
$('.btn-circle-play').click(function(e){
    return false;
    e.preventDefault();
});

$('.btn-circle-other').click(function(e){
    return false;
    e.preventDefault();
});
//

//Animation from bugger to x
$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});
//End animation

//Show player menu when click
$(document).ready(function () {
			  $(".btn-circle-play").on("click", function () {
          $(".btn-circle-other").css('opacity', '1');
          //$(".btn-circle-other").addClass('animated fadeInUp');
          //$(".previous").addClass('animated fadeInLeft');
          //$(".next").addClass('animated fadeInRight');

          //$(this).toggleClass("active");
          $(this).find('i').toggleClass('fa-play fa-pause');
          $(this).find('i').toggleClass('play pause');
          $(this).toggleClass('pause');
			  });
		});
//End show player menu


//Textarea focus animation
$(document).ready(function() {
  $("#message").focus(function(){
    $("#songName").css('opacity', '1');
    //$("#songName").addClass('animated bounceInUp')
    $(this).attr('placeholder', null);
    //$(this).attr('placeholder').hide();
  }).focusout(function(){
    $("#songName").css('opacity', '0');
    $(this).attr('placeholder', 'Name of the song');
  });
});
//End textarea focus
//ajax
$(document).ready(function(){

$('#submit').click(function(e){
  e.preventDefault();
$.post("php/contact_form.php", $("#contact_form").serialize(),  function(response) {
  $('#noti_message').html(response);
  $("#contact_form").trigger('reset');
  //$('#message').val('');
  $('#myModal').modal('show');
});

//return false;


});

});
