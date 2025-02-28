import { useEffect } from "react";
import { useState } from "react";
import Square from "./Square";

const Game = () => {
  const [whitePlayer, setWhitePlayer] = useState("Player 1");
  const [blackPlayer, setBlackPlayer] = useState("Player 2");
  const [gameStart, setGameStart] = useState(false);
  const [startOptions, setStartOptions] = useState(false);

  const handleStartOptions = () => {
    setStartOptions(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGameStart(true);
    setStartOptions(false);
  };

  const indexRow = 8;

  const getColumnLetter = (index) => {
    return String.fromCharCode(97 + index); // 97 est le code ASCII pour 'a'
  };

  return (
    <div className="game">
      {gameStart && (
        <div className="game-info">
          <div className="players-info">
            <h2>{whitePlayer}</h2>
            <h2>{blackPlayer}</h2>
          </div>
        </div>
      )}
      <div className="game-board">
        {Array.from({ length: indexRow }, (_, index) => (
          <div className={`row row-${indexRow - index}`} key={`row-${index}`}>
            {Array.from({ length: indexRow }, (_, colIndex) => (
              <Square
                key={`square-${getColumnLetter(colIndex)}${indexRow - index}`}
                row={indexRow - index}
                col={getColumnLetter(colIndex)}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="start-button-container">
        <button className="start-button" onClick={handleStartOptions}>
          Start
        </button>
      </div>

      {startOptions && (
        <form className="start-options">
          <div>
            <label htmlFor="white-player">
              White Player
              <input
                onChange={(e) => setWhitePlayer(e.target.value)}
                className="name-player"
                type="text"
                name="white-player"
              />
            </label>
            <label htmlFor="black-player">
              Black Player
              <input
                onChange={(e) => setBlackPlayer(e.target.value)}
                className="name-player"
                type="text"
                name="black-player"
              />
            </label>
            <button type="submit" onClick={handleSubmit}>
              Start
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Game;
