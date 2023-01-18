module.exports = function reverse (n) {
  let digits = Math.abs(n)
  let str = String(digits);
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result = `${str[i]}${result}`
  }
  let finalResult = Number(result);
  return finalResult;
}
