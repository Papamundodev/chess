import Square from "./Square";
import KingB from "./assets/king-b.svg";
import QueenB from "./assets/queen-b.svg";
import RookB from "./assets/rook-b.svg";
import KnightB from "./assets/knight-b.svg";
import BishopB from "./assets/bishop-b.svg";
import KingW from "./assets/king-w.svg";
import QueenW from "./assets/queen-w.svg";
import RookW from "./assets/rook-w.svg";
import KnightW from "./assets/knight-w.svg";
import BishopW from "./assets/bishop-w.svg";
import PawnB from "./assets/pawn-b.svg";
import PawnW from "./assets/pawn-w.svg";
import { useState } from "react";
import { checkPossibleMoves } from "./logic/checkPossibleMoves";
const GameBoard = () => {
  const [boardState, setBoardState] = useState({
    "8e": {
      piece: KingB,
      color: "black",
      type: "king",
      name: "KingB",
    },
    "8d": {
      piece: QueenB,
      color: "black",
      type: "queen",
      name: "QueenB",
    },
    "8a": {
      piece: RookB,
      color: "black",
      type: "rook",
      name: "RookB",
    },
    "8h": {
      piece: RookB,
      color: "black",
      type: "rook",
      name: "RookB",
    },
    "8b": {
      piece: KnightB,
      color: "black",
      type: "knight",
      name: "KnightB",
    },
    "8g": {
      piece: KnightB,
      color: "black",
      type: "knight",
      name: "KnightB",
    },
    "8c": {
      piece: BishopB,
      color: "black",
      type: "bishop",
      name: "BishopB",
    },
    "8f": {
      piece: BishopB,
      color: "black",
      type: "bishop",
      name: "BishopB",
    },
    "7a": {
      piece: PawnB,
      color: "black",
      type: "pawn",
      name: "PawnB",
    },
    "7b": {
      piece: PawnB,
      color: "black",
      type: "pawn",
      name: "PawnB",
    },
    "7c": {
      piece: PawnB,
      color: "black",
      type: "pawn",
      name: "PawnB",
    },
    "7d": {
      piece: PawnB,
      color: "black",
      type: "pawn",
      name: "PawnB",
    },
    "7e": {
      piece: PawnB,
      color: "black",
      type: "pawn",
      name: "PawnB",
    },
    "7f": {
      piece: PawnB,
      color: "black",
      type: "pawn",
      name: "PawnB",
    },
    "7g": {
      piece: PawnB,
      color: "black",
      type: "pawn",
      name: "PawnB",
    },
    "7h": {
      piece: PawnB,
      color: "black",
      type: "pawn",
      name: "PawnB",
    },
    // Pièces blanches
    "1e": {
      piece: KingW,
      color: "white",
      type: "king",
      name: "KingW",
    },
    "1d": {
      piece: QueenW,
      color: "white",
      type: "queen",
      name: "QueenW",
    },
    "1a": {
      piece: RookW,
      color: "white",
      type: "rook",
      name: "RookW",
    },
    "1h": {
      piece: RookW,
      color: "white",
      type: "rook",
      name: "RookW",
    },
    "1b": {
      piece: KnightW,
      color: "white",
      type: "knight",
      name: "KnightW",
    },
    "1g": {
      piece: KnightW,
      color: "white",
      type: "knight",
      name: "KnightW",
    },
    "1c": {
      piece: BishopW,
      color: "white",
      type: "bishop",
      name: "BishopW",
    },
    "1f": {
      piece: BishopW,
      color: "white",
      type: "bishop",
      name: "BishopW",
    },
    "2a": {
      piece: PawnW,
      color: "white",
      type: "pawn",
      name: "PawnW",
    },
    "2b": {
      piece: PawnW,
      color: "white",
      type: "pawn",
      name: "PawnW",
    },
    "2c": {
      piece: PawnW,
      color: "white",
      type: "pawn",
      name: "PawnW",
    },
    "2d": {
      piece: PawnW,
      color: "white",
      type: "pawn",
      name: "PawnW",
    },
    "2e": {
      piece: PawnW,
      color: "white",
      type: "pawn",
      name: "PawnW",
    },
    "2f": {
      piece: PawnW,
      color: "white",
      type: "pawn",
      name: "PawnW",
    },
    "2g": {
      piece: PawnW,
      color: "white",
      type: "pawn",
      name: "PawnW",
    },
    "2h": {
      piece: PawnW,
      color: "white",
      type: "pawn",
      name: "PawnW",
    },
  });

  const [draggedPiece, setDraggedPiece] = useState(null);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const indexRow = 8;
  const getColumnLetter = (index) => {
    return String.fromCharCode(97 + index);
  };

  const handleDragStart = (position) => {
    const piece = boardState[position];
    if (piece) {
      setDraggedPiece({ position, piece });
      const possibleMoves = checkPossibleMoves(piece, position);
      setPossibleMoves(possibleMoves);
    }
  };

  const handleDrop = (targetPosition) => {
    if (!draggedPiece) return;
    if (possibleMoves.includes(targetPosition)) {
      setBoardState((prev) => ({
        ...prev,
        [draggedPiece.position]: undefined,
        [targetPosition]: draggedPiece.piece,
      }));
    }
    setDraggedPiece(null);
  };

  return (
    <div className="game-board">
      {Array.from({ length: indexRow }, (_, index) => (
        <div className={`row row-${indexRow - index}`} key={`row-${index}`}>
          <span className="row-number">{indexRow - index}</span>
          {Array.from({ length: indexRow }, (_, colIndex) => {
            const position = `${indexRow - index}${getColumnLetter(colIndex)}`;
            return (
              <Square
                key={`square-${position}`}
                row={indexRow - index}
                col={getColumnLetter(colIndex)}
                piece={boardState[position]}
                onDragStart={() => handleDragStart(position)}
                onDrop={() => handleDrop(position)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
