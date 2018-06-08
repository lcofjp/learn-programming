

class Rate {
  constructor(rate) {
    this.rate = rate;
  }
  toString() {
    return (this.rate * 100).toFixed(2) + '%'
  }
  valueOf() {
    return this.rate
  }
}

var x = new Rate(0.1 + 0.2);


document.getElementById('root').innerHTML = x;
