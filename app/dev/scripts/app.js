define([
	'marionette',
	'vent',

	'views/mockup',

	'fastclick',

	'bootstrap'
],
function(
	Marionette,
	vent,

	mockup,

	FastClick

) { 'use strict';

	// Declare the new Marionette application
	var app = new Marionette.Application();

	// Set up regions
	app.addRegions({
		main: '#main'
	});

	app.addInitializer(function() {
		FastClick.attach(document.body);
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