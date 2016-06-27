(function() {
  'use strict';

  /**
   * Thomas Goes To Hollywood
   * 
   * This is an AI Perceptron trained to decide whether @ThomasBurleson
   * should got to Hollywood or not. 
   * 
   * The perceptron takes 3 inputs, with the following semantics:
   *    - x1 -> good food (Thomas likes good food)
   *    - x2 -> apartment with nice view (a nice view of the city is important for him)
   *    - x3 -> friends will come along (Thomas <3s having friends around)
   * 
   * The relation between the weights of the three inputs is: w3>w2>w1. See training 
   * set below for a complete understanding of the model's expected behaviour. 
   * 
   * The data set is a linearly separable classification...scouts honour! ;)
   */

  /**
   * QUESTIONS
   * 
   * 1. How do we determine if a given set of inputs is linearly separable
   * 2. How do we find the maximum-margin hyperplane (a hyperplane for which 
   *    the distance from it to the nearest data point on each side is maximized)
   * 3. Retrain function. Sometimes the given training data is not enough to 
   *    accurately fine grain the weights. This means we should either train
   *    the perceptron further, with the same data, or retrain it with a completely
   *    different set of inputs 
   * 4. Is there a variable that can tell us the accuracy of the current hyperplane,
   *    based on the training data fed to the neuron so far
   * 5. How do we calculate the perceptron's precision
   */
  var perceptron = require('../perceptron');
  var thomas = perceptron(3);

  // train with a complete set of possible input combinations
  thomas.train([0,0,0],0);
  thomas.train([0,0,1],1);
  thomas.train([0,1,0],0);
  thomas.train([0,1,1],1);
  thomas.train([1,0,0],0);
  thomas.train([1,0,1],1);
  thomas.train([1,1,0],1);
  thomas.train([1,1,1],1);

  // retrain
  // the number of retraining iterations over the complete set of input combinations
  // was determined by simple trial and error, until the prediction error margin 
  // became close/equal to zero
  thomas.train([0,0,0],0);
  thomas.train([0,0,1],1);
  thomas.train([0,1,0],0);
  thomas.train([0,1,1],1);
  thomas.train([1,0,0],0);
  thomas.train([1,0,1],1);
  thomas.train([1,1,0],1);
  thomas.train([1,1,1],1);

  thomas.train([0,0,0],0);
  thomas.train([0,0,1],1);
  thomas.train([0,1,0],0);
  thomas.train([0,1,1],1);
  thomas.train([1,0,0],0);
  thomas.train([1,0,1],1);
  thomas.train([1,1,0],1);
  thomas.train([1,1,1],1);

  thomas.train([0,0,0],0);
  thomas.train([0,0,1],1);
  thomas.train([0,1,0],0);
  thomas.train([0,1,1],1);
  thomas.train([1,0,0],0);
  thomas.train([1,0,1],1);
  thomas.train([1,1,0],1);
  thomas.train([1,1,1],1);

  thomas.train([0,0,0],0);
  thomas.train([0,0,1],1);
  thomas.train([0,1,0],0);
  thomas.train([0,1,1],1);
  thomas.train([1,0,0],0);
  thomas.train([1,0,1],1);
  thomas.train([1,1,0],1);
  thomas.train([1,1,1],1);

  thomas.train([0,0,0],0);
  thomas.train([0,0,1],1);
  thomas.train([0,1,0],0);
  thomas.train([0,1,1],1);
  thomas.train([1,0,0],0);
  thomas.train([1,0,1],1);
  thomas.train([1,1,0],1);
  thomas.train([1,1,1],1);

  thomas.train([0,0,0],0);
  thomas.train([0,0,1],1);
  thomas.train([0,1,0],0);
  thomas.train([0,1,1],1);
  thomas.train([1,0,0],0);
  thomas.train([1,0,1],1);
  thomas.train([1,1,0],1);
  thomas.train([1,1,1],1);

  thomas.train([0,0,0],0);
  thomas.train([0,0,1],1);
  thomas.train([0,1,0],0);
  thomas.train([0,1,1],1);
  thomas.train([1,0,0],0);
  thomas.train([1,0,1],1);
  thomas.train([1,1,0],1);
  thomas.train([1,1,1],1);

  thomas.train([0,0,0],0);
  thomas.train([0,0,1],1);
  thomas.train([0,1,0],0);
  thomas.train([0,1,1],1);
  thomas.train([1,0,0],0);
  thomas.train([1,0,1],1);
  thomas.train([1,1,0],1);
  thomas.train([1,1,1],1);
  // end retrain

  thomas.predict([0,0,0]); // -> 0
  thomas.predict([1,1,1]); // -> 1
  thomas.predict([0,1,0]); // -> 0
  thomas.predict([0,1,1]); // -> 1
  thomas.predict([1,0,1]); // -> 1
  thomas.predict([1,0,0]); // -> 0
})();