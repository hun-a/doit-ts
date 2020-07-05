import * as fs from 'fs'
import {fileExists} from './fileExists'

export const deleteFile = (filename: string): Promise<string> =>
  new Promise<any>((resolve, reject) => {
    fileExists(filename)
      .then(alreadyExists => alreadyExists ? resolve(filename) :
        fs.unlink(filename, (error: Error) => error ? reject(error) : resolve(filename)))
  })