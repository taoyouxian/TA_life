/**
 * 
 * @authors Nat Liu (fliu@sudytech.com)
 * @date    2014-11-06 13:23:12
 * @version 2014-11-06 13:23:12
 */

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

;(function($){
	"use strict";
	if($==undefined)return false;

	var D = document, W = window, J = {}, wrapWidth = 980, listWidth = 768;

	function getClient(){

		W.width = $(W).width();
		W.height = $(W).height();
	}

	$(function(){

		$("#keyword").removeAttr('style');

		$("#weixin").zoombox();
		getClient();

		J.allMenu = $(".wp-menu");

		J.allMenu.each(function(index, el) {
			$(el).children('li').last().addClass('last').
			end().first().addClass('first');
		});

		J.mainMenu = $(".main-nav").find(".wp-menu");

		function bindEvents(){

			if(W.width<wrapWidth){

				$("li", J.mainMenu).off("mouseenter.mainMenu mouseleave.mainMenu")
				.data("bindedEvent",false);

				if(!$("#nav-switch").data("bindedEvent")){
					$("#nav").stop(true,true).hide();
					$("#nav-switch").on("click.navSlide",function(){

						$("#nav").slideToggle(200);
					})
					.data("bindedEvent",true);

					$("#nav .menu-switch-arrow").on("click.menuSlide",function(){

						$(this).siblings('.sub-menu').slideToggle(200);
					});
				}

			}else{
				$("#nav").stop(true,true).show();

				if(!$("li", J.mainMenu).data("bindedEvent")){

					$("li", J.mainMenu).on("mouseenter.mainMenu",function(){

						$(this).addClass('selected')
						.children('.sub-menu').stop()
						.slideDown(400, "easeOutQuint");
					}).on("mouseleave.mainMenu",function(){

						$(this).removeClass('selected')
						.children('.sub-menu').stop(true,true)
						.hide();
					})
					.trigger('mouseleave.mainMenu')
					.data("bindedEvent",true);
				}
			}

			if(W.width<listWidth){

				if(!$("#column-switch").data("bindedEvent")){

					$(".col-menu-list").stop(true,true).hide();
					$("#column-switch").on("click.columnList",function(){

						$(".col-menu-list").slideToggle(200);
					}).data("bindedEvent",true);;

				}
			}else{
				$(".col-menu-list").stop(true,true).show();

			}

		}

		bindEvents();

		$(W).resize(function(event) {
			/* Act on the event */
	        getClient();
	        bindEvents();
		});
	});

})(window.jQuery||window.Zepto);
