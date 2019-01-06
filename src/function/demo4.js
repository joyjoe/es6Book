function f(){
  console.log("function name:");
}

console.log(f.name);

console.log("after bind function");
var newF = f.bind(null);
console.log(newF.name);
console.log(f.name);

console.log("对于匿名函数而言,如果赋给了某个变量");
var anony = function(){
  console.log("anonymous");
};
console.log(anony.name);

// anonymous
var conF = new Function("a", "b", "a + b");
console.log(conF.name);
console.log(conF(1, 2));