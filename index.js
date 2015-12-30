
/**
 * Module dependencies.
 */

var thunkify = require('thunkify');

/**
 * Methods to wrap.
 */

var methods = [
  'grant',
  'exchange',
  'authorize',
  'decision',
  'token',
  'errorHandler',
  'serializeClient',
  'deserializeClient'  
];

/**
 * Wrap `srv`.
 *
 * @param {Server} srv
 * @return {Server}
 * @api public
 */

module.exports = function(srv){
  methods.forEach(function(method){
    srv[method] = thunkify(srv[method]);
  });

  return srv;
};