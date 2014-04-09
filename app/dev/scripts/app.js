define([
	'marionette',
	'vent',

	'views/mockup',

	'bootstrap'
],
function(
	Marionette,
	vent,

	mockup

) { 'use strict';

	// Declare the new Marionette application
	var app = new Marionette.Application();

	// Set up regions
	app.addRegions({
		main: '#main'
	});

	app.addInitializer(function() {

	});

	/**
	 * The router triggers this to show the mockup
	 */
	vent.on('nav:mockup', function() {
		console.log('app:mockup');

		app.main.show( new mockup() );
	});

	// FINALLY... RETURN THE APP!!!!
	return app;
});