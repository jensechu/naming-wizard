$(document).ready(function() {
    
    $('#nav-bar a').hover(
	function() {
	    var description = $(this).attr("title");
	    $('#nav-bar p').text(description);
	},
	function() {
	    $('#nav-bar p').text("");
	});

});
