

$(document).ready(function () {




    $('.carousel').carousel();


    $("#light").lightGallery({


        controls:"false",
        download: false,
        eskKey: true

    });



    $('#up').on('click', function () {

        $('html,body').animate({
            scrollTop: 0
        }, 1200);
    });




        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1200);
        });











});