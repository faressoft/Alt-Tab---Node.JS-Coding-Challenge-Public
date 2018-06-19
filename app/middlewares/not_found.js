/**
 * Handle not found route
 * 
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

/**
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
module.exports = function(req, res, next) {

  // Send not found message
  res.status(404).send('Not Found !');

  next();

};
