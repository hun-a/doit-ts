import {readFile} from '../fileApi/readFile'

const readTest = (filename: string): Promise<void> =>
  readFile(filename)
    .then(result => console.log(`read ${result} from ${filename} file`))
    .catch(console.error)

readTest('./data/hello.txt')
  .then(s => readTest('./data/test.json'))
  .catch((e: Error) => console.log(e.message))