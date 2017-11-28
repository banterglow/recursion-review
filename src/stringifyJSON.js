// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  //  string
  if (_.isFunction(obj) || _.isUndefined(obj)) {
    return;
  } else if (_.isString(obj)) {
    return '\"' + obj + '\"';  
  
  // number, booleans, undefined, null, function
  } else if (_.isNumber(obj) || _.isBoolean(obj) || _.isNull(obj)) {
    return "" + obj;
  
  // array
  } else if (_.isArray(obj)) {
    var stringifiedArray = [];
    for (var i = 0; i < obj.length; i++) {
      stringifiedArray.push(stringifyJSON(obj[i]));
    }
    return '[' + stringifiedArray + ']';

  // object
  } else if (_.isObject(obj)) {
    var objString = "";
    if (Object.keys(obj)[0] !== undefined) {
      for (var key in obj){
        curKey = key;
        curObj = obj[key];
        if (_.isFunction(curObj) || _.isUndefined(curObj)) {
          continue;
        }
        objString += stringifyJSON(curKey) + ":" + stringifyJSON(curObj) + ',';
      }
      objString = objString.slice(0,objString.length-1);
      return '{' + objString + '}';
    }
    return '{}';

    // keysArray = Object.keys(obj);
    // valuesArray = Object.keys(obj);
    // if (keysArray[0] !== undefined) {
    //   return _.object(stringifyJSON(keysArray), stringifyJSON(valuesArray));
    // }
    // return '{}';
  }
};
