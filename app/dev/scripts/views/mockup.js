define([
	// Initializers -------
	'marionette',
	'templates'
	
	// Views --------------
	
	// Collections --------
	
	// Regions ------------
	
	// Misc ---------------

],
function(
	// Initializers -------
	Marionette,
	templates
	
	// Views --------------
	
	// Collections --------
	
	// Regions ------------

) { 'use strict';
	return Marionette.ItemView.extend({

		// Template
		template: templates.mockup,

		// Give it an ID
		id: 'mockup-container'
	});
});