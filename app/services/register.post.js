/**
 * Create a new user
 *
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

/**
 * Check if the email is already exists
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @return {Function}
 */
function checkEmailExists(req, res) {

  return function(callback) {

    di.models.User.findOne({
      email: req.params.email
    }).then(function(user) {

      // Already exists
      if (user) {
        res.status(400);
        return callback(di.text.get('EMAIL_EXISTS'));
      }
      
      callback();
    
    }).catch(function(error) {
    
      callback(di.catcher(error));
      
    });

  };

}

/**
 * Create the user record in the db
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @return {Function}
 */
function createUser(req, res) {

  return function(callback) {

    di.models.User.create({
      email: req.params.email,
      name: req.params.name,
      password: req.params.password
    }).then(function(result) {

      res.status(201);
      callback();

    }).catch(function(error) {
    
      callback(di.catcher(error));
      
    });

  };

}

/**
 * Generate an access token for the created user
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @return {Function}
 */
function generateAccessToken(req, res) {

  return function(callback) {

    di.client.post('/api/login', {
      email: req.params.email,
      password: req.params.password
    }).then(function(result) {

      callback(null, result.data);
    
    }).catch(function(error) {
    
      callback(di.catcher(error));
      
    });

  };

}

module.exports = [

  // Check if the email is already exists
  checkEmailExists,

  // Create the user record in the db
  createUser,

  // Generate an access token for the created user
  generateAccessToken

];
