// DEFINE ALL SHORT-NAMES FOR REQUIRE JS ----------------------------------------------
require.config({
	paths: {
		'jquery': 							'vendor/jquery/dist/jquery',
		
		'backbone': 						'vendor/backbone-amd/backbone',
		'backbone.babysitter': 	'vendor/backbone.babysitter/lib/amd/backbone.babysitter',
		'backbone.wreqr': 			'vendor/backbone.wreqr/lib/amd/backbone.wreqr',
		'marionette': 					'vendor/backbone.marionette/lib/core/amd/backbone.marionette',
		'backbone.filteredCollection': 'vendor/backbone-filtered-collection/backbone-filtered-collection',

		'underscore': 					'vendor/underscore-amd/underscore',
		'tpl': 									'vendor/requirejs-tpl/tpl',
		'bootstrap': 						'vendor/bootstrap/dist/js/bootstrap',
		'jqueryui': 						'vendor/jquery-ui-amd/jquery-ui-1.10.0/jqueryui'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery']
		}
	}
});
//-------------------------------------------------------------------------------------


// Require what it needs, then start the app!
require(['app', 'backbone', 'routers/index', 'controllers/index', 'vent'], function(app, Backbone, Router, Controller, vent) {
	'use strict';

	// Start the app
	app.start();

	// Instantiate the router
	var router = new Router({
		controller: Controller
	});

	// Start recording history
	Backbone.history.start({
		// pushState: true
	});


	// UPDATE THE URL WHEN A NAVIGATION EVENT IS TRIGGERED
	vent.on('nav:mockup', function() {
		// Set defaults
		console.log('main:mockup');

		router.navigate('mockup');
	});
});