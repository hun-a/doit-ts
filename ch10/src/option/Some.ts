import {IValueable} from './IValueable'
import {IFunctor} from './IFunctor'

export class Some<T> implements IValueable<T>, IFunctor<T> {

  constructor(private value: T) {}

  getOrElse(defaultValue: T): T {
    return this.value ?? defaultValue
  }

  map<U>(fn: (T) => U): Some<U> {
    return new Some<U>(fn(this.value))
  }
  
}