import './styles.css';
import { Node } from './Node';

function getMoves(coord, prevMoves = []) {
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

  // find all possible moves,
  // keep moves that are on the board,
  // then remove moves that have already been visited
  const possibleMoves = coordChanges
    .map((change) => [coord[0] + change[0], coord[1] + change[1]])
    .filter((pair) => {
      const x = pair[0];
      const y = pair[1];
      if (x >= 0 && x <= 7 && y >= 0 && y <= 7) return pair;
      return false;
    })
    .filter((pair) => {
      const isVisited = prevMoves.find(
        (element) => element[0] === pair[0] && element[1] === pair[1],
      );
      if (isVisited) return false;
      return true;
    });
  return possibleMoves;
}

/**
 * given startting coord, build tree with possible moves.
 * each node is an obj containing `coord ` for `data` key and
 * a `arr` for `moves` key. The `arr` is an arr of possible moves
 * for the `coord` value.
 */
function buildTree(coord) {}

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

// console.log(buildTree([0, 0]));
console.log(getMoves([0, 0], [[2, 1]]));
