// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  //string
  if (_.isString(obj)) {
    return '\"' + obj + '\"';    
  } else if (_.isNumber(obj) || _.isBoolean(obj) || _.isUndefined(obj) || _.isNull(obj) || _.isFunction(obj)) {
    return "" + obj;
  } else if (_.isArray(obj)) {
    var stringifiedArray = [];
    // for (var i = 0; i < obj.length; i++) {
    //   stringifiedArray.push(stringifyJSON(obj[i]));
    // }
    if (_.isEmpty(obj)) {
      return '[]';
    }
    return stringifiedArray;
  } else if (_.isObject(obj)) {
    return _.object(stringifyJSON(Object.keys(obj)),stringifyJSON(Object.values(obj)));
  }
  //array => recurse
  //object => recurse
};
