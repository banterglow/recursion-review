// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {  

  var resultArray = [];

//helper function to check each element individually, then check for child nodes
  var checkElement = function(element) {
    //check for class in element's class list
    if(element.classList !== undefined && element.classList.contains(className)) {
      resultArray.push(element);      
    }
    
    // check for child nodes and iterate on each if found
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
