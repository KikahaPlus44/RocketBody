$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var wwidth = window.innerWidth;
        var topOffset = 66;
        if (wwidth < 960) {
            topOffset = 56;
        }
        $('#burger').toggleClass('is-active');
        $('#collapse').toggleClass('is-active');

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - topOffset
        }, 400, 'swing', function () {
            window.location.hash = target;
        });
    });
    // menu
    var isVisibe = $('#myModal').is(':visible');
    $('#burger').on('click', function (e) {
        e.preventDefault();
        $('#burger').toggleClass('is-active');
        $('#collapse').toggleClass('is-active');
    });
    $('#closenav').on('click', function (e) {
        e.preventDefault();
        $('#burger').toggleClass('is-active');
        $('#collapse').toggleClass('is-active');
        if ($('#myModal').is(':visible')) {
            $('#myModal').modal({
                'show': 'false'
            });
        } else {
            $('#myModal').modal({
                'show': 'true'
            });
        }
    });

});
