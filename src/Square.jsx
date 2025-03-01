const Square = ({ row, col, piece }) => {
  console.log(row, col, piece);

  return (
    <div className={`square ${row}-${col}`}>
      <div className="square-content">
        <div className="square-content-piece">{piece}</div>
      </div>
    </div>
  );
};

export default Square;
