
var divPos = {};
var offset = $("#area").offset();

var thisInstance = this;

$("#area").mousedown(function() {
	$(thisInstance).data('mousedown', true);
});
$("#area").mouseup(function() {
	$(thisInstance).data('mousedown', false);
});

$("#area").mousemove(function(e){
	if($(thisInstance).data('mousedown')) {
		divPos = {
			left: e.pageX - offset.left,
			top: e.pageY - offset.top
		};
		console.log(divPos);
	}
});