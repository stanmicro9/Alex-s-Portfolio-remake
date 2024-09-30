//wait until the DOM is fully loaded
$(document).ready(function() {
    //Typed.js object for typing effect
    let typed = new Typed("#typed-output", {
        strings: ["Web Developer", "Graphic Designer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //smooth scroll to top
    document.getElementById('btn-up').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    //initializing Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
    });

    //initializing MixItUp for filtering portfolio items
    var mixer = mixitup('.proto-container');
    $('#portfolio-nav li').on('click', function() {
        const filterValue = $(this).attr('data-filter');

        //setting the active class (color-main) to the selected filter
        $('#portfolio-nav li').removeClass('color-main');
        $(this).addClass('color-main');
        mixer.filter(filterValue);
    });

    //navbar
    let lastScrollTop = 0; //variable to track last scroll position
    const navbarSelector = '#navbar';
    const navbarHeight = $(navbarSelector).outerHeight(); //getting the navbar height

    $(window).on('scroll', function() {
        let scrollTop = $(this).scrollTop();

        //hiding navbar on scroll down, show on scroll up
        if (scrollTop > lastScrollTop) {
            $(navbarSelector).css({'top': `-${navbarHeight}px`});
        } else {
            $(navbarSelector).css({'top': '0'});
        }
        lastScrollTop = scrollTop; //updating last scroll position

        //changing navbar background on scroll
        if (scrollTop > 50) {
            $(navbarSelector).addClass('bg-dark');
        } else {
            $(navbarSelector).removeClass('bg-dark');
        }

        //changing active navbar item based on scroll position
        $('.navbar-nav .nav-link').each(function() {
            let currLink = $(this);
            let refElement = $(currLink.attr("href"));

            if (refElement.length) {
                if (refElement.position().top <= scrollTop && refElement.position().top + refElement.outerHeight() > scrollTop) {
                    $('.nav-link').removeClass('active');
                    currLink.addClass('active');
                }
            }
        });
    });

    $('.navbar-nav .nav-link').on('click', function(event) {
        //preventing default anchor click behavior
        event.preventDefault();

        //getting the target section id
        let target = $(this).attr('href');
        //target section animation scrolling upon clicking
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });


//smooth scroll to top
document.getElementById('btn-up').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show or hide the button on scroll
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 200) { // Show button when scrolled down 200px
        $('#btn-up').fadeIn();
    } else {
        $('#btn-up').fadeOut();
    }
});
    
});
