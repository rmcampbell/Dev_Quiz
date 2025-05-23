//fisher yates shuffle
export function shuffle<Type>(array: Type[]): Type[] {
  // Create a copy of the array to avoid mutating the original
  const arrayCopy = [...array];
  let curInd = arrayCopy.length,
    randInd: number;

  while (curInd > 0) {
    randInd = Math.floor(Math.random() * curInd);
    curInd--;

    [arrayCopy[curInd], arrayCopy[randInd]] = [arrayCopy[randInd], arrayCopy[curInd]];
  }

  return arrayCopy;
}
