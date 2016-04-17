

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
  if (input.length==0) {
    return "Hello, World!";
  } else {
    return "Hello," + input + "!";
  }

};

module.exports = HelloWorld;
