$("#mobileMenuOpen").on('click', function () {


})



$('#mobileMenuOpen').on('click', function () {

    $(this).fadeOut();
    $("nav").fadeIn();
    $(".mobileTitle").fadeOut();
    $(".mobileNav").css({
        "border-bottom": "none",
    });


    setTimeout(function () {
        $("#mobileMenuClose").fadeIn();
    }, 300);
});



$('#mobileMenuClose').on('click', function () {
    $(this).fadeOut();
    $("nav").fadeOut();
    setTimeout(function () {
        $(".mobileTitle").fadeIn();
        $("#mobileMenuOpen").fadeIn();
        $(".mobileNav").css({
            "border-bottom": "1px solid black",
        });
    }, 300);
});