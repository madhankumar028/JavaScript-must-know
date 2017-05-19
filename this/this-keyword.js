/**
 * Author Madhankumar<madhankumar028@gmail.com>
 * Javascript's this at both strict and normal mode
 *
 * 
 * In JavaScript, whenever we create a function new scope will get create.
 */

var obj = { name: 'madhan' };

obj.setID = function(id) {
	
	this.id = id;
	
	console.log(this); // obj = {}
	
	setTimeout(function() {
		console.log(this); // window obj
	}, 5000);

	console.log(this.name); // madhan
}

function strictMode() {
	'use strict';

	console.log(this); // undefined since function is in strict mode
}

/**
 * Example 1
 *
 * Here you are creating a function outer().
 * Current context for outer() will be window.
 * Check it using window.hasOwnProperty(outer());
 * 
 */

function outer() {
    console.log(this); // window obj
    function inner() {
        console.log(this); // window obj
    }
}

/**
 * Example 2
 *
 * Here function setId() is inside the user obj.
 * It's current context will be user obj.
 * 
 */

var user = {
    
    setId(id) {
        
        'use strict';
        this.id = id;
        console.log(this);
        
        setTimeout(function() {
            console.log(this); // ?
        });
    }
}

console.log(user.setId(2));

// Note: Still you can make inner function's context as outer function's context