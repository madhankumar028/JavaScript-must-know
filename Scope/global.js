/**
 * Author MadhankumarJ <madhankumar028@gmail.com>
 * JavaScript's Globalscope
 */

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