import {readFilePromise} from './readFilePromise'

const readFilesAll = async (filenames: string[]) => 
  await Promise.all(filenames.map(filename => readFilePromise(filename)))

readFilesAll(['./package.json', 'tsconfig.json'])
  .then(([packageJson, tsconfigJson]: string[]) => {
    console.log('<package.json>: ', packageJson)
    console.log('<tsconfig.json>: ', tsconfigJson)
  })
  .catch(console.log)