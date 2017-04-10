/**
 * Author Madhankumar<madhankumar028@gmail.com>
 * Javascript's this at both strict and normal mode
 */

var obj = { name: 'madhan' };

obj.setID = function(id) {
	
	this.id = id;
	
	console.log(this); // obj = {}
	
	setTimeout(function() {
		console.log(this); // window obj (setTimeout)
	}, 5000);

	console.log(this.name); // madhan
}

function strictMode() {
	'use strict';

	console.log(this); // undefined since globalThis() is in strict mode
}
