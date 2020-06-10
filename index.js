
var divPos = {};
var offset = $("#area").offset();
$(document).mousemove(function(e){
    divPos = {
        left: e.pageX - offset.left,
        top: e.pageY - offset.top
    };
	console.log(divPos);
});