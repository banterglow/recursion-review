// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  //string
  if (_.isString(obj)) {
    return obj;    
  } else if (_.isNumber(obj) || _.isBoolean(obj)) {
        
  } else if (_.isNull(obj)) {
  } else if (_.isUndefined(obj)) {
  } else if (_.isArray(obj)) {
  } else if (_.isFunction(obj)) {
  } else if (_.isObject(obj)) {
  }
  //array => recurse
  //object => recurse
};
