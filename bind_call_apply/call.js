/**
 * Author MadhankumarJ<madhankumar028@gmail.com>
 * 
 * call() in JavaScript
 * Using call() is similar to invoking a function like functionName();
 */
(function() {

	// 'use strict';

	var JSDataStructure = {
		name : ['Object', 'primitive']
	};

	for (var i = 0; i < JSDataStructure.name.length; i++) {
		console.log(this); // window object
	}

	for (var i = 0; i < JSDataStructure.name.length; i++) {
		(function() {			
			console.log(this); // JSDataStructure.name[i]
		}).call(JSDataStructure.name[i]);
	}

}())