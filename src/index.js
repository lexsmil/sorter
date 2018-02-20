class Sorter {
  constructor() {
      this._elements = [];
      this._compareFunction = (left, right) => left - right;
  }

  add(element) {
      this._elements.push(element);
  }

  at(index) {
      return this._elements[index];
  }

  get length() {
      return this._elements.length;
  }

  toArray() {
      return this._elements;
  }

  sort(indices) {
      indices.sort(function(a, b) {
          return a - b;
      });
      var temp = [], _this = this;
      indices.forEach(function (item) {
          temp.push(_this._elements[item]);
      });
      temp.sort(this._compareFunction);
      indices.forEach(function (item, i) {
          _this._elements.splice(item, 1, temp[i]);
      });
      return this._elements;
  }

  setComparator(compareFunction) {
      this._compareFunction = compareFunction;
  }
}

module.exports = Sorter;