import {toCamelCase} from './toCamelCase'

console.log(
  toCamelCase(' ')('Hello World'),
  toCamelCase('_')('Hello_Albert_Einstein')
)