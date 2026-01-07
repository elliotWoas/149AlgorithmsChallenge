import { Chess, Square } from "chess.js";

export function bishopAndPawn(bishop: Square, pawn: string): boolean {
  let output = false;
  const chess = new Chess();
  chess.clear();

  chess.put({ type: "b", color: "w" }, bishop);

  const moves = chess.moves({
    square: bishop,
  });
  moves.forEach((item) => {
    if (item.includes(pawn)) {
      output = true;
    }
  });
  return output;
}

console.log(bishopAndPawn("a1", "c3"));
