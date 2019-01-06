// generator函数的返回值是可迭代的遍历器对象就是该函数的实例
// generator函数不能用new构造 也就是说内部this并不是遍历器对象
function * g(){

}

g.prototype.hello = function() {
  return "hi, hello";
}

let gobj = g();
console.log(gobj instanceof g);
console.log(gobj.__proto__.constructor);
console.log(gobj.hello());

// 通过原型机制将generator函数的返回值实例与this对象绑定在一起
function* F(){
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}

var f = F.call(F.prototype);
console.log("before next()")
console.log(f.a);
console.log(f.b);
f.next();
console.log("after next()")
console.log(f.a);
console.log(f.b);
f.next();
console.log("after next() again")
console.log(f.a);
console.log(f.b);
console.log(f.c);


