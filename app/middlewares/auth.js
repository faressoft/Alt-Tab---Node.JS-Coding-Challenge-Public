/**
 * Authorization by access_token for api services
 *
 * - To check if the access_token is valid and inject
 * the user's object into the req object
 *
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

/**
 * Send an unauthorized response
 * 
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
var sendUnauthorized = function(req, res, next) {

  // Response wrapper
  res = new di.Response(res);
  res.setStatus(false);
  res.error(di.text.get('UNAUTH'), {}, 401);

};

/**
 * Authorization with access_token
 * 
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = function(req, res, next) {

  // Is not a service
  if (!req.service) {
    return next();
  }

  // Is auth is not required
  if (di.is.not.truthy(req.service['auth'])) {
    return next();
  }

  // Check if the access token is sent in the headers
  if (di.is.propertyDefined(req.headers, 'authorization') && 
      di.is.not.propertyDefined(req.params, 'access_token')) {

    var authHeader = req.headers.authorization.split(' ');

    if (authHeader[0].toLowerCase() === 'bearer') {
      // Add the access token as a param
      req.params.access_token = authHeader[1];
    }

  }

  // Add access_token as a required param
  req.service.params['access_token'] = {
    required: true,
    type: 'string'
  };

  // Check if access_token param is not passed
  if (di.is.not.propertyDefined(req.params, 'access_token')) {
    return sendUnauthorized(req, res, next);
  }

  di.models.AccessToken.findOne({
    token: req.params.access_token,
    active: true
  }).then(function(accessToken) {

    // Is not auth
    if (!accessToken) {
      return sendUnauthorized(req, res, next);
    }

    di.models.User.findOne({
      _id: di.mongoose.Types.ObjectId(accessToken.userId)
    }).select('-password').then(function(user) {

      req.user = user;
      next();
    
    });

  }).catch(function(error) {

    return sendUnauthorized(req, res, next);

  });

};
