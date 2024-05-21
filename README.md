# knight_move

The goal of the project is to show the shortest path for a knight to move from one square of the chessboard to another, displaying all the squares where the knight will stop along the way

![1](https://github.com/Kotovar/knight_move/assets/77914431/a39ccd4d-669a-49a9-8147-7eaaf7a1c8fb)


## How to use

Open the file, open the console and run: node script.js

## How it works

`1.` This code creates a visited array, which stores information for each vertex about whether it has already been visited.

`2.` It creates a board array in which for each vertex a reference to the parent vertex is stored.

`3.` It adds the initial vertex to the queue.

`4.` While the queue is not empty:

`4.1` It removes the vertex from the queue.

`4.2` If the vertex is the end vertex, it returns the path from the start vertex to the end vertex.

`4.3` For each adjacent vertex:

`4.3.1` If the vertex has not yet been visited:

`4.3.2` It marks the vertex as visited.

`4.3.3` It sets a reference to the parent node for that node.

`4.3.4` It adds an adjacent vertex to the queue.

When the code finds an end vertex, it reconstructs the path from the start vertex to the end vertex by following references to the parent vertices.

## Credits
This project was inspired by [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails), which is an open source curriculum for learning web development.
