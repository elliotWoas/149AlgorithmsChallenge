export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

    let outputFunction:boolean=true

    if (yourLeft!=friendsLeft&&yourLeft!=friendsRight) {
        outputFunction=false
    }
    if (yourRight!=friendsLeft&&yourRight!=friendsRight) {
        outputFunction=false
    }

    return outputFunction
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
