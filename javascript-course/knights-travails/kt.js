function knightMoves(start, end) {
    // Validate input positions
    if (!isValidCoordinate(start) || !isValidCoordinate(end)) {
      return "Invalid input positions";
    }
  
    // Define possible knight moves
    const moves = [
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
    ];
  
    // Create a 2D array to represent the chessboard
    const chessboard = Array.from({ length: 8 }, () => Array(8).fill(false));
  
    // Initialize the starting position on the chessboard
    chessboard[start[1]][start[0]] = true;
  
    // Create a queue for BFS (Breadth-First Search)
    const queue = [{ x: start[0], y: start[1], path: [start] }];
  
    while (queue.length > 0) {
      const { x, y, path } = queue.shift();
  
      for (const move of moves) {
        const newX = x + move[0];
        const newY = y + move[1];
  
        if (isValidCoordinate([newX, newY]) && !chessboard[newY][newX]) {
          chessboard[newY][newX] = true;
  
          const newPath = [...path, [newX, newY]];
  
          if (newX === end[0] && newY === end[1]) {
            return newPath;
          }
  
          queue.push({ x: newX, y: newY, path: newPath });
        }
      }
    }
  
    // If no valid path is found
    return "No valid path found";
  }
  
  // Helper function to check if a coordinate is valid
  function isValidCoordinate(coord) {
    return (
      Array.isArray(coord) &&
      coord.length === 2 &&
      coord.every((value) => Number.isInteger(value) && value >= 0 && value < 8)
    );
  }
  
  // Example usage (coordinates should be within the bounds of the board [0,0] - [7,7])
  const startCoordinate = [0, 0];
  const endCoordinate = [4, 3];
  const result = knightMoves(startCoordinate, endCoordinate);
  
  console.log(result);
  