import * as path from 'path'
import {appendFile} from '../fileApi/appendFile'
import {mkdir} from '../fileApi/mkdir'

const appendTest = (filename: string, data: any) =>
  appendFile(filename, data)
    .then(result => console.log(`append ${result} to ${filename}`))

mkdir('./data')
  .then(s => appendTest('./data/hello.txt', 'hi, there!'))
  .catch((e: Error) => console.log(e.message))