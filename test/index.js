const { assert } = require('chai');
const { palindrome, isPrime } =  require('../src');

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
