import { useState } from "react";
import FormGameStart from "./FormGameStart";
import GameInfo from "./GameInfo";
import GameBoard from "./GameBoard";
import data from "./data.json";
import kingW from "./assets/king-w.svg";
import queenW from "./assets/queen-w.svg";
import rookW from "./assets/rook-w.svg";
import bishopW from "./assets/bishop-w.svg";
import knightW from "./assets/knight-w.svg";
import pawnW from "./assets/pawn-w.svg";
import kingB from "./assets/king-b.svg";
import queenB from "./assets/queen-b.svg";
import rookB from "./assets/rook-b.svg";
import bishopB from "./assets/bishop-b.svg";
import knightB from "./assets/knight-b.svg";
import pawnB from "./assets/pawn-b.svg";

const piecesState = {};
data.whitePlayer.pieces.map((piece) => {
  piecesState[piece.position] = piece;
  switch (piece.type) {
    case "king":
      piecesState[piece.position].src = kingW;
      break;
    case "queen":
      piecesState[piece.position].src = queenW;
      break;
    case "rook":
      piecesState[piece.position].src = rookW;
      break;
    case "bishop":
      piecesState[piece.position].src = bishopW;
      break;
    case "knight":
      piecesState[piece.position].src = knightW;
      break;
    case "pawn":
      piecesState[piece.position].src = pawnW;
      break;
  }
});
data.blackPlayer.pieces.map((piece) => {
  piecesState[piece.position] = piece;
  switch (piece.type) {
    case "king":
      piecesState[piece.position].src = kingB;
      break;
    case "queen":
      piecesState[piece.position].src = queenB;
      break;
    case "rook":
      piecesState[piece.position].src = rookB;
      break;
    case "bishop":
      piecesState[piece.position].src = bishopB;
      break;
    case "knight":
      piecesState[piece.position].src = knightB;
      break;
    case "pawn":
      piecesState[piece.position].src = pawnB;
      break;
  }
});

const Game = () => {
  const [gameStart, setGameStart] = useState(false);
  const [startOptions, setStartOptions] = useState(false);
  const [whitePlayer, setWhitePlayer] = useState(data.whitePlayer);
  const [blackPlayer, setBlackPlayer] = useState(data.blackPlayer);
  const [boardState, setBoardState] = useState(piecesState);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [opponentPieces, setOpponentPieces] = useState([]);
  const handleStartOptions = () => {
    setStartOptions(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGameStart(true);
    setStartOptions(false);
  };

  const handleChangeWhitePlayer = (e) => {
    setWhitePlayer({ ...whitePlayer, name: e.target.value });
  };

  const handleChangeBlackPlayer = (e) => {
    setBlackPlayer({ ...blackPlayer, name: e.target.value });
  };

  return (
    <div className="game">
      {gameStart && (
        <GameInfo
          whitePlayer={whitePlayer.name}
          blackPlayer={blackPlayer.name}
        />
      )}

      <GameBoard
        boardState={boardState}
        setBoardState={setBoardState}
        possibleMoves={possibleMoves}
        setPossibleMoves={setPossibleMoves}
        opponentPieces={opponentPieces}
        setOpponentPieces={setOpponentPieces}
      />

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
