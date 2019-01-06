// 无限遍历
function* f() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    if (reset) {
      i = -1;
    }
  }
}

var g = f();
console.log(g.next()); //{v: 0 done:false}
console.log(g.next()); //{v: 1}
console.log(g.next()); //{v: 2}
console.log(g.next()); //{v: 3}
// 想要其重置计数就需要传递next参数
console.log(g.next(true)); //{v: 0}
console.log(g.next()); //{v: 1}


/**
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
*/
