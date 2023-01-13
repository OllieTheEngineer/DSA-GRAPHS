class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let i = 0; i < vertexArray.length; i++){
      this.nodes.add(vertexArray[i]);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    this.adjacent(v1).delete(v2);
    this.adjacent(v2).delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    if(!this.adjacent[vertex]) return;

    for(let adjacentVertex of this.adjacent[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacent[vertex];
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let visited = new Set();
    let result = [];

    const search = (node) => {
      visited.add(node);
      result.push(node);

      let neighbors = this.adjacent.get(node);
      for(let i = 0; i < neighbors.length; i++){
        let neighbor = neighbors[i];
        if(!visited.has(neighbor)){
          search(neighbor);
        }
      }
    }
    search(start);
    return result;
  }

  // this function returns an array of Node values using BFS
  // breadthFirstSearch(start) {
  //   let queue = [start];
  //   let visited = new Set();
  //   let result = [];

  //   while(queue.lenght > 0){
  //     let currNode = queue.shift();
  //     if(visited.has(currNode))
  //   }

  // }
}

module.exports = {Graph, Node}