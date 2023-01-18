
(function ($) {
	"use strict";

	/*========== Loader start ================*/
	$(window).on('load', function () {
		$('#loader-wrapper').fadeIn();
		setTimeout(function () {
			$('#loader-wrapper').fadeOut();
		}, 500);
	});
	// Password input
	$(".toggle-password").on('click', function () {

		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("data-toggle"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});
})(jQuery);