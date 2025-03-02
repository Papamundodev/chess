import Piece from "./Piece";

const Square = ({
  row,
  col,
  piece,
  onDragStart,
  onDrop,
  onDragOver,
  possibleMoves,
  opponentPieces,
}) => {
  const handleDragOver = (e) => {
    e.preventDefault();
    onDragOver();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    onDrop();
  };

  return (
    <div
      className={`square ${row}-${col}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {row === 8 && <span className="square-letter">{col}</span>}
      <div
        className={`square-content ${possibleMoves ? "possible-move" : ""} ${
          opponentPieces ? "opponent-piece" : ""
        }`}
      >
        {piece && <Piece piece={piece} onDragStart={onDragStart} />}
      </div>
      {row === 1 && <span className="square-letter-reverse">{col}</span>}
    </div>
  );
};

export default Square;
