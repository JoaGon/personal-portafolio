gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
function showit() {
    var wt = $("#pwait");
    var tl = new TimelineLite();

    tl.to(wt, 1, { left: 80, autoAlpha: 1 });

}
$(function(){
    // When an open tab item from your menu is clicked
    $(".nav-link").click(function(){
        // Hide any of the content tabs
        $(".tab").hide();
        
        // Show your active tab (read from your data attribute)
        $('[data-tab ="' + $(this).data('tab') + '"]').show();
        // Optional: Highlight the selected tab
        $('li.active').removeClass('active');
        $(this).closest('li').addClass('active');
        if( $(this).data('tab') == 'b'){
            showOtherImage()
        }else{
            showMainImage()
        }
    });
});

$(document).ready(function () {
    showit()
});

function showOtherImage(){
    $('#image-about').css( "display", "inline" );
    $('#image-main').css( "display", "none" );
    image()
}


function showMainImage(){
    $('#image-main').css( "display", "inline" );
    $('#image-about').css( "display", "none" );
}
