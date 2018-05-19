window.onscroll = function() {scrollFunction()};

var header = document.getElementById('headerBottom');
var sticky = header.offsetTop;

function scrollFunction() {
	if(window.pageYOffset >= sticky) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
}