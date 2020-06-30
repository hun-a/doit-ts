import {parseJson} from '../option/parseJson'

const json = JSON.stringify({ name: 'jack', age: 32 })
let value = parseJson(json).getOrElse({})
console.log(value)

value = parseJson('hello world').getOrElse({})
console.log(value)