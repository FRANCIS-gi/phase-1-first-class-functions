function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      // Do something
    }
    // Return the named function
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    // Define an anonymous function and return it directly
    return function() {
      // Do something
    };
  }
  
  module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
  