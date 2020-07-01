import {fetchJokes} from '../fetchJokes'

fetchJokes()
  .then(console.log)
  .catch((e: Error) => console.log(e.message))