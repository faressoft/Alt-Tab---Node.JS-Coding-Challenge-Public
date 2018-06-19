/**
 * Body parser to parse json data in the body
 * 
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

/**
 * Body parser to parse json data in the body
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
module.exports = function(req, res, next) {

  di.bodyParser.json()(req, res, next);
  
};
