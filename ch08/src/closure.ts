const makeNames = (): () => string => {
  const names: string[] = ['Jack', 'Jane', 'Smith']
  let index: number = 0

  return (): string => {
    if (index === names.length) {
      index = 0
    }
    return names[index++]
  }
}

const makeName: () => string = makeNames()
console.log(Array.from({ length: 10 }, makeName))