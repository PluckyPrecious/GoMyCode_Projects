let vectors = [
  [7, 1, 1],
  [6, 0, 2],
  [5, 7, 0],
  [3, 1, 2],
  [2, 3, 8],
  [0, 0, 0],
];

function dotProduct(vector1, vector2) {
BEGIN
  let result = 0;
  for (let i = 0; i < vector1.length; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
};

for (let i = 0; i < vectors.length; i++) {
  for (let j = i + 1; j < vectors.length; j++) {
    if (dotProduct(vectors[i], vectors[j]) === 0) {
      console.log(`${vectors[i]} and ${vectors[j]} are orthogonal `);
    }
  }
}
END