function palindrome(string) {
  let reverseStr = string.toLowerCase().split('').reverse().join('').replace(/[\W_]/g, '');
  let regStr = string.toLowerCase().replace(/[\W_]/g, '');
  return reverseStr === regStr ? true : false;
}

function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function nthFibonacci(number, memo=[]) {
  function memoFunc(num) {
    if (memo[num]) {
      return memo[num];
    }

    if (num === 0) {
      return 0;
    }

    if (num === 1 | num === 2) {
      return 1;
    }

    return  memo[num] = nthFibonacci(num - 1, memo) + nthFibonacci(num - 2, memo);
  }
  return memoFunc(number);
}

function functionBind(func, context) {
  context.func = func;
  return () => context.func();
}


module.exports = {
  palindrome,
  isPrime,
  nthFibonacci,
  functionBind
};
