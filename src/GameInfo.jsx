const GameInfo = ({ whitePlayer, blackPlayer }) => {
  return (
    <div className="game-info">
      <div className="player-info">
        <h2>{whitePlayer}</h2>
        <span>White</span>
      </div>
      <div className="player-info">
        <h2>{blackPlayer}</h2>
        <span>Black</span>
      </div>
    </div>
  );
};

export default GameInfo;
