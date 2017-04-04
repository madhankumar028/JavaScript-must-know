/**
 * Author MadhankumarJ <madhankumar028@gmail.com>
 * JavaScript's Localscope
 */

(function() {

	'use strict';

	function showUser() {

		// Local variable available only to showUser
		var user = {
			name: 'Madhan',
			setID: function(id) {
				this.id = id;
			}
		};

		return user.name;
	}

	console.log(user.name); // Reference Error	
}())