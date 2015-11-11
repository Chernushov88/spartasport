
/*-----------------------------------------------------------------------------------*/
/*  menu
/*-----------------------------------------------------------------------------------*/
		$(document).ready(function(){
			var touch = $('#touch-menu');
		    var menu = $('.hnt-left');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 891 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		});
		$(document).ready(function(){
			var touch2 = $('#touch-menu-2');
		    var menu2 = $('.hnt-right');
		 
		    $(touch2).on('click', function(e) {
		        e.preventDefault();
		        menu2.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 891 && menu2.is(':hidden')) {
		            menu2.removeAttr('style');
		        }
		    });
		});
/*-----------------------------------------------------------------------------------*/
/*  scroll
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){   
			//fade in/out based on scrollTop value
			$(window).scroll(function () {
				if ($(this).scrollTop() > 0) {
					$('#scroll').fadeIn();
				} else {
					$('#scroll').fadeOut();
				}
			});
		 
			// scroll body to 0px on click
			$('#scroll').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 400);
				return false;
			});
		});