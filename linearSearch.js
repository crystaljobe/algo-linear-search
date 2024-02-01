function linearSearch(searchTerm, arr) {
  if (arr.indexOf(searchTerm) === -1) {
    return undefined;
  } else {
    return arr.indexOf(searchTerm);
  }
}

function globalLinearSearch(searchTerm, arr) {
  let indexArr = [];
  let currIndex = arr.indexOf(searchTerm);
  
  while (currIndex !== -1) {
    indexArr.push(currIndex);
    currIndex = arr.indexOf(searchTerm, currIndex + 1);
  }

  return indexArr.length > 0 ? indexArr : undefined;
}

module.exports = { linearSearch, globalLinearSearch };
