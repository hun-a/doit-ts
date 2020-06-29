import {IPerson} from './IPerson'
import { ILocation } from '../location'

export const makeIPerson = (
  name: string,
  age: number,
  title?: string,
  location?: ILocation
): IPerson => ({name, age, title, location})