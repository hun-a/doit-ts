import {IMonad} from '../interfaces'
import {_IMaybe} from './_IMaybe'

export class Just<T> implements IMonad<T>, _IMaybe<T> {

  constructor(private _value: T) {}

  static of<T>(value: T): Just<T> {
    return new Just<T>(value)
  }

  value(): T {
    return this._value
  }

  isJust() {
    return true
  }

  isNothing() {
    return false
  }

  getOrElse<U>(defaultValue: U): T {
    return this.value()
  }

  map<U>(fn: (x: T) => U): Just<U> {
    return new Just<U>(fn(this.value()))
  }

  ap<U>(b: U) {
    const f = this.value() // this is a function
    if (f instanceof Function) {  // Type guard
      return Just.of<U>((f as Function)(b))
    }
  }

  chain<U>(fn: (T) => U): U {
    return fn(this.value())
  }

}