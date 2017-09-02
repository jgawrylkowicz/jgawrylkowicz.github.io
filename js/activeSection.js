/**
 * Jakub Gawrylkowicz 09/07/17
 */

//TODO could use some rewriting

$("#projects-link").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 750, 'easeOutQuad');
});

$("#contact-link").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 750, 'easeOutQuad');
});

$("#intro-link").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 750, 'easeOutQuad');
});

function init(){
    showActiveSection();
}


function showActiveSection(){

    var activeSection;
    var verticalScrollHeight = parseInt( $(window).scrollTop());

    var introSectionHeight = $('#intro').height();
    var projectsSectionHeight = $('#projects').height() + introSectionHeight;
    var contactSectionHeight = $('#contact').height() + projectsSectionHeight;


    if (verticalScrollHeight > introSectionHeight
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
    else{
        activeSection = 'Home';
        $('#intro-link').focus();
        $('.active-section').html(activeSection);
    }

}


window.onload = init();
window.onload = showActiveSection();
