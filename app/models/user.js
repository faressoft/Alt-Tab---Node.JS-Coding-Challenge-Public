/**
 * User
 * To store the registered users
 * 
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

/**
 * Encrypt a password using md5 with a salt value
 * 
 * @param  {String} value
 * @return {String}
 */
function encryptPassword(value) {

  return di.md5(di.config.getSecuritySalt() + value);
  
}

/**
 * Define the model schema
 * 
 * @param  {Mongoose} mongoose
 * @return {Model}
 */
function defineSchema(mongoose) {

  var schema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      set: encryptPassword
    },
  });

  return mongoose.model('User', schema, 'user');
  
};

////////////////////////////////////////////////////
// Module //////////////////////////////////////////
////////////////////////////////////////////////////

module.exports = {
  defineSchema: defineSchema
};
