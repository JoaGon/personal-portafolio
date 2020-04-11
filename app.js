gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
function showit() {
    var wt = $("#pwait");
    var tl = new TimelineLite();

    tl.to(wt, 1, { left: 80, autoAlpha: 1 });

}
$(function () {
    // When an open tab item from your menu is clicked
    $(".nav-link").click(function () {
        if ($(this).data('tab') == 'a' || $(this).data('tab') == 'b' || $(this).data('tab') == 'c' || $(this).data('tab') == 'd') {
            // Hide any of the content tabs
            $(".tab").hide();

            // Show your active tab (read from your data attribute)
            $('[data-tab ="' + $(this).data('tab') + '"]').show();
            
            // Optional: Highlight the selected tab
            $('li.active').removeClass('active');
            $(document.querySelectorAll("[data-tab='" + $(this).data('tab') + "']")[0]).closest('li').addClass('active');

            //$('.nav-item').andSelf().find("[data-tab='" + $(this).data('tab') + "']").addClass('active');
            if ($(this).data('tab') == 'c') {
                $('#image-main').css('display', 'none')
                let el = document.getElementById('content-col')
                el.classList.remove("col-sm-8");
                el.classList.add("col-sm-12")
            } else {
                $('#image-main').css('display', 'block')
                let el = document.getElementById('content-col')
                el.classList.remove("col-sm-12");
                el.classList.add("col-sm-8")

            }
        }

    });
});

$(document).ready(function () {
    showit()
});

function showOtherImage() {
    $('#image-about').css("display", "inline");
    $('#image-main').css("display", "none");
    image()
}


function downloadCv() {
    let a = document.createElement('a')
    a.href = 'resources/cv/cv-joanelly-gonzalez.pdf'
    a.target = '_blank'

    a.download = 'resources/cv/cv-joanelly-gonzalez.pdf'.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
