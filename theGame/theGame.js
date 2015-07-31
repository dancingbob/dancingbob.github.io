$(document).ready(function(){
	$("#unicorn").click(function(){
		$("#wrapperID").toggleClass("secondWrapper");
		$("#wrapperID").toggleClass("wrapper");
		$("#unicorn").toggleClass("hidden");
		$("#rope").toggleClass("hidden");

	});
	$("#bob").click(function(){
		$("#bob").toggleClass("bob1");
		$("#bob").toggleClass("bob2");
	});
});               