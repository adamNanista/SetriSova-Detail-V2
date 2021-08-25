
$(window).on('load', function() {
    smooth__scroll();
	click__ripple();
	scroll__on__error();
});

$(document).ready(function() {
	pick__choice();
    circle__select();
	show__vyhlasenia();
    show__suhlas();
    show__suhlasvub();
    show__suhlasf();
    show__alert();
});

function smooth__scroll() {
    $('a[href^="#"]').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 200, function(){
                window.location.hash = hash;
            });
        }
    });
}

function click__ripple() {
	$('.click__ripple__haver, .circle').click(function(e) {
		var ripple, d, x, y;
		ripple = $(this).find('.click__ripple');
		ripple.removeClass('animate');
		if (!ripple.height() && !ripple.width()) {
			d = Math.max($(this).outerWidth(), $(this).outerHeight());
			ripple.css({
				height: d + 'px',
				width: d + 'px'
			});
		}
		x = e.pageX - $(this).offset().left - ripple.width()/2;
		y = e.pageY - $(this).offset().top - ripple.height()/2;
		ripple.css({
			top: y + 'px',
			left: x + 'px',
		}).addClass('animate');
	});
}

function pick__choice() {
    $('.circle').click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
}

function circle__select() {
	var kruh;
	var moznost__parent;
    $('.circle__select').click(function() {
		kruh = $(this);
        var moznosti = kruh.find('.circles__options');
        var ostatnemoznosti = $('.circles__options').not(moznosti);
        moznosti.slideToggle(200);
        ostatnemoznosti.slideUp(200);
    });
    $('.circles__option').click(function() {
        var moznost = $(this).html();
        $(this).parent().siblings('.selected').html(moznost);
		moznost__parent = 1;
    });
    $(document).bind('click', function(event) {
        var clicked = $(event.target);
        if (! clicked.hasClass('circle__select')) {
            $('.circles__options').slideUp(200);
			if (moznost__parent == null) {
			    if (kruh && kruh.hasClass('active')) {
                    kruh.removeClass('active');
                }
			}
        }
    });
}

function scroll__on__error() {
    if ($(".validation__error").length) {
        $('html, body').animate({
            scrollTop: $('.validation__error:first').offset().top
        }, 1000);
    }
}

function show__vyhlasenia() {
    $('.vyhlasenia__anchor').click(function() {
        event.preventDefault();
        $('#vyhlasenia').removeClass('hidden');
    });
    $('#vyhlasenia .popup__inner__header__close').click(function() {
        event.preventDefault();
        $('#vyhlasenia').addClass('hidden');
    });
    $('#vyhlasenia .popup__inner__content__btn').click(function() {
        event.preventDefault();
        $('#vyhlasenia').addClass('hidden');
    });
}

function show__alert() {
    $('#form_alert .popup__inner__header__close').click(function() {
        event.preventDefault();
        $('#form_alert').addClass('hidden');
    });
    $('#form_alert .popup__inner__content__btn').click(function() {
        event.preventDefault();
        $('#form_alert').addClass('hidden');
    });
}


function show__suhlas() {
    $('.suhlas__anchor').click(function() {
        event.preventDefault();
        $('#suhlas').removeClass('hidden');
    });
    $('#suhlas .popup__inner__header__close').click(function() {
        event.preventDefault();
        $('#suhlas').addClass('hidden');
    });
    $('#suhlas .popup__inner__content__btn').click(function() {
        event.preventDefault();
        $('#suhlas').addClass('hidden');
    });
}

function show__suhlasvub() {
    $('.suhlasvub__anchor').click(function() {
        event.preventDefault();
        $('#suhlasvub').removeClass('hidden');
    });
    $('#suhlasvub .popup__inner__header__close').click(function() {
        event.preventDefault();
        $('#suhlasvub').addClass('hidden');
    });
    $('#suhlasvub .popup__inner__content__btn').click(function() {
        event.preventDefault();
        $('#suhlasvub').addClass('hidden');
    });
}

function show__suhlasf() {
    $('.suhlasf__anchor').click(function() {
        event.preventDefault();
        $('#suhlasf').removeClass('hidden');
    });
    $('#suhlasf .popup__inner__header__close').click(function() {
        event.preventDefault();
        $('#suhlasf').addClass('hidden');
    });
    $('#suhlasf .popup__inner__content__btn').click(function() {
        event.preventDefault();
        $('#suhlasf').addClass('hidden');
    });
}
