$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 400);
        }
    });

    var sections = $('div[id]');
    var navLinks = $('.navbar .nav-link');

    $(window).on('scroll', function() {
        var current = $(this).scrollTop() + 100;
        sections.each(function() {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();
            var id = $(this).attr('id');
            if (current >= top && current <= bottom) {
                navLinks.removeClass('active');
                navLinks.filter('[href="#' + id + '"]').addClass('active');
            }
        });
    });
});
