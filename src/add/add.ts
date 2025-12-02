
//Sum function of two numbers

export function add(param1: number, param2: number): number {
const sunParam=param1+param2
return sunParam
}
console.log(add(1, 2));
console.log(add(3, 2));


//Function to sum any number of numbers entered

export function add2(...params:number[]):number {
  let sunParam = 0
for (let index = 0; index < params.length; index++) {
     sunParam += params[index];
    
}
return sunParam
}

console.log(add2(1,2,3,6,4,5));
console.log(add2(2,3));
