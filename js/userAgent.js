/**
 * Created by jakub on 08/07/2017.
 */


function resizeSection() {
    var dpi = window.devicePixelRatio;

    var userAgent = null;

    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
        userAgent = 'device-ios';
    }
    else if (navigator.userAgent.match(/android/i)){
        userAgent = 'device-android';
    }
    else{

        $('#navbar').removeClass('navbar-toggleable-md').addClass('navbar-toggleable');
        $('#navbar-brand').addClass('hidden-sm-up');

        userAgent = 'desktop';
    }

    $('.results').html('dpi: ' + dpi + ' window:' + $(window).width() + 'uA: ' +userAgent);
}

window.onload = resizeSection();
