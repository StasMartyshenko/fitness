//"use strict";

var tagsA = document.getElementsByTagName('a');
for(i=0; i<tagsA.length; i++) {
	tagsA[i].onclick = function () {
		this.style.color = 'red';
	}
}
			
var imageNone = document.querySelector('.main img');
imageNone.onclick = function () {
	imageNone.style.display = 'none';
}