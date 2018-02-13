$(document).ready(function(){
    // initialize pushpin
    $('.target').pushpin({
        top: 0,
        bottom: 1000,
        offset: 0
    });
    // side-bar
    $(".button-collapse").sideNav();
    // form field initializations
    $('select').material_select();
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    // smooth scroll!
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// run pushpin
$('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    console.log($target);
    $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
});

// feature discovery
$('.tap-target').tapTarget('open');
$('.tap-target').tapTarget('close');

// modals
$('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .25, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            // alert("Ready");
            console.log(modal, trigger);
        },
        complete: function() {
            // alert('Closed');
        } // Callback for Modal close
    }
);

// form fields
$('#textarea1').val('Please write your message here.');
$('#textarea1').trigger('autoresize');


