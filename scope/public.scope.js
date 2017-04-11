/**
 * Author MadhankumarJ<madhankumar028@gmail.com>
 *
 * Public scope in JavaScript
 */
var Module = (function() {
	var user = {
		name: 'Madhan',
		setID: function(id) {
			this.id = id;
		}
	};	
	return {
		showUser: function() {
			console.log(user);
		}
	};	
})();

// public method
Module.showUser(); // user Object

// private method
Module.user.setID(); // Referrence error
