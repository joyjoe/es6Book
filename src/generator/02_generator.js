function* f() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    if (reset) {
      i = -1;
    }
  }
}

var g = f();
console.log(g.next()); //0
console.log(g.next()); //1
console.log(g.next()); //2
console.log(g.next()); //3
console.log(g.next(true)); //0
console.log(g.next()); //1


function* foo(x) {
  var y = 2 * (yield x + 1);
  var z = yield y / 3;
  return x + y + z;
}

var rs = foo(5);
console.log(rs.next()); // 6 false
console.log(rs.next()); // NaN false
console.log(rs.next()); // NaN true

var rs1 = foo(5);
console.log(rs1.next()); // 6 false
console.log(rs1.next(12)); // 8 false
console.log(rs1.next(13)); // 42 true