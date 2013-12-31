// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){

	$("a[href^='#']").on("click", function(){
		$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
		return false;
	})

});
