(function() {
  'use strict';

  /**
   * XOR implemetation using AI Perceptrons
   * 
   * Since the XOR output set is not linearly separable, we in fact
   * can never train a perceptron to model this operator. Try it out!
   */
  var perceptron = require('../perceptron');
  var XOR = perceptron(2);

  XOR.train([0, 0], 0);
  XOR.train([0, 1], 1);
  XOR.train([1, 0], 1);
  XOR.train([1, 1], 0);

  // do as much retraining here as possible and it will not work

  XOR.predict([0, 0]);
  XOR.predict([1, 1]);
  XOR.predict([1, 0]);

})();