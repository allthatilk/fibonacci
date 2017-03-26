'use strict'

describe("Fibonacci Sequence", function() {
  var fib

  beforeEach(function() {
    fib = new Fibonacci()
  })

  describe("calculation", function() {
    it("to a given number of places starting from 0", function() {
      console.log(fib.numbers)
      fib.calculate(10)
      expect(fib.numbers[10]).toEqual(55)
    })
    it("the 2nd index position to be 1", function() {
      fib.calculate(2)
      console.log(fib.numbers[2])
      expect(fib.numbers[2]).toEqual(1)
    })
    it("the 3rd index position to be 2", function() {
      fib.calculate(3)
      console.log(fib.numbers)
      expect(fib.numbers[3]).toEqual(2)
    })
  })
})
