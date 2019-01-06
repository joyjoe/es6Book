// 函数参数可以定义默认值，但是参数变量是默认声明的，不能够再次使用let和const进行声明，但是可以用var再次声明
// function f(x){
//   let x = 1;
//   // const x = 1;
//   console.log(x);
// }
// f(5)

// 参数默认值是惰性求值的

// length的含义是用来记录该函数预期传入的参数个数，所以如果有某个参数定义了默认值那么此参数连同其后定义的所有参数一起都不会被记录在length属性之中

// 函数声明时参数会形成一个单独的作用域，此作用域与函数体内部的作用域是两个作用域
var x = 1;
function f(x, y) {
  var x = 3;
  y();
  console.log(x);
}
var y = function(){
  x = 2;
};
f(x, y); // x=3
console.log("---");
console.log(x); // 2
