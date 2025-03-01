import Piece from "./Piece";

const Square = ({ row, col, piece, onDragStart, onDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
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
      <div className="square-content">
        {piece && <Piece piece={piece} onDragStart={onDragStart} />}
      </div>
    </div>
  );
};

export default Square;
