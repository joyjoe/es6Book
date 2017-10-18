function* createError() {
  while (true) {
    try {
      console.log("...");
      yield;
    } catch (err) {
      if (err !== "d") {
        throw err;
      }
      console.log("inner: ", err);
    }
    console.log("generator outer try");
  }
}

try {
  const g = createError();
  g.next();
  g.throw("d");
  g.throw("c");
  g.throw("b");
  g.throw("a");
  g.next();
  g.next();
} catch (error) {
  console.log("outer: ", error);
}

console.log("------");

function* nocatch() {
  try {
    yield console.log("hello");
    yield console.log("webpack");
    yield console.log("react");
    yield console.log("vue");
  } catch (err) {
    console.log("!!!!");
    yield console.log("no - grunt");
    yield console.log("no - gulp");
    yield console.log("no - bower");
  }
  return;
}

var g1 = nocatch();
try {
  console.log(g1.next());
  console.log(g1.throw());
  // console.log(g1.next());
  // console.log(g1.next());
} catch (e) {
  console.log("outer error");
  console.log(g1.next());
}
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());