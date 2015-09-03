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
		$("#resume").hide();
		$("#portfolio").hide();
		$("#resume").fadeToggle( "slow", "linear" );
	}

	function showportfolio()
	{
		$(".portfolio").addClass("select");
		$(".summary").removeClass("select");
		$(".resume").removeClass("select");
		$("#summary").hide();
		$("#resume").hide();
		$("#portfolio").hide();
		$("#portfolio").fadeToggle( "slow", "linear" );
	}
	function showsummary()
	{
		$(".summary").addClass("select");
		$(".resume").removeClass("select");
		$(".portfolio").removeClass("select");
		$("#summary").hide();
		$("#summary").fadeToggle( "slow", "linear" );
		$("#resume").hide();
		$("#portfolio").hide();
	}
});