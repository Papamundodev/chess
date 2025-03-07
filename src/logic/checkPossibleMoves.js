export const checkPossibleMoves = (piece, position, boardState, isPlaying) => {
  let possibleMoves = [];
  let opponentPieces = [];
  switch (piece.type) {
    case "pawn":
      possibleMoves =
        isPlaying.type === "player1"
          ? pawnPlayerOnePossibleMoves(position, boardState, isPlaying)
          : pawnPlayerTwoPossibleMoves(position, boardState, isPlaying);
      break;
    case "rook":
      possibleMoves = rookPossibleMoves(position, boardState);
      break;
    case "knight":
      possibleMoves = knightPossibleMoves(position);
      break;
    case "bishop":
      possibleMoves = bishopPossibleMoves(position, boardState);
      break;
    case "queen":
      possibleMoves = queenPossibleMoves(position, boardState);
      break;
    case "king":
      possibleMoves = kingPossibleMoves(position);
      break;
    default:
      return [];
  }

  // Filtrer les mouvements en fonction de la couleur
  switch (piece.color) {
    case "white":
      possibleMoves = possibleMoves.filter(
        (move) => !boardState[move] || boardState[move].color === "black",
      );
      opponentPieces = possibleMoves.filter(
        (move) => boardState[move]?.color === "black",
      );
      break;
    case "black":
      possibleMoves = possibleMoves.filter(
        (move) => !boardState[move] || boardState[move].color === "white",
      );
      opponentPieces = possibleMoves.filter(
        (move) => boardState[move]?.color === "white",
      );
      break;
    default:
      return [];
  }

  return { possibleMoves, opponentPieces };
};

const pawnPlayerOnePossibleMoves = (position, boardState, isPlaying) => {
  console.log(isPlaying);
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);
  const currentCol = letterToNumber(col);

  console.log(
    boardState[`${currentRow + 1}${numberToLetter(currentCol + 1)}`]?.color,
  );
  // player one move
  //eat
  if (
    isOppositeColor(
      boardState[`${currentRow + 1}${numberToLetter(currentCol + 1)}`]?.color,
    ) === isPlaying.color
  ) {
    possibleMoves.push(`${currentRow + 1}${numberToLetter(currentCol + 1)}`);
  }
  if (
    isOppositeColor(
      boardState[`${currentRow + 1}${numberToLetter(currentCol - 1)}`]?.color,
    ) === isPlaying.color
  ) {
    possibleMoves.push(`${currentRow + 1}${numberToLetter(currentCol - 1)}`);
  }

  //move
  if (!boardState[`${currentRow + 1}${numberToLetter(currentCol)}`]) {
    possibleMoves.push(`${currentRow + 1}${numberToLetter(currentCol)}`);
  }

  // Premier mouvement possible de deux cases
  if (
    currentRow === 2 &&
    !boardState[`${currentRow + 2}${numberToLetter(currentCol)}`]
  ) {
    possibleMoves.push(`${currentRow + 2}${numberToLetter(currentCol)}`);
  }

  return possibleMoves;
};

const pawnPlayerTwoPossibleMoves = (position, boardState, isPlaying) => {
  console.log(isPlaying);

  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);
  const currentCol = letterToNumber(col);

  //eat
  if (
    isOppositeColor(
      boardState[`${currentRow - 1}${numberToLetter(currentCol - 1)}`]?.color,
    ) === isPlaying.color
  ) {
    possibleMoves.push(`${currentRow - 1}${numberToLetter(currentCol - 1)}`);
  }
  if (
    isOppositeColor(
      boardState[`${currentRow - 1}${numberToLetter(currentCol + 1)}`]?.color,
    ) === isPlaying.color
  ) {
    possibleMoves.push(`${currentRow - 1}${numberToLetter(currentCol + 1)}`);
  }

  //move
  if (!boardState[`${currentRow - 1}${numberToLetter(currentCol)}`]) {
    possibleMoves.push(`${currentRow - 1}${numberToLetter(currentCol)}`);
  }
  // Premier mouvement possible de deux cases
  if (currentRow === 7) {
    possibleMoves.push(`${currentRow - 2}${numberToLetter(currentCol)}`);
  }

  return possibleMoves;
};

const rookPossibleMoves = (position, boardState) => {
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);
  const currentCol = letterToNumber(col);

  // Directions : droite, gauche, haut, bas
  const directions = [
    [0, 1], // droite
    [0, -1], // gauche
    [-1, 0], // haut
    [1, 0], // bas
  ];

  directions.forEach(([rowDir, colDir]) => {
    let newRow = currentRow;
    let newCol = currentCol;

    while (true) {
      newRow += rowDir;
      newCol += colDir;

      // Vérifier si on est toujours sur l'échiquier
      if (newRow < 1 || newRow > 8 || newCol < 0 || newCol >= 8) {
        break;
      }

      const newPosition = `${newRow}${numberToLetter(newCol)}`;

      // Si on trouve une pièce
      if (boardState[newPosition]) {
        // On ajoute la position si c'est une pièce adverse (la capture est possible)
        possibleMoves.push(newPosition);
        break; // On arrête dans cette direction
      }

      // Sinon, on ajoute la case vide et on continue
      possibleMoves.push(newPosition);
    }
  });

  return possibleMoves;
};

const knightPossibleMoves = (position) => {
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);
  const currentCol = letterToNumber(col);

  // Tous les mouvements possibles du cavalier (en L)
  const moves = [
    [-2, -1],
    [-2, 1], // Haut
    [2, -1],
    [2, 1], // Bas
    [-1, -2],
    [1, -2], // Gauche
    [-1, 2],
    [1, 2], // Droite
  ];

  moves.forEach(([rowOffset, colOffset]) => {
    const newRow = currentRow + rowOffset;
    const newCol = currentCol + colOffset;

    if (newRow >= 1 && newRow <= 8 && newCol >= 0 && newCol < 8) {
      possibleMoves.push(`${newRow}${numberToLetter(newCol)}`);
    }
  });

  return possibleMoves;
};

const bishopPossibleMoves = (position, boardState) => {
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);
  const currentCol = letterToNumber(col);

  // Directions diagonales : haut-droite, haut-gauche, bas-droite, bas-gauche
  const directions = [
    [-1, 1], // haut-droite
    [-1, -1], // haut-gauche
    [1, 1], // bas-droite
    [1, -1], // bas-gauche
  ];

  directions.forEach(([rowDir, colDir]) => {
    let newRow = currentRow;
    let newCol = currentCol;

    while (true) {
      newRow += rowDir;
      newCol += colDir;

      // Vérifier si on est toujours sur l'échiquier
      if (newRow < 1 || newRow > 8 || newCol < 0 || newCol >= 8) {
        break;
      }

      const newPosition = `${newRow}${numberToLetter(newCol)}`;

      // Si on trouve une pièce
      if (boardState[newPosition]) {
        // On ajoute la position si c'est une pièce adverse (la capture est possible)
        possibleMoves.push(newPosition);
        break; // On arrête dans cette direction
      }

      // Sinon, on ajoute la case vide et on continue
      possibleMoves.push(newPosition);
    }
  });

  return possibleMoves;
};

const queenPossibleMoves = (position, boardState) => {
  // La reine combine les mouvements de la tour et du fou
  return [
    ...rookPossibleMoves(position, boardState),
    ...bishopPossibleMoves(position, boardState),
  ];
};

const kingPossibleMoves = (position) => {
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);
  const currentCol = letterToNumber(col);

  // Tous les mouvements possibles du roi (1 case dans toutes les directions)
  const moves = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  moves.forEach(([rowOffset, colOffset]) => {
    const newRow = currentRow + rowOffset;
    const newCol = currentCol + colOffset;

    if (newRow >= 1 && newRow <= 8 && newCol >= 0 && newCol < 8) {
      possibleMoves.push(`${newRow}${numberToLetter(newCol)}`);
    }
  });

  return possibleMoves;
};

export const numberToLetter = (index) => {
  return String.fromCharCode(97 + index);
};

export const letterToNumber = (letter) => {
  return letter.charCodeAt(0) - 97;
};

export const checkIfpossibleMoveOtherPiece = (position, boardState) => {
  if (boardState[position]) {
    console.log(boardState[position]);
    return true;
  }
  return false;
};

const isOppositeColor = (color) => {
  if (color === undefined) {
    return false;
  }
  if (color === "white") {
    return "black";
  }
  if (color === "black") {
    return "white";
  }
};

//add miliseconds
export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const remainingMilliseconds = Math.floor((seconds % 1) * 100);

  if (seconds <= 5 && seconds > 0.0) {
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}:${remainingMilliseconds.toString().padStart(2, "0")}`;
  }
  if (seconds === 0.0) {
    return "Game Over";
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};
