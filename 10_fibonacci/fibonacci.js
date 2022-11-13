const fibonacci = function(num) {
  if(num < 0) {
    return "OOPS";
  }
  let arr = [0,1];
  for(let i = 0; i <= num; i++) {
    arr.push(arr[i]+arr[i+1]);
  }
  return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
