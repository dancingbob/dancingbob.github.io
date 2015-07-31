var score=0;
$("div").click(
  function() {
  	document.getElementById("minion").innerHTML = "bob is my favourite minion";
  	score++;
  	document.getElementById("demo").innerHTML = score;
   $(this).toggleClass("hover");
   $("body").toggleClass("yellow");
  }
);