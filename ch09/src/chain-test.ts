import * as R from 'ramda'

const arr: number[] = [1, 2, 3]

R.pipe(
  R.chain(n => [n, n]), // Working like a flatMap when one arity
  R.tap(console.log)
)(arr)

R.pipe(
  R.chain(R.append, R.head),
  R.tap(console.log)
)(arr)

const chainTwoFunc = <T>(firstFn: Function, secondFn: Function) => (x: T) => firstFn(secondFn(x), x)

R.pipe(
  chainTwoFunc(R.append, R.head),
  R.tap(console.log)
)(arr)