// promise
/**
 * promise对象有三种状态: pending (fulfilled)resolve (rejected)reject
 * pending初始状态 状态一旦改变就不会再次变动
 * 用来处理异步操作
 * 1. Promise构造函数传递的函数参数会立刻执行
 * 2. .then()添加的方法会在同步任务执行完成之后开始执行
 * 3. resolve()后续建议不要放置业务代码
 * 4. Promise的所有方法返回值都是promise
 * 5. Promise.then()
 *    Promise.catch()
 *    Promise.all()
 *    Promise.race()
 *    Promise.resolve()
 *    Promise.reject()
 *    Promise.done()
 *    Promise.finally()
 * 6. .catch(rejected)方法本质就是.then(null, rejected)
 *    Promise的错误具有冒泡性质,会一直向后传递直到被捕获
 *    Node中process有一个监听事件unhandledRejection
 * 7. .all()接收promise数组(或者可迭代数据结构) 成员如果不是Promise对象则会转换为Promise对象
 *    Promise状态又数组中的所有Promise状态决定,只有全部resolve方可resolve,也就是说只要有一个rejected那么整体就会rejected
 *    第一个状态变为rejected的Promise的返回值会作为整体promise中rejected回调函数的参数值
 *    数组成员中promise的catch()方法会截断整体promise中的catch()方法执行
 * 8. .race()取决于最快改变状态的那个promise对象
 * 9. Promise.resolve()得到的promise会在本轮事件循环结束后立刻执行
 *    setTimeout()是在下一轮事件循环开始时执行
 *    所以Promise.resolve()的执行时间会早于setTimeout()
 *    Promise.resolve()方法本质是将参数转换为Promise对象作为resolve回调函数的参数值
 *    a. 原始数据类型(string, number, bool, array)直接返回原始值
 *    b. Promise对象直接返回
 *    c. 具有then方法的对象,直接执行then方法并根据返回值再次决定返回值
 * 10. Promise.reject()方法会直接改变状态为rejected并将参数整体返回
 * 11. .done()本质还是.then()
 *     Promise.prototype.done = function(onFulfilled, onRejected){
 *        this.then(onFulfilled, onRejected).catch((reason)=>{
 *          setTimeout(()=>{ throw reason;}, 0);
 *        });
 *     }
 * 12. .finally()只接收一个函数参数
 *     Promise.prototype.finally = function(callback){
 *        return this.then((value)=>{
 *          this.constructor.resolve(callback()).then(()=>value)
 *          this.constructor.resolve(callback(null, value)).then((data)=>data)
 *        }, (reason)=>{
 *          this.constructor.reject(callback()).then(()=>{throw reason;})
 *          this.constructor.reject(callback(reason, value)).then(()=>{throw reason;})
 *        })
 *     }
 * 
 */
// 延迟器
function delay(time){
  return new Promise((resolve, reject)=>{
    setTimeout((extra)=>{
      resolve(extra);
    }, time, time);
  });
}

delay(2000).then((data)=>{
  console.log(`延迟${data}毫秒之后开始执行后续逻辑...`);
})
