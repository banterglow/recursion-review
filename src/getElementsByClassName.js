// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {  

  var resultArray = [];

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
  
  checkElement(document.body);

  // for (let i = 0; i < elementArray.length; i++) {
  //   if (elementArray[i].classList.contains(className)) {
  //     resultArray.push(elementArray[i]);
  //   }

  //   if (elementArray[i].children) {
  //     var childrenArray = elementArray[i].children;
  //     for (let j = 0; j < childrenArray.length; j++) {
  //       resultArray = resultArray.concat(childrenArray[j].getElementsByClassName(className));      
  //     }
  //   }
  // }

  return resultArray;
};

// string
// use value to check if matches given string
// add to central array