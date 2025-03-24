//fisher yates shuffle
function shuffle<Type>(array: Type[]): Type[] {
  let curInd = array.length,
    randInd: number;

  while (curInd > 0) {
    randInd = Math.floor(Math.random() * curInd);
    curInd--;

    [array[curInd], array[randInd]] = [array[randInd], array[curInd]];
  }

  return array;
}

export default shuffle;
