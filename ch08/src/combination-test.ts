import {compose, pipe} from './combination'
import {f, g, h} from './f-g-h'

compose(
  console.log, h, g, f
)('x')

pipe(
  f, g, h, console.log
)('y')
