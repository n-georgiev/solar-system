
var listLi = document.querySelectorAll(".list li");
listLength = listLi.length;

var listLi2 = document.querySelectorAll(".list2 li");
listLength2 = listLi2.length;

function clearClick(){
	for(var i = 1; i<=listLength; i++){
		document.getElementById("item"+i+"txt").style.display = "none";
	}
	for(var i = 1; i<=listLength2; i++){
		document.getElementById("list2_"+i+"txt").style.display = "none";
	}

	document.getElementById("asteroidBelt").style.display = "none";
	document.getElementById("moon").style.display = "none";
	document.getElementById("milkyWay").style.display = "none";
}

for(var i = 1; i<=listLength; i++){
	document.getElementById("item"+i+"txt").style.display = "none";
}

for(var i = 1; i<=listLength2; i++){
	document.getElementById("list2_"+i+"txt").style.display = "none";
}

function itemClick1(){
	document.getElementById("clear").click();
	document.getElementById("item1txt").style.display = "block";
}

function itemClick2(){
	document.getElementById("clear").click();
	document.getElementById("item2txt").style.display = "block";
}

function itemClick3(){
	document.getElementById("clear").click();
	document.getElementById("item3txt").style.display = "block";
}

function itemClick4(){
	document.getElementById("clear").click();
	document.getElementById("item4txt").style.display = "block";
}

function itemClick5(){
	document.getElementById("clear").click();
	document.getElementById("item5txt").style.display = "block";
}

function itemClick6(){
	document.getElementById("clear").click();
	document.getElementById("item6txt").style.display = "block";
}

function itemClick7(){
	document.getElementById("clear").click();
	document.getElementById("item7txt").style.display = "block";
}

function itemClick8(){
	document.getElementById("clear").click();
	document.getElementById("item8txt").style.display = "block";
}

function itemClick9(){
	document.getElementById("clear").click();
	document.getElementById("item9txt").style.display = "block";
}

function list2_1Click(){
	document.getElementById("clear").click();
	document.getElementById("list2_1txt").style.display = "block";
}

function list2_2Click(){
	document.getElementById("clear").click();
	document.getElementById("list2_2txt").style.display = "block";
}

document.getElementById("searchBox").style.display = "none";
function searchClick(){
	document.getElementById("search").style.display = "none";
	document.getElementById("clear").click();
	document.getElementById("searchBox").style.display = "block";
}


document.getElementById("asteroidBelt").style.display = "none";
document.getElementById("moon").style.display = "none";
document.getElementById("milkyWay").style.display = "none";
function onKeyUp(){
	var a = document.getElementById('textboxID').value.toLowerCase();
	if(a.includes("asteroid") || a.includes("belt")) {
		document.getElementById("asteroidBelt").style.display = "block";
	}
	if(a.includes("moon")){
		document.getElementById("moon").style.display = "block";
	}
	if(a.includes("milky")){
		document.getElementById("milkyWay").style.display = "block";
	}
	if(a.length == 0){
		document.getElementById("asteroidBelt").style.display = "none";
		document.getElementById("moon").style.display = "none";
		document.getElementById("milkyWay").style.display = "none";
	}
}

for(var i=1; i<=3; i++){
	document.getElementById("img"+i).style.display = "none";
}

function list2_3Click(){
	document.getElementById("clear").click();
	document.getElementById("list2_3txt").style.display = "block";
setTimeout(function(){ 
	document.getElementById("img1").style.display = "block";
		setTimeout(function(){
			document.getElementById("img2").style.display = "block";
				setTimeout(function(){
					document.getElementById("img3").style.display = "block";
					
				 }, 4000);
		 }, 4000);
 }, 1000);
}
