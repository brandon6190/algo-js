const { assert } = require('chai');
const { palindrome } =  require('../src');

describe('Testing.', () => {
  it('This is only a test', () => {
    assert.equal(palindrome(), 4);
  });
});
