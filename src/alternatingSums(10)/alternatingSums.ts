export function alternatingSums(a: number[]): number[] {
  let sunFirst: number = 0;
  let sunSecond: number = 0;

  a.forEach((value, index) => {
    if (index % 2 === 0) {
      sunSecond+=value
    } else {
      sunFirst+=value;
    }
  });
return [sunFirst,sunSecond]  
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
