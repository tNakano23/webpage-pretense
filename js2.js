
$(function(){
    $(window).scroll(function(){
        $('.eff-fadein').each(function(){
            let elemPos      = $(this).offset().top;
            let windowHeight = $(window).height(); 
            if (scrollY > elemPos - windowHeight + 200){
                $(this).addClass('eff-scrollin');
            }
            // else{
            //     $(this).removeClass('eff-scrollin');
            // }
            if (scrollY > elemPos - windowHeight + 1000){
                $(this).removeClass('sticky');
            }
        });
    });
});


$(function() {
    $('img-txt').hover(function() {
        $(this).addClass('img-txt-hover');
    });
});

$(function() {
    $('.fa-twitter').click(function(){
        $('.tweet-message').toggleClass('hidden')
    })
});