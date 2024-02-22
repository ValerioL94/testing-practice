function analyzeArray(array) {
  const object = {
    average: average(array),
    min: min(array),
    max: max(array),
    length: length(array),
  };

  function average(array) {
    return Math.floor(
      array.reduce((total, num) => total + num, 0) / array.length
    );
  }
  function min(array) {
    let sorted = array.sort((a, b) => {
      return a - b;
    });
    return sorted[0];
  }
  function max(array) {
    let sorted = array.sort((a, b) => {
      return b - a;
    });
    return sorted[0];
  }
  function length(array) {
    return array.length;
  }
  return object;
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
