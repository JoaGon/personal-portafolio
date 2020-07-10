
window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};


gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
function showit() {
    console.log('Aqui1');

    var wt = $("#pwait");
    var tl = new TimelineLite();


    tl.to(wt, 1,
        {
            left: 120,
            autoAlpha: 1
        })
}

function showitXs() {
    var wt = $("#pwait");
    var tl = new TimelineLite();
    tl.to(wt, 1, { left: 20, autoAlpha: 1 });

}


let trigger = ".trigger";
let recipient = ".target";
let animation;

$(trigger).click(function (e) {
    e.stopPropagation();
    if (!$(this).hasClass('active')) {
        var parentElm = $(this).parent();
        var targetChild = parentElm.find(recipient);

        $(trigger).removeClass('active');
        $(recipient).removeClass('open');

        $(this).addClass('active');
        targetChild.addClass('open');

        if (animation) {
            animation.reverse();
        }
        animation = TweenMax.fromTo(targetChild, .3, { display: 'none', y: '-100%', autoAlpha: 0 }, { display: 'block', y: '0%', autoAlpha: 1, ease: Power1.easeOut });
    }

});

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};


$(function () {
    // When an open tab item from your menu is clicked
    let animation;

    $(".nav-link").click(function () {
       if ($(this).data('tab') == 'a' || $(this).data('tab') == 'b' || $(this).data('tab') == 'c' || $(this).data('tab') == 'd') {
            // Hide any of the content tabs
            $(".tab").hide();
       
            // Show your active tab (read from your data attribute)
            $('[data-tab-show ="' + $(this).data('tab') + '"]').show();
            $('[data-tab-xs ="' + $(this).data('tab') + '"]').show();



            // Optional: Highlight the selected tab
            $('li.active').removeClass('active');
            $(document.querySelectorAll("[data-tab='" + $(this).data('tab') + "']")[0]).closest('li').addClass('active');

            $(document.querySelectorAll("[data-tab-xs='" + $(this).data('tab') + "']")[0]).closest('li').addClass('active');
            let obj = $('[data-tab-show ="' + $(this).data('tab') + '"]').show();

            if (window.matchMedia('screen and (mIN-width: 991px)').matches) {
                animation = TweenMax.fromTo(obj, .5, { display: 'none', x: '-100%', autoAlpha: 0 }, { display: 'block', x: '0%', autoAlpha: 1, ease: Power1.easeOut });
            }




            //$('.nav-item').andSelf().find("[data-tab='" + $(this).data('tab') + "']").addClass('active');
            if ($(this).data('tab') == 'c') {
                $('#image-main').css('display', 'none')
                let el = document.getElementById('content-col')
                el.classList.remove("col-sm-8");
                el.classList.remove("col-lg-8");
                el.classList.add("col-sm-12")
                el.classList.add("col-lg-12")

                console.log(el);

            } else {
                $('#image-main').css('display', 'block')
                let el = document.getElementById('content-col')
                el.classList.remove("col-sm-12");
                el.classList.remove("col-lg-12");
                el.classList.add("col-sm-8")
                el.classList.add("col-lg-8")
            }
        }

        if ($(this).data('tab-xs') == 'a' || $(this).data('tab-xs') == 'b' || $(this).data('tab-xs') == 'c' || $(this).data('tab-xs') == 'd') {
            // Hide any of the content tabs
            $(".tab").hide();

            // Show your active tab (read from your data attribute)
            $('[data-tab-show ="' + $(this).data('tab-xs') + '"]').show();

            // Optional: Highlight the selected tab
            $('li.active').removeClass('active');
            $('ul li a').click(function () { $('li a').removeClass("active"); $(this).addClass("active"); });


            $(document.querySelectorAll("[data-tab-xs='" + $(this).data('tab-xs') + "']")[0]).closest('li').addClass('active');

            $(document.querySelectorAll("[data-tab-xs='" + $(this).data('tab-xs') + "']")[0]).closest('li').addClass('active');

            $(document.querySelectorAll("[data-tab-xs='" + $(this).data('tab-xs') + "']")[0]).closest('a').addClass('active');


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