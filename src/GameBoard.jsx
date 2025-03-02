import Square from "./Square";
import { useState } from "react";
import {
  checkPossibleMoves,
  getColumnLetter,
} from "./logic/checkPossibleMoves";

const GameBoard = ({
  boardState,
  setBoardState,
  possibleMoves,
  setPossibleMoves,
  opponentPieces,
  setOpponentPieces,
}) => {
  const [draggedPiece, setDraggedPiece] = useState(null);
  const indexRow = 8;

  const handleDragStart = (position) => {
    const piece = boardState[position];
    if (piece) {
      setDraggedPiece({ position: piece.position, piece: piece });
      const { possibleMoves, opponentPieces } = checkPossibleMoves(
        piece,
        position,
        boardState,
      );
      setPossibleMoves(possibleMoves);
      setOpponentPieces(opponentPieces);
    }
  };

  const handleDrop = (targetPosition) => {
    if (!draggedPiece) return;
    if (possibleMoves.includes(targetPosition)) {
      const updatedPiece = {
        ...draggedPiece.piece,
        position: targetPosition,
      };

      setBoardState((prev) => ({
        ...prev,
        [draggedPiece.position]: undefined,
        [targetPosition]: updatedPiece,
      }));
    }
    setDraggedPiece(null);
    setPossibleMoves([]);
    setOpponentPieces([]);
  };

  const handleDragOver = (position) => {};

  const handlePossibleMoves = (position) => {
    return possibleMoves.includes(position);
  };

  const handleOpponentPieces = (position) => {
    return opponentPieces.includes(position);
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
                onDragOver={() => handleDragOver(position)}
                possibleMoves={handlePossibleMoves(position)}
                opponentPieces={handleOpponentPieces(position)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
