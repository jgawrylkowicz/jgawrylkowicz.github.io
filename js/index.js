/**
 * Jakub Gawrylkowicz 09/07/17
 */


AOS.init({
  disable: 'mobile',
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
  once: true
});

var imageOffset = 400;

$("#projects-link").on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: ($("#projects").offset().top + imageOffset)
  }, 750, 'easeOutQuad');
});

$("#contact-link").on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: ($("#contact").offset().top + imageOffset)
  }, 750, 'easeOutQuad');
});

$("#intro-link").on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: ($("#intro").offset().top + imageOffset)
  }, 750, 'easeOutQuad');
});


$(window).scroll(function() {
  if ($("#navbar").offset().top < 50) {
    $("#navbar").addClass("transparent");
  } else {
    $("#navbar").removeClass("transparent");
  }
});

$(window).scroll(function() {
  var element = $( ".active" );
  if (element){
    if (element.attr('id') === "projects-link"){
      $('.active-section').html("Projects");
    }else if (element.attr('id') === "contact-link"){
      $('.active-section').html("Contact");
    }else {
      $('.active-section').html("Home");
    }
  }
});


var images = [
  "./img/spotter/6.png",
  "./img/spotter/5.png",
  "./img/spotter/3.png",
  "./img/spotter/4.png"
];

function preloadImages() {
  var i = 0;
  for (let image of images) {
    imageObj = new Image();
    imageObj.src = images[i++]
  }
}

function changeImage(index) {
  $('#phone-display').css("background-image", "url(" + images[index] + ")");
}

$('#link1').click(function() {
  changeImage(0);
});
$('#link2').click(function() {
  changeImage(1);
});
$('#link3').click(function() {
  changeImage(2);
});
$('#link4').click(function() {
  changeImage(3);
});

window.onload = preloadImages();
