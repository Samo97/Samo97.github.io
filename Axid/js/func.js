$(document).ready(function () {



    $('#myTab a').click(function (e) {
        e.preventDefault();

        $(this).tab('show');
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



    $('#contacts').on('submit', function (x) {
        x.preventDefault();


        var login = $('#name').val();
        var email = $('#mail').val();
        var subject = $('#subject').val();
        var massage = $('#massage').val();


        if (login == '') {
            $('.name-block').removeClass('has-success').addClass('has-error');
        } else {
            $('.name-block').removeClass('has-error').addClass('has-success');
        }

        if (email == '') {
            $('.email-block').removeClass('has-success').addClass('has-error');
        } else {
            $('.email-block').removeClass('has-error').addClass('has-success');
        }

        if (subject == '') {
            $('.subject-block').removeClass('has-success').addClass('has-error');
        } else {
            $('.subject-block').removeClass('has-error').addClass('has-success');
        }

        if (massage == '') {
            $('.massage-block').removeClass('has-success').addClass('has-error');
        } else {
            $('.massage-block').removeClass('has-error').addClass('has-success');
        }

    });

});