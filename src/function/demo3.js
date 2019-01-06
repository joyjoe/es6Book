// 尾调用
// 尾递归

// 普通递归
// function fib(n){
//   if(n == 1 || n == 2 ) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// 尾递归
function fib(n, init = 1, prev = 1){
  if(n == 1 || n == 2 ) {
    return prev;
  }
  return fib(n - 1, prev, prev + init);
}

// 1 1 2 3 5 8 13 21 34 55
// console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));
console.log(fib(101));
console.log(fib(1001));