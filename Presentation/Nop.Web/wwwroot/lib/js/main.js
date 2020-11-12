!function (e) {
    "use strict";
    (new WOW).init(), e(window).on("load", function () {
        e("[data-bgimg]").each(function () {
            var s = e(this).data("bgimg");
            e(this).css({"background-image": "url(" + s + ")"})
        })
    }), e(".sticky-header").not(".sticky_header_four").after('<div class="sticky-header-placeholder"></div>'), e(".sticky-header-placeholder").hide(), e(window).on("scroll load resize", function () {
        e(window).scrollTop() < 100 ? (e(".sticky-header").removeClass("sticky"), e(".sticky-header-placeholder").hide()) : (e(".sticky-header").addClass("sticky"), e(".sticky-header-placeholder").show()), e(".sticky-header-placeholder").height(e(".sticky-header").height() + 54)
    }), e(".slider3_carousel").owlCarousel({
        animateOut: "fadeOut",
        rtl: !0,
        loop: !0,
        nav: !1,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 1,
        dots: !0
    });
    var s = new Swiper(".gallery-thumbs", {
        spaceBetween: 1,
        slidesPerView: 4,
        freeMode: !0,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        breakpoints: {1200: {slidesPerView: 3}, 767: {slidesPerView: 2}, 300: {slidesPerView: 1}}
    });
    new Swiper(".gallery-top", {
        dynamicBullets: !0,
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        pagination: {el: ".swiper-pagination", clickable: !0},
        thumbs: {swiper: s}
    });

    function i() {
        var s = e(".product_column5 .owl-stage .owl-item.active").length;
        e(".product_column5").each(function () {
            e(this).find(".owl-item").removeClass("firstActiveItem"), e(this).find(".owl-item").removeClass("lastActiveItem"), e(this).find(".owl-item.active").each(function (i) {
                0 === i && e(this).addClass("firstActiveItem"), i === s - 1 && s > 1 && e(this).addClass("lastActiveItem")
            })
        })
    }

    function i() {
        var s = e(".product_column4 .owl-stage .owl-item.active").length;
        e(".product_column4").each(function () {
            e(this).find(".owl-item").removeClass("firstActiveItem"), e(this).find(".owl-item").removeClass("lastActiveItem"), e(this).find(".owl-item.active").each(function (i) {
                0 === i && e(this).addClass("firstActiveItem"), i === s - 1 && s > 1 && e(this).addClass("lastActiveItem")
            })
        })
    }

    e(".product_column5").on("changed.owl.carousel initialized.owl.carousel", function (s) {
        e(s.target).find(".owl-item").removeClass("last").eq(s.item.index + s.page.size - 1).addClass("last")
    }).owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 5,
        dots: !1,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        responsiveClass: !0,
        responsive: {0: {items: 2}, 768: {items: 3}, 992: {items: 4}, 1200: {items: 5}}
    }), i(), e(".product_column4").on("changed.owl.carousel initialized.owl.carousel", function (s) {
        e(s.target).find(".owl-item").removeClass("last").eq(s.item.index + s.page.size - 1).addClass("last")
    }).owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 4,
        dots: !1,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        responsiveClass: !0,
        responsive: {0: {items: 1}, 768: {items: 3}, 992: {items: 3}, 1200: {items: 4}}
    }), i(), e(".product_column3").on("changed.owl.carousel initialized.owl.carousel", function (s) {
        e(s.target).find(".owl-item").removeClass("last").eq(s.item.index + s.page.size - 1).addClass("last")
    }).owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 3,
        dots: !1,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        responsiveClass: !0,
        responsive: {0: {items: 1}, 768: {items: 3}, 992: {items: 2}, 1200: {items: 3}}
    }), e(".small_product_column2").on("changed.owl.carousel initialized.owl.carousel", function (s) {
        e(s.target).find(".owl-item").removeClass("last").eq(s.item.index + s.page.size - 1).addClass("last")
    }).owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 2,
        dots: !1,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        responsiveClass: !0,
        responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 2}}
    }), e(".small_product_column3").on("changed.owl.carousel initialized.owl.carousel", function (s) {
        e(s.target).find(".owl-item").removeClass("last").eq(s.item.index + s.page.size - 1).addClass("last")
    }).owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 3,
        dots: !1,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        responsiveClass: !0,
        responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 2}, 1200: {items: 3}}
    }), e(".product_column2").on("changed.owl.carousel initialized.owl.carousel", function (s) {
        e(s.target).find(".owl-item").removeClass("last").eq(s.item.index + s.page.size - 1).addClass("last")
    }).owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 2,
        dots: !1,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        responsiveClass: !0,
        responsive: {0: {items: 1}, 768: {items: 1}, 992: {items: 2}}
    }), e(".product_column1").on("changed.owl.carousel initialized.owl.carousel", function (s) {
        e(s.target).find(".owl-item").removeClass("last").eq(s.item.index + s.page.size - 1).addClass("last")
    }).owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 1,
        dots: !1,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        responsiveClass: !0,
        responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 1}}
    }), e(".product_sidebar_slider").on("changed.owl.carousel initialized.owl.carousel resized.owl.carousel", function (s) {
        e(s.target).find(".owl-item").removeClass("last").eq(s.item.index + s.page.size - 1).addClass("last")
    }).owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !1,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 1,
        dots: !1,
        responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 1}}
    }), e(".categories_sidebar_slider").owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !1,
        autoplay: !0,
        autoplayTimeout: 8e3,
        items: 1,
        dots: !1,
        responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 1}}
    }), e(".testimonial-two").owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !1,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 1,
        dots: !0
    }), e(".blog_column4").owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 4,
        dots: !1,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        responsiveClass: !0,
        responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 3}, 1200: {items: 4}}
    }), e(".blog_thumb_active").owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 1,
        navText: ['<i class="ion-ios-arrow-right"></i>', '<i class="ion-ios-arrow-left"></i>']
    }), e(".single-product-active").owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 4,
        margin: 15,
        dots: !1,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        responsiveClass: !0,
        responsive: {0: {items: 1}, 320: {items: 2, margin: 10}, 992: {items: 3}, 1200: {items: 4}}
    }), e(".product_navactive").owlCarousel({
        rtl: !0,
        loop: !0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 8e3,
        items: 4,
        dots: !1,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        responsiveClass: !0,
        responsive: {0: {items: 1}, 250: {items: 2}, 480: {items: 3}, 768: {items: 4}}
    }), e(".modal").on("shown.bs.modal", function (s) {
        e(".product_navactive").resize()
    }), e(".product_navactive a").on("click", function (s) {
        s.preventDefault();
        var i = e(this).attr("href");
        e(".product_navactive a").removeClass("active"), e(this).addClass("active"), e(".product-details-large .tab-pane").removeClass("active show"), e(".product-details-large " + i).addClass("active show")
    }), e(".action_links ul li a,.add_to_cart a,.footer_social_link ul li a").tooltip({
        animated: "fade",
        placement: "top",
        container: "body"
    }), e(".select_option, .niceselect_option").niceSelect(), e.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    }), e("[data-countdown]").each(function () {
        var s = e(this), i = e(this).data("countdown");
        s.countdown(i, function (e) {
            s.html(e.strftime('<div class="countdown_area"><div class="single_countdown"><div class="countdown_number">%D</div><div class="countdown_title">روز</div></div><div class="single_countdown"><div class="countdown_number">%H</div><div class="countdown_title">ساعت</div></div><div class="single_countdown"><div class="countdown_number">%M</div><div class="countdown_title">دقیقه</div></div><div class="single_countdown"><div class="countdown_number">%S</div><div class="countdown_title">ثانیه</div></div></div>'))
        })
    }), e("#slider-range").slider({
        range: !0, min: 0, max: 100000000, step: 1e4, values: [0, 100000000], slide: function (s, i) {
            var a = i.values[0].toLocaleString(), o = i.values[1].toLocaleString();
            e("#amount").val(o + " تومان - " + a + " تومان"), e("#price-min").val(i.values[0]), e("#price-max").val(i.values[1])
        }
    });
    var a = e("#slider-range").slider("values", 0).toLocaleString(),
        o = e("#slider-range").slider("values", 1).toLocaleString();
    e("#amount").val(o + " تومان - " + a + " تومان"), e("#price-min").val(e("#slider-range").slider("values", 0)), e("#price-max").val(e("#slider-range").slider("values", 1)), e("#zoom1").elevateZoom({
        gallery: "gallery_01",
        responsive: !0,
        cursor: "zoom-in",
        zoomType: "inner"
    }), e(window).on("resize", function () {
        e(".zoomContainer").remove(), e("#zoom1").elevateZoom({
            gallery: "gallery_01",
            responsive: !0,
            cursor: "zoom-in",
            zoomType: "inner"
        }), setTimeout(function () {
            e(".zoomGalleryActive").click()
        }, 10)
    }), e(".widget_sub_categories > a").on("click", function () {
        e(this).toggleClass("active"), e(this).siblings(".widget_dropdown_categories").stop().slideToggle("medium")
    }), e(".categories_title").on("click", function () {
        e(this).toggleClass("active"), e(".categories_menu_toggle").slideToggle("medium")
    }), e("#cat_toggle.has-sub > a").on("click", function () {
        e(this).removeAttr("href"), e(this).toggleClass("open").next(".categorie_sub").toggleClass("open"), e(this).parents().siblings().find("#cat_toggle.has-sub > a").removeClass("open")
    }), e("#mc-form").ajaxChimp({
        language: "en", callback: function (s) {
            "success" === s.result ? (e(".mailchimp-success").addClass("active"), e(".mailchimp-success").html("" + s.msg).fadeIn(900), e(".mailchimp-error").fadeOut(400)) : "error" === s.result && e(".mailchimp-error").html("" + s.msg).fadeIn(900)
        }, url: "http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
    }), e(".categories_menu_toggle li.menu_item_children > a").on("click", function () {
        if (e(window).width() < 992) {
            e(this).removeAttr("href");
            var s = e(this).parent("li");
            s.hasClass("open") ? (s.removeClass("open"), s.find("li").removeClass("open"), s.find("ul").slideUp()) : (s.addClass("open"), s.children("ul").slideDown(), s.siblings("li").not(".has-sub").children("ul").slideUp(), s.siblings("li").removeClass("open"), s.siblings("li").find("li").removeClass("open"), s.siblings("li").not(".has-sub").find("ul").slideUp())
        }
    }), e(".categories_menu_toggle li.menu_item_children > a").append('<span class="expand"></span>'), e(".shop_toolbar_btn > button").on("click", function (s) {
        s.preventDefault(), e(".shop_toolbar_btn > button").removeClass("active"), e(this).addClass("active");
        var i = e(".shop_wrapper"), a = e(this).data("role");
        i.removeClass("grid_4 grid_list").addClass(a), "grid_4" == a && i.children().addClass("col-lg-3 col-md-4 col-sm-6").removeClass("col-lg-4 col-cust-5 col-12"), "grid_list" == a && i.children().addClass("col-12").removeClass("col-lg-3 col-lg-4 col-md-4 col-sm-6 col-cust-5")
    }), e(".search_box > a").on("click", function () {
        e(this).toggleClass("active"), e(".search_widget").slideToggle("medium")
    }), e(".mini_cart_wrapper > a").on("click", function (s) {
        e(window).width() < 991 && e(".mini_cart").slideToggle("medium")
    }), e(".canvas_open").on("click", function () {
        e(".Offcanvas_menu_wrapper,.off_canvars_overlay").addClass("active")
    }), e(".canvas_close,.off_canvars_overlay").on("click", function () {
        e(".Offcanvas_menu_wrapper,.off_canvars_overlay").removeClass("active")
    });
    var t = e(".offcanvas_main_menu"), l = t.find(".sub-menu");
    l.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>'), l.slideUp(), t.on("click", "li a, li .menu-expand", function (s) {
        var i = e(this);
        i.parent().attr("class").match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) && ("#" === i.attr("href") || i.hasClass("menu-expand")) && (s.preventDefault(), i.siblings("ul:visible").length ? i.siblings("ul").slideUp("slow") : (i.closest("li").siblings("li").find("ul:visible").slideUp("slow"), i.siblings("ul").slideDown("slow"))), i.closest(".offcanvas_main_menu").find(".menu-open").not(i).not(i.parents()).removeClass("menu-open"), i.is("a") || i.is("span") || i.attr("clas").match(/\b(menu-expand)\b/) ? (i.parent().toggleClass("menu-open"), i.parent().find("ul li .sub-menu").slideUp("slow")) : i.is("li") && i.attr("class").match(/\b('menu-item-has-children')\b/) && (i.toggleClass("menu-open"), i.find("ul li .sub-menu").slideUp("slow"))
    }), e(".js-ripples").ripples({resolution: 512, dropRadius: 20, perturbance: .04}), e(function () {
        var s = e("#contact-form"), i = e(".form-messege");
        e(s).submit(function (a) {
            a.preventDefault();
            var o = e(s).serialize();
            e(i).text("در حال ارسال ..."), e.ajax({type: "POST", url: e(s).attr("action"), data: o}).done(function (s) {
                e(i).removeClass("error"), e(i).addClass("success"), e(i).text(s), e("#contact-form input,#contact-form textarea").val("")
            }).fail(function (s) {
                e(i).removeClass("success"), e(i).addClass("error"), "" !== s.responseText ? e(i).text(s.responseText) : e(i).text("خطایی در ارسال پیام رخ داده است.")
            })
        })
    }), e('#contact-form [name="name"]').on("invalid", function () {
        this.setCustomValidity("لطفا نام خود را وارد نمایید")
    }), e('#contact-form [name="email"]').on("invalid", function () {
        this.validity.valueMissing ? this.setCustomValidity("لطفا ایمیل خود را وارد نمایید") : this.validity.typeMismatch && this.setCustomValidity("لطفا یک ایمیل معتبر وارد نمایید")
    }), e('#contact-form [name="message"]').on("invalid", function () {
        this.setCustomValidity("لطفا پیام خود را وارد نمایید")
    }), e("#contact-form").find("input, textarea").on("input", function () {
        this.setCustomValidity("")
    })
}(jQuery);



!function(t,e,n,i){const o=(t,...e)=>"function"==typeof t&&t(...e);t.fn.imoViewer=function(e){const n=e.nameOnly||!1,i=e.maxWidth||null,s=e.maxHeight||null;t(this).change(function(r){r.preventDefault();const a=t(this)[0].files[0],c=t(this);if(n)t(e.preview).html(a.name);else{const n=new FileReader;n.onload=function(n){const r=new Image,a=n.target.result;r.src=a,r.onload=function(r){const l=this.height,h=this.width;null!=i&&l>s||null!=s&&h>i?(o(e.onError,IMAGE_RESULATION_NOT_MATCH,c,this),t(c).val("")):(o(e.onBeforePreview,c,n.target,this),t(e.preview).attr("src",a),o(e.onAfterPreview,c,n.target,this),o(e.onSuccess,c,n.target,this))}},n.readAsDataURL(a)}})}}($,window,document);