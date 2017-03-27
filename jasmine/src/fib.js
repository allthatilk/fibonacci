'use strict'

function Fibonacci() {
  this.numbers = [0, 1]
}

// Fibonacci.prototype.calculate = function(number) {
//   var index = 0
//   var next = null
//
//   for (var i = 0; i < number; i++) {
//     next += this.numbers[index] + this.numbers[index + 1]
//     this.numbers.push(next)
//     next = 0
//     index += 1
//   }
// }

Fibonacci.prototype.calculate = function(index) {
  if (index <= 1) {
    return 1
  } else {
    return this.calculate(index - 1) + this.calculate(index - 2)
  }
}


// fibonacci(n) == fibonacci(n - 1) + fibonacci(n - 2)
