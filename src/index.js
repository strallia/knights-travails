import './styles.css';
import { Node } from './Node';

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

/**
 * given startting coord, build tree with possible moves.
 * each node is an obj containing `coord ` for `data` key and
 * a `arr` for `moves` key. The `arr` is an arr of possible moves
 * for the `coord` value.
 */
function buildTree(startCoord) {}

/**
 * given tree, traverses tree looking for shortest path.
 *
 */
function findShortestPath(tree) {}

/**
 * given start and end coord,
 * runs buildTree() then returns formatted result of findShortestPath()
 */
function knightMoves(stratCoord, endCoord) {}

console.log(buildTree([0, 0]));
