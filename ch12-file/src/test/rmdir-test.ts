import {rmdir} from '../fileApi/rmdir'

const deleteDataDir = (dirname: string): Promise<void> =>
  rmdir(dirname)
    .then(result => console.log(`${result} dir deleted.`))
    .catch(console.error)

deleteDataDir('./data')