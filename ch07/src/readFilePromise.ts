import {readFile} from 'fs';

export const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>(
    (resolve: (value: string) => void, reject: (error: Error) => void) => {
      readFile(filename, (err: Error, buffer: Buffer) => err ? reject(err) : resolve(buffer.toString()))
    }
  )