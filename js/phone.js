
var images = [
  "./img/spotter/7.png",
  "./img/spotter/6.png",
  "./img/spotter/3.png",
  "./img/spotter/4.png"
];

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
