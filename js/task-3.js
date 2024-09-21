'use strict';

class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }
  // 1 варіант
  // padEnd(str) {
  //   this.#value = this.#value.padEnd(3, str);
  // }

  // padStart(str) {
  //   this.#value = this.#value.padStart(2, str);
  // }

  // padBoth(str) {
  //   this.#value = this.#value.padStart(4, str);
  //   this.#value = this.#value.padEnd(5, str);
  // }

  // 2 варіант
  padEnd(str) {
    this.#value = this.#value + str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
