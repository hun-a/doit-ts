import {IApply} from './IApply'

export interface IApplicative<T> extends IApply<T> {
  // static of(value: T)  // Can't define the static method in the interface
}