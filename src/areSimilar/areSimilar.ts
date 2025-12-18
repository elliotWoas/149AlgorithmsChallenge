export function areSimilar(a: number[], b: number[]): boolean {
    
if (a.length!==b.length) {
    return false
}

let sunMoving=0

for (let index = 0; index < a.length; index++) {

    const lengthItemA=a.filter(item=>a[index]===item).length
    const lengthItemB=b.filter(item=>a[index]===item).length
    
    const isAvailability = b.find(item=>a[index]===item);

    const checkIndex= b.findIndex(item=>a[index]===item)
   
    if (isAvailability===undefined||lengthItemA!==lengthItemB) {
        return false
    }

   if (index!==checkIndex) {
    sunMoving++
   }
}
if (sunMoving>2) {
    return false
}

return true
}

// Example usage
console.log(areSimilar([1, 2, 3], [1, 2, 3])); 
console.log(areSimilar([1, 2, 3], [2, 1, 3])); 
console.log(areSimilar([1, 2, 3], [2,3, 1 ])); 
console.log(areSimilar([1, 2, 2], [2, 1, 1])); 
