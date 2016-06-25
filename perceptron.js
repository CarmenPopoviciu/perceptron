
'use strict';

/**
 * AI Perceptron
 * // TODO(@carmen) add complete description
 * 
 * @param {Number} inputsCount The perceptron's number of inputs
 */
function perceptron(inputsCount) {
  if(!inputsCount) throw new Error('Please specify the number of inputs for this perceptron');

  var  weights = setWeights(inputsCount);
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
    if(!inputs || !inputs.length) throw new Error('Missing inputs to predict output for');

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
    if(!inputs || !inputs.length) throw new Error('Missing training set');
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
   * @param {Number} count
   * @return {Array} The weight values
   */
  function setWeights(count) {
    var result = [];
    // weights[0] represents the bias
    while(count >= 0) {
      result[count] = Math.random();
      count--;
    }
    console.log('Weights initialized to: ', result);
    return result;
  }
}

module.exports = perceptron;