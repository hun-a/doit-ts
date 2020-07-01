import {IValueable} from './IValuable'

export interface ISetoid<T> extends IValueable<T> {
  equals<U>(value: U): boolean
}