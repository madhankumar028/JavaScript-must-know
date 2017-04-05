/**
 * Author Madhankumar<madhankumar028@gmail.com>
 * Cache reference to this in JavaScript
 */

var obj = { name: 'madhan' };

obj.setID = function(id) {
	
	var self = this;

	self.id = id;
	
	console.log(self); // obj = {}

	setTimeout(function() {
		console.log(self); // obj = {}
	}, 1000);
	
	console.log(self.name); // madhan	
}
