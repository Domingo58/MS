window.addEventListener("resize", resize);
		
function resize() {
	$('.content-all').css('min-height', 'calc(100vh - ' + $('#sectionFooter').height() + 'px )');
}

$(window).load(function() {
	resize();
});