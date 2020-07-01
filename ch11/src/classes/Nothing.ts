import {IMonad} from '../interfaces'
import {_IMaybe} from './_IMaybe'

export class Nothing implements _IMaybe<null>, IMonad<null> {

  static of<T>(value: T = null): Nothing {
    return new Nothing
  }

  isJust() {
    return false
  }

  isNothing() {
    return true
  }

  getOrElse<U>(defaultValue: U): U {
    return defaultValue
  }

  map<U>(fn: (x) => U): Nothing {
    return new Nothing
  }

  ap<U>(b: U): Nothing {
    return new Nothing
  }

  chain<U>(fn: (T) => U): Nothing {
    return new Nothing
  }
}