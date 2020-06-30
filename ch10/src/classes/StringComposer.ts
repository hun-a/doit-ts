import {range, always} from 'ramda'
import {IValueProvider, IAddable, IMultiplyable} from '../interfaces'

export class StringComposer implements IValueProvider<string>, IAddable<string>, IMultiplyable<number> {

  constructor(private _value: string = '') {}

  value(): string {
    return this._value
  }

  add(value: string): this {
    this._value = this._value.concat(value)
    return this
  }

  multiply(repeat: number): this {
    this._value = range(0, repeat)
                    .map(always(this._value))
                    .join('')
    return this
  }

}