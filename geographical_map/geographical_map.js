var x, link;

function input() {
	x = document.getElementById("input").value;
	link = `https://maps.google.com/maps?q=${x.replace(/ /g, '%20')}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
	document.getElementById("gmap_canvas").src = link;
			}