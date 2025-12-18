function bishopAndPawn(bishop: string, pawn: string): boolean {
    let bCol = bishop.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    let bRow = parseInt(bishop[1]);

    let pCol = pawn.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    let pRow = parseInt(pawn[1]);

    return Math.abs(bCol - pCol) === Math.abs(bRow - pRow);
}

 console.log(bishopAndPawn('a1', 'c3'));