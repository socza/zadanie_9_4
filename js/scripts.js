function drawTree(h) {

	for (var i = 0; i < h; i++) {
		
		star = "";
		
		for (var k = h - 1; k > i; k--) {
			star += " ";
		}
		
		star += "*";

		for (var j = 0; j < i; j++ ) {
			star += "**";
		}

	console.log(star);
	
	}

}

drawTree(13);