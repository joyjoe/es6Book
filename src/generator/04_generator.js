function* bar() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  return 7;
}

for (var n of bar()) {
  console.log(n);
}

console.log("------");

function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    [prev, curr] = [curr, curr + prev];
    yield curr;
  }
}

for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}