// Object.keys()
// Object.values()
// Object.entries()

var obj1 = {
  [Symbol("a")]: "1",
  "b": "2",
  c: 3,
  "1": "a"
};

// keys() 返回自身可枚举属性的键名数组
console.log(Object.keys(obj1));
// 1 'b' 'c'

// values() 返回自身可枚举属性的键值数组
console.log(Object.values(obj1));
// 'a' '2' 3

// entries() 返回自身可枚举属性的键值对数组
console.log(Object.entries(obj1));
// [1, 'a']  ['b', '2']  ['c', 3]

// spread扩展运算符 ...
// 对象的结构赋值中，只要使用了...的变量才不会复制继承自原型对象的属性
// 而单纯的变量是可以复制继承属性的
// 扩展运算符可以用于取出参数对象的所有可枚举属性