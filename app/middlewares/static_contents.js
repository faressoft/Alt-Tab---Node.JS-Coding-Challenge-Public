/**
 * Handle serving the static contants under the public directory
 * 
 * @author Mohammad Fares <mfares@souq.com>
 */

/**
 * Handle serving the static contants under the public directory
 * 
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
module.exports = function(req, res, next) {

  di.express.static(di.path.join(__dirname, '../../public'), {redirect: false})(req, res, next);

};
