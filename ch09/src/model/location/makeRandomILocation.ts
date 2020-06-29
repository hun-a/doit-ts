import Chance from 'chance'

import {ILocation} from './ILocation'
import {makeILocation} from './makeILocation'
import {makeRandomCoordinates} from '../coordinates'

const c = new Chance

export const makeRandomILocation = (): ILocation =>
  makeILocation(c.country(), c.city(), c.address(), makeRandomCoordinates())