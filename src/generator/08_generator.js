/* function* foo() {
  yield 2;
  yield 3;
  yield* "prestr";
  return "foo";
}

function* bar() {
  yield 1;
  const v = yield* foo();
  console.log(`v=${v}`);
  yield 4;
}

for(const b of bar()) {
  console.log(b);
} */

/**
  {v:1, done: false}
  {v:2, done: false}
  {v:3, done: false}
  {v:p, done: false}
  {v:r, done: false}
  {v:e, done: false}
  {v:s, done: false}
  {v:t, done: false}
  {v:r, done: false}
  v=foo
  {v:4, done: true}
*/

/**
console.log("-------");

var arr = [1, [2, 3], [4, 5, [6, 7]]
];

function* itertree(tree) {
  if (Array.isArray(tree)) {
    // for (let i = 0; i < tree.length; i++) {
    //   yield* itertree(tree[i]);
    // }
    for(let item of tree){
      yield* itertree(item)
    }
  } else {
    yield tree;
  }
}

for (const v of itertree(arr)) {
  console.log(v);
}

console.log("===========");
*/

// 遍历二叉树

function Tree(left, label, right) {
  this.left = left;
  this.right = right;
  this.label = label;
}

// 左中右遍历
function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}
// 将某种格式的数组转换为二叉树数据结构
function make(arr) {
  if (arr.length == 1) {
    return new Tree(null, arr[0], null);
  } else {
    return new Tree(make(arr[0]), arr[1], make(arr[2]));
  }
}

const data = [
  [
    ["a"], "b", ["c"]
  ], "d", [
    ["e"], "f", ["g"]
  ]
];

let tree = make(data);

// a b c d e f g
for (const leaf of inorder(tree)) {
  console.log(leaf);
}
