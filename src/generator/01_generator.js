// generator函数是一个状态机，也是一个遍历器对象生成器。
// 返回的是一个遍历器对象，可以使用next()方法依次遍历内部每一个状态，并且可以向内部传入参数值

const arr = [1, [2, 3],
  [4, 5, [6, 7]]
];
var flat = function* flat(arr) {
  for (var item of arr) {
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};
// for...of 循环会自动遍历generator函数.但是当done属性变为true时就会自动终止，所以最后一个值不会显示出来
for (var f of flat(arr)) {
  console.log(f);
}

const rs = flat(arr);
console.log(rs);
console.log(rs[Symbol.iterator]);
console.log(rs[Symbol.iterator]() === rs);


console.log("========");

function* kong() {
  yield this.x = 'kong';
}

var obj = {};
var kbind = kong.bind(obj);
var k = kbind();
console.log(k.x); //undefined
console.log(obj);
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(obj);