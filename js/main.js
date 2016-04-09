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
	$("#resumeTab").click(showresume);
	$("#portfolioTab").click(showportfolio);
	$("#summaryTab").click(showsummary);
	function showresume()
	{
		$(".resume").addClass("select");
		$(".portfolio").removeClass("select");
		$(".summary").removeClass("select");
		$("#resumeTab").addClass("select");
		$("#portfolioTab").removeClass("select");
		$("#summaryTab").removeClass("select");
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
		$("#resumeTab").removeClass("select");
		$("#portfolioTab").addClass("select");
		$("#summaryTab").removeClass("select");
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
		$("#resumeTab").removeClass("select");
		$("#portfolioTab").removeClass("select");
		$("#summaryTab").addClass("select");
		$("#summary").hide();
		$("#summary").fadeToggle( "slow", "linear" );
		$("#resume").hide();
		$("#portfolio").hide();
	}
});
