import {checkEmail} from '../utils/checkEmail'

[
  {email: 'abc@efg.com'},
  {email: 'abc'}
].forEach((target, index) => {
  const [value, failureReson] = checkEmail(target)
  if (failureReson) {
    console.log(index, 'validation fail', JSON.stringify(failureReson))
  } else {
    console.log(index, 'validation ok', JSON.stringify(value))
  }
})