function magicSquare(grid) {
  for (let i = 0; i < 3; i++) {
    let sumRow = grid[i * 3] + grid[i * 3 + 1] + grid[i * 3 + 2];
    if (sumRow !== 15) {
      return false;
    }
    let sumCol = grid[i] + grid[i + 3] + grid[i + 6];
    if (sumCol !== 15) {
      return false;
    }
  }
  let firstDiagSum = grid[0] + grid[4] + grid[8];
  if (firstDiagSum !== 15) {
    return false;
  }
  let seconsDiagSum = grid[2] + grid[4] + grid[6];
  if (seconsDiagSum !== 15) {
    return false;
  }
  return true;
}
console.log(magicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2]));
console.log(magicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8]));
console.log(magicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2]));
console.log(magicSquare([8, 1, 6, 7, 5, 3, 4, 9, 2]));
