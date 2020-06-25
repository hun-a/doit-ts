export const compose = <T, R>(...functions: readonly Function[]): Function => (x:T): (T) => R =>
  [...functions].reverse().reduce((value, func) => func(value), x)

export const pipe = <T, R>(...functions: readonly Function[]): Function => (x: T): (T) => R =>
  functions.reduce((value, func) => func(value), x)