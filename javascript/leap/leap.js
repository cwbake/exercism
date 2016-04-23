var LeapYear = function(){};

LeapYear.prototype.isLeap = function (input) {
  if (typeof input != 'number')
    return false;

  if (input % 4 === 0) {
      if (input % 100 === 0) {
        return (input % 400 === 0) ? true : false;
      }
      return true;
  } else {
    return false;
  }

};

module.exports = LeapYear
