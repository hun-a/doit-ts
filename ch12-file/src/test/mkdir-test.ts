import {mkdir} from '../fileApi/mkdir'

const makeDataDir = (dirname: string) =>
  mkdir(dirname)
    .then(result => console.log(`${result} dir created`))
    .catch(console.error)

makeDataDir('./data/today')
makeDataDir('/abcde')