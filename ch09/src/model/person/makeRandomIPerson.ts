import Chance from 'chance'

import {IPerson} from './IPerson'
import {makeIPerson} from './makeIPerson'
import {makeRandomILocation} from '../location'

const c = new Chance

export const makeRandomIPerson = (): IPerson =>
  makeIPerson(c.name(), c.age(), c.profession(), makeRandomILocation())