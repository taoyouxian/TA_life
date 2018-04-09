/**
 * 
 * @authors Nat Liu (fliu@sudytech.com)
 * @date    2014-11-10 13:11:38
 * @version 2014-11-10 13:11:38
 */

$(function(){

		$("#carousel").sudyfocus({
	        title:{
	        	isAutoWidth: true
	        },
	        zWidth:1000,
	        zHeight:292,
	        response:true
	    });

	    /***mail**/
	$(".switch").click(function(){
			$(".mailslist").slideToggle(100);
		    if($(this).hasClass("up")){
				$(this).removeClass("up");
				}else{
					$(this).addClass("up");
					};
	});
	$(".mailslist li").click(function(){
		var mid = $(this).attr("id");
		var index = $(this).index();
		$("#loginSelect option").attr("selected",false).eq(index).attr("selected",true);
		$(".mailslist").slideUp(100);
		$("#mailname").text($(this).text());
		$(".switch").removeClass("up");
	});
	$(".mailslist #xs").click(function(){
		$(".lgtop").addClass("topl");
		$(".lgbm").removeClass("topl");
		});
		$(".mailslist #js").click(function(){
		$(".lgbm").addClass("topl");
		$(".lgtop").removeClass("topl");
		});
	login.init()
});