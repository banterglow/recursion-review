// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {  

  var resultArray = [];

//helper function to check each element individually
  var checkElement = function(element) {
    if(element.classList !== undefined && element.classList.contains(className)) {
      resultArray.push(element);      
    }
    if(element.childNodes !== undefined) {
      var childrenArray = element.childNodes;
      for (let j = 0; j < childrenArray.length; j++) {
        checkElement(childrenArray[j]);    
      }
    }
  };
  
// invoke the helper function
  checkElement(document.body);

  return resultArray;
};
