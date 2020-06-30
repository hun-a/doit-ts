import {add} from 'ramda'
import {Option} from '../option/Option'

const m = Option.Some(1)
const some = m.map(add(1)).getOrElse(1)
console.log(some)

const n = Option.None
const none = n.map(add(1)).getOrElse(0)
console.log(none)