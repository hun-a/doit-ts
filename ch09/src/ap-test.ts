import * as R from 'ramda'

const repeat = (N, cb) => R.range(1, N + 1).map(n => cb)

const callAndAppend = R.pipe(
  R.ap(repeat(3, R.identity)),
  R.tap(console.log)
)

const input: number[] = [1, 2, 3]
const result = callAndAppend(input)