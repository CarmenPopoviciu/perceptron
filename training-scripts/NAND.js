(function() {
  'use strict';

  /**
   * NAND implemetation using AI Perceptrons
   */
  var perceptron = require('../perceptron');
  var NANDPerceptron = perceptron(2);

  NANDPerceptron.train([1, 1], 0);
  NANDPerceptron.train([0, 0], 1);
  NANDPerceptron.train([0, 1], 1);
  NANDPerceptron.train([1, 0], 1);
  

  NANDPerceptron.predict([0, 0]);
  NANDPerceptron.predict([1, 1]);
  NANDPerceptron.predict([1, 0]);

})();