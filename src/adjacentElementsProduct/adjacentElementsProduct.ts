export function adjacentElementsProduct(inputArray: number[]): number {

    let arr = inputArray;
    let product: number[] = [];
    while (arr.length >= 2) {
        product.push(arr[0] * arr[1])
        arr.splice(0, 1);
    };
    return Math.max(...product)
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));