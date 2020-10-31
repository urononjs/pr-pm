$(document).ready(function() {

    // resize-fullscreen-start
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    // resize-fullscreen-end



// PRESENT
    let count = 3;

    $('.box-1').click(function(){

        $(".box-1").attr("src", "images/box-1-active.png");

        if (count === 0){

            $(".again-wrap").remove();
            runConfetti();
            $( ".confetti-1" ).animate({
                opacity: 1,
                // right: "-10",
                // top: "-10"
            });

            setTimeout(function () {
                $(".form-wrap").addClass("add-d-flex");
                $(".form-wrap").css("opacity", "1");
            },1500);

            setTimeout(function () {
                $(".form-main-box").addClass('modal-open');
            },1900);

        } else if ($(".box-1").hasClass("flag")) {

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        } else {
            count--;
            $('.color-text').text(count);
            $( ".box-1" ).addClass( "flag" );
            // $(".confetti-1").remove();
            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        }
    });




    $('.box-2').click(function(){

        $(".box-2").attr("src", "images/box-2-active.png");

        if (count === 0){

            $(".again-wrap").remove();
            runConfetti();
            $( ".confetti-2" ).animate({
                opacity: 1,
                // right: "-10",
                // top: "-10"
            });

            setTimeout(function () {
                $(".form-wrap").addClass("add-d-flex");
                $(".form-wrap").css("opacity", "1");
            },1500);

            setTimeout(function () {
                $(".form-main-box").addClass('modal-open');
            },1900);

        } else if ($(".box-2").hasClass("flag")) {

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        } else {
            count--;
            $('.color-text').text(count);
            $( ".box-2" ).addClass( "flag" );

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        }
    });




    $('.box-3').click(function(){

        $(".box-3").attr("src", "images/box-3-active.png");

        if (count === 0){

            $(".again-wrap").remove();
            runConfetti();
            $( ".confetti-3" ).animate({
                opacity: 1,
                // right: "-10",
                // top: "-10"
            });

            setTimeout(function () {
                $(".form-wrap").addClass("add-d-flex");
                $(".form-wrap").css("opacity", "1");
            },1500);

            setTimeout(function () {
                $(".form-main-box").addClass('modal-open');
            },1900);

        } else if ($(".box-3").hasClass("flag")) {

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        } else {
            count--;
            $('.color-text').text(count);
            $( ".box-3" ).addClass( "flag" );

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        }
    });




    $('.box-4').click(function(){

        $(".box-4").attr("src", "images/box-4-active.png");

        if (count === 0){

            $(".again-wrap").remove();
            runConfetti();
            $( ".confetti-4" ).animate({
                opacity: 1,
                // right: "-10",
                // top: "-10"
            });

            setTimeout(function () {
                $(".form-wrap").addClass("add-d-flex");
                $(".form-wrap").css("opacity", "1");
            },1500);

            setTimeout(function () {
                $(".form-main-box").addClass('modal-open');
            },1900);

        } else if ($(".box-4").hasClass("flag")) {

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        } else {
            count--;
            $('.color-text').text(count);
            $( ".box-4" ).addClass( "flag" );

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        }
    });




    $('.box-5').click(function(){

        $(".box-5").attr("src", "images/box-5-active.png");

        if (count === 0){

            $(".again-wrap").remove();
            runConfetti();
            $( ".confetti-5" ).animate({
                opacity: 1,
                zIndex: 2,
                // right: "-10",
                // top: "-30"
            });

            setTimeout(function () {
                $(".form-wrap").addClass("add-d-flex");
                $(".form-wrap").css("opacity", "1");
            },1500);

            setTimeout(function () {
                $(".form-main-box").addClass('modal-open');
            },1900);

        } else if ($(".box-5").hasClass("flag")) {

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        } else {
            count--;
            $('.color-text').text(count);
            $( ".box-5" ).addClass( "flag" );

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        }
    });



    $('.box-6').click(function(){

        $(".box-6").attr("src", "images/box-6-active.png");

        if (count === 0){

            $(".again-wrap").remove();
            runConfetti();
            $( ".confetti-6" ).animate({
                opacity: 1,
                // right: "-10",
                // top: "-10"
            });

            setTimeout(function () {
                $(".form-wrap").addClass("add-d-flex");
                $(".form-wrap").css("opacity", "1");
            },1500);

            setTimeout(function () {
                $(".form-main-box").addClass('modal-open');
            },1900);

        } else if ($(".box-6").hasClass("flag")) {

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        } else {
            count--;
            $('.color-text').text(count);
            $( ".box-6" ).addClass( "flag" );

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        }
    });


    $('.box-7').click(function(){

        $(".box-7").attr("src", "images/box-7-active.png");

        if (count === 0){

            $(".again-wrap").remove();
            runConfetti();
            $( ".confetti-7" ).animate({
                opacity: 1,
                // right: "-10",
                // top: "-10"
            });

            setTimeout(function () {
                $(".form-wrap").addClass("add-d-flex");
                $(".form-wrap").css("opacity", "1");
            },1500);

            setTimeout(function () {
                $(".form-main-box").addClass('modal-open');
            },1900);

        } else if ($(".box-7").hasClass("flag")) {

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        } else {
            count--;
            $('.color-text').text(count);
            $( ".box-7" ).addClass( "flag" );

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        }
    });



    $('.box-8').click(function(){

        $(".box-8").attr("src", "images/box-8-active.png");

        if (count === 0){

            $(".again-wrap").remove();
            runConfetti();
            $( ".confetti-8" ).animate({
                opacity: 1,
                // right: "-10",
                // top: "-10"
            });

            setTimeout(function () {
                $(".form-wrap").addClass("add-d-flex");
                $(".form-wrap").css("opacity", "1");
            },1500);

            setTimeout(function () {
                $(".form-main-box").addClass('modal-open');
            },1900);

        } else if ($(".box-8").hasClass("flag")) {

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        } else {
            count--;
            $('.color-text').text(count);
            $( ".box-8" ).addClass( "flag" );

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        }
    });


    $('.box-9').click(function(){

        $(".box-9").attr("src", "images/box-9-active.png");

        if (count === 0){

            $(".again-wrap").remove();
            runConfetti();
            $( ".confetti-9" ).animate({
                opacity: 1,
                // right: "-10",
                // top: "-10"
            });

            setTimeout(function () {
                $(".form-wrap").addClass("add-d-flex");
                $(".form-wrap").css("opacity", "1");
            },1500);

            setTimeout(function () {
                $(".form-main-box").addClass('modal-open');
            },1900);

        } else if ($(".box-9").hasClass("flag")) {

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        } else {
            count--;
            $('.color-text').text(count);
            $( ".box-9" ).addClass( "flag" );

            setTimeout(function(){
                $( ".again-wrap" ).removeClass( "d-none" );
            }, 200);

            $('.again_btn').click(function(){
                $(".again-wrap").addClass("d-none");
            });

        }
    });


// END-PRESENT

});