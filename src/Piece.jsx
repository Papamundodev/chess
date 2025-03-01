import { useState } from "react";

const Piece = ({ piece, onDragStart }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
    onDragStart();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`piece ${isDragging ? "dragging" : ""}`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <img src={piece} alt="piece" />
    </div>
  );
};

export default Piece;
