// Array.from
// ...
// for...of

function* number() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
  // eslint-disable-next-line
  yield 5;
}

for (var n of number()) {
  console.log(n);
}
console.log("-----");
console.log([...number()]);
console.log("-----");
let [x, y, z] = number();
console.log(`x = ${x},y = ${y},z = ${z}`);
console.log("-----");
const arr = Array.from(number());
console.log(arr);
console.log("-----");

const jane = { "first": "jane", "last": "Doe" };
// jane对象默认是没有实现遍历接口的
/* for (let p of jane) {
  console.log(p);
} */
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);
  for (let propKey of propKeys) {
    yield { prop: propKey, val: obj[propKey] };
  }
}

for (let { prop: key, val: name }
  of objectEntries(jane)) {
  console.log(`${key} = ${name}`);
}