export class Node {
  constructor(coord = null, predecessors = []) {
    this.position = coord;
    this.predecessors = predecessors;
  }
}
