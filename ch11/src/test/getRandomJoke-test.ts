import * as R from 'ramda'
import {getRandomJoke} from '../getRandomJoke'

getRandomJoke()
  .then(R.pipe(
    R.view(R.lensProp('joke')),
    console.log
  ))
  .catch(R.pipe(
    R.prop('message'),
    console.log
  ))