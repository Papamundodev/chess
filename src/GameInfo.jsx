import Clock from "./Clock";

const GameInfo = ({
  player1,
  player2,
  isPlaying,
  resetClock,
  setResetClock,
  baseTime,
  onGameOver,
  gameOver,
}) => {
  return (
    <div className="game-info">
      <div className="player-info">
        <h2>{player2.name}</h2>
        <span>{player2.color}</span>
        <span>{isPlaying.color === player2.color ? "playing" : "waiting"}</span>
        <Clock
          isClockRunning={isPlaying.type === "player2"}
          resetClock={resetClock}
          setResetClock={setResetClock}
          baseTime={baseTime}
          onGameOver={onGameOver}
          gameOver={gameOver}
          player={player2}
        />
      </div>
      <div className="game-over-container">
        <p>Game Over</p>
        {player1.name === gameOver && <p>{player2.name} wins</p>}
        {player2.name === gameOver && <p>{player1.name} wins</p>}
      </div>

      <div className="player-info">
        <h2>{player1.name}</h2>
        <span>{player1.color}</span>
        <span>{isPlaying.color === player1.color ? "playing" : "waiting"}</span>
        <Clock
          player={player1}
          isClockRunning={isPlaying.type === "player1"}
          resetClock={resetClock}
          setResetClock={setResetClock}
          baseTime={baseTime}
          onGameOver={onGameOver}
          gameOver={gameOver}
        />
      </div>
    </div>
  );
};

export default GameInfo;
