/**
 * generator函数
 * 返回一个遍历器对象
 * 遍历器对象可以不断调用next()方法
 * yield可以理解为暂停执行
 * 每次执行next()就会从上一次暂停处开始执行一直到下一个yield或return语句
 * 返回的对象value值等于yield或return语句的值,否则为undefined
 * 执行结束则done等于true
 * 
 * generator遍历器对象生成函数
 * 函数执行后并不会立刻执行函数体,而是需要手动执行next()
 * 
 * yield表达式放在另一个表达式中需要用圆括号括起来
 * 
 * yield语句本身没有返回值undefined,
 * 但是可以在next()方法中传递参数作为上一条yield语句的返回值
 * 第一次next()方法中的参数无效
 * 
 * throw()抛出异常 隐藏着会执行下一条yield语句(也就是同样会执行next方法)
 * 在generator生成器函数中没有try...catch语句而直接抛出异常,那么遍历就立刻结束
 * 如果再次调用next()则返回{v: undefined: done: true}对象
 * 
 * return()用于提前终止循环
 * 1. 如果遍历已经结束,那么再次return()是没有效果的
 * 2. 如果return()执行时还没有进入finally代码块
 *      那么会立刻会等finally代码块里的所有代码执行完毕之后才改变遍历器状态
 * 3. 如果return()执行时已经进入finally代码块
 *      那么只会执行到下一个yield语句
 * 
 * 
 * yield* + generator()
 * 针对遍历器对象再次遍历 实现嵌套遍历功能 用途遍历二叉树等
 * 
 * 一个对象的属性如果是generator函数,可以在属性名前面加*简写
 * 
 * generator函数返回的遍历器对象就是该函数的实例this
 * 
 * 
 * Promise仅仅是通过then改变了回调函数的使用语法,避免了代码的嵌套
 * 但是并不能使得代码读起来或写起来更简洁
 * 而generator是对Promise语法的改进 yield命令更像是异步任务不同阶段的分割线
 * 遇到yield命令就暂停等待其他任务执行完毕返回控制权之后再继续往后执行
 */

// require("./02_generator");
// require("./03_generator");
// require("./06_generator");

/** return()提前终止generator遍历 */
// require("./07_generator");

/** yield* */
// require("./08_generator");

/** generator的this问题 */
// require("./09_generator");

/** generator应用 */
// require("./10_generator");


require("./11_generator");
