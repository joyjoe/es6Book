// thunk
const thunkify = require("./12_generator");

function thunk(fn){
  return function(){
    var args = Array.prototype.slice.call(arguments);
    return function(callback){
      args.push(callback);
      return fn.apply(this, args);
    }
  }
}


function Tick(delay, callback){
  setTimeout(function(){
    callback(null, 'tick');
  }, delay);
}

function Tock(delay, callback){
  setTimeout(function(){
    callback(null, 'tock');
  }, delay);
}

// 通过thunk包裹两个异步操作
// const thunkTick = thunk(Tick);
// const thunkTock = thunk(Tock);

const thunkTick = thunkify(Tick);
const thunkTock = thunkify(Tock);

/**
 * generator函数
 */
function* clockAsync(n = 3){
  // let r1 = yield thunkTick(1000);
  // console.log("in clockAsync: r1 = ", r1);
  // let r2 = yield thunkTock(2000);
  // console.log("in clockAsync: r2 = ", r2);
  // let r3 = yield thunkTick(1000);
  // console.log("in clockAsync: r3 = ", r3);

  while(n){
    yield thunkTick(1000);
    yield thunkTock(1000);
    n--;
  }
}

let g = clockAsync();

/**
 * next方法与callback方法的参数一致
 */
function next(err, data){
  if(err){
    return;
  }else{
    var result = g.next(data);
    console.log(data);
    if(result.done){
      return;
    }else{
      // console.log(result.value);
      // result.value是一个callback函数
      /* return function(callback){
        args.push(callback);
        return fn.apply(this, args);
      } */
      result.value(next)
    }
  }
}

next();
