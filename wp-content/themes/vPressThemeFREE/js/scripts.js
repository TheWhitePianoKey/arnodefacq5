jQuery(document).ready(function($){	$('.head-nav .menu').slicknav({label: '' , prependTo: 'header#head .container'});	$('.head-nav ul li').hover(function(){		$('.sub-menu:first, .children:first',this).stop(true,true).slideDown('fast');	},	function(){		$('.sub-menu:first, .children:first',this).stop(true,true).slideUp('fast');	});	$('.page-wrap').css('margin-top',$('header#head').outerHeight());	$(window).bind('scroll', function () {	    if ($(window).scrollTop() > 150) {	        $('#head').addClass('fixed')	    } else  {	        $('#head').removeClass('fixed');	    }	});	get_blogbox_height();	$('#home-slider').slick();	var grid = jQuery('.home-posts').imagesLoaded( function() {		get_blogbox_height();		grid.isotope({		  // options		  itemSelector: '.archive-post-box',		  layoutMode: 'fitRows',		  filter: '*',		});	});});function get_blogbox_height(){	/*var w = jQuery('.archive-post-feature').width() * .5625;	jQuery('.archive-post-feature').height(w);*/	var t_w = jQuery('.archive-post-feature').width();	var w = (t_w == 100 ? $(window).width() : t_w) * .5625;	jQuery('.archive-post-feature').height(w);	var w2 = jQuery('.blog-feature').width() * .559;	jQuery('.blog-feature').height(w2);	jQuery(".blog-excerpt p").dotdotdot({		height: w2+20	});	var w3 = jQuery('.home-slide-feature').height() - 100;	if (jQuery(window).width() > 767) {		jQuery(".home-slide-text").dotdotdot({			height: w3		});	}		// jQuery('.post_content iframe').height(jQuery('.post_content iframe').width() * .5625);}jQuery(window).resize(function(){	get_blogbox_height();})jQuery(window).load(function() {	jQuery('.page-wrap').css('margin-top',jQuery('header#head').outerHeight());	jQuery('.home-slider').removeClass('invisibility');	jQuery('.home-cats-selection ul li a').on('click',function(e){		e.preventDefault();		jQuery('.home-cats-selection ul li a').removeClass('active');		jQuery(this).addClass('active');		var target = jQuery(this).attr('href');		jQuery('.home-posts').isotope({ filter: target })	})});