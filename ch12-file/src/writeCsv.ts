import {writeCsvFormatFakeData} from './fake'
import {getFileNameAndNumber} from './utils/getFileNameAndNumber'

const [filename, numberOfFakeData] = getFileNameAndNumber('./data/fake', 1)
const csvFilename = `${filename}-${numberOfFakeData}.csv`
writeCsvFormatFakeData(csvFilename, numberOfFakeData)
  .then(console.log)
  .catch(console.error)