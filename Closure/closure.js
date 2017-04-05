/**
 * Author MadhankumarJ<madhankumar028@gmail.com>
 * 
 * JavaScript's closure
 */

(function() {

	'use strict';

	// normal function returns sum of 2 numbers
	function add(a, b) {
		return a + b;
	}

	// Here closure comes into picture
	function multiply(number) {
		return function(factor) {
			return number * factor;
		}
	}

	var twice = multiply(2);

	console.log(twice(5)); // 10

	// another way of invoking multiply	
	console.log(multiply(2)(5)); // 10
}())
