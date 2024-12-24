let obj = {
  count: 0,
  increment() {
    this.count += 1;
  },
  decrement() {
    this.count-= 1;
  },
  reset() {
    this.count = 0;
  }
};



obj.increment()
obj.increment()
console.log(obj.count)
obj.decrement()
console.log(obj.count)