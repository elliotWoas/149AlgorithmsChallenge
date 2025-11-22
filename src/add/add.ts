export function add(param1: number, param2: number): number {
    return param1 += param2
}
export function add2(...params: number[]): number {

    let sum = 0;
    params.forEach(n => {
        sum+=n
    });
    return sum;
}
// second solution
// export function add2(...params: number[]): number {

//     let sum = 0;
//         params.map((p) => sum+=p)
//     return sum;
// }


console.log(add(1, 2)); // result => 3
console.log(add(3, 2)); // result => 5

console.log(add2(1,2,3,4,5)); // result => 15
console.log(add2(2,3)); // result => 5
