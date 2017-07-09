/**
 * Created by jakub on 08/07/2017.
 */


function resizeSection() {
   // var dpi = window.devicePixelRatio;

    var userAgent = null;


    if (navigator.userAgent.match(/(iPhone|iPod)/i)) {
        userAgent = 'device-ios';
        $('#navbar')
            .removeClass('navbar-toggleable-md')
            .addClass('navbar-toggleable-lg');

       document.body.style.fontSize = '4vw';


    }
    else if (navigator.userAgent.match(/android/i)){
        userAgent = 'device-android';
        //chrome
        $('#navbar')
            .removeClass('navbar-toggleable-md')
            .addClass('navbar-toggleable-lg');

        document.body.style.fontSize = '4vw';

    }
    else{
        userAgent = 'desktop';
        $('#navbar')
            .removeClass('navbar-toggleable-md')
            .addClass('navbar-toggleable');
        $('#navbar-brand').addClass('hidden-sm-up');
    }

    //$('.results').html('dpi: ' + dpi + ' window:' + $(window).width() + 'uA: ' +userAgent);
}

window.onload = resizeSection();
