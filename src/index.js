function palindrome(string) {
  let reverseStr = string.toLowerCase().split('').reverse().join('').replace(/[\W_]/g, '');
  let regStr = string.toLowerCase().replace(/[\W_]/g, '');
  return reverseStr === regStr ? true : false;
}

function isPrime(num) {

}

function nthFibonacci(num, memo=[]) {

}

function functionBind(func, context) {

}


module.exports = {
  palindrome,
  isPrime,
  nthFibonacci,
  functionBind
};
