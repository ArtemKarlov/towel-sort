
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) { return [] };
  return matrix.reduce((result, elem, index) => {
    const element = (index % 2 === 0) ? elem : elem.reverse();
    return [...result, ...element]
  }, []);
}
