(function(exports) {

  'use strict';

  /**
   * AI Perceptron
   * // TODO(@carmen) add complete description
   * 
   * @param {Number} inputsCount The perceptron's number of inputs
   */
  function perceptron(inputsCount) {
    if(!inputsCount) throw new Error('Please specify a number of inputs for this perceptron');

    var  weights = initializeWeights(inputsCount);
    // var learningRate = 0.1 (not very clear if we actually need this value)

    return {
      predict: predict,
      train: train
    };

    /////

    /**
     * Prediction function
     * @param {Array} inputs Perceptron's input values
     * @return {Number} 0 or 1
     */
    function predict(inputs) {
      validateInputs(inputs);

      var extendedInputs = [1].concat(inputs); // input corresponding to bias will always be 1
      var sum = extendedInputs.reduce(function(prev, crr, crrIndex) {
        return (prev + (crr * weights[crrIndex]));
      }, 0);
      sum = (sum > 0) ? 1 : 0;
      console.log('Predicted result is: ', sum);
      return sum;
    }

    /**
     * Training function. Implements the Perceptron Training Algorithm
     * @param {Array} inputs The input values
     * @param {Number} expected Expected result for training set
     */
    function train(inputs, expected) {
      validateInputs(inputs);
      if(expected === undefined) throw new Error('Missing expected value for training set');

      console.log('Training with inputs ' + inputs + ' and expected result ' + expected);
      console.log('Current weights are: ', weights);

      var predicted = predict(inputs);
      var extendedInputs = [1].concat(inputs);
      if(predicted !== expected) {
        weights = weights.map(function(weight, index) {
          return weight + (expected - predicted)*extendedInputs[index];
        });

        console.log('Predicted value did not match expected value');
        console.log('Adjusting weights to: ', weights);
      }
    }

    /**
     * Initialize weights to random numbers between 0 and 1
     * @param {Number} inputsCount Number of inputs to set weigths for 
     * @return {Array} The weight values
     */
    function initializeWeights(inputsCount) {
      var result = [];
      // weights[0] represents the bias
      while(inputsCount >= 0) {
        result[inputsCount] = Math.random();
        inputsCount--;
      }
      console.log('Weights initialized to: ', result);
      return result;
    }

    /**
     * Throws a new error if given inputs are invalid
     * @param {Array} inputs Inputs to validate
     */
    function validateInputs(inputs) {
      // TODO (@carmen) validate non 0/1 values
      if(!inputs || !inputs.length) throw new Error('Missing inputs');
      if(inputs.length !== (weights.length-1)) throw new Error('Invalid number of inputs. Expected ' + (weights.length-1));
    }
  }

  module.exports = perceptron;

})();