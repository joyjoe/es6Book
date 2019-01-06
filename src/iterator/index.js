/**
 * Iterator遍历器: 本质就是为各种不同数据类型提供统一访问机制的接口
 * 实现了该接口就能遍历该数据结构
 * Iterator遍历器接口部署在数据结构的Symbol.iterator属性上
 * 这个方法用于产生遍历器对象 generator函数就是一个遍历器生成函数
 * 
 * ##遍历器对象
 * 1. next()必须实现,用于返回具有value和done的成员
 * 2. return()用于for...of循环提前退出(运行错误/break/continue)时调用
 * 3. throw()
 * 
 * 
 * 很多原生数据结构都部署了这个方法,通过该方法得到遍历器对象.
 * Array, Map, Set, String, arguments, NodeList
 * for...of循环的本质就是调用该接口循环遍历数据结构
 * 
 * 
 * 针对类数组对象最快的部署Iterator接口方法是调用Array.prototype.Iterator接口
 * 自动调用Iterator接口的语法:
 *    yield* 会调用数据结构的遍历器接口
 *    变量解构赋值与扩展运算符
 *    Array.from
 *    Map,Set构造函数
 *    Promise.all()
 *    Promise.race()
 * 
 * 数组的for...of循环只会返回具有数字索引的属性
 * for...in更多为对象而设计
 * for...of则为通用数据结构而设计
 * #### for...of循环结束条件是done从false变为true
 */

const Xrange = require("./xrange");

var obj = {
  'a': 1,
  'b': 2
}

// for...in 循环对象的key
console.log('for...in');
for(let k in obj){
  console.log(k);
}

// for...of 循环对象的value
// 需要部署Symbol.iterator接口方法
// console.log('for...of');
// for(var v of obj){
//   console.log(v);
// }

console.log("字符串调用for...of");
var tel = "18911879325";
for(let n of tel){
  console.log(n);
}


console.log("自定义range函数");
var xrange = new Xrange(10,20,2);
for(let g of xrange){
  console.log(g);
}

var myIterator = {
  * [Symbol.iterator](){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
  }
}
console.log("使用generator生成函数");
console.log([...myIterator]);

