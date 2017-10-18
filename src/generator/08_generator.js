function* foo() {
  yield 2;
  yield 3;
  yield*"prestr";
  return "foo";
}

function* bar() {
  yield 1;
  const v = yield* foo();
  console.log(`v=${v}`);
  yield 4;
}

for (const b of bar()) {
  console.log(b);
}

console.log("-------");

var arr = [1, [2, 3],
  [4, 5, [6, 7]]
];

function* itertree(tree) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      yield* itertree(tree[i]);
    }
  } else {
    yield tree;
  }
}

for (const v of itertree(arr)) {
  console.log(v);
}

console.log("===========");

// 遍历二叉树

function Tree(left, label, right) {
  this.left = left;
  this.right = right;
  this.label = label;
}

function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}

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

for (const leaf of inorder(tree)) {
  console.log(leaf);
}