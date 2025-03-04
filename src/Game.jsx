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

const setupPiecesWhite = (data) => {
  const pieces = {};
  data.player1.pieces.forEach((piece) => {
    pieces[piece.position] = piece;
    switch (piece.type) {
      case "king":
        pieces[piece.position].src = kingW;
        pieces[piece.position].color = "white";
        break;
      case "queen":
        pieces[piece.position].src = queenW;
        pieces[piece.position].color = "white";
        break;
      case "rook":
        pieces[piece.position].src = rookW;
        pieces[piece.position].color = "white";
        break;
      case "bishop":
        pieces[piece.position].src = bishopW;
        pieces[piece.position].color = "white";
        break;
      case "knight":
        pieces[piece.position].src = knightW;
        pieces[piece.position].color = "white";
        break;
      case "pawn":
        pieces[piece.position].src = pawnW;
        pieces[piece.position].color = "white";
        break;
    }
  });
  data.player2.pieces.forEach((piece) => {
    pieces[piece.position] = piece;
    switch (piece.type) {
      case "king":
        pieces[piece.position].src = kingB;
        pieces[piece.position].color = "black";
        break;
      case "queen":
        pieces[piece.position].src = queenB;
        pieces[piece.position].color = "black";
        break;
      case "rook":
        pieces[piece.position].src = rookB;
        pieces[piece.position].color = "black";
        break;
      case "bishop":
        pieces[piece.position].src = bishopB;
        pieces[piece.position].color = "black";
        break;
      case "knight":
        pieces[piece.position].src = knightB;
        pieces[piece.position].color = "black";
        break;
      case "pawn":
        pieces[piece.position].src = pawnB;
        pieces[piece.position].color = "black";
        break;
    }
  });
  return pieces;
};

const setupPiecesBlack = (data) => {
  const pieces = {};
  data.player1.pieces.forEach((piece) => {
    pieces[piece.position] = piece;
    switch (piece.type) {
      case "king":
        pieces[piece.position].src = kingB;
        pieces[piece.position].color = "black";
        break;
      case "queen":
        pieces[piece.position].src = queenB;
        pieces[piece.position].color = "black";
        break;
      case "rook":
        pieces[piece.position].src = rookB;
        pieces[piece.position].color = "black";
        break;
      case "bishop":
        pieces[piece.position].src = bishopB;
        pieces[piece.position].color = "black";
        break;
      case "knight":
        pieces[piece.position].src = knightB;
        pieces[piece.position].color = "black";
        break;
      case "pawn":
        pieces[piece.position].src = pawnB;
        pieces[piece.position].color = "black";
        break;
    }
  });
  data.player2.pieces.forEach((piece) => {
    pieces[piece.position] = piece;
    switch (piece.type) {
      case "king":
        pieces[piece.position].src = kingW;
        pieces[piece.position].color = "white";
        break;
      case "queen":
        pieces[piece.position].src = queenW;
        pieces[piece.position].color = "white";
        break;
      case "rook":
        pieces[piece.position].src = rookW;
        pieces[piece.position].color = "white";
        break;
      case "bishop":
        pieces[piece.position].src = bishopW;
        pieces[piece.position].color = "white";
        break;
      case "knight":
        pieces[piece.position].src = knightW;
        pieces[piece.position].color = "white";
        break;
      case "pawn":
        pieces[piece.position].src = pawnW;
        pieces[piece.position].color = "white";
        break;
    }
  });
  return pieces;
};

const Game = () => {
  const [gameStart, setGameStart] = useState(false);
  const [startOptions, setStartOptions] = useState(false);
  const [isPlaying, setIsPlaying] = useState({});
  const [Player1, setPlayer1] = useState({});
  const [Player2, setPlayer2] = useState({});
  const [boardState, setBoardState] = useState({});
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [opponentPieces, setOpponentPieces] = useState([]);

  const handleStartOptions = () => {
    setStartOptions(true);
  };

  const handleColorSelected = (e) => {
    const selectedColor = e.target.value;
    let newPlayer1Pieces;
    if (selectedColor === "white") {
      newPlayer1Pieces = setupPiecesWhite(data);
      setPlayer1({
        color: "white",
        name: "Player 1",
      });
      setPlayer2({
        color: "black",
        name: "Player 2",
      });
      setIsPlaying({
        color: "white",
        type: "player1",
      });
    } else {
      newPlayer1Pieces = setupPiecesBlack(data);
      setPlayer1({
        color: "black",
        name: "Player 1",
      });
      setPlayer2({
        color: "white",
        name: "Player 2",
      });
      setIsPlaying({
        color: "white",
        type: "player2",
      });
    }

    setBoardState({ ...newPlayer1Pieces });
    setGameStart(true);
    setStartOptions(false);
  };

  return (
    <div className="game-container">
      <div className="game-info-container">
        {gameStart && (
          <GameInfo player1={Player1} player2={Player2} isPlaying={isPlaying} />
        )}
      </div>
      <div className="game">
        <GameBoard
          boardState={boardState}
          setBoardState={setBoardState}
          possibleMoves={possibleMoves}
          setPossibleMoves={setPossibleMoves}
          opponentPieces={opponentPieces}
          setOpponentPieces={setOpponentPieces}
          gameStarted={gameStart}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          Player1={Player1}
        />

        <div className="start-button-container">
          <button className="start-button" onClick={handleStartOptions}>
            Start
          </button>
        </div>

        {startOptions && (
          <FormGameStart handleColorSelected={handleColorSelected} />
        )}
      </div>
      <div className="clock">
        <div className="clock-container">
          <div className="clock-time">00:00</div>
          <div className="clock-button">Start</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
