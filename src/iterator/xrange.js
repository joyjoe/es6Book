/**
 * 定义JS中的Xrange函数
 */

module.exports = class Xrange{
  constructor(start, stop, step){
    this.value = start;
    this.stop = stop;
    this.step = step;
    if((this.start > this.stop) && this.step){
      throw Error("参数错误");
    }
  }

  [Symbol.iterator](){
    return this;
  }

  next(){
    var value = this.value;
    if(value < this.stop){
      this.value += this.step;
      return {
        value: value,
        done: false
      }
    }
    return {
      value: undefined,
      done: true
    }
  }
}
