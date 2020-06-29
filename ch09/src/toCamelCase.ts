import * as R from 'ramda'

type StringToStringFunc = (string) => string

export const toCamelCase = (delim: string): StringToStringFunc => {
  const makeFirstToCapital = (word: string) =>
    word.split('')
      .map((c, i) => i === 0 ? c.toUpperCase() : c)
      .join('')

  const indexedMap = R.addIndex(R.map)
  return R.pipe(
    R.trim,
    R.split(delim),
    R.map(R.toLower),
    indexedMap((value: string, index: number) => index > 0 ? makeFirstToCapital(value): value),
    R.join('')
  ) as StringToStringFunc
}