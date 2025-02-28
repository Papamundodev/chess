const Square = ({ row, col }) => {
  return (
    <div className={`square ${row}-${col}`}>
      <div className="square-content">
        <div className="square-content-piece"></div>
      </div>
    </div>
  );
};

export default Square;
