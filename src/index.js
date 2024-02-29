import './styles.css';

function getMoves(coordinateArr) {
  const coordChanges = [
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
  ];

  // apply changes to coordinates and keep
  // moves that are on the board
  const possibleMoves = coordChanges
    .map((change) => [
      coordinateArr[0] + change[0],
      coordinateArr[1] + change[1],
    ])
    .filter((coord) => {
      const x = coord[0];
      const y = coord[1];
      if (x >= 0 && x <= 7 && y >= 0 && y <= 7) return coord;
      return false;
    });
  return possibleMoves;
}

console.log(getMoves([0, 3]));
