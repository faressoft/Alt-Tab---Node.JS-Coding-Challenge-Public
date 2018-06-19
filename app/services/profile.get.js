/**
 * Get the current user's profile
 *
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

/**
 * Get the current user's profile
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @return {Function}
 */
function getUser(req, res) {

  return function(callback) {

    callback(null, {
      id: req.user._id,
      email: req.user.email,
      name: req.user.name
    });

  };

}

module.exports = [

  // Get the current user's profile
  getUser

];
