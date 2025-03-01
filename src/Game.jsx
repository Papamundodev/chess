import { useState } from "react";
import FormGameStart from "./FormGameStart";
import GameInfo from "./GameInfo";
import GameBoard from "./GameBoard";

const Game = () => {
  const [gameStart, setGameStart] = useState(false);
  const [startOptions, setStartOptions] = useState(false);
  const [whitePlayer, setWhitePlayer] = useState("Player 1");
  const [blackPlayer, setBlackPlayer] = useState("Player 2");

  const handleStartOptions = () => {
    setStartOptions(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGameStart(true);
    setStartOptions(false);
  };

  const handleChangeWhitePlayer = (e) => {
    setWhitePlayer(e.target.value);
  };

  const handleChangeBlackPlayer = (e) => {
    setBlackPlayer(e.target.value);
  };

  return (
    <div className="game">
      {gameStart && (
        <GameInfo whitePlayer={whitePlayer} blackPlayer={blackPlayer} />
      )}

      <GameBoard />

      <div className="start-button-container">
        <button className="start-button" onClick={handleStartOptions}>
          Start
        </button>
      </div>

      {startOptions && (
        <FormGameStart
          handleSubmit={handleSubmit}
          handleChangeWhitePlayer={handleChangeWhitePlayer}
          handleChangeBlackPlayer={handleChangeBlackPlayer}
        />
      )}
    </div>
  );
};

export default Game;
