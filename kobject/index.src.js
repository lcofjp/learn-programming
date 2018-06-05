class Rate {
  constructor(rate) {
    this.rate = rate;
  }
  toString() {
    return this.rate * 100 + '%'
  }
  valueOf() {
    return this.rate
  }
}

var x = new Rate(0.12);

console.log(x);
console.log(Object.prototype.toString.call(x))
console.log(x.__proto__.toString === x.toString)