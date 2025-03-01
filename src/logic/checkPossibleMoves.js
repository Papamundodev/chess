export const checkPossibleMoves = (piece, position) => {
  switch (piece.type) {
    case "pawn":
      return piece.color === "white"
        ? pawnWPossibleMoves(position)
        : pawnBPossibleMoves(position);
    case "rook":
      return rookPossibleMoves(position);
    case "knight":
      return knightPossibleMoves(position);
    case "bishop":
      return bishopPossibleMoves(position);
    case "queen":
      return queenPossibleMoves(position);
    case "king":
      return kingPossibleMoves(position);
    default:
      return [];
  }
};

const pawnWPossibleMoves = (position) => {
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);

  // Mouvement normal d'une case
  possibleMoves.push(`${currentRow + 1}${col}`);

  // Premier mouvement possible de deux cases
  if (currentRow === 2) {
    possibleMoves.push(`${currentRow + 2}${col}`);
  }

  return possibleMoves;
};

const pawnBPossibleMoves = (position) => {
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);

  // Mouvement normal d'une case
  possibleMoves.push(`${currentRow - 1}${col}`);

  // Premier mouvement possible de deux cases
  if (currentRow === 7) {
    possibleMoves.push(`${currentRow - 2}${col}`);
  }

  return possibleMoves;
};

const rookPossibleMoves = (position) => {
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);
  const currentCol = col.charCodeAt(0) - 97; // Convertit a-h en 0-7

  // Mouvements horizontaux
  for (let c = 0; c < 8; c++) {
    if (c !== currentCol) {
      possibleMoves.push(`${currentRow}${String.fromCharCode(97 + c)}`);
    }
  }

  // Mouvements verticaux
  for (let r = 1; r <= 8; r++) {
    if (r !== currentRow) {
      possibleMoves.push(`${r}${col}`);
    }
  }

  return possibleMoves;
};

const knightPossibleMoves = (position) => {
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);
  const currentCol = col.charCodeAt(0) - 97;

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
      possibleMoves.push(`${newRow}${String.fromCharCode(97 + newCol)}`);
    }
  });

  return possibleMoves;
};

const bishopPossibleMoves = (position) => {
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);
  const currentCol = col.charCodeAt(0) - 97;

  // Diagonales
  for (let i = 1; i <= 7; i++) {
    // Haut-droite
    if (currentRow + i <= 8 && currentCol + i < 8) {
      possibleMoves.push(
        `${currentRow + i}${String.fromCharCode(97 + currentCol + i)}`,
      );
    }
    // Haut-gauche
    if (currentRow + i <= 8 && currentCol - i >= 0) {
      possibleMoves.push(
        `${currentRow + i}${String.fromCharCode(97 + currentCol - i)}`,
      );
    }
    // Bas-droite
    if (currentRow - i >= 1 && currentCol + i < 8) {
      possibleMoves.push(
        `${currentRow - i}${String.fromCharCode(97 + currentCol + i)}`,
      );
    }
    // Bas-gauche
    if (currentRow - i >= 1 && currentCol - i >= 0) {
      possibleMoves.push(
        `${currentRow - i}${String.fromCharCode(97 + currentCol - i)}`,
      );
    }
  }

  return possibleMoves;
};

const queenPossibleMoves = (position) => {
  // La reine combine les mouvements de la tour et du fou
  return [...rookPossibleMoves(position), ...bishopPossibleMoves(position)];
};

const kingPossibleMoves = (position) => {
  const possibleMoves = [];
  const [row, col] = position.split("");
  const currentRow = parseInt(row);
  const currentCol = col.charCodeAt(0) - 97;

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
      possibleMoves.push(`${newRow}${String.fromCharCode(97 + newCol)}`);
    }
  });

  return possibleMoves;
};
