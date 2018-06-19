/**
 * Catcher
 * 
 * @author Mohammad Fares <faressoft.com@gmail.com>

/**
 * Takes an error object
 * 
 * - For the production environment
 *   - Print the error to STDERR
 *   - Return a generic message
 * - Otherwise
 *   - Print the error to STDERR
 *   - Return the detaild error
 * 
 * @param  {Object} error
 * @return {String} an error message
 */
module.exports = function(error) {

  /**
   * Return the defined error message
   * 
   * @param  {String} key
   * @param  {Object} error
   * @return {String}
   */
  function text(key, error) {

    // Print the error
    console.error('[X]', error);

    // For the production environment
    if (process.env.NODE_ENV == 'production') {
      return di.text.get(key);
    }

    return di.text.get(key) + ' ' + error;
    
  }

  return text('SOMETHING_WRONG', error);

};
