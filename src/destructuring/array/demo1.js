// 数组解构和对象解构是变量的解构赋值中的重点部分

// 数组解构要求两边的模式相同对于数组则是数量相同
let [a,b,c] = [1,2,3]
console.log(a,b,c);

let [foo, [[bar], baz]] = [1, [[2],3]]
console.log(foo,bar, baz);

let [, , third] = ['foo', 'bar', 'baz']
console.log(third);

let [x, , y] = [1,2,3]
console.log(x, y);

let [head, ...tail] = [1,2,3,4]
console.log(head, tail);


// 默认值
let [m = 1] = [undefined]
console.log(m);

let [o = 1, p = o] = [2]
console.log(o, p);

