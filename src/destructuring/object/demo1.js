{
  let {foo, bar} = {foo: "aaa", bar: "bbb"};
  console.log(foo, bar);
}

{
  let {foo: baz} = {foo: "aaa", bar: "bbb"};
  console.log(baz);
}

{
  let obj = {
    p: [ "hello", {y: "world"}]
  };
  let {p: [x, {y}]} = obj;
  console.log(x, y);
}

{
  let obj = {
    p: [ "hello", {y: "world"}]
  };
  let {p, p: [x, {y}]} = obj;
  console.log(x, y, p);
}

{
  // let s = {
  //   foo: 123,
  //   bar: true
  // };
  let obj = {};
  let arr = [];
  // ({foo: obj["foo"], bar: arr[0]} = s);
  // ({foo: obj.foo, bar: arr[0]} = s);
  ({foo: obj.foo, bar: arr[0]} = {foo: 123, bar: true});
  // let {foo: obj.foo, bar: arr[0]} = {foo: 123, bar: true};
  console.log(obj, arr);
}
