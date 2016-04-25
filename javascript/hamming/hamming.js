var Hamming = function() {};

Hamming.prototype.compute = function(Strand1, Strand2) {
  if (Strand1.length != Strand2.length) {
    return 'DNA strands must be of equal length.';
  }

  var i = 0;
  var diff = 0;

  while (i < Strand1.length) {
    i++;
    if (Strand1[i] != Strand2[i])
      diff++;
    }


  return diff;

}

module.exports = Hamming;
