self.addEventListener('message', function(e) {
	var message = e.data;
	
	if(message == "stop") {
		self.postMessage("Punching out");
		self.close();
	} else {
		self.postMessage("The worker just received:\"" + e.data + "\"");
	}
}, false);