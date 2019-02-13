const { assert } = require('chai');
const { palindrome, isPrime, nthFibonacci, functionBind } =  require('../src');

describe('palindrome()', () => {
  it('should return true or false if the input string is a palindrome', () => {
    assert.equal(palindrome('Anne, I vote more cars race Rome-to-Vienna'), true);
    assert.equal(palindrome('llama mall'), true);
  });

  it('should return false if input string is not a palindrome', () => {
    assert.equal(palindrome('jmoney'), false);
  })
});

describe('isPrime()', () => {
  it('should return true if the input number is prime', () => {
    assert.equal(isPrime(2), true);
    assert.equal(isPrime(3), true);
  });
});

describe('nthFibonacci()', () => {
  it('should return the nth fibonacci number', () => {
    assert.equal(nthFibonacci(0), 0);
    assert.equal(nthFibonacci(1), 1);
    assert.equal(nthFibonacci(2), 1);
    assert.equal(nthFibonacci(3), 2);
    assert.equal(nthFibonacci(4), 3);
  });
  it('should return the nth fibonacci number from 1000 and higher', () => {
    assert.equal(nthFibonacci(1000), 4.346655768693743e+208);
  });
});

describe('functionBind()', () => {
  it('should return a function with a context bound to "this"', () => {
    const matt = {
      name: 'matt',
      shout() {
        return this.name;
      }
    };

    let boundShout = functionBind(matt.shout, matt);
    assert.equal(boundShout(), 'matt');

    boundShout = functionBind(matt.shout, { name : 'lee' });
    assert.equal(boundShout(), 'lee');
  });
});
