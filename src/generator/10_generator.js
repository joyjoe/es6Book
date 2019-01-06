// 状态机
function* clock(n){
  while(n){
    yield "Tick!";
    yield "Tock!";
    n--;
  }
}

// for(let c of clock(3)){
//   console.log(c);
// }

// 同步任务组可以使用yield或者yield*来实现任务依次有序执行


// 异步任务
console.log("异步实现时钟计数");
function* clockAsync(n){
  while(n){
    yield Tick();
    yield Tock();
    n--;
  }
  return;
}

function Tick(){
  return new Promise((resolve, reject)=>{
    setTimeout((done)=>{
      resolve(done);
    }, 1000, "Tick");
  });
}

function Tock(){
  return new Promise((resolve, reject)=>{
    setTimeout((done)=>{
      resolve(done);
    }, 1000, "Tock");
  });
}

function processGen(gen){
  function processPromise(promise){
    promise.then((data)=>{
      console.log(data);
      gendata = gen.next();
      // processPromise(gendata);
      gendata.value.then((data)=>{
        console.log(data);
        gendata = gen.next(); 
        gendata.value.then((data)=>{
          console.log(data);
          gendata = gen.next(); 
          gendata.value.then((data)=>{
            console.log(data);
          });
        });
      });
    });
  }
  var gendata = gen.next();
  console.log(gendata);
  while(!gendata.done){
    processPromise(gendata.value);
  }
}

var gen = clockAsync(3);
// processGen(gen);

/**
gen.next().value.then((data)=>{
  console.log(data);
  // return data;
// }).then((data)=>{
  // console.log(gen.next());
  gen.next().value.then((data)=>{
    console.log(data);
    gen.next().value.then((data)=>{
      console.log(data);
      gen.next().value.then((data)=>{
        console.log(data);
        gen.next().value.then((data)=>{
          console.log(data);
        });
      });
    });
  })
})
*/
