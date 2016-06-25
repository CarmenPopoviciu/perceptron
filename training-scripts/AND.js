(function() {
  'use strict';

  /**
   * AND implemetation using AI Perceptrons
   */
  var perceptron = require('../perceptron');
  var ANDPerceptron = perceptron(2);

  ANDPerceptron.train([0, 0], 0);
  ANDPerceptron.train([0, 1], 0);
  ANDPerceptron.train([1, 0], 0);
  ANDPerceptron.train([1, 1], 1);

  ANDPerceptron.predict([0, 0]);
  ANDPerceptron.predict([1, 1]);
  ANDPerceptron.predict([1, 0]);

})();