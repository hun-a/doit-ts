import Chance from 'chance'

import {ICoordinates} from './ICoordinates'
import {makeICoordinates} from './makeICoordinates'

const c = new Chance

export const makeRandomCoordinates = (): ICoordinates =>
  makeICoordinates(c.latitude(), c.longitude())