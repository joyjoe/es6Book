/**
function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const g = gen();
console.log(g.next()); // {v: 1  done: false}
console.log(g.next()); // {v: 2  done: false}
// console.log(g.return()); // {v: undefined  done: true}
console.log(g.next()); // {v: 3  done: false}
console.log(g.next()); // {v: 4  done: true}
console.log(g.return("hello")); // {v: hello  done: true}
console.log(g.next()); // {v: undefined  done: true}
*/



function* genfinal() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
    yield 6;
  }
  yield 7;
  return 8;
}
console.log("-------");

function process1(generator){
  console.log(generator.next());  // 1 false
  console.log(generator.next());  // 2 false
  console.log(generator.next());  // 3 false
  console.log(generator.next());  // 4 false
  // 已经进入finally那么只会执行到下一次yield同时状态变为true结束遍历
  // console.log(generator.return()); // undefined true
  console.log(generator.return(10)); // 10 true
  console.log(generator.next());   // undefined true
  console.log(generator.next());   // undefined true
  console.log(generator.next());   // undefined true
}

function process2(generator){
  console.log(generator.next());  // 1 false
  console.log(generator.next());  // 2 false
  // 此时并没有进入到finally代码块则不会改变遍历状态 同时会直接执行finally代码块
  // console.log(generator.return()); // 4 false
  // 假设传入100那么等finally代码块中的yield执行完毕(也就是外层next()执行完毕)再改变状态 同时返回值为return的参数
  console.log(generator.return(100)); // 4 false
  console.log(generator.next());   // 5 false
  console.log(generator.next());   // 6 false
  console.log(generator.next());   // undefined(此时的返回值应该是return的参数值) true
  // 100 true
  console.log(generator.next());   // undefined true 
}

// process1(genfinal());

process2(genfinal());
