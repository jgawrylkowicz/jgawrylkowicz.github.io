
var images = [
  "./img/spotter/6.png",
  "./img/spotter/5.png",
  "./img/spotter/3.png",
  "./img/spotter/4.png"
];

function preloadImages() {

  imageObj = new Image();

  var i=0;
  for (let image of images){
    imageObj.src = images[i++]
  }
}


function changeImage(index) {
   $('#phone-display').css("background-image", "url(" + images[index] + ")");
}

$('#link1').click(function(){
    changeImage(0);
});
$('#link2').click(function(){
    changeImage(1);
});
$('#link3').click(function(){
    changeImage(2);
});
$('#link4').click(function(){
    changeImage(3);
});

window.onload = preloadImages();
