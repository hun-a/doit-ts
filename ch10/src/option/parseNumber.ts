import { IFunctor } from "./IFunctor";
import { IValueable } from "./IValueable";
import { Option } from "./Option";

export const parseNumber = (n: string): IFunctor<number> & IValueable<number> => {
  const value = parseInt(n)
  return isNaN(value) ? Option.None : Option.Some(value)
}