import {getJokeAsMybe, IMaybe} from '../getJokeAsMaybe'

(async() => {
  const joke: IMaybe<string> = await getJokeAsMybe()
  console.log(joke.getOrElse('something wrong'))
})()