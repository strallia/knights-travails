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

// given start and end coordinate, returns string declaring
// number of moves and coordinates taken for the shortest path
function knightMoves(startCoord, endCoord) {
  const q = [new Node(startCoord)];
  let node;

  while (q.length > 0) {
    // dequeue and visit first node
    node = q.shift();
    const { position, predecessors } = node;

    // stop looping through queue if node position matches given end coordinate
    if (position[0] === endCoord[0] && position[1] === endCoord[1]) {
      break;
    }

    // else add children to queue and continue looping
    const childPredecessors = [...predecessors];
    childPredecessors.push(position);
    const childNodes = getMoves(position, predecessors);
    childNodes.forEach((childPosition) => {
      q.push(new Node(childPosition, childPredecessors));
    });
  }

  // format console return
  const path = [...node.predecessors, node.position];
  const pathString = path.map((move) => JSON.stringify(move)).join('\n');
  return `You made it in ${path.length - 1} moves! Here's your path:\n${pathString}`;
}

console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [7, 7]));
