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
import { useState, memo } from "react";

const GameBoard = () => {
  const [boardState, setBoardState] = useState({
    "8e": KingB,
    "8d": QueenB,
    "8a": RookB,
    "8h": RookB,
    "8b": KnightB,
    "8g": KnightB,
    "8c": BishopB,
    "8f": BishopB,
    "1e": KingW,
    "1d": QueenW,
    "1a": RookW,
    "1h": RookW,
    "1b": KnightW,
    "1g": KnightW,
    "1c": BishopW,
    "1f": BishopW,
    "7a": PawnB,
    "7b": PawnB,
    "7c": PawnB,
    "7d": PawnB,
    "7e": PawnB,
    "7f": PawnB,
    "7g": PawnB,
    "7h": PawnB,
    "2a": PawnW,
    "2b": PawnW,
    "2c": PawnW,
    "2d": PawnW,
    "2e": PawnW,
    "2f": PawnW,
    "2g": PawnW,
    "2h": PawnW,
  });

  const [draggedPiece, setDraggedPiece] = useState(null);

  const indexRow = 8;
  const getColumnLetter = (index) => {
    return String.fromCharCode(97 + index);
  };

  const handleDragStart = (position) => {
    const piece = boardState[position];
    if (piece) {
      setDraggedPiece({ position, piece });
    }
  };

  const handleDrop = (targetPosition) => {
    if (!draggedPiece) return;

    setBoardState((prev) => ({
      ...prev,
      [draggedPiece.position]: undefined,
      [targetPosition]: draggedPiece.piece,
    }));

    setDraggedPiece(null);
  };

  return (
    <div className="game-board">
      {Array.from({ length: indexRow }, (_, index) => (
        <div className={`row row-${indexRow - index}`} key={`row-${index}`}>
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

export default memo(GameBoard);
