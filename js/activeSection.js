/**
 * Created by jakub on 05.07.17.
 */
function showActiveSection(){

    //focus is for desktop sites and the html insert for mobile

    var activeSection = " ";
    var verticalScrollHeight = parseInt( $(window).scrollTop());

    var introSectionHeight = $('#intro').height();
    var projectsSectionHeight = $('#projects').height() + introSectionHeight;
    var contactSectionHeight = $('#contact').height() + projectsSectionHeight;

    if (verticalScrollHeight <= introSectionHeight) {

        activeSection = 'Home';
        $('#home-link').focus();
        $('.active-section').html(activeSection);
    }
    else if (verticalScrollHeight > introSectionHeight
        && verticalScrollHeight <= projectsSectionHeight) {

        $('#projects-link').focus();
        activeSection = 'Projects';
        $('.active-section').html(activeSection);
    }
    else if (verticalScrollHeight > projectsSectionHeight
        && verticalScrollHeight <= contactSectionHeight) {

        $('#contact-link').focus();
        activeSection = 'Contact';
        $('.active-section').html(activeSection);
    }

}

window.onload = showActiveSection();