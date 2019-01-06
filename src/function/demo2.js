// rest参数

// 接收多个不定参数 args是一个数组
function add(...args){
  let sum = 0;
  for(let arg of args){
    sum += arg;
  }
  return sum;
}

console.log(add(1,2,3,4,5,6));