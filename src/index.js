module.exports = function towelSort(matrix) {
  const result = [];
  if (!matrix) return [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      if (matrix[i])
        for (let j = 0; j < matrix[i].length; j += 1) result.push(matrix[i][j]);
    } else if (matrix[i])
      for (let j = matrix[i].length - 1; j >= 0; j -= 1)
        result.push(matrix[i][j]);
  }
  return result;
};
