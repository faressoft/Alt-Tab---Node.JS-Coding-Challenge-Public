/**
 * Handle database connection and models loading
 * 
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

/**
 * A list of models
 * @type {Object}
 */
var models = {};

/**
 * Load the database models
 */
function loadModels() {

  var files = di.glob.sync(di.path.join(__dirname, 'app/models/*.js'));

  // Foreach model file
  for (var i in files) {

    var modelPath = files[i];
    var modelModule = require(modelPath);
    var model = modelModule.defineSchema(di.mongoose);

    models[model.modelName] = model;

  }

}

/**
 * Connect to the databases and load the models
 * 
 * @return {Promise}
 */
function load() {

  // The database configurations
  var config = di.config.getDatabase();

  // Connect to the database engine
  return di.mongoose.connect(config.url, config.options).then(function() {

    // Load the database models
    loadModels();

    console.log('[*] Database engine is ready');

  }).catch(function(error) {

    console.log('[X] Failed to connect to the database engine', error);
    
  });

}

/**
 * Get a list of loaded models
 * 
 * @return {Object}
 */
function getModels() {

  return models;

}

////////////////////////////////////////////////////
// Module //////////////////////////////////////////
////////////////////////////////////////////////////

module.exports = {
  load: load,
  getModels: getModels
};
