// type definition
type stringNumberFunction = (string, number) => void
const f: stringNumberFunction = function(a: string, b: number): void {}
const g: stringNumberFunction = function(c: string, d: number): void {}

// callback
const init = (callback: () => void): void => {
  console.log('default initialization finished.')
  callback()
  console.log('all initialization finished.')
}

init(() => console.log('custom initilization finished.'))

// nested function & closure
type NumberToNumberFunction = (number) => number
const add = (a: number): NumberToNumberFunction => (b: number): number => a + b
const fn: NumberToNumberFunction = add(1)
const result: number = fn(1)
console.log(result)

// How to implement the function like a boss
type Person = { name: string, age: number }
const makePerson = (name, age = 10): Person => ({ name, age })
console.log(makePerson('Jack'))
console.log(makePerson('Jane', 33))

// indexable type
type IndexType = {[key: string]: string}
const makeObject = (key, value): IndexType => ({ [key]: value })
console.log(makeObject('name', 'jack'))
console.log(makeObject('firstName', 'huna'))

// Class method
class A {
  constructor(public value: number) {}

  method(): void {
    console.log(`value: ${this.value}`)
  }
}

const a: A = new A(2)
console.log(a.method())

// method chain
class Calculator {
  constructor(public value: number = 0) {}

  add(value: number): Calculator {
    this.value += value
    return this
  }

  multiply(value: number): Calculator {
    this.value *= value
    return this
  }
}

const calc = new Calculator()
const calcuated: number = calc.add(1).add(1).add(3).multiply(3).value
console.log(calcuated)