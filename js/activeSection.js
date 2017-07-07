/**
 * Created by jakub on 05.07.17.
 */
function showActiveSection(){

    var activeSection = " ";
    var fadeSpeed = 300;
    var verticalScrollHeight = parseInt( $(window).scrollTop());

    var introSectionHeight = $('#intro').height();
    var projectsSectionHeight = $('#projects').height() + introSectionHeight;
    var contactSectionHeight = $('#contact').height() + projectsSectionHeight;

    if (verticalScrollHeight <= introSectionHeight) {
        activeSection = 'Home';
        $('.active-section').html(activeSection);
    }
    else if (verticalScrollHeight > introSectionHeight
        && verticalScrollHeight <= projectsSectionHeight) {
        activeSection = 'Projects';
        $('.active-section').html(activeSection);
    }
    else if (verticalScrollHeight > projectsSectionHeight
        && verticalScrollHeight <= contactSectionHeight) {
        activeSection = 'Contact';
        $('.active-section').html(activeSection);
    }


    //TODO fade in and fade out

    /*function changeTo(value) {

     if (value === activeSection || activeSection === null) {

     $('.active-section').fadeOut(fadeSpeed, function () {
     $('.active-section').html(value);
     $('.active-section').fadeIn(fadeSpeed);
     });
     }
     }

     */

}

window.onload = showActiveSection();