export function addTwoDigits(n: number): number {
  const arrayNumber = n.toString().split("");
  let sunNumber: number = 0;

  arrayNumber.forEach(item=>{
    sunNumber+=Number(item)
  })
  return sunNumber
}

console.log(addTwoDigits(29));
