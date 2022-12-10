// let symbol = Symbol('mySymbol');

// console.log(symbol);

// / done!/
// let symbol = Symbol();

// console.log(symbol);

// / done!/

// let symbol = new Symbol();

// console.log(symbol);

// app.js:12 Uncaught TypeError: Symbol is not a constructor
    // at new Symbol (<anonymous>)

// let symbol = Symbol('hello');

// let symbol2 = Symbol('hello');

// console.log(symbol === symbol2);

// done "false"

// let symbol = Symbol.for('Hello');

// console.log(symbol);

// done!

// let symbol = Symbol.for('Hello');
// let symbol2 = Symbol.for('Hello');

// console.log(symbol === symbol2);

// true done

let person = {
    name: 'Shavkat',
    age: 32,
    [Symbol.for('password')]: 'Jack32'
}
// console.log(person[Symbol.for('password')])
console.log(Object.getOwnPropertySymbols(person))