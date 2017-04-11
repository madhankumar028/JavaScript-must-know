/**
 * Author MadhankumarJ<madhankumar028@gmail.com>
 *
 * Private scope in JavaScript
 */

/*(function() {
	// Private scope is here
})*/

(function() {

	'use strict';

	var user = {
		name: 'Madhan',
		setID: function(id) {
			this.id = id;
		}
	};

	user.setID(12);

	function showUser() {
		return user['name']; // accessing the global variable
	}
}())

user.setID(); // user is not defined Referrence error