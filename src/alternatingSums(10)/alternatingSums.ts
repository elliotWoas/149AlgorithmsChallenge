export function alternatingSums(weights: number[]): number[] {

    let teamTotal1 = 0;
    let teamTotal2 = 0;

    for(let index = 0; index < weights.length; index++){
        const personWeights = weights[index];
        const isTeam1 = index  %2  === 0;

        if(isTeam1) {
            teamTotal1 += personWeights;
        }else {
            teamTotal2 += personWeights
        }
    }

    return [teamTotal1 , teamTotal2]
}

console.log(alternatingSums([50, 60, 60, 45, 70])); 

