'use strict';

function makeCalculator() {
  let currentResult = 0; // Змінив назву, щоб уникнути плутанини з 'this.result'

  const calculator = {
    // Expose result as a property
    get result() {
      return currentResult;
    },

    // Методи операцій, які просто повертають результат (не змінюють state)
    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      // Додаємо перевірку ділення на нуль
      if (b === 0) {
        return NaN;
      }

      return a / b;
    },

    // Метод operate тепер відповідає за оновлення 'currentResult'
    operate(callback, number) {
      currentResult = callback(currentResult, number);

      return this; // Enable chaining
    },

    // Метод reset
    reset() {
      currentResult = 0;

      return this; // Enable chaining
    },
  };

  return calculator;
}

module.exports = makeCalculator;
