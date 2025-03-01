import KingB from "../assets/king-b.svg";
import QueenB from "../assets/queen-b.svg";
import RookB from "../assets/rook-b.svg";
import KnightB from "../assets/knight-b.svg";
import BishopB from "../assets/bishop-b.svg";
import KingW from "../assets/king-w.svg";
import QueenW from "../assets/queen-w.svg";
import RookW from "../assets/rook-w.svg";
import KnightW from "../assets/knight-w.svg";
import BishopW from "../assets/bishop-w.svg";
import PawnB from "../assets/pawn-b.svg";
import PawnW from "../assets/pawn-w.svg";

export const checkPossibleMoves = (piece, position) => {
  switch (piece) {
    case PawnW:
      return pawnWPossibleMoves(position);
    default:
      return [];
  }
};

const pawnWPossibleMoves = (position) => {
  console.log(position);
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);
  possibleMoves.push(`${currentRow + 1}${col}`);
  return possibleMoves;
};
