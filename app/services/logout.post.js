/**
 * Logout the current user (deactivate the access token)
 *
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

/**
 * Deactivate the access token of the current user
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @return {Function}
 */
function deactivateAccessToken(req, res) {

  return function(callback) {

    di.models.AccessToken.findOneAndUpdate({
      token: req.params.accessToken
    }, {
      active: false
    }).then(function(result) {
      
      callback();
    
    }).catch(function(error) {
    
      callback(di.catcher(error));
      
    });

  };

}

module.exports = [

  // Deactivate the access token of the current user
  deactivateAccessToken

];
