function wrapper(generatorFunc) {
  return function(...args) {
    let generatorObj = generatorFunc(...args);
    generatorObj.next();
    return generatorObj;
  };
}

var wrapped = wrapper(function*() {
  console.log(`First Input: ${yield}`);
  return "DONE";
});

var g = wrapped(); //返回一个generator且调用过一次next
console.log(g);
console.log(g.next("hello")); // 当你再次调用时可以传入参数
console.log(g.next("es6"));
console.log(g.next("!!!"));