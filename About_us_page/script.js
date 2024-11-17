$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4, // Number of items to display
        loop: true, // Loop the carousel
        margin: 20, // Space between items (newly added)
        autoplay: true, // Enable autoplay
        autoplayTimeout: 3000, // Time between transitions
        autoplayHoverPause: true, // Pause on mouse hover
        nav : false,
        dots : false,
        responsive: {
            0: {
                items: 1, // Items for mobile view
                margin: 10 // Space between items for mobile view
            },
            600: {
                items: 1, // Items for tablet view
                margin: 15 // Space between items for tablet view
            },
            1000: {
                items: 1, // Items for desktop view
                margin: 20 // Space between items for desktop view
            }
        }
    });
});