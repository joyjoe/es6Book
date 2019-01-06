// 只要在块级作用域内存在let声明语句，那么对该变量的控制就由内部决定，而不受全局变量的控制
// let声明变量之前不能使用该变量(无变量提升)
// try{
//   tmp = "abc";
//   console.log(tmp); // ReferenceError
//   let tmp;
//   console.log(tmp);
//   tmp = 123;
//   console.log(tmp);
// } catch(e){
//   console.log(e);
// }

// 同一个作用域内不能使用let const重复声明相同变量
// 在块级作用域内声明的函数等同于let声明的变量，在块级作用域之外无法使用
// 尽量避免在块级作用域内声明函数
// function f(){
//   console.log("全局作用域下的函数");
// }
// (function(){
//   if(true){
//     function f() {
//       console.log("我是IIFE形式下的块级作用域内部函数");
//     }
//   }
//   f();
// })();