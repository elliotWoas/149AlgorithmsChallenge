export function alternatingSums(a: number[]): number[] {
    let team1Sum = 0;
    let team2Sum = 0;

    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            team1Sum += a[i];
        } else {
            team2Sum += a[i];
        }
    }
    //Return array with both sums
    return [team1Sum, team2Sum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));