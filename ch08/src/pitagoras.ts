import {pipe} from './combination'
import {squaredMap} from './squaredMap'
import {sumArray} from './sumArray'

const pitagorias = pipe(
  squaredMap,
  sumArray,
  Math.sqrt
)

console.log(pitagorias([3, 4]))