$(document).ready(function () {


    new WOW().init();


    $('#openmenu').click(function () {
        $("#menu").show(500);

        $('#close').on('click', function () {
            $("#menu").hide(500)
        });

        $("#navigation").on("click","a", function (event) {
            event.preventDefault();

            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1300);
        });

    });



    $('#container').imagesLoaded( function() {

        $('.portfolio-btn').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        var $grid = $('.grid').isotope({

            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            percentPosition: true,
            stagger: 70,
            masonry: {
                // use element for option
                columnWidth: '.grid-item'
            }
        });

    });

    function changeClass() {
        $(this).prev().toggleClass('active')
    }
    $(function () {
        $('.teamnkar').on('click', function () {
            $(this).nextAll('.story').slideToggle(500);
            $(this).toggleClass('active');

        })
    });



});