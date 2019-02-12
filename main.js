$(document).ready(function(){

var listLi = document.querySelectorAll(".list li");
listLength = listLi.length;

var listLi2 = document.querySelectorAll(".list2 li");
listLength2 = listLi2.length;

$("#clear").click(function(){
	for(var i = 1; i<=listLength; i++){
		$("#item" +  i + "txt").hide('fade');
	}
	for(var i = 1; i<=listLength2; i++){
		$("#list2_" +  i + "txt").hide();
	}
	$("#asteroidBelt").hide('fade');
	$("#moon").hide('fade');
	$("#milkyWay").hide('fade');
});

for(var i = 1; i<=listLength; i++){
	$("#item" +  i + "txt").hide();
}

for(var i = 1; i<=listLength2; i++){
	$("#list2_" +  i + "txt").hide();
}

$("#item1").click(function(){
	$("#clear").click();
	$("#item1txt").show('fade');
});

$("#item2").click(function(){
	$("#clear").click();
	$("#item2txt").show('fade');
});

$("#item3").click(function(){
	$("#clear").click();
	$("#item3txt").show('fade');
});

$("#item4").click(function(){
	$("#clear").click();
	$("#item4txt").show('fade');
});

$("#item5").click(function(){
	$("#clear").click();
	$("#item5txt").show('fade');
});

$("#item6").click(function(){
	$("#clear").click();
	$("#item6txt").show('fade');
});

$("#item7").click(function(){
	$("#clear").click();
	$("#item7txt").show('fade');
});

$("#item8").click(function(){
	$("#clear").click();
	$("#item8txt").show('fade');
});

$("#item9").click(function(){
	$("#clear").click();
	$("#item9txt").show('fade');
});

$("#list2_1").click(function(){
	$("#clear").click();
	$("#list2_1txt").show('fade');
});

$("#list2_2").click(function(){
	$("#clear").click();
	$("#list2_2txt").show('fade');
});

$("#searchBox").hide();
$("#search").click(function(){
	$("#search").hide();
	$("#clear").click();
	$("#searchBox").show('fade');
});

$("#asteroidBelt").hide();
$("#moon").hide();
$("#milkyWay").hide();
$("input[type=text]").keyup(function(){
	var a = $("input[type=text]").val().toLowerCase();
	if(a.includes("asteroid") || a.includes("belt")) {
		$("#asteroidBelt").show('fade');
	}
	if(a.includes("moon")){
		$("#moon").show('fade');
	}
	if(a.includes("milky")){
		$("#milkyWay").show('fade');
	}
	if(a.length == 0){
		$("#asteroidBelt").hide();
		$("#moon").hide();
		$("#milkyWay").hide();
	}
});

for(var i=1; i<=3; i++){
	$("#img"+i).hide();
}
	
$("#list2_3").click(function(){
	$("#clear").click();
	$("#list2_3txt").show('fade');
	
	
setTimeout(function(){ 
	$("#img1").show('fade');
		setTimeout(function(){
		//	$("#img1").hide('fade');
			$("#img2").show('fade');
				setTimeout(function(){
					//$("#img1").hide('fade');
					//$("#img2").hide('fade');
					$("#img3").show('fade');
					
				 }, 4000);
		 }, 4000);
 }, 1000);
	
});

});