/**
 * Access Token
 * To store the generated access tokens
 * 
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

/**
 * Define the model schema
 * 
 * @param  {Mongoose} mongoose
 * @return {Model}
 */
function defineSchema(mongoose) {

  var schema = new mongoose.Schema({
    token: {
      type: String,
      required: true,
      unique: true
    },
    active: {
      type: Boolean,
      default: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  });

  return mongoose.model('AccessToken', schema, 'access_token');
  
};

////////////////////////////////////////////////////
// Module //////////////////////////////////////////
////////////////////////////////////////////////////

module.exports = {
  defineSchema: defineSchema
};
