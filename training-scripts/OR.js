(function() {
  'use strict';

  /**
   * OR implemetation using AI Perceptrons
   */
  var perceptron = require('../perceptron');
  var ORPerceptron = perceptron(2);

  ORPerceptron.train([0, 0], 0);
  ORPerceptron.train([0, 1], 1);
  ORPerceptron.train([1, 0], 1);
  ORPerceptron.train([1, 1], 1);

  ORPerceptron.predict([0, 0]);
  ORPerceptron.predict([1, 1]);
  ORPerceptron.predict([1, 0]);

})();