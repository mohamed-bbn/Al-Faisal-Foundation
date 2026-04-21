$(window).on("load", function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 42) {
            $('.header').addClass("sticky");
        } else {
            if ($(this).scrollTop() < 1) {
                $('.header').removeClass("sticky");
            }
        }
    });



    $('.searchicon').click(function(e) {
        e.stopPropagation();
        $('.showboxsearch').fadeIn('slow');
    });

    $('.cancel, body').click(function() {
        $('.showboxsearch').fadeOut('slow');
    });

    $('.showboxsearch').click(function(e) {
        e.stopPropagation();
    });

    //////////////////Search

    $(function() {
        const $languageBox = $(".showboxlanguage");

        function toggleBox($box) {
            $box.stop(true, true).slideToggle("fast");
        }
        $(".language").on("click", function(event) {
            event.stopPropagation();
            toggleBox($languageBox);
        });

        $(".showboxlanguage").on("click", function(event) {
            event.stopPropagation();
        });

        $(document).on("click", function() {
            $languageBox.slideUp("fast");
        });
    });




    /*----------------------------------------
      HEADER STICKY ON SCROLL
    ----------------------------------------*/

    $(function() {
        const navbarMenu = $("#navbar");
        const overlayMenu = $(".overlay");

        $("#burger, .overlay").click(function() {
            navbarMenu.toggleClass("active");
            overlayMenu.toggleClass("active");
        });

        navbarMenu.on("click", "[data-toggle]", function(e) {
            if (window.innerWidth <= 999) {
                e.preventDefault();
                const $menuDropdown = $(this).parent();

                if ($menuDropdown.hasClass("active")) {
                    $menuDropdown.removeClass("active").find(".submenu").removeAttr("style");
                } else {
                    $(".menu-dropdown.active .submenu").removeAttr("style");
                    $(".menu-dropdown.active").removeClass("active");

                    $menuDropdown.addClass("active");
                    $menuDropdown.find(".submenu").css("max-height", $menuDropdown.find(".submenu")[0].scrollHeight + "px");
                }
            }
        });

        $(window).on("resize", function() {
            if (window.innerWidth > 999) {
                navbarMenu.removeClass("active");
                $(".menu-dropdown.active").removeClass("active").find(".submenu").removeAttr("style");
            }
        });
    });

    /*----------------------------------------
      NAVBAR TOGGLE (Burger Menu)
    ----------------------------------------*/

    $('.cancel').click(function() {
        $('.navbar,.overlay').removeClass("active");
    });
    // Close navbar

    $(".menu-item").click(function() {
        $(this).addClass("activelink").siblings().removeClass("activelink");
    });

    // Active menu item highlight


    function setActiveClass(parentSelector, childSelector) {
        $(parentSelector).on("click", childSelector, function() {
            if (!$(this).hasClass("active")) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        });
    }
    setActiveClass(".pagination", "li a");

    /*----------------------------------------
      ACTIVE CLASS HANDLER
    ----------------------------------------*/


    function initializeSlider(selector, options) {
        $(selector)
            .on('init', function() {
                $(this).removeClass('slick-loading').addClass('slick-loaded');
                $(".slider-loader").hide();
            })
            .slick(options);
    }

    initializeSlider(".itemslider", {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '150px',
        responsive: [{
                breakpoint: 999,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '60px'
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '30px'
                }
            }
        ]
    });


    let counted = false;

    $(window).scroll(function() {

        let counterEl = $('.counter');

        if (counterEl.length === 0) return; // 👈 أهم سطر

        let oTop = counterEl.offset().top - window.innerHeight;

        if (!counted && $(window).scrollTop() > oTop) {

            counterEl.each(function() {
                let $this = $(this),
                    countTo = $this.attr('data-count');

                $({ countNum: $this.text() }).animate({ countNum: countTo }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });

            counted = true;
        }
    });
    /*----------------------------------------
      TOGGLE LIST / MAP VIEW
    ----------------------------------------*/


    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('.scrollTopBtn').addClass('show');
        } else {
            $('.scrollTopBtn').removeClass('show');
        }
    });

    $('.scrollTopBtn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    /*----------------------------------------
         SCROLL TO TOP BUTTON
       ----------------------------------------*/


}); // END window.load
