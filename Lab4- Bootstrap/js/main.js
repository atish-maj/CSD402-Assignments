function shine(x) {
	$(".active").removeClass("active");
	$("#"+x.id).addClass("active");
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});

function showvideo (){
	$("video-container").style.display="block";
}