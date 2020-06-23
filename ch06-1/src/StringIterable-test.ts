import { StringIterable } from './StringIterable'

for (const value of new StringIterable(['hello', 'world', '!'])) {
  console.log(value)
}