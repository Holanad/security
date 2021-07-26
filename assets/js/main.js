if ($('.slider').length) {
    $(window).on('load resize', function () {
        $('.slider').slick({
            arrows: false,
            dots: true,
            lazyLoad: 'ondemand'
            
        });
    });
}

$(".module-item__title").click(function(){
    $(this).toggleClass("open").next().slideToggle();
    $(".module-item__title").not(this).removeClass("open").next().slideUp();
});