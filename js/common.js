$(function() {

	//Animations .css

	$(".gallery_wrap").animated("rollIn");
	$(".comment:nth-child(odd) .col-md-12, .s_sale .button, .contact_item, #map_wrapper").animated("fadeInLeft");
	$(".comment:nth-child(even) .col-md-12, .s_sale p, .form_wrap").animated("fadeInRight");
	$(".s_direct .direct_elem").animated("rollIn");
	$(".gallery_wrap").animated("rollIn");
	$(".s_profile p, .s_profile ul, .s_profile .button").animated("zoomInUp");
	$("h2").animated("bounceInUp");
	//Custom animations

	$('.s_portfolio').waypoint(function(direction) {
		$('.port_item').each(function(index){
			var ths = $(this);
			setTimeout(function(){
				ths.addClass("on")
			}, 400*index);
		});
		this.destroy();
	}, {offset: '50%'
});

	$('.s_equipment').waypoint(function(direction) {
		$('.carous_item').each(function(index){
			var ths = $(this);
			setTimeout(function(){
				ths.addClass("on")
			}, 400*index);
		});
		this.destroy();
	}, {offset: '80%'
});

	$('.s_personal').waypoint(function(direction) {
		$('.personal-item').each(function(index){
			var ths = $(this);
			setTimeout(function(){
				ths.addClass("on")
			}, 600*index);
		});
		this.destroy();
	}, {offset: '50%'
});

	//Carousel equipment
	$(".equip_carousel").owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1200,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [960,2], // betweem 900px and 601px
      itemsTablet: [500,1], //2 items between 600 and 0
      autoPlay : 7000,
      stopOnHover : true,
      scrollPerPage : true
    });

  //Carousel partners
  $(".carousel_partners").owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1200,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [960,3], // betweem 900px and 601px
      itemsTablet: [500,2], //items between 600 and 0
      autoPlay : 3000,
      navigation : true,
      navigationText :	["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"]
    });

	//Inline SVG
	$('.img_svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
        	$svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
        	$svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        	$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

	});

	//Numbers animation
	$(".s_advan").waypoint(function(){
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1500,
			easing: 'swing',
			step: function() {
				$(".lines").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".lines").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "em(30px)",
				numberStep: comma_separator_number_step},
				1500);
		});
		this.destroy()
	},{offset: '85%'
});

	//Portfolio id generator
	$(".port_item").each(function(e){
		var th = $(this)

		th.attr("href", "#port-item-" + e);
		th.find(".popup_port").attr("id", "port-item-" + e);
	});

	//Portfolio popups
	$('.port_item').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	//Form popup

	//Portfolio popups
	$('.callback').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	//Photo Gallery
	$('.gallery').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random();
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() {
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	// Certificate gallery
	$('.certif_gallery').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random();
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() {
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	$(".mouse-icon").click(function() {
		$('html, body').animate({
			scrollTop: $(".s_advan").offset().top
		}, 800);
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top_mnu").slideToggle();
		return false;
	});


	//Equal Heights
	$('.s-adv-item').equalHeights();
	$('.s_direct .direct_elem p').equalHeights();
	$('.equip_text').equalHeights();


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});