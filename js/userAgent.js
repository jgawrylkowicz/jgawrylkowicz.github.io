/**
 * Created by Jakub Gawrylkowicz on 08/07/2017.

 * Specifies different behavior for different clients. Even with resposive design some small changes need to be made
 * in order to have the equal browsing experinece across all platforms.
 *
 * For mobile devices the fontsize needs to be dependent on the width of the client.
 *
 * For desktop devices (and also tablets and laptops) some classes responisible for breakepoints or view width need
 * to be adressed.
 */
function resizeSection() {

    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
       document.body.style.fontSize = '4vw';
    }
    else if (navigator.userAgent.match(/android/i)){
        document.body.style.fontSize = '4vw';
    }
    else{
        $('#navbar').removeClass('navbar-toggleable-lg').addClass('navbar-toggleable');
        $('#navbar-brand').addClass('hidden-sm-up');
        $('.section').css('padding-top', '7.5%');

    }
}

window.onload = resizeSection();
