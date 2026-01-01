export function arrayPreviousLess(items: number[]): number[] {
const output:number[]=[]

items.forEach((value,index,array)=>{
    if (value>array[index-1]) {
        output.push(array[index-1])
    } else {
        output.push(-1)
    }
})
return output
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));