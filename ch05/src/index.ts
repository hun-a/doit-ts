// Generic
const arrayLength = <T>(array: T[]): number => array.length
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0

const numArray: number[] = [1, 2, 3]
const strArray: string[] = ['hello', 'world']

type IPerson = { name: string, age?: number }
const personArray: IPerson[] = [{ name: 'Jack' }, { name: 'Jane', age: 32 }]

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]),
  isEmpty([1])
)

// Spread operator
const range = (from: number, to: number): number[] => from < to ? [from, ...range(from + 1, to)] : []

console.log(range(1, 5))
console.log([1, ...[2, ...[3, ...[4, ...[]]]]])

// Deep copy
const oArray: number[] = [1, 2, 3, 4]
const deepCopiedArray: number[] = [...oArray]
deepCopiedArray[0] = 0
console.log(oArray, deepCopiedArray)

// Variable argument function
const mergeArray = <T>(...arrays: T[][]): T[] => {
  const result: T[] = []
  for (const i in arrays) {
    result.push(...arrays[i])
  }
  return result
}

const mergedArray1: string[] = mergeArray(['hello', 'world'])
console.log(mergedArray1)

const mergedArray2: number[] = mergeArray([1], [2, 3], [4, 5, 6], [7, 8, 9, 10])
console.log(mergedArray2)

// Tuple
type ResultType = [boolean, string]
const tuple: ResultType = [true, 'the result is ok']

console.log(tuple)

const tuple2: [number, string] = [1, 'hello']
console.log(tuple2)

const tuple3: [string, ...number[]] = ['keys', ...range(1, 5)]
console.log(tuple3)