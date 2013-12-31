// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){

	var today = new Date();
	var event_date = new Date(2014, 2, 22);
	var submission_date = new Date(2014, 1, 10);

	$("span#event-timer").html(timer_diff(event_date, today) + " DAYS TO GO");
	$("span#submission-timer").html(timer_diff(submission_date, today) + " DAYS TO GO");

	$("a[href^='#']").on("click", function(){
		$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
		return false;
	})

	$(window).on("scroll", function(){
		var position = $(document).scrollTop();
		var menu_pos = $("#above-menu-bar").offset().top;
		var class_name = "fixed contain-to-grid";
		console.log(position);
		console.log(menu_pos);
		if(position >= menu_pos * 2){
			$("#menu-bar").addClass(class_name);
			toggle_site_name("block");
		}
		if(position < menu_pos * 2){
			$("#menu-bar").removeClass(class_name);
			toggle_site_name("none");
		}
	})

});

var timer_diff = function(d1, d2){
	diff = Math.abs(d1 - d2) / 86400000
	return Math.round(diff)
};

var toggle_site_name = function(property){
	$("#site-name").css({
		display: property
	})
}
