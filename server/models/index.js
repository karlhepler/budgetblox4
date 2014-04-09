var mongoose = require('mongoose');
var schemas = require('../schemas/index');

/**
 * This gets the model - checks to see if the user is logged in
 * @param  {string} modelName 					The name of the model. ex. bank, budget, etc
 * @param  {mongoose.Schema} schema    	The mongoose schema
 * @param  {object} req       					The request object
 * @return {mongoose.model}           	Returns the correct mongoose model
 */
function getModel(modelName, schema, req) {
	if ( typeof req.user !== 'undefined' && req.user._id !== 'undefined' ) {
		console.log('*** USER: '+req.user._id.toString()+' ***');
		return mongoose.model(modelName, schema, modelName+'_'+req.user._id.toString());
	}
	else {
		console.log('*** NO USER ***');
		return mongoose.model(modelName, schema, modelName);
	}
}

/**
 * EXPORTS!
 */

// exports.example = function(req) { return getModel('example', schemas.example, req); };