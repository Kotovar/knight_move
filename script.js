function knightMoves(start, finish) {
  const moves = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];

  const visited = new Array(8).fill(false).map(() => new Array(8).fill(false));

  const board = new Array(8).fill(null).map(() => new Array(8).fill(null));

  const queue = [start];

  visited[start[0]][start[1]] = true;

  while (queue.length) {
    const current = queue.shift();
    if (current[0] === finish[0] && current[1] === finish[1]) {
      const path = [];
      let curr = finish;
      while (curr) {
        path.push(curr);
        curr = board[curr[0]][curr[1]];
      }
      path.reverse();
      console.log(
        `You made it in ${path.length} moves from ${start} to ${finish}  Here's your path:`
      );
      for (const arr of path) {
        console.log(`[${arr}]`);
      }
      return path;
    }
    for (const [x, y] of moves) {
      const nx = current[0] + x;
      const ny = current[1] + y;
      if (0 <= nx && nx < 8 && 0 <= ny && ny < 8 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        board[nx][ny] = current;
        queue.push([nx, ny]);
      }
    }
  }
}

knightMoves([0, 0], [5, 6]);
