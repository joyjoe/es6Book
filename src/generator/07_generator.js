function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const g = gen();
console.log(g.next());
console.log(g.next());
// console.log(g.return());
console.log(g.return("hello"));
console.log(g.next());
console.log(g.next());
console.log(g.next());

function* genfinal() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
    yield 6;
  }
  yield 6;
  return 7;
}
console.log("-------");
var g2 = genfinal();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
// console.log(g2.next());
// console.log(g2.next());
// console.log(g2.next());
console.log(g2.return());
console.log(g2.next());
console.log(g2.next());