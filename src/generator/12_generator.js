// thunkify

module.exports = function thunkify(fn){
  return function(){
    // 默认上下文应该是thunkify处理生成的函数的上下文
    var ctx = this;
    // console.log("arguments");
    // console.log(arguments);
    var args = Array.prototype.slice.call(arguments);
    // console.log("args = ");
    // console.log(args);
    return function(callback){
      var called;
      // 内部添加一个callback
      args.push(function(){
        if(called) return;
        called = true;
        // console.log("--in thunkify callback method--");
        // console.log(callback);
        // console.log("arguments");
        // console.log(arguments);
        callback.apply(null, arguments);
      });
      try{
        // console.log("--in thunkify method--");
        // console.log(args);
        fn.apply(ctx, args);
      }catch(e){
        // console.log("--in thunkify method error --");
        callback(e);
      }
    }
  }
}
