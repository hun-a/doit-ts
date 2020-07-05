import {readFileGenerator} from '../fileApi'

for (const value of readFileGenerator('data/fake-100000.csv')) {
  console.log(`<line> ${value} </line>`)
  break;
}