import {readFilePromise} from './readFilePromise'

readFilePromise('./package.json')
  .then((content: string) => {
    console.log(content)
    return readFilePromise('./tsconfig.json')
  })
  .then((content: string) => {
    console.log(content)
    return readFilePromise('.')
  })
  .catch((err: Error) => console.log({ err: err.message }))
  .finally(() => console.log('Terminated'))