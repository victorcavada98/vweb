$(function() {

    // Call Gridder
    $('.gridder').gridderExpander({
        scroll: true,
        scrollOffset: 30,
        scrollTo: "panel",                  // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: true,                      // Show Navigation
        nextText: "Next",                   // Next button text
        prevText: "Previous",               // Previous button text
        closeText: "Close",                 // Close button text
        onStart: function(){
            //Gridder Inititialized
        },
        onContent: function(){
            //Gridder Content Loaded
        },
        onClosed: function(){
            //Gridder Closed
        }
    });

});


$('.cd-slider-nav li').on('click', function(event){
    event.preventDefault();
    var selectedItem = $(this);
    if(!selectedItem.hasClass('selected')) {
        // if it's not already selected
        var selectedPosition = selectedItem.index(),
            activePosition = $('.cd-hero-slider .selected').index();
        if( activePosition < selectedPosition) {
            nextSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
        } else {
            prevSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
        }
        
        updateNavigationMarker(selectedPosition+1);
    }
});