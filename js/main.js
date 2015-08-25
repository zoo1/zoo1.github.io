$(document).ready( function() {
	if(window.location.href.indexOf("#res") > -1)
	{
		showresume();
	}
	else if(window.location.href.indexOf("#port") > -1)
	{
		showportfolio();
	}
	else
	{
		showsummary();
	}
	$(".resume").click(showresume);
	$(".portfolio").click(showportfolio);
	$(".summary").click(showsummary);
	function showresume()
	{
		$(".resume").addClass("select");
		$(".portfolio").removeClass("select");
		$(".summary").removeClass("select");
		$("#summary").hide();
		$("#resume").show();
		$("#portfolio").hide();
	}

	function showportfolio()
	{
		$(".portfolio").addClass("select");
		$(".summary").removeClass("select");
		$(".resume").removeClass("select");
		$("#summary").hide();
		$("#resume").hide();
		$("#portfolio").show();
	}
	function showsummary()
	{
		$(".summary").addClass("select");
		$(".resume").removeClass("select");
		$(".portfolio").removeClass("select");
		$("#summary").show();
		$("#resume").hide();
		$("#portfolio").hide();
	}
});