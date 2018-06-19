/**
 * Handle serving the static contants under the app_client directory
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

  di.express.static(di.path.join(__dirname, '../../app_client'), {redirect: false})(req, res, next);

};
