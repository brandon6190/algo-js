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
