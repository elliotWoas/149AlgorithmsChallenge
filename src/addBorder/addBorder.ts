export function addBorder(picture: string[]): string[] {
  let lengthStringMax: number = 0;
  const arrayOutput: string[] = [];

  for (let index = 0; index < picture.length; index++) {
    if (picture[index].length > lengthStringMax) {
      lengthStringMax = picture[index].length;
    }
  }

  console.log(lengthStringMax);

  picture.forEach((item) => {
    const aItem = item.split("");
    const lengthAItem = aItem.length;

    for (let index = 0; index <= lengthStringMax - lengthAItem; index++) {
      aItem.push("*");
    }
    aItem.unshift("*");
    const joinItem = aItem.join("");

    arrayOutput.push(joinItem);
  });

  arrayOutput.push("*".repeat(lengthStringMax + 2));
  arrayOutput.unshift("*".repeat(lengthStringMax + 2));

  return arrayOutput;
}

console.log(addBorder(["abc", "dedl"]));
