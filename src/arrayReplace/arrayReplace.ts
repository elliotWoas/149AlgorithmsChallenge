export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
const output:number[]=[]

inputArray.forEach((value)=>{
    if (value===elemToReplace) {
        output.push(substitutionElem)
    } else {
        output.push(value)
    }
})

return output
}

console.log(arrayReplace([1, 2, 1], 1, 3));