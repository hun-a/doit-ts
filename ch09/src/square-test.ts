import * as R from 'ramda'
import {quadratic} from './quadratic'
import { square } from './f'

const input: number[] = R.range(1, 10 + 1)
const squareAferInc = R.pipe(
  R.inc,
  square
)
const squareResult = R.pipe(
  R.map(squareAferInc),
  R.tap(console.log)
)(input)