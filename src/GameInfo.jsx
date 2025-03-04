const GameInfo = ({ player1, player2, isPlaying }) => {
  return (
    <div className="game-info">
      <div className="player-info">
        <h2>{player2.name}</h2>
        <span>{player2.color}</span>
        <span>{isPlaying.color === player2.color ? "playing" : "waiting"}</span>
      </div>
      <div className="player-info">
        <h2>{player1.name}</h2>
        <span>{player1.color}</span>
        <span>{isPlaying.color === player1.color ? "playing" : "waiting"}</span>
      </div>
    </div>
  );
};

export default GameInfo;
