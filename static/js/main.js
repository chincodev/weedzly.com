/* ================================================
---------------------- Main.js ----------------- */
(function ($) {
  'use strict';
  var Porto = {
    initialised: false,
    mobile: false,
    init: function () {

      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }

      // Call Porto Functions
      this.checkMobile();
      this.stickyHeader();
      this.headerSearchToggle();
      this.mMenuIcons();
      this.mMenuToggle();
      this.mobileMenu();
      this.scrollToTop();
      this.quantityInputs();
      this.tooltip();
      this.popover();
      this.changePassToggle();
      this.changeBillToggle();
      this.catAccordion();
      this.ajaxLoadProduct();
      this.toggleFilter();
      this.toggleSidebar();
      this.productTabSroll();
      this.scrollToElement();
      this.loginPopup();
      this.modalView();
      this.productManage();
      this.ratingTooltip();
      this.isotopes();
      this.windowClick();

      /* Menu via superfish plugin */
      if ($.fn.superfish) {
        this.menuInit();
      }

      /* Call function if Owl Carousel plugin is included */
      if ($.fn.owlCarousel) {
        this.owlCarousels();
      }

      /* Call function if noUiSlider plugin is included - for category pages */
      if (typeof noUiSlider === 'object') {
        this.filterSlider();
      }

      /* Call if not mobile and plugin is included */
      if ($.fn.themeSticky) {
        this.stickySidebar();
      }

      /* Call function if Light Gallery plugin is included */
      if ($.fn.magnificPopup) {
        this.lightBox();
      }

    },
    checkMobile: function () {
      /* Mobile Detect*/
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    menuInit: function () {
      // Main Menu init with superfish plugin
      $('.menu').superfish({
        popUpSelector: 'ul, .megamenu',
        hoverClass: 'show',
        delay: 0,
        speed: 80,
        speedOut: 80,
        autoArrows: true
      });
    },
    stickyHeader: function () {
      // Sticky header - calls if sticky-header class is added to the header
      $('header').find('.sticky-header').each(function() {
        if ($(this).length) {
          var sticky = new Waypoint.Sticky({
            element: $(this),
            stuckClass: 'fixed',
            offset: -10
          });
        }
      });

      //Set sticky headers in main part
      $('main').find('.sticky-header').each(function () {
        var sticky = new Waypoint.Sticky({
          element: $(this),
          stuckClass: 'fixed-nav',
        });
      });
    },
    headerSearchToggle: function () {
      // Search Dropdown Toggle
      $('.search-toggle').on('click', function (e) {
        $('.header-search-wrapper').toggleClass('show');
        e.preventDefault();
      });

      $('body').on('click', function (e) {
        if ($('.header-search-wrapper').hasClass('show')) {
          $('.header-search-wrapper').removeClass('show');
          $('body').removeClass('is-search-active');
        }
      });

      $('.header-search').on('click', function (e) {
        e.stopPropagation();
      });
    },
    mMenuToggle: function () {
      // Mobile Menu Show/Hide
      $('.mobile-menu-toggler').on('click', function (e) {
        $('body').toggleClass('mmenu-active');
        $(this).toggleClass('active');
        e.preventDefault();
      });

      $('.mobile-menu-overlay, .mobile-menu-close').on('click', function (e) {
        $('body').removeClass('mmenu-active');
        $('.menu-toggler').removeClass('active');
        e.preventDefault();
      });

      $('.menu-item').on('click', function (e) {
        $(this).children('.menu-depart').toggleClass('opened');
        e.preventDefault();
      });
    },
    mMenuIcons: function () {
      // Add Mobile menu icon arrows or plus/minus to items with children
      $('.mobile-menu').find('li').each(function () {
        var $this = $(this);

        if ($this.find('ul').length) {
          $('<span/>', {
            'class': 'mmenu-btn'
          }).appendTo($this.children('a'));
        }
      });
    },
    mobileMenu: function () {
      // Mobile Menu Toggle
      $('.mmenu-btn').on('click', function (e) {
        var $parent = $(this).closest('li'),
          $targetUl = $parent.find('ul').eq(0);

        if (!$parent.hasClass('open')) {
          $targetUl.slideDown(300, function () {
            $parent.addClass('open');
          });
        } else {
          $targetUl.slideUp(300, function () {
            $parent.removeClass('open');
          });
        }

        e.stopPropagation();
        e.preventDefault();
      });
    },
    owlCarousels: function () {
      var sliderDefaultOptions = {
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 15000,
        items: 1,
      };

      // Init all carousel
      $('[data-toggle="owl"]').each(function () {
        
        var pluginOptions = $(this).data('owl-options');

        if (typeof pluginOptions == 'string') {
          pluginOptions = JSON.parse(pluginOptions.replace(/'/g,'"').replace(';',''));
        }

        var  newOwlSettings = $.extend(true, {}, sliderDefaultOptions, pluginOptions);

        var owlIns = $(this).owlCarousel(newOwlSettings);
      });

      /* Widget Featurd Products*/
      $('.widget-featured-products').owlCarousel($.extend(true, {}, sliderDefaultOptions, {
        lazyLoad: true,
        nav: true,
        navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
        dots: false,
        autoHeight: true
      }));

      /* About Testimonials Slider */
      $('.testimonials-slider').owlCarousel($.extend(true, {}, sliderDefaultOptions, {
        lazyLoad: true,
        navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
        autoHeight: true
      }));

      // Entry Slider - Blog page
      $('.entry-slider').each(function () {
        $(this).owlCarousel($.extend(true, {}, sliderDefaultOptions, {
          margin: 2,
          lazyLoad: true,
        }));
      });

      // Related posts
      $('.related-posts-carousel').owlCarousel($.extend(true, {}, sliderDefaultOptions, {
        loop: false,
        margin: 30,
        autoplay: false,
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 2
          },
          1200: {
            items: 3
          }
        }
      }));

      //Category boxed slider
      $('.boxed-slider').owlCarousel($.extend(true, {}, sliderDefaultOptions, {
        lazyLoad: true,
        autoplayTimeout: 20000,
        animateOut: 'fadeOut'
      }));
      $('.boxed-slider').on('loaded.owl.lazy', function (event) {
        $(event.element).closest('.boxed-slider').addClass('loaded')
      });

      /* Product single carousel - extenden product */
      $('.product-single-default .product-single-carousel').owlCarousel($.extend(true, {}, sliderDefaultOptions, {
        nav: true,
        navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
        dotsContainer: '#carousel-custom-dots',
        autoplay: false,
        onInitialized: function () {
          var $source = this.$element;

          if ($.fn.elevateZoom) {
            $source.find('img').each(function () {
              var $this = $(this),
                zoomConfig = {
                  responsive: true,
                  zoomWindowFadeIn: 350,
                  zoomWindowFadeOut: 200,
                  borderSize: 0,
                  zoomContainer: $this.parent(),
                  zoomType: 'inner',
                  cursor: 'grab'
                };
              $this.elevateZoom(zoomConfig);
            });
          }
        },
      }));

      $('.product-single-extended .product-single-carousel').owlCarousel($.extend(true, {}, sliderDefaultOptions, {
        dots: false,
        autoplay: false,
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 2
          },
          1200: {
            items: 3
          }
        }
      }));

      $('#carousel-custom-dots .owl-dot').click(function () {
        $('.product-single-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
      });
    },
    filterSlider: function () {
      // Slider For category pages / filter price
      var priceSlider = document.getElementById('price-slider'),
        currencyVar = '$';

      // Check if #price-slider elem is exists if not return
      // to prevent error logs
      if (priceSlider == null) return;

      noUiSlider.create(priceSlider, {
        start: [18, 150],
        connect: true,
        step: 2,
        margin: 30,
        range: {
          'min': 0,
          'max': 220
        }
      });

      // Update Price Range
      priceSlider.noUiSlider.on('update', function (values, handle) {
        var values = values.map(function (value) {
          return currencyVar + value;
        })
        $('#filter-price-range').text(values.join(' - '));
      });
    },
    stickySidebar: function () {
      $(".sidebar-wrapper, .sticky-slider").themeSticky({
        autoInit: true,
        minWidth: 991,
        containerSelector: '.row, .container',
        autoFit: true,
        paddingOffsetBottom: 10,
        paddingOffsetTop: 60
      });
    },
    tooltip: function () {
      // Bootstrap Tooltip
      if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover focus' // click can be added too
        });
      }
    },
    popover: function () {
      // Bootstrap Popover
      if ($.fn.popover) {
        $('[data-toggle="popover"]').popover({
          trigger: 'focus'
        });
      }
    },
    changePassToggle: function () {
      // Toggle new/change password section via checkbox
      $('#change-pass-checkbox').on('change', function () {
        $('#account-chage-pass').toggleClass('show');
      });
    },
    changeBillToggle: function () {
      // Checkbox review - billing address checkbox
      $('#change-bill-address').on('change', function () {
        $('#checkout-shipping-address').toggleClass('show');
        $('#new-checkout-address').toggleClass('show');
      });
    },
    catAccordion: function () {
      // Toggle "open" Class for parent elem - Home cat widget
      $('.catAccordion').on('shown.bs.collapse', function (item) {
        var parent = $(item.target).closest('li');

        if (!parent.hasClass('open')) {
          parent.addClass('open');
        }
      }).on('hidden.bs.collapse', function (item) {
        var parent = $(item.target).closest('li');

        if (parent.hasClass('open')) {
          parent.removeClass('open');
        }
      });
    },
    scrollBtnAppear: function () {
      if ($(window).scrollTop() >= 400) {
        $('#scroll-top').addClass('fixed');
      } else {
        $('#scroll-top').removeClass('fixed');
      }
    },
    scrollToTop: function () {
      $('#scroll-top').on('click', function (e) {
        $('html, body').animate({
          'scrollTop': 0
        }, 1200);
        e.preventDefault();
      });
    },
    newsletterPopup: function() {
      $.magnificPopup.open({
        items: {
          src: '#newsletter-popup-form'
        },
        type: 'inline',
        mainClass: 'mfp-newsletter',
        removalDelay: 350
      });
    },
    lightBox: function () {
      // Newsletter popup
      if ( document.getElementById('newsletter-popup-form') ) {
        setTimeout(function() {
          var mpInstance = $.magnificPopup.instance;
          if (mpInstance.isOpen) {
            mpInstance.close();
            setTimeout(function() {
              Porto.newsletterPopup();
            },360);
          }
          else {
            Porto.newsletterPopup();
          }
        }, 10000);
      }

      // Gallery Lightbox
      var links = [];
      var $productSliderImages = $('.product-single-carousel .owl-item:not(.cloned) img').length === 0 ? $('.product-single-gallery img') : $('.product-single-carousel .owl-item:not(.cloned) img');
      $productSliderImages.each(function () {
        links.push({ 'src': $(this).attr('data-zoom-image') });
      });

      $(".prod-full-screen").click(function (e) {
        var currentIndex;
        if (e.currentTarget.closest(".product-slider-container")) {
          currentIndex = ($('.product-single-carousel').data('owl.carousel').current() + $productSliderImages.length) % $productSliderImages.length;
        }
        else {
          currentIndex = $(e.currentTarget).closest(".product-item").index();
        }

        $.magnificPopup.open({
          items: links,
          navigateByImgClick: true,
          type: 'image',
          gallery: {
            enabled: true
          },
        }, currentIndex);
      });

      //QuickView Popup
    //   $('body').on('click', 'a.btn-quickview', function (e) {
    //     e.preventDefault();
    //     Porto.ajaxLoading();
    //     var ajaxUrl = $(this).attr('href');
    //     setTimeout(function () {
    //       $.magnificPopup.open({
    //         type: 'ajax',
    //         mainClass: "mfp-ajax-product",
    //         tLoading: '',
    //         preloader: false,
    //         removalDelay: 350,
    //         items: {
    //           src: ajaxUrl
    //         },
    //         callbacks: {
    //           open: function() {
    //             if($('.sticky-header.fixed').css('margin-right') && !Porto.mobile) {
    //               var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2))+17+'px';

    //               $('.sticky-header.fixed').css('margin-right', newMargin);
    //               $('.sticky-header.fixed-nav').css('margin-right', newMargin);
    //               $('#scroll-top').css('margin-right', newMargin);
    //             }
    //           },
    //           ajaxContentAdded: function () {
    //             Porto.owlCarousels();
    //             Porto.quantityInputs();
    //             if (typeof addthis !== 'undefined') {
    //               addthis.layers.refresh();
    //             }
    //             else {
    //               $.getScript("https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b927288a03dbde6");
    //             }
    //           },
    //           beforeClose: function () {
    //             $('.ajax-overlay').remove();
    //           },
    //           afterClose: function() {
    //             if($('.sticky-header.fixed').css('margin-right') && !Porto.mobile) {
    //               var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2))-17+'px';

    //               $('.sticky-header.fixed').css('margin-right', newMargin);
    //               $('.sticky-header.fixed-nav').css('margin-right', newMargin);
    //               $('#scroll-top').css('margin-right', newMargin);
    //             }
    //           }
    //         },
    //         ajax: {
    //           tError: '',
    //         }
    //       });
    //     }, 500);
    //   });
     },
    
    productTabSroll: function () {
      // Scroll to product details tab and show review tab - product pages
      $('.rating-link').on('click', function (e) {
        if ($('.product-single-tabs').length) {
          $('#product-tab-reviews').tab('show');
        } else if ($('.product-single-collapse').length) {
          $('#product-reviews-content').collapse('show');
        } else {
          return;
        }

        if ($('#product-reviews-content').length) {
          setTimeout(function () {
            var scrollTabPos = $('#product-reviews-content').offset().top - 60;

            $('html, body').stop().animate({
              'scrollTop': scrollTabPos
            }, 800);
          }, 250);
        }
        e.preventDefault();
      });
    },
    quantityInputs: function () {
      // Quantity input - cart - product pages
      if ($.fn.TouchSpin) {
        // Vertical Quantity
        $('.vertical-quantity').TouchSpin({
          verticalbuttons: true,
          verticalup: '',
          verticaldown: '',
          verticalupclass: 'icon-up-dir',
          verticaldownclass: 'icon-down-dir',
          buttondown_class: 'btn btn-outline',
          buttonup_class: 'btn btn-outline',
          initval: 1,
          min: 1
        });

        // Horizontal Quantity
        $('.horizontal-quantity').TouchSpin({
          verticalbuttons: false,
          buttonup_txt: '',
          buttondown_txt: '',
          buttondown_class: 'btn btn-outline btn-down-icon',
          buttonup_class: 'btn btn-outline btn-up-icon',
          initval: 1,
          min: 1
        });
      }
    },
    ajaxLoading: function () {
      $('body').append("<div class='ajax-overlay'><i class='porto-loading-icon'></i></div>");
    },
    ajaxLoadProduct: function () {
      var loadCount = 0;
      $loadButton.click(function (e) {
        e.preventDefault();
        $(this).text('Loading ...');
        $.ajax({
          url: "ajax/category-ajax-products.html",
          success: function (result) {
            var $newItems = $(result);
            setTimeout(function () {
              $newItems.hide().appendTo('.product-ajax-grid').fadeIn();
              $loadButton.text('Load More');
              loadCount++;
              if (loadCount >= 2) {
                $loadButton.hide();
              }
            }, 350);
          },
          failure: function () {
            $loadButton.text("Sorry something went wrong.");
          }
        });
      });
    },
    toggleFilter: function () {
      // toggle sidebar filter
      $('.filter-toggle a').click(function (e) {
        e.preventDefault();
        $('.filter-toggle').toggleClass('opened');
        $('main').toggleClass('sidebar-opened');
      });

      // hide sidebar filter and sidebar overlay
      $('.sidebar-overlay').click(function (e) {
        $('.filter-toggle').removeClass('opened');
        $('main').removeClass('sidebar-opened');
      });

      // show/hide sort menu
      $('.sort-menu-trigger').click(function (e) {
        e.preventDefault();
        $('.select-custom').removeClass('opened');
        $(e.target).closest('.select-custom').toggleClass('opened');
      });
    },
    toggleSidebar: function () {
      $('.sidebar-toggle').click(function () {
        $('main').toggleClass('sidebar-opened');
      });
    },
    scrollToElement: function () {
      $('.scrolling-box a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));

        if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
            scrollTop: target.offset().top - 90
          }, 700);
        }
      });
    },
    loginPopup: function () {
      $('.login-link').click(function (e) {
        e.preventDefault();
        Porto.ajaxLoading();
        var ajaxUrl = "ajax/login-popup.html";
        setTimeout(function () {
          $.magnificPopup.open({
            type: 'ajax',
            mainClass: "login-popup",
            tLoading: '',
            preloader: false,
            removalDelay: 350,
            items: {
              src: ajaxUrl
            },
            callbacks: {
              open: function() {
                if($('.sticky-header.fixed').css('margin-right') && !Porto.mobile) {
                  var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2))+17+'px';

                  $('.sticky-header.fixed').css('margin-right', newMargin);
                  $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                  $('#scroll-top').css('margin-right', newMargin);
                }
              },
              beforeClose: function () {
                $('.ajax-overlay').remove();
              },
              afterClose: function() {
                if($('.sticky-header.fixed').css('margin-right') && !Porto.mobile) {
                  var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2))-17+'px';

                  $('.sticky-header.fixed').css('margin-right', newMargin);
                  $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                  $('#scroll-top').css('margin-right', newMargin);
                }              
              }
            },
            ajax: {
              tError: '',
            }
          });
        }, 1500);
      });
    },
    modalView: function() {
      $('body').on('click', '.btn-add-cart', function(e){
        $('.add-cart-box #productImage').attr('src', $(this).parents('.product-default').find('figure img').attr('src'));
        $('.add-cart-box #productTitle').text($(this).parents('.product-default').find('.product-title').text());

        if($('.sticky-header.fixed').css('margin-right') && !Porto.mobile) {
          var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2))+17+'px';

          $('.sticky-header.fixed').css('margin-right', newMargin);
          $('.sticky-header.fixed-nav').css('margin-right', newMargin);
          $('#scroll-top').css('margin-right', newMargin);
        }
      });
      $('.modal#addCartModal').on('hidden.bs.modal', function(e){
        if($('.sticky-header.fixed').css('margin-right') && !Porto.mobile) {
        var newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2))-17+'px';

        $('.sticky-header.fixed').css('margin-right', newMargin);
        $('.sticky-header.fixed-nav').css('margin-right', newMargin);
        $('#scroll-top').css('margin-right', newMargin);
        }
      })
    },
    productManage: function () {
      $('.product-select').click(function(e) {
        $(this).parents('.product-default').find('figure img').attr('src', $(this).data('src'));
        $(this).addClass('checked').siblings().removeClass('checked');
      });
    },
    ratingTooltip: function () {
      $('.product-ratings').hover(function(e) {
        var ratingsRes = $(this).find('.ratings').width() / $(this).width() * 5;
        $(this).find('.tooltiptext').text(ratingsRes?ratingsRes.toFixed(2):ratingsRes);
      });
    },
    isotopes: function () {
      $('.grid').isotope({
        itemsSelector: '.grid-item',
        layoutMode: 'packery',
        percentPosition: true
      });

      var $grid = $('.featured-section .grid').isotope({});

      $('.filter-button-group').on('click', '.nav-link', function() {
        var filterValue = $(this).attr('data-filter');
        var $tabContent = $(this).parents('.featured-section').find('.tab-content');
        $tabContent.css('min-height', $tabContent.find('.grid-item').outerHeight());
        $grid.isotope({filter: filterValue});

        $(this).parents().siblings().children().removeClass('active');
        $(this).addClass('active');
      })
    },
    windowClick: function () {
      $(document).click(function (e) {
        // if click is happend outside of filter menu, hide it.
        if (!$(e.target).closest('.toolbox-item.select-custom').length) {
          $('.select-custom').removeClass('opened');
        }
      });
    }
  };
  $('#__vercel').prepend('<div class="loading-overlay"><div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>');

  //Variables
  var $loadButton = $('.loadmore .btn');

  // Ready Event
  jQuery(document).ready(function () {
    // Init our app
    Porto.init();
  });

  // Load Event
  $(window).on('load', function () {
    $('body').addClass("loaded");
    Porto.scrollBtnAppear();
  });

  // Scroll Event
  $(window).on('scroll', function () {
    Porto.scrollBtnAppear();
  });
})(jQuery);