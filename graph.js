const Queue = require('./queue.js')
module.exports = class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    var getKeys = this.AdjList.keys();
    for (var i of getKeys) {
      var getValues = this.AdjList.get(i);
      var conc = "";
      for (var j of getValues) {
        conc += j + " ";
      }
      console.log(i + " -> " + conc);
    }
  }

  dfs(startingNode) {
    var visited = [];
    for (var i in this.noOfVertices) {
      visited[i] = false;
    }
    this.DFSutil(startingNode, visited);
  }
  DFSutil(vert, visited) {
    visited[vert] = true;
    var getNeighbours = this.AdjList.get(vert);
    for (var i in getNeighbours) {
      var getElem = getNeighbours[i];
      // ending condition for recursion
      if (!visited[getElem]) {
        this.DFSutil(getElem, visited)
      }
    }
  }

  bfs(startingNode) {
    var visited = [];
    for (var i in this.noOfVertices) {
      visited[i] = false;
    }
    this.BFSutil(startingNode, visited);
  }

  BFSutil(vert, visited) {
    visited[vert] = true;
    var q = new Queue();
    q.enqueue(vert);
    while (!q.isEmpty()) {
      var getQueueElem = q.dequeue();
      console.log("get queue elem => ",getQueueElem)
      var getList = this.AdjList.get(getQueueElem);
      for (var i in getList) {
        var neighbour = getList[i];
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          q.enqueue(neighbour);
        }
      }
    }
  }
}



