export function adjacentElementsProduct(inputArray: number[]):number {
let outputNumber:number|undefined
for (let index = 0; index < inputArray.length-1; index++) {
   const Product= inputArray[index]*inputArray[index+1]
    if (outputNumber===undefined||Product>outputNumber) {
        outputNumber=Product        
    }
}
return outputNumber!;

// inputArray.forEach((value,index,array)=>{
//     const Product=value*array[index+1]
//     if (outputNumber === undefined || Product > outputNumber) {
//       outputNumber = Product;      
//     }
// })
}



console.log(adjacentElementsProduct([3, 6,-2, -5, 7, 3]));