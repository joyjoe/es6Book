/**
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
  console.log(g.next()); //{v: undefined  done:false}
  g.throw("d"); // inner: d
  // g.throw("c");
  // g.throw("b");
  // g.throw("a");
  // 由于generator内部有try...catch所以前面的throw不会影响下一次的next()
  console.log(g.next()); // 在generator outer try, ...之后打印 {v: undefined done: false}
  // g.next();
} catch (error) {
  console.log("outer: ", error); //outer: c
}
*/


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
  console.log(g1.next()); //hello {v: undefined  done: false}
  console.log(g1.throw()); // !!!! no-grunt {v: undefined  done: false}
  console.log(g1.next());
  console.log(g1.next());
} catch (e) {
  console.log("outer error");
  console.log(g1.next());
}
// console.log(g1.next()); // no - gulp {v: undefined  done: false}
// console.log(g1.next()); // no - bower {v: undefined  done: false}
console.log(g1.next()); // {v: undefined  done: true}

