/**
 * Created by Jakub Gawrylkowicz on 08/07/2017.

 * Specifies different behavior for different clients. Even with responsive design some small changes need to be made
 * in order to have the equal browsing experience across all platforms.
 *
 * For mobile devices the font size needs to be dependent on the width of the client.
 *
 * For desktop devices (and also tablets and laptops) some classes responsible for breakpoints or view width need
 * to be addressed.
 */
function resizeSection() {

    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
       document.body.style.fontSize = '4vw';
    }
    else if (navigator.userAgent.match(/android/i)){
        document.body.style.fontSize = '4vw';
    }

}

window.onload = resizeSection();
