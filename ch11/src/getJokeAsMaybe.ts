import * as R from 'ramda'
import {getRandomJoke, JokeType} from './getRandomJoke'
import {IMaybe, Maybe} from './classes/Maybe'

const _getJokeAsMybe = async () => {
  const jokeItem: JokeType = await getRandomJoke()
  const joke = R.view(R.lensProp('joke'))(jokeItem)
  return joke
}

export const getJokeAsMybe = () => new Promise<IMaybe<string>>(resolve => {
  _getJokeAsMybe()
    .then((joke: string) => resolve(Maybe.Just(joke)))
    .catch((e: Error) => resolve(Maybe.Nothing))
})

export {IMaybe, Maybe}