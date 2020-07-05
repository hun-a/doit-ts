import {deleteFile} from '../fileApi/deleteFile'
import {rmdir} from '../fileApi/rmdir'

const deleteTest = (filename: string): Promise<void> =>
  deleteFile(filename)
    .then(result => console.log(`delete ${result} file.`))
    .catch(console.error)

Promise.all([deleteTest('./data/hello.txt'), deleteTest('./data/test.json')])
  .then(s => rmdir('./data'))
  .then(dirname => console.log(`delete ${dirname} dir`))
  .catch((e: Error) => console.log(e.message))