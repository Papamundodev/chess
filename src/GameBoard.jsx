import Square from "./Square";
import { useState } from "react";
import { checkPossibleMoves, numberToLetter } from "./logic/checkPossibleMoves";

const GameBoard = ({
  boardState,
  setBoardState,
  possibleMoves,
  setPossibleMoves,
  opponentPieces,
  setOpponentPieces,
  gameStarted,
  isPlaying,
  setIsPlaying,
  Player1,
}) => {
  const [draggedPiece, setDraggedPiece] = useState(null);

  const handleDragStart = (position) => {
    const piece = boardState[position];

    if (piece && gameStarted && isPlaying.color === piece.color) {
      setDraggedPiece({ position: piece.position, piece: piece });
      const { possibleMoves, opponentPieces } = checkPossibleMoves(
        piece,
        position,
        boardState,
        isPlaying,
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
      setIsPlaying(
        draggedPiece.piece.color === "white"
          ? {
              ...isPlaying,
              color: "black",
              type: isPlaying.type === "player1" ? "player2" : "player1",
            }
          : {
              ...isPlaying,
              color: "white",
              type: isPlaying.type === "player1" ? "player2" : "player1",
            },
      );
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

  const indexRow = 8;
  const indexCol = 7;
  const indexColReverse = 0;
  let col;
  return (
    <div className="game-board">
      {[...Array(indexRow)].map((_, index) => (
        <div className={`row row-${indexRow - index}`} key={`row-${index}`}>
          <span className="row-number">{indexRow - index}</span>

          {[...Array(indexRow)].map((_, colIndex) => {
            if (Player1.color === "white") {
              col = numberToLetter(indexColReverse + colIndex);
            } else {
              col = numberToLetter(indexCol - colIndex);
            }
            const position = `${indexRow - index}${col}`;
            return (
              <Square
                key={`square-${position}`}
                row={indexRow - index}
                col={col}
                piece={boardState[position]}
                onDragStart={() => handleDragStart(position)}
                onDrop={() => handleDrop(position)}
                onDragOver={() => handleDragOver(position)}
                possibleMoves={handlePossibleMoves(position)}
                opponentPieces={handleOpponentPieces(position)}
              />
            );
          })}
          <span className="row-number-reverse">{indexRow - index}</span>
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
