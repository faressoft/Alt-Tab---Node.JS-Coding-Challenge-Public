/**
 * User authentication (login)
 *
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

/**
 * Validate the email and the password params
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @return {Function}
 */
function validateCredentials(req, res) {

  return function(callback) {

    di.models.User.findOne({
      email: req.params.email,
      password: req.params.password
    }).then(function(user) {

      // Invalid credentials
      if (!user) {
        res.status(401);
        return callback(di.text.get('WRONG_AUTH'));
      }
      
      callback(null, user);
    
    }).catch(function(error) {
    
      callback(di.catcher(error));
      
    });

  };

}

/**
 * Generate an access token for the user
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @return {Function}
 */
function generateAccessToken(req, res) {

  return function(user, callback) {

    // Genereate a random token
    var token = di.uuid.v4();

    di.models.AccessToken.create({
      token: token,
      userId: user._id
    }).then(function(result) {

      callback(null, {
        token: result.token,
      });
    
    }).catch(function(error) {
    
      callback(di.catcher(error));
      
    });

  };

}

module.exports = [

  // Validate the email and the password params
  validateCredentials,

  // Generate an access token for the user
  generateAccessToken

];
